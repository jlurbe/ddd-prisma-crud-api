import {
  CreateUserInput,
  UpdateUserInput,
  UserResponse,
} from '../entities/User'

export interface UserRepository {
  getAll(): Promise<UserResponse[]>
  getById(id: string): Promise<UserResponse>
  create(userInput: CreateUserInput): Promise<UserResponse>
  update(userInput: UpdateUserInput, id: string): Promise<UserResponse>
  delete(id: string): Promise<boolean>
}
