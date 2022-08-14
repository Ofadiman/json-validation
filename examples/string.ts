/**
 * Validation rules:
 * - Value must be a valid string.
 * - Value must be at least 12 characters long.
 * - Value must be at most 20 characters long.
 * - Value should be a valid email address.
 */

export const validStringExamples = [
  {
    value: 'john.first@gmail.com',
  },
  {
    value: 'john.doe@gmail.com',
  },
  {
    value: 'xd@gmail.com',
  },
]

export const invalidStringExamples = [
  {
    value: 'john.first2@gmail.com',
  },
  {
    value: 'd@gmail.com',
  },
  {
    value: 'not email',
  },
  {
    value: 1,
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
  {},
]
