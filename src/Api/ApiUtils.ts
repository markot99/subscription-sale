/**
 * Some default values for the API.
 */
export class ApiDefaults {
  /**
   * The default minimum delay.
   */
  public static readonly defaultMinDelay = 500

  /**
   * The default maximum delay.
   */
  public static readonly defaultMaxDelay = 2000
}

/**
 * Utility methods for the API.
 */
export class ApiUtils {
  /**
   * Randomly delays an action.
   *
   * @param action The action to delay.
   *
   * @returns The result of the action.
   */
  public static delay<T>(action: () => T): Promise<T> {
    const delay = ApiUtils.random(ApiDefaults.defaultMinDelay, ApiDefaults.defaultMaxDelay)

    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          resolve(await action())
        } catch (error) {
          reject(error)
        }
      }, delay)
    })
  }

  /**
   * Generates a random number between min and max.
   *
   * @param min The minimum value.
   * @param max The maximum value.
   *
   * @returns A random number between min and max.
   */
  private static random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
