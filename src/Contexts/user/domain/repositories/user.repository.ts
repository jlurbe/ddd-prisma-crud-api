import { UpdateUserPersistenceDTO } from '../dtos/update-user-persistence.dto'
import { UserPrimitive } from '../primtives/user.primitive'

export interface UserRepository {
  getAll(): Promise<UserPrimitive[]>
  getById(id: string): Promise<UserPrimitive | null>
  create(userPrimitive: UserPrimitive): Promise<UserPrimitive>
  update(
    userInput: UpdateUserPersistenceDTO,
    id: string,
  ): Promise<UserPrimitive>
  delete(id: string): Promise<boolean>
}
