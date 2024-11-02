import { UserRepository } from '../domain/repositories/user.repository'
import { UserResponse } from '../domain/entities/User'

export class GetUserByIdService {
  constructor(private readonly userRepository: UserRepository) {}

  async run(id: number): Promise<UserResponse> {
    return this.userRepository.getById(id)
  }
}
