import { invalidBooleanExamples, validBooleanExamples } from '../../examples/boolean'
import * as s from 'superstruct'

const booleanSchema = s.object({
  value: s.boolean(),
})

type BooleanSchema = s.Infer<typeof booleanSchema>

describe('boolean validation', () => {
  validBooleanExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = booleanSchema.validate(example)

      expect(result[0]).toBeUndefined()
      expect(result[1]).toBeDefined()
    })
  })

  invalidBooleanExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = booleanSchema.validate(example)

      expect(result[0]).toBeInstanceOf(s.StructError)
      expect(result[1]).toBeUndefined()
    })
  })
})
