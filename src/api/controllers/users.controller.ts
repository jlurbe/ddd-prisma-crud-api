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
import { UserValidator } from '../../Contexts/user/domain/validation/user.validator'
import { BaseError } from '../../Contexts/shared/domain/errors/base.error'
import { UnexpectedError } from '../../Contexts/shared/domain/errors/unexpected.error'

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
    try {
      const user: UserResponse = await this.getUserByIdService.run(parseInt(id))
      res.json(user)
    } catch (error) {
      if (error instanceof BaseError) {
        next(error)
      } else {
        next(
          new UnexpectedError(
            this.constructor.name,
            'getUserById',
            id,
            error as Error,
          ),
        )
      }
    }
  }

  async createUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const userInput: CreateUserInput = UserValidator.validateCreateUser(
        req.body,
      )

      const userData = await this.createUserService.run(userInput)

      res.json(userData)
    } catch (error) {
      if (error instanceof BaseError) {
        next(error)
      } else {
        next(
          new UnexpectedError(
            this.constructor.name,
            'createUser',
            JSON.stringify(req.body),
            error as Error,
          ),
        )
      }
    }
  }

  async updateUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const userInput: UpdateUserInput = UserValidator.validateUpdateUser(
        req.body,
      )
      const { id } = req.params

      const userData: UserResponse = await this.updateUserService.run({
        userInput,
        id: parseInt(id),
      })

      res.json(userData)
    } catch (error) {
      if (error instanceof BaseError) {
        next(error)
      } else {
        next(
          new UnexpectedError(
            this.constructor.name,
            'updateUser',
            JSON.stringify(req.body),
            error as Error,
          ),
        )
      }
    }
  }

  async deleteUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const { id } = req.params
    try {
      const result = await this.deleteUserService.run(parseInt(id))

      if (result) {
        res.status(204).send()
      }
    } catch (error) {
      if (error instanceof BaseError) {
        next(error)
      } else {
        next(
          new UnexpectedError(
            this.constructor.name,
            'deleteUser',
            id,
            error as Error,
          ),
        )
      }
    }
  }
}
