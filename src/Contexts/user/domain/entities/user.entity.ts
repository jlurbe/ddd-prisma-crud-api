import { v4 as uuid } from 'uuid'
import { UserEmail } from '../value-objects/UserEmail'
import { UserId } from '../value-objects/UserId'
import { UserName } from '../value-objects/UserName'
import { UserPassword } from '../value-objects/UserPassword'

export class UserEntity {
  private readonly _id: UserId
  private name: UserName
  private email: UserEmail
  private password: UserPassword

  constructor(id: string, name: string, email: string, password: string) {
    this._id = new UserId(id ?? uuid())
    this.name = new UserName(name)
    this.email = new UserEmail(email)
    this.password = new UserPassword(password)
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

  // Convert the object to primitive values
  toPrimitives(): {
    id: string
    name: string
    email: string
    password: string
  } {
    return {
      id: this._id.value,
      name: this.name.value,
      email: this.email.value,
      password: this.password.value, // Use cautiously if password exposure is a concern
    }
  }

  // Recreate the object from primitive values
  static fromPrimitives(data: {
    id: string
    name: string
    email: string
    password: string
  }): UserEntity {
    return new UserEntity(data.id, data.name, data.email, data.password)
  }
}
