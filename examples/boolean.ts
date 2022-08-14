/**
 * Validation rules:
 * - Value must be a valid boolean.
 */

export const validBooleanExamples = [
  {
    value: true,
  },
  {
    value: false,
  },
]

export const invalidBooleanExamples = [
  {
    value: true,
    unwantedKey: 'unwantedKey',
  },
  {
    value: null,
  },
  {
    value: undefined,
  },
  {
    value: {},
  },
  {
    value: [],
  },
  {
    value: 'string',
  },
  'string',
  1,
  [],
  null,
  true,
  undefined,
  {},
]
