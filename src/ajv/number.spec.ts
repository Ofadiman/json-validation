import { invalidNumberExamples, validNumberExamples } from '../../examples/number'
import Ajv, { JSONSchemaType } from 'ajv'

const ajv = new Ajv()

type NumberSchema = {
  value: number
}

const numberSchema: JSONSchemaType<NumberSchema> = {
  type: 'object',
  properties: {
    value: {
      type: 'number',
      minimum: -5,
      maximum: 5,
    },
  },
  required: ['value'],
  additionalProperties: false,
}

const validate = ajv.compile(numberSchema)

describe('number validation', () => {
  validNumberExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = validate(example)

      expect(result).toEqual(true)
    })
  })

  invalidNumberExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = validate(example)

      expect(result).toEqual(false)
    })
  })
})
