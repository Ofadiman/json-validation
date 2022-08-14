import { IsNumber, IsObject, IsString, ValidateNested } from 'class-validator'
import { transformAndValidate } from './_utils'
import { invalidObjectExamples, validObjectExamples } from '../../examples/object'
import { Type } from 'class-transformer'

class ValueDto {
  @IsString()
  public foo: string

  @IsNumber()
  public bar: number
}

class ObjectDto {
  @IsObject()
  @Type(() => ValueDto)
  @ValidateNested()
  public value: ValueDto
}

describe('object validation', () => {
  validObjectExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = transformAndValidate(example, ObjectDto)

      expect(result.length).toEqual(0)
    })
  })

  invalidObjectExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = transformAndValidate(example, ObjectDto)

      expect(result.length).toEqual(1)
    })
  })
})
