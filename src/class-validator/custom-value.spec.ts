import { invalidCustomValueExamples, validCustomValueExamples } from '../../examples/custom-value'
import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  validateSync,
  MinLength,
  MaxLength,
} from 'class-validator'
import { plainToInstance } from 'class-transformer'

export function IsCustomValue(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isCustomValue',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions as ValidationOptions,
      validator: {
        validate(value: unknown, _validationArguments?: ValidationArguments): boolean {
          if (typeof value !== 'string') {
            return false
          }

          const isStartingWithAbc = value.startsWith('abc')
          const isEndingWithQwe = value.endsWith('qwe')

          if (isStartingWithAbc && isEndingWithQwe) {
            return true
          }

          return false
        },
      },
    })
  }
}

class CustomValueDto {
  @IsCustomValue()
  @MinLength(10)
  @MaxLength(20)
  public value: string
}

describe('custom value validation', () => {
  validCustomValueExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      if (example !== null && typeof example === 'object') {
        const instance = plainToInstance(CustomValueDto, example)
        const result = validateSync(instance, {
          forbidNonWhitelisted: true,
          forbidUnknownValues: true,
          whitelist: true,
        })

        expect(result.length).toEqual(0)
      }
    })
  })

  invalidCustomValueExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      if (example !== null && typeof example === 'object') {
        const instance = plainToInstance(CustomValueDto, example)
        const result = validateSync(instance, {
          forbidNonWhitelisted: true,
          forbidUnknownValues: true,
          whitelist: true,
        })

        expect(result.length).toBeGreaterThanOrEqual(1)
      }
    })
  })
})
