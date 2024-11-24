import { IService } from '../../shared/domain/interfaces/service.inteface'
import { UserRepository } from '../domain/repositories/user.repository'

export class DeleteUserService implements IService<number, boolean> {
  constructor(private readonly userRepository: UserRepository) {}

  async run(id: number): Promise<boolean> {
    return this.userRepository.delete(id)
  }
}
