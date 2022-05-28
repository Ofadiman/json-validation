export enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'Large',
}

/**
 * Example JSON that may come to the API.
 */
export const baseline = {
  /**
   * A field of type boolean that can have a value of either `true` or `false`.
   */
  boolean: true,
  /**
   * A field of type integer that can have a value between 1 and 100.
   */
  integer: 1,
  /**
   * A field of type float that can have a value from -100 to 100 and can have a maximum of 3 decimal places.
   */
  float: 1.555,
  /**
   * A field of type number that can have a value from 0 to 10 or 90 to 100. This field can accept numbers of type integer or float. In this case, it will be a number of type float because it is more difficult to validate.
   */
  range: 5.65,
  /**
   * A field of type string that is in ISO8601 date format.
   */
  datetime: '2022-05-23T12:00:00.000Z',
  /**
   * A field of type string that takes a value from an enum.
   */
  enum: Size.Medium,
  /**
   * A field of type string that is in JWT format.
   */
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIifQ.UIZchxQD36xuhacrJF9HQ5SIUxH5HBiv9noESAacsxU',
  /**
   * A field of type string that is in UUID format.
   */
  uuid: 'aa4b72ff-8280-41b8-a3ca-0d6e9cf0f935',
  /**
   * A field of type string that is in either email or phone number format. In this example, the field took the format of an email address, but it could just as easily be a cell phone number (+48123456789). The minimum field length is 4 characters and the maximum is 200 characters.
   */
  login: 'john.doe@gmail.com',
  /**
   * A field of type string that is in password format. Validation of a password may be that it has at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character. Additionally, I may want to check the entropy of the password.
   */
  password: 'Asdf1234!',
  /**
   * A field of type string that contains a number. When validating numbers in string format I also need to be able to check the maximum and minimum value of the number, its type (integer or float) and the number of decimal places.
   */
  number: '100200300400500600700800900.100200300',
}
