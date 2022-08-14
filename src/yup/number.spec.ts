import { invalidNumberExamples, validNumberExamples } from '../../examples/number'
import * as y from 'yup'

const numberSchema = y
  .object({
    value: y.number().min(-5).max(5).defined(),
  })
  .defined()
  .noUnknown()
  .strict()

type NumberSchema = y.InferType<typeof numberSchema>

describe('number validation', () => {
  validNumberExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = numberSchema.isValidSync(example)

      expect(result).toEqual(true)
    })
  })

  invalidNumberExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = numberSchema.isValidSync(example)

      expect(result).toEqual(false)
    })
  })
})
