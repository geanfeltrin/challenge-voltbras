import { Context } from '../../context/db';
import PlanetAPI from '../../api/planetApi';
import { removeDuplicatesArrayOfObj, sortElements } from '../../utils';

type argsProps = { page: number };

export interface ContextProps extends Context {
  dataSources: {
    planetAPI: PlanetAPI;
  };
}

export default {
  // essa função ficou legal, só não curti muito o fato de ela estar fazendo MUITA caisa
  // dava pra ter separado ela em algumas funções. e essa chamada aqui ser responsável apenas por chamar essas funções
  // ex: fetchPlanets, filterSuitablePlanets
  suitablePlanets: async (
    _: unknown,
    { page }: argsProps,
    { dataSources, db }: ContextProps,
  ) => {
    const data = [];
    const pages = 10;
    const arrayPage = [...Array(pages).keys()].map(n => n + 1); // essa é uma forma daora de fazer um range em javascript :)

    try {
      if (page) {
        const dataWithPage = await dataSources.planetAPI.getPlanets(page);

        data.push(...dataWithPage.results);
      } else {
        const dataWithoutPage = await dataSources.planetAPI.getPlanetsManyPages(
          arrayPage,
        );

        data.push(...dataWithoutPage.flatMap(value => value.results));
      }

      // esse não ficou muito claro, parece mais um nome de uma função que vai filtrar os dados,
      // porém ela é o resultado dos dados filtrados
      const filterIsPossibleToInstallStation = data
        .filter(item => item.mass?.value > 25)
        .map(element => ({
          name: element.name,
          mass: element.mass.value,
          hasStation: false, // esse hasStation não precisava estar aqui
        }));

      const dataStation = await db.station.findMany();

      if (dataStation.length >= 1) {
        // acho que teriam algumas formas de fazer esse tratamento sem esses loops
        // mas mesmo seguindo sua lógica acredito que da pra melhorar um pouquinho

        // novamente nome não muito claro
        // const formatDataStation = dataStation.map(value => ({
        //   ...value,
        //   // hasStation: true,
        // }));

        // for (let station of formatDataStation) {
        //   for (let isPossibleToInstallStation of filterIsPossibleToInstallStation) {
        //     if (station.name === isPossibleToInstallStation.name) {
        //       isPossibleToInstallStation.hasStation = true;
        //     }
        //   }
        // }

        // duas sugestões abaixo:
        const planetsWithStationTracking = filterIsPossibleToInstallStation.map(
          planet => ({
            ...planet,
            hasStation: !!dataStation.find(
              station => station.name === planet.name,
            ),
          }),
        );

        const planetsWithStationTracking = filterIsPossibleToInstallStation.map(
          async planet => ({
            ...planet,
            hasStation: !!(await db.station.findOne({
              where: { name: planet.name },
            })),
          }),
        );
        const organizeElements = sortElements(
          formatHasStation,
          'hasStation',
          'asc',
        );

        if (organizeElements) {
          // precisava?
          const result = removeDuplicatesArrayOfObj(organizeElements, 'name');
          return result;
        }
      } else {
        return filterIsPossibleToInstallStation;
      }
    } catch (error) {
      // não sei se curti muito esse catch, talvez fosse mais interessante deixar o erro raw mesmo
      // e caso queira tratar pra ser uma mensagem bonitinha, cobrir em cada função que pode dar throw
      throw new Error('Could not possible to find suitable planets.');
    }
  },
};
