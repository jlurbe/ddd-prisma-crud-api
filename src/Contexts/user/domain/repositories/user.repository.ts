import { CreateUserDTO } from '../dtos/create-user.dto'
import { UpdateUserDTO } from '../dtos/update-user.dto'
import { UserResponseDTO } from '../dtos/user-response.dto'

export interface UserRepository {
  getAll(): Promise<UserResponseDTO[]>
  getById(id: string): Promise<UserResponseDTO>
  create(userInput: CreateUserDTO): Promise<UserResponseDTO>
  update(userInput: UpdateUserDTO, id: string): Promise<UserResponseDTO>
  delete(id: string): Promise<boolean>
}
