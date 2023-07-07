export enum Title {
  Other = 'other',
  Mr = 'mr',
  Ms = 'ms'
}

export interface DeliveryAddress {
  title: string
  firstName: string
  lastName: string
  street: string
  streetNumber: string
  postalCode: string
  city: string
  country: string
}
