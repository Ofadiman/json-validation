import { validDefaultExamples, invalidDefaultExamples } from '../../examples/default'
import Ajv, { JSONSchemaType } from 'ajv'

const ajv = new Ajv({ useDefaults: true })

type DefaultSchema = {
  value: string
}

const defaultSchema: JSONSchemaType<DefaultSchema> = {
  type: 'object',
  properties: {
    value: {
      type: 'string',
      default: 'defaulted',
    },
  },
  required: ['value'],
  additionalProperties: false,
}

const validate = ajv.compile(defaultSchema)

describe('default validation', () => {
  validDefaultExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = validate(example)

      expect(result).toEqual(true)
    })
  })

  invalidDefaultExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = validate(example)

      expect(result).toEqual(false)
    })
  })
})
