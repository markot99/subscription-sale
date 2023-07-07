import { ApiLog } from './ApiLog'
import { ApiUtils } from './ApiUtils'
import { RawData, ZipCodeDatagram } from './ZipCodeData'

/**
 * Represents a coordinate.
 */
interface Coordinate {
  /**
   * The latitude.
   */
  latitude: number

  /**
   * The longitude.
   */
  longitude: number
}

/**
 * Represents the zip code API for testing purposes.
 */
export class ZipCodeApi {
  /**
   * Fetches all zip code datagrams.
   *
   * @returns All zip code datagrams.
   */
  public static async fetchZipCodes(): Promise<ZipCodeDatagram[]> {
    const log = ApiLog.context('fetchZipCodes')

    return ApiUtils.delay(() => {
      log.begin()
      log.end()
      return RawData
    })
  }

  /**
   * Calculates the distance between two zip codes in kilometers.
   *
   * @param zipCode1 The first zip code.
   * @param zipCode2 The second zip code.
   *
   * @returns The distance between the two zip codes in kilometers.
   */
  public static async calculateZipCodeDistance(zipCode1: string, zipCode2: string): Promise<number> {
    const log = ApiLog.context('calculateZipCodeDistance')

    return ApiUtils.delay(() => {
      log.begin()

      const datagram1 = RawData.find((zipCodeDatagram) => zipCodeDatagram.zipCode === zipCode1)
      const datagram2 = RawData.find((zipCodeDatagram) => zipCodeDatagram.zipCode === zipCode2)

      if (!datagram1) {
        log.error()
        throw new Error(`Zip code does not exist: ${zipCode1}`)
      }

      if (!datagram2) {
        log.error()
        throw new Error(`Zip code does not exist: ${zipCode2}`)
      }

      const coord1 = {
        latitude: datagram1.latitude,
        longitude: datagram1.longitude
      }

      const coord2 = {
        latitude: datagram2.latitude,
        longitude: datagram2.longitude
      }

      log.end()
      return ZipCodeApi.calculateDistance(coord1, coord2)
    })
  }

  /**
   * Calculates the distance in kilometers between two coordinates.
   *
   * @param coord1 The first coordinate.
   * @param coord2 The second coordinate.
   *
   * @returns The distance in kilometers between the two coordinates.
   */
  private static calculateDistance(coord1: Coordinate, coord2: Coordinate): number {
    const earthRadius = 6371

    const latitudeDelta = ZipCodeApi.degreesFromRadians(coord2.latitude - coord1.latitude)
    const longitudeDelta = ZipCodeApi.degreesFromRadians(coord2.longitude - coord1.longitude)

    const a =
      Math.sin(latitudeDelta / 2) * Math.sin(latitudeDelta / 2) +
      Math.cos(ZipCodeApi.degreesFromRadians(coord1.latitude)) *
        Math.cos(ZipCodeApi.degreesFromRadians(coord2.latitude)) *
        Math.sin(longitudeDelta / 2) *
        Math.sin(longitudeDelta / 2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = earthRadius * c

    return distance
  }

  /**
   * Converts degrees to radians.
   */
  private static degreesFromRadians(radians: number): number {
    return radians * (Math.PI / 180)
  }
}
