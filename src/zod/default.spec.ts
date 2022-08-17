import { validDefaultExamples, invalidDefaultExamples } from '../../examples/default'
import { z } from 'zod'

const stringSchema = z
  .object({
    value: z.string().default('defaulted'),
  })
  .strict()

type DefaultSchema = z.infer<typeof stringSchema>

describe('default validation', () => {
  validDefaultExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = stringSchema.safeParse(example)

      expect(result.success).toEqual(true)
    })
  })

  invalidDefaultExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = stringSchema.safeParse(example)

      expect(result.success).toEqual(false)
    })
  })
})
