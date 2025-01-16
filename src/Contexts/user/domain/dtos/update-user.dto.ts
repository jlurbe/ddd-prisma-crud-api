import { UserPrimitive } from '../primtives/user.primitive'

export type UpdateUserDTO = Partial<
  Omit<UserPrimitive, 'id' | 'password' | 'ctime' | 'mtime'>
>
