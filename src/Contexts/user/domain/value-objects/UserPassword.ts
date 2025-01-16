import { StringValueObject } from '../../../shared/domain/value-objects/string.value-object'
import { PasswordUtils } from '../../../shared/utils/password.utils'

export class UserPassword extends StringValueObject {
  static async create(plainPassword: string): Promise<UserPassword> {
    const hashedPassword = await PasswordUtils.hash(plainPassword)

    return new UserPassword(hashedPassword)
  }
}
