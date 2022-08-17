import { validDefaultExamples, invalidDefaultExamples } from '../../examples/default'
import * as y from 'yup'

const defaultSchema = y
  .object({
    value: y.string().default('defaulted'),
  })
  .defined()
  .noUnknown()
  .strict()

type DefaultSchema = y.InferType<typeof defaultSchema>

describe('default validation', () => {
  validDefaultExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = defaultSchema.isValidSync(example)

      expect(result).toEqual(true)
    })
  })

  invalidDefaultExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = defaultSchema.isValidSync(example)

      expect(result).toEqual(false)
    })
  })
})
