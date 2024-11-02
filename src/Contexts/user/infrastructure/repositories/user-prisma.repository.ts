import { PrismaClient } from '@prisma/client'
import {
  CreateUserInput,
  UpdateUserInput,
  User,
  UserResponse,
} from '../../domain/entities/User'
import { UserRepository } from '../../domain/repositories/user.repository'
import { userMapper } from './mapper/user.mapper'

export class UserPrismaRepository implements UserRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  async getAll(): Promise<UserResponse[]> {
    const users = await this.prismaClient.users.findMany({})

    return users.map((user) => {
      return userMapper(user)
    })
  }

  async getById(id: number): Promise<UserResponse> {
    const user = await this.prismaClient.users.findFirstOrThrow({
      where: {
        id,
      },
    })

    return userMapper(user)
  }

  async create(userInput: CreateUserInput): Promise<UserResponse> {
    const user: User = await this.prismaClient.users.create({
      data: userInput,
    })

    return userMapper(user)
  }

  async update(userInput: UpdateUserInput, id: number): Promise<UserResponse> {
    const user: User = await this.prismaClient.users.update({
      where: { id },
      data: userInput,
    })

    return userMapper(user)
  }

  async delete(id: number): Promise<boolean> {
    return this.prismaClient.users
      .delete({
        where: { id },
      })
      .then(() => {
        return true
      })
  }
}
