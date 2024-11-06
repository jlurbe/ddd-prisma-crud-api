import { User } from '../../../../src/Contexts/user/domain/entities/User'

export const getAllDbResponseOk: User[] = [
  {
    id: 1,
    username: 'johndoe',
    email: 'johndoe@gmail.com',
    password: '$2a$10$DPlDlmKUMKHqtOj0zh6RlOjot7/QgWKFBhbQJoHtuSgheJ38X2dmG',
    ctime: new Date('2024-10-26T20:35:35.000Z'),
    mtime: new Date('2024-10-26T20:35:35.000Z'),
  },
  {
    id: 2,
    username: 'janedoe',
    email: 'janedoe@gmail.com',
    password: '$2a$10$9tDnBjy3lRVFGBu/gbQFzeC3ZbRM9UnfnQ1FyYFX0LyxxSwfCkNji',
    ctime: new Date('2024-10-26T20:35:35.000Z'),
    mtime: new Date('2024-10-26T20:35:35.000Z'),
  },
  {
    id: 3,
    username: 'alexsmith',
    email: 'alexsmith@gmail.com',
    password: '$2a$10$3i6Umo2b8itbzpCqIhVktuTlQJL96Vx92kjFzbrXEL4V9b2b2J7Na',
    ctime: new Date('2024-10-26T20:35:35.000Z'),
    mtime: new Date('2024-10-26T20:35:35.000Z'),
  },
]
