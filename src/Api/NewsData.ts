import { DeliveryDays, LocalPaperVersion } from '../Models/LocalPaperVersion'

/**
 * The raw data for all local paper versions.
 */
export const RawData: LocalPaperVersion[] = [
  {
    id: 1,
    title: 'Reutlinger Blatt',
    description: 'Reutlinger Blatt - Die Zeitung für Reutlingen und Umgebung.',
    editions: ['Nordstadt', 'Südstadt', 'Weststadt', 'Oststadt'],
    deliveryDays: [DeliveryDays.Daily, DeliveryDays.MondayToFriday, DeliveryDays.Sunday],
    basePrice: 9.99,
    imageUrl:
      'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Reutlinger Bote',
    description: 'Der Reutlinger Bote informiert sie über alle Neuigkeiten aus Reutlingen und Umgebung.',
    editions: [
      'Altenburg',
      'Betzingen',
      'Bronnweiler',
      'Degerschlacht',
      'Gönningen',
      'Mittelstadt',
      'Oferdingen',
      'Ohmenhausen',
      'Reicheneck',
      'Rommelsbach',
      'Sickenhausen',
      'Sondelfingen'
    ],
    deliveryDays: [DeliveryDays.Daily, DeliveryDays.MondayToFriday, DeliveryDays.Sunday],
    basePrice: 20.99,
    imageUrl:
      'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Reutlinger Wochenblatt',
    description: 'Im Reutlinger Wochenblatt finden sie alle Neuigkeiten aus Reutlingen und Umgebung.',
    editions: ['Standard'],
    deliveryDays: [DeliveryDays.Daily, DeliveryDays.MondayToFriday, DeliveryDays.Sunday],
    basePrice: 14.99,
    imageUrl: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'Reutlingen am Sonntag',
    description: 'Alle Informationen aus Reutlingen und Umgebung - jeden Sonntag in ihrem Briefkasten.',
    editions: ['Standard'],
    deliveryDays: [DeliveryDays.Sunday],
    basePrice: 14.99,
    imageUrl: 'https://images.pexels.com/photos/2402503/pexels-photo-2402503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    title: 'Reutlinger Sport',
    description: 'Täglich alle Neuigkeiten aus Reutlingen und Umgebung.',
    editions: ['Basketball', 'Fußball', 'Handball', 'Volleyball', 'Tennis', 'Tischtennis', 'Leichtathletik'],
    deliveryDays: [DeliveryDays.Daily, DeliveryDays.MondayToFriday, DeliveryDays.Sunday],
    basePrice: 14.99,
    imageUrl: 'https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]
