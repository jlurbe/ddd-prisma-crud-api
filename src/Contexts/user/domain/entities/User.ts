export type User = {
  id: string
  username: string
  email: string
  password: string
  ctime: Date
  mtime: Date
}

export type CreateUserInput = Omit<User, 'id' | 'ctime' | 'mtime'>
export type UpdateUserInput = Partial<
  Omit<User, 'id' | 'password' | 'ctime' | 'mtime'>
>
export type UserResponse = Omit<User, 'password'>
