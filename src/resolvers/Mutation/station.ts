import { Context } from '../../context/db';

type DataProps = {
  data: {
    nameStation: string;
    namePlanet: string;
    mass: number;
  };
};

export default {
  installStation: async (_: unknown, { data }: DataProps, ctx: Context) => {
    const { db } = ctx;
    try {
      const response = await db.station.create({
        data: {
          name_station: data.nameStation,
          name_planet: data.namePlanet,
          mass: data.mass,
        },
      });

      const result = {
        id: response.id,
        namePlanet: response.name_planet,
        nameStation: response.name_station,
        mass: response.mass,
      };
      return result;
    } catch (error) {
      throw new Error('This planet already been registered, try other planet.');
    }
  },
};
