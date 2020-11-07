import { PrismaClient } from '@prisma/client';

type DataProps = {
  data: {
    nameStation: string;
    namePlanet: string;
    mass: number;
  };
};

const prisma = new PrismaClient();

export default {
  installStation: async (_: unknown, { data }: DataProps) => {
    const response = await prisma.station.create({
      data: {
        name_station: data.nameStation,
        name_planet: data.namePlanet,
        mass: data.mass,
      },
    });

    return response;
  },
};
