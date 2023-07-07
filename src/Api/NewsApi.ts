import { LocalPaperVersion } from '../Models/LocalPaperVersion'
import { ApiUtils } from './ApiUtils'
import { RawData } from './NewsData'

/**
 * Represents information about the newspaper agency.
 */
export interface NewspaperAgencyInfo {
  /**
   * The name of the newspaper agency.
   */
  name: string

  /**
   * The city of the newspaper agency.
   */
  city: string

  /**
   * The zip code of the newspaper agency.
   */
  zipCode: string
}

/**
 * Represents the paper API for testing purposes.
 */
export class NewsApi {
  /**
   * Fetches information about the newspaper agency.
   *
   * @returns Information about the newspaper agency.
   */
  public static async fetchAgencyInfo(): Promise<NewspaperAgencyInfo> {
    return ApiUtils.delay(() => {
      return {
        name: 'Newspaper Agency',
        city: 'Reutlingen',
        zipCode: '72762'
      }
    })
  }

  /**
   * Fetches all available local paper versions.
   *
   * @returns All available local paper versions.
   */
  public static async fetchLocalPaperVersions(): Promise<LocalPaperVersion[]> {
    return ApiUtils.delay(() => {
      return RawData
    })
  }

  /**
   * Fetches all available paper versions for the given zip code.
   *
   * @param zipCode The zip code.
   *
   * @returns All available paper versions for the given zip code.
   */
  public static async fetchLocalPaperVersionsForZipCode(zipCode: string): Promise<LocalPaperVersion[]> {
    return ApiUtils.delay(async () => {
      const startNumber = zipCode.charAt(0)
      const localVersions = await NewsApi.fetchLocalPaperVersions()

      switch (startNumber) {
        case '0':
        case '1':
        case '2':
          return localVersions.filter((version) => version.id !== 3)
        case '3':
        case '4':
        case '5':
          return localVersions.filter((version) => version.id !== 3 && version.id !== 2)
        default:
          break
      }

      return localVersions
    })
  }
}
