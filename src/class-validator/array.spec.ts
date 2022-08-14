import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsString,
  MaxLength,
  MinLength,
  validateSync,
} from 'class-validator'
import { invalidArrayExamples, validArrayExamples } from '../../examples/array'
import { plainToInstance } from 'class-transformer'

class ArrayDto {
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  @MaxLength(5, { each: true })
  @ArrayMinSize(3)
  @ArrayMaxSize(5)
  public value: string[]
}

describe('array validation', () => {
  validArrayExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      if (example !== null && typeof example === 'object') {
        const instance = plainToInstance(ArrayDto, example)
        const result = validateSync(instance, {
          forbidNonWhitelisted: true,
          forbidUnknownValues: true,
          whitelist: true,
        })

        expect(result.length).toEqual(0)
      }
    })
  })

  invalidArrayExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      if (example !== null && typeof example === 'object') {
        const instance = plainToInstance(ArrayDto, example)
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
