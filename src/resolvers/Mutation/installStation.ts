type DataProps = {
  data: { nameStation: String; namePlanet: String; mass: Number }
}

export default {
  installStation: async (_source: any, { data }: DataProps, context: any) => {
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
