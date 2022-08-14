import { IsNumber, Max, Min } from 'class-validator'
import { invalidNumberExamples, validNumberExamples } from '../../examples/number'
import { transformAndValidate } from './_utils'

class NumberDto {
  @IsNumber()
  @Min(-5)
  @Max(5)
  public value: number
}

describe('number validation', () => {
  validNumberExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = transformAndValidate(example, NumberDto)

      expect(result.length).toEqual(0)
    })
  })

  invalidNumberExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = transformAndValidate(example, NumberDto)

      expect(result.length).toEqual(1)
    })
  })
})
