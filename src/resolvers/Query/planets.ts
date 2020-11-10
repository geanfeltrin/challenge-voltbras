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
  suitablePlanets: async (
    _: unknown,
    { page }: argsProps,
    { dataSources, db }: ContextProps,
  ) => {
    let data = [];
    const arrayPage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    try {
      if (page) {
        const dataWithPage = await dataSources.planetAPI.getPlanets(page);
        data.push(...dataWithPage.results);
      } else {
        const promises = arrayPage.flatMap(async item => {
          const dataWithoutPage = await dataSources.planetAPI.getPlanets(item);
          return dataWithoutPage;
        });
        const dataSource = await Promise.all(promises);
        data.push(...dataSource.flatMap(value => value.results));
      }

      const filterIsPossibleToInstallStation = data
        .filter(item => item.mass?.value > 25)
        .map(element => ({
          name: element.name,
          mass: element.mass.value,
          hasStation: false,
        }));

      const dataStation = await db.station.findMany();

      if (dataStation.length >= 1) {
        const formatDataStation = dataStation.map(value => ({
          ...value,
          hasStation: true,
        }));

        for (let station of formatDataStation) {
          for (let isPossibleToInstallStation of filterIsPossibleToInstallStation) {
            if (station.name === isPossibleToInstallStation.name) {
              isPossibleToInstallStation.hasStation = true;
            }
          }
        }

        const formatHasStation = [
          ...filterIsPossibleToInstallStation,
          ...formatDataStation,
        ];

        const organizeElements = sortElements(
          formatHasStation,
          'hasStation',
          'asc',
        );

        if (organizeElements) {
          const result = removeDuplicatesArrayOfObj(organizeElements, 'name');
          return result;
        }
      } else {
        return filterIsPossibleToInstallStation;
      }
    } catch (error) {
      throw new Error('Could not possible to find suitable planets.');
    }
  },
};
