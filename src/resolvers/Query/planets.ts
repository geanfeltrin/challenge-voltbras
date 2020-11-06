export default {
  suitablePlanets: async (_source, { page }, { dataSources }) => {
    const data = await dataSources.planetsApi.getPlanets(page)

    const filterIsPossibleToInstallStation = data.results
      .filter((item) => item.mass?.value > 25)
      .map((element) => ({
        name: element.name,
        mass: element.mass.value,
        hasStation: false,
      }))

    return filterIsPossibleToInstallStation
  },
}
