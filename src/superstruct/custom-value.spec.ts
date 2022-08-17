import { invalidCustomValueExamples, validCustomValueExamples } from '../../examples/custom-value'
import * as s from 'superstruct'

const customValue = (): s.Struct<string, null> =>
  s.define('customValue', (value) => {
    if (typeof value !== 'string') {
      return false
    }

    const isStartingWithAbc = value.startsWith('abc')
    const isEndingWithQwe = value.endsWith('qwe')

    if (isStartingWithAbc && isEndingWithQwe) {
      return true
    }

    return false
  })

const stringSchema = s.object({
  value: s.size(
    s.refine(s.string(), 'custom-value', (value) => {
      const isStartingWithAbc = value.startsWith('abc')
      const isEndingWithQwe = value.endsWith('qwe')

      if (isStartingWithAbc && isEndingWithQwe) {
        return true
      }

      return false
    }),
    10,
    20,
  ),
})

type StringSchema = s.Infer<typeof stringSchema>

describe('custom value validation', () => {
  validCustomValueExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = stringSchema.validate(example)

      expect(result[0]).toBeUndefined()
      expect(result[1]).toBeDefined()
    })
  })

  invalidCustomValueExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = stringSchema.validate(example)

      expect(result[0]).toBeInstanceOf(s.StructError)
      expect(result[1]).toBeUndefined()
    })
  })
})
