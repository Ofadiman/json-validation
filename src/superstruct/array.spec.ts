import { invalidArrayExamples, validArrayExamples } from '../../examples/array'
import * as s from 'superstruct'

const arraySchema = s.object({
  value: s.size(s.array(s.size(s.string(), 3, 5)), 3, 5),
})

type ArraySchema = s.Infer<typeof arraySchema>

describe('array validation', () => {
  validArrayExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = arraySchema.validate(example)

      expect(result[0]).toBeUndefined()
      expect(result[1]).toBeDefined()
    })
  })

  invalidArrayExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = arraySchema.validate(example)

      expect(result[0]).toBeInstanceOf(s.StructError)
      expect(result[1]).toBeUndefined()
    })
  })
})
