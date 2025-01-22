import { UserRepository } from '../domain/repositories/user.repository'
import { IService } from '../../shared/domain/interfaces/service.interface'
import { CreateUserDTO } from '../domain/dtos/create-user.dto'
import { UserResponseDTO } from '../domain/dtos/user-response.dto'

export class CreateUserService
  implements IService<CreateUserDTO, UserResponseDTO>
{
  constructor(private readonly userRepository: UserRepository) {}

  async run(userInput: CreateUserDTO): Promise<UserResponseDTO> {
    return this.userRepository.create(userInput)
  }
}
