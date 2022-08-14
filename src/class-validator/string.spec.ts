import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'
import { invalidStringExamples, validStringExamples } from '../../examples/string'
import { transformAndValidate } from './_utils'

class StringDto {
  @IsString()
  @MaxLength(20)
  @MinLength(4)
  @IsEmail()
  public value: string
}

describe('string validation', () => {
  validStringExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = transformAndValidate(example, StringDto)

      expect(result.length).toEqual(0)
    })
  })

  invalidStringExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = transformAndValidate(example, StringDto)

      expect(result.length).toEqual(1)
    })
  })
})
