import { DatabaseRecordNotFoundError } from '../../shared/domain/errors/database-record-not-found.error'
import { IService } from '../../shared/domain/interfaces/service.interface'
import { UserEntity } from '../domain/entities/user.entity'
import { UserRepository } from '../domain/repositories/user.repository'

export class DeleteUserService implements IService<string, boolean> {
  constructor(private readonly userRepository: UserRepository) {}

  async run(id: string): Promise<boolean> {
    const userPrimitive = await this.userRepository.getById(id)

    if (!userPrimitive) {
      throw new DatabaseRecordNotFoundError(
        this.constructor.name,
        id.toString(),
      )
    }

    UserEntity.fromPrimitives(userPrimitive)

    return this.userRepository.delete(id)
  }
}
