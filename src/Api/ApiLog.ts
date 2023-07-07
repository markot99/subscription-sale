/**
 * Utility class for logging API calls.
 */
export class ApiLog {
  /**
   * Logs an API call.
   *
   * @param func The name of the called function.
   * @param state The current execution state.
   */
  public static context(func: string): ApiLogContext {
    return new ApiLogContext(func)
  }
}

export class ApiLogContext {
  /**
   * The name of the called function.
   */
  private func: string

  /**
   * Constructor.
   *
   * @param func The name of the called function.
   */
  constructor(func: string) {
    this.func = func
    console.debug('api', `${this.func}()`, 'scheduled ...')
  }

  /**
   * Logs the beginning of the API call.
   */
  public begin() {
    console.debug('api', `${this.func}()`, 'executing ...')
  }

  /**
   * Logs an error during the API call.
   */
  public error() {
    console.error('api', `${this.func}()`, 'failed ...')
  }

  /**
   * Logs the end of the API call.
   */
  public end() {
    console.debug('api', `${this.func}()`, 'done')
  }
}
