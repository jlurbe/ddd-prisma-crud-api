import { PrismaClient } from '@prisma/client'
import { UserPrismaRepository } from '../../Contexts/user/infrastructure/repositories/user-prisma.repository'

import { UsersController } from '../controllers/users.controller'
import {
  GetAllUsersService,
  GetUserByIdService,
  CreateUserService,
  UpdateUserService,
  DeleteUserService,
} from '../../Contexts/user/application'

const prismaClient = new PrismaClient()
const userPrismaRepository = new UserPrismaRepository(prismaClient)
const getAllUsersService = new GetAllUsersService(userPrismaRepository)
const getUserByIdService = new GetUserByIdService(userPrismaRepository)
const createUserService = new CreateUserService(userPrismaRepository)
const updateUserService = new UpdateUserService(userPrismaRepository)
const deleteUserService = new DeleteUserService(userPrismaRepository)

export const usersController = new UsersController(
  getAllUsersService,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService,
)
