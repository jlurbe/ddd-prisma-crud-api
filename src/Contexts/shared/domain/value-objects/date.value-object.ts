import { InvalidDateError } from '../errors/invalid-date.error'
import { ValueObject } from './value-object'

export abstract class DateValueObject extends ValueObject<Date> {
  constructor(value: Date) {
    super(value)
    this.ensureIsValidDate(value)
  }

  private ensureIsValidDate(date: Date): void {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      throw new InvalidDateError(this.constructor.name, date)
    }
  }
}
