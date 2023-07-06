/**
 * Describes all possible subscription types.
 */
export type SubscriptionType = 'Printed' | 'E-Paper' | 'Website'

/**
 * Describes all possible delivery methods.
 */
export type DeliveryMethod = 'Post' | 'Delivery Man'

/**
 * Describes all possible payment types.
 */
export type PaymentType = 'Credit Card' | 'Direct Debit'

/**
 * Describes all possible payment intervals.
 */
export type PaymentInterval = 'Annual' | 'Monthly'

/**
 * Describes all possible subscription intervals.
 */
export type SubscriptionInterval = 'Daily' | 'Weekends'

/**
 * Represents a subscription.
 */
export interface Subscription {
  /**
   * The id of the subscription.
   */
  id: number

  /**
   * The id of the customer.
   */
  cid: number

  /**
   * The date when the subscription was created.
   */
  created: Date

  /**
   * The date when the subscription has started.
   */
  startDate: Date

  /**
   * The date when the subscription has ended.
   */
  endDate: Date

  /**
   * Indictes whether the data privacy was accepted.
   */
  dataPrivacyAccepted: boolean

  /**
   * The type of the subscription.
   */
  type: SubscriptionType

  /**
   * The delivery method of the subscription.
   */
  deliveryMethod: DeliveryMethod

  /**
   * The payment type of the subscription.
   */
  paymentType: PaymentType

  /**
   * The payment interval of the subscription.
   */
  paymentInterval: PaymentInterval

  /**
   * The subscription interval of the subscription.
   */
  subscriptionInterval: SubscriptionInterval

  /**
   * The price of the subscription per paper.
   */
  calculatedPricePerPaper: number

  /**
   * The price of the subscription per year.
   */
  calculatedPricePerYear: number

  /**
   * The number of local paper version.
   */
  localPaperVersions: number
}

/**
 * Represents a subscription offer.
 */
export interface SubscriptionOffer {
  /**
   * The id of the subscription offer.
   */
  id: string

  /**
   * The title of the subscription offer.
   */
  title: string

  /**
   * A short description of the subscription offer.
   */
  description: string

  /**
   * The price of the subscription.
   */
  price: number

  /**
   * The image of the subscription offer.
   */
  img: string
}
