import { invalidObjectExamples, validObjectExamples } from '../../examples/object'
import * as t from 'typanion'

const objectSchema = t.isObject({
  value: t.isObject({
    foo: t.isString(),
  }),
})

type ObjectSchema = t.InferType<typeof objectSchema>

describe('object validation', () => {
  validObjectExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = objectSchema(example)

      expect(result).toEqual(true)
    })
  })

  invalidObjectExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = objectSchema(example)

      expect(result).toEqual(false)
    })
  })
})
