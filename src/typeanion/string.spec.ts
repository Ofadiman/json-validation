import { invalidStringExamples, validStringExamples } from '../../examples/string'
import * as t from 'typanion'
import { isEmail } from 'class-validator'

const isEmailValidator = t.makeValidator<string>({
  test: (value, _test): value is string => {
    return isEmail(value)
  },
})

const stringSchema = t.isObject({
  value: t.cascade(t.isString(), [t.hasMinLength(12), t.hasMaxLength(20), isEmailValidator]),
})

type StringSchema = t.InferType<typeof stringSchema>

describe('string validation', () => {
  validStringExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = stringSchema(example)

      expect(result).toEqual(true)
    })
  })

  invalidStringExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = stringSchema(example)

      expect(result).toEqual(false)
    })
  })
})
