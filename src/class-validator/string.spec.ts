import { IsEmail, IsString, MaxLength, MinLength, validateSync } from 'class-validator'
import { invalidStringExamples, validStringExamples } from '../../examples/string'
import { plainToInstance } from 'class-transformer'

class StringDto {
  @IsString()
  @MaxLength(20)
  @MinLength(12)
  @IsEmail()
  public value: string
}

describe('string validation', () => {
  validStringExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      if (example !== null && typeof example === 'object') {
        const instance = plainToInstance(StringDto, example)
        const result = validateSync(instance, {
          forbidNonWhitelisted: true,
          forbidUnknownValues: true,
          whitelist: true,
        })

        expect(result.length).toEqual(0)
      }
    })
  })

  invalidStringExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      if (example !== null && typeof example === 'object') {
        const instance = plainToInstance(StringDto, example)
        const result = validateSync(instance, {
          forbidNonWhitelisted: true,
          forbidUnknownValues: true,
          whitelist: true,
        })

        expect(result.length).toEqual(1)
      }
    })
  })
})
