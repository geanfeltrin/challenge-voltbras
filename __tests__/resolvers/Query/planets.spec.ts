import planets from '../../../src/resolvers/Query/planets';
import { createMockContext, MockContext } from '../../mocks/mockContext';

import { response } from '../../mocks/mockDataPlanetAPI';
import PlanetAPI from '../../../src/api/planetApi';
import { ContextProps } from '../../../src/resolvers/Query/planets';
import { MockProxy, mock } from 'jest-mock-extended';
import { Context } from '../../../src/context/db';

describe('Query-Planets', () => {
  describe('Suitable-Planets', () => {
    let mockCtx: MockContext;
    let ctx: Context;
    let mockPlanetApi: MockProxy<PlanetAPI>;
    let planetAPI: PlanetAPI;

    beforeEach(() => {
      mockCtx = createMockContext();
      ctx = (mockCtx as unknown) as Context;
      mockPlanetApi = mock<PlanetAPI>();
      planetAPI = (mockPlanetApi as unknown) as PlanetAPI;
    });

    it('should be able to return all suitable planets with mass > 25', async () => {
      mockPlanetApi.getPlanets.calledWith(1).mockResolvedValue(response);

      mockCtx.db.station.findMany.mockResolvedValue([
        {
          id: 5,
          name: '11 Com b',
        },
      ]);

      const { db } = ctx;
      const context: ContextProps = {
        dataSources: {
          planetAPI,
        },
        db,
      };

      const result = await planets.suitablePlanets(null, { page: 1 }, context);

      const filter = result.filter(item => item.mass <= 25);

      expect(result.length).toBeGreaterThan(1);
      expect(filter).toHaveLength(0);
    });

    it('should be able to return a valid result', async () => {
      mockPlanetApi.getPlanets.calledWith(1).mockResolvedValue(response);

      mockCtx.db.station.findMany.mockResolvedValue([
        {
          id: 5,
          name: '11 Com b',
        },
      ]);

      const { db } = ctx;
      const context: ContextProps = {
        dataSources: {
          planetAPI,
        },
        db,
      };

      const result = await planets.suitablePlanets(null, { page: 1 }, context);

      expect(result[0]).toHaveProperty('name');
      expect(result[0]).toHaveProperty('mass');
      expect(result[0]).toHaveProperty('hasStation');
    });

    it('should be able to return planets with stations', async () => {
      mockPlanetApi.getPlanets.calledWith(1).mockResolvedValue(response);

      mockCtx.db.station.findMany.mockResolvedValue([
        {
          id: 5,
          name: '11 Com b',
        },
      ]);

      const { db } = ctx;
      const context: ContextProps = {
        dataSources: {
          planetAPI,
        },
        db,
      };

      const result = await planets.suitablePlanets(null, { page: 1 }, context);

      expect(result[0]).toHaveProperty('hasStation', true);
    });
  });
});
