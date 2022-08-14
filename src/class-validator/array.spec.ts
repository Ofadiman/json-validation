import { IsArray, IsString, MaxLength, MinLength } from 'class-validator'
import { transformAndValidate } from './_utils'
import { invalidArrayExamples, validArrayExamples } from '../../examples/array'

class ArrayDto {
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  @MaxLength(5, { each: true })
  public value: string[]
}

describe('array validation', () => {
  validArrayExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = transformAndValidate(example, ArrayDto)

      expect(result.length).toEqual(0)
    })
  })

  invalidArrayExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = transformAndValidate(example, ArrayDto)

      expect(result.length).toEqual(1)
    })
  })
})
