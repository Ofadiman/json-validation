/**
 * Validation rules:
 * - Value must be a valid string.
 * - Value must be at least 4 characters long.
 * - Value must be at most 20 characters long.
 * - Value should be a valid email address.
 */

export const validStringExamples = [
  {
    value: 'john.doe@gmail.com',
  },
]

export const invalidStringExamples = [
  {
    value: 'john.doe.but.this.string.is.way.too.long@gmail.com',
  },
  {
    value: 'x@y.z',
  },
  {
    value: 'not email',
  },
  {
    value: 1,
  },
]
