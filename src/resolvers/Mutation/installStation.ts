export default {
  installStation: async (_source, { data }, context) => {
    const response = await context.prisma.station.create({
      data: {
        name_station: data.nameStation,
        name_planet: data.namePlanet,
        mass: data.mass,
      },
    })

    return response
  },
}
