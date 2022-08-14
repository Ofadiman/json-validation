/**
 * Validation rules:
 * - Value must be a valid number.
 * - Value must be greater than or equal to -5.
 * - Value must be lest than or equal to 5.
 */

export const validNumberExamples = [
  {
    value: -5,
  },
  {
    value: 5,
  },
  {
    value: 0,
  },
]

export const invalidNumberExamples = [
  {
    value: 0,
    unwantedKey: 'unwantedKey',
  },
  {
    value: -5.0000001,
  },
  {
    value: 5.0000001,
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
    value: {},
  },
  {
    value: [],
  },
  {
    value: true,
  },
  'string',
  1,
  [],
  null,
  true,
  undefined,
  {},
]
