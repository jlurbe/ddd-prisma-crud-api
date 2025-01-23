import { UserRepository } from '../domain/repositories/user.repository'
import { IService } from '../../shared/domain/interfaces/service.interface'
import { UserResponseDTO } from '../domain/dtos/user-response.dto'
import { userMapper } from '../infrastructure/repositories/mapper/user.mapper'
import { UserEntity } from '../domain/entities/user.entity'
import { DatabaseRecordNotFoundError } from '../../shared/domain/errors/database-record-not-found.error'
import { BaseError } from '../../shared/domain/errors/base.error'
import { UnexpectedError } from '../../shared/domain/errors/unexpected.error'

export class GetUserByIdService implements IService<string, UserResponseDTO> {
  constructor(private readonly userRepository: UserRepository) {}

  async run(id: string): Promise<UserResponseDTO> {
    try {
      const userPrimitive = await this.userRepository.getById(id)

      if (!userPrimitive) {
        throw new DatabaseRecordNotFoundError(
          this.constructor.name,
          id.toString(),
        )
      }

      const user = UserEntity.fromPrimitives(userPrimitive)

      return userMapper(user.toPrimitives())
    } catch (error) {
      if (error instanceof BaseError) {
        throw error
      }

      throw new UnexpectedError(
        this.constructor.name,
        'run',
        id,
        error as Error,
      )
    }
  }
}
