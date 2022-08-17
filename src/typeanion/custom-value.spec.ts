import { invalidCustomValueExamples, validCustomValueExamples } from '../../examples/custom-value'
import * as t from 'typanion'

const isCustomValue = t.makeValidator<string>({
  test: (value, _test): value is string => {
    const isStartingWithAbc = value.startsWith('abc')
    const isEndingWithQwe = value.endsWith('qwe')

    if (isStartingWithAbc && isEndingWithQwe) {
      return true
    }

    return false
  },
})

const customValueSchema = t.isObject({
  value: t.cascade(t.isString(), [t.hasMinLength(10), t.hasMaxLength(20), isCustomValue]),
})

type StringSchema = t.InferType<typeof customValueSchema>

describe('custom value validation', () => {
  validCustomValueExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = customValueSchema(example)

      expect(result).toEqual(true)
    })
  })

  invalidCustomValueExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = customValueSchema(example)

      expect(result).toEqual(false)
    })
  })
})
