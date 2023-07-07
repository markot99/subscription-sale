import { Subscription } from '../Models/Subscription'
import { User } from '../Models/User'
import { ApiUtils } from './ApiUtils'

/**
 * Represents a fake API for demonstration purposes.
 */
export class Api {
  /**
   * Represents the user database.
   */
  private static UserDatabase: User[] = []

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
    return ApiUtils.delay(() => {
      const index = Api.UserDatabase.findIndex((user) => user.id === id)

      if (index === -1) {
        throw new Error('User does not exist')
      }

      return Api.UserDatabase[index]
    })
  }

  /**
   * Creates a new user.
   *
   * @param user The user to create.
   */
  public static async createUser(user: User): Promise<void> {
    return ApiUtils.delay(() => {
      const index = Api.UserDatabase.findIndex((user) => user.id === user.id)

      if (index !== -1) {
        throw new Error('User already exists')
      }

      Api.UserDatabase.push(user)
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
    return ApiUtils.delay(() => {
      const index = Api.UserDatabase.findIndex((user) => user.id === user.id)

      if (index === -1) {
        throw new Error('User does not exist')
      }

      Api.UserDatabase[index] = user
      return user
    })
  }

  /**
   * Deletes any user by its id.
   *
   * @param id The id of the user to delete.
   */
  public static async deleteUser(id: string): Promise<void> {
    return ApiUtils.delay(() => {
      const index = Api.UserDatabase.findIndex((user) => user.id === id)

      if (index === -1) {
        throw new Error('User does not exist')
      }

      Api.UserDatabase.splice(index, 1)
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
    return ApiUtils.delay(() => {
      const index = Api.SubscriptionDatabase.findIndex((subscription) => subscription.id === id)

      if (index === -1) {
        throw new Error('Subscription does not exist')
      }

      return Api.SubscriptionDatabase[index]
    })
  }

  /**
   * Creates a new subscription.
   *
   * @param subscription The subscription to create.
   */
  public static async createSubscription(subscription: Subscription): Promise<void> {
    return ApiUtils.delay(() => {
      const index = Api.SubscriptionDatabase.findIndex((subscription) => subscription.id === subscription.id)

      if (index !== -1) {
        throw new Error('Subscription already exists')
      }

      Api.SubscriptionDatabase.push(subscription)
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
    return ApiUtils.delay(() => {
      const index = Api.SubscriptionDatabase.findIndex((subscription) => subscription.id === subscription.id)

      if (index === -1) {
        throw new Error('Subscription does not exist')
      }

      Api.SubscriptionDatabase[index] = subscription
      return subscription
    })
  }

  /**
   * Deletes any subscription by its id.
   *
   * @param id The id of the subscription to delete.
   */
  public static async deleteSubscription(id: string): Promise<void> {
    return ApiUtils.delay(() => {
      const index = Api.SubscriptionDatabase.findIndex((subscription) => subscription.id === id)

      if (index === -1) {
        throw new Error('Subscription does not exist')
      }

      Api.SubscriptionDatabase.splice(index, 1)
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
    return ApiUtils.delay(() => {
      return Api.SubscriptionDatabase.filter((subscription) => subscription.userId === userId)
    })
  }
}
