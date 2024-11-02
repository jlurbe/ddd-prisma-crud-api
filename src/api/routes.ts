import express from 'express'
import { PrismaClient } from '@prisma/client'
import { UserPrismaRepository } from '../Contexts/user/infrastructure/repositories/user-prisma.repository'

import { UsersController } from './controllers/users.controller'
import {
  GetAllUsersService,
  GetUserByIdService,
  CreateUserService,
  UpdateUserService,
  DeleteUserService,
} from '../Contexts/user/application'

export const userRouter = express.Router()
const prismaClient = new PrismaClient()
const userPrismaRepository = new UserPrismaRepository(prismaClient)
const getAllUsersService = new GetAllUsersService(userPrismaRepository)
const getUserByIdService = new GetUserByIdService(userPrismaRepository)
const createUserService = new CreateUserService(userPrismaRepository)
const updateUserService = new UpdateUserService(userPrismaRepository)
const deleteUserService = new DeleteUserService(userPrismaRepository)
const usersController = new UsersController(
  getAllUsersService,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService,
)

userRouter.get('/', usersController.getUsers)

userRouter.get('/:id', usersController.getUserById)

userRouter.post('/', usersController.createUser)

userRouter.put('/:id', usersController.updateUser)

userRouter.delete('/:id', usersController.deleteUser)
