import { InvoiceAddress } from './InvoiceAddress'

/**
 * Describes all possible titles of a user.
 */
export enum UserTitle {
  /**
   * No title.
   */
  None = 'None',

  /**
   * The title Mr.
   */
  Mr = 'Mr',

  /**
   * The title Ms.
   */
  Ms = 'Ms',

  /**
   * The title Dr.
   */
  Dr = 'Dr'
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
  invoiceAddress: InvoiceAddress
}
