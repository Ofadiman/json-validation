import { invalidNumberExamples, validNumberExamples } from '../../examples/number'
import * as t from 'typanion'

const numberSchema = t.isObject({
  value: t.cascade(t.isNumber(), [t.isInInclusiveRange(-5, 5)]),
})

type NumberSchema = t.InferType<typeof numberSchema>

describe('number validation', () => {
  validNumberExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = numberSchema(example)

      expect(result).toEqual(true)
    })
  })

  invalidNumberExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = numberSchema(example)

      expect(result).toEqual(false)
    })
  })
})
