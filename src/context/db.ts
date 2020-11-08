import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export interface Context {
  db: PrismaClient;
}

export function createContext(): Context {
  return { db: prisma };
}
