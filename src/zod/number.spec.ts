import { invalidNumberExamples, validNumberExamples } from '../../examples/number'
import { z } from 'zod'

const numberSchema = z
  .object({
    value: z.number().min(-5).max(5),
  })
  .strict()

type NumberSchema = z.infer<typeof numberSchema>

describe('number validation', () => {
  validNumberExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = numberSchema.safeParse(example)

      expect(result.success).toEqual(true)
    })
  })

  invalidNumberExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = numberSchema.safeParse(example)

      expect(result.success).toEqual(false)
    })
  })
})
