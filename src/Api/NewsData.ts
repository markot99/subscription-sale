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
      'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5
  },
  {
    id: '2',
    title: 'Reutlinger Anzeiger',
    description: 'Neuigkeiten aus der Region Reutlingen. Seien sie immer auf dem neusten Stand. Mit dem Reutlinger Anzeiger.',
    basePrice: 1.99,
    imageUrl: 'https://images.pexels.com/photos/3070171/pexels-photo-3070171.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4
  },
  {
    id: '3',
    title: 'Böblingen aktuell',
    description: 'Erhalten sie alle wichtigen Informationen aus Böblingen. Frisch und tagesaktuell.',
    basePrice: 3.99,
    imageUrl: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4
  },
  {
    id: '4',
    title: 'Reutlingen aktuell',
    description: 'Immer auf dem neusten Stand mit Reutlingen aktuell. Druckfrisch jeden Tag in ihrem Briefkasten.',
    basePrice: 5.99,
    imageUrl: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 3
  },
  {
    id: '5',
    title: 'Böblinger News',
    description: 'Tagesaktuelle Informationen aus Böblingen. Jeden Tag neu bis an ihre Haustür geliefert.',
    basePrice: 2.99,
    imageUrl: 'https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 3
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
