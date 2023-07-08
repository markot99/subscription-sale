import { Address } from './Address'

/**
 * Describes all possible titles of a user.
 */
export enum UserTitle {
  /**
   * The title Mr.
   */
  Mr = 'mr',

  /**
   * The title Ms.
   */
  Ms = 'ms',

  /**
   * The title for other genders.
   */
  Other = 'other'
}

/**
 * The representation of a user.
 */
export interface User {
  /**
   * The id of the user.
   */
  id: string

  /**
   * The title of the user.
   */
  title: string

  /**
   * The first name of the user.
   */
  firstName: string

  /**
   * The last name of the user.
   */
  lastName: string

  /**
   * The email of the user.
   */
  email: string

  /**
   * The password of the user.
   */
  password: string

  /**
   * The invoice address of the user.
   */
  invoiceAddress: Address
}
