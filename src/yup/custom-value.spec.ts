import * as y from 'yup'
import { invalidCustomValueExamples, validCustomValueExamples } from '../../examples/custom-value'

declare module 'yup' {
  interface StringSchema {
    isCustomValue(): StringSchema
  }
}

y.addMethod(y.string, 'isCustomValue', function () {
  return this.test('custom-email', 'failure message', function (value) {
    if (typeof value !== 'string') {
      return this.createError()
    }

    const isStartingWithAbc = value.startsWith('abc')
    const isEndingWithQwe = value.endsWith('qwe')

    if (isStartingWithAbc && isEndingWithQwe) {
      return true
    }

    return this.createError()
  })
})

const customValueSchema = y
  .object({
    value: y.string().min(10).max(20).isCustomValue(),
  })
  .noUnknown()

describe('custom value validation', () => {
  validCustomValueExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = customValueSchema.isValidSync(example)

      expect(result).toEqual(true)
    })
  })

  invalidCustomValueExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = customValueSchema.isValidSync(example)

      expect(result).toEqual(false)
    })
  })
})
