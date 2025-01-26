import { PrismaClient } from '@prisma/client'
import { UserPrismaRepository } from '@contexts/user/infrastructure/repositories/user-prisma.repository'

import { UsersController } from '@api/controllers/users.controller'
import { CreateUserService } from '@contexts/user/application/create-user.service'
import { DeleteUserService } from '@contexts/user/application/delete-user.service'
import { GetAllUsersService } from '@contexts/user/application/get-all-users.service'
import { GetUserByIdService } from '@contexts/user/application/get-user-by-id.service'
import { UpdateUserService } from '@contexts/user/application/update-user.service'

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
