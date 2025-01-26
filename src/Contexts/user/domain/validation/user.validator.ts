import z from 'zod'
import { ValidationError } from '@contexts/shared/domain/errors/validation.error'
import { CreateUserDTO } from '../dtos/create-user.dto'
import { UpdateUserDTO } from '../dtos/update-user.dto'

export class UserValidator {
  private static userCreateSchema = z.object({
    name: z.string({
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

  public static validateCreateUser(user: CreateUserDTO): CreateUserDTO {
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

  public static validateUpdateUser(user: UpdateUserDTO): UpdateUserDTO {
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
