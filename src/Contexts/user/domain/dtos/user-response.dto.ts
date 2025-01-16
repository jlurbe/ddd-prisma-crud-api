import { UserPrimitive } from '../primtives/user.primitive'

export type UserResponseDTO = Omit<UserPrimitive, 'password'>
