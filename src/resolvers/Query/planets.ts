import { Context } from '../../context/index'

type contextProps = { dataSources: any; context: Context }
type argsProps = { page: Number }

export default {
  suitablePlanets: async (
    _: unknown,
    args: argsProps,
    { dataSources, context }: contextProps,
  ) => {
    let data = []
    const arrayPage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const { page } = args
    try {
      if (page) {
        const dataWithPage = await dataSources.planetsApi.getPlanets(page)
        data.push(...dataWithPage.results)
      } else {
        const promises = arrayPage.flatMap(async (item) => {
          const dataWithoutPage = await dataSources.planetsApi.getPlanets(item)
          return dataWithoutPage
        })
        const dataSource = await Promise.all(promises)
        data.push(...dataSource.flatMap((value) => value.results))
      }

      const filterIsPossibleToInstallStation = data
        .filter((item) => item.mass?.value > 25)
        .map((element) => ({
          name: element.name,
          mass: element.mass.value,
          hasStation: false,
        }))

      const dataStation = await context.prisma.station.findMany()

      if (dataStation) {
        for (let stations of dataStation) {
          for (let isPossibleToInstallStation of filterIsPossibleToInstallStation) {
            if (stations.name_planet === isPossibleToInstallStation.name) {
              isPossibleToInstallStation.hasStation = true
            }
          }
        }

        const formatHasStation = [...filterIsPossibleToInstallStation]
        const result = formatHasStation.sort(
          (a, b) => Number(b.hasStation) - Number(a.hasStation),
        )

        return result
      } else {
        return filterIsPossibleToInstallStation
      }
    } catch (error) {
      console.log(error)
    }
  },
}
