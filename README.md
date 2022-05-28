# What are the requirements for data validation?

JSON schema supports the following data types:

- `array`
- `boolean`
- `null`
- `number`
- `object`
- `string`

There are several assumptions when building the API schema:

- The value `null` never occurs by itself in the API. However, fields declared in the API can be `nullable`.
- It is possible that a field is declared `optional`. If the JSON passed to the validation does not contain a field declared as `optional`, then the validation of this field simply does not take place.
- It is possible that a field will take values from 2 or more types (e.g. `string | number`).

# Validation requirements

1. I have to be able to prohibit validation of an object if it contains keys that are not expected.

# Validating booleans

Validation of a field of type boolean requires no comment.

# Validating numbers

I consider the following factors when validating a number field:

- Is it an integer or a float?
- What is the maximum number of digits after the decimal point?
- What is the maximum value?
- What is the minimum value?
- What is the range of values? For example, I may want to validate if a number is between 0 and 10 or 90 and 100.

# Validating strings

I consider the following factors when validating a string field:

- What is the format of the value? For example, I would like to check formats such as `unknown` (can be any string), `date time`, `enum`, `jwt`, `uuid`, `email`, `mobile phone number`, `url`, `password`, `hostname`, `number`, `binary` (from swagger specification), `byte` (from swagger specification).
- What is the maximum length of the value?
- What is the minimum length of the value?

# Validating objects

I define an object as a collection of key-value pairs where key names are known in advance.

I consider the following factors when validating an object field:

- Is the key name matching the name I defined it?
- Is the value of a given key matching the schema I declared for that key?

# Validating maps

A map is a special type of object in which the key names are unknown.

I consider the following factors when validating a map field:

- Is the key name in the correct type? For example, I want to have a map where keys can be either integers or strings.
- Is the key name included in the key names I allow? For example, I would like the keys in the map to be in `cats`, `dogs` or `birds` only.
- Is the value of a given key matching the schema I declared for that key?

# Validating arrays

I consider the following factors when validating an array field:

- What is the maximum length of the array?
- What is the minimum length of the array?
- What is the schema of elements in the array? For example, I want to have an array of integers between 1 and 10, I want to have an array of objects that match specified schema, I want to have an array of objects that match one of 2 or more specified schemas, I want to have an array of arrays of integers between 1 and 10, I want to have an array of tuples.

# Validating sets

Set is a spacial case of array when every single value is unique.

I consider the following factors when validating a set field:

- All considerations for validating arrays.
- Is there any duplicated item?

# Spacial scenarios

- There is a change that I will have an endpoint that allows request body to be sent in one of 2 or more declared formats.
- Tree validation is a special case that requires the ability to recursively validate the children of a selected node.

# Resources

- [A library that provides methods for pagination, sorting, and filtering in the API.](https://www.npmjs.com/package/nestjs-paginate)
- [Official OpenAPI specification.](https://swagger.io/specification/)
