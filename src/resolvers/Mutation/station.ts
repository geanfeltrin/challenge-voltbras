import { Context } from '../../context/db';

type DataProps = {
  data: {
    name: string;
  };
};

export default {
  installStation: async (_: unknown, { data }: DataProps, { db }: Context) => {
    try {
      const response = await db.station.create({
        data: {
          name: data.name,
        },
      });

      return response;
    } catch (error) {
      // novamente não acho muito massa formatar o erro aqui
      throw new Error(
        'Could not possible to install station, the name must be unique.',
      );
    }
  },
};
