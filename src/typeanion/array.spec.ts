import { invalidArrayExamples, validArrayExamples } from '../../examples/array'
import * as t from 'typanion'

const arraySchema = t.isObject({
  value: t.cascade(t.isArray(t.cascade(t.isString(), [t.hasMinLength(3), t.hasMaxLength(5)])), [
    t.hasMinLength(3),
    t.hasMaxLength(5),
  ]),
})

type ArraySchema = t.InferType<typeof arraySchema>

describe('array validation', () => {
  validArrayExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = arraySchema(example)

      expect(result).toEqual(true)
    })
  })

  invalidArrayExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = arraySchema(example)

      expect(result).toEqual(false)
    })
  })
})
