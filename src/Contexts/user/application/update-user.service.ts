import { UserRepository } from '../domain/repositories/user.repository'
import { IService } from '../../shared/domain/interfaces/service.interface'
import { UpdateUserDTO } from '../domain/dtos/update-user.dto'
import { UserResponseDTO } from '../domain/dtos/user-response.dto'

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
    return this.userRepository.update(userInput, id)
  }
}
