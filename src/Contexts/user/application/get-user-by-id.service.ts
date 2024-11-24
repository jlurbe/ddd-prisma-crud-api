import { UserRepository } from '../domain/repositories/user.repository'
import { UserResponse } from '../domain/entities/User'
import { IService } from '../../shared/domain/interfaces/service.inteface'

export class GetAllUsersService implements IService<null, UserResponse[]> {
  constructor(private readonly userRepository: UserRepository) {}

  async run(): Promise<UserResponse[]> {
    return this.userRepository.getAll()
  }
}
