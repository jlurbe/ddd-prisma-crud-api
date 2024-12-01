import z from 'zod'
import { CreateUserInput, UpdateUserInput } from '../entities/User'
import { ValidationError } from '../../../shared/domain/errors/validation.error'

export class UserValidator {
  private static userCreateSchema = z.object({
    username: z.string({
      invalid_type_error: 'User name must be a string',
      required_error: 'User name is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
    email: z
      .string({
        invalid_type_error: 'Email must be a well formatted email',
        required_error: 'Email is required',
      })
      .email(),
  })

  // Define a schema for updating a user
  private static userUpdateSchema = this.userCreateSchema
    .partial()
    .omit({ password: true })

  public static validateCreateUser(user: CreateUserInput): CreateUserInput {
    const result = this.userCreateSchema.safeParse(user)

    if (!result.success) {
      // Throw an error with the validation issues
      throw new ValidationError(
        this.name,
        'validateCreateUser',
        JSON.stringify(user),
        JSON.stringify(result.error.errors.map((err) => err.message)),
      )
    }

    // If validation passes, return the validated data
    return result.data
  }

  public static validateUpdateUser(user: UpdateUserInput): UpdateUserInput {
    const result = this.userUpdateSchema.safeParse(user)

    if (!result.success) {
      // Throw an error with the validation issues
      throw new ValidationError(
        this.name,
        'validateUpdateUser',
        JSON.stringify(user),
        JSON.stringify(result.error.errors.map((err) => err.message)),
      )
    }

    // If validation passes, return the validated data
    return result.data
  }
}
