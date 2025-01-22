import { UserRepository } from '../domain/repositories/user.repository'
import { IService } from '../../shared/domain/interfaces/service.interface'
import { UserResponseDTO } from '../domain/dtos/user-response.dto'

export class GetAllUsersService implements IService<null, UserResponseDTO[]> {
  constructor(private readonly userRepository: UserRepository) {}

  async run(): Promise<UserResponseDTO[]> {
    return this.userRepository.getAll()
  }
}
