import { validDefaultExamples, invalidDefaultExamples } from '../../examples/default'
import * as s from 'superstruct'

const defaultSchema = s.object({
  value: s.defaulted(s.string(), 'defaulted'),
})

type DefaultSchema = s.Infer<typeof defaultSchema>

describe('default validation', () => {
  validDefaultExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const [error, value] = s.validate(example, defaultSchema, { coerce: true })

      expect(error).toBeUndefined()
    })
  })

  invalidDefaultExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = defaultSchema.validate(example)

      expect(result[0]).toBeInstanceOf(s.StructError)
      expect(result[1]).toBeUndefined()
    })
  })
})
