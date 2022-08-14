import { invalidObjectExamples, validObjectExamples } from '../../examples/object'
import * as y from 'yup'

const objectSchema = y
  .object({
    value: y
      .object({
        foo: y.string().defined(),
      })
      .defined()
      .noUnknown()
      .strict(),
  })
  .defined()
  .noUnknown()
  .strict()

type ObjectSchema = y.InferType<typeof objectSchema>

describe('object validation', () => {
  validObjectExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = objectSchema.isValidSync(example)

      expect(result).toEqual(true)
    })
  })

  invalidObjectExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = objectSchema.isValidSync(example)

      expect(result).toEqual(false)
    })
  })
})
