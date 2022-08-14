import { invalidBooleanExamples, validBooleanExamples } from '../../examples/boolean'
import * as y from 'yup'

const booleanSchema = y
  .object({
    value: y.boolean().defined(),
  })
  .defined()
  .noUnknown()
  .strict()

type BooleanSchema = y.InferType<typeof booleanSchema>

describe('boolean validation', () => {
  validBooleanExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = booleanSchema.isValidSync(example)

      expect(result).toEqual(true)
    })
  })

  invalidBooleanExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = booleanSchema.isValidSync(example)

      expect(result).toEqual(false)
    })
  })
})
