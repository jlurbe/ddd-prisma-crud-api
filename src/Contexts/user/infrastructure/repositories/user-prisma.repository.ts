import { PrismaClient } from '@prisma/client'
import {
  CreateUserInput,
  UpdateUserInput,
  User,
  UserResponse,
} from '../../domain/entities/User'
import { UserRepository } from '../../domain/repositories/user.repository'
import { userMapper } from './mapper/user.mapper'
import { PasswordUtils } from '../../../shared/utils/password.utils'
import { DatabaseRecordNotFoundError } from '../../../shared/domain/errors/database-record-not-found.error'
import { BaseError } from '../../../shared/domain/errors/base.error'
import { DatabaseError } from '../../../shared/domain/errors/database.error'

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
   * @throws {Error} - Throws an error if the search fails.
   */
  async getAll(): Promise<UserResponse[]> {
    try {
      const users = await this.prismaClient.users.findMany({})

      return users.map((user) => userMapper(user))
    } catch (error) {
      throw new DatabaseError(
        this.constructor.name,
        'getAll',
        '',
        error as Error,
      )
    }
  }

  /**
   * Retrieves a user by its unique identifier.
   * @param {number} id - The unique identifier of the user.
   * @returns {Promise<UserResponse>} - A promise that resolves to the UserResponse object of the found user.
   * @throws {Error} - Throws an error if no user is found with the given id or the search fails.
   */
  async getById(id: number): Promise<UserResponse> {
    try {
      const user = await this.prismaClient.users.findFirst({
        where: { id },
      })

      if (!user) {
        throw new DatabaseRecordNotFoundError(
          this.constructor.name,
          id.toString(),
        )
      }

      return userMapper(user)
    } catch (error) {
      if (error instanceof BaseError) {
        throw error
      }

      throw new DatabaseError(
        this.constructor.name,
        'getById',
        id.toString(),
        error as Error,
      )
    }
  }

  /**
   * Creates a new user in the database.
   * @param {CreateUserInput} userInput - The data for creating a new user.
   * @returns {Promise<UserResponse>} - A promise that resolves to the UserResponse object of the created user.
   * @throws {Error} - Throws an error if the creation fails.
   */
  async create(userInput: CreateUserInput): Promise<UserResponse> {
    try {
      userInput.password = await PasswordUtils.hash(userInput.password)
      const user: User = await this.prismaClient.users.create({
        data: userInput,
      })

      return userMapper(user)
    } catch (error) {
      throw new DatabaseError(
        this.constructor.name,
        'create',
        JSON.stringify(userInput),
        error as Error,
      )
    }
  }

  /**
   * Updates an existing user in the database.
   * @param {UpdateUserInput} userInput - The data for updating the user.
   * @param {number} id - The unique identifier of the user to update.
   * @returns {Promise<UserResponse>} - A promise that resolves to the UserResponse object of the updated user.
   * @throws {Error} - Throws an error if the update fails.
   */
  async update(userInput: UpdateUserInput, id: number): Promise<UserResponse> {
    try {
      const user: User = await this.prismaClient.users.update({
        where: { id },
        data: userInput,
      })

      return userMapper(user)
    } catch (error) {
      throw new DatabaseError(
        this.constructor.name,
        'update',
        JSON.stringify(userInput),
        error as Error,
      )
    }
  }

  /**
   * Deletes a user from the database by its unique identifier.
   * @param {number} id - The unique identifier of the user to delete.
   * @returns {Promise<boolean>} - A promise that resolves to true if the user is successfully deleted.
   * @throws {Error} - Throws an error if the deletion fails.
   */
  async delete(id: number): Promise<boolean> {
    try {
      const result = await this.prismaClient.users.delete({
        where: { id },
      })

      if (!result) {
        throw new DatabaseRecordNotFoundError(
          this.constructor.name,
          id.toString(),
        )
      }

      return true
    } catch (error) {
      if (error instanceof BaseError) {
        throw error
      }

      throw new DatabaseError(
        this.constructor.name,
        'delete',
        id.toString(),
        error as Error,
      )
    }
  }
}
