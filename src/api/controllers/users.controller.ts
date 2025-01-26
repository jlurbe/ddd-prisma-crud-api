import { NextFunction, Request, Response } from 'express'
import { CreateUserService } from '@contexts/user/application/create-user.service'
import { DeleteUserService } from '@contexts/user/application/delete-user.service'
import { GetAllUsersService } from '@contexts/user/application/get-all-users.service'
import { GetUserByIdService } from '@contexts/user/application/get-user-by-id.service'
import { UpdateUserService } from '@contexts/user/application/update-user.service'
import { UserValidator } from '@contexts/user/domain/validation/user.validator'
import { BaseError } from '@contexts/shared/domain/errors/base.error'
import { UnexpectedError } from '@contexts/shared/domain/errors/unexpected.error'
import { UserResponseDTO } from '@contexts/user/domain/dtos/user-response.dto'
import { UpdateUserDTO } from '@contexts/user/domain/dtos/update-user.dto'
import { CreateUserDTO } from '@contexts/user/domain/dtos/create-user.dto'

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
    this.getAllUsersService.run().then((users: UserResponseDTO[]) => {
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
      const user: UserResponseDTO = await this.getUserByIdService.run(id)
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
      const userInput: CreateUserDTO = UserValidator.validateCreateUser(
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
      const userInput: UpdateUserDTO = UserValidator.validateUpdateUser(
        req.body,
      )
      const { id } = req.params

      const userData: UserResponseDTO = await this.updateUserService.run({
        userInput,
        id,
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
      const result = await this.deleteUserService.run(id)

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
