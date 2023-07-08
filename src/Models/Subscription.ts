import { DetailedAddress } from './Address'

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
   * paypal.
   */
  PayPal = 'paypal',

  /**
   * amazon pay.
   */
  AmazonPay = 'amazonpay',

  /**
   * klarna
   */
  Klarna = 'klarna'
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
   * The ID of the subscription.
   */
  id: string

  /**
   * The ID of the user.
   */
  userId: string

  /**
   * The id of the newspaper.
   */
  newspaperID: string

  /**
   * The edition of the newspaper.
   */
  edition: string

  /**
   * The delivery address
   */
  deliveryAddress: DetailedAddress

  /**
   * The invoice address
   */
  invoiceAddress: DetailedAddress

  /**
   * The subscription interval of the subscription.
   */
  subscriptionInterval: SubscriptionInterval

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
   * Start Day
   */
  startDay: string

  /**
   * The monthly price of the subscription.
   */
  price: number
}
