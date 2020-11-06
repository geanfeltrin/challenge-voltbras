export default {
  suitablePlanets: async (_source, { page }, { dataSources, prisma }) => {
    let data = []
    if (page) {
      const d = await dataSources.planetsApi.getPlanets(page)
      data.push(...d.results)
    } else {
      const promises = [1, 2, 3, 4, 5, 6, 7, 8].flatMap(async (item) => {
        const d = await dataSources.planetsApi.getPlanets(item)
        return d
      })
      const dataSource = await Promise.all(promises)
      data.push(...dataSource.flatMap((value) => value.results))
    }

    const dataStation = await prisma.station.findMany()

    const formatStation = dataStation.map((value) => ({
      id: value.id,
      name_station: value.name_station,
      name: value.name_planet,
      mass: value.mass,
      hasStation: true,
    }))

    const filterIsPossibleToInstallStation = data
      .filter((item) => item.mass?.value > 25)
      .map((element) => ({
        name: element.name,
        mass: element.mass.value,
        hasStation: false,
      }))

    const formatHasStation = [
      ...filterIsPossibleToInstallStation,
      ...formatStation,
    ]

    return formatHasStation
  },
}
