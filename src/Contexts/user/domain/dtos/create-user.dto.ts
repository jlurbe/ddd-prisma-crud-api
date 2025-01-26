import { UserPrimitive } from '../primitives/user.primitive'

//TODO: Maybe the id should be mandatory and created before the save
//TODO: make it one with the update?
export type CreateUserDTO = Omit<UserPrimitive, 'id' | 'ctime' | 'mtime'>
