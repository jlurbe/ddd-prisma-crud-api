import { UserPrimitive } from '../primitives/user.primitive'

export type UpdateUserPersistenceDTO = Partial<
  Omit<UserPrimitive, 'id' | 'password' | 'ctime'>
>
