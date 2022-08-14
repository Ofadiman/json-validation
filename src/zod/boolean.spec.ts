import { invalidBooleanExamples, validBooleanExamples } from '../../examples/boolean'
import { z } from 'zod'

const booleanSchema = z
  .object({
    value: z.boolean(),
  })
  .strict()

type BooleanSchema = z.infer<typeof booleanSchema>

describe('boolean validation', () => {
  validBooleanExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = booleanSchema.safeParse(example)

      expect(result.success).toEqual(true)
    })
  })

  invalidBooleanExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = booleanSchema.safeParse(example)

      expect(result.success).toEqual(false)
    })
  })
})
