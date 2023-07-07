/**
 * Describes all available local paper versions.
 */
// export enum LocalPaperEdition {
//   /**
//    * The city edition.
//    */
//   CityEdition = 1,

//   /**
//    * The sport edition.
//    */
//   SportEdition = 2,

//   /**
//    * The county edition.
//    */
//   CountyEdition = 3
// }

/**
 * Represents a local paper version datagram.
 */
export interface LocalPaperVersion {
  /**
   * The id of the local paper version.
   */
  id: number

  /**
   * The title of the local paper version.
   */
  title: string

  /**
   * The description of the local paper version.
   */
  description: string

  /**
   * The value of the local paper version.
   */
  // edition: LocalPaperEdition

  /**
   * The base price of the local paper version.
   */
  basePrice: number

  /**
   * The image url of the local paper version.
   */
  imageUrl: string
}
