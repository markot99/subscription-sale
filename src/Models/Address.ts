/**
 * Represents the detailed address of a user with a title, first name and last name.
 */
export interface DetailedAddress extends Address {
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
}

/**
 * Represents the address of a user or a subscription.
 */
export interface Address {
  /**
   * The street of the address.
   */
  street: string
  /**
   * The street number of the address.
   */
  houseNumber: string
  /**
   * The postal code of the address.
   */
  postalCode: string
  /**
   * The city of the address.
   */
  city: string
  /**
   * The country of the address.
   */
  country: string
}
