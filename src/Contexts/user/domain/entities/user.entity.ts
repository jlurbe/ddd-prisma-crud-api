import { v4 as uuid } from 'uuid'
import { UserEmail } from '../value-objects/UserEmail'
import { UserId } from '../value-objects/UserId'
import { UserName } from '../value-objects/UserName'
import { UserPassword } from '../value-objects/UserPassword'
import { UserPrimitive } from '../primitives/user.primitive'
import { UserTime } from '../value-objects/UserTime'
import { CreateUserDTO } from '../dtos/create-user.dto'
import { UpdateUserPersistenceDTO } from '../dtos/update-user-persistence.dto'

export class UserEntity {
  private readonly _id: UserId
  private name: UserName
  private email: UserEmail
  private password: UserPassword
  private ctime: UserTime
  private mtime: UserTime

  constructor(
    id: UserId,
    name: UserName,
    email: UserEmail,
    password: UserPassword,
    ctime: UserTime,
    mtime: UserTime,
  ) {
    this._id = id
    this.name = name
    this.email = email
    this.password = password
    this.ctime = ctime
    this.mtime = mtime
  }

  get idValue(): string {
    return this._id.value
  }

  get nameValue(): string {
    return this.name.value
  }

  get emailValue(): string {
    return this.email.value
  }

  get passwordValue(): string {
    return this.password.value
  }

  get ctimeValue(): Date {
    return this.ctime.value
  }

  get mtimeValue(): Date {
    return this.mtime.value
  }

  changeEmail(userEmail: string): UpdateUserPersistenceDTO {
    this.email = new UserEmail(userEmail)
    this.mtime = new UserTime(new Date())

    return { email: this.email.value, mtime: this.mtime.value }
  }

  changeName(userName: string): UpdateUserPersistenceDTO {
    this.name = new UserName(userName)
    this.mtime = new UserTime(new Date())

    return { name: this.name.value, mtime: this.mtime.value }
  }

  // Convert the object to primitive values
  toPrimitives(): UserPrimitive {
    return {
      id: this._id.value,
      name: this.name.value,
      email: this.email.value,
      password: this.password.value, // Use cautiously if password exposure is a concern
      ctime: this.ctime.value,
      mtime: this.mtime.value,
    }
  }

  // Recreate the object from primitive values
  static fromPrimitives(userPrimitive: UserPrimitive): UserEntity {
    return new UserEntity(
      new UserId(userPrimitive.id ?? uuid()),
      new UserName(userPrimitive.name),
      new UserEmail(userPrimitive.email),
      new UserPassword(userPrimitive.password),
      new UserTime(userPrimitive.ctime ?? new Date()),
      new UserTime(userPrimitive.mtime ?? new Date()),
    )
  }

  // Recreate the object from the create user DTO values
  static async fromCreateUserDTO(
    userPrimitive: CreateUserDTO,
  ): Promise<UserEntity> {
    return new UserEntity(
      new UserId(uuid()),
      new UserName(userPrimitive.name),
      new UserEmail(userPrimitive.email),
      await UserPassword.create(userPrimitive.password),
      new UserTime(new Date()),
      new UserTime(new Date()),
    )
  }
}
