import { invalidArrayExamples, validArrayExamples } from '../../examples/array'
import * as y from 'yup'

const arraySchema = y
  .object({
    value: y.array().of(y.string().min(3).max(5).defined()).min(3).max(5).defined(),
  })
  .defined()
  .noUnknown()
  .strict()

type ArraySchema = y.InferType<typeof arraySchema>

describe('array validation', () => {
  validArrayExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {})
  })

  invalidArrayExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {})
  })
})
