import { Context } from '../../context/index'
type DataProps = {
  data: {
    nameStation: string
    namePlanet: string
    mass: number
  }
}

export default {
  installStation: async (_: unknown, { data }: DataProps, context: Context) => {
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
