import { UserRepository } from '../domain/repositories/user.repository'

export class DeleteUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async run(id: number): Promise<boolean> {
    return this.userRepository.delete(id)
  }
}
