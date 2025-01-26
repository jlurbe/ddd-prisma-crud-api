import { UserPrimitive } from '../primitives/user.primitive'

export type UpdateUserDTO = Partial<
  Omit<UserPrimitive, 'id' | 'password' | 'ctime' | 'mtime'>
>
