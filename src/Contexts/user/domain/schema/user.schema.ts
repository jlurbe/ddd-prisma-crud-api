import z from 'zod'
import { CreateUserInput, UpdateUserInput } from '../entities/User'
import { CustomError } from '../../../shared/domain/errors/custom.error'

const userCreateSchema = z.object({
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

export function validateCreateUser(user: CreateUserInput): CreateUserInput {
  const result = userCreateSchema.safeParse(user)

  if (!result.success) {
    // Throw an error with the validation issues
    throw new CustomError(
      `Validation failed: ${JSON.stringify(result.error.errors.map((err) => err.message))}`,
      400,
    )
  }

  // If validation passes, return the validated data
  return result.data
}

// Define a schema for updating a user
const userUpdateSchema = userCreateSchema.partial().omit({ password: true })

export function validateUpdateUser(user: UpdateUserInput): UpdateUserInput {
  const result = userUpdateSchema.safeParse(user)

  if (!result.success) {
    // Throw an error with the validation issues
    throw new CustomError(
      `Validation failed: ${JSON.stringify(result.error.errors.map((err) => err.message))}`,
      400,
    )
  }

  // If validation passes, return the validated data
  return result.data
}
