import { invalidArrayExamples, validArrayExamples } from '../../examples/array'
import Ajv, { JSONSchemaType } from 'ajv'

const ajv = new Ajv()

type ArraySchema = {
  value: string[]
}

const arraySchema: JSONSchemaType<ArraySchema> = {
  type: 'object',
  properties: {
    value: {
      type: 'array',
      items: {
        type: 'string',
        minLength: 3,
        maxLength: 5,
      },
      minItems: 3,
      maxItems: 5,
    },
  },
  required: ['value'],
  additionalProperties: false,
}

const validate = ajv.compile(arraySchema)

describe('array validation', () => {
  validArrayExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {})
  })

  invalidArrayExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {})
  })
})
