import { UserRepository } from '../domain/repositories/user.repository'
import { IService } from '../../shared/domain/interfaces/service.interface'
import { CreateUserDTO } from '../domain/dtos/create-user.dto'
import { UserResponseDTO } from '../domain/dtos/user-response.dto'
import { UserEntity } from '../domain/entities/user.entity'
import { userMapper } from '../infrastructure/repositories/mapper/user.mapper'
import { BaseError } from '../../shared/domain/errors/base.error'
import { UnexpectedError } from '../../shared/domain/errors/unexpected.error'

export class CreateUserService
  implements IService<CreateUserDTO, UserResponseDTO>
{
  constructor(private readonly userRepository: UserRepository) {}

  async run(userInput: CreateUserDTO): Promise<UserResponseDTO> {
    try {
      const user = await UserEntity.fromCreateUserDTO(userInput)

      await this.userRepository.create(user.toPrimitives())

      return userMapper(user.toPrimitives())
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
