import { IsBoolean } from 'class-validator'
import { transformAndValidate } from './_utils'
import { invalidBooleanExamples, validBooleanExamples } from '../../examples/boolean'

class BooleanDto {
  @IsBoolean()
  public value: boolean
}

describe('boolean validation', () => {
  validBooleanExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = transformAndValidate(example, BooleanDto)

      expect(result.length).toEqual(0)
    })
  })

  invalidBooleanExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = transformAndValidate(example, BooleanDto)

      expect(result.length).toEqual(1)
    })
  })
})
