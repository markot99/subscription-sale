/**
 * Describes all possible severities of an alert.
 */
export enum AlertSeverity {
  /**
   * The success severity.
   */
  Success = 'success',
  /**
   * The info severity.
   */
  Info = 'info',
  /**
   * The warning severity.
   */
  Warning = 'warning',
  /**
   * The error severity.
   */
  Error = 'error',
  /**
   * No severity.
   */
  None = 'none'
}

/**
 * Represents the content of an alert.
 */
export interface Alert {
  /**
   * The severity of the alert.
   */
  severity: AlertSeverity
  /**
   * The message of the alert.
   */
  message: string
  /**
   * The timeout in seconds of the alert.
   */
  timeout: number
}
