import { UserResponseDTO } from '../../../domain/dtos/user-response.dto'
import { UserPrimitive } from '../../../domain/primtives/user.primitive'

export const userMapper = (user: UserPrimitive): UserResponseDTO => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    ctime: user.ctime,
    mtime: user.mtime,
  }
}
