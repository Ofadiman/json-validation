import { invalidNumberExamples, validNumberExamples } from '../../examples/number'
import * as s from 'superstruct'

const numberSchema = s.object({
  value: s.max(s.min(s.number(), -5), 5),
})

type NumberSchema = s.Infer<typeof numberSchema>

describe('number validation', () => {
  validNumberExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = numberSchema.validate(example)

      expect(result[0]).toBeUndefined()
      expect(result[1]).toBeDefined()
    })
  })

  invalidNumberExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = numberSchema.validate(example)

      expect(result[0]).toBeInstanceOf(s.StructError)
      expect(result[1]).toBeUndefined()
    })
  })
})
