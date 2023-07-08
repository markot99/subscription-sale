import { LocalPaperVersion } from '../Models/LocalPaperVersion'
import { DeliveryMethod, PaymentInterval, SubscriptionInterval } from '../Models/Subscription'
import { ApiLog } from './ApiLog'
import { ApiUtils } from './ApiUtils'
import { Coordinate } from './Coordinate'
import { CountryApi } from './CountryApi'
import { LocalEdition, LocalEditionsRawData, LocalPaperRawData } from './NewsData'
import { ZipCodeApi } from './ZipCodeApi'

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

  /**
   * The country of the newspaper agency.
   */
  country: string
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
    return {
      name: 'Newspaper Agency',
      city: 'Reutlingen',
      zipCode: '72762',
      country: 'Germany'
    }
  }

  /**
   * Calculates the price of the newspaper
   *
   * @param deliveryZipCode The zip code to which the newspaper is delivered
   * @param deliveryCountry The country to which the newspaper is delivered
   * @param newspaperID The id of the newspaper to be delivered
   * @param subscriptionInterval The subscription interval of the newspaper to be delivered
   * @param deliveryMethod The delivery method of the newspaper to be delivered
   * @param paymentInterval The payment interval of the newspaper
   *
   * @returns The distance between the two zip codes in kilometers.
   */
  public static async calculateNewspaperPrice(
    deliveryZipCode: string,
    deliveryCountry: string,
    newspaperID: string,
    subscriptionInterval: SubscriptionInterval,
    deliveryMethod: DeliveryMethod,
    paymentInterval: PaymentInterval
  ): Promise<number> {
    const log = ApiLog.context('calculateNewspaperPrice')
    const newspaperAgencyInfo = await NewsApi.fetchAgencyInfo()

    const newspaper = LocalPaperRawData.find((paper) => paper.id === newspaperID)
    if (!newspaper) {
      throw new Error(`Newspaper ID does not exist: ${newspaperID}`)
    }

    const coordOfNewspaperAgency = await ZipCodeApi.fetchCoordinateForZipCode(newspaperAgencyInfo.zipCode)

    let coord: Coordinate
    // if country is not the country of the newspaper agency, then the price is calculated based on the average coordinate of the country
    if (deliveryCountry !== newspaperAgencyInfo.country) {
      coord = await CountryApi.fetchCoordinatesOfCountry(deliveryCountry)
    } else {
      coord = await ZipCodeApi.fetchCoordinateForZipCode(deliveryZipCode)
    }

    const distance = await ZipCodeApi.calculateDistance(coordOfNewspaperAgency, coord)

    let price = newspaper.basePrice + distance * 0.1
    // increase price by 10% if payment interval is monthly
    price = price * (paymentInterval === PaymentInterval.Monthly ? 1.1 : 1)

    // increase price by 10% if delivery method is delivery man
    price = price * (deliveryMethod === DeliveryMethod.DeliveryMan ? 1.1 : 1)

    // decrease price by 70 % if subscription is only delivered on weekends
    price = price * (subscriptionInterval === SubscriptionInterval.Weekends ? 0.3 : 1)

    return ApiUtils.delay(() => {
      log.begin()
      log.end()
      return Number(price.toFixed(2))
    })
  }

  /**
   * Fetches all available local paper versions.
   *
   * @returns All available local paper versions.
   */
  public static async fetchLocalPaperVersions(): Promise<LocalPaperVersion[]> {
    const log = ApiLog.context('fetchLocalPaperVersions')

    return ApiUtils.delay(() => {
      log.begin()
      log.end()
      return LocalPaperRawData
    })
  }

  /**
   * Fetches all available paper versions for the given zip code.
   *
   * @param zipCode The zip code.
   *
   * @returns All available paper versions for the given zip code.
   */
  public static async fetchLocalPaperVersionsForZipCode(zipCode: string): Promise<LocalEdition[]> {
    const log = ApiLog.context('fetchLocalPaperVersionsForZipCode')

    return ApiUtils.delay(async () => {
      log.begin()

      const startNumber = zipCode.charAt(0)
      const localVersions = LocalEditionsRawData

      switch (startNumber) {
        case '0':
        case '1':
        case '2':
          return localVersions.filter((version) => version.id !== '3')
        case '3':
        case '4':
        case '5':
          return localVersions.filter((version) => version.id !== '3' && version.id !== '2')
        default:
          break
      }

      log.end()
      return localVersions
    })
  }
}
