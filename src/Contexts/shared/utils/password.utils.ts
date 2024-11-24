import bcrypt from 'bcrypt'

export class PasswordUtils {
  static async hash(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
  }

  static async validate(
    rawPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(rawPassword, hashedPassword)
  }
}
