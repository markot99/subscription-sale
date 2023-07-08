/**
 * Represents a local paper version datagram.
 */
export interface LocalPaperVersion {
  /**
   * The id of the local paper version.
   */
  id: string

  /**
   * The title of the local paper version.
   */
  title: string

  /**
   * The description of the local paper version.
   */
  description: string

  /**
   * The base price of the local paper version.
   */
  basePrice: number

  /**
   * The image url of the local paper version.
   */
  imageUrl: string

  /**
   * The average user rating of the local paper version.
   */
  rating: number
}
