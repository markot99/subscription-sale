import { Subscription } from '../Models/Subscription'
import { User } from '../Models/User'
import { ApiLog } from './ApiLog'
import { ApiUtils } from './ApiUtils'

/**
 * Represents a fake user for demonstration purposes.
 */
const adminUser: User = {
  id: 'admin',
  title: 'Mr.',
  firstName: 'Ben',
  lastName: 'Kenobi',
  email: 'ben.kenobi@hello.there',
  password: '0000',
  invoiceAddress: {
    street: 'Jedi Temple',
    streetNumber: 'One',
    zipCode: '77777',
    location: 'Courescant',
    country: 'Courescant'
  }
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
  private static SubscriptionDatabase: Subscription[] = []

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
   * @param username The username of the user.
   * @param password The password of the user.
   *
   * @returns The user, or an error if the credentials are invalid.
   */
  public static async loginUser(username: string, password: string): Promise<User> {
    const log = ApiLog.context('loginUser')

    return ApiUtils.delay(() => {
      log.begin()

      const index = Api.UserDatabase.findIndex((user) => {
        const completeName = user.firstName + ' ' + user.lastName
        return completeName === username && user.password === password
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
  public static async createSubscription(subscription: Subscription): Promise<void> {
    const log = ApiLog.context('createSubscription')

    return ApiUtils.delay(() => {
      log.begin()
      const index = Api.SubscriptionDatabase.findIndex((subscription) => subscription.id === subscription.id)

      if (index !== -1) {
        log.error()
        throw new Error('Subscription already exists')
      }

      Api.SubscriptionDatabase.push(subscription)
      log.end()
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
        throw new Error('Subscription does not exist')
      }

      Api.SubscriptionDatabase.splice(index, 1)
      log.error()
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
