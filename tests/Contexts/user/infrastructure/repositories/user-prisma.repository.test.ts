import { UserPrismaRepository } from '../../../../../src/Contexts/user/infrastructure/repositories/user-prisma.repository'
import { mockedPrismaClient } from '../../../../__mocks__/prisma/client'
import {
  getAllDbResponse,
  getAllResponse,
  getUserByIdDbResponseOk,
  getUserByIdResponseOk,
  createUserInput,
  createUserDbResponseOk,
  createUserResponseOk,
  updateUserInput,
  updateUserDbResponseOk,
  updateUserResponseOk,
  deleteUserResponseOk,
} from '../../../../__mocks__/prisma/users'

describe('UserPrismaRepository unit tests', () => {
  const userPrismaRepository = new UserPrismaRepository(mockedPrismaClient)

  test('Get All Users', async () => {
    mockedPrismaClient.users.findMany.mockResolvedValueOnce(getAllDbResponse)
    const users = await userPrismaRepository.getAll()

    expect(users).toEqual(getAllResponse)
  })

  test('Get User by ID', async () => {
    mockedPrismaClient.users.findFirst.mockResolvedValueOnce(
      getUserByIdDbResponseOk,
    )
    const user = await userPrismaRepository.getById(
      'b04c4994-b4b5-11ef-96a4-0242ac120002',
    )

    expect(user).toEqual(getUserByIdResponseOk)
  })

  test('Create User', async () => {
    mockedPrismaClient.users.create.mockResolvedValueOnce(
      createUserDbResponseOk,
    )
    const newUser = await userPrismaRepository.create(createUserInput)

    expect(newUser).toEqual(createUserResponseOk)
  })

  test('Update User', async () => {
    mockedPrismaClient.users.update.mockResolvedValueOnce(
      updateUserDbResponseOk,
    )
    const updatedUser = await userPrismaRepository.update(
      updateUserInput,
      'b04c4994-b4b5-11ef-96a4-0242ac120002',
    )

    expect(updatedUser).toEqual(updateUserResponseOk)
  })

  test('Delete User', async () => {
    mockedPrismaClient.users.delete.mockResolvedValueOnce(deleteUserResponseOk)
    const result = await userPrismaRepository.delete(
      'b04c4994-b4b5-11ef-96a4-0242ac120002',
    )

    expect(result).toBe(true)
  })
})
