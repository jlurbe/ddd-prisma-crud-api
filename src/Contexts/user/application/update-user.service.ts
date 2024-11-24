import { UserRepository } from '../domain/repositories/user.repository'
import { UpdateUserInput, UserResponse } from '../domain/entities/User'
import { IService } from '../../shared/domain/interfaces/service.inteface'

export type UpdateUserInputWithId = {
  userInput: UpdateUserInput
  id: number
}

export class UpdateUserService
  implements IService<UpdateUserInputWithId, UserResponse>
{
  constructor(private readonly userRepository: UserRepository) {}

  async run({ userInput, id }: UpdateUserInputWithId): Promise<UserResponse> {
    return this.userRepository.update(userInput, id)
  }
}
