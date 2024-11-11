import { PrismaClient } from '@prisma/client'
import {
  CreateUserInput,
  UpdateUserInput,
  User,
  UserResponse,
} from '../../domain/entities/User'
import { UserRepository } from '../../domain/repositories/user.repository'
import { userMapper } from './mapper/user.mapper'

/**
 * UserPrismaRepository is a repository that provides methods for
 * CRUD operations on the User entity using Prisma as the data source.
 * Implements the UserRepository interface.
 */
export class UserPrismaRepository implements UserRepository {
  /**
   * Constructs an instance of UserPrismaRepository.
   * @param {PrismaClient} prismaClient - The Prisma client used to interact with the database.
   */
  constructor(private readonly prismaClient: PrismaClient) {}

  /**
   * Retrieves all users from the database.
   * @returns {Promise<UserResponse[]>} - A promise that resolves to an array of UserResponse objects.
   */
  async getAll(): Promise<UserResponse[]> {
    const users = await this.prismaClient.users.findMany({})
    return users.map((user) => userMapper(user))
  }

  /**
   * Retrieves a user by its unique identifier.
   * @param {number} id - The unique identifier of the user.
   * @returns {Promise<UserResponse>} - A promise that resolves to the UserResponse object of the found user.
   * @throws {Error} - Throws an error if no user is found with the given id.
   */
  async getById(id: number): Promise<UserResponse> {
    const user = await this.prismaClient.users.findFirstOrThrow({
      where: { id },
    })
    return userMapper(user)
  }

  /**
   * Creates a new user in the database.
   * @param {CreateUserInput} userInput - The data for creating a new user.
   * @returns {Promise<UserResponse>} - A promise that resolves to the UserResponse object of the created user.
   */
  async create(userInput: CreateUserInput): Promise<UserResponse> {
    const user: User = await this.prismaClient.users.create({
      data: userInput,
    })
    return userMapper(user)
  }

  /**
   * Updates an existing user in the database.
   * @param {UpdateUserInput} userInput - The data for updating the user.
   * @param {number} id - The unique identifier of the user to update.
   * @returns {Promise<UserResponse>} - A promise that resolves to the UserResponse object of the updated user.
   */
  async update(userInput: UpdateUserInput, id: number): Promise<UserResponse> {
    const user: User = await this.prismaClient.users.update({
      where: { id },
      data: userInput,
    })
    return userMapper(user)
  }

  /**
   * Deletes a user from the database by its unique identifier.
   * @param {number} id - The unique identifier of the user to delete.
   * @returns {Promise<boolean>} - A promise that resolves to true if the user is successfully deleted.
   */
  async delete(id: number): Promise<boolean> {
    return this.prismaClient.users
      .delete({
        where: { id },
      })
      .then(() => true)
  }
}
