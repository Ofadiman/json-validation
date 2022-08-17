import { invalidDefaultExamples, validDefaultExamples } from '../../examples/default'
import { IsString, validateSync } from 'class-validator'
import { plainToInstance, Transform } from 'class-transformer'
import { TransformFnParams } from 'class-transformer/types/interfaces'

const Default = (defaultValue: unknown) => {
  return Transform((transformFnParams: TransformFnParams) => {
    if (transformFnParams.value === undefined) {
      return defaultValue
    }

    return transformFnParams.value
  })
}

class StringDto {
  @IsString()
  @Default('defaulted')
  public value: string
}

describe('default validation', () => {
  validDefaultExamples.forEach((example) => {
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

  invalidDefaultExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      if (example !== null && typeof example === 'object') {
        const instance = plainToInstance(StringDto, example)
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
