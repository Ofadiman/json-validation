import { invalidObjectExamples, validObjectExamples } from '../../examples/object'
import * as s from 'superstruct'

const objectSchema = s.object({
  value: s.object({
    foo: s.string(),
  }),
})

type ObjectSchema = s.Infer<typeof objectSchema>

describe('object validation', () => {
  validObjectExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = objectSchema.validate(example)

      expect(result[0]).toBeUndefined()
      expect(result[1]).toBeDefined()
    })
  })

  invalidObjectExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = objectSchema.validate(example)

      expect(result[0]).toBeInstanceOf(s.StructError)
      expect(result[1]).toBeUndefined()
    })
  })
})
