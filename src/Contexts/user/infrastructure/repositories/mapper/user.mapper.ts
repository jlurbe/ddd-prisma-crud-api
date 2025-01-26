import { UserResponseDTO } from '@contexts/user/domain/dtos/user-response.dto'
import { UserPrimitive } from '@contexts/user/domain/primitives/user.primitive'

export const userMapper = (user: UserPrimitive): UserResponseDTO => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    ctime: user.ctime,
    mtime: user.mtime,
  }
}
