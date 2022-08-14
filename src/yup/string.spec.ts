import { invalidStringExamples, validStringExamples } from '../../examples/string'
import * as y from 'yup'

const stringSchema = y
  .object({
    value: y.string().min(12).max(20).email().defined(),
  })
  .defined()
  .noUnknown()
  .strict()

type StringSchema = y.InferType<typeof stringSchema>

describe('string validation', () => {
  validStringExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = stringSchema.isValidSync(example)

      expect(result).toEqual(true)
    })
  })

  invalidStringExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = stringSchema.isValidSync(example)

      expect(result).toEqual(false)
    })
  })
})
