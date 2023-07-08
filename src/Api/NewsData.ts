import { LocalPaperVersion } from '../Models/LocalPaperVersion'

/**
 * The raw data for all local paper versions.
 */
export const LocalPaperRawData: LocalPaperVersion[] = [
  {
    id: '1',
    title: 'Reutlinger Bote',
    description: 'Alle wichtigen Informationen aus der Region Reutlingen. Jeden Tag neu.',
    basePrice: 4.99,
    imageUrl:
      'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    title: 'Reutlinger Anzeiger',
    description: 'Neuigkeiten aus der Region Reutlingen. Seien sie immer auf dem neusten Stand. Mit dem Reutlinger Anzeiger.',
    basePrice: 1.99,
    imageUrl:
      'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    title: 'Wirtschaftsblatt',
    description: 'Erhalten sie alle wichtigen Informationen aus der Wirtschaft.',
    basePrice: 3.99,
    imageUrl: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    title: 'Innovationsblatt Reutlingen',
    description: 'Seien sie immer auf dem neusten Stand der Innovationen in Reutlingen.',
    // edition: LocalPaperEdition.CityEdition,
    basePrice: 5.99,
    imageUrl: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '5',
    title: 'Sportblatt Reutlingen',
    description: 'Neuigkeiten aus der Sportwelt in Reutlingen. Seien sie immer auf dem neusten Stand. Mit dem Sportblatt Reutlingen.',
    // edition: LocalPaperEdition.CityEdition,
    basePrice: 2.99,
    imageUrl: 'https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]

/**
 * Represents the local newspaper editions
 */
export interface LocalEdition {
  /**
   * The id of the local edition
   */
  id: string

  /**
   * The name of the local edition
   */
  name: string

  /**
   * The picture of the local edition
   */
  picture: string
}

/**
 * The raw data for all local paper versions.
 */
export const LocalEditionsRawData: LocalEdition[] = [
  {
    id: '1',
    name: 'Stadtausgabe',
    picture: ''
  },
  {
    id: '2',
    name: 'Sportversion',
    picture: ''
  },
  {
    id: '3',
    name: 'Landkreisinfos',
    picture: ''
  }
]
