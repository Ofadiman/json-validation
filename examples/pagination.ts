/**
 *
 */

enum Status {
  Active = 'active',
  Disabled = 'disabled',
  Banned = 'banned',
}

const $equal = ['status', 'equal', Status.Active]
const $notEqual = ['status', 'notEqual', Status.Banned]

const $starts = ['username', 'starts', 'Jo', 'case-sensitive']
const $ends = ['username', 'ends', 'th', 'case-insensitive']
const $matches = ['username', 'matches', 'on', 'case-insensitive']

const $in = ['status', 'in', [Status.Banned, Status.Disabled]]
const $notIn = ['status', 'notIn', [Status.Banned, Status.Disabled]]

const $isNull = ['profilePictureId', 'isNull']
const $isNotNull = ['profilePictureId', 'isNotNull']

const $between = ['age', 'between', [20, 40]]
const $greaterThan = ['age', 'greaterThan', 20]
const $greaterThanOrEqual = ['email', 'greaterThanOrEqual', 30]
const $lessThan = ['age', 'lessThan', 20]
const $lessThanOrEqual = ['email', 'lessThanOrEqual', 30]

const sort = {
  username: 'asc',
  age: 'desc',
}

const filters = {
  between: {
    age: [20, 40],
  },
  lessThanOrEqual: {
    email: 50,
  },
  in: {
    status: [Status.Banned, Status.Disabled],
  },
}

const pagination = {
  pagination: {
    meta: {
      page: 2,
      perPage: 3,
      totalCount: 200,
    },
    filters: [],
    sort: [
      ['username', 'asc'],
      ['age', 'desc'],
    ],
  },
  data: [
    {
      username: 'John doe',
      age: 25,
    },
    {
      username: 'James Smith',
      age: 35,
    },
    {
      username: 'Jacob Johnson',
      age: 45,
    },
  ],
  links: {
    first: 'https://example.com/users?perPage=3&page=2',
    previous: 'https://example.com/users?perPage=3&page=2',
    current: 'https://example.com/users?perPage=3&page=2',
    next: 'https://example.com/users?perPage=3&page=2',
    last: 'https://example.com/users?perPage=3&page=2',
  },
}
