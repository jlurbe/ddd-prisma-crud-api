import { PrismaClient } from '@prisma/client'
import { mockDeep, DeepMockProxy, mockReset } from 'jest-mock-extended'
import prismaClient from '@prismadb/client'

jest.mock('../../../prisma/client', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}))

beforeEach(() => {
  mockReset(mockedPrismaClient)
})

export const mockedPrismaClient =
  prismaClient as unknown as DeepMockProxy<PrismaClient>
