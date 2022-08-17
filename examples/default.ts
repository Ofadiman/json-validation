/**
 * Validation rules:
 * - Value must be a valid string or undefined.
 */

export const validDefaultExamples = [
  {
    value: 'any string',
  },
  {
    value: undefined,
  },
  {},
]

export const invalidDefaultExamples = [
  {
    value: 1,
  },
  {
    value: null,
  },

  {
    value: {},
  },
  {
    value: [],
  },
  {
    value: true,
  },
  {
    value: 'john.doe@gmail.com',
    unwantedKey: 'unwantedKey',
  },
  'string',
  1,
  [],
  null,
  true,
  undefined,
]
