import { UserRepository } from '../domain/repositories/user.repository'
import { CreateUserInput, UserResponse } from '../domain/entities/User'

export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async run(userInput: CreateUserInput): Promise<UserResponse> {
    return this.userRepository.create(userInput)
  }
}
