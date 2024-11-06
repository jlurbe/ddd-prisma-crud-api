import { UserResponse } from '../../../../src/Contexts/user/domain/entities/User'

export const getAllResponse: UserResponse[] = [
  {
    id: 1,
    username: 'johndoe',
    email: 'johndoe@gmail.com',
    ctime: new Date('2024-10-26T20:35:35.000Z'),
    mtime: new Date('2024-10-26T20:35:35.000Z'),
  },
  {
    id: 2,
    username: 'janedoe',
    email: 'janedoe@gmail.com',
    ctime: new Date('2024-10-26T20:35:35.000Z'),
    mtime: new Date('2024-10-26T20:35:35.000Z'),
  },
  {
    id: 3,
    username: 'alexsmith',
    email: 'alexsmith@gmail.com',
    ctime: new Date('2024-10-26T20:35:35.000Z'),
    mtime: new Date('2024-10-26T20:35:35.000Z'),
  },
]
