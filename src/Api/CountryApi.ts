import { ApiLog } from './ApiLog'
import { ApiUtils } from './ApiUtils'
import { Coordinate } from './Coordinate'
import { CountryRawData } from './CountryData'

/**
 * Represents the country API for testing purposes.
 */
export class CountryApi {
  /**
   * Fetch the coordinates of a country.
   *
   * @param country The country name
   *
   * @returns The coordinates of the country
   */
  public static async fetchCoordinatesOfCountry(country: string): Promise<Coordinate> {
    const log = ApiLog.context('fetchCoordinatesOfCountry')

    return ApiUtils.delay(() => {
      log.begin()
      const datagram = CountryRawData.find((datagram) => datagram.name === country)

      if (!datagram) {
        log.error()
        throw new Error(`Country does not exist: ${country}`)
      }

      log.end()
      return {
        latitude: datagram.latitude,
        longitude: datagram.longitude
      }
    })
  }

  /**
   * Fetch the available countries
   *
   * @param country The country name
   *
   * @returns The coordinates of the country
   */
  public static async fetchAvailableCountries(): Promise<string[]> {
    const log = ApiLog.context('fetchAvailableCountries')

    return ApiUtils.delay(() => {
      log.begin()
      log.end()
      return CountryRawData.map((country) => country.name)
    })
  }
}
