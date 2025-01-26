import { UserPrimitive } from '../primitives/user.primitive'

export type UserResponseDTO = Omit<UserPrimitive, 'password'>
