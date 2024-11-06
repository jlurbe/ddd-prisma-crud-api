import { UserPrismaRepository } from '../../../../../src/Contexts/user/infrastructure/repositories/user-prisma.repository'
import { mockedPrismaClient } from '../../../../__mocks__/prisma/client'
import {
  getAllDbResponse,
  getAllResponse,
  getUserByIdDbResponseOk,
  getUserByIdResponseOk,
} from '../../../../__mocks__/prisma/users'

describe('User prisma repository unit testing', () => {
  const userPrismaRepository = new UserPrismaRepository(mockedPrismaClient)

  test('Get All Users', async () => {
    mockedPrismaClient.users.findMany.mockResolvedValueOnce(getAllDbResponse)
    const users = await userPrismaRepository.getAll()

    expect(users).toEqual(getAllResponse)
  })

  test('Get user by id', async () => {
    mockedPrismaClient.users.findFirstOrThrow.mockResolvedValueOnce(
      getUserByIdDbResponseOk,
    )
    const user = await userPrismaRepository.getById(1)

    expect(user).toEqual(getUserByIdResponseOk)
  })
})
