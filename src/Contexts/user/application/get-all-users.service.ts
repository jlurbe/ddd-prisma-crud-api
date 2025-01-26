import { UserRepository } from '../domain/repositories/user.repository'
import { IService } from '../../shared/domain/interfaces/service.interface'
import { UserResponseDTO } from '../domain/dtos/user-response.dto'
import { UserEntity } from '../domain/entities/user.entity'
import { userMapper } from '../infrastructure/repositories/mapper/user.mapper'
import { UnexpectedError } from '../../shared/domain/errors/unexpected.error'
import { BaseError } from '../../shared/domain/errors/base.error'

export class GetAllUsersService implements IService<null, UserResponseDTO[]> {
  constructor(private readonly userRepository: UserRepository) {}

  async run(): Promise<UserResponseDTO[]> {
    try {
      const usersPrimitive = await this.userRepository.getAll()
      const users = usersPrimitive.map((userPrimitive) => {
        const user = UserEntity.fromPrimitives(userPrimitive)
        return userMapper(user.toPrimitives())
      })

      return users
    } catch (error) {
      if (error instanceof BaseError) {
        throw error
      }

      throw new UnexpectedError(
        this.constructor.name,
        'run',
        '',
        error as Error,
      )
    }
  }
}
