import { invalidStringExamples, validStringExamples } from '../../examples/string'
import * as s from 'superstruct'
import { isEmail } from 'class-validator'

const email = (): s.Struct<string, null> =>
  s.define('email', (value) => {
    if (s.is(value, s.string())) {
      return isEmail(value)
    }

    return false
  })

const stringSchema = s.object({
  value: s.size(email(), 12, 20),
})

type StringSchema = s.Infer<typeof stringSchema>

describe('string validation', () => {
  validStringExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = stringSchema.validate(example)

      expect(result[0]).toBeUndefined()
      expect(result[1]).toBeDefined()
    })
  })

  invalidStringExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = stringSchema.validate(example)

      expect(result[0]).toBeInstanceOf(s.StructError)
      expect(result[1]).toBeUndefined()
    })
  })
})
