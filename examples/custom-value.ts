/**
 * Validation rules:
 * - Value must be a valid string.
 * - Value must start with `abc` sequence of characters.
 * - Value must end with `qwe` sequence of characters.
 * - Value must be at least 10 characters long.
 * - Value must be at most 20 characters long.
 */

export const validCustomValueExamples = [
  {
    value: 'abc0123qwe',
  },
  {
    value: 'abc01234567890123qwe',
  },
]

export const invalidCustomValueExamples = [
  {
    value: 'abc012qwe',
  },
  {
    value: 'abc012345678901234qwe',
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
    value: 'abc012qwe',
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
