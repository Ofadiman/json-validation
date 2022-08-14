/**
 * Validation rules:
 * - Value must be a valid array.
 * - Value must be longer than or equal to 3 elements and value must be shorter than or equal to 5 elements.
 * - Value must contain only strings that are longer than or equal to 3 characters and are shorter than or equal to 5.
 */

export const validArrayExamples = [
  {
    value: ['one', 'two', 'three'],
  },
  {
    value: ['one', 'two', 'three', 'four', 'five'],
  },
]

export const invalidArrayExamples = [
  {
    value: ['one', 'two'],
  },
  {
    value: ['one', 'two', 'three', 'four', 'five', 'six'],
  },
  {
    value: ['one', 'two', 'too long'],
  },
  {
    value: ['one', 'two', 'sh'],
  },
  {
    value: [1, 2, 3],
  },
  {
    value: [null, null, null],
  },
  {
    value: [undefined, undefined, undefined],
  },
  {
    value: [true, true, true],
  },
  {
    value: [{}, {}, {}],
  },
  {
    value: [[], [], []],
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
    value: true,
  },
  {
    value: {},
  },
  'string',
  1,
  [],
  null,
  true,
  undefined,
  {},
]
