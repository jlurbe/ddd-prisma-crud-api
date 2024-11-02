import { User, UserResponse } from '../../../domain/entities/User'

export const userMapper = (user: User): UserResponse => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    ctime: user.ctime,
    mtime: user.mtime,
  }
}
