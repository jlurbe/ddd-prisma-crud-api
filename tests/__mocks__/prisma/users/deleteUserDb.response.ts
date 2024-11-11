import { User } from '../../../../src/Contexts/user/domain/entities/User'

export const deleteUserResponseOk: User = {
  id: 1,
  username: 'johndoe',
  password: '123456',
  email: 'johndoe@gmail.com',
  ctime: new Date('2024-10-26T20:35:35.000Z'),
  mtime: new Date('2024-10-26T20:35:35.000Z'),
}
