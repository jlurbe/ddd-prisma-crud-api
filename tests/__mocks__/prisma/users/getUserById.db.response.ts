import { User } from '../../../../src/Contexts/user/domain/entities/User'

export const getUserByIdDbResponseOk: User = {
  id: 1,
  username: 'johndoe',
  email: 'johndoe@gmail.com',
  password: '$2a$10$DPlDlmKUMKHqtOj0zh6RlOjot7/QgWKFBhbQJoHtuSgheJ38X2dmG',
  ctime: new Date('2024-10-26T20:35:35.000Z'),
  mtime: new Date('2024-10-26T20:35:35.000Z'),
}
