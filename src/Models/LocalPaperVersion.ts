/**
 * Describes all available local paper versions.
 */
export enum DeliveryDays {
  /**
   * Daily delivery.
   */
  Daily = 'daily', // eslint-disable-line no-unused-vars

  /**
   * Monday to Friday delivery.
   */
  MondayToFriday = 'mondayToFriday', // eslint-disable-line no-unused-vars

  /**
   * Sunday delivery.
   */
  Sunday = 'sunday' // eslint-disable-line no-unused-vars
}

/**
 * Represents a local paper version datagram.
 */
export interface LocalPaperVersion {
  /**
   * The id of the local paper version.
   */
  id: number

  /**
   * The title of the local paper version.
   */
  title: string

  /**
   * The description of the local paper version.
   */
  description: string

  /**
   * The edition of the local paper version.
   */
  editions: string[]

  /**
   * The edition of the local paper version.
   */
  deliveryDays: DeliveryDays[]

  /**
   * The base price of the local paper version.
   */
  basePrice: number

  /**
   * The image url of the local paper version.
   */
  imageUrl: string
}
