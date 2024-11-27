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
    const user = await userPrismaRepository.getById(1)

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
    const updatedUser = await userPrismaRepository.update(updateUserInput, 1)

    expect(updatedUser).toEqual(updateUserResponseOk)
  })

  test('Delete User', async () => {
    mockedPrismaClient.users.delete.mockResolvedValueOnce(deleteUserResponseOk)
    const result = await userPrismaRepository.delete(1)

    expect(result).toBe(true)
  })
})
