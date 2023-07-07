/**
 * Describes all possible subscription types.
 */
export const SubscriptionTypes = ['Printed', 'E-Paper', 'Website'] as const
export type SubscriptionType = (typeof SubscriptionTypes)[number]

/**
 * Describes all possible delivery methods.
 */
export enum DeliveryMethod {
  /**
   * deliver via post.
   */
  Post = 'post',

  /**
   * deliver via an delivery man.
   */
  DeliveryMan = 'deliveryMan'
}

/**
 * Describes all possible payment types.
 */
export enum PaymentType {
  /**
   * credit card.
   */
  CreditCard = 'creditCard',

  /**
   * debit card.
   */
  DirectDebit = 'directDebit'
}

/**
 * Describes all possible payment intervals.
 */
export enum PaymentInterval {
  /**
   * annual payment.
   */
  Annual = 'annual',

  /**
   * monthly payment.
   */
  Monthly = 'monthly'
}

/**
 * Describes all possible subscription intervals.
 */
export enum SubscriptionInterval {
  /**
   * daily subscription.
   */
  Daily = 'daily',

  /**
   * weekly subscription.
   */
  Weekends = 'weekends'
}

/**
 * Represents a subscription.
 */
export interface Subscription {
  /**
   * The id of the subscription.
   */
  id: string

  /**
   * The id of the customer.
   */
  userId: string

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
   * The price of the subscription per year.
   */
  price: number

  /**
   * The number of local paper version.
   */
  localPaperVersions: number
}
