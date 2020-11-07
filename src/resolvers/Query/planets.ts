import { PrismaClient } from '@prisma/client';

type argsProps = { page: number };

interface ContextProps {
  dataSources: any;
}

const prisma = new PrismaClient();

export default {
  suitablePlanets: async (_: unknown, args: argsProps, ctx: ContextProps) => {
    let data = [];
    const arrayPage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const { page } = args;
    try {
      if (page) {
        const dataWithPage = await ctx.dataSources.planetAPI.getPlanets(page);
        data.push(...dataWithPage.results);
      } else {
        const promises = arrayPage.flatMap(async item => {
          const dataWithoutPage = await ctx.dataSources.planetAPI.getPlanets(
            item,
          );
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

      const dataStation = await prisma.station.findMany();

      if (dataStation) {
        for (let stations of dataStation) {
          for (let isPossibleToInstallStation of filterIsPossibleToInstallStation) {
            if (stations.name_planet === isPossibleToInstallStation.name) {
              isPossibleToInstallStation.hasStation = true;
            }
          }
        }

        const formatHasStation = [...filterIsPossibleToInstallStation];
        const result = formatHasStation.sort(
          (a, b) => Number(b.hasStation) - Number(a.hasStation),
        );

        return result;
      } else {
        return filterIsPossibleToInstallStation;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
