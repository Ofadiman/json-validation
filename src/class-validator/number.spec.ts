import { IsNumber, Max, Min, validateSync } from 'class-validator'
import { invalidNumberExamples, validNumberExamples } from '../../examples/number'
import { plainToInstance } from 'class-transformer'

class NumberDto {
  @IsNumber()
  @Min(-5)
  @Max(5)
  public value: number
}

describe('number validation', () => {
  validNumberExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      if (example !== null && typeof example === 'object') {
        const instance = plainToInstance(NumberDto, example)
        const result = validateSync(instance, {
          forbidNonWhitelisted: true,
          forbidUnknownValues: true,
          whitelist: true,
        })

        expect(result.length).toEqual(0)
      }
    })
  })

  invalidNumberExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      if (example !== null && typeof example === 'object') {
        const instance = plainToInstance(NumberDto, example)
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
