import { UserRepository } from '../domain/repositories/user.repository'
import { IService } from '../../shared/domain/interfaces/service.interface'
import { UserResponseDTO } from '../domain/dtos/user-response.dto'

export class GetUserByIdService implements IService<string, UserResponseDTO> {
  constructor(private readonly userRepository: UserRepository) {}

  async run(id: string): Promise<UserResponseDTO> {
    return this.userRepository.getById(id)
  }
}
