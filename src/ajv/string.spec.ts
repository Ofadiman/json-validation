import { invalidStringExamples, validStringExamples } from '../../examples/string'
import Ajv, { JSONSchemaType } from 'ajv'
import addFormats from 'ajv-formats'

const ajv = new Ajv()
addFormats(ajv)

type StringSchema = {
  value: string
}

const stringSchema: JSONSchemaType<StringSchema> = {
  type: 'object',
  properties: {
    value: {
      type: 'string',
      minLength: 12,
      maxLength: 20,
      format: 'email',
    },
  },
  required: ['value'],
  additionalProperties: false,
}

const validate = ajv.compile(stringSchema)

describe('string validation', () => {
  validStringExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = validate(example)

      expect(result).toEqual(true)
    })
  })

  invalidStringExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = validate(example)

      expect(result).toEqual(false)
    })
  })
})
