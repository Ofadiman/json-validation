import { invalidArrayExamples, validArrayExamples } from '../../examples/array'
import { z } from 'zod'

const arraySchema = z
  .object({
    value: z.array(z.string().min(3).max(5)).min(3).max(5),
  })
  .strict()

type ArraySchema = z.infer<typeof arraySchema>

describe('array validation', () => {
  validArrayExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = arraySchema.safeParse(example)

      expect(result.success).toEqual(true)
    })
  })

  invalidArrayExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = arraySchema.safeParse(example)

      expect(result.success).toEqual(false)
    })
  })
})
