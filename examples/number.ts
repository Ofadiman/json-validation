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
    value: -5.0000001,
  },
  {
    value: 5.0000001,
  },
  {
    value: 'not number',
  },
]
