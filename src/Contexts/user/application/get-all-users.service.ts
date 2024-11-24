import { UserRepository } from '../domain/repositories/user.repository'
import { UserResponse } from '../domain/entities/User'
import { IService } from '../../shared/domain/interfaces/service.inteface'

export class GetUserByIdService implements IService<number, UserResponse> {
  constructor(private readonly userRepository: UserRepository) {}

  async run(id: number): Promise<UserResponse> {
    return this.userRepository.getById(id)
  }
}
