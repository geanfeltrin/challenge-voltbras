import station from '../../../resolvers/Mutation/station';
import { createMockContext, MockContext } from '../../mocks/mockContext';
import { Context } from '../../../context/db';

describe('Mutation-Station', () => {
  let mockCtx: MockContext;
  let ctx: Context;

  beforeEach(() => {
    mockCtx = createMockContext();
    ctx = (mockCtx as unknown) as Context;
  });
  it('should be able to create a new station', async () => {
    const data = {
      nameStation: 'station',
      namePlanet: '01',
      mass: 60,
    };

    mockCtx.db.station.create.mockResolvedValue({
      id: 5,
      name_station: data.nameStation,
      name_planet: data.namePlanet,
      mass: data.mass,
    });

    const response = await station.installStation(null, { data }, ctx);

    expect(response).toEqual({ ...data, id: 5 });
  });
});
