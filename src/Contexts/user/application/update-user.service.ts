import { UserRepository } from '../domain/repositories/user.repository'
import { IService } from '../../shared/domain/interfaces/service.interface'
import { UpdateUserDTO } from '../domain/dtos/update-user.dto'
import { UserResponseDTO } from '../domain/dtos/user-response.dto'
import { UserEntity } from '../domain/entities/user.entity'
import { DatabaseRecordNotFoundError } from '../../shared/domain/errors/database-record-not-found.error'
import { UpdateUserPersistenceDTO } from '../domain/dtos/update-user-persistence.dto'
import { userMapper } from '../infrastructure/repositories/mapper/user.mapper'

export type UpdateUserInputWithId = {
  userInput: UpdateUserDTO
  id: string
}

export class UpdateUserService
  implements IService<UpdateUserInputWithId, UserResponseDTO>
{
  constructor(private readonly userRepository: UserRepository) {}

  async run({
    userInput,
    id,
  }: UpdateUserInputWithId): Promise<UserResponseDTO> {
    const userPrimitive = await this.userRepository.getById(id)

    if (!userPrimitive) {
      throw new DatabaseRecordNotFoundError(
        this.constructor.name,
        id.toString(),
      )
    }

    const user = UserEntity.fromPrimitives(userPrimitive)

    const userPersistencyDTO: UpdateUserPersistenceDTO = {
      ...(userInput.email && user.changeEmail(userInput.email)), // If email is provided, change it
      ...(userInput.name && user.changeName(userInput.name)), // If name is provided, change it
    }

    await this.userRepository.update(userPersistencyDTO, id)

    return userMapper(user.toPrimitives())
  }
}
