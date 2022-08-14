import { invalidStringExamples, validStringExamples } from '../../examples/string'
import { z } from 'zod'

const stringSchema = z.object({
  value: z.string().min(4).max(20).email(),
})

type StringSchema = z.infer<typeof stringSchema>

describe('string validation', () => {
  validStringExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = stringSchema.safeParse(example)

      expect(result.success).toEqual(true)
    })
  })

  invalidStringExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = stringSchema.safeParse(example)

      expect(result.success).toEqual(false)
    })
  })
})
