import { PrismaClient } from '@prisma/client'
import { UserPrismaRepository } from '../../Contexts/user/infrastructure/repositories/user-prisma.repository'

import { UsersController } from '../controllers/users.controller'
import { CreateUserService } from '../../Contexts/user/application/create-user.service'
import { DeleteUserService } from '../../Contexts/user/application/delete-user.service'
import { GetAllUsersService } from '../../Contexts/user/application/get-all-users.service'
import { GetUserByIdService } from '../../Contexts/user/application/get-user-by-id.service'
import { UpdateUserService } from '../../Contexts/user/application/update-user.service'

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
