import { IService } from '../../shared/domain/interfaces/service.inteface'
import { UserRepository } from '../domain/repositories/user.repository'

export class DeleteUserService implements IService<string, boolean> {
  constructor(private readonly userRepository: UserRepository) {}

  async run(id: string): Promise<boolean> {
    return this.userRepository.delete(id)
  }
}
