import { UserPrimitive } from '../primtives/user.primitive'

export type UpdateUserPersistenceDTO = Partial<
  Omit<UserPrimitive, 'id' | 'password' | 'ctime'>
>
