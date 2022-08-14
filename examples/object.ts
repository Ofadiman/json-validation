/**
 * Validation rules:
 * - Value must be a valid object.
 * - Value must be have all key-value pairs matching the key-value pairs declared on the validation schema.
 */

export const validObjectExamples = [
  {
    value: {
      foo: 'foo',
      bar: 1,
    },
  },
]

export const invalidObjectExamples = [
  {
    value: 'not object',
  },
  {
    value: {
      foo: 'foo',
    },
  },
  {
    value: {
      bar: 1,
    },
  },
  {
    value: {},
  },
]
