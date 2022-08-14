import { invalidObjectExamples, validObjectExamples } from '../../examples/object'
import { z } from 'zod'

const objectSchema = z
  .object({
    value: z
      .object({
        foo: z.string(),
      })
      .strict(),
  })
  .strict()

type ObjectSchema = z.infer<typeof objectSchema>

describe('object validation', () => {
  validObjectExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = objectSchema.safeParse(example)

      expect(result.success).toEqual(true)
    })
  })

  invalidObjectExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = objectSchema.safeParse(example)

      expect(result.success).toEqual(false)
    })
  })
})
