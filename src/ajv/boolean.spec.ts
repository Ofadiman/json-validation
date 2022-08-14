import { invalidBooleanExamples, validBooleanExamples } from '../../examples/boolean'
import Ajv, { JSONSchemaType } from 'ajv'

const ajv = new Ajv()

type BooleanSchema = {
  value: boolean
}

const booleanSchema: JSONSchemaType<BooleanSchema> = {
  type: 'object',
  properties: {
    value: {
      type: 'boolean',
    },
  },
  required: ['value'],
  additionalProperties: false,
}

const validate = ajv.compile(booleanSchema)

describe('boolean validation', () => {
  validBooleanExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = validate(example)

      expect(result).toEqual(true)
    })
  })

  invalidBooleanExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = validate(example)

      expect(result).toEqual(false)
    })
  })
})
