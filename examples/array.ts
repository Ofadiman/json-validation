/**
 * Validation rules:
 * - Value must be a valid array.
 * - Value must contain only strings that are longer than or equal to 3 characters and are shorter than or equal to 5.
 */

export const validArrayExamples = [
  {
    value: ['one', 'two', 'three'],
  },
]

export const invalidArrayExamples = [
  {
    value: [1, 2, 3],
  },
  {
    value: ['one', 'two', 'too long'],
  },
  {
    value: ['one', 'two', 'sh'],
  },
  {
    value: 'not array',
  },
]
