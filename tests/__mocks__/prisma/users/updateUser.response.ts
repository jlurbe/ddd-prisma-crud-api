import { UserResponse } from '../../../../src/Contexts/user/domain/entities/User'

export const updateUserResponseOk: UserResponse = {
  id: 1,
  username: 'johndoe',
  email: 'johndoe@gmail.com',
  ctime: new Date('2024-10-26T20:35:35.000Z'),
  mtime: new Date('2024-10-26T20:35:35.000Z'),
}
