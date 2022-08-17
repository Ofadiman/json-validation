import { invalidCustomValueExamples, validCustomValueExamples } from '../../examples/custom-value'
import { z } from 'zod'

const customValueSchema = z
  .object({
    value: z
      .string()
      .min(10)
      .max(20)
      .refine(
        (value) => {
          const isStartingWithAbc = value.startsWith('abc')
          const isEndingWithQwe = value.endsWith('qwe')

          if (isStartingWithAbc && isEndingWithQwe) {
            return true
          }

          return false
        },
        {
          message: 'Must match custom value validation!',
        },
      ),
  })
  .strict()

type CustomValueSchema = z.infer<typeof customValueSchema>

describe('custom value validation', () => {
  validCustomValueExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = customValueSchema.safeParse(example)

      expect(result.success).toEqual(true)
    })
  })

  invalidCustomValueExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = customValueSchema.safeParse(example)

      expect(result.success).toEqual(false)
    })
  })
})
