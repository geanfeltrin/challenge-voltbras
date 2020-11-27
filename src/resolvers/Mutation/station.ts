import { Context } from '../../context/db';

type DataProps = {
  data: {
    name: string;
  };
};

export default {
  installStation: async (_: unknown, { data }: DataProps, { db }: Context) => {
    
      const response = await db.station.create({
        data: {
          name: data.name,
        },
      });
      return response;   
  },
};
