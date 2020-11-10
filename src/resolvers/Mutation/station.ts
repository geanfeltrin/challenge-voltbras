import { Context } from '../../context/db';

type DataProps = {
  data: {
    name: string;
  };
};

export default {
  installStation: async (_: unknown, { data }: DataProps, ctx: Context) => {
    const { db } = ctx;
    try {
      const response = await db.station.create({
        data: {
          name: data.name,
        },
      });

      return response;
    } catch (error) {
      throw new Error(
        'Could not possible to install station, the name must be unique.',
      );
    }
  },
};
