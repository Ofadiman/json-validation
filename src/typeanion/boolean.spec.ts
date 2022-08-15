import { invalidBooleanExamples, validBooleanExamples } from '../../examples/boolean'
import * as t from 'typanion'

const booleanSchema = t.isObject({
  value: t.isBoolean(),
})

type BooleanSchema = t.InferType<typeof booleanSchema>

describe('boolean validation', () => {
  validBooleanExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = booleanSchema(example)

      expect(result).toEqual(true)
    })
  })

  invalidBooleanExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = booleanSchema(example)

      expect(result).toEqual(false)
    })
  })
})
