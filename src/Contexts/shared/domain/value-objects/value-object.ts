import { ValueNotDefinedError } from '../errors/value-not-defined.error'

export type Primitives = string | number | boolean | boolean | Date

export abstract class ValueObject<T extends Primitives> {
  readonly value: T

  constructor(value: T) {
    this.value = value
    this.ensureValueIsDefined(value)
  }

  private ensureValueIsDefined(value: T): void {
    if (value === null || value === undefined) {
      throw new ValueNotDefinedError(this.constructor.name, value)
    }
  }

  equals(other: ValueObject<T>): boolean {
    return (
      other.constructor.name === this.constructor.name &&
      other.value === this.value
    )
  }

  toString(): string {
    return this.value.toString()
  }
}
