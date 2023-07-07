import { LocalPaperVersion } from '../Models/LocalPaperVersion'

/**
 * The raw data for all local paper versions.
 */
export const RawData: LocalPaperVersion[] = [
  {
    id: 1,
    title: 'Standardausgabe: Wochenende',
    description: 'Erhalten sie die unsere Zeitung jeden Samstag, mit allen wichtigen Informationen der Woche.',
    // edition: LocalPaperEdition.CityEdition,
    basePrice: 9.99,
    imageUrl:
      'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Standardausgabe: Täglich',
    description: 'Erhalten sie die unsere Zeitung jeden Tag, mit allen wichtigen Informationen des Tages.',
    // edition: LocalPaperEdition.CityEdition,
    basePrice: 20.99,
    imageUrl:
      'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Spezialausgabe: Politik',
    description: 'Erhalten sie unsere Spezialausgabe mit allen Themen rund um die Politik.',
    // edition: LocalPaperEdition.CityEdition,
    basePrice: 14.99,
    imageUrl: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Spezialausgabe: Wirtschaft',
    description: 'Erhalten sie unsere Spezialausgabe mit allen Themen aus der Wirtschaft.',
    // edition: LocalPaperEdition.CityEdition,
    basePrice: 14.99,
    imageUrl: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'Spezialausgabe: Sport',
    description: 'Erhalten sie unsere Spezialausgabe mit allen Themen rund um den Sport.',
    // edition: LocalPaperEdition.CityEdition,
    basePrice: 14.99,
    imageUrl: 'https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]
