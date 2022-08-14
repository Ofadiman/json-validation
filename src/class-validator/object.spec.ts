import { IsObject, IsString, ValidateNested, validateSync } from 'class-validator'
import { invalidObjectExamples, validObjectExamples } from '../../examples/object'
import { plainToInstance, Type } from 'class-transformer'

class ValueDto {
  @IsString()
  public foo: string
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
      if (example !== null && typeof example === 'object') {
        const instance = plainToInstance(ObjectDto, example)
        const result = validateSync(instance, {
          forbidNonWhitelisted: true,
          forbidUnknownValues: true,
          whitelist: true,
        })

        expect(result.length).toEqual(0)
      }
    })
  })

  invalidObjectExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      if (example !== null && typeof example === 'object') {
        const instance = plainToInstance(ObjectDto, example)
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
