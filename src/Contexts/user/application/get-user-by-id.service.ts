import { UserRepository } from '../domain/repositories/user.repository'
import { UserResponse } from '../domain/entities/User'

export class GetAllUsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async run(): Promise<UserResponse[]> {
    return this.userRepository.getAll()
  }
}
