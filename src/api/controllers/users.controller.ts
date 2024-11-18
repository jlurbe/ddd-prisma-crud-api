import { NextFunction, Request, Response } from 'express'
import {
  CreateUserInput,
  UpdateUserInput,
  UserResponse,
} from '../../Contexts/user/domain/entities/User'
import {
  CreateUserService,
  DeleteUserService,
  GetAllUsersService,
  GetUserByIdService,
  UpdateUserService,
} from '../../Contexts/user/application'
import { CustomError } from '../../Contexts/shared/errors/domain/custom.error'

export class UsersController {
  constructor(
    private readonly getAllUsersService: GetAllUsersService,
    private readonly getUserByIdService: GetUserByIdService,
    private readonly createUserService: CreateUserService,
    private readonly updateUserService: UpdateUserService,
    private readonly deleteUserService: DeleteUserService,
  ) {
    // Binding actions
    this.getUsers = this.getUsers.bind(this)
    this.getUserById = this.getUserById.bind(this)
    this.createUser = this.createUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
  }

  async getUsers(_req: Request, res: Response): Promise<void> {
    this.getAllUsersService.run().then((users: UserResponse[]) => {
      res.json(users)
    })
  }

  async getUserById(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const { id } = req.params
    this.getUserByIdService
      .run(parseInt(id))
      .then((data) => {
        res.json(data)
      })
      .catch((err) =>
        next(new CustomError(`Error getting user with id ${id}`, 404, err)),
      )
  }

  async createUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const userInput: CreateUserInput = req.body
    this.createUserService
      .run(userInput)
      .then((data) => {
        res.json(data)
      })
      .catch((err) => next(err))
  }

  async updateUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const userInput: UpdateUserInput = req.body
    const { id } = req.params
    this.updateUserService
      .run(userInput, parseInt(id))
      .then((data) => {
        res.json(data)
      })
      .catch((err) => next(err))
  }

  async deleteUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const { id } = req.params
    this.deleteUserService
      .run(parseInt(id))
      .then((result) => {
        if (result) {
          res.status(204).send()
        }
      })
      .catch((err) =>
        next(new CustomError(`Error deleting user with id ${id}`, 400, err)),
      )
  }
}
