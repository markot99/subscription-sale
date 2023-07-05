import { InvoiceAddress } from './InvoiceAddress'

/**
 * The representation of a user.
 */
export interface User {
  /**
   * The id of the user.
   */
  id: string

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
