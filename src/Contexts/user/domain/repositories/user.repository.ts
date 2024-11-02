import {
  CreateUserInput,
  UpdateUserInput,
  UserResponse,
} from '../entities/User'

export interface UserRepository {
  getAll(): Promise<UserResponse[]>
  getById(id: number): Promise<UserResponse>
  create(userInput: CreateUserInput): Promise<UserResponse>
  update(userInput: UpdateUserInput, id: number): Promise<UserResponse>
  delete(id: number): Promise<boolean>
}
