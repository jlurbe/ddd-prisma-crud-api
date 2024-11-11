export type User = {
  id: number
  username: string
  email: string
  password: string
  ctime: Date
  mtime: Date
}

export type CreateUserInput = Omit<User, 'id' | 'ctime' | 'mtime'>
export type UpdateUserInput = Omit<User, 'id' | 'password' | 'ctime' | 'mtime'>
export type UserResponse = Omit<User, 'password'>
