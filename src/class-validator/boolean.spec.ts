import { IsBoolean, validateSync } from 'class-validator'
import { invalidBooleanExamples, validBooleanExamples } from '../../examples/boolean'
import { plainToInstance } from 'class-transformer'

class BooleanDto {
  @IsBoolean()
  public value: boolean
}

describe('boolean validation', () => {
  validBooleanExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      if (example !== null && typeof example === 'object') {
        const instance = plainToInstance(BooleanDto, example)
        const result = validateSync(instance, {
          forbidNonWhitelisted: true,
          forbidUnknownValues: true,
          whitelist: true,
        })

        expect(result.length).toEqual(0)
      }
    })
  })

  invalidBooleanExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      if (example !== null && typeof example === 'object') {
        const instance = plainToInstance(BooleanDto, example)
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
