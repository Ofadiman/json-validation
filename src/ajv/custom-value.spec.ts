import { invalidCustomValueExamples, validCustomValueExamples } from '../../examples/custom-value'
import Ajv, { JSONSchemaType } from 'ajv'

const ajv = new Ajv()

ajv.addFormat('custom-value', {
  type: 'string',
  validate: (value: unknown): boolean => {
    if (typeof value !== 'string') {
      return false
    }

    const isStartingWithAbc = value.startsWith('abc')
    const isEndingWithQwe = value.endsWith('qwe')

    if (isStartingWithAbc && isEndingWithQwe) {
      return true
    }

    return false
  },
})

type CustomValueSchema = {
  value: string
}

const customValueSchema: JSONSchemaType<CustomValueSchema> = {
  type: 'object',
  properties: {
    value: {
      type: 'string',
      minLength: 10,
      maxLength: 20,
      format: 'custom-value',
    },
  },
  required: ['value'],
  additionalProperties: false,
}

const validate = ajv.compile(customValueSchema)

describe('custom value validation', () => {
  validCustomValueExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = validate(example)

      expect(result).toEqual(true)
    })
  })

  invalidCustomValueExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = validate(example)

      expect(result).toEqual(false)
    })
  })
})
