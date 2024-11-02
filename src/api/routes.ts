import express from 'express'
import { usersController } from './config/di-container'

export const userRouter = express.Router()

userRouter.get('/', usersController.getUsers)

userRouter.get('/:id', usersController.getUserById)

userRouter.post('/', usersController.createUser)

userRouter.put('/:id', usersController.updateUser)

userRouter.delete('/:id', usersController.deleteUser)
