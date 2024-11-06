import { UserPrismaRepository } from '../../../../../src/Contexts/user/infrastructure/repositories/user-prisma.repository'
import { mockedPrismaClient } from '../../../../__mocks__/prisma/client'
import { getAllDbResponseOk } from '../../../../__mocks__/prisma/users/getAll.db.response'
import { getAllResponseOk } from '../../../../__mocks__/prisma/users/getAll.response'

describe('User prisma repository unit testing', () => {
  const userPrismaRepository = new UserPrismaRepository(mockedPrismaClient)
  test('Get All Users', async () => {
    mockedPrismaClient.users.findMany.mockResolvedValueOnce(getAllDbResponseOk)
    const users = await userPrismaRepository.getAll()

    expect(users).toEqual(getAllResponseOk)
  })
})
