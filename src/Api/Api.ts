import { v4 as uuidv4 } from 'uuid'
import { DeliveryMethod, PaymentInterval, PaymentType, Subscription, SubscriptionInterval } from '../Models/Subscription'
import { User } from '../Models/User'
import { ApiLog } from './ApiLog'
import { ApiUtils } from './ApiUtils'

/**
 * Represents a fake user for demonstration purposes.
 */
const adminUser: User = {
  id: '3f496ef7-8986-4907-b7a2-224aa2f195a7',
  title: 'mr',
  firstName: 'Ben',
  lastName: 'Kenobi',
  email: 'ben.kenobi@hello.there',
  password: '0000',
  invoiceAddress: {
    street: 'Jedi Temple',
    houseNumber: 'One',
    postalCode: '77777',
    city: 'Courescant',
    country: 'Courescant'
  }
}

const adminSubscription: Subscription = {
  id: 'b8b396ed-9d98-40c3-9049-d850cf90f60d',
  userId: '3f496ef7-8986-4907-b7a2-224aa2f195a7',
  newspaper: 'Reutlinger Bote',
  edition: 'Stadtausgabe',
  deliveryAddress: {
    title: 'dummy',
    firstName: 'dummy',
    lastName: 'dummy',
    street: 'Jedi Temple',
    houseNumber: 'One',
    postalCode: '77777',
    city: 'Courescant',
    country: 'Courescant'
  },
  invoiceAddress: {
    title: 'Master',
    firstName: 'Yoda',
    lastName: 'Yoda',
    street: 'Jedi Temple',
    houseNumber: 'One',
    postalCode: '77777',
    city: 'Courescant',
    country: 'Courescant'
  },
  subscriptionInterval: SubscriptionInterval.Daily,
  deliveryMethod: DeliveryMethod.Post,
  paymentType: PaymentType.CreditCard,
  paymentInterval: PaymentInterval.Monthly,
  startDay: 'Monday',
  price: 9.99
}

/**
 * Represents a fake API for demonstration purposes.
 */
export class Api {
  /**
   * Represents the user database.
   */
  private static UserDatabase: User[] = [adminUser]

  /**
   * Represents the subscription database.
   */
  private static SubscriptionDatabase: Subscription[] = [adminSubscription]

  /**
   * Gets any user by its id.
   *
   * @param id The id of the user.
   *
   * @returns The user.
   */
  public static async readUser(id: string): Promise<User> {
    const log = ApiLog.context('readUser')

    return ApiUtils.delay(() => {
      log.begin()
      const index = Api.UserDatabase.findIndex((user) => user.id === id)

      if (index === -1) {
        log.error()
        throw new Error('User does not exist')
      }

      log.end()
      return Api.UserDatabase[index]
    })
  }

  /**
   * Creates a new user.
   *
   * @param user The user to create.
   */
  public static async createUser(user: User): Promise<void> {
    const log = ApiLog.context('createUser')

    return ApiUtils.delay(() => {
      log.begin()
      const index = Api.UserDatabase.findIndex((u) => u.id === user.id || u.email === user.email)

      if (index !== -1) {
        log.error()
        throw new Error('User already exists')
      }

      Api.UserDatabase.push(user)
      log.end()
    })
  }

  /**
   * Updates any user.
   *
   * @param user The user to update.
   *
   * @returns The updated user.
   */
  public static async updateUser(user: User): Promise<User> {
    const log = ApiLog.context('updateUser')

    return ApiUtils.delay(() => {
      log.begin()
      const index = Api.UserDatabase.findIndex((user) => user.id === user.id)

      if (index === -1) {
        log.error()
        throw new Error('User does not exist')
      }

      Api.UserDatabase[index] = user
      log.end()

      return user
    })
  }

  /**
   * Deletes any user by its id.
   *
   * @param id The id of the user to delete.
   */
  public static async deleteUser(id: string): Promise<void> {
    const log = ApiLog.context('deleteUser')

    return ApiUtils.delay(() => {
      log.begin()
      const index = Api.UserDatabase.findIndex((user) => user.id === id)

      if (index === -1) {
        log.error()
        throw new Error('User does not exist')
      }

      Api.UserDatabase.splice(index, 1)
      log.end()
    })
  }

  /**
   * Tries to login any user with the given credentials.
   *
   * @param email The email of the user.
   * @param password The password of the user.
   *
   * @returns The user, or an error if the credentials are invalid.
   */
  public static async loginUser(email: string, password: string): Promise<User> {
    const log = ApiLog.context('loginUser')

    return ApiUtils.delay(() => {
      log.begin()

      const index = Api.UserDatabase.findIndex((user) => {
        return user.email === email && user.password === password
      })

      if (index === -1) {
        log.error()
        throw new Error('Invalid credentials')
      }

      log.end()
      return Api.UserDatabase[index]
    })
  }

  /**
   * Gets any subscription by id.
   *
   * @param id The id of the subscription.
   *
   * @returns The subscription.
   */
  public static async readSubscription(id: string): Promise<Subscription> {
    const log = ApiLog.context('readSubscription')

    return ApiUtils.delay(() => {
      log.begin()
      const index = Api.SubscriptionDatabase.findIndex((subscription) => subscription.id === id)

      if (index === -1) {
        log.error()
        throw new Error('Subscription does not exist')
      }

      log.end()
      return Api.SubscriptionDatabase[index]
    })
  }

  /**
   * Creates a new subscription.
   *
   * @param subscription The subscription to create.
   */
  public static async createSubscription(subscription: Subscription): Promise<Subscription> {
    const log = ApiLog.context('createSubscription')

    return ApiUtils.delay(() => {
      log.begin()

      // copy subscription with uuid
      const copySubscription = { ...subscription, id: uuidv4() }
      Api.SubscriptionDatabase.push(copySubscription)

      log.end()
      return copySubscription
    })
  }

  /**
   * Updates any subscription.
   *
   * @param subscription The subscription to update.
   *
   * @returns The updated subscription.
   */
  public static async updateSubscription(subscription: Subscription): Promise<Subscription> {
    const log = ApiLog.context('updateSubscription')

    return ApiUtils.delay(() => {
      log.begin()
      const index = Api.SubscriptionDatabase.findIndex((subscription) => subscription.id === subscription.id)

      if (index === -1) {
        log.error()
        throw new Error('Subscription does not exist')
      }

      Api.SubscriptionDatabase[index] = subscription
      log.end()

      return subscription
    })
  }

  /**
   * Deletes any subscription by its id.
   *
   * @param id The id of the subscription to delete.
   */
  public static async deleteSubscription(id: string): Promise<void> {
    const log = ApiLog.context('deleteSubscription')

    return ApiUtils.delay(() => {
      log.begin()
      const index = Api.SubscriptionDatabase.findIndex((subscription) => subscription.id === id)

      if (index === -1) {
        log.error()
        throw new Error('Subscription does not exist')
      }

      Api.SubscriptionDatabase.splice(index, 1)
      log.end()
    })
  }

  /**
   * Gets all subscriptions for a given user.
   *
   * @param userId The id of the user.
   *
   * @returns All subscriptions for the given user.
   */
  public static async readSubscriptionsByUserId(userId: string): Promise<Subscription[]> {
    const log = ApiLog.context('readSubscriptionsByUserId')

    return ApiUtils.delay(() => {
      log.begin()
      const subscriptions = Api.SubscriptionDatabase.filter((subscription) => subscription.userId === userId)

      log.end()
      return subscriptions
    })
  }
}
