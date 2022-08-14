/**
 * Validation rules:
 * - Value must be a valid object.
 * - Value must be have all key-value pairs matching the key-value pairs declared on the validation schema.
 */

export const validObjectExamples = [
  {
    value: {
      foo: 'foo',
    },
  },
]

export const invalidObjectExamples = [
  // Missing required key.
  {
    value: {},
  },
  // Too many keys.
  {
    value: {
      foo: 'foo',
      bar: 'bar',
    },
  },
  {
    value: 'string',
  },
  {
    value: null,
  },
  {
    value: undefined,
  },
  {
    value: [],
  },
  {
    value: true,
  },
  {
    value: {
      foo: null,
    },
  },
  {
    value: {
      foo: undefined,
    },
  },
  {
    value: {
      foo: {},
    },
  },
  {
    value: {
      foo: [],
    },
  },
  {
    value: {
      foo: true,
    },
  },
  {
    value: {
      foo: 'foo',
    },
    unwantedKey: 'unwantedKey',
  },
  {
    value: {
      foo: 'foo',
      unwantedKey: 'unwantedKey',
    },
  },
  {
    value: {
      foo: 'foo',
      unwantedKey: 'unwantedKey',
    },
    unwantedKey: 'unwantedKey',
  },
  'string',
  1,
  [],
  null,
  true,
  undefined,
  {},
]
