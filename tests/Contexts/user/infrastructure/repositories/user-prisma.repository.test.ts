import { UserPrismaRepository } from '../../../../../src/Contexts/user/infrastructure/repositories/user-prisma.repository'
import { mockedPrismaClient } from '../../../../__mocks__/prisma/client'
import { createUserInput } from '../../../../__mocks__/prisma/users/createUser.input'
import { createUserDbResponseOk } from '../../../../__mocks__/prisma/users/createUserDb.response'
import { deleteUserDbResponseOk } from '../../../../__mocks__/prisma/users/deleteUserDb.response'
import { getAllDbResponse } from '../../../../__mocks__/prisma/users/getAll.db.response'
import { getUserByIdDbResponseOk } from '../../../../__mocks__/prisma/users/getUserById.db.response'
import { updateUserInput } from '../../../../__mocks__/prisma/users/updateUser.input'
import { updateUserDbResponseOk } from '../../../../__mocks__/prisma/users/updateUserDb.response'

describe('UserPrismaRepository unit tests', () => {
  const userPrismaRepository = new UserPrismaRepository(mockedPrismaClient)

  test('Get All Users', async () => {
    mockedPrismaClient.users.findMany.mockResolvedValueOnce(getAllDbResponse)
    const users = await userPrismaRepository.getAll()

    expect(users).toEqual(getAllDbResponse)
  })

  test('Get User by ID', async () => {
    mockedPrismaClient.users.findFirst.mockResolvedValueOnce(
      getUserByIdDbResponseOk,
    )
    const user = await userPrismaRepository.getById(
      'b04c4994-b4b5-11ef-96a4-0242ac120002',
    )

    expect(user).toEqual(getUserByIdDbResponseOk)
  })

  test('Create User', async () => {
    mockedPrismaClient.users.create.mockResolvedValueOnce(
      createUserDbResponseOk,
    )
    const newUser = await userPrismaRepository.create(createUserInput)

    expect(newUser).toEqual(createUserDbResponseOk)
  })

  test('Update User', async () => {
    mockedPrismaClient.users.update.mockResolvedValueOnce(
      updateUserDbResponseOk,
    )
    const updatedUser = await userPrismaRepository.update(
      updateUserInput,
      'b04c4994-b4b5-11ef-96a4-0242ac120002',
    )

    expect(updatedUser).toEqual(updateUserDbResponseOk)
  })

  test('Delete User', async () => {
    mockedPrismaClient.users.delete.mockResolvedValueOnce(
      deleteUserDbResponseOk,
    )
    const result = await userPrismaRepository.delete(
      'b04c4994-b4b5-11ef-96a4-0242ac120002',
    )

    expect(result).toBe(true)
  })
})
