import { UserRepository } from '../domain/repositories/user.repository'
import { UpdateUserInput, UserResponse } from '../domain/entities/User'

export class UpdateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async run(userInput: UpdateUserInput, id: number): Promise<UserResponse> {
    return this.userRepository.update(userInput, id)
  }
}
