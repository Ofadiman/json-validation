import { invalidObjectExamples, validObjectExamples } from '../../examples/object'
import Ajv, { JSONSchemaType } from 'ajv'

const ajv = new Ajv()

type ObjectSchema = {
  value: {
    foo: string
  }
}

const objectSchema: JSONSchemaType<ObjectSchema> = {
  type: 'object',
  properties: {
    value: {
      type: 'object',
      properties: {
        foo: {
          type: 'string',
        },
      },
      required: ['foo'],
      additionalProperties: false,
    },
  },
  required: ['value'],
  additionalProperties: false,
}

const validate = ajv.compile(objectSchema)

describe('object validation', () => {
  validObjectExamples.forEach((example) => {
    it(`should pass validation for ${JSON.stringify(example)}`, () => {
      const result = validate(example)

      expect(result).toEqual(true)
    })
  })

  invalidObjectExamples.forEach((example) => {
    it(`should fail validation for ${JSON.stringify(example)}`, () => {
      const result = validate(example)

      expect(result).toEqual(false)
    })
  })
})
