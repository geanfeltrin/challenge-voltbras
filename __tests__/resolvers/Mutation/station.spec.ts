import station from '../../../src/resolvers/Mutation/station';
import { createMockContext, MockContext } from '../../mocks/mockContext';
import { Context } from '../../../src/context/db';

describe('Mutation-Station', () => {
  let mockCtx: MockContext;
  let ctx: Context;

  beforeEach(() => {
    mockCtx = createMockContext();
    ctx = (mockCtx as unknown) as Context;
  });
  it('should be able to create a new station', async () => {
    const data = {
      name: '01',
    };

    mockCtx.db.station.create.mockResolvedValue({
      id: 5,
      name: data.name,
    });

    const response = await station.installStation(null, { data }, ctx);

    expect(response).toEqual({ ...data, id: 5 });
  });
});
