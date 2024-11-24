import { UserRepository } from '../domain/repositories/user.repository'
import { CreateUserInput, UserResponse } from '../domain/entities/User'
import { IService } from '../../shared/domain/interfaces/service.inteface'

export class CreateUserService
  implements IService<CreateUserInput, UserResponse>
{
  constructor(private readonly userRepository: UserRepository) {}

  async run(userInput: CreateUserInput): Promise<UserResponse> {
    return this.userRepository.create(userInput)
  }
}
