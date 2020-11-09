import { MockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';

export type MockContext = {
  db: MockProxy<PrismaClient>;
};

export const createMockContext = (): MockContext => {
  return {
    db: mockDeep<PrismaClient>(),
  };
};
