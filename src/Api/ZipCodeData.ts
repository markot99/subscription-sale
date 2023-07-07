/**
 * Represents a zip code datagram.
 */
export interface ZipCodeDatagram {

  /**
   * The id of the zip code.
   */
    id: number

    /**
     * The zip code.
     */
    zipCode: string

    /**
     * The city.
     */
    city: string

    /**
     * The state.
     */
    state: string

    /**
     * The community.
     */
    community: string

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
 * The raw zip code data.
 */
export const RawData: ZipCodeDatagram[] = [
  {
    id: 1,
    zipCode: '01945',
    city: 'Gr\u00fcnewald',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.4,
    longitude: 14.0
  },
  {
    id: 2,
    zipCode: '01945',
    city: 'Lindenau',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.4,
    longitude: 13.7333
  },
  {
    id: 3,
    zipCode: '01945',
    city: 'Hohenbocka',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.431,
    longitude: 14.0098
  },
  {
    id: 4,
    zipCode: '01945',
    city: 'Schwarzbach',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.45,
    longitude: 13.9333
  },
  {
    id: 5,
    zipCode: '01945',
    city: 'Guteborn',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.4167,
    longitude: 13.9333
  },
  {
    id: 6,
    zipCode: '01945',
    city: 'Hermsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.4055,
    longitude: 13.8937
  },
  {
    id: 7,
    zipCode: '01945',
    city: 'Ruhland',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.4576,
    longitude: 13.8664
  },
  {
    id: 8,
    zipCode: '01945',
    city: 'Tettau',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.4333,
    longitude: 13.7333
  },
  {
    id: 9,
    zipCode: '01945',
    city: 'Kroppen',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.3833,
    longitude: 13.8
  },
  {
    id: 10,
    zipCode: '01968',
    city: 'Schipkau H\u00f6rlitz',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5299,
    longitude: 13.9508
  },
  {
    id: 11,
    zipCode: '01968',
    city: 'Senftenberg',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5252,
    longitude: 14.0016
  },
  {
    id: 12,
    zipCode: '01968',
    city: 'Schipkau',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5456,
    longitude: 13.9121
  },
  {
    id: 13,
    zipCode: '01979',
    city: 'Lauchhammer',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.4881,
    longitude: 13.7662
  },
  {
    id: 14,
    zipCode: '01983',
    city: 'Neu-Seeland',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.6214,
    longitude: 14.1309
  },
  {
    id: 15,
    zipCode: '01983',
    city: 'Gro\u00dfr\u00e4schen',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5876,
    longitude: 14.0109
  },
  {
    id: 16,
    zipCode: '01987',
    city: 'Schwarzheide',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.4767,
    longitude: 13.8556
  },
  {
    id: 17,
    zipCode: '01990',
    city: 'Ortrand',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.375,
    longitude: 13.7598
  },
  {
    id: 18,
    zipCode: '01990',
    city: 'Gro\u00dfkmehlen',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.379,
    longitude: 13.725
  },
  {
    id: 19,
    zipCode: '01990',
    city: 'Frauendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.4148,
    longitude: 13.7696
  },
  {
    id: 20,
    zipCode: '01993',
    city: 'Schipkau Schipkau',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5101,
    longitude: 13.8981
  },
  {
    id: 21,
    zipCode: '01993',
    city: 'Schipkau',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5456,
    longitude: 13.9121
  },
  {
    id: 22,
    zipCode: '01994',
    city: 'Schipkau Annah\u00fctte, Annah\u00fctte',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5632,
    longitude: 13.8955
  },
  {
    id: 23,
    zipCode: '01994',
    city: 'Schipkau Annah\u00fctte, Karl-Marx-Siedlung',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5641,
    longitude: 13.8692
  },
  {
    id: 24,
    zipCode: '01994',
    city: 'Schipkau Drochow',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5693,
    longitude: 13.9237
  },
  {
    id: 25,
    zipCode: '01994',
    city: 'Schipkau',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5456,
    longitude: 13.9121
  },
  {
    id: 26,
    zipCode: '01994',
    city: 'Schipkau Meuro',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5504,
    longitude: 13.9244
  },
  {
    id: 27,
    zipCode: '01994',
    city: 'Schipkau Annah\u00fctte',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5614,
    longitude: 13.882
  },
  {
    id: 28,
    zipCode: '01994',
    city: 'Schipkau Annah\u00fctte, Annah\u00fctte-Siedlung',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5623,
    longitude: 13.8742
  },
  {
    id: 29,
    zipCode: '01994',
    city: 'Schipkau Annah\u00fctte, Herrnnm\u00fchle',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5558,
    longitude: 13.8891
  },
  {
    id: 30,
    zipCode: '01996',
    city: 'Hosena',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.4547,
    longitude: 14.0251
  },
  {
    id: 31,
    zipCode: '01998',
    city: 'Schipkau',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5456,
    longitude: 13.9121
  },
  {
    id: 32,
    zipCode: '01998',
    city: 'Schipkau Meuro',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5504,
    longitude: 13.9244
  },
  {
    id: 33,
    zipCode: '01998',
    city: 'Schipkau Klettwitz',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.5422,
    longitude: 13.8994
  },
  {
    id: 34,
    zipCode: '03042',
    city: 'Cottbus',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Cottbus',
    latitude: 51.7612,
    longitude: 14.3544
  },
  {
    id: 35,
    zipCode: '03044',
    city: 'Cottbus',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Cottbus',
    latitude: 51.7754,
    longitude: 14.3374
  },
  {
    id: 36,
    zipCode: '03046',
    city: 'Cottbus',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Cottbus',
    latitude: 51.756,
    longitude: 14.3197
  },
  {
    id: 37,
    zipCode: '03048',
    city: 'Cottbus',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Cottbus',
    latitude: 51.7403,
    longitude: 14.3198
  },
  {
    id: 38,
    zipCode: '03050',
    city: 'Cottbus',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Cottbus',
    latitude: 51.7324,
    longitude: 14.3347
  },
  {
    id: 39,
    zipCode: '03051',
    city: 'Cottbus',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Cottbus',
    latitude: 51.7667,
    longitude: 14.3333
  },
  {
    id: 40,
    zipCode: '03052',
    city: 'Cottbus',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Cottbus',
    latitude: 51.7667,
    longitude: 14.3333
  },
  {
    id: 41,
    zipCode: '03053',
    city: 'Cottbus',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Cottbus',
    latitude: 51.7667,
    longitude: 14.3333
  },
  {
    id: 42,
    zipCode: '03054',
    city: 'Cottbus',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Cottbus',
    latitude: 51.7667,
    longitude: 14.3333
  },
  {
    id: 43,
    zipCode: '03055',
    city: 'Cottbus',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Cottbus',
    latitude: 51.7667,
    longitude: 14.3333
  },
  {
    id: 44,
    zipCode: '03058',
    city: 'Gro\u00df O\u00dfnig',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.6783,
    longitude: 14.3592
  },
  {
    id: 45,
    zipCode: '03058',
    city: 'Gro\u00df D\u00f6bbern',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.6515,
    longitude: 14.3298
  },
  {
    id: 46,
    zipCode: '03058',
    city: 'Haasow',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.7426,
    longitude: 14.4209
  },
  {
    id: 47,
    zipCode: '03058',
    city: 'Klein D\u00f6bbern',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.6682,
    longitude: 14.345
  },
  {
    id: 48,
    zipCode: '03058',
    city: 'Neuhausen',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.6788,
    longitude: 14.4163
  },
  {
    id: 49,
    zipCode: '03058',
    city: 'Kathlow',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.7252,
    longitude: 14.4839
  },
  {
    id: 50,
    zipCode: '03058',
    city: 'Sergen',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.7023,
    longitude: 14.5025
  },
  {
    id: 51,
    zipCode: '03058',
    city: 'Koppatz',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.6962,
    longitude: 14.4266
  },
  {
    id: 52,
    zipCode: '03058',
    city: 'Gablenz',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.6865,
    longitude: 14.5094
  },
  {
    id: 53,
    zipCode: '03058',
    city: 'Gro\u00df Gaglow',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Cottbus',
    latitude: 51.7139,
    longitude: 14.3248
  },
  {
    id: 54,
    zipCode: '03058',
    city: 'Frauendorf',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.7007,
    longitude: 14.3878
  },
  {
    id: 55,
    zipCode: '03058',
    city: 'Kiekebusch',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Cottbus',
    latitude: 51.7235,
    longitude: 14.3631
  },
  {
    id: 56,
    zipCode: '03058',
    city: 'Roggosen',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.7043,
    longitude: 14.4614
  },
  {
    id: 57,
    zipCode: '03058',
    city: 'Komptendorf',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.6846,
    longitude: 14.4727
  },
  {
    id: 58,
    zipCode: '03058',
    city: 'Laubsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.6744,
    longitude: 14.442
  },
  {
    id: 59,
    zipCode: '03058',
    city: 'Gallinchen',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Cottbus',
    latitude: 51.711,
    longitude: 14.3539
  },
  {
    id: 60,
    zipCode: '03096',
    city: 'Briesen',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.8155,
    longitude: 14.2442
  },
  {
    id: 61,
    zipCode: '03096',
    city: 'Guhrow',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.812,
    longitude: 14.2294
  },
  {
    id: 62,
    zipCode: '03096',
    city: 'Schmogrow-Fehrow',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.85,
    longitude: 14.2333
  },
  {
    id: 63,
    zipCode: '03096',
    city: 'Werben',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.8167,
    longitude: 14.1833
  },
  {
    id: 64,
    zipCode: '03096',
    city: 'Dissen-Striesow',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.825,
    longitude: 14.2833
  },
  {
    id: 65,
    zipCode: '03096',
    city: 'Burg (Spreewald)',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.8333,
    longitude: 14.15
  },
  {
    id: 66,
    zipCode: '03099',
    city: 'Kolkwitz',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.75,
    longitude: 14.25
  },
  {
    id: 67,
    zipCode: '03103',
    city: 'Neu-Seeland',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.6214,
    longitude: 14.1309
  },
  {
    id: 68,
    zipCode: '03103',
    city: 'Neupetershain',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.608,
    longitude: 14.1651
  },
  {
    id: 69,
    zipCode: '03116',
    city: 'Drebkau',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.6541,
    longitude: 14.2232
  },
  {
    id: 70,
    zipCode: '03119',
    city: 'Welzow',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.5838,
    longitude: 14.1708
  },
  {
    id: 71,
    zipCode: '03130',
    city: 'Reuthen',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.5906,
    longitude: 14.5266
  },
  {
    id: 72,
    zipCode: '03130',
    city: 'T\u00fcrkendorf',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.591,
    longitude: 14.4581
  },
  {
    id: 73,
    zipCode: '03130',
    city: 'Proschim',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.5514,
    longitude: 14.1884
  },
  {
    id: 74,
    zipCode: '03130',
    city: 'Graustein',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.5729,
    longitude: 14.4732
  },
  {
    id: 75,
    zipCode: '03130',
    city: 'Hornow-Wadelsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.625,
    longitude: 14.4917
  },
  {
    id: 76,
    zipCode: '03130',
    city: 'Bagenz',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.6448,
    longitude: 14.4332
  },
  {
    id: 77,
    zipCode: '03130',
    city: 'Lieskau',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.5683,
    longitude: 14.5271
  },
  {
    id: 78,
    zipCode: '03130',
    city: 'Gro\u00df Luja',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.5978,
    longitude: 14.4467
  },
  {
    id: 79,
    zipCode: '03130',
    city: 'Haidem\u00fchl',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.5518,
    longitude: 14.2219
  },
  {
    id: 80,
    zipCode: '03130',
    city: 'Wolfshain',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.5799,
    longitude: 14.589
  },
  {
    id: 81,
    zipCode: '03130',
    city: 'Tschernitz',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.5833,
    longitude: 14.6167
  },
  {
    id: 82,
    zipCode: '03130',
    city: 'Spremberg',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.5696,
    longitude: 14.3739
  },
  {
    id: 83,
    zipCode: '03130',
    city: 'Drieschnitz-Kahsel',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.6667,
    longitude: 14.475
  },
  {
    id: 84,
    zipCode: '03130',
    city: 'J\u00e4mlitz-Klein D\u00fcben',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.5667,
    longitude: 14.6417
  },
  {
    id: 85,
    zipCode: '03130',
    city: 'Felixsee',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.6083,
    longitude: 14.5208
  },
  {
    id: 86,
    zipCode: '03139',
    city: 'Terpe',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.5667,
    longitude: 14.3667
  },
  {
    id: 87,
    zipCode: '03149',
    city: 'Forst (Lausitz)',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.7302,
    longitude: 14.598
  },
  {
    id: 88,
    zipCode: '03149',
    city: 'Wiesengrund',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.6967,
    longitude: 14.5533
  },
  {
    id: 89,
    zipCode: '03149',
    city: 'Gro\u00df Schacksdorf-Simmersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.7,
    longitude: 14.625
  },
  {
    id: 90,
    zipCode: '03159',
    city: 'D\u00f6bern',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.6159,
    longitude: 14.5981
  },
  {
    id: 91,
    zipCode: '03159',
    city: 'Nei\u00dfe-Malxetal',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.6433,
    longitude: 14.63
  },
  {
    id: 92,
    zipCode: '03159',
    city: 'Wiesengrund',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.6967,
    longitude: 14.5533
  },
  {
    id: 93,
    zipCode: '03172',
    city: 'Atterwasch',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.9342,
    longitude: 14.6255
  },
  {
    id: 94,
    zipCode: '03172',
    city: 'B\u00e4renklau',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.9383,
    longitude: 14.5667
  },
  {
    id: 95,
    zipCode: '03172',
    city: 'Grabko',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.9099,
    longitude: 14.5756
  },
  {
    id: 96,
    zipCode: '03172',
    city: 'Guben',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.9499,
    longitude: 14.7145
  },
  {
    id: 97,
    zipCode: '03172',
    city: 'Pinnow-Heideland',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.9833,
    longitude: 14.5333
  },
  {
    id: 98,
    zipCode: '03172',
    city: 'Grie\u00dfen',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.8492,
    longitude: 14.5924
  },
  {
    id: 99,
    zipCode: '03172',
    city: 'Gastrose-Kerkwitz',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.9,
    longitude: 14.65
  },
  {
    id: 100,
    zipCode: '03172',
    city: 'Lutzketal',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.9833,
    longitude: 14.6238
  },
  {
    id: 101,
    zipCode: '03185',
    city: 'Drehnow',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.8667,
    longitude: 14.3667
  },
  {
    id: 102,
    zipCode: '03185',
    city: 'Peitz',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.8584,
    longitude: 14.4114
  },
  {
    id: 103,
    zipCode: '03185',
    city: 'Gr\u00f6tsch',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.7932,
    longitude: 14.5096
  },
  {
    id: 104,
    zipCode: '03185',
    city: 'Heinersbr\u00fcck',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.8199,
    longitude: 14.5074
  },
  {
    id: 105,
    zipCode: '03185',
    city: 'Tauer',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.9,
    longitude: 14.45
  },
  {
    id: 106,
    zipCode: '03185',
    city: 'Turnow-Preilack',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.875,
    longitude: 14.4083
  },
  {
    id: 107,
    zipCode: '03185',
    city: 'Drachhausen',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.8903,
    longitude: 14.3164
  },
  {
    id: 108,
    zipCode: '03185',
    city: 'Teichland',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.8056,
    longitude: 14.4444
  },
  {
    id: 109,
    zipCode: '03197',
    city: 'Drewitz',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.8966,
    longitude: 14.5103
  },
  {
    id: 110,
    zipCode: '03197',
    city: 'J\u00e4nschwalde',
    state: 'Brandenburg',
    community: 'Landkreis Spree-Nei\u00dfe',
    latitude: 51.8607,
    longitude: 14.4981
  },
  {
    id: 111,
    zipCode: '03202',
    city: 'Luckow-Petershagen',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2435,
    longitude: 14.2573
  },
  {
    id: 112,
    zipCode: '03205',
    city: 'Missen',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.7274,
    longitude: 14.0498
  },
  {
    id: 113,
    zipCode: '03205',
    city: 'Calau',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.744,
    longitude: 13.9533
  },
  {
    id: 114,
    zipCode: '03205',
    city: 'Mlode',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.7746,
    longitude: 13.9558
  },
  {
    id: 115,
    zipCode: '03205',
    city: 'Ogrosen',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.7127,
    longitude: 14.0422
  },
  {
    id: 116,
    zipCode: '03205',
    city: 'Laasow',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.7134,
    longitude: 14.0875
  },
  {
    id: 117,
    zipCode: '03205',
    city: 'Bronkow',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.6667,
    longitude: 13.9167
  },
  {
    id: 118,
    zipCode: '03205',
    city: 'Sa\u00dfleben',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.7591,
    longitude: 13.9865
  },
  {
    id: 119,
    zipCode: '03205',
    city: 'Bischdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.7989,
    longitude: 13.9698
  },
  {
    id: 120,
    zipCode: '03205',
    city: 'Lug',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.6303,
    longitude: 13.9296
  },
  {
    id: 121,
    zipCode: '03205',
    city: 'Werchow',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.7255,
    longitude: 13.9555
  },
  {
    id: 122,
    zipCode: '03205',
    city: 'Luckaitztal',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.6833,
    longitude: 14.0
  },
  {
    id: 123,
    zipCode: '03205',
    city: 'Lipten',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.6463,
    longitude: 13.9271
  },
  {
    id: 124,
    zipCode: '03205',
    city: 'Kemmen',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.7335,
    longitude: 13.9118
  },
  {
    id: 125,
    zipCode: '03205',
    city: 'Gro\u00df-Meh\u00dfow',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.7333,
    longitude: 13.8167
  },
  {
    id: 126,
    zipCode: '03205',
    city: 'Bolschwitz',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.7485,
    longitude: 14.0293
  },
  {
    id: 127,
    zipCode: '03222',
    city: 'Kittlitz',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.8308,
    longitude: 13.9161
  },
  {
    id: 128,
    zipCode: '03222',
    city: 'Boblitz',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.8406,
    longitude: 13.9827
  },
  {
    id: 129,
    zipCode: '03222',
    city: 'Gro\u00df Beuchow',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.85,
    longitude: 13.9031
  },
  {
    id: 130,
    zipCode: '03222',
    city: 'L\u00fcbbenau/Spreewald',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.8626,
    longitude: 13.9613
  },
  {
    id: 131,
    zipCode: '03222',
    city: 'Hindenberg',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.8532,
    longitude: 13.8464
  },
  {
    id: 132,
    zipCode: '03222',
    city: 'Gro\u00df-Klessow',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.8333,
    longitude: 13.95
  },
  {
    id: 133,
    zipCode: '03222',
    city: 'Klein Radden',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.8695,
    longitude: 13.8796
  },
  {
    id: 134,
    zipCode: '03222',
    city: 'Ragow',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.8875,
    longitude: 13.902
  },
  {
    id: 135,
    zipCode: '03226',
    city: 'Suschow',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.7994,
    longitude: 14.0923
  },
  {
    id: 136,
    zipCode: '03226',
    city: 'Raddusch',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.8181,
    longitude: 14.0403
  },
  {
    id: 137,
    zipCode: '03226',
    city: 'Vetschau',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.7864,
    longitude: 14.0794
  },
  {
    id: 138,
    zipCode: '03226',
    city: 'Ko\u00dfwig',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.7769,
    longitude: 14.0287
  },
  {
    id: 139,
    zipCode: '03226',
    city: 'Leipe',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.8554,
    longitude: 14.0441
  },
  {
    id: 140,
    zipCode: '03229',
    city: 'Altd\u00f6bern',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.65,
    longitude: 14.0333
  },
  {
    id: 141,
    zipCode: '03229',
    city: 'Luckaitztal',
    state: 'Brandenburg',
    community: 'Landkreis Oberspreewald-Lausitz',
    latitude: 51.6833,
    longitude: 14.0
  },
  {
    id: 142,
    zipCode: '03238',
    city: 'R\u00fcckersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.5695,
    longitude: 13.5723
  },
  {
    id: 143,
    zipCode: '03238',
    city: 'Staupitz',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.5337,
    longitude: 13.6703
  },
  {
    id: 144,
    zipCode: '03238',
    city: 'Eichholz-Dr\u00f6\u00dfig',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6083,
    longitude: 13.6583
  },
  {
    id: 145,
    zipCode: '03238',
    city: 'Massen',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6428,
    longitude: 13.733
  },
  {
    id: 146,
    zipCode: '03238',
    city: 'Ponnsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6667,
    longitude: 13.6833
  },
  {
    id: 147,
    zipCode: '03238',
    city: 'G\u00f6llnitz',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.64,
    longitude: 13.8575
  },
  {
    id: 148,
    zipCode: '03238',
    city: 'Lindthal',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6581,
    longitude: 13.7804
  },
  {
    id: 149,
    zipCode: '03238',
    city: 'Gruhno',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.5678,
    longitude: 13.5185
  },
  {
    id: 150,
    zipCode: '03238',
    city: 'M\u00fcnchhausen',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6673,
    longitude: 13.6447
  },
  {
    id: 151,
    zipCode: '03238',
    city: 'Dollenchen',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6082,
    longitude: 13.8595
  },
  {
    id: 152,
    zipCode: '03238',
    city: 'Gr\u00f6bitz',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6582,
    longitude: 13.7138
  },
  {
    id: 153,
    zipCode: '03238',
    city: 'Lindena',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.5928,
    longitude: 13.5434
  },
  {
    id: 154,
    zipCode: '03238',
    city: 'Oppelhain',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.5549,
    longitude: 13.5944
  },
  {
    id: 155,
    zipCode: '03238',
    city: 'Schacksdorf',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6151,
    longitude: 13.7618
  },
  {
    id: 156,
    zipCode: '03238',
    city: 'Gorden',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.5332,
    longitude: 13.6269
  },
  {
    id: 157,
    zipCode: '03238',
    city: 'Finsterwalde',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6339,
    longitude: 13.7066
  },
  {
    id: 158,
    zipCode: '03238',
    city: 'Lichterfeld',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.5976,
    longitude: 13.7781
  },
  {
    id: 159,
    zipCode: '03238',
    city: 'Lieskau',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6173,
    longitude: 13.8086
  },
  {
    id: 160,
    zipCode: '03238',
    city: 'Fischwasser',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.596,
    longitude: 13.6121
  },
  {
    id: 161,
    zipCode: '03238',
    city: 'Sallgast',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.5887,
    longitude: 13.8486
  },
  {
    id: 162,
    zipCode: '03238',
    city: 'Betten',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6273,
    longitude: 13.7674
  },
  {
    id: 163,
    zipCode: '03238',
    city: 'Schadewitz',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.5607,
    longitude: 13.4821
  },
  {
    id: 164,
    zipCode: '03238',
    city: 'Lugau',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6109,
    longitude: 13.5979
  },
  {
    id: 165,
    zipCode: '03246',
    city: 'Crinitz',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7333,
    longitude: 13.7667
  },
  {
    id: 166,
    zipCode: '03246',
    city: 'Gahro',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.738,
    longitude: 13.7246
  },
  {
    id: 167,
    zipCode: '03246',
    city: 'Babben',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7126,
    longitude: 13.7856
  },
  {
    id: 168,
    zipCode: '03249',
    city: 'Go\u00dfmar',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6905,
    longitude: 13.6829
  },
  {
    id: 169,
    zipCode: '03249',
    city: 'Bahren',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7,
    longitude: 13.7167
  },
  {
    id: 170,
    zipCode: '03249',
    city: 'Breitenau',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6864,
    longitude: 13.7241
  },
  {
    id: 171,
    zipCode: '03249',
    city: 'Sonnewalde',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6922,
    longitude: 13.6473
  },
  {
    id: 172,
    zipCode: '03249',
    city: 'Gro\u00dfkrausnik',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7322,
    longitude: 13.6271
  },
  {
    id: 173,
    zipCode: '03249',
    city: 'Zeckerin',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7112,
    longitude: 13.6321
  },
  {
    id: 174,
    zipCode: '03249',
    city: 'Pahlsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7193,
    longitude: 13.6486
  },
  {
    id: 175,
    zipCode: '03249',
    city: 'Kleinkrausnik',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7354,
    longitude: 13.5932
  },
  {
    id: 176,
    zipCode: '03253',
    city: 'Frankena',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.658,
    longitude: 13.5932
  },
  {
    id: 177,
    zipCode: '03253',
    city: 'Tr\u00f6bitz',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6,
    longitude: 13.4333
  },
  {
    id: 178,
    zipCode: '03253',
    city: 'Werenzhain',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6546,
    longitude: 13.5322
  },
  {
    id: 179,
    zipCode: '03253',
    city: 'Prie\u00dfen',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6613,
    longitude: 13.4301
  },
  {
    id: 180,
    zipCode: '03253',
    city: 'Schilda',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6,
    longitude: 13.3833
  },
  {
    id: 181,
    zipCode: '03253',
    city: 'Brenitz',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7023,
    longitude: 13.6007
  },
  {
    id: 182,
    zipCode: '03253',
    city: 'Sch\u00f6nborn',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6002,
    longitude: 13.4897
  },
  {
    id: 183,
    zipCode: '03253',
    city: 'Hennersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6369,
    longitude: 13.6069
  },
  {
    id: 184,
    zipCode: '03253',
    city: 'Buchhain',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6453,
    longitude: 13.3898
  },
  {
    id: 185,
    zipCode: '03253',
    city: 'D\u00fcbrichen',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6686,
    longitude: 13.4724
  },
  {
    id: 186,
    zipCode: '03253',
    city: 'Trebbus',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6924,
    longitude: 13.5211
  },
  {
    id: 187,
    zipCode: '03253',
    city: 'Sch\u00f6newalde',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.679,
    longitude: 13.6025
  },
  {
    id: 188,
    zipCode: '03253',
    city: 'Friedersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6985,
    longitude: 13.5726
  },
  {
    id: 189,
    zipCode: '03253',
    city: 'Nexdorf',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6368,
    longitude: 13.3715
  },
  {
    id: 190,
    zipCode: '03253',
    city: 'Arenzhain',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6735,
    longitude: 13.5092
  },
  {
    id: 191,
    zipCode: '03253',
    city: 'Doberlug-Kirchhain',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6258,
    longitude: 13.5623
  },
  {
    id: 192,
    zipCode: '04895',
    city: 'Falkenberg/Elster',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.5875,
    longitude: 13.2364
  },
  {
    id: 193,
    zipCode: '04910',
    city: 'Elsterwerda',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.4604,
    longitude: 13.52
  },
  {
    id: 194,
    zipCode: '04910',
    city: 'Haida',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.4793,
    longitude: 13.4679
  },
  {
    id: 195,
    zipCode: '04916',
    city: 'Werchau',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7782,
    longitude: 13.3194
  },
  {
    id: 196,
    zipCode: '04916',
    city: 'Stolzenhain',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.8441,
    longitude: 13.1607
  },
  {
    id: 197,
    zipCode: '04916',
    city: 'Themesgrund',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7667,
    longitude: 13.25
  },
  {
    id: 198,
    zipCode: '04916',
    city: 'Herzberg (Elster)',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6833,
    longitude: 13.2333
  },
  {
    id: 199,
    zipCode: '04916',
    city: 'Heideeck',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.8333,
    longitude: 13.2
  },
  {
    id: 200,
    zipCode: '04916',
    city: 'Wildberg',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7833,
    longitude: 13.3167
  },
  {
    id: 201,
    zipCode: '04924',
    city: 'Bad Liebenwerda',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.5183,
    longitude: 13.3946
  },
  {
    id: 202,
    zipCode: '04924',
    city: 'Uebigau-Wahrenbr\u00fcck',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.5167,
    longitude: 13.3333
  },
  {
    id: 203,
    zipCode: '04928',
    city: 'Kahla',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.4678,
    longitude: 13.5663
  },
  {
    id: 204,
    zipCode: '04928',
    city: 'D\u00f6llingen',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.4837,
    longitude: 13.5883
  },
  {
    id: 205,
    zipCode: '04928',
    city: 'Plessa',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.4667,
    longitude: 13.6167
  },
  {
    id: 206,
    zipCode: '04928',
    city: 'Schraden',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.4253,
    longitude: 13.6949
  },
  {
    id: 207,
    zipCode: '04931',
    city: 'M\u00fchlberg (Elbe)',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.4333,
    longitude: 13.2167
  },
  {
    id: 208,
    zipCode: '04932',
    city: 'Pr\u00f6sen',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.4153,
    longitude: 13.5501
  },
  {
    id: 209,
    zipCode: '04932',
    city: 'Gro\u00dfthiemig',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.3833,
    longitude: 13.6667
  },
  {
    id: 210,
    zipCode: '04932',
    city: 'Wainsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.4094,
    longitude: 13.5073
  },
  {
    id: 211,
    zipCode: '04932',
    city: 'Merzdorf',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.4,
    longitude: 13.5333
  },
  {
    id: 212,
    zipCode: '04932',
    city: 'Reichenhain',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.4598,
    longitude: 13.4287
  },
  {
    id: 213,
    zipCode: '04932',
    city: 'Hirschfeld',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.3833,
    longitude: 13.6167
  },
  {
    id: 214,
    zipCode: '04932',
    city: 'Gr\u00f6den',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.4,
    longitude: 13.5667
  },
  {
    id: 215,
    zipCode: '04932',
    city: 'Saathain',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.4632,
    longitude: 13.4638
  },
  {
    id: 216,
    zipCode: '04934',
    city: 'Hohenleipisch',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.5,
    longitude: 13.55
  },
  {
    id: 217,
    zipCode: '04934',
    city: 'Dreska',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.4853,
    longitude: 13.538
  },
  {
    id: 218,
    zipCode: '04936',
    city: 'Wehrhain',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7213,
    longitude: 13.4186
  },
  {
    id: 219,
    zipCode: '04936',
    city: 'Schlieben',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7238,
    longitude: 13.383
  },
  {
    id: 220,
    zipCode: '04936',
    city: 'Hohenbucko',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7667,
    longitude: 13.4667
  },
  {
    id: 221,
    zipCode: '04936',
    city: 'Kolochau',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7268,
    longitude: 13.3177
  },
  {
    id: 222,
    zipCode: '04936',
    city: 'Freileben',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7833,
    longitude: 13.4
  },
  {
    id: 223,
    zipCode: '04936',
    city: 'Lebusa',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7957,
    longitude: 13.4207
  },
  {
    id: 224,
    zipCode: '04936',
    city: 'Jagsal',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6866,
    longitude: 13.354
  },
  {
    id: 225,
    zipCode: '04936',
    city: 'Frankenhain',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7027,
    longitude: 13.4154
  },
  {
    id: 226,
    zipCode: '04936',
    city: 'Malitschkendorf',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6945,
    longitude: 13.3296
  },
  {
    id: 227,
    zipCode: '04936',
    city: 'Naundorf',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7374,
    longitude: 13.4401
  },
  {
    id: 228,
    zipCode: '04936',
    city: '\u00d6lsig',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6833,
    longitude: 13.375
  },
  {
    id: 229,
    zipCode: '04936',
    city: 'Stechau',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.6974,
    longitude: 13.4701
  },
  {
    id: 230,
    zipCode: '04936',
    city: 'Sch\u00f6na-Kolpien',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.825,
    longitude: 13.45
  },
  {
    id: 231,
    zipCode: '04936',
    city: 'Hillmersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7091,
    longitude: 13.4873
  },
  {
    id: 232,
    zipCode: '04936',
    city: 'Pro\u00dfmarke',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.7408,
    longitude: 13.4913
  },
  {
    id: 233,
    zipCode: '04936',
    city: 'K\u00f6rba',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.8047,
    longitude: 13.3877
  },
  {
    id: 234,
    zipCode: '04938',
    city: 'Uebigau-Wahrenbr\u00fcck',
    state: 'Brandenburg',
    community: 'Landkreis Elbe-Elster',
    latitude: 51.5167,
    longitude: 13.3333
  },
  {
    id: 235,
    zipCode: '12529',
    city: 'Sch\u00f6nefeld',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.389,
    longitude: 13.5037
  },
  {
    id: 236,
    zipCode: '14461',
    city: 'Potsdam',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Potsdam',
    latitude: 52.4,
    longitude: 13.0667
  },
  {
    id: 237,
    zipCode: '14467',
    city: 'Potsdam',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Potsdam',
    latitude: 52.403,
    longitude: 13.0626
  },
  {
    id: 238,
    zipCode: '14469',
    city: 'Potsdam',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Potsdam',
    latitude: 52.4091,
    longitude: 12.9899
  },
  {
    id: 239,
    zipCode: '14471',
    city: 'Potsdam',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Potsdam',
    latitude: 52.3744,
    longitude: 13.0102
  },
  {
    id: 240,
    zipCode: '14473',
    city: 'Potsdam',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Potsdam',
    latitude: 52.3908,
    longitude: 13.0645
  },
  {
    id: 241,
    zipCode: '14476',
    city: 'Golm',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Potsdam',
    latitude: 52.4062,
    longitude: 12.967
  },
  {
    id: 242,
    zipCode: '14476',
    city: 'Gro\u00df Glienicke',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Potsdam',
    latitude: 52.4675,
    longitude: 13.1079
  },
  {
    id: 243,
    zipCode: '14476',
    city: 'Neu Fahrland',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Potsdam',
    latitude: 52.4489,
    longitude: 13.0492
  },
  {
    id: 244,
    zipCode: '14476',
    city: 'Satzkorn',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Potsdam',
    latitude: 52.4744,
    longitude: 12.9899
  },
  {
    id: 245,
    zipCode: '14476',
    city: 'Uetz-Paaren',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Potsdam',
    latitude: 52.4726,
    longitude: 12.9376
  },
  {
    id: 246,
    zipCode: '14476',
    city: 'Seeburg',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5097,
    longitude: 13.1198
  },
  {
    id: 247,
    zipCode: '14476',
    city: 'Fahrland',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Potsdam',
    latitude: 52.4689,
    longitude: 13.0117
  },
  {
    id: 248,
    zipCode: '14476',
    city: 'Marquardt',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Potsdam',
    latitude: 52.459,
    longitude: 12.9663
  },
  {
    id: 249,
    zipCode: '14476',
    city: 'T\u00f6plitz',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.4167,
    longitude: 12.7944
  },
  {
    id: 250,
    zipCode: '14478',
    city: 'Potsdam',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Potsdam',
    latitude: 52.3725,
    longitude: 13.0914
  },
  {
    id: 251,
    zipCode: '14480',
    city: 'Potsdam',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Potsdam',
    latitude: 52.3689,
    longitude: 13.1273
  },
  {
    id: 252,
    zipCode: '14482',
    city: 'Potsdam',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Potsdam',
    latitude: 52.3871,
    longitude: 13.0993
  },
  {
    id: 253,
    zipCode: '14513',
    city: 'Teltow',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.4031,
    longitude: 13.2601
  },
  {
    id: 254,
    zipCode: '14532',
    city: 'Philippsthal',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3336,
    longitude: 13.1413
  },
  {
    id: 255,
    zipCode: '14532',
    city: 'Stahnsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3833,
    longitude: 13.2167
  },
  {
    id: 256,
    zipCode: '14532',
    city: 'Fahlhorst',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3061,
    longitude: 13.1626
  },
  {
    id: 257,
    zipCode: '14532',
    city: 'Nudow',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3283,
    longitude: 13.1647
  },
  {
    id: 258,
    zipCode: '14532',
    city: 'Kleinmachnow',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.4079,
    longitude: 13.2251
  },
  {
    id: 259,
    zipCode: '14542',
    city: 'Schwielowsee',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3389,
    longitude: 12.9722
  },
  {
    id: 260,
    zipCode: '14542',
    city: 'Werder (Havel)',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3687,
    longitude: 12.9188
  },
  {
    id: 261,
    zipCode: '14542',
    city: 'Kloster Lehnin',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3271,
    longitude: 12.6625
  },
  {
    id: 262,
    zipCode: '14547',
    city: 'St\u00fccken',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.245,
    longitude: 13.0792
  },
  {
    id: 263,
    zipCode: '14547',
    city: 'Beelitz',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.2381,
    longitude: 12.9714
  },
  {
    id: 264,
    zipCode: '14548',
    city: 'Schwielowsee',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3389,
    longitude: 12.9722
  },
  {
    id: 265,
    zipCode: '14550',
    city: 'Schmergow',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.454,
    longitude: 12.8116
  },
  {
    id: 266,
    zipCode: '14550',
    city: 'Bochow',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.381,
    longitude: 12.7934
  },
  {
    id: 267,
    zipCode: '14550',
    city: 'Gro\u00df Kreutz',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.4028,
    longitude: 12.7794
  },
  {
    id: 268,
    zipCode: '14550',
    city: 'Deetz',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.4466,
    longitude: 12.7718
  },
  {
    id: 269,
    zipCode: '14550',
    city: 'Derwitz',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.4029,
    longitude: 12.8245
  },
  {
    id: 270,
    zipCode: '14550',
    city: 'Krielow',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.4166,
    longitude: 12.8034
  },
  {
    id: 271,
    zipCode: '14552',
    city: 'Fresdorf',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.2703,
    longitude: 13.0754
  },
  {
    id: 272,
    zipCode: '14552',
    city: 'Tremsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.27,
    longitude: 13.1198
  },
  {
    id: 273,
    zipCode: '14552',
    city: 'Saarmund',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3162,
    longitude: 13.1251
  },
  {
    id: 274,
    zipCode: '14552',
    city: 'Michendorf',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3135,
    longitude: 13.03
  },
  {
    id: 275,
    zipCode: '14552',
    city: 'Wildenbruch',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.283,
    longitude: 13.0617
  },
  {
    id: 276,
    zipCode: '14554',
    city: 'Seddiner See',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.2722,
    longitude: 13.0167
  },
  {
    id: 277,
    zipCode: '14557',
    city: 'Wilhelmshorst',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3318,
    longitude: 13.0622
  },
  {
    id: 278,
    zipCode: '14557',
    city: 'Langerwisch',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3167,
    longitude: 13.0667
  },
  {
    id: 279,
    zipCode: '14558',
    city: 'Bergholz-Rehbr\u00fccke',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3472,
    longitude: 13.1053
  },
  {
    id: 280,
    zipCode: '14612',
    city: 'Falkensee',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5601,
    longitude: 13.0927
  },
  {
    id: 281,
    zipCode: '14621',
    city: 'Sch\u00f6nwalde',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6192,
    longitude: 13.1265
  },
  {
    id: 282,
    zipCode: '14624',
    city: 'Dallgow-D\u00f6beritz',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5427,
    longitude: 13.0584
  },
  {
    id: 283,
    zipCode: '14627',
    city: 'Elstal',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5425,
    longitude: 12.9879
  },
  {
    id: 284,
    zipCode: '14641',
    city: 'Bergerdamm',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6561,
    longitude: 12.8039
  },
  {
    id: 285,
    zipCode: '14641',
    city: 'B\u00f6rnicke',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.686,
    longitude: 12.9355
  },
  {
    id: 286,
    zipCode: '14641',
    city: 'M\u00fchlenberge',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6667,
    longitude: 12.6111
  },
  {
    id: 287,
    zipCode: '14641',
    city: 'Tietzow',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.7125,
    longitude: 12.9337
  },
  {
    id: 288,
    zipCode: '14641',
    city: 'Gr\u00fcnefeld',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6763,
    longitude: 12.9646
  },
  {
    id: 289,
    zipCode: '14641',
    city: 'Wachow',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5337,
    longitude: 12.7574
  },
  {
    id: 290,
    zipCode: '14641',
    city: 'Falkenrehde',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.4963,
    longitude: 12.9234
  },
  {
    id: 291,
    zipCode: '14641',
    city: 'Gro\u00df Behnitz',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5796,
    longitude: 12.7329
  },
  {
    id: 292,
    zipCode: '14641',
    city: 'Etzin',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5177,
    longitude: 12.8542
  },
  {
    id: 293,
    zipCode: '14641',
    city: 'Paaren im Glien',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6538,
    longitude: 12.9876
  },
  {
    id: 294,
    zipCode: '14641',
    city: 'Klein Behnitz',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.567,
    longitude: 12.7083
  },
  {
    id: 295,
    zipCode: '14641',
    city: 'Perwenitz',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6585,
    longitude: 13.0124
  },
  {
    id: 296,
    zipCode: '14641',
    city: 'Retzow',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6248,
    longitude: 12.6855
  },
  {
    id: 297,
    zipCode: '14641',
    city: 'Paulinenaue',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.677,
    longitude: 12.7107
  },
  {
    id: 298,
    zipCode: '14641',
    city: 'Wustermark',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.55,
    longitude: 12.95
  },
  {
    id: 299,
    zipCode: '14641',
    city: 'Wansdorf',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6399,
    longitude: 13.0869
  },
  {
    id: 300,
    zipCode: '14641',
    city: 'Kienberg',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.663,
    longitude: 12.9058
  },
  {
    id: 301,
    zipCode: '14641',
    city: 'Ribbeck',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6246,
    longitude: 12.7514
  },
  {
    id: 302,
    zipCode: '14641',
    city: 'Berge',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6201,
    longitude: 12.7951
  },
  {
    id: 303,
    zipCode: '14641',
    city: 'Selbelang',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6328,
    longitude: 12.7138
  },
  {
    id: 304,
    zipCode: '14641',
    city: 'Zeestow',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.573,
    longitude: 12.9592
  },
  {
    id: 305,
    zipCode: '14641',
    city: 'Lietzow',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6153,
    longitude: 12.8305
  },
  {
    id: 306,
    zipCode: '14641',
    city: 'Markee',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5791,
    longitude: 12.872
  },
  {
    id: 307,
    zipCode: '14641',
    city: 'Nauen',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.607,
    longitude: 12.8737
  },
  {
    id: 308,
    zipCode: '14641',
    city: 'Pausin',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6389,
    longitude: 13.0423
  },
  {
    id: 309,
    zipCode: '14641',
    city: 'Br\u00e4dikow',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6898,
    longitude: 12.65
  },
  {
    id: 310,
    zipCode: '14641',
    city: 'Tremmen',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5305,
    longitude: 12.8181
  },
  {
    id: 311,
    zipCode: '14641',
    city: 'Bredow',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5887,
    longitude: 12.9266
  },
  {
    id: 312,
    zipCode: '14641',
    city: 'Pessin',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6424,
    longitude: 12.6668
  },
  {
    id: 313,
    zipCode: '14656',
    city: 'Brieselang',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5833,
    longitude: 13.0
  },
  {
    id: 314,
    zipCode: '14662',
    city: 'Vietznitz',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.7284,
    longitude: 12.6256
  },
  {
    id: 315,
    zipCode: '14662',
    city: 'Warsow',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.7113,
    longitude: 12.6433
  },
  {
    id: 316,
    zipCode: '14662',
    city: 'M\u00fchlenberge',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6667,
    longitude: 12.6111
  },
  {
    id: 317,
    zipCode: '14662',
    city: 'Friesack',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.7376,
    longitude: 12.5797
  },
  {
    id: 318,
    zipCode: '14669',
    city: 'Ketzin',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.4781,
    longitude: 12.8453
  },
  {
    id: 319,
    zipCode: '14669',
    city: 'Zachow',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.4837,
    longitude: 12.7845
  },
  {
    id: 320,
    zipCode: '14712',
    city: 'Rathenow',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6066,
    longitude: 12.337
  },
  {
    id: 321,
    zipCode: '14715',
    city: 'Stechow-Ferchesar',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6478,
    longitude: 12.45
  },
  {
    id: 322,
    zipCode: '14715',
    city: 'Gr\u00e4ningen',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5789,
    longitude: 12.4722
  },
  {
    id: 323,
    zipCode: '14715',
    city: 'Nennhausen',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6,
    longitude: 12.5
  },
  {
    id: 324,
    zipCode: '14715',
    city: 'Landin',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6642,
    longitude: 12.5353
  },
  {
    id: 325,
    zipCode: '14715',
    city: 'Gro\u00dfwudicke',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5929,
    longitude: 12.2327
  },
  {
    id: 326,
    zipCode: '14715',
    city: 'M\u00e4rkisch Luch M\u00f6thlow',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6,
    longitude: 12.65
  },
  {
    id: 327,
    zipCode: '14715',
    city: 'M\u00e4rkisch Luch Barnewitz',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5667,
    longitude: 12.6167
  },
  {
    id: 328,
    zipCode: '14715',
    city: 'Zollchow',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5282,
    longitude: 12.21
  },
  {
    id: 329,
    zipCode: '14715',
    city: 'Bamme',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.583,
    longitude: 12.4336
  },
  {
    id: 330,
    zipCode: '14715',
    city: 'M\u00e4rkisch Luch Garlitz',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5667,
    longitude: 12.5667
  },
  {
    id: 331,
    zipCode: '14715',
    city: 'Nitzahn',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.4672,
    longitude: 12.3608
  },
  {
    id: 332,
    zipCode: '14715',
    city: 'Vieritz',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5249,
    longitude: 12.2564
  },
  {
    id: 333,
    zipCode: '14715',
    city: 'M\u00e4rkisch Luch Buschow',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5833,
    longitude: 12.6333
  },
  {
    id: 334,
    zipCode: '14715',
    city: 'Jerchel',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.4876,
    longitude: 12.3433
  },
  {
    id: 335,
    zipCode: '14715',
    city: 'M\u00fctzlitz',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5585,
    longitude: 12.5108
  },
  {
    id: 336,
    zipCode: '14715',
    city: 'Kriele',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6551,
    longitude: 12.5557
  },
  {
    id: 337,
    zipCode: '14715',
    city: 'Kotzen',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6333,
    longitude: 12.5167
  },
  {
    id: 338,
    zipCode: '14715',
    city: 'B\u00fctzer',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5364,
    longitude: 12.2995
  },
  {
    id: 339,
    zipCode: '14715',
    city: 'M\u00f6thlitz',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.4755,
    longitude: 12.3899
  },
  {
    id: 340,
    zipCode: '14715',
    city: 'M\u00e4rkisch Luch',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5875,
    longitude: 12.6167
  },
  {
    id: 341,
    zipCode: '14715',
    city: 'Liepe',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6135,
    longitude: 12.6014
  },
  {
    id: 342,
    zipCode: '14715',
    city: 'Seeblick',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.6722,
    longitude: 12.3778
  },
  {
    id: 343,
    zipCode: '14715',
    city: 'Milow',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5195,
    longitude: 12.3115
  },
  {
    id: 344,
    zipCode: '14715',
    city: 'Havelaue',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.7167,
    longitude: 12.2567
  },
  {
    id: 345,
    zipCode: '14727',
    city: 'Premnitz',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5318,
    longitude: 12.3485
  },
  {
    id: 346,
    zipCode: '14727',
    city: 'D\u00f6beritz',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.5222,
    longitude: 12.3682
  },
  {
    id: 347,
    zipCode: '14728',
    city: 'Rhinow',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.7509,
    longitude: 12.3419
  },
  {
    id: 348,
    zipCode: '14728',
    city: 'Kle\u00dfen-G\u00f6rne',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.7167,
    longitude: 12.5
  },
  {
    id: 349,
    zipCode: '14728',
    city: 'Havelaue',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.7167,
    longitude: 12.2567
  },
  {
    id: 350,
    zipCode: '14728',
    city: 'Gollenberg',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.745,
    longitude: 12.4
  },
  {
    id: 351,
    zipCode: '14770',
    city: 'Brandenburg an der Havel',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Brandenburg an der Havel',
    latitude: 52.4189,
    longitude: 12.5228
  },
  {
    id: 352,
    zipCode: '14772',
    city: 'Brandenburg an der Havel',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Brandenburg an der Havel',
    latitude: 52.4358,
    longitude: 12.5297
  },
  {
    id: 353,
    zipCode: '14774',
    city: 'Brandenburg an der Havel',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Brandenburg an der Havel',
    latitude: 52.3864,
    longitude: 12.4144
  },
  {
    id: 354,
    zipCode: '14776',
    city: 'Brandenburg an der Havel',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Brandenburg an der Havel',
    latitude: 52.4043,
    longitude: 12.568
  },
  {
    id: 355,
    zipCode: '14778',
    city: 'Wust',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Brandenburg an der Havel',
    latitude: 52.4147,
    longitude: 12.6106
  },
  {
    id: 356,
    zipCode: '14778',
    city: 'Gollwitz',
    state: 'Brandenburg',
    community: 'Kreisfreie Stadt Brandenburg an der Havel',
    latitude: 52.4195,
    longitude: 12.6451
  },
  {
    id: 357,
    zipCode: '14778',
    city: 'Wollin',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.2833,
    longitude: 12.4667
  },
  {
    id: 358,
    zipCode: '14778',
    city: 'Wenzlow',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3,
    longitude: 12.45
  },
  {
    id: 359,
    zipCode: '14778',
    city: 'G\u00f6tz',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.4197,
    longitude: 12.7193
  },
  {
    id: 360,
    zipCode: '14778',
    city: 'Kloster Lehnin',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3271,
    longitude: 12.6625
  },
  {
    id: 361,
    zipCode: '14778',
    city: 'Golzow',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.2762,
    longitude: 12.6005
  },
  {
    id: 362,
    zipCode: '14778',
    city: 'Schenkenberg',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3904,
    longitude: 12.7112
  },
  {
    id: 363,
    zipCode: '14778',
    city: 'Beetzsee',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.4833,
    longitude: 12.5611
  },
  {
    id: 364,
    zipCode: '14778',
    city: 'Havelsee',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.4929,
    longitude: 12.4667
  },
  {
    id: 365,
    zipCode: '14778',
    city: 'Jeserig',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.0859,
    longitude: 12.4511
  },
  {
    id: 366,
    zipCode: '14778',
    city: 'P\u00e4wesin',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.5167,
    longitude: 12.7167
  },
  {
    id: 367,
    zipCode: '14778',
    city: 'Beetzseeheide',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.4917,
    longitude: 12.6125
  },
  {
    id: 368,
    zipCode: '14778',
    city: 'Roskow',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.4724,
    longitude: 12.7189
  },
  {
    id: 369,
    zipCode: '14778',
    city: 'Planetal',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.1167,
    longitude: 12.6767
  },
  {
    id: 370,
    zipCode: '14778',
    city: 'Planebruch',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.2542,
    longitude: 12.6875
  },
  {
    id: 371,
    zipCode: '14778',
    city: 'Trechwitz',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3662,
    longitude: 12.7192
  },
  {
    id: 372,
    zipCode: '14789',
    city: 'Wusterwitz',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3667,
    longitude: 12.3849
  },
  {
    id: 373,
    zipCode: '14789',
    city: 'Rosenau',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3292,
    longitude: 12.3583
  },
  {
    id: 374,
    zipCode: '14789',
    city: 'Bensdorf',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.4167,
    longitude: 12.3333
  },
  {
    id: 375,
    zipCode: '14793',
    city: 'Buckautal',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.2333,
    longitude: 12.3222
  },
  {
    id: 376,
    zipCode: '14793',
    city: 'Gr\u00e4ben',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.2333,
    longitude: 12.4333
  },
  {
    id: 377,
    zipCode: '14793',
    city: 'Rottstock',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.1989,
    longitude: 12.3523
  },
  {
    id: 378,
    zipCode: '14793',
    city: 'Ziesar',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.2405,
    longitude: 12.3471
  },
  {
    id: 379,
    zipCode: '14797',
    city: 'Kloster Lehnin',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.3271,
    longitude: 12.6625
  },
  {
    id: 380,
    zipCode: '14798',
    city: 'Havelsee',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.4929,
    longitude: 12.4667
  },
  {
    id: 381,
    zipCode: '14806',
    city: 'Schwanebeck',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.1765,
    longitude: 12.6272
  },
  {
    id: 382,
    zipCode: '14806',
    city: 'Hagelberg',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.1386,
    longitude: 12.5196
  },
  {
    id: 383,
    zipCode: '14806',
    city: 'Belzig',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.1333,
    longitude: 12.6
  },
  {
    id: 384,
    zipCode: '14806',
    city: 'Planetal',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.1167,
    longitude: 12.6767
  },
  {
    id: 385,
    zipCode: '14822',
    city: 'Borkwalde',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.25,
    longitude: 12.8333
  },
  {
    id: 386,
    zipCode: '14822',
    city: 'Borkheide',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.2167,
    longitude: 12.85
  },
  {
    id: 387,
    zipCode: '14822',
    city: 'Planebruch',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.2542,
    longitude: 12.6875
  },
  {
    id: 388,
    zipCode: '14822',
    city: 'Linthe',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.1975,
    longitude: 12.7851
  },
  {
    id: 389,
    zipCode: '14822',
    city: 'Br\u00fcck',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.1977,
    longitude: 12.7687
  },
  {
    id: 390,
    zipCode: '14822',
    city: 'M\u00fchlenflie\u00df',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.1194,
    longitude: 12.7917
  },
  {
    id: 391,
    zipCode: '14823',
    city: 'Niemegk',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.0531,
    longitude: 12.6185
  },
  {
    id: 392,
    zipCode: '14823',
    city: 'M\u00fchlenflie\u00df',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.1194,
    longitude: 12.7917
  },
  {
    id: 393,
    zipCode: '14823',
    city: 'Rabenstein/Fl\u00e4ming',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.0333,
    longitude: 12.6313
  },
  {
    id: 394,
    zipCode: '14827',
    city: 'Wiesenburg',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.1146,
    longitude: 12.4553
  },
  {
    id: 395,
    zipCode: '14828',
    city: 'G\u00f6rzke',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.1718,
    longitude: 12.3751
  },
  {
    id: 396,
    zipCode: '14913',
    city: 'Niederg\u00f6rsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 51.9794,
    longitude: 12.9854
  },
  {
    id: 397,
    zipCode: '14913',
    city: 'J\u00fcterbog',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 51.9961,
    longitude: 13.0798
  },
  {
    id: 398,
    zipCode: '14913',
    city: 'Niebendorf-Heinsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 51.9333,
    longitude: 13.3333
  },
  {
    id: 399,
    zipCode: '14913',
    city: 'Wahlsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 51.9562,
    longitude: 13.3278
  },
  {
    id: 400,
    zipCode: '14913',
    city: 'Herbersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 51.8618,
    longitude: 13.295
  },
  {
    id: 401,
    zipCode: '14913',
    city: 'Ihlow',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 51.8672,
    longitude: 13.3377
  },
  {
    id: 402,
    zipCode: '14913',
    city: 'Hohenseefeld',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 51.8895,
    longitude: 13.305
  },
  {
    id: 403,
    zipCode: '14913',
    city: 'Nuthe-Urstromtal',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.1116,
    longitude: 13.2152
  },
  {
    id: 404,
    zipCode: '14913',
    city: 'Niederer Fl\u00e4ming',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 51.9025,
    longitude: 13.2092
  },
  {
    id: 405,
    zipCode: '14929',
    city: 'Treuenbrietzen',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.0975,
    longitude: 12.8726
  },
  {
    id: 406,
    zipCode: '14943',
    city: 'L\u00fchsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Potsdam-Mittelmark',
    latitude: 52.1564,
    longitude: 12.9703
  },
  {
    id: 407,
    zipCode: '14943',
    city: 'Luckenwalde',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.0903,
    longitude: 13.1677
  },
  {
    id: 408,
    zipCode: '14943',
    city: 'L\u00fcdersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.1858,
    longitude: 13.2899
  },
  {
    id: 409,
    zipCode: '14947',
    city: 'Nuthe-Urstromtal',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.1116,
    longitude: 13.2152
  },
  {
    id: 410,
    zipCode: '14959',
    city: 'Sch\u00f6nhagen',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.213,
    longitude: 13.1464
  },
  {
    id: 411,
    zipCode: '14959',
    city: 'Trebbin',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.2168,
    longitude: 13.225
  },
  {
    id: 412,
    zipCode: '14974',
    city: 'Thyrow',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.2526,
    longitude: 13.2396
  },
  {
    id: 413,
    zipCode: '14974',
    city: 'Ludwigsfelde',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.3032,
    longitude: 13.254
  },
  {
    id: 414,
    zipCode: '14979',
    city: 'Gro\u00dfbeeren',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.3586,
    longitude: 13.3099
  },
  {
    id: 415,
    zipCode: '15230',
    city: 'Frankfurt (Oder)',
    state: 'Brandenburg',
    community: 'Frankfurt (Oder)',
    latitude: 52.3475,
    longitude: 14.5539
  },
  {
    id: 416,
    zipCode: '15232',
    city: 'Frankfurt (Oder)',
    state: 'Brandenburg',
    community: 'Frankfurt (Oder)',
    latitude: 52.3241,
    longitude: 14.5325
  },
  {
    id: 417,
    zipCode: '15234',
    city: 'Frankfurt (Oder)',
    state: 'Brandenburg',
    community: 'Frankfurt (Oder)',
    latitude: 52.3646,
    longitude: 14.5244
  },
  {
    id: 418,
    zipCode: '15236',
    city: 'Jacobsdorf Jacobsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3345,
    longitude: 14.4179
  },
  {
    id: 419,
    zipCode: '15236',
    city: 'Jacobsdorf Pillgram',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3333,
    longitude: 14.4
  },
  {
    id: 420,
    zipCode: '15236',
    city: 'Treplin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4,
    longitude: 14.4
  },
  {
    id: 421,
    zipCode: '15236',
    city: 'Jacobsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3333,
    longitude: 14.35
  },
  {
    id: 422,
    zipCode: '15236',
    city: 'Jacobsdorf Sieversdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3833,
    longitude: 14.3667
  },
  {
    id: 423,
    zipCode: '15236',
    city: 'Frankfurt (Oder)',
    state: 'Brandenburg',
    community: 'Frankfurt (Oder)',
    latitude: 52.35,
    longitude: 14.55
  },
  {
    id: 424,
    zipCode: '15236',
    city: 'Jacobsdorf Petersdorf bei Briesen',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3667,
    longitude: 14.35
  },
  {
    id: 425,
    zipCode: '15295',
    city: 'Brieskow-Finkenheerd',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2539,
    longitude: 14.5728
  },
  {
    id: 426,
    zipCode: '15295',
    city: 'Gro\u00df Lindow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2333,
    longitude: 14.5333
  },
  {
    id: 427,
    zipCode: '15295',
    city: 'Wiesenau',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2307,
    longitude: 14.5911
  },
  {
    id: 428,
    zipCode: '15295',
    city: 'Ziltendorf Aurith',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.25,
    longitude: 14.6833
  },
  {
    id: 429,
    zipCode: '15295',
    city: 'Gro\u00df Lindow Schlaubehammer',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.25,
    longitude: 14.4833
  },
  {
    id: 430,
    zipCode: '15295',
    city: 'Ziltendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2061,
    longitude: 14.6241
  },
  {
    id: 431,
    zipCode: '15295',
    city: 'Ziltendorf Ernst-Th\u00e4lmann-Siedlung',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2333,
    longitude: 14.6333
  },
  {
    id: 432,
    zipCode: '15295',
    city: 'Gro\u00df Lindow Wei\u00dfenspring',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2333,
    longitude: 14.5167
  },
  {
    id: 433,
    zipCode: '15299',
    city: 'Dammendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1408,
    longitude: 14.416
  },
  {
    id: 434,
    zipCode: '15299',
    city: 'M\u00fcllrose',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2474,
    longitude: 14.4179
  },
  {
    id: 435,
    zipCode: '15299',
    city: 'Mixdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2,
    longitude: 14.4
  },
  {
    id: 436,
    zipCode: '15299',
    city: 'Grunow-Dammendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.15,
    longitude: 14.4083
  },
  {
    id: 437,
    zipCode: '15299',
    city: 'Grunow-Dammendorf Grunow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.15,
    longitude: 14.4
  },
  {
    id: 438,
    zipCode: '15306',
    city: 'Vierlinden Diedersdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5121,
    longitude: 14.3311
  },
  {
    id: 439,
    zipCode: '15306',
    city: 'Werbig',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5617,
    longitude: 14.3848
  },
  {
    id: 440,
    zipCode: '15306',
    city: 'Vierlinden G\u00f6rlsdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5299,
    longitude: 14.3107
  },
  {
    id: 441,
    zipCode: '15306',
    city: 'Vierlinden Marxdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.483,
    longitude: 14.28
  },
  {
    id: 442,
    zipCode: '15306',
    city: 'Falkenhagen',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4333,
    longitude: 14.3167
  },
  {
    id: 443,
    zipCode: '15306',
    city: 'Vierlinden Neuentempel',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.502,
    longitude: 14.3265
  },
  {
    id: 444,
    zipCode: '15306',
    city: 'Seelow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5339,
    longitude: 14.3813
  },
  {
    id: 445,
    zipCode: '15306',
    city: 'Lietzen',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4699,
    longitude: 14.3401
  },
  {
    id: 446,
    zipCode: '15306',
    city: 'Vierlinden Worin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5206,
    longitude: 14.2749
  },
  {
    id: 447,
    zipCode: '15306',
    city: 'Lindendorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4899,
    longitude: 14.4285
  },
  {
    id: 448,
    zipCode: '15306',
    city: 'Vierlinden Friedersdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5102,
    longitude: 14.3987
  },
  {
    id: 449,
    zipCode: '15306',
    city: 'Gusow-Platkow Gusow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5719,
    longitude: 14.3556
  },
  {
    id: 450,
    zipCode: '15306',
    city: 'Vierlinden',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.515,
    longitude: 14.3141
  },
  {
    id: 451,
    zipCode: '15306',
    city: 'Lindendorf Neu Mahlisch',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4802,
    longitude: 14.3898
  },
  {
    id: 452,
    zipCode: '15306',
    city: 'Lindendorf Libbenichen',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4775,
    longitude: 14.4367
  },
  {
    id: 453,
    zipCode: '15306',
    city: 'Fichtenh\u00f6he Alt Mahlisch',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4641,
    longitude: 14.4209
  },
  {
    id: 454,
    zipCode: '15306',
    city: 'Lindendorf Dolgelin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4955,
    longitude: 14.4071
  },
  {
    id: 455,
    zipCode: '15306',
    city: 'Vierlinden Alt Rosenthal',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5471,
    longitude: 14.277
  },
  {
    id: 456,
    zipCode: '15306',
    city: 'Gusow-Platkow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5777,
    longitude: 14.34
  },
  {
    id: 457,
    zipCode: '15306',
    city: 'Lindendorf Sachsendorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5063,
    longitude: 14.4804
  },
  {
    id: 458,
    zipCode: '15306',
    city: 'Gusow-Platkow Platkow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5835,
    longitude: 14.3244
  },
  {
    id: 459,
    zipCode: '15306',
    city: 'Fichtenh\u00f6he',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4556,
    longitude: 14.4469
  },
  {
    id: 460,
    zipCode: '15306',
    city: 'Fichtenh\u00f6he Niederjesar',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4449,
    longitude: 14.4324
  },
  {
    id: 461,
    zipCode: '15320',
    city: 'Sietzing',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6594,
    longitude: 14.286
  },
  {
    id: 462,
    zipCode: '15320',
    city: 'Neutrebbin Alttrebbin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6908,
    longitude: 14.2481
  },
  {
    id: 463,
    zipCode: '15320',
    city: 'Neuhardenberg Quappendorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6186,
    longitude: 14.2669
  },
  {
    id: 464,
    zipCode: '15320',
    city: 'Neuhardenberg',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.596,
    longitude: 14.2377
  },
  {
    id: 465,
    zipCode: '15320',
    city: 'Neuhardenberg Neuhardenberg',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5955,
    longitude: 14.2402
  },
  {
    id: 466,
    zipCode: '15320',
    city: 'Neutrebbin Neutrebbin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6667,
    longitude: 14.2333
  },
  {
    id: 467,
    zipCode: '15320',
    city: 'Neuhardenberg Wulkow bei Trebnitz',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5697,
    longitude: 14.2351
  },
  {
    id: 468,
    zipCode: '15320',
    city: 'Neutrebbin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6648,
    longitude: 14.228
  },
  {
    id: 469,
    zipCode: '15320',
    city: 'Neuhardenberg Altfriedland',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6274,
    longitude: 14.2135
  },
  {
    id: 470,
    zipCode: '15320',
    city: 'Neutrebbin Altbarnim',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6857,
    longitude: 14.2808
  },
  {
    id: 471,
    zipCode: '15324',
    city: 'Gieshof-Zelliner Loose',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7237,
    longitude: 14.3174
  },
  {
    id: 472,
    zipCode: '15324',
    city: 'Neubarnim',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7025,
    longitude: 14.3056
  },
  {
    id: 473,
    zipCode: '15324',
    city: 'Letschin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6438,
    longitude: 14.3601
  },
  {
    id: 474,
    zipCode: '15324',
    city: 'Ortwig',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7039,
    longitude: 14.3562
  },
  {
    id: 475,
    zipCode: '15324',
    city: 'Kiehnwerder',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6316,
    longitude: 14.303
  },
  {
    id: 476,
    zipCode: '15324',
    city: 'Kienitz',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6731,
    longitude: 14.4389
  },
  {
    id: 477,
    zipCode: '15324',
    city: 'Gro\u00df Neuendorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7005,
    longitude: 14.4081
  },
  {
    id: 478,
    zipCode: '15326',
    city: 'Lebus Wulkow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4021,
    longitude: 14.4715
  },
  {
    id: 479,
    zipCode: '15326',
    city: 'Podelzig',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4717,
    longitude: 14.5347
  },
  {
    id: 480,
    zipCode: '15326',
    city: 'Lebus',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4272,
    longitude: 14.5323
  },
  {
    id: 481,
    zipCode: '15326',
    city: 'Lebus Lebus',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4236,
    longitude: 14.533
  },
  {
    id: 482,
    zipCode: '15326',
    city: 'Zeschdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4213,
    longitude: 14.3875
  },
  {
    id: 483,
    zipCode: '15326',
    city: 'Zeschdorf Alt Zeschdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4248,
    longitude: 14.4465
  },
  {
    id: 484,
    zipCode: '15326',
    city: 'Lebus Mallnow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.456,
    longitude: 14.4926
  },
  {
    id: 485,
    zipCode: '15326',
    city: 'Fichtenh\u00f6he',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4556,
    longitude: 14.4469
  },
  {
    id: 486,
    zipCode: '15326',
    city: 'Zeschdorf D\u00f6bberin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4414,
    longitude: 14.3736
  },
  {
    id: 487,
    zipCode: '15326',
    city: 'Zeschdorf Petershagen',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.3978,
    longitude: 14.3425
  },
  {
    id: 488,
    zipCode: '15326',
    city: 'Lebus Sch\u00f6nflie\u00df',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4212,
    longitude: 14.4735
  },
  {
    id: 489,
    zipCode: '15326',
    city: 'Fichtenh\u00f6he Carzig',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4579,
    longitude: 14.4875
  },
  {
    id: 490,
    zipCode: '15328',
    city: 'Zechin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6084,
    longitude: 14.4525
  },
  {
    id: 491,
    zipCode: '15328',
    city: 'K\u00fcstriner Vorland',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5624,
    longitude: 14.5728
  },
  {
    id: 492,
    zipCode: '15328',
    city: 'Golzow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.574,
    longitude: 14.493
  },
  {
    id: 493,
    zipCode: '15328',
    city: 'Zechin Zechin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6124,
    longitude: 14.4579
  },
  {
    id: 494,
    zipCode: '15328',
    city: 'Alt Tucheband Ratstock',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5215,
    longitude: 14.5412
  },
  {
    id: 495,
    zipCode: '15328',
    city: 'Alt Tucheband',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5373,
    longitude: 14.5123
  },
  {
    id: 496,
    zipCode: '15328',
    city: 'Zechin Buschdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6023,
    longitude: 14.4403
  },
  {
    id: 497,
    zipCode: '15328',
    city: 'Bleyen-Genschmar Bleyen',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.588,
    longitude: 14.6105
  },
  {
    id: 498,
    zipCode: '15328',
    city: 'Reitwein',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5009,
    longitude: 14.5817
  },
  {
    id: 499,
    zipCode: '15328',
    city: 'K\u00fcstriner Vorland K\u00fcstrin-Kietz',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5668,
    longitude: 14.6105
  },
  {
    id: 500,
    zipCode: '15328',
    city: 'Zechin Friedrichsaue',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5982,
    longitude: 14.4726
  },
  {
    id: 501,
    zipCode: '15328',
    city: 'Alt Tucheband Alt Tucheband',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5386,
    longitude: 14.5134
  },
  {
    id: 502,
    zipCode: '15328',
    city: 'Bleyen-Genschmar',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6017,
    longitude: 14.5646
  },
  {
    id: 503,
    zipCode: '15328',
    city: 'K\u00fcstriner Vorland Gorgast',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5682,
    longitude: 14.5515
  },
  {
    id: 504,
    zipCode: '15328',
    city: 'K\u00fcstriner Vorland Manschnow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5521,
    longitude: 14.5564
  },
  {
    id: 505,
    zipCode: '15328',
    city: 'Alt Tucheband Hathenow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5041,
    longitude: 14.5357
  },
  {
    id: 506,
    zipCode: '15328',
    city: 'Bleyen-Genschmar Genschmar',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6155,
    longitude: 14.5187
  },
  {
    id: 507,
    zipCode: '15344',
    city: 'Strausberg',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5786,
    longitude: 13.8874
  },
  {
    id: 508,
    zipCode: '15345',
    city: 'Rehfelde Rehfelde',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5368,
    longitude: 13.9156
  },
  {
    id: 509,
    zipCode: '15345',
    city: 'Werder',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.52,
    longitude: 13.9442
  },
  {
    id: 510,
    zipCode: '15345',
    city: 'Petershagen-Eggersdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.525,
    longitude: 13.8
  },
  {
    id: 511,
    zipCode: '15345',
    city: 'Altlandsberg',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.565,
    longitude: 13.7281
  },
  {
    id: 512,
    zipCode: '15345',
    city: 'Rehfelde',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5342,
    longitude: 13.9088
  },
  {
    id: 513,
    zipCode: '15345',
    city: 'Lichtenow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4797,
    longitude: 13.9114
  },
  {
    id: 514,
    zipCode: '15345',
    city: 'Oberbarnim Klosterdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5914,
    longitude: 13.9569
  },
  {
    id: 515,
    zipCode: '15345',
    city: 'Pr\u00f6tzel',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6372,
    longitude: 13.9878
  },
  {
    id: 516,
    zipCode: '15345',
    city: 'Pr\u00f6tzel Pr\u00e4dikow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6159,
    longitude: 14.0177
  },
  {
    id: 517,
    zipCode: '15345',
    city: 'Rehfelde Werder',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5205,
    longitude: 13.9462
  },
  {
    id: 518,
    zipCode: '15345',
    city: 'Rehfelde Zinndorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5027,
    longitude: 13.9256
  },
  {
    id: 519,
    zipCode: '15345',
    city: 'Garzau-Garzin Garzin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5457,
    longitude: 13.9822
  },
  {
    id: 520,
    zipCode: '15345',
    city: 'Zinndorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5015,
    longitude: 13.9225
  },
  {
    id: 521,
    zipCode: '15345',
    city: 'Reichenow-M\u00f6glin Reichenow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.647,
    longitude: 14.0775
  },
  {
    id: 522,
    zipCode: '15345',
    city: 'Pr\u00f6tzel Sternebeck',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6748,
    longitude: 13.9937
  },
  {
    id: 523,
    zipCode: '15345',
    city: 'Garzau-Garzin Garzau',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5307,
    longitude: 13.9511
  },
  {
    id: 524,
    zipCode: '15345',
    city: 'Oberbarnim',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5938,
    longitude: 14.0355
  },
  {
    id: 525,
    zipCode: '15345',
    city: 'Pr\u00f6tzel Pr\u00f6tzel',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6391,
    longitude: 13.9895
  },
  {
    id: 526,
    zipCode: '15345',
    city: 'Garzau-Garzin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5382,
    longitude: 13.9667
  },
  {
    id: 527,
    zipCode: '15345',
    city: 'Pr\u00f6tzel Harnekop',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6844,
    longitude: 14.0137
  },
  {
    id: 528,
    zipCode: '15345',
    city: 'Reichenow-M\u00f6glin M\u00f6glin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6653,
    longitude: 14.11
  },
  {
    id: 529,
    zipCode: '15345',
    city: 'Reichenow-M\u00f6glin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6562,
    longitude: 14.0937
  },
  {
    id: 530,
    zipCode: '15366',
    city: 'H\u00f6now',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5467,
    longitude: 13.6376
  },
  {
    id: 531,
    zipCode: '15366',
    city: 'Dahlwitz-Hoppegarten',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5167,
    longitude: 13.6667
  },
  {
    id: 532,
    zipCode: '15366',
    city: 'Neuenhagen bei Berlin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5333,
    longitude: 13.6833
  },
  {
    id: 533,
    zipCode: '15366',
    city: 'M\u00fcnchehofe',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5562,
    longitude: 14.1376
  },
  {
    id: 534,
    zipCode: '15370',
    city: 'Fredersdorf-Vogelsdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5,
    longitude: 13.7333
  },
  {
    id: 535,
    zipCode: '15370',
    city: 'Petershagen-Eggersdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.525,
    longitude: 13.8
  },
  {
    id: 536,
    zipCode: '15372',
    city: 'M\u00fcncheberg',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5,
    longitude: 14.1333
  },
  {
    id: 537,
    zipCode: '15374',
    city: 'M\u00fcncheberg',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5114,
    longitude: 14.1359
  },
  {
    id: 538,
    zipCode: '15377',
    city: 'Oberbarnim Grunow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6028,
    longitude: 14.032
  },
  {
    id: 539,
    zipCode: '15377',
    city: 'Buckow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5661,
    longitude: 14.0743
  },
  {
    id: 540,
    zipCode: '15377',
    city: 'Oberbarnim',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5938,
    longitude: 14.0355
  },
  {
    id: 541,
    zipCode: '15377',
    city: 'Waldsieversdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5422,
    longitude: 14.0702
  },
  {
    id: 542,
    zipCode: '15377',
    city: 'M\u00e4rkische H\u00f6he',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6199,
    longitude: 14.1292
  },
  {
    id: 543,
    zipCode: '15377',
    city: 'Ihlow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.619,
    longitude: 14.0708
  },
  {
    id: 544,
    zipCode: '15377',
    city: 'M\u00e4rkische H\u00f6he Batzlow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6316,
    longitude: 14.125
  },
  {
    id: 545,
    zipCode: '15377',
    city: 'M\u00e4rkische H\u00f6he Ringenwalde',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6173,
    longitude: 14.1459
  },
  {
    id: 546,
    zipCode: '15377',
    city: 'M\u00e4rkische H\u00f6he Reichenberg',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6109,
    longitude: 14.1165
  },
  {
    id: 547,
    zipCode: '15377',
    city: 'Oberbarnim Bollersdorf, Pritzhagen',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.59,
    longitude: 14.1038
  },
  {
    id: 548,
    zipCode: '15377',
    city: 'Oberbarnim Bollersdorf, Bollersdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5818,
    longitude: 14.0528
  },
  {
    id: 549,
    zipCode: '15377',
    city: 'Oberbarnim Grunow, Ernsthof',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5996,
    longitude: 14.0261
  },
  {
    id: 550,
    zipCode: '15377',
    city: 'Oberbarnim Bollersdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5859,
    longitude: 14.0783
  },
  {
    id: 551,
    zipCode: '15377',
    city: 'Oberbarnim Grunow, Grunow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.606,
    longitude: 14.0379
  },
  {
    id: 552,
    zipCode: '15378',
    city: 'Herzfelde',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4816,
    longitude: 13.8521
  },
  {
    id: 553,
    zipCode: '15378',
    city: 'Hennickendorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.5077,
    longitude: 13.8521
  },
  {
    id: 554,
    zipCode: '15517',
    city: 'F\u00fcrstenwalde/Spree Trebus',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4,
    longitude: 14.05
  },
  {
    id: 555,
    zipCode: '15517',
    city: 'F\u00fcrstenwalde/Spree',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3833,
    longitude: 14.0583
  },
  {
    id: 556,
    zipCode: '15517',
    city: 'F\u00fcrstenwalde/Spree F\u00fcrstenwalde',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3638,
    longitude: 14.0467
  },
  {
    id: 557,
    zipCode: '15518',
    city: 'Falkenberg',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3809,
    longitude: 14.2353
  },
  {
    id: 558,
    zipCode: '15518',
    city: 'Steinh\u00f6fel Beerfelde',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4333,
    longitude: 14.05
  },
  {
    id: 559,
    zipCode: '15518',
    city: 'Steinh\u00f6fel Steinh\u00f6fel',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4,
    longitude: 14.1667
  },
  {
    id: 560,
    zipCode: '15518',
    city: 'Steinh\u00f6fel G\u00f6lsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.45,
    longitude: 14.1
  },
  {
    id: 561,
    zipCode: '15518',
    city: 'Steinh\u00f6fel Heinersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.45,
    longitude: 14.2167
  },
  {
    id: 562,
    zipCode: '15518',
    city: 'Steinh\u00f6fel Demnitz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3833,
    longitude: 14.2
  },
  {
    id: 563,
    zipCode: '15518',
    city: 'Steinh\u00f6fel',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4,
    longitude: 14.1667
  },
  {
    id: 564,
    zipCode: '15518',
    city: 'Steinh\u00f6fel J\u00e4nickendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4333,
    longitude: 14.0167
  },
  {
    id: 565,
    zipCode: '15518',
    city: 'Steinh\u00f6fel Hasenfelde',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4167,
    longitude: 14.2167
  },
  {
    id: 566,
    zipCode: '15518',
    city: 'Langewahl',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3333,
    longitude: 14.1
  },
  {
    id: 567,
    zipCode: '15518',
    city: 'Steinh\u00f6fel Buchholz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4167,
    longitude: 14.1167
  },
  {
    id: 568,
    zipCode: '15518',
    city: 'Berkenbr\u00fcck',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.35,
    longitude: 14.15
  },
  {
    id: 569,
    zipCode: '15518',
    city: 'Briesen (Mark)',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.325,
    longitude: 14.3
  },
  {
    id: 570,
    zipCode: '15518',
    city: 'Steinh\u00f6fel Tempelberg',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.45,
    longitude: 14.1667
  },
  {
    id: 571,
    zipCode: '15518',
    city: 'Steinh\u00f6fel Arensdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4333,
    longitude: 14.25
  },
  {
    id: 572,
    zipCode: '15518',
    city: 'Briesen (Mark) Biegen',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3167,
    longitude: 14.3667
  },
  {
    id: 573,
    zipCode: '15518',
    city: 'Rauen',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3323,
    longitude: 14.028
  },
  {
    id: 574,
    zipCode: '15518',
    city: 'Gr\u00fcnheide (Mark) Hangelsberg',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3833,
    longitude: 13.9333
  },
  {
    id: 575,
    zipCode: '15518',
    city: 'Steinh\u00f6fel Sch\u00f6nfelde',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4667,
    longitude: 14.05
  },
  {
    id: 576,
    zipCode: '15518',
    city: 'Madlitz-Wilmersdorf Falkenberg',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3811,
    longitude: 14.2389
  },
  {
    id: 577,
    zipCode: '15518',
    city: 'Briesen (Mark) Briesen (Mark)',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3333,
    longitude: 14.2833
  },
  {
    id: 578,
    zipCode: '15518',
    city: 'Madlitz-Wilmersdorf Wilmersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4,
    longitude: 14.2667
  },
  {
    id: 579,
    zipCode: '15518',
    city: 'Madlitz-Wilmersdorf Alt Madlitz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3833,
    longitude: 14.2833
  },
  {
    id: 580,
    zipCode: '15518',
    city: 'Madlitz-Wilmersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3881,
    longitude: 14.263
  },
  {
    id: 581,
    zipCode: '15518',
    city: 'Gr\u00fcnheide (Mark)',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4111,
    longitude: 13.8889
  },
  {
    id: 582,
    zipCode: '15518',
    city: 'Steinh\u00f6fel Neuendorf im Sande',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3833,
    longitude: 14.1
  },
  {
    id: 583,
    zipCode: '15526',
    city: 'Bad Saarow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2833,
    longitude: 14.0667
  },
  {
    id: 584,
    zipCode: '15526',
    city: 'Reichenwalde Dahmsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2333,
    longitude: 13.9833
  },
  {
    id: 585,
    zipCode: '15526',
    city: 'Reichenwalde Kolpin',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2833,
    longitude: 13.9833
  },
  {
    id: 586,
    zipCode: '15526',
    city: 'Reichenwalde',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2667,
    longitude: 14.0
  },
  {
    id: 587,
    zipCode: '15526',
    city: 'Rietz-Neuendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2321,
    longitude: 14.1619
  },
  {
    id: 588,
    zipCode: '15526',
    city: 'Reichenwalde Reichenwalde',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2667,
    longitude: 14.0
  },
  {
    id: 589,
    zipCode: '15526',
    city: 'Bad Saarow Neu Golm',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3,
    longitude: 14.1
  },
  {
    id: 590,
    zipCode: '15526',
    city: 'Rietz-Neuendorf Alt Golm',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3,
    longitude: 14.1167
  },
  {
    id: 591,
    zipCode: '15526',
    city: 'Bad Saarow Bad Saarow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2833,
    longitude: 14.0667
  },
  {
    id: 592,
    zipCode: '15526',
    city: 'Bad Saarow Petersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3167,
    longitude: 14.0833
  },
  {
    id: 593,
    zipCode: '15528',
    city: 'Spreenhagen',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3432,
    longitude: 13.8766
  },
  {
    id: 594,
    zipCode: '15528',
    city: 'Spreenhagen Spreenhagen',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.324,
    longitude: 13.8991
  },
  {
    id: 595,
    zipCode: '15528',
    city: 'Spreenhagen Markgrafpieske',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3333,
    longitude: 13.95
  },
  {
    id: 596,
    zipCode: '15528',
    city: 'Spreenhagen Hartmannsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3667,
    longitude: 13.85
  },
  {
    id: 597,
    zipCode: '15528',
    city: 'Gr\u00fcnheide (Mark) Spreeau',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3667,
    longitude: 13.8333
  },
  {
    id: 598,
    zipCode: '15528',
    city: 'Spreenhagen Braunsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3667,
    longitude: 13.9667
  },
  {
    id: 599,
    zipCode: '15528',
    city: 'Gr\u00fcnheide (Mark) M\u00f6nchwinkel',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3833,
    longitude: 13.8833
  },
  {
    id: 600,
    zipCode: '15528',
    city: 'Gr\u00fcnheide (Mark)',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4111,
    longitude: 13.8889
  },
  {
    id: 601,
    zipCode: '15537',
    city: 'Gr\u00fcnheide (Mark)',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4111,
    longitude: 13.8889
  },
  {
    id: 602,
    zipCode: '15537',
    city: 'Wernsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.3691,
    longitude: 13.703
  },
  {
    id: 603,
    zipCode: '15537',
    city: 'Gosen Neu Zittau',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.3667,
    longitude: 13.75
  },
  {
    id: 604,
    zipCode: '15537',
    city: 'Gosen Gosen',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4,
    longitude: 13.7167
  },
  {
    id: 605,
    zipCode: '15537',
    city: 'Gr\u00fcnheide (Mark) Kagel',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4667,
    longitude: 13.9167
  },
  {
    id: 606,
    zipCode: '15537',
    city: 'Gr\u00fcnheide (Mark) Kienbaum',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.45,
    longitude: 13.95
  },
  {
    id: 607,
    zipCode: '15537',
    city: 'Gr\u00fcnheide (Mark) Gr\u00fcnheide',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4167,
    longitude: 13.8167
  },
  {
    id: 608,
    zipCode: '15537',
    city: 'Erkner',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.42,
    longitude: 13.7544
  },
  {
    id: 609,
    zipCode: '15562',
    city: 'R\u00fcdersdorf bei Berlin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.4707,
    longitude: 13.7736
  },
  {
    id: 610,
    zipCode: '15566',
    city: 'Sch\u00f6neiche bei Berlin',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.4598,
    longitude: 13.7054
  },
  {
    id: 611,
    zipCode: '15569',
    city: 'Woltersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.446,
    longitude: 13.756
  },
  {
    id: 612,
    zipCode: '15711',
    city: 'Zeesen',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.2788,
    longitude: 13.6376
  },
  {
    id: 613,
    zipCode: '15711',
    city: 'Schenkendorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.2779,
    longitude: 13.5948
  },
  {
    id: 614,
    zipCode: '15711',
    city: 'K\u00f6nigs Wusterhausen',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.3014,
    longitude: 13.633
  },
  {
    id: 615,
    zipCode: '15732',
    city: 'Schulzendorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.3582,
    longitude: 13.5984
  },
  {
    id: 616,
    zipCode: '15732',
    city: 'Eichwalde',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.3667,
    longitude: 13.6167
  },
  {
    id: 617,
    zipCode: '15732',
    city: 'Waltersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.3623,
    longitude: 13.5565
  },
  {
    id: 618,
    zipCode: '15738',
    city: 'Zeuthen',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.348,
    longitude: 13.6217
  },
  {
    id: 619,
    zipCode: '15741',
    city: 'Motzen',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.2039,
    longitude: 13.5834
  },
  {
    id: 620,
    zipCode: '15741',
    city: 'Gr\u00e4bendorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.2405,
    longitude: 13.7088
  },
  {
    id: 621,
    zipCode: '15741',
    city: 'P\u00e4tz',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.2251,
    longitude: 13.6589
  },
  {
    id: 622,
    zipCode: '15741',
    city: 'Bestensee',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.2398,
    longitude: 13.6373
  },
  {
    id: 623,
    zipCode: '15745',
    city: 'Wildau',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.3167,
    longitude: 13.6333
  },
  {
    id: 624,
    zipCode: '15746',
    city: 'Gro\u00df K\u00f6ris',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.1659,
    longitude: 13.6594
  },
  {
    id: 625,
    zipCode: '15748',
    city: 'M\u00e4rkisch Buchholz',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.1096,
    longitude: 13.7654
  },
  {
    id: 626,
    zipCode: '15748',
    city: 'M\u00fcnchehofe',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.1473,
    longitude: 13.8343
  },
  {
    id: 627,
    zipCode: '15749',
    city: 'Ragow',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.2866,
    longitude: 13.5445
  },
  {
    id: 628,
    zipCode: '15749',
    city: 'Mittenwalde',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.3024,
    longitude: 13.5355
  },
  {
    id: 629,
    zipCode: '15749',
    city: 'Brusendorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.3099,
    longitude: 13.5114
  },
  {
    id: 630,
    zipCode: '15749',
    city: 'Gallun',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.2448,
    longitude: 13.5606
  },
  {
    id: 631,
    zipCode: '15749',
    city: 'Kiekebusch',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.3461,
    longitude: 13.5515
  },
  {
    id: 632,
    zipCode: '15751',
    city: 'Niederlehme',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.3171,
    longitude: 13.6504
  },
  {
    id: 633,
    zipCode: '15752',
    city: 'Kolberg',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.2439,
    longitude: 13.8052
  },
  {
    id: 634,
    zipCode: '15752',
    city: 'Streganz',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.2022,
    longitude: 13.8371
  },
  {
    id: 635,
    zipCode: '15752',
    city: 'Prieros',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.224,
    longitude: 13.7708
  },
  {
    id: 636,
    zipCode: '15754',
    city: 'Dolgenbrodt',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.243,
    longitude: 13.7693
  },
  {
    id: 637,
    zipCode: '15754',
    city: 'Wolzig',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.2673,
    longitude: 13.8376
  },
  {
    id: 638,
    zipCode: '15754',
    city: 'Gussow',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.256,
    longitude: 13.7321
  },
  {
    id: 639,
    zipCode: '15754',
    city: 'Bindow',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.2841,
    longitude: 13.7431
  },
  {
    id: 640,
    zipCode: '15754',
    city: 'Blossin',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.2573,
    longitude: 13.7992
  },
  {
    id: 641,
    zipCode: '15754',
    city: 'Senzig',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.2891,
    longitude: 13.6997
  },
  {
    id: 642,
    zipCode: '15754',
    city: 'Friedersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.2948,
    longitude: 13.7889
  },
  {
    id: 643,
    zipCode: '15754',
    city: 'Dannenreich',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.3137,
    longitude: 13.7484
  },
  {
    id: 644,
    zipCode: '15755',
    city: 'T\u00f6pchin',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.1715,
    longitude: 13.5771
  },
  {
    id: 645,
    zipCode: '15755',
    city: 'Teupitz',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.1297,
    longitude: 13.6196
  },
  {
    id: 646,
    zipCode: '15755',
    city: 'Schwerin',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.15,
    longitude: 13.6333
  },
  {
    id: 647,
    zipCode: '15757',
    city: 'Halbe',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.1167,
    longitude: 13.7
  },
  {
    id: 648,
    zipCode: '15757',
    city: 'Oderin',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0746,
    longitude: 13.7251
  },
  {
    id: 649,
    zipCode: '15757',
    city: 'Freidorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0683,
    longitude: 13.6962
  },
  {
    id: 650,
    zipCode: '15757',
    city: 'Briesen',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0532,
    longitude: 13.7132
  },
  {
    id: 651,
    zipCode: '15757',
    city: 'L\u00f6pten',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.1471,
    longitude: 13.6851
  },
  {
    id: 652,
    zipCode: '15758',
    city: 'Zernsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.3036,
    longitude: 13.6969
  },
  {
    id: 653,
    zipCode: '15758',
    city: 'Kablow',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.2973,
    longitude: 13.7179
  },
  {
    id: 654,
    zipCode: '15806',
    city: 'Gadsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.1904,
    longitude: 13.3246
  },
  {
    id: 655,
    zipCode: '15806',
    city: 'Mellensee',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.1833,
    longitude: 13.43
  },
  {
    id: 656,
    zipCode: '15806',
    city: 'Glienick',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.2516,
    longitude: 13.3806
  },
  {
    id: 657,
    zipCode: '15806',
    city: 'Gro\u00df Schulzendorf',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.2729,
    longitude: 13.3511
  },
  {
    id: 658,
    zipCode: '15806',
    city: 'Nunsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.2294,
    longitude: 13.3151
  },
  {
    id: 659,
    zipCode: '15806',
    city: 'Zossen',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.216,
    longitude: 13.4491
  },
  {
    id: 660,
    zipCode: '15806',
    city: 'Rehagen',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.1663,
    longitude: 13.369
  },
  {
    id: 661,
    zipCode: '15806',
    city: 'Kallinchen',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.2118,
    longitude: 13.5597
  },
  {
    id: 662,
    zipCode: '15806',
    city: 'Telz',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.245,
    longitude: 13.4944
  },
  {
    id: 663,
    zipCode: '15806',
    city: 'Sch\u00f6neiche',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.2224,
    longitude: 13.5141
  },
  {
    id: 664,
    zipCode: '15806',
    city: 'Saalow',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.1944,
    longitude: 13.3758
  },
  {
    id: 665,
    zipCode: '15806',
    city: 'N\u00e4chst Neuendorf',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.2333,
    longitude: 13.4167
  },
  {
    id: 666,
    zipCode: '15806',
    city: 'Gro\u00df Machnow',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.2667,
    longitude: 13.4667
  },
  {
    id: 667,
    zipCode: '15806',
    city: 'Kummersdorf-Alexanderdorf',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.1667,
    longitude: 13.4167
  },
  {
    id: 668,
    zipCode: '15827',
    city: 'Blankenfelde',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.3372,
    longitude: 13.4121
  },
  {
    id: 669,
    zipCode: '15827',
    city: 'Dahlewitz',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.3209,
    longitude: 13.4401
  },
  {
    id: 670,
    zipCode: '15831',
    city: 'Selchow',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.3571,
    longitude: 13.4722
  },
  {
    id: 671,
    zipCode: '15831',
    city: 'Gro\u00df Kienitz',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.3253,
    longitude: 13.4634
  },
  {
    id: 672,
    zipCode: '15831',
    city: 'Mahlow',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.3602,
    longitude: 13.4095
  },
  {
    id: 673,
    zipCode: '15831',
    city: 'J\u00fchnsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.3008,
    longitude: 13.3849
  },
  {
    id: 674,
    zipCode: '15831',
    city: 'Gro\u00dfziethen',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.3964,
    longitude: 13.4466
  },
  {
    id: 675,
    zipCode: '15831',
    city: 'Diepensee',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.3667,
    longitude: 13.5167
  },
  {
    id: 676,
    zipCode: '15831',
    city: 'Wa\u00dfmannsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.3667,
    longitude: 13.4667
  },
  {
    id: 677,
    zipCode: '15834',
    city: 'Rangsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.2913,
    longitude: 13.4195
  },
  {
    id: 678,
    zipCode: '15837',
    city: 'Baruth/Mark',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.05,
    longitude: 13.5
  },
  {
    id: 679,
    zipCode: '15838',
    city: 'Kummersdorf-Gut',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.1029,
    longitude: 13.3756
  },
  {
    id: 680,
    zipCode: '15838',
    city: 'Sperenberg',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.1411,
    longitude: 13.365
  },
  {
    id: 681,
    zipCode: '15838',
    city: 'W\u00fcnsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.1643,
    longitude: 13.4722
  },
  {
    id: 682,
    zipCode: '15838',
    city: 'Klausdorf',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 52.1546,
    longitude: 13.4064
  },
  {
    id: 683,
    zipCode: '15848',
    city: 'Beeskow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1729,
    longitude: 14.246
  },
  {
    id: 684,
    zipCode: '15848',
    city: 'Tauche',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1292,
    longitude: 14.1306
  },
  {
    id: 685,
    zipCode: '15848',
    city: 'Tauche Falkenberg',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1667,
    longitude: 14.1333
  },
  {
    id: 686,
    zipCode: '15848',
    city: 'Tauche Briescht',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1167,
    longitude: 14.1167
  },
  {
    id: 687,
    zipCode: '15848',
    city: 'Plattkow',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.1063,
    longitude: 14.018
  },
  {
    id: 688,
    zipCode: '15848',
    city: 'Tauche Kossenblatt',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1167,
    longitude: 14.0667
  },
  {
    id: 689,
    zipCode: '15848',
    city: 'Tauche Giesensdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1333,
    longitude: 14.1333
  },
  {
    id: 690,
    zipCode: '15848',
    city: 'Tauche Tauche',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.15,
    longitude: 14.1667
  },
  {
    id: 691,
    zipCode: '15848',
    city: 'Tauche Ranzig',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1167,
    longitude: 14.2
  },
  {
    id: 692,
    zipCode: '15848',
    city: 'Tauche Mittweide',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0667,
    longitude: 14.15
  },
  {
    id: 693,
    zipCode: '15848',
    city: 'Speichrow',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.036,
    longitude: 14.2208
  },
  {
    id: 694,
    zipCode: '15848',
    city: 'Friedland Lei\u00dfnitz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1167,
    longitude: 14.2167
  },
  {
    id: 695,
    zipCode: '15848',
    city: 'Tauche Stremmen',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1333,
    longitude: 14.1667
  },
  {
    id: 696,
    zipCode: '15848',
    city: 'Rietz-Neuendorf Behrensdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1833,
    longitude: 14.05
  },
  {
    id: 697,
    zipCode: '15848',
    city: 'Tauche Trebatsch',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0833,
    longitude: 14.1667
  },
  {
    id: 698,
    zipCode: '15848',
    city: 'Friedland',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0943,
    longitude: 14.3104
  },
  {
    id: 699,
    zipCode: '15848',
    city: 'Ragow-Merz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2,
    longitude: 14.325
  },
  {
    id: 700,
    zipCode: '15848',
    city: 'Tauche G\u00f6rsdorf bei Beeskow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.15,
    longitude: 14.1
  },
  {
    id: 701,
    zipCode: '15848',
    city: 'Friedland Gro\u00df Briesen',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1167,
    longitude: 14.3833
  },
  {
    id: 702,
    zipCode: '15848',
    city: 'Rietz-Neuendorf G\u00f6rzig',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2333,
    longitude: 14.2
  },
  {
    id: 703,
    zipCode: '15848',
    city: 'Rietz-Neuendorf Buckow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1833,
    longitude: 14.1667
  },
  {
    id: 704,
    zipCode: '15848',
    city: 'Friedland Schadow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.05,
    longitude: 14.2667
  },
  {
    id: 705,
    zipCode: '15848',
    city: 'Friedland Pieskow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.05,
    longitude: 14.2333
  },
  {
    id: 706,
    zipCode: '15848',
    city: 'Beeskow Kohlsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1667,
    longitude: 14.2
  },
  {
    id: 707,
    zipCode: '15848',
    city: 'Beeskow Bornow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1667,
    longitude: 14.2
  },
  {
    id: 708,
    zipCode: '15848',
    city: 'Tauche Lindenberg',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2,
    longitude: 14.1333
  },
  {
    id: 709,
    zipCode: '15848',
    city: 'Friedland Friedland',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1,
    longitude: 14.2667
  },
  {
    id: 710,
    zipCode: '15848',
    city: 'Beeskow Oegeln',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1833,
    longitude: 14.2833
  },
  {
    id: 711,
    zipCode: '15848',
    city: 'Friedland Weichensdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0833,
    longitude: 14.35
  },
  {
    id: 712,
    zipCode: '15848',
    city: 'Friedland Niewisch',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0833,
    longitude: 14.2333
  },
  {
    id: 713,
    zipCode: '15848',
    city: 'Friedland G\u00fcnthersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0833,
    longitude: 14.3
  },
  {
    id: 714,
    zipCode: '15848',
    city: 'Ragow-Merz Ragow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2,
    longitude: 14.35
  },
  {
    id: 715,
    zipCode: '15848',
    city: 'Rietz-Neuendorf Birkholz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2,
    longitude: 14.2
  },
  {
    id: 716,
    zipCode: '15848',
    city: 'Beeskow Schneeberg',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1667,
    longitude: 14.3333
  },
  {
    id: 717,
    zipCode: '15848',
    city: 'Friedland Reudnitz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1333,
    longitude: 14.3333
  },
  {
    id: 718,
    zipCode: '15848',
    city: 'Tauche Werder',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1167,
    longitude: 14.0333
  },
  {
    id: 719,
    zipCode: '15848',
    city: 'Rietz-Neuendorf Drahendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2833,
    longitude: 14.2333
  },
  {
    id: 720,
    zipCode: '15848',
    city: 'Rietz-Neuendorf Gro\u00df Rietz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2167,
    longitude: 14.2167
  },
  {
    id: 721,
    zipCode: '15848',
    city: 'Friedland Kummerow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.15,
    longitude: 14.2333
  },
  {
    id: 722,
    zipCode: '15848',
    city: 'Beeskow Neuendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1833,
    longitude: 14.2333
  },
  {
    id: 723,
    zipCode: '15848',
    city: 'Beeskow Radinkendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2167,
    longitude: 14.2667
  },
  {
    id: 724,
    zipCode: '15848',
    city: 'Friedland Karras',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0833,
    longitude: 14.2833
  },
  {
    id: 725,
    zipCode: '15848',
    city: 'Rietz-Neuendorf Ahrensdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1667,
    longitude: 14.0833
  },
  {
    id: 726,
    zipCode: '15848',
    city: 'Rietz-Neuendorf Sauen',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2667,
    longitude: 14.2167
  },
  {
    id: 727,
    zipCode: '15848',
    city: 'Beeskow Kr\u00fcgersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.15,
    longitude: 14.3333
  },
  {
    id: 728,
    zipCode: '15848',
    city: 'Rietz-Neuendorf Wilmersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2667,
    longitude: 14.1333
  },
  {
    id: 729,
    zipCode: '15848',
    city: 'Friedland Zeust',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1333,
    longitude: 14.2667
  },
  {
    id: 730,
    zipCode: '15848',
    city: 'Rietz-Neuendorf Neubr\u00fcck (Spree)',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2667,
    longitude: 14.2833
  },
  {
    id: 731,
    zipCode: '15848',
    city: 'Friedland Lindow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1,
    longitude: 14.3
  },
  {
    id: 732,
    zipCode: '15848',
    city: 'Ragow-Merz Merz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2,
    longitude: 14.3
  },
  {
    id: 733,
    zipCode: '15848',
    city: 'Rietz-Neuendorf Pfaffendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2667,
    longitude: 14.1667
  },
  {
    id: 734,
    zipCode: '15848',
    city: 'Friedland Klein Muckrow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.05,
    longitude: 14.4333
  },
  {
    id: 735,
    zipCode: '15848',
    city: 'Rietz-Neuendorf Herzberg',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2167,
    longitude: 14.1167
  },
  {
    id: 736,
    zipCode: '15848',
    city: 'Rietz-Neuendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2321,
    longitude: 14.1619
  },
  {
    id: 737,
    zipCode: '15848',
    city: 'Friedland Chossewitz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1,
    longitude: 14.4333
  },
  {
    id: 738,
    zipCode: '15859',
    city: 'Philadelphia',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2513,
    longitude: 13.8954
  },
  {
    id: 739,
    zipCode: '15859',
    city: 'Storkow (Mark) Bugk',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2,
    longitude: 13.9167
  },
  {
    id: 740,
    zipCode: '15859',
    city: 'Rieplos',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2835,
    longitude: 13.9066
  },
  {
    id: 741,
    zipCode: '15859',
    city: 'Storkow (Mark) Gro\u00df Schauen',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2333,
    longitude: 13.9167
  },
  {
    id: 742,
    zipCode: '15859',
    city: 'Kummersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.271,
    longitude: 13.8659
  },
  {
    id: 743,
    zipCode: '15859',
    city: 'Storkow (Mark) Alt Stahnsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2833,
    longitude: 13.8833
  },
  {
    id: 744,
    zipCode: '15859',
    city: 'Storkow (Mark)',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2238,
    longitude: 13.8964
  },
  {
    id: 745,
    zipCode: '15859',
    city: 'Kehrigk',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1615,
    longitude: 13.9192
  },
  {
    id: 746,
    zipCode: '15859',
    city: 'Storkow (Mark) Gro\u00df Eichholz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1667,
    longitude: 13.8667
  },
  {
    id: 747,
    zipCode: '15859',
    city: 'Storkow (Mark) G\u00f6rsdorf bei Storkow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2333,
    longitude: 13.8333
  },
  {
    id: 748,
    zipCode: '15859',
    city: 'Storkow (Mark) Kummersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2667,
    longitude: 13.8667
  },
  {
    id: 749,
    zipCode: '15859',
    city: 'Storkow (Mark) Storkow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.25,
    longitude: 13.9333
  },
  {
    id: 750,
    zipCode: '15859',
    city: 'Storkow (Mark) Limsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1667,
    longitude: 14.0167
  },
  {
    id: 751,
    zipCode: '15859',
    city: 'Storkow (Mark) Wochowsee',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2333,
    longitude: 13.9
  },
  {
    id: 752,
    zipCode: '15859',
    city: 'Storkow (Mark) Schwerin',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2,
    longitude: 13.8333
  },
  {
    id: 753,
    zipCode: '15859',
    city: 'Storkow (Mark) Selchow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2167,
    longitude: 13.8667
  },
  {
    id: 754,
    zipCode: '15864',
    city: 'Diensdorf-Radlow',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2333,
    longitude: 14.05
  },
  {
    id: 755,
    zipCode: '15864',
    city: 'Rietz-Neuendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2321,
    longitude: 14.1619
  },
  {
    id: 756,
    zipCode: '15864',
    city: 'Wendisch Rietz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2161,
    longitude: 14.0084
  },
  {
    id: 757,
    zipCode: '15864',
    city: 'Rietz-Neuendorf Glienicke',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2,
    longitude: 14.0833
  },
  {
    id: 758,
    zipCode: '15868',
    city: 'Doberburg',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.005,
    longitude: 14.2439
  },
  {
    id: 759,
    zipCode: '15868',
    city: 'Ullersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0385,
    longitude: 14.368
  },
  {
    id: 760,
    zipCode: '15868',
    city: 'Friedland',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0943,
    longitude: 14.3104
  },
  {
    id: 761,
    zipCode: '15868',
    city: 'Lieberose',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9849,
    longitude: 14.2999
  },
  {
    id: 762,
    zipCode: '15868',
    city: 'Friedland Gro\u00df Muckrow',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.075,
    longitude: 14.4333
  },
  {
    id: 763,
    zipCode: '15868',
    city: 'Leeskow',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0179,
    longitude: 14.4105
  },
  {
    id: 764,
    zipCode: '15868',
    city: 'Jamlitz',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9913,
    longitude: 14.361
  },
  {
    id: 765,
    zipCode: '15890',
    city: 'Siehdichum Pohlitz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1833,
    longitude: 14.5833
  },
  {
    id: 766,
    zipCode: '15890',
    city: 'Siehdichum',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1944,
    longitude: 14.5333
  },
  {
    id: 767,
    zipCode: '15890',
    city: 'Siehdichum Schernsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2,
    longitude: 14.4833
  },
  {
    id: 768,
    zipCode: '15890',
    city: 'Vogelsang',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1824,
    longitude: 14.6637
  },
  {
    id: 769,
    zipCode: '15890',
    city: 'Siehdichum Rie\u00dfen',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.2,
    longitude: 14.5333
  },
  {
    id: 770,
    zipCode: '15890',
    city: 'Schlaubetal Bremsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.15,
    longitude: 14.5
  },
  {
    id: 771,
    zipCode: '15890',
    city: 'Schlaubetal F\u00fcnfeichen',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.15,
    longitude: 14.5333
  },
  {
    id: 772,
    zipCode: '15890',
    city: 'Eisenh\u00fcttenstadt Sch\u00f6nflie\u00df',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.15,
    longitude: 14.6167
  },
  {
    id: 773,
    zipCode: '15890',
    city: 'Schlaubetal Kieselwitz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1167,
    longitude: 14.5
  },
  {
    id: 774,
    zipCode: '15890',
    city: 'Eisenh\u00fcttenstadt',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1601,
    longitude: 14.555
  },
  {
    id: 775,
    zipCode: '15890',
    city: 'Schlaubetal',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1289,
    longitude: 14.5111
  },
  {
    id: 776,
    zipCode: '15890',
    city: 'Eisenh\u00fcttenstadt F\u00fcrstenberg',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.15,
    longitude: 14.6667
  },
  {
    id: 777,
    zipCode: '15890',
    city: 'Eisenh\u00fcttenstadt Diehlo',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1333,
    longitude: 14.6
  },
  {
    id: 778,
    zipCode: '15898',
    city: 'Neuzelle Bahro',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.05,
    longitude: 14.5667
  },
  {
    id: 779,
    zipCode: '15898',
    city: 'Lawitz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.107,
    longitude: 14.6415
  },
  {
    id: 780,
    zipCode: '15898',
    city: 'Neuzelle Neuzelle',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0833,
    longitude: 14.6333
  },
  {
    id: 781,
    zipCode: '15898',
    city: 'Neuzelle Treppeln',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0667,
    longitude: 14.5333
  },
  {
    id: 782,
    zipCode: '15898',
    city: 'Neuzelle Henzendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.05,
    longitude: 14.5167
  },
  {
    id: 783,
    zipCode: '15898',
    city: 'Neuzelle G\u00f6hlen',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.05,
    longitude: 14.5833
  },
  {
    id: 784,
    zipCode: '15898',
    city: 'Neuzelle',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0639,
    longitude: 14.6028
  },
  {
    id: 785,
    zipCode: '15898',
    city: 'Nei\u00dfem\u00fcnde Coschen',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0167,
    longitude: 14.7333
  },
  {
    id: 786,
    zipCode: '15898',
    city: 'Nei\u00dfem\u00fcnde Breslack',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.05,
    longitude: 14.7333
  },
  {
    id: 787,
    zipCode: '15898',
    city: 'Neuzelle Steinsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0333,
    longitude: 14.6667
  },
  {
    id: 788,
    zipCode: '15898',
    city: 'Neuzelle Streichwitz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0667,
    longitude: 14.65
  },
  {
    id: 789,
    zipCode: '15898',
    city: 'Nei\u00dfem\u00fcnde',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.05,
    longitude: 14.7333
  },
  {
    id: 790,
    zipCode: '15898',
    city: 'Neuzelle M\u00f6biskruge',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1,
    longitude: 14.6
  },
  {
    id: 791,
    zipCode: '15898',
    city: 'Neuzelle Ossendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0667,
    longitude: 14.5667
  },
  {
    id: 792,
    zipCode: '15898',
    city: 'Neuzelle Kobbeln',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.1,
    longitude: 14.65
  },
  {
    id: 793,
    zipCode: '15898',
    city: 'Neuzelle Schwerzko',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0667,
    longitude: 14.6167
  },
  {
    id: 794,
    zipCode: '15898',
    city: 'Nei\u00dfem\u00fcnde Ratzdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0667,
    longitude: 14.75
  },
  {
    id: 795,
    zipCode: '15898',
    city: 'Neuzelle Bomsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0333,
    longitude: 14.65
  },
  {
    id: 796,
    zipCode: '15898',
    city: 'Nei\u00dfem\u00fcnde Wellmitz',
    state: 'Brandenburg',
    community: 'Landkreis Oder-Spree',
    latitude: 52.0667,
    longitude: 14.7167
  },
  {
    id: 797,
    zipCode: '15907',
    city: 'L\u00fcbben (Spreewald)',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9455,
    longitude: 13.8852
  },
  {
    id: 798,
    zipCode: '15910',
    city: 'Schuhlen-Wiese',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0609,
    longitude: 14.107
  },
  {
    id: 799,
    zipCode: '15910',
    city: 'Pretschen',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0899,
    longitude: 13.9927
  },
  {
    id: 800,
    zipCode: '15910',
    city: 'Unterspreewald',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.091,
    longitude: 13.8902
  },
  {
    id: 801,
    zipCode: '15910',
    city: 'Sch\u00f6nwald',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9853,
    longitude: 13.723
  },
  {
    id: 802,
    zipCode: '15910',
    city: 'D\u00fcrrenhofe',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0258,
    longitude: 13.9488
  },
  {
    id: 803,
    zipCode: '15910',
    city: 'Rietzneuendorf-Staakow',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0191,
    longitude: 13.6833
  },
  {
    id: 804,
    zipCode: '15910',
    city: 'Kuschkow',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0595,
    longitude: 13.958
  },
  {
    id: 805,
    zipCode: '15910',
    city: 'Krausnick-Gro\u00df Wasserburg',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0462,
    longitude: 13.8489
  },
  {
    id: 806,
    zipCode: '15910',
    city: 'Hohenbr\u00fcck-Neu Schadow',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0932,
    longitude: 13.916
  },
  {
    id: 807,
    zipCode: '15910',
    city: 'Alt-Schadow',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.1333,
    longitude: 13.95
  },
  {
    id: 808,
    zipCode: '15910',
    city: 'Schlepzig',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0333,
    longitude: 13.9
  },
  {
    id: 809,
    zipCode: '15910',
    city: 'Wittmannsdorf-B\u00fcckchen',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0667,
    longitude: 14.05
  },
  {
    id: 810,
    zipCode: '15910',
    city: 'Gr\u00f6ditsch',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0524,
    longitude: 13.9996
  },
  {
    id: 811,
    zipCode: '15913',
    city: 'Byhlen',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9093,
    longitude: 14.1862
  },
  {
    id: 812,
    zipCode: '15913',
    city: 'Briesensee',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.956,
    longitude: 14.0047
  },
  {
    id: 813,
    zipCode: '15913',
    city: 'Alt Zauche',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9168,
    longitude: 14.0149
  },
  {
    id: 814,
    zipCode: '15913',
    city: 'Ressen-Zaue',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0359,
    longitude: 14.162
  },
  {
    id: 815,
    zipCode: '15913',
    city: 'Neu Zauche',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9276,
    longitude: 14.0881
  },
  {
    id: 816,
    zipCode: '15913',
    city: 'Gro\u00df Leuthen',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.038,
    longitude: 14.0374
  },
  {
    id: 817,
    zipCode: '15913',
    city: 'Klein Leine',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9738,
    longitude: 14.0571
  },
  {
    id: 818,
    zipCode: '15913',
    city: 'Gro\u00df Leine',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.997,
    longitude: 14.0636
  },
  {
    id: 819,
    zipCode: '15913',
    city: 'Sacrow-Waldow',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9558,
    longitude: 14.1285
  },
  {
    id: 820,
    zipCode: '15913',
    city: 'Leibchel',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.029,
    longitude: 14.0777
  },
  {
    id: 821,
    zipCode: '15913',
    city: 'Byhleguhre',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.8793,
    longitude: 14.1745
  },
  {
    id: 822,
    zipCode: '15913',
    city: 'Dollgen',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.018,
    longitude: 14.0385
  },
  {
    id: 823,
    zipCode: '15913',
    city: 'Butzen',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9343,
    longitude: 14.168
  },
  {
    id: 824,
    zipCode: '15913',
    city: 'Lamsfeld-Gro\u00df Liebitz',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.975,
    longitude: 14.2327
  },
  {
    id: 825,
    zipCode: '15913',
    city: 'Krugau',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0272,
    longitude: 13.9827
  },
  {
    id: 826,
    zipCode: '15913',
    city: 'Wu\u00dfwerk',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.927,
    longitude: 14.0504
  },
  {
    id: 827,
    zipCode: '15913',
    city: 'Laasow',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9448,
    longitude: 14.1304
  },
  {
    id: 828,
    zipCode: '15913',
    city: 'Glietz',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0089,
    longitude: 14.0818
  },
  {
    id: 829,
    zipCode: '15913',
    city: 'Mochow',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.978,
    longitude: 14.1893
  },
  {
    id: 830,
    zipCode: '15913',
    city: 'Straupitz',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9136,
    longitude: 14.1228
  },
  {
    id: 831,
    zipCode: '15913',
    city: 'Biebersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9847,
    longitude: 13.9741
  },
  {
    id: 832,
    zipCode: '15913',
    city: 'Goyatz',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0187,
    longitude: 14.1758
  },
  {
    id: 833,
    zipCode: '15913',
    city: 'Jessern',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 52.0242,
    longitude: 14.1944
  },
  {
    id: 834,
    zipCode: '15913',
    city: 'Caminchen',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9529,
    longitude: 14.07
  },
  {
    id: 835,
    zipCode: '15926',
    city: 'Heideblick Bornsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.7732,
    longitude: 13.6939
  },
  {
    id: 836,
    zipCode: '15926',
    city: 'Duben',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.8976,
    longitude: 13.8074
  },
  {
    id: 837,
    zipCode: '15926',
    city: 'Heideblick Waltersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.8215,
    longitude: 13.6504
  },
  {
    id: 838,
    zipCode: '15926',
    city: 'Heideblick',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.8127,
    longitude: 13.6551
  },
  {
    id: 839,
    zipCode: '15926',
    city: 'Heideblick Gehren',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.8033,
    longitude: 13.6469
  },
  {
    id: 840,
    zipCode: '15926',
    city: 'Heideblick Beesdau',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.7915,
    longitude: 13.7399
  },
  {
    id: 841,
    zipCode: '15926',
    city: 'Heideblick Go\u00dfmar',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.82,
    longitude: 13.6996
  },
  {
    id: 842,
    zipCode: '15926',
    city: 'Heideblick Langengrassau',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.8333,
    longitude: 13.6424
  },
  {
    id: 843,
    zipCode: '15926',
    city: 'Schlabendorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.8084,
    longitude: 13.8206
  },
  {
    id: 844,
    zipCode: '15926',
    city: 'Heideblick Riedebeck',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.8055,
    longitude: 13.6799
  },
  {
    id: 845,
    zipCode: '15926',
    city: 'Cahnsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.8504,
    longitude: 13.747
  },
  {
    id: 846,
    zipCode: '15926',
    city: 'Heideblick W\u00fcstermarke',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.8182,
    longitude: 13.6
  },
  {
    id: 847,
    zipCode: '15926',
    city: 'G\u00f6rlsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.8181,
    longitude: 13.7554
  },
  {
    id: 848,
    zipCode: '15926',
    city: 'Heideblick Wei\u00dfack',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.7497,
    longitude: 13.6937
  },
  {
    id: 849,
    zipCode: '15926',
    city: 'Walddrehna',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.7778,
    longitude: 13.6269
  },
  {
    id: 850,
    zipCode: '15926',
    city: 'Bersteland Reichwalde',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9273,
    longitude: 13.7256
  },
  {
    id: 851,
    zipCode: '15926',
    city: 'Bersteland',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9425,
    longitude: 13.776
  },
  {
    id: 852,
    zipCode: '15926',
    city: 'Heideblick Falkenberg',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.852,
    longitude: 13.5684
  },
  {
    id: 853,
    zipCode: '15926',
    city: 'Bersteland Freiwalde',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9575,
    longitude: 13.7461
  },
  {
    id: 854,
    zipCode: '15926',
    city: 'Bersteland Niewitz',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.937,
    longitude: 13.7865
  },
  {
    id: 855,
    zipCode: '15926',
    city: 'Luckau',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.8297,
    longitude: 13.6741
  },
  {
    id: 856,
    zipCode: '15926',
    city: 'Heideblick Pitschen-Pickel',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.8715,
    longitude: 13.5905
  },
  {
    id: 857,
    zipCode: '15936',
    city: 'Dahmetal',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 51.9067,
    longitude: 13.5
  },
  {
    id: 858,
    zipCode: '15936',
    city: 'Steinreich',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 51.9495,
    longitude: 13.4934
  },
  {
    id: 859,
    zipCode: '15936',
    city: 'Steinreich Glienig',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 51.9411,
    longitude: 13.4448
  },
  {
    id: 860,
    zipCode: '15936',
    city: 'Dahme/Mark',
    state: 'Brandenburg',
    community: 'Landkreis Teltow-Fl\u00e4ming',
    latitude: 51.8941,
    longitude: 13.4342
  },
  {
    id: 861,
    zipCode: '15938',
    city: 'Steinreich Sellendorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9588,
    longitude: 13.5419
  },
  {
    id: 862,
    zipCode: '15938',
    city: 'Steinreich',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9495,
    longitude: 13.4934
  },
  {
    id: 863,
    zipCode: '15938',
    city: 'Gol\u00dfen',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.972,
    longitude: 13.6011
  },
  {
    id: 864,
    zipCode: '15938',
    city: 'Drahnsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9167,
    longitude: 13.5833
  },
  {
    id: 865,
    zipCode: '15938',
    city: 'Kasel-Golzig',
    state: 'Brandenburg',
    community: 'Landkreis Dahme-Spreewald',
    latitude: 51.9333,
    longitude: 13.7
  },
  {
    id: 866,
    zipCode: '16225',
    city: 'Eberswalde',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.8342,
    longitude: 13.8218
  },
  {
    id: 867,
    zipCode: '16227',
    city: 'Eberswalde',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.8333,
    longitude: 13.8333
  },
  {
    id: 868,
    zipCode: '16230',
    city: 'Breydin',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.7694,
    longitude: 13.8153
  },
  {
    id: 869,
    zipCode: '16230',
    city: 'Britz',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.8873,
    longitude: 13.8112
  },
  {
    id: 870,
    zipCode: '16230',
    city: 'Chorin',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.902,
    longitude: 13.8715
  },
  {
    id: 871,
    zipCode: '16230',
    city: 'Melchow',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.7761,
    longitude: 13.7065
  },
  {
    id: 872,
    zipCode: '16230',
    city: 'Sydower Flie\u00df',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.7274,
    longitude: 13.723
  },
  {
    id: 873,
    zipCode: '16244',
    city: 'Altenhof',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.9148,
    longitude: 13.7132
  },
  {
    id: 874,
    zipCode: '16244',
    city: 'Finowfurt',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.8583,
    longitude: 13.7578
  },
  {
    id: 875,
    zipCode: '16247',
    city: 'Ziethen',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.9667,
    longitude: 13.9167
  },
  {
    id: 876,
    zipCode: '16247',
    city: 'Friedrichswalde',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 53.0292,
    longitude: 13.7068
  },
  {
    id: 877,
    zipCode: '16247',
    city: 'Neugrimnitz',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.9752,
    longitude: 13.8297
  },
  {
    id: 878,
    zipCode: '16247',
    city: 'Alth\u00fcttendorf',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.9623,
    longitude: 13.8072
  },
  {
    id: 879,
    zipCode: '16247',
    city: 'Joachimsthal',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.9794,
    longitude: 13.7449
  },
  {
    id: 880,
    zipCode: '16248',
    city: 'B\u00f6lkendorf',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 52.9506,
    longitude: 14.0009
  },
  {
    id: 881,
    zipCode: '16248',
    city: 'Hohenfinow',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.8134,
    longitude: 13.9249
  },
  {
    id: 882,
    zipCode: '16248',
    city: 'Oderberg',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.8657,
    longitude: 14.0451
  },
  {
    id: 883,
    zipCode: '16248',
    city: 'Lunow-Stolzenhagen',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.9333,
    longitude: 14.1083
  },
  {
    id: 884,
    zipCode: '16248',
    city: 'Niederfinow',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.8337,
    longitude: 13.9284
  },
  {
    id: 885,
    zipCode: '16248',
    city: 'Liepe',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.8621,
    longitude: 13.9695
  },
  {
    id: 886,
    zipCode: '16248',
    city: 'Hohensaaten',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.8743,
    longitude: 14.142
  },
  {
    id: 887,
    zipCode: '16248',
    city: 'Parsteinsee',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.9333,
    longitude: 14.05
  },
  {
    id: 888,
    zipCode: '16259',
    city: 'Neuenhagen',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.8366,
    longitude: 14.053
  },
  {
    id: 889,
    zipCode: '16259',
    city: 'Bad Freienwalde',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7873,
    longitude: 14.0304
  },
  {
    id: 890,
    zipCode: '16259',
    city: 'Altglietzen',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.8342,
    longitude: 14.0896
  },
  {
    id: 891,
    zipCode: '16259',
    city: 'H\u00f6henland W\u00f6lsickendorf-Wollenberg, Wollenberg',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7941,
    longitude: 13.8977
  },
  {
    id: 892,
    zipCode: '16259',
    city: 'Bralitz',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.8351,
    longitude: 14.0059
  },
  {
    id: 893,
    zipCode: '16259',
    city: 'Schiffm\u00fchle',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.8068,
    longitude: 14.0446
  },
  {
    id: 894,
    zipCode: '16259',
    city: 'Neulewin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7243,
    longitude: 14.2792
  },
  {
    id: 895,
    zipCode: '16259',
    city: 'Oderaue M\u00e4dewitz, Neum\u00e4dewitz',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.74,
    longitude: 14.3396
  },
  {
    id: 896,
    zipCode: '16259',
    city: 'Falkenberg',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.8051,
    longitude: 13.958
  },
  {
    id: 897,
    zipCode: '16259',
    city: 'H\u00f6henland Steinbeck',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7586,
    longitude: 13.8753
  },
  {
    id: 898,
    zipCode: '16259',
    city: 'Heckelberg-Brunow Heckelberg',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7403,
    longitude: 13.8414
  },
  {
    id: 899,
    zipCode: '16259',
    city: 'Heckelberg-Brunow Brunow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7297,
    longitude: 13.874
  },
  {
    id: 900,
    zipCode: '16259',
    city: 'Neulewin Neulietzeg\u00f6ricke',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7667,
    longitude: 14.25
  },
  {
    id: 901,
    zipCode: '16259',
    city: 'Hohenwutzen',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.8441,
    longitude: 14.1184
  },
  {
    id: 902,
    zipCode: '16259',
    city: 'Falkenberg Kruge/Gersdorf, Gersdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7707,
    longitude: 13.8918
  },
  {
    id: 903,
    zipCode: '16259',
    city: 'Tiefensee',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.68,
    longitude: 13.8356
  },
  {
    id: 904,
    zipCode: '16259',
    city: 'Beiersdorf-Freudenberg Beiersdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6926,
    longitude: 13.783
  },
  {
    id: 905,
    zipCode: '16259',
    city: 'Beiersdorf-Freudenberg',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6967,
    longitude: 13.8014
  },
  {
    id: 906,
    zipCode: '16259',
    city: 'Beiersdorf-Freudenberg Freudenberg',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7007,
    longitude: 13.8199
  },
  {
    id: 907,
    zipCode: '16259',
    city: 'Heckelberg-Brunow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.735,
    longitude: 13.8577
  },
  {
    id: 908,
    zipCode: '16259',
    city: 'Oderaue Neur\u00fcdnitz',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.8,
    longitude: 14.1833
  },
  {
    id: 909,
    zipCode: '16259',
    city: 'Falkenberg Kruge/Gersdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7684,
    longitude: 13.8913
  },
  {
    id: 910,
    zipCode: '16259',
    city: 'Oderaue Z\u00e4ckericker Loose',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7833,
    longitude: 14.2167
  },
  {
    id: 911,
    zipCode: '16259',
    city: 'Falkenberg Kruge/Gersdorf, Neugersdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7793,
    longitude: 13.9039
  },
  {
    id: 912,
    zipCode: '16259',
    city: 'Oderaue M\u00e4dewitz, Altm\u00e4dewitz',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7509,
    longitude: 14.3313
  },
  {
    id: 913,
    zipCode: '16259',
    city: 'Oderaue Wustrow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7621,
    longitude: 14.2107
  },
  {
    id: 914,
    zipCode: '16259',
    city: 'Falkenberg Falkenberg/Mark',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.8058,
    longitude: 13.957
  },
  {
    id: 915,
    zipCode: '16259',
    city: 'Oderaue Altreetz',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7667,
    longitude: 14.1667
  },
  {
    id: 916,
    zipCode: '16259',
    city: 'H\u00f6henland',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7534,
    longitude: 13.8823
  },
  {
    id: 917,
    zipCode: '16259',
    city: 'H\u00f6henland W\u00f6lsickendorf-Wollenberg, W\u00f6lsickendorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7638,
    longitude: 13.9049
  },
  {
    id: 918,
    zipCode: '16259',
    city: 'Falkenberg Kruge/Gersdorf, Kruge',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7553,
    longitude: 13.8783
  },
  {
    id: 919,
    zipCode: '16259',
    city: 'H\u00f6henland W\u00f6lsickendorf-Wollenberg',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7789,
    longitude: 13.9013
  },
  {
    id: 920,
    zipCode: '16259',
    city: 'Oderaue Neureetz',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7833,
    longitude: 14.15
  },
  {
    id: 921,
    zipCode: '16259',
    city: 'Oderaue Wustrow, Neu-Wustrow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7638,
    longitude: 14.2026
  },
  {
    id: 922,
    zipCode: '16259',
    city: 'Oderaue',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7773,
    longitude: 14.2042
  },
  {
    id: 923,
    zipCode: '16259',
    city: 'Falkenberg Dannenberg/Mark',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7736,
    longitude: 13.957
  },
  {
    id: 924,
    zipCode: '16259',
    city: 'Oderaue Neuk\u00fcstrinchen',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.8,
    longitude: 14.1667
  },
  {
    id: 925,
    zipCode: '16259',
    city: 'Oderaue M\u00e4dewitz',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7455,
    longitude: 14.3355
  },
  {
    id: 926,
    zipCode: '16259',
    city: 'H\u00f6henland Leuenberg',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7227,
    longitude: 13.8701
  },
  {
    id: 927,
    zipCode: '16259',
    city: 'Neulewin G\u00fcstebieser Loose',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.75,
    longitude: 14.3
  },
  {
    id: 928,
    zipCode: '16259',
    city: 'Oderaue Wustrow, Wustrow',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7603,
    longitude: 14.2188
  },
  {
    id: 929,
    zipCode: '16259',
    city: 'Neulewin Neulewin',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7167,
    longitude: 14.2833
  },
  {
    id: 930,
    zipCode: '16269',
    city: 'Bliesdorf Metzdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6586,
    longitude: 14.1761
  },
  {
    id: 931,
    zipCode: '16269',
    city: 'Wriezener H\u00f6he',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7,
    longitude: 14.0583
  },
  {
    id: 932,
    zipCode: '16269',
    city: 'Bliesdorf Bliesdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7,
    longitude: 14.15
  },
  {
    id: 933,
    zipCode: '16269',
    city: 'Bliesdorf Kunersdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.6747,
    longitude: 14.1584
  },
  {
    id: 934,
    zipCode: '16269',
    city: 'Bliesdorf',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.693,
    longitude: 14.1595
  },
  {
    id: 935,
    zipCode: '16269',
    city: 'Wriezen',
    state: 'Brandenburg',
    community: 'Landkreis M\u00e4rkisch-Oderland',
    latitude: 52.7209,
    longitude: 14.1343
  },
  {
    id: 936,
    zipCode: '16278',
    city: 'Kerkow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.0373,
    longitude: 13.9883
  },
  {
    id: 937,
    zipCode: '16278',
    city: 'Wolletz',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.0249,
    longitude: 13.9014
  },
  {
    id: 938,
    zipCode: '16278',
    city: 'G\u00fcnterberg',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.0971,
    longitude: 13.964
  },
  {
    id: 939,
    zipCode: '16278',
    city: 'Steinh\u00f6fel',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.0946,
    longitude: 13.8787
  },
  {
    id: 940,
    zipCode: '16278',
    city: 'M\u00fcrow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.0532,
    longitude: 14.0333
  },
  {
    id: 941,
    zipCode: '16278',
    city: 'Neuk\u00fcnkendorf',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 52.973,
    longitude: 14.0394
  },
  {
    id: 942,
    zipCode: '16278',
    city: 'Welsow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.0692,
    longitude: 14.0022
  },
  {
    id: 943,
    zipCode: '16278',
    city: 'Sch\u00f6neberg',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.0085,
    longitude: 14.1426
  },
  {
    id: 944,
    zipCode: '16278',
    city: 'Crussow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 52.9998,
    longitude: 14.0801
  },
  {
    id: 945,
    zipCode: '16278',
    city: 'Frauenhagen',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.0771,
    longitude: 14.0422
  },
  {
    id: 946,
    zipCode: '16278',
    city: 'Schmargendorf',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 52.9815,
    longitude: 13.9585
  },
  {
    id: 947,
    zipCode: '16278',
    city: 'Schmiedeberg',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.143,
    longitude: 13.9521
  },
  {
    id: 948,
    zipCode: '16278',
    city: 'Wilmersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1109,
    longitude: 13.9061
  },
  {
    id: 949,
    zipCode: '16278',
    city: 'G\u00f6rlsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.0532,
    longitude: 13.9423
  },
  {
    id: 950,
    zipCode: '16278',
    city: 'Herzsprung',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 52.9755,
    longitude: 13.9876
  },
  {
    id: 951,
    zipCode: '16278',
    city: 'Gellmersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 52.9684,
    longitude: 14.0707
  },
  {
    id: 952,
    zipCode: '16278',
    city: 'Bruchhagen',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.0813,
    longitude: 13.9747
  },
  {
    id: 953,
    zipCode: '16278',
    city: 'Biesenbrow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1198,
    longitude: 14.0129
  },
  {
    id: 954,
    zipCode: '16278',
    city: 'Angerm\u00fcnde',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.015,
    longitude: 13.9992
  },
  {
    id: 955,
    zipCode: '16278',
    city: 'Pinnow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.062,
    longitude: 14.0856
  },
  {
    id: 956,
    zipCode: '16278',
    city: 'Stolpe/Oder',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 52.9833,
    longitude: 14.1167
  },
  {
    id: 957,
    zipCode: '16278',
    city: 'Greiffenberg',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.0873,
    longitude: 13.9552
  },
  {
    id: 958,
    zipCode: '16278',
    city: 'Mark Landin',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1111,
    longitude: 14.0917
  },
  {
    id: 959,
    zipCode: '16303',
    city: 'Schwedt/Oder',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.066,
    longitude: 14.2711
  },
  {
    id: 960,
    zipCode: '16306',
    city: 'Blumberg',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2061,
    longitude: 14.1525
  },
  {
    id: 961,
    zipCode: '16306',
    city: 'Biesendahlshof',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1964,
    longitude: 14.2092
  },
  {
    id: 962,
    zipCode: '16306',
    city: 'Stendell',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1435,
    longitude: 14.1661
  },
  {
    id: 963,
    zipCode: '16306',
    city: 'Woltersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1795,
    longitude: 14.2167
  },
  {
    id: 964,
    zipCode: '16306',
    city: 'Casekow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2112,
    longitude: 14.2082
  },
  {
    id: 965,
    zipCode: '16306',
    city: 'Friedrichsthal',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1581,
    longitude: 14.3464
  },
  {
    id: 966,
    zipCode: '16306',
    city: 'Luckow-Petershagen',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2435,
    longitude: 14.2573
  },
  {
    id: 967,
    zipCode: '16306',
    city: 'Hohenselchow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.205,
    longitude: 14.2807
  },
  {
    id: 968,
    zipCode: '16306',
    city: 'Berkholz-Meyenburg',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.05,
    longitude: 14.2167
  },
  {
    id: 969,
    zipCode: '16306',
    city: 'Sch\u00f6now',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1789,
    longitude: 14.153
  },
  {
    id: 970,
    zipCode: '16306',
    city: 'Vierraden',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.0967,
    longitude: 14.2934
  },
  {
    id: 971,
    zipCode: '16306',
    city: 'Zichow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1893,
    longitude: 14.0385
  },
  {
    id: 972,
    zipCode: '16306',
    city: 'Wartin',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2508,
    longitude: 14.157
  },
  {
    id: 973,
    zipCode: '16306',
    city: 'Gro\u00df Pinnow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1842,
    longitude: 14.2762
  },
  {
    id: 974,
    zipCode: '16306',
    city: 'Passow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1429,
    longitude: 14.1142
  },
  {
    id: 975,
    zipCode: '16307',
    city: 'Radekow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.3002,
    longitude: 14.3531
  },
  {
    id: 976,
    zipCode: '16307',
    city: 'Hohenreinkendorf',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2304,
    longitude: 14.3303
  },
  {
    id: 977,
    zipCode: '16307',
    city: 'Tantow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2716,
    longitude: 14.351
  },
  {
    id: 978,
    zipCode: '16307',
    city: 'Mescherin',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2472,
    longitude: 14.43
  },
  {
    id: 979,
    zipCode: '16307',
    city: 'Gartz (Oder)',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2,
    longitude: 14.3833
  },
  {
    id: 980,
    zipCode: '16307',
    city: 'Neurochlitz',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2803,
    longitude: 14.4067
  },
  {
    id: 981,
    zipCode: '16307',
    city: 'Geesow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2537,
    longitude: 14.3791
  },
  {
    id: 982,
    zipCode: '16307',
    city: 'Rosow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.3057,
    longitude: 14.3863
  },
  {
    id: 983,
    zipCode: '16307',
    city: 'Sch\u00f6nfeld',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2726,
    longitude: 14.2916
  },
  {
    id: 984,
    zipCode: '16321',
    city: 'Lindenberg',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.6026,
    longitude: 13.5244
  },
  {
    id: 985,
    zipCode: '16321',
    city: 'Lobetal',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.7279,
    longitude: 13.5921
  },
  {
    id: 986,
    zipCode: '16321',
    city: 'B\u00f6rnicke',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.663,
    longitude: 13.638
  },
  {
    id: 987,
    zipCode: '16321',
    city: 'R\u00fcdnitz',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.7214,
    longitude: 13.625
  },
  {
    id: 988,
    zipCode: '16321',
    city: 'Danewitz',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.7347,
    longitude: 13.6658
  },
  {
    id: 989,
    zipCode: '16321',
    city: 'Bernau',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.6821,
    longitude: 13.5965
  },
  {
    id: 990,
    zipCode: '16321',
    city: 'Sch\u00f6now',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.6771,
    longitude: 13.5364
  },
  {
    id: 991,
    zipCode: '16341',
    city: 'Zepernick',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.6509,
    longitude: 13.5409
  },
  {
    id: 992,
    zipCode: '16341',
    city: 'Schwanebeck',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.6251,
    longitude: 13.5441
  },
  {
    id: 993,
    zipCode: '16348',
    city: 'Gro\u00df Sch\u00f6nebeck (Schorfheide)',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.9,
    longitude: 13.5167
  },
  {
    id: 994,
    zipCode: '16348',
    city: 'Zerpenschleuse',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.8521,
    longitude: 13.5279
  },
  {
    id: 995,
    zipCode: '16348',
    city: 'Stolzenhagen',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.7781,
    longitude: 13.4384
  },
  {
    id: 996,
    zipCode: '16348',
    city: 'Prenden',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.7921,
    longitude: 13.549
  },
  {
    id: 997,
    zipCode: '16348',
    city: 'Ruhlsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.8235,
    longitude: 13.5568
  },
  {
    id: 998,
    zipCode: '16348',
    city: 'Marienwerder',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.8421,
    longitude: 13.5993
  },
  {
    id: 999,
    zipCode: '16348',
    city: 'Klosterfelde',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.7971,
    longitude: 13.4789
  },
  {
    id: 1000,
    zipCode: '16348',
    city: 'Wandlitz',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.742,
    longitude: 13.458
  },
  {
    id: 1001,
    zipCode: '16352',
    city: 'Sch\u00f6nerlinde',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.6539,
    longitude: 13.445
  },
  {
    id: 1002,
    zipCode: '16352',
    city: 'Basdorf',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.7126,
    longitude: 13.4387
  },
  {
    id: 1003,
    zipCode: '16352',
    city: 'Sch\u00f6nwalde',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.6779,
    longitude: 13.44
  },
  {
    id: 1004,
    zipCode: '16356',
    city: 'Seefeld',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.6224,
    longitude: 13.6801
  },
  {
    id: 1005,
    zipCode: '16356',
    city: 'Ahrensfelde',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.5766,
    longitude: 13.5797
  },
  {
    id: 1006,
    zipCode: '16356',
    city: 'Krummensee',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.5962,
    longitude: 13.6926
  },
  {
    id: 1007,
    zipCode: '16356',
    city: 'Eiche',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.5635,
    longitude: 13.5891
  },
  {
    id: 1008,
    zipCode: '16356',
    city: 'Werneuchen',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.6328,
    longitude: 13.7344
  },
  {
    id: 1009,
    zipCode: '16356',
    city: 'Hirschfelde',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.6367,
    longitude: 13.7993
  },
  {
    id: 1010,
    zipCode: '16356',
    city: 'Sch\u00f6nfeld',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.8333,
    longitude: 13.5667
  },
  {
    id: 1011,
    zipCode: '16356',
    city: 'Blumberg',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.6356,
    longitude: 13.6849
  },
  {
    id: 1012,
    zipCode: '16356',
    city: 'Mehrow',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.5709,
    longitude: 13.6155
  },
  {
    id: 1013,
    zipCode: '16356',
    city: 'Wilmersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.6639,
    longitude: 13.6873
  },
  {
    id: 1014,
    zipCode: '16359',
    city: 'Lanke',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.7609,
    longitude: 13.5653
  },
  {
    id: 1015,
    zipCode: '16359',
    city: 'Biesenthal',
    state: 'Brandenburg',
    community: 'Landkreis Barnim',
    latitude: 52.7662,
    longitude: 13.6442
  },
  {
    id: 1016,
    zipCode: '16515',
    city: 'Schmachtenhagen',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.7682,
    longitude: 13.3259
  },
  {
    id: 1017,
    zipCode: '16515',
    city: 'Malz',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.803,
    longitude: 13.2922
  },
  {
    id: 1018,
    zipCode: '16515',
    city: 'Zehlendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.7838,
    longitude: 13.3878
  },
  {
    id: 1019,
    zipCode: '16515',
    city: 'Friedrichsthal',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.7947,
    longitude: 13.2799
  },
  {
    id: 1020,
    zipCode: '16515',
    city: 'Nassenheide',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.8148,
    longitude: 13.2146
  },
  {
    id: 1021,
    zipCode: '16515',
    city: 'Wensickendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.7553,
    longitude: 13.3766
  },
  {
    id: 1022,
    zipCode: '16515',
    city: 'Z\u00fchlsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.73,
    longitude: 13.3876
  },
  {
    id: 1023,
    zipCode: '16515',
    city: 'Neuholland',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.8596,
    longitude: 13.3257
  },
  {
    id: 1024,
    zipCode: '16515',
    city: 'Freienhagen',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.8261,
    longitude: 13.2746
  },
  {
    id: 1025,
    zipCode: '16515',
    city: 'Oranienburg',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.7558,
    longitude: 13.242
  },
  {
    id: 1026,
    zipCode: '16540',
    city: 'Stolpe',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.661,
    longitude: 13.2593
  },
  {
    id: 1027,
    zipCode: '16540',
    city: 'Hohen Neuendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.6763,
    longitude: 13.2778
  },
  {
    id: 1028,
    zipCode: '16547',
    city: 'Birkenwerder',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.6833,
    longitude: 13.2833
  },
  {
    id: 1029,
    zipCode: '16548',
    city: 'Glienicke/Nordbahn',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.6351,
    longitude: 13.3075
  },
  {
    id: 1030,
    zipCode: '16552',
    city: 'Schildow',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.6363,
    longitude: 13.376
  },
  {
    id: 1031,
    zipCode: '16556',
    city: 'Borgsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.7129,
    longitude: 13.2767
  },
  {
    id: 1032,
    zipCode: '16559',
    city: 'Liebenwalde',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.8713,
    longitude: 13.3947
  },
  {
    id: 1033,
    zipCode: '16559',
    city: 'Liebenthal',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.9128,
    longitude: 13.4612
  },
  {
    id: 1034,
    zipCode: '16559',
    city: 'Kreuzbruch',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.8404,
    longitude: 13.4225
  },
  {
    id: 1035,
    zipCode: '16559',
    city: 'Hammer',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.8797,
    longitude: 13.4395
  },
  {
    id: 1036,
    zipCode: '16562',
    city: 'Bergfelde',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.6729,
    longitude: 13.3186
  },
  {
    id: 1037,
    zipCode: '16565',
    city: 'Lehnitz',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.7405,
    longitude: 13.2627
  },
  {
    id: 1038,
    zipCode: '16567',
    city: 'Sch\u00f6nflie\u00df',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.6555,
    longitude: 13.3382
  },
  {
    id: 1039,
    zipCode: '16567',
    city: 'M\u00fchlenbeck',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.6647,
    longitude: 13.3769
  },
  {
    id: 1040,
    zipCode: '16727',
    city: 'Velten',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.6915,
    longitude: 13.1753
  },
  {
    id: 1041,
    zipCode: '16727',
    city: 'Oberkr\u00e4mer',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.5833,
    longitude: 13.3167
  },
  {
    id: 1042,
    zipCode: '16761',
    city: 'Hennigsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.636,
    longitude: 13.2042
  },
  {
    id: 1043,
    zipCode: '16766',
    city: 'Oberkr\u00e4mer',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.5833,
    longitude: 13.3167
  },
  {
    id: 1044,
    zipCode: '16766',
    city: 'Kremmen',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.7622,
    longitude: 13.0252
  },
  {
    id: 1045,
    zipCode: '16767',
    city: 'Leegebruch',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.7234,
    longitude: 13.193
  },
  {
    id: 1046,
    zipCode: '16767',
    city: 'Germendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.7499,
    longitude: 13.1701
  },
  {
    id: 1047,
    zipCode: '16775',
    city: 'Stechlin',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.1056,
    longitude: 13.0417
  },
  {
    id: 1048,
    zipCode: '16775',
    city: 'Zabelsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.0476,
    longitude: 13.2533
  },
  {
    id: 1049,
    zipCode: '16775',
    city: 'L\u00f6wenberger Land',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.8958,
    longitude: 13.1729
  },
  {
    id: 1050,
    zipCode: '16775',
    city: 'Krewelin',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.9443,
    longitude: 13.386
  },
  {
    id: 1051,
    zipCode: '16775',
    city: 'Burgwall',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.049,
    longitude: 13.3016
  },
  {
    id: 1052,
    zipCode: '16775',
    city: 'Gro\u00dfwoltersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.0667,
    longitude: 13.1
  },
  {
    id: 1053,
    zipCode: '16775',
    city: 'Klein-Mutz',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.9667,
    longitude: 13.2833
  },
  {
    id: 1054,
    zipCode: '16775',
    city: 'Sonnenberg',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.0192,
    longitude: 13.0884
  },
  {
    id: 1055,
    zipCode: '16775',
    city: 'Bredereiche',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.1366,
    longitude: 13.2426
  },
  {
    id: 1056,
    zipCode: '16775',
    city: 'Sch\u00f6nermark',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.007,
    longitude: 13.1202
  },
  {
    id: 1057,
    zipCode: '16775',
    city: 'Schulzendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.0358,
    longitude: 13.049
  },
  {
    id: 1058,
    zipCode: '16775',
    city: 'Barsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.1021,
    longitude: 13.2882
  },
  {
    id: 1059,
    zipCode: '16775',
    city: 'Mildenberg',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.0109,
    longitude: 13.2879
  },
  {
    id: 1060,
    zipCode: '16775',
    city: 'Blumenow',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.0998,
    longitude: 13.2508
  },
  {
    id: 1061,
    zipCode: '16775',
    city: 'Badingen',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.9987,
    longitude: 13.2523
  },
  {
    id: 1062,
    zipCode: '16775',
    city: 'Kappe',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.9665,
    longitude: 13.4391
  },
  {
    id: 1063,
    zipCode: '16775',
    city: 'Gransee',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.007,
    longitude: 13.1575
  },
  {
    id: 1064,
    zipCode: '16775',
    city: 'Marienthal',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.0547,
    longitude: 13.2785
  },
  {
    id: 1065,
    zipCode: '16775',
    city: 'R\u00f6nnebeck',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.0042,
    longitude: 13.0407
  },
  {
    id: 1066,
    zipCode: '16775',
    city: 'Tornow',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.0632,
    longitude: 13.2875
  },
  {
    id: 1067,
    zipCode: '16792',
    city: 'Zehdenick',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.9785,
    longitude: 13.3317
  },
  {
    id: 1068,
    zipCode: '16792',
    city: 'Wesendorf',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.983,
    longitude: 13.38
  },
  {
    id: 1069,
    zipCode: '16792',
    city: 'Kurtschlag',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 52.9988,
    longitude: 13.478
  },
  {
    id: 1070,
    zipCode: '16798',
    city: 'Himmelpfort',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.1775,
    longitude: 13.2278
  },
  {
    id: 1071,
    zipCode: '16798',
    city: 'Zootzen',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.1529,
    longitude: 13.2114
  },
  {
    id: 1072,
    zipCode: '16798',
    city: 'Altthymen',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.2397,
    longitude: 13.1627
  },
  {
    id: 1073,
    zipCode: '16798',
    city: 'F\u00fcrstenberg/Havel',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.1864,
    longitude: 13.1708
  },
  {
    id: 1074,
    zipCode: '16798',
    city: 'Steinf\u00f6rde',
    state: 'Brandenburg',
    community: 'Landkreis Oberhavel',
    latitude: 53.1873,
    longitude: 13.0896
  },
  {
    id: 1075,
    zipCode: '16816',
    city: 'Neuruppin',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.9282,
    longitude: 12.8031
  },
  {
    id: 1076,
    zipCode: '16818',
    city: 'Temnitzquell',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.0056,
    longitude: 12.6444
  },
  {
    id: 1077,
    zipCode: '16818',
    city: 'Dabergotz',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.9031,
    longitude: 12.7247
  },
  {
    id: 1078,
    zipCode: '16818',
    city: 'Basdorf',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.0909,
    longitude: 12.7313
  },
  {
    id: 1079,
    zipCode: '16818',
    city: 'Fehrbellin Deutschhof',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.7,
    longitude: 12.8167
  },
  {
    id: 1080,
    zipCode: '16818',
    city: 'Walsleben',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.9383,
    longitude: 12.6645
  },
  {
    id: 1081,
    zipCode: '16818',
    city: 'Fehrbellin Wustrau-Altfriesack',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.85,
    longitude: 12.8733
  },
  {
    id: 1082,
    zipCode: '16818',
    city: 'M\u00e4rkisch Linden',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.9292,
    longitude: 12.7083
  },
  {
    id: 1083,
    zipCode: '16818',
    city: 'Fehrbellin Wall',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.8167,
    longitude: 12.9667
  },
  {
    id: 1084,
    zipCode: '16818',
    city: 'Rheinsberg Braunsberg',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.05,
    longitude: 12.8333
  },
  {
    id: 1085,
    zipCode: '16818',
    city: 'Storbeck-Frankendorf',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.0067,
    longitude: 12.7333
  },
  {
    id: 1086,
    zipCode: '16818',
    city: 'Fehrbellin Langen',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.85,
    longitude: 12.8
  },
  {
    id: 1087,
    zipCode: '16827',
    city: 'Alt Ruppin',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.9483,
    longitude: 12.848
  },
  {
    id: 1088,
    zipCode: '16831',
    city: 'Rheinsberg',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.0997,
    longitude: 12.8989
  },
  {
    id: 1089,
    zipCode: '16831',
    city: 'Rheinsberg Kleinzerlang',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1833,
    longitude: 12.9167
  },
  {
    id: 1090,
    zipCode: '16831',
    city: 'Rheinsberg Z\u00fchlen',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.0833,
    longitude: 12.8167
  },
  {
    id: 1091,
    zipCode: '16831',
    city: 'Rheinsberg Zechow',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.05,
    longitude: 12.9167
  },
  {
    id: 1092,
    zipCode: '16831',
    city: 'Rheinsberg Heinrichsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.05,
    longitude: 12.95
  },
  {
    id: 1093,
    zipCode: '16831',
    city: 'Rheinsberg Zechlinerh\u00fctte',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.15,
    longitude: 12.8833
  },
  {
    id: 1094,
    zipCode: '16831',
    city: 'Rheinsberg Gro\u00dfzerlang',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1833,
    longitude: 12.95
  },
  {
    id: 1095,
    zipCode: '16831',
    city: 'Rheinsberg Schwanow',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.05,
    longitude: 12.8667
  },
  {
    id: 1096,
    zipCode: '16831',
    city: 'Rheinsberg Linow',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1,
    longitude: 12.8333
  },
  {
    id: 1097,
    zipCode: '16833',
    city: 'Fehrbellin Linum',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.7815,
    longitude: 12.7813
  },
  {
    id: 1098,
    zipCode: '16833',
    city: 'Fehrbellin Walchow',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.85,
    longitude: 12.7667
  },
  {
    id: 1099,
    zipCode: '16833',
    city: 'Fehrbellin Dechtow',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.75,
    longitude: 12.8167
  },
  {
    id: 1100,
    zipCode: '16833',
    city: 'Fehrbellin K\u00f6nigshorst',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.7167,
    longitude: 12.8
  },
  {
    id: 1101,
    zipCode: '16833',
    city: 'Fehrbellin Hakenberg',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.7833,
    longitude: 12.8333
  },
  {
    id: 1102,
    zipCode: '16833',
    city: 'Fehrbellin Karwesee',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.75,
    longitude: 12.7833
  },
  {
    id: 1103,
    zipCode: '16833',
    city: 'Fehrbellin Betzin',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.7667,
    longitude: 12.7667
  },
  {
    id: 1104,
    zipCode: '16833',
    city: 'Fehrbellin',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.8135,
    longitude: 12.7644
  },
  {
    id: 1105,
    zipCode: '16833',
    city: 'Fehrbellin Tarmow',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.8,
    longitude: 12.8
  },
  {
    id: 1106,
    zipCode: '16833',
    city: 'Fehrbellin Lentzke',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.8,
    longitude: 12.7
  },
  {
    id: 1107,
    zipCode: '16833',
    city: 'Fehrbellin Brunne',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.7667,
    longitude: 12.7333
  },
  {
    id: 1108,
    zipCode: '16833',
    city: 'Fehrbellin Protzen',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.85,
    longitude: 12.7333
  },
  {
    id: 1109,
    zipCode: '16835',
    city: 'R\u00fcthnick',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.8812,
    longitude: 12.9965
  },
  {
    id: 1110,
    zipCode: '16835',
    city: 'Vielitz',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.9338,
    longitude: 13.0161
  },
  {
    id: 1111,
    zipCode: '16835',
    city: 'Rheinsberg Dierberg',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.0333,
    longitude: 12.9667
  },
  {
    id: 1112,
    zipCode: '16835',
    city: 'Seebeck-Strubensee',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.9395,
    longitude: 13.0207
  },
  {
    id: 1113,
    zipCode: '16835',
    city: 'Herzberg',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.9027,
    longitude: 12.9698
  },
  {
    id: 1114,
    zipCode: '16835',
    city: 'Lindow (Mark) Hindenberg',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.0333,
    longitude: 13.0
  },
  {
    id: 1115,
    zipCode: '16835',
    city: 'Lindow (Mark) Sch\u00f6nberg (Mark)',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.9333,
    longitude: 12.9667
  },
  {
    id: 1116,
    zipCode: '16835',
    city: 'Lindow (Mark)',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.9748,
    longitude: 12.9869
  },
  {
    id: 1117,
    zipCode: '16837',
    city: 'Rheinsberg Luhme',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1833,
    longitude: 12.8333
  },
  {
    id: 1118,
    zipCode: '16837',
    city: 'Wittstock/Dosse Zempow',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.2167,
    longitude: 12.7333
  },
  {
    id: 1119,
    zipCode: '16837',
    city: 'Rheinsberg Flecken Zechlin',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.15,
    longitude: 12.7667
  },
  {
    id: 1120,
    zipCode: '16837',
    city: 'Rheinsberg Kagar',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1333,
    longitude: 12.8167
  },
  {
    id: 1121,
    zipCode: '16837',
    city: 'Rheinsberg Dorf Zechlin',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1333,
    longitude: 12.7667
  },
  {
    id: 1122,
    zipCode: '16837',
    city: 'Rheinsberg Wallitz',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1167,
    longitude: 12.7667
  },
  {
    id: 1123,
    zipCode: '16845',
    city: 'Temnitztal',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.8567,
    longitude: 12.6367
  },
  {
    id: 1124,
    zipCode: '16845',
    city: 'Sieversdorf-Hohenofen',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.825,
    longitude: 12.4083
  },
  {
    id: 1125,
    zipCode: '16845',
    city: 'Breddin',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.8856,
    longitude: 12.2237
  },
  {
    id: 1126,
    zipCode: '16845',
    city: 'Gro\u00dfderschau',
    state: 'Brandenburg',
    community: 'Landkreis Havelland',
    latitude: 52.7906,
    longitude: 12.3682
  },
  {
    id: 1127,
    zipCode: '16845',
    city: 'Neustadt (Dosse)',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.8528,
    longitude: 12.4492
  },
  {
    id: 1128,
    zipCode: '16845',
    city: 'Temnitztal Garz',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.85,
    longitude: 12.6333
  },
  {
    id: 1129,
    zipCode: '16845',
    city: 'St\u00fcdenitz-Sch\u00f6nermark',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.8917,
    longitude: 12.3
  },
  {
    id: 1130,
    zipCode: '16845',
    city: 'Dreetz',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.803,
    longitude: 12.4596
  },
  {
    id: 1131,
    zipCode: '16845',
    city: 'Kyritz Holzhausen',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.9167,
    longitude: 12.35
  },
  {
    id: 1132,
    zipCode: '16845',
    city: 'Temnitztal Wildberg',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.8775,
    longitude: 12.6278
  },
  {
    id: 1133,
    zipCode: '16845',
    city: 'Zernitz-Lohm',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.875,
    longitude: 12.3417
  },
  {
    id: 1134,
    zipCode: '16845',
    city: 'M\u00e4rkisch Linden',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.9292,
    longitude: 12.7083
  },
  {
    id: 1135,
    zipCode: '16845',
    city: 'Fehrbellin Manker',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.85,
    longitude: 12.6667
  },
  {
    id: 1136,
    zipCode: '16866',
    city: 'Sch\u00f6nhagen',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.9623,
    longitude: 12.1825
  },
  {
    id: 1137,
    zipCode: '16866',
    city: 'Kolrep',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0309,
    longitude: 12.2863
  },
  {
    id: 1138,
    zipCode: '16866',
    city: 'D\u00f6llen',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.9906,
    longitude: 12.1854
  },
  {
    id: 1139,
    zipCode: '16866',
    city: 'Kyritz Drewen',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.9833,
    longitude: 12.4
  },
  {
    id: 1140,
    zipCode: '16866',
    city: 'Vehlow',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0123,
    longitude: 12.3192
  },
  {
    id: 1141,
    zipCode: '16866',
    city: 'Rehfeld-Berlitt',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.95,
    longitude: 12.2917
  },
  {
    id: 1142,
    zipCode: '16866',
    city: 'Demerthin',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.9743,
    longitude: 12.2932
  },
  {
    id: 1143,
    zipCode: '16866',
    city: 'Bork-Lellichow',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.0333,
    longitude: 12.45
  },
  {
    id: 1144,
    zipCode: '16866',
    city: 'Schrepkow',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.9778,
    longitude: 12.1107
  },
  {
    id: 1145,
    zipCode: '16866',
    city: 'Kyritz K\u00f6tzlin',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.9,
    longitude: 12.2333
  },
  {
    id: 1146,
    zipCode: '16866',
    city: 'Vehlin',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.9569,
    longitude: 12.139
  },
  {
    id: 1147,
    zipCode: '16866',
    city: 'Teetz-Ganz',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.025,
    longitude: 12.5083
  },
  {
    id: 1148,
    zipCode: '16866',
    city: 'G\u00f6rike',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.9436,
    longitude: 12.2013
  },
  {
    id: 1149,
    zipCode: '16866',
    city: 'Kunow',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.995,
    longitude: 12.133
  },
  {
    id: 1150,
    zipCode: '16866',
    city: 'Gro\u00df Welle',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.012,
    longitude: 12.0841
  },
  {
    id: 1151,
    zipCode: '16866',
    city: 'Kyritz',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.9808,
    longitude: 12.3274
  },
  {
    id: 1152,
    zipCode: '16866',
    city: 'Dannenwalde',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0266,
    longitude: 12.2404
  },
  {
    id: 1153,
    zipCode: '16866',
    city: 'Gumtow',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.9833,
    longitude: 12.25
  },
  {
    id: 1154,
    zipCode: '16866',
    city: 'Granzow',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.9587,
    longitude: 12.2504
  },
  {
    id: 1155,
    zipCode: '16866',
    city: 'Wutike',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0185,
    longitude: 12.3748
  },
  {
    id: 1156,
    zipCode: '16866',
    city: 'Barenthin',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.9236,
    longitude: 12.234
  },
  {
    id: 1157,
    zipCode: '16868',
    city: 'Wusterhausen (Dosse)',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 52.8833,
    longitude: 12.4667
  },
  {
    id: 1158,
    zipCode: '16909',
    city: 'Wittstock/Dosse Gro\u00df Ha\u00dflow',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1833,
    longitude: 12.55
  },
  {
    id: 1159,
    zipCode: '16909',
    city: 'Heiligengrabe Jabel',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1667,
    longitude: 12.4333
  },
  {
    id: 1160,
    zipCode: '16909',
    city: 'Heiligengrabe Blandikow',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1167,
    longitude: 12.3833
  },
  {
    id: 1161,
    zipCode: '16909',
    city: 'Heiligengrabe Wernikow',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.2167,
    longitude: 12.4333
  },
  {
    id: 1162,
    zipCode: '16909',
    city: 'Heiligengrabe Liebenthal',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.15,
    longitude: 12.4
  },
  {
    id: 1163,
    zipCode: '16909',
    city: 'Heiligengrabe Blesendorf',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.2,
    longitude: 12.3333
  },
  {
    id: 1164,
    zipCode: '16909',
    city: 'Wittstock/Dosse Berlinchen',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.2167,
    longitude: 12.5833
  },
  {
    id: 1165,
    zipCode: '16909',
    city: 'Heiligengrabe',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1446,
    longitude: 12.3625
  },
  {
    id: 1166,
    zipCode: '16909',
    city: 'Wittstock/Dosse Dranse',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.2,
    longitude: 12.6167
  },
  {
    id: 1167,
    zipCode: '16909',
    city: 'Heiligengrabe Zaatzke',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1833,
    longitude: 12.4
  },
  {
    id: 1168,
    zipCode: '16909',
    city: 'Heiligengrabe Maulbeerwalde',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1833,
    longitude: 12.35
  },
  {
    id: 1169,
    zipCode: '16909',
    city: 'Wittstock/Dosse',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1549,
    longitude: 12.487
  },
  {
    id: 1170,
    zipCode: '16909',
    city: 'Wittstock/Dosse Dossow',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1167,
    longitude: 12.5333
  },
  {
    id: 1171,
    zipCode: '16909',
    city: 'Heiligengrabe Papenbruch',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1333,
    longitude: 12.4333
  },
  {
    id: 1172,
    zipCode: '16909',
    city: 'Wittstock/Dosse Zootzen',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1333,
    longitude: 12.5833
  },
  {
    id: 1173,
    zipCode: '16909',
    city: 'Wittstock/Dosse Schweinrich',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1833,
    longitude: 12.6333
  },
  {
    id: 1174,
    zipCode: '16909',
    city: 'Wittstock/Dosse Herzsprung',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.0667,
    longitude: 12.4667
  },
  {
    id: 1175,
    zipCode: '16909',
    city: 'Wittstock/Dosse Wulfersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.25,
    longitude: 12.4333
  },
  {
    id: 1176,
    zipCode: '16909',
    city: 'Wittstock/Dosse Fretzdorf',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.0667,
    longitude: 12.55
  },
  {
    id: 1177,
    zipCode: '16909',
    city: 'Wittstock/Dosse Gadow',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1167,
    longitude: 12.6167
  },
  {
    id: 1178,
    zipCode: '16909',
    city: 'Wittstock/Dosse Niemerlang',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.25,
    longitude: 12.35
  },
  {
    id: 1179,
    zipCode: '16909',
    city: 'Heiligengrabe Grabow bei Blumenthal',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.0833,
    longitude: 12.4
  },
  {
    id: 1180,
    zipCode: '16909',
    city: 'Wittstock/Dosse Rossow',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.05,
    longitude: 12.5667
  },
  {
    id: 1181,
    zipCode: '16909',
    city: 'Wittstock/Dosse Christdorf',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.0833,
    longitude: 12.4667
  },
  {
    id: 1182,
    zipCode: '16909',
    city: 'Wittstock/Dosse Goldbeck',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.1333,
    longitude: 12.5167
  },
  {
    id: 1183,
    zipCode: '16909',
    city: 'Wittstock/Dosse Sewekow',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.25,
    longitude: 12.65
  },
  {
    id: 1184,
    zipCode: '16909',
    city: 'Wittstock/Dosse K\u00f6nigsberg',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.0667,
    longitude: 12.4333
  },
  {
    id: 1185,
    zipCode: '16918',
    city: 'Wittstock/Dosse Freyenstein',
    state: 'Brandenburg',
    community: 'Landkreis Ostprignitz-Ruppin',
    latitude: 53.2833,
    longitude: 12.35
  },
  {
    id: 1186,
    zipCode: '16921',
    city: 'Alt Kr\u00fcssow',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.15,
    longitude: 12.2667
  },
  {
    id: 1187,
    zipCode: '16928',
    city: 'Falkenhagen',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.2065,
    longitude: 12.2031
  },
  {
    id: 1188,
    zipCode: '16928',
    city: 'Beveringen',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1507,
    longitude: 12.2208
  },
  {
    id: 1189,
    zipCode: '16928',
    city: 'Heiligengrabe Blumenthal',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0833,
    longitude: 12.3667
  },
  {
    id: 1190,
    zipCode: '16928',
    city: 'Lindenberg',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0377,
    longitude: 12.1291
  },
  {
    id: 1191,
    zipCode: '16928',
    city: 'Helle',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1679,
    longitude: 12.0326
  },
  {
    id: 1192,
    zipCode: '16928',
    city: 'Boddin-Langnow',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1,
    longitude: 12.2778
  },
  {
    id: 1193,
    zipCode: '16928',
    city: 'Pritzwalk',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1494,
    longitude: 12.1741
  },
  {
    id: 1194,
    zipCode: '16928',
    city: 'Sadenbeck',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1866,
    longitude: 12.2652
  },
  {
    id: 1195,
    zipCode: '16928',
    city: 'Mesendorf',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0953,
    longitude: 12.1309
  },
  {
    id: 1196,
    zipCode: '16928',
    city: 'Kuhsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1185,
    longitude: 12.1072
  },
  {
    id: 1197,
    zipCode: '16928',
    city: 'Kehrberg',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0474,
    longitude: 12.1869
  },
  {
    id: 1198,
    zipCode: '16928',
    city: 'Alt Kr\u00fcssow',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.15,
    longitude: 12.2667
  },
  {
    id: 1199,
    zipCode: '16928',
    city: 'Gro\u00df Woltersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0824,
    longitude: 12.1506
  },
  {
    id: 1200,
    zipCode: '16928',
    city: 'Heiligengrabe Rosenwinkel',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.05,
    longitude: 12.3667
  },
  {
    id: 1201,
    zipCode: '16928',
    city: 'Sch\u00f6nebeck',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0595,
    longitude: 12.2331
  },
  {
    id: 1202,
    zipCode: '16928',
    city: 'Buchholz',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1175,
    longitude: 12.1835
  },
  {
    id: 1203,
    zipCode: '16928',
    city: 'Vettin',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0332,
    longitude: 12.1706
  },
  {
    id: 1204,
    zipCode: '16928',
    city: 'Wilmersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1622,
    longitude: 12.3074
  },
  {
    id: 1205,
    zipCode: '16928',
    city: 'Hoppenrade',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0365,
    longitude: 12.0616
  },
  {
    id: 1206,
    zipCode: '16928',
    city: 'Kemnitz',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1394,
    longitude: 12.236
  },
  {
    id: 1207,
    zipCode: '16928',
    city: 'Gro\u00df Pankow',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1195,
    longitude: 12.0497
  },
  {
    id: 1208,
    zipCode: '16928',
    city: 'T\u00fcchen',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0621,
    longitude: 12.0933
  },
  {
    id: 1209,
    zipCode: '16928',
    city: 'Kuhbier',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1484,
    longitude: 12.0942
  },
  {
    id: 1210,
    zipCode: '16928',
    city: 'Klein Woltersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0754,
    longitude: 12.1849
  },
  {
    id: 1211,
    zipCode: '16928',
    city: 'Gerdshagen',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.2446,
    longitude: 12.1981
  },
  {
    id: 1212,
    zipCode: '16928',
    city: 'Steffenshagen',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1985,
    longitude: 12.1175
  },
  {
    id: 1213,
    zipCode: '16945',
    city: 'Marienflie\u00df',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.32,
    longitude: 12.1233
  },
  {
    id: 1214,
    zipCode: '16945',
    city: 'Meyenburg',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.3133,
    longitude: 12.2425
  },
  {
    id: 1215,
    zipCode: '16945',
    city: 'Halenbeck-Rohlsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.2333,
    longitude: 12.28
  },
  {
    id: 1216,
    zipCode: '16945',
    city: 'K\u00fcmmernitztal',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.2417,
    longitude: 12.1583
  },
  {
    id: 1217,
    zipCode: '16949',
    city: 'Putlitz',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.249,
    longitude: 12.0418
  },
  {
    id: 1218,
    zipCode: '16949',
    city: 'Triglitz',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.2167,
    longitude: 12.1
  },
  {
    id: 1219,
    zipCode: '17268',
    city: 'Boitzenburger Land',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.255,
    longitude: 13.5867
  },
  {
    id: 1220,
    zipCode: '17268',
    city: 'Temmen-Ringenwalde',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.08,
    longitude: 13.7417
  },
  {
    id: 1221,
    zipCode: '17268',
    city: 'Flieth-Stegelitz',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1417,
    longitude: 13.8333
  },
  {
    id: 1222,
    zipCode: '17268',
    city: 'Klosterwalde',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1711,
    longitude: 13.5617
  },
  {
    id: 1223,
    zipCode: '17268',
    city: 'Gandenitz',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1735,
    longitude: 13.4409
  },
  {
    id: 1224,
    zipCode: '17268',
    city: 'Storkow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.047,
    longitude: 13.4424
  },
  {
    id: 1225,
    zipCode: '17268',
    city: 'Vietmannsdorf',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.0502,
    longitude: 13.5295
  },
  {
    id: 1226,
    zipCode: '17268',
    city: 'Templin',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1262,
    longitude: 13.5455
  },
  {
    id: 1227,
    zipCode: '17268',
    city: 'Milmersdorf',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1119,
    longitude: 13.6415
  },
  {
    id: 1228,
    zipCode: '17268',
    city: 'Mittenwalde',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1833,
    longitude: 13.6667
  },
  {
    id: 1229,
    zipCode: '17268',
    city: 'Petznick',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1621,
    longitude: 13.6253
  },
  {
    id: 1230,
    zipCode: '17268',
    city: 'Herzfelde',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1975,
    longitude: 13.6031
  },
  {
    id: 1231,
    zipCode: '17268',
    city: 'Grunewald',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.0235,
    longitude: 13.4806
  },
  {
    id: 1232,
    zipCode: '17268',
    city: 'Densow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1453,
    longitude: 13.3779
  },
  {
    id: 1233,
    zipCode: '17268',
    city: 'Gollin',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.049,
    longitude: 13.6032
  },
  {
    id: 1234,
    zipCode: '17268',
    city: 'Gerswalde',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1699,
    longitude: 13.7485
  },
  {
    id: 1235,
    zipCode: '17268',
    city: 'Hammelspring',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.0714,
    longitude: 13.4319
  },
  {
    id: 1236,
    zipCode: '17268',
    city: 'Gro\u00df D\u00f6lln',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 52.9928,
    longitude: 13.5255
  },
  {
    id: 1237,
    zipCode: '17268',
    city: 'Beutel',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1138,
    longitude: 13.3889
  },
  {
    id: 1238,
    zipCode: '17268',
    city: 'R\u00f6ddelin',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.1017,
    longitude: 13.4442
  },
  {
    id: 1239,
    zipCode: '17279',
    city: 'Lychen',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2124,
    longitude: 13.3148
  },
  {
    id: 1240,
    zipCode: '17291',
    city: 'Uckerfelde',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2583,
    longitude: 13.9667
  },
  {
    id: 1241,
    zipCode: '17291',
    city: 'Schenkenberg',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.3667,
    longitude: 13.95
  },
  {
    id: 1242,
    zipCode: '17291',
    city: 'Prenzlau',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.3162,
    longitude: 13.8626
  },
  {
    id: 1243,
    zipCode: '17291',
    city: 'Gramzow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2125,
    longitude: 14.0075
  },
  {
    id: 1244,
    zipCode: '17291',
    city: 'G\u00f6ritz',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.4063,
    longitude: 13.9156
  },
  {
    id: 1245,
    zipCode: '17291',
    city: 'Randowtal',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.3056,
    longitude: 14.0556
  },
  {
    id: 1246,
    zipCode: '17291',
    city: 'Gr\u00fcnow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.3167,
    longitude: 13.95
  },
  {
    id: 1247,
    zipCode: '17291',
    city: 'Nordwestuckermark',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2697,
    longitude: 13.6046
  },
  {
    id: 1248,
    zipCode: '17291',
    city: 'Sch\u00f6nfeld',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.4136,
    longitude: 13.9857
  },
  {
    id: 1249,
    zipCode: '17291',
    city: 'Oberuckersee',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.2125,
    longitude: 13.8875
  },
  {
    id: 1250,
    zipCode: '17291',
    city: 'Carmzow-Wallmow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.3667,
    longitude: 14.068
  },
  {
    id: 1251,
    zipCode: '17326',
    city: 'Br\u00fcssow',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.3997,
    longitude: 14.1253
  },
  {
    id: 1252,
    zipCode: '17337',
    city: 'Uckerland',
    state: 'Brandenburg',
    community: 'Landkreis Uckermark',
    latitude: 53.4569,
    longitude: 13.7806
  },
  {
    id: 1253,
    zipCode: '19309',
    city: 'Lenzen (Elbe)',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0833,
    longitude: 11.4833
  },
  {
    id: 1254,
    zipCode: '19309',
    city: 'Lanz',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0744,
    longitude: 11.5991
  },
  {
    id: 1255,
    zipCode: '19309',
    city: 'Wootz',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0663,
    longitude: 11.3535
  },
  {
    id: 1256,
    zipCode: '19309',
    city: 'Besandten',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0895,
    longitude: 11.2931
  },
  {
    id: 1257,
    zipCode: '19309',
    city: 'Mellen',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1532,
    longitude: 11.589
  },
  {
    id: 1258,
    zipCode: '19309',
    city: 'Eldenburg',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1142,
    longitude: 11.4387
  },
  {
    id: 1259,
    zipCode: '19322',
    city: 'R\u00fchst\u00e4dt',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.9167,
    longitude: 11.8667
  },
  {
    id: 1260,
    zipCode: '19322',
    city: 'Breese',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0,
    longitude: 11.8
  },
  {
    id: 1261,
    zipCode: '19322',
    city: 'Wittenberge',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0054,
    longitude: 11.7503
  },
  {
    id: 1262,
    zipCode: '19322',
    city: 'Weisen',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0252,
    longitude: 11.7871
  },
  {
    id: 1263,
    zipCode: '19322',
    city: 'Cumlosen',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0333,
    longitude: 11.6667
  },
  {
    id: 1264,
    zipCode: '19322',
    city: 'Gro\u00df Breese',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0051,
    longitude: 11.8232
  },
  {
    id: 1265,
    zipCode: '19336',
    city: 'Legde/Quitz\u00f6bel',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.9111,
    longitude: 11.9778
  },
  {
    id: 1266,
    zipCode: '19336',
    city: 'Viesecke',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0134,
    longitude: 12.0278
  },
  {
    id: 1267,
    zipCode: '19336',
    city: 'Bad Wilsnack',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.9561,
    longitude: 11.949
  },
  {
    id: 1268,
    zipCode: '19336',
    city: 'Kletzke',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.9962,
    longitude: 12.0554
  },
  {
    id: 1269,
    zipCode: '19339',
    city: 'Netzow',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.9216,
    longitude: 12.1385
  },
  {
    id: 1270,
    zipCode: '19339',
    city: 'Gl\u00f6wen',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.9142,
    longitude: 12.0855
  },
  {
    id: 1271,
    zipCode: '19339',
    city: 'Bendelin',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 52.91,
    longitude: 12.1689
  },
  {
    id: 1272,
    zipCode: '19348',
    city: 'G\u00fclitz-Reetz',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1889,
    longitude: 11.9278
  },
  {
    id: 1273,
    zipCode: '19348',
    city: 'Kleinow',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0525,
    longitude: 11.958
  },
  {
    id: 1274,
    zipCode: '19348',
    city: 'Krampfer',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0597,
    longitude: 12.0191
  },
  {
    id: 1275,
    zipCode: '19348',
    city: 'Perleberg',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.0758,
    longitude: 11.8574
  },
  {
    id: 1276,
    zipCode: '19348',
    city: 'Retzin',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1141,
    longitude: 11.9948
  },
  {
    id: 1277,
    zipCode: '19348',
    city: 'Klein Gottschow',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.097,
    longitude: 12.0039
  },
  {
    id: 1278,
    zipCode: '19348',
    city: 'Wolfshagen',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1482,
    longitude: 12.0114
  },
  {
    id: 1279,
    zipCode: '19348',
    city: 'Berge',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.2333,
    longitude: 11.8667
  },
  {
    id: 1280,
    zipCode: '19348',
    city: 'Pirow',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.2167,
    longitude: 11.9
  },
  {
    id: 1281,
    zipCode: '19348',
    city: 'Nebelin',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1089,
    longitude: 11.7226
  },
  {
    id: 1282,
    zipCode: '19348',
    city: 'Baek',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1633,
    longitude: 11.9164
  },
  {
    id: 1283,
    zipCode: '19357',
    city: 'Pr\u00f6ttlin',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.197,
    longitude: 11.5785
  },
  {
    id: 1284,
    zipCode: '19357',
    city: 'Garlin',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1843,
    longitude: 11.6788
  },
  {
    id: 1285,
    zipCode: '19357',
    city: 'Boberow',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.146,
    longitude: 11.6146
  },
  {
    id: 1286,
    zipCode: '19357',
    city: 'Mankmu\u00df',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1315,
    longitude: 11.6664
  },
  {
    id: 1287,
    zipCode: '19357',
    city: 'Karst\u00e4dt',
    state: 'Brandenburg',
    community: 'Landkreis Prignitz',
    latitude: 53.1622,
    longitude: 11.7424
  },
  {
    id: 1288,
    zipCode: '10115',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5323,
    longitude: 13.3846
  },
  {
    id: 1289,
    zipCode: '10117',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.517,
    longitude: 13.3872
  },
  {
    id: 1290,
    zipCode: '10119',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5305,
    longitude: 13.4053
  },
  {
    id: 1291,
    zipCode: '10178',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5213,
    longitude: 13.4096
  },
  {
    id: 1292,
    zipCode: '10179',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5122,
    longitude: 13.4164
  },
  {
    id: 1293,
    zipCode: '10243',
    city: 'Berlin Friedrichshain',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5123,
    longitude: 13.4394
  },
  {
    id: 1294,
    zipCode: '10245',
    city: 'Berlin Friedrichshain',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5007,
    longitude: 13.4647
  },
  {
    id: 1295,
    zipCode: '10247',
    city: 'Berlin Friedrichshain',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5161,
    longitude: 13.4656
  },
  {
    id: 1296,
    zipCode: '10249',
    city: 'Berlin Friedrichshain',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5238,
    longitude: 13.4428
  },
  {
    id: 1297,
    zipCode: '10315',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5132,
    longitude: 13.5148
  },
  {
    id: 1298,
    zipCode: '10317',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4979,
    longitude: 13.4908
  },
  {
    id: 1299,
    zipCode: '10318',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4835,
    longitude: 13.5287
  },
  {
    id: 1300,
    zipCode: '10319',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4992,
    longitude: 13.5188
  },
  {
    id: 1301,
    zipCode: '10365',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5206,
    longitude: 13.4969
  },
  {
    id: 1302,
    zipCode: '10367',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5246,
    longitude: 13.4821
  },
  {
    id: 1303,
    zipCode: '10369',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5295,
    longitude: 13.4695
  },
  {
    id: 1304,
    zipCode: '10405',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5352,
    longitude: 13.4257
  },
  {
    id: 1305,
    zipCode: '10407',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5336,
    longitude: 13.4492
  },
  {
    id: 1306,
    zipCode: '10409',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5443,
    longitude: 13.4414
  },
  {
    id: 1307,
    zipCode: '10435',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5378,
    longitude: 13.4112
  },
  {
    id: 1308,
    zipCode: '10437',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5449,
    longitude: 13.4126
  },
  {
    id: 1309,
    zipCode: '10439',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5522,
    longitude: 13.4121
  },
  {
    id: 1310,
    zipCode: '10551',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5307,
    longitude: 13.3372
  },
  {
    id: 1311,
    zipCode: '10553',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5305,
    longitude: 13.3215
  },
  {
    id: 1312,
    zipCode: '10555',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5215,
    longitude: 13.3355
  },
  {
    id: 1313,
    zipCode: '10557',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5233,
    longitude: 13.3594
  },
  {
    id: 1314,
    zipCode: '10559',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5301,
    longitude: 13.3499
  },
  {
    id: 1315,
    zipCode: '10585',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5152,
    longitude: 13.3057
  },
  {
    id: 1316,
    zipCode: '10587',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5184,
    longitude: 13.3195
  },
  {
    id: 1317,
    zipCode: '10589',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5276,
    longitude: 13.3057
  },
  {
    id: 1318,
    zipCode: '10623',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5088,
    longitude: 13.3274
  },
  {
    id: 1319,
    zipCode: '10625',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5095,
    longitude: 13.3147
  },
  {
    id: 1320,
    zipCode: '10627',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.508,
    longitude: 13.303
  },
  {
    id: 1321,
    zipCode: '10629',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5028,
    longitude: 13.3086
  },
  {
    id: 1322,
    zipCode: '10707',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4967,
    longitude: 13.3138
  },
  {
    id: 1323,
    zipCode: '10709',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4939,
    longitude: 13.3031
  },
  {
    id: 1324,
    zipCode: '10711',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4981,
    longitude: 13.2905
  },
  {
    id: 1325,
    zipCode: '10713',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4851,
    longitude: 13.3133
  },
  {
    id: 1326,
    zipCode: '10715',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4824,
    longitude: 13.3289
  },
  {
    id: 1327,
    zipCode: '10717',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4908,
    longitude: 13.3275
  },
  {
    id: 1328,
    zipCode: '10719',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4988,
    longitude: 13.3257
  },
  {
    id: 1329,
    zipCode: '10777',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4975,
    longitude: 13.3427
  },
  {
    id: 1330,
    zipCode: '10779',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4921,
    longitude: 13.3395
  },
  {
    id: 1331,
    zipCode: '10781',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4936,
    longitude: 13.3529
  },
  {
    id: 1332,
    zipCode: '10783',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4964,
    longitude: 13.3624
  },
  {
    id: 1333,
    zipCode: '10785',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5073,
    longitude: 13.3643
  },
  {
    id: 1334,
    zipCode: '10787',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5078,
    longitude: 13.3439
  },
  {
    id: 1335,
    zipCode: '10789',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5017,
    longitude: 13.3377
  },
  {
    id: 1336,
    zipCode: '10823',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4873,
    longitude: 13.3509
  },
  {
    id: 1337,
    zipCode: '10825',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4838,
    longitude: 13.3413
  },
  {
    id: 1338,
    zipCode: '10827',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4838,
    longitude: 13.3543
  },
  {
    id: 1339,
    zipCode: '10829',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4761,
    longitude: 13.3607
  },
  {
    id: 1340,
    zipCode: '10961',
    city: 'Berlin Kreuzberg',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4926,
    longitude: 13.3975
  },
  {
    id: 1341,
    zipCode: '10963',
    city: 'Berlin Kreuzberg',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5003,
    longitude: 13.3813
  },
  {
    id: 1342,
    zipCode: '10965',
    city: 'Berlin Kreuzberg',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4855,
    longitude: 13.3946
  },
  {
    id: 1343,
    zipCode: '10967',
    city: 'Berlin Kreuzberg',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4905,
    longitude: 13.4164
  },
  {
    id: 1344,
    zipCode: '10969',
    city: 'Berlin Kreuzberg',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5025,
    longitude: 13.4012
  },
  {
    id: 1345,
    zipCode: '10997',
    city: 'Berlin Kreuzberg',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5009,
    longitude: 13.4356
  },
  {
    id: 1346,
    zipCode: '10999',
    city: 'Berlin Kreuzberg',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4969,
    longitude: 13.4266
  },
  {
    id: 1347,
    zipCode: '11011',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5179,
    longitude: 13.3759
  },
  {
    id: 1348,
    zipCode: '12043',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4799,
    longitude: 13.4371
  },
  {
    id: 1349,
    zipCode: '12045',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4855,
    longitude: 13.4392
  },
  {
    id: 1350,
    zipCode: '12047',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4905,
    longitude: 13.4285
  },
  {
    id: 1351,
    zipCode: '12049',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4764,
    longitude: 13.422
  },
  {
    id: 1352,
    zipCode: '12051',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4669,
    longitude: 13.4298
  },
  {
    id: 1353,
    zipCode: '12053',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4768,
    longitude: 13.4325
  },
  {
    id: 1354,
    zipCode: '12055',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4712,
    longitude: 13.4486
  },
  {
    id: 1355,
    zipCode: '12057',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4684,
    longitude: 13.4633
  },
  {
    id: 1356,
    zipCode: '12059',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4809,
    longitude: 13.4513
  },
  {
    id: 1357,
    zipCode: '12099',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4644,
    longitude: 13.4023
  },
  {
    id: 1358,
    zipCode: '12101',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4785,
    longitude: 13.3791
  },
  {
    id: 1359,
    zipCode: '12103',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4641,
    longitude: 13.3747
  },
  {
    id: 1360,
    zipCode: '12105',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4492,
    longitude: 13.3714
  },
  {
    id: 1361,
    zipCode: '12107',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4312,
    longitude: 13.3917
  },
  {
    id: 1362,
    zipCode: '12109',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4465,
    longitude: 13.3993
  },
  {
    id: 1363,
    zipCode: '12157',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4653,
    longitude: 13.3462
  },
  {
    id: 1364,
    zipCode: '12159',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4737,
    longitude: 13.3369
  },
  {
    id: 1365,
    zipCode: '12161',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4704,
    longitude: 13.327
  },
  {
    id: 1366,
    zipCode: '12163',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4626,
    longitude: 13.3185
  },
  {
    id: 1367,
    zipCode: '12165',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4557,
    longitude: 13.3148
  },
  {
    id: 1368,
    zipCode: '12167',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4486,
    longitude: 13.3338
  },
  {
    id: 1369,
    zipCode: '12169',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4548,
    longitude: 13.3435
  },
  {
    id: 1370,
    zipCode: '12203',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4444,
    longitude: 13.3096
  },
  {
    id: 1371,
    zipCode: '12205',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.434,
    longitude: 13.2945
  },
  {
    id: 1372,
    zipCode: '12207',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4199,
    longitude: 13.3133
  },
  {
    id: 1373,
    zipCode: '12209',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4179,
    longitude: 13.3291
  },
  {
    id: 1374,
    zipCode: '12247',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4395,
    longitude: 13.3462
  },
  {
    id: 1375,
    zipCode: '12249',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4264,
    longitude: 13.3518
  },
  {
    id: 1376,
    zipCode: '12277',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4134,
    longitude: 13.375
  },
  {
    id: 1377,
    zipCode: '12279',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4106,
    longitude: 13.3531
  },
  {
    id: 1378,
    zipCode: '12305',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4033,
    longitude: 13.4021
  },
  {
    id: 1379,
    zipCode: '12307',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.3886,
    longitude: 13.3907
  },
  {
    id: 1380,
    zipCode: '12309',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.3905,
    longitude: 13.4171
  },
  {
    id: 1381,
    zipCode: '12347',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4509,
    longitude: 13.4281
  },
  {
    id: 1382,
    zipCode: '12349',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4253,
    longitude: 13.4221
  },
  {
    id: 1383,
    zipCode: '12351',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4328,
    longitude: 13.4555
  },
  {
    id: 1384,
    zipCode: '12353',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4227,
    longitude: 13.4589
  },
  {
    id: 1385,
    zipCode: '12355',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.411,
    longitude: 13.4978
  },
  {
    id: 1386,
    zipCode: '12357',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4293,
    longitude: 13.4905
  },
  {
    id: 1387,
    zipCode: '12359',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4473,
    longitude: 13.4531
  },
  {
    id: 1388,
    zipCode: '12435',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4866,
    longitude: 13.4672
  },
  {
    id: 1389,
    zipCode: '12437',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4624,
    longitude: 13.4817
  },
  {
    id: 1390,
    zipCode: '12439',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4528,
    longitude: 13.5286
  },
  {
    id: 1391,
    zipCode: '12459',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4656,
    longitude: 13.528
  },
  {
    id: 1392,
    zipCode: '12487',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4437,
    longitude: 13.5052
  },
  {
    id: 1393,
    zipCode: '12489',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4356,
    longitude: 13.5432
  },
  {
    id: 1394,
    zipCode: '12524',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4128,
    longitude: 13.5417
  },
  {
    id: 1395,
    zipCode: '12526',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.3976,
    longitude: 13.5642
  },
  {
    id: 1396,
    zipCode: '12527',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.3856,
    longitude: 13.6339
  },
  {
    id: 1397,
    zipCode: '12529',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5167,
    longitude: 13.4
  },
  {
    id: 1398,
    zipCode: '12555',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4627,
    longitude: 13.5791
  },
  {
    id: 1399,
    zipCode: '12557',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4303,
    longitude: 13.592
  },
  {
    id: 1400,
    zipCode: '12559',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4149,
    longitude: 13.6634
  },
  {
    id: 1401,
    zipCode: '12587',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4586,
    longitude: 13.6362
  },
  {
    id: 1402,
    zipCode: '12589',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4438,
    longitude: 13.7034
  },
  {
    id: 1403,
    zipCode: '12619',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5235,
    longitude: 13.5883
  },
  {
    id: 1404,
    zipCode: '12621',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5027,
    longitude: 13.5878
  },
  {
    id: 1405,
    zipCode: '12623',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5026,
    longitude: 13.6165
  },
  {
    id: 1406,
    zipCode: '12627',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5372,
    longitude: 13.6135
  },
  {
    id: 1407,
    zipCode: '12629',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5413,
    longitude: 13.5901
  },
  {
    id: 1408,
    zipCode: '12679',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5501,
    longitude: 13.566
  },
  {
    id: 1409,
    zipCode: '12681',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5369,
    longitude: 13.5367
  },
  {
    id: 1410,
    zipCode: '12683',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5075,
    longitude: 13.5591
  },
  {
    id: 1411,
    zipCode: '12685',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5391,
    longitude: 13.565
  },
  {
    id: 1412,
    zipCode: '12687',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5564,
    longitude: 13.5645
  },
  {
    id: 1413,
    zipCode: '12689',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5665,
    longitude: 13.5675
  },
  {
    id: 1414,
    zipCode: '13047',
    city: 'Reinickendorf',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5667,
    longitude: 13.3333
  },
  {
    id: 1415,
    zipCode: '13051',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5815,
    longitude: 13.4908
  },
  {
    id: 1416,
    zipCode: '13053',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.55,
    longitude: 13.5046
  },
  {
    id: 1417,
    zipCode: '13055',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5401,
    longitude: 13.496
  },
  {
    id: 1418,
    zipCode: '13057',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5711,
    longitude: 13.5415
  },
  {
    id: 1419,
    zipCode: '13059',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5809,
    longitude: 13.5217
  },
  {
    id: 1420,
    zipCode: '13086',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5565,
    longitude: 13.4482
  },
  {
    id: 1421,
    zipCode: '13088',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5603,
    longitude: 13.4708
  },
  {
    id: 1422,
    zipCode: '13089',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5707,
    longitude: 13.441
  },
  {
    id: 1423,
    zipCode: '13125',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.6329,
    longitude: 13.4829
  },
  {
    id: 1424,
    zipCode: '13127',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.62,
    longitude: 13.438
  },
  {
    id: 1425,
    zipCode: '13129',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5921,
    longitude: 13.4579
  },
  {
    id: 1426,
    zipCode: '13156',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5824,
    longitude: 13.3997
  },
  {
    id: 1427,
    zipCode: '13158',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5932,
    longitude: 13.3835
  },
  {
    id: 1428,
    zipCode: '13159',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.623,
    longitude: 13.3978
  },
  {
    id: 1429,
    zipCode: '13187',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5695,
    longitude: 13.4084
  },
  {
    id: 1430,
    zipCode: '13189',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5643,
    longitude: 13.4219
  },
  {
    id: 1431,
    zipCode: '13347',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5491,
    longitude: 13.3655
  },
  {
    id: 1432,
    zipCode: '13349',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.558,
    longitude: 13.3473
  },
  {
    id: 1433,
    zipCode: '13351',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5507,
    longitude: 13.3328
  },
  {
    id: 1434,
    zipCode: '13353',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5416,
    longitude: 13.3495
  },
  {
    id: 1435,
    zipCode: '13355',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5416,
    longitude: 13.3904
  },
  {
    id: 1436,
    zipCode: '13357',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5502,
    longitude: 13.3828
  },
  {
    id: 1437,
    zipCode: '13359',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5599,
    longitude: 13.3851
  },
  {
    id: 1438,
    zipCode: '13403',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5739,
    longitude: 13.3224
  },
  {
    id: 1439,
    zipCode: '13405',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5596,
    longitude: 13.2967
  },
  {
    id: 1440,
    zipCode: '13407',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5727,
    longitude: 13.3512
  },
  {
    id: 1441,
    zipCode: '13409',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5679,
    longitude: 13.3714
  },
  {
    id: 1442,
    zipCode: '13435',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.602,
    longitude: 13.3456
  },
  {
    id: 1443,
    zipCode: '13437',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5905,
    longitude: 13.3284
  },
  {
    id: 1444,
    zipCode: '13439',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5976,
    longitude: 13.3584
  },
  {
    id: 1445,
    zipCode: '13465',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.6399,
    longitude: 13.2896
  },
  {
    id: 1446,
    zipCode: '13467',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.6171,
    longitude: 13.3075
  },
  {
    id: 1447,
    zipCode: '13469',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.6119,
    longitude: 13.3422
  },
  {
    id: 1448,
    zipCode: '13503',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.6122,
    longitude: 13.2488
  },
  {
    id: 1449,
    zipCode: '13505',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5839,
    longitude: 13.2404
  },
  {
    id: 1450,
    zipCode: '13507',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5765,
    longitude: 13.2717
  },
  {
    id: 1451,
    zipCode: '13509',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5892,
    longitude: 13.3006
  },
  {
    id: 1452,
    zipCode: '13581',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.531,
    longitude: 13.1794
  },
  {
    id: 1453,
    zipCode: '13583',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5437,
    longitude: 13.1824
  },
  {
    id: 1454,
    zipCode: '13585',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5477,
    longitude: 13.2049
  },
  {
    id: 1455,
    zipCode: '13587',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5767,
    longitude: 13.1854
  },
  {
    id: 1456,
    zipCode: '13589',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.557,
    longitude: 13.1676
  },
  {
    id: 1457,
    zipCode: '13591',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5345,
    longitude: 13.1405
  },
  {
    id: 1458,
    zipCode: '13593',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5148,
    longitude: 13.1672
  },
  {
    id: 1459,
    zipCode: '13595',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5116,
    longitude: 13.1962
  },
  {
    id: 1460,
    zipCode: '13597',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5272,
    longitude: 13.2195
  },
  {
    id: 1461,
    zipCode: '13599',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5463,
    longitude: 13.235
  },
  {
    id: 1462,
    zipCode: '13627',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5398,
    longitude: 13.2991
  },
  {
    id: 1463,
    zipCode: '13629',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5422,
    longitude: 13.2661
  },
  {
    id: 1464,
    zipCode: '14050',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5208,
    longitude: 13.2683
  },
  {
    id: 1465,
    zipCode: '14052',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5156,
    longitude: 13.2569
  },
  {
    id: 1466,
    zipCode: '14053',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5159,
    longitude: 13.2387
  },
  {
    id: 1467,
    zipCode: '14055',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.502,
    longitude: 13.2447
  },
  {
    id: 1468,
    zipCode: '14057',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5073,
    longitude: 13.2879
  },
  {
    id: 1469,
    zipCode: '14059',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.5205,
    longitude: 13.2878
  },
  {
    id: 1470,
    zipCode: '14089',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4708,
    longitude: 13.1516
  },
  {
    id: 1471,
    zipCode: '14109',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4197,
    longitude: 13.144
  },
  {
    id: 1472,
    zipCode: '14129',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4463,
    longitude: 13.2026
  },
  {
    id: 1473,
    zipCode: '14131',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.517,
    longitude: 13.4
  },
  {
    id: 1474,
    zipCode: '14163',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4368,
    longitude: 13.2385
  },
  {
    id: 1475,
    zipCode: '14165',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4175,
    longitude: 13.2536
  },
  {
    id: 1476,
    zipCode: '14167',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4212,
    longitude: 13.2765
  },
  {
    id: 1477,
    zipCode: '14169',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4496,
    longitude: 13.2573
  },
  {
    id: 1478,
    zipCode: '14193',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4831,
    longitude: 13.2365
  },
  {
    id: 1479,
    zipCode: '14195',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4589,
    longitude: 13.2829
  },
  {
    id: 1480,
    zipCode: '14197',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4734,
    longitude: 13.3118
  },
  {
    id: 1481,
    zipCode: '14199',
    city: 'Berlin',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4777,
    longitude: 13.2951
  },
  {
    id: 1482,
    zipCode: '15537',
    city: 'Gosen',
    state: 'Berlin',
    community: 'Berlin, Stadt',
    latitude: 52.4,
    longitude: 13.7167
  },
  {
    id: 1483,
    zipCode: '70173',
    city: 'Stuttgart Stuttgart-Mitte',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7786,
    longitude: 9.1767
  },
  {
    id: 1484,
    zipCode: '70173',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1485,
    zipCode: '70174',
    city: 'Stuttgart Stuttgart-Nord',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7978,
    longitude: 9.1921
  },
  {
    id: 1486,
    zipCode: '70174',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1487,
    zipCode: '70174',
    city: 'Stuttgart Stuttgart-Mitte',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7827,
    longitude: 9.172
  },
  {
    id: 1488,
    zipCode: '70176',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1489,
    zipCode: '70176',
    city: 'Stuttgart Stuttgart-Mitte',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7752,
    longitude: 9.1585
  },
  {
    id: 1490,
    zipCode: '70176',
    city: 'Stuttgart Stuttgart-West',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7736,
    longitude: 9.1641
  },
  {
    id: 1491,
    zipCode: '70178',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1492,
    zipCode: '70178',
    city: 'Stuttgart Stuttgart-Mitte',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7728,
    longitude: 9.1731
  },
  {
    id: 1493,
    zipCode: '70178',
    city: 'Stuttgart Stuttgart-West',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7736,
    longitude: 9.1641
  },
  {
    id: 1494,
    zipCode: '70178',
    city: 'Stuttgart Stuttgart-S\u00fcd',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7644,
    longitude: 9.1678
  },
  {
    id: 1495,
    zipCode: '70180',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1496,
    zipCode: '70180',
    city: 'Stuttgart Stuttgart-S\u00fcd',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7644,
    longitude: 9.1678
  },
  {
    id: 1497,
    zipCode: '70180',
    city: 'Stuttgart Stuttgart-Mitte',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7649,
    longitude: 9.1762
  },
  {
    id: 1498,
    zipCode: '70182',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1499,
    zipCode: '70182',
    city: 'Stuttgart Stuttgart-Mitte',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7745,
    longitude: 9.1821
  },
  {
    id: 1500,
    zipCode: '70184',
    city: 'Stuttgart Stuttgart-Ost',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7819,
    longitude: 9.2079
  },
  {
    id: 1501,
    zipCode: '70184',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1502,
    zipCode: '70184',
    city: 'Stuttgart Stuttgart-Mitte',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7759,
    longitude: 9.1798
  },
  {
    id: 1503,
    zipCode: '70184',
    city: 'Stuttgart Frauenkopf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7607,
    longitude: 9.2218
  },
  {
    id: 1504,
    zipCode: '70184',
    city: 'Stuttgart Stuttgart-S\u00fcd',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7644,
    longitude: 9.1678
  },
  {
    id: 1505,
    zipCode: '70186',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1506,
    zipCode: '70186',
    city: 'Stuttgart Stuttgart-Ost',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7718,
    longitude: 9.2042
  },
  {
    id: 1507,
    zipCode: '70188',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1508,
    zipCode: '70188',
    city: 'Stuttgart Stuttgart-Mitte',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7835,
    longitude: 9.2112
  },
  {
    id: 1509,
    zipCode: '70188',
    city: 'Stuttgart Stuttgart-Ost',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7819,
    longitude: 9.2079
  },
  {
    id: 1510,
    zipCode: '70190',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1511,
    zipCode: '70190',
    city: 'Stuttgart Stuttgart-Mitte',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7887,
    longitude: 9.2019
  },
  {
    id: 1512,
    zipCode: '70190',
    city: 'Stuttgart Stuttgart-Ost',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7819,
    longitude: 9.2079
  },
  {
    id: 1513,
    zipCode: '70191',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1514,
    zipCode: '70191',
    city: 'Stuttgart Stuttgart-Nord',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7974,
    longitude: 9.1823
  },
  {
    id: 1515,
    zipCode: '70191',
    city: 'Stuttgart Bad Cannstatt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8056,
    longitude: 9.2141
  },
  {
    id: 1516,
    zipCode: '70192',
    city: 'Stuttgart Feuerbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8113,
    longitude: 9.1588
  },
  {
    id: 1517,
    zipCode: '70192',
    city: 'Stuttgart Stuttgart-Nord',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7978,
    longitude: 9.1921
  },
  {
    id: 1518,
    zipCode: '70192',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1519,
    zipCode: '70193',
    city: 'Stuttgart Stuttgart-West',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7736,
    longitude: 9.1641
  },
  {
    id: 1520,
    zipCode: '70193',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1521,
    zipCode: '70193',
    city: 'Stuttgart Stuttgart-Nord',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7784,
    longitude: 9.1557
  },
  {
    id: 1522,
    zipCode: '70195',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1523,
    zipCode: '70195',
    city: 'Stuttgart Botnang',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7762,
    longitude: 9.1304
  },
  {
    id: 1524,
    zipCode: '70197',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1525,
    zipCode: '70197',
    city: 'Stuttgart Stuttgart-West',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.767,
    longitude: 9.1485
  },
  {
    id: 1526,
    zipCode: '70199',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1527,
    zipCode: '70199',
    city: 'Stuttgart Stuttgart-West',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7582,
    longitude: 9.1509
  },
  {
    id: 1528,
    zipCode: '70199',
    city: 'Stuttgart Stuttgart-S\u00fcd',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7644,
    longitude: 9.1678
  },
  {
    id: 1529,
    zipCode: '70327',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1530,
    zipCode: '70327',
    city: 'Stuttgart Rotenberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7833,
    longitude: 9.2715
  },
  {
    id: 1531,
    zipCode: '70327',
    city: 'Stuttgart Untert\u00fcrkheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7802,
    longitude: 9.2509
  },
  {
    id: 1532,
    zipCode: '70327',
    city: 'Stuttgart Luginsland',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7931,
    longitude: 9.2579
  },
  {
    id: 1533,
    zipCode: '70327',
    city: 'Stuttgart Stuttgart-Ost',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7726,
    longitude: 9.2444
  },
  {
    id: 1534,
    zipCode: '70327',
    city: 'Stuttgart Hedelfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7586,
    longitude: 9.2557
  },
  {
    id: 1535,
    zipCode: '70327',
    city: 'Stuttgart Wangen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7687,
    longitude: 9.2478
  },
  {
    id: 1536,
    zipCode: '70329',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1537,
    zipCode: '70329',
    city: 'Stuttgart Rohracker',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7618,
    longitude: 9.2619
  },
  {
    id: 1538,
    zipCode: '70329',
    city: 'Stuttgart Obert\u00fcrkheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7646,
    longitude: 9.2683
  },
  {
    id: 1539,
    zipCode: '70329',
    city: 'Stuttgart Uhlbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7762,
    longitude: 9.2788
  },
  {
    id: 1540,
    zipCode: '70372',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8026,
    longitude: 9.2177
  },
  {
    id: 1541,
    zipCode: '70372',
    city: 'Stuttgart Bad Cannstatt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8056,
    longitude: 9.2141
  },
  {
    id: 1542,
    zipCode: '70374',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1543,
    zipCode: '70374',
    city: 'Stuttgart Sommerrain',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8106,
    longitude: 9.2367
  },
  {
    id: 1544,
    zipCode: '70374',
    city: 'Stuttgart Bad Cannstatt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8056,
    longitude: 9.2141
  },
  {
    id: 1545,
    zipCode: '70376',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1546,
    zipCode: '70376',
    city: 'Stuttgart M\u00fcnster',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8213,
    longitude: 9.22
  },
  {
    id: 1547,
    zipCode: '70376',
    city: 'Stuttgart Bad Cannstatt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8056,
    longitude: 9.2141
  },
  {
    id: 1548,
    zipCode: '70376',
    city: 'Stuttgart Burgholzhof',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8137,
    longitude: 9.2125
  },
  {
    id: 1549,
    zipCode: '70378',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.837,
    longitude: 9.227
  },
  {
    id: 1550,
    zipCode: '70435',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1551,
    zipCode: '70435',
    city: 'Stuttgart Zuffenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8334,
    longitude: 9.1656
  },
  {
    id: 1552,
    zipCode: '70437',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1553,
    zipCode: '70437',
    city: 'Stuttgart M\u00f6nchfeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8424,
    longitude: 9.2192
  },
  {
    id: 1554,
    zipCode: '70437',
    city: 'Stuttgart Freiberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8363,
    longitude: 9.2049
  },
  {
    id: 1555,
    zipCode: '70437',
    city: 'Stuttgart Zazenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8409,
    longitude: 9.1928
  },
  {
    id: 1556,
    zipCode: '70437',
    city: 'Stuttgart Zuffenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8353,
    longitude: 9.1938
  },
  {
    id: 1557,
    zipCode: '70437',
    city: 'Stuttgart Rot',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8341,
    longitude: 9.1927
  },
  {
    id: 1558,
    zipCode: '70439',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1559,
    zipCode: '70439',
    city: 'Stuttgart Neuwirtshaus',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8357,
    longitude: 9.1424
  },
  {
    id: 1560,
    zipCode: '70439',
    city: 'Stuttgart Stammheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8493,
    longitude: 9.156
  },
  {
    id: 1561,
    zipCode: '70439',
    city: 'Stuttgart Zuffenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8413,
    longitude: 9.1525
  },
  {
    id: 1562,
    zipCode: '70469',
    city: 'Stuttgart Feuerbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8098,
    longitude: 9.1612
  },
  {
    id: 1563,
    zipCode: '70469',
    city: 'Stuttgart Zuffenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8141,
    longitude: 9.1675
  },
  {
    id: 1564,
    zipCode: '70469',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1565,
    zipCode: '70499',
    city: 'Stuttgart Zuffenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8323,
    longitude: 9.1685
  },
  {
    id: 1566,
    zipCode: '70499',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1567,
    zipCode: '70499',
    city: 'Stuttgart Giebel',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8067,
    longitude: 9.0891
  },
  {
    id: 1568,
    zipCode: '70499',
    city: 'Stuttgart Wolfbusch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8125,
    longitude: 9.1119
  },
  {
    id: 1569,
    zipCode: '70499',
    city: 'Stuttgart Bergheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8013,
    longitude: 9.0897
  },
  {
    id: 1570,
    zipCode: '70499',
    city: 'Stuttgart Hausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8151,
    longitude: 9.0829
  },
  {
    id: 1571,
    zipCode: '70499',
    city: 'Stuttgart Weilimdorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.8143,
    longitude: 9.1123
  },
  {
    id: 1572,
    zipCode: '70563',
    city: 'Stuttgart M\u00f6hringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7258,
    longitude: 9.1464
  },
  {
    id: 1573,
    zipCode: '70563',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1574,
    zipCode: '70563',
    city: 'Stuttgart Vaihingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7294,
    longitude: 9.103
  },
  {
    id: 1575,
    zipCode: '70565',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1576,
    zipCode: '70565',
    city: 'Stuttgart Rohr',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7172,
    longitude: 9.106
  },
  {
    id: 1577,
    zipCode: '70565',
    city: 'Stuttgart M\u00f6hringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7258,
    longitude: 9.1464
  },
  {
    id: 1578,
    zipCode: '70565',
    city: 'Stuttgart Vaihingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7249,
    longitude: 9.1247
  },
  {
    id: 1579,
    zipCode: '70565',
    city: 'Stuttgart D\u00fcrrlewang',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7195,
    longitude: 9.1181
  },
  {
    id: 1580,
    zipCode: '70565',
    city: 'Stuttgart Fasanenhof',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7124,
    longitude: 9.1509
  },
  {
    id: 1581,
    zipCode: '70567',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1582,
    zipCode: '70567',
    city: 'Stuttgart Degerloch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7237,
    longitude: 9.1534
  },
  {
    id: 1583,
    zipCode: '70567',
    city: 'Stuttgart M\u00f6hringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7258,
    longitude: 9.1464
  },
  {
    id: 1584,
    zipCode: '70569',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1585,
    zipCode: '70569',
    city: 'Stuttgart Vaihingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7301,
    longitude: 9.1097
  },
  {
    id: 1586,
    zipCode: '70569',
    city: 'Stuttgart B\u00fcsnau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7506,
    longitude: 9.0798
  },
  {
    id: 1587,
    zipCode: '70569',
    city: 'Stuttgart Kaltental',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7383,
    longitude: 9.1293
  },
  {
    id: 1588,
    zipCode: '70597',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1589,
    zipCode: '70597',
    city: 'Stuttgart Hoffeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7425,
    longitude: 9.1739
  },
  {
    id: 1590,
    zipCode: '70597',
    city: 'Stuttgart Degerloch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7496,
    longitude: 9.1703
  },
  {
    id: 1591,
    zipCode: '70597',
    city: 'Stuttgart Sonnenberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7446,
    longitude: 9.1552
  },
  {
    id: 1592,
    zipCode: '70597',
    city: 'Stuttgart M\u00f6hringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7258,
    longitude: 9.1464
  },
  {
    id: 1593,
    zipCode: '70597',
    city: 'Stuttgart Kaltental',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7383,
    longitude: 9.1293
  },
  {
    id: 1594,
    zipCode: '70599',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1595,
    zipCode: '70599',
    city: 'Stuttgart Asemwald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.726,
    longitude: 9.1932
  },
  {
    id: 1596,
    zipCode: '70599',
    city: 'Stuttgart Birkach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7082,
    longitude: 9.2108
  },
  {
    id: 1597,
    zipCode: '70599',
    city: 'Stuttgart Plieningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.701,
    longitude: 9.2107
  },
  {
    id: 1598,
    zipCode: '70599',
    city: 'Stuttgart Steckfeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7153,
    longitude: 9.2014
  },
  {
    id: 1599,
    zipCode: '70599',
    city: 'Stuttgart Sch\u00f6nberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7325,
    longitude: 9.2001
  },
  {
    id: 1600,
    zipCode: '70599',
    city: 'Stuttgart Hohenheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7118,
    longitude: 9.2113
  },
  {
    id: 1601,
    zipCode: '70619',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1602,
    zipCode: '70619',
    city: 'Stuttgart Lederberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7532,
    longitude: 9.243
  },
  {
    id: 1603,
    zipCode: '70619',
    city: 'Stuttgart Heumaden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7463,
    longitude: 9.2376
  },
  {
    id: 1604,
    zipCode: '70619',
    city: 'Stuttgart Riedenberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.736,
    longitude: 9.2134
  },
  {
    id: 1605,
    zipCode: '70619',
    city: 'Stuttgart Sillenbuch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7474,
    longitude: 9.2074
  },
  {
    id: 1606,
    zipCode: '70629',
    city: 'Stuttgart',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.7667,
    longitude: 9.1833
  },
  {
    id: 1607,
    zipCode: '70629',
    city: 'Stuttgart Flughafen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Stuttgart',
    latitude: 48.6836,
    longitude: 9.2121
  },
  {
    id: 1608,
    zipCode: '70734',
    city: 'Fellbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.8086,
    longitude: 9.2792
  },
  {
    id: 1609,
    zipCode: '70736',
    city: 'Fellbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.8239,
    longitude: 9.272
  },
  {
    id: 1610,
    zipCode: '70771',
    city: 'Leinfelden-Echterdingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6941,
    longitude: 9.1681
  },
  {
    id: 1611,
    zipCode: '70794',
    city: 'Filderstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.657,
    longitude: 9.2205
  },
  {
    id: 1612,
    zipCode: '70806',
    city: 'Kornwestheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.8616,
    longitude: 9.1857
  },
  {
    id: 1613,
    zipCode: '70825',
    city: 'Korntal-M\u00fcnchingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.8167,
    longitude: 9.1167
  },
  {
    id: 1614,
    zipCode: '70839',
    city: 'Gerlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.7995,
    longitude: 9.0632
  },
  {
    id: 1615,
    zipCode: '71032',
    city: 'B\u00f6blingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.6821,
    longitude: 9.0117
  },
  {
    id: 1616,
    zipCode: '71034',
    city: 'B\u00f6blingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.6902,
    longitude: 8.9705
  },
  {
    id: 1617,
    zipCode: '71063',
    city: 'Sindelfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.7094,
    longitude: 8.9988
  },
  {
    id: 1618,
    zipCode: '71065',
    city: 'Sindelfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.7023,
    longitude: 9.0219
  },
  {
    id: 1619,
    zipCode: '71067',
    city: 'Sindelfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.7233,
    longitude: 9.0077
  },
  {
    id: 1620,
    zipCode: '71069',
    city: 'Sindelfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.7172,
    longitude: 8.9684
  },
  {
    id: 1621,
    zipCode: '71083',
    city: 'Herrenberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.5952,
    longitude: 8.8665
  },
  {
    id: 1622,
    zipCode: '71088',
    city: 'Holzgerlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.6397,
    longitude: 9.0115
  },
  {
    id: 1623,
    zipCode: '71093',
    city: 'Weil im Sch\u00f6nbuch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.6227,
    longitude: 9.0635
  },
  {
    id: 1624,
    zipCode: '71101',
    city: 'Sch\u00f6naich',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.6587,
    longitude: 9.0601
  },
  {
    id: 1625,
    zipCode: '71106',
    city: 'Magstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.7447,
    longitude: 8.9668
  },
  {
    id: 1626,
    zipCode: '71111',
    city: 'Waldenbuch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.6383,
    longitude: 9.1326
  },
  {
    id: 1627,
    zipCode: '71116',
    city: 'G\u00e4rtringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.6418,
    longitude: 8.9007
  },
  {
    id: 1628,
    zipCode: '71120',
    city: 'Grafenau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.7083,
    longitude: 8.9183
  },
  {
    id: 1629,
    zipCode: '71126',
    city: 'G\u00e4ufelden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.55,
    longitude: 8.8167
  },
  {
    id: 1630,
    zipCode: '71131',
    city: 'Jettingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.575,
    longitude: 8.7865
  },
  {
    id: 1631,
    zipCode: '71134',
    city: 'Aidlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.6785,
    longitude: 8.8952
  },
  {
    id: 1632,
    zipCode: '71139',
    city: 'Ehningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.6588,
    longitude: 8.9412
  },
  {
    id: 1633,
    zipCode: '71144',
    city: 'Steinenbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.6667,
    longitude: 9.1167
  },
  {
    id: 1634,
    zipCode: '71149',
    city: 'Bondorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.5206,
    longitude: 8.837
  },
  {
    id: 1635,
    zipCode: '71154',
    city: 'Nufringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.6225,
    longitude: 8.8901
  },
  {
    id: 1636,
    zipCode: '71155',
    city: 'Altdorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.6311,
    longitude: 8.9963
  },
  {
    id: 1637,
    zipCode: '71157',
    city: 'Hildrizhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.6242,
    longitude: 8.966
  },
  {
    id: 1638,
    zipCode: '71159',
    city: 'M\u00f6tzingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.5332,
    longitude: 8.7745
  },
  {
    id: 1639,
    zipCode: '71229',
    city: 'Leonberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.8,
    longitude: 9.0167
  },
  {
    id: 1640,
    zipCode: '71254',
    city: 'Ditzingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.8267,
    longitude: 9.067
  },
  {
    id: 1641,
    zipCode: '71263',
    city: 'Weil der Stadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.7495,
    longitude: 8.8718
  },
  {
    id: 1642,
    zipCode: '71272',
    city: 'Renningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.7697,
    longitude: 8.9387
  },
  {
    id: 1643,
    zipCode: '71277',
    city: 'Rutesheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.8081,
    longitude: 8.9454
  },
  {
    id: 1644,
    zipCode: '71282',
    city: 'Hemmingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.8667,
    longitude: 9.0333
  },
  {
    id: 1645,
    zipCode: '71287',
    city: 'Weissach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.8469,
    longitude: 8.9283
  },
  {
    id: 1646,
    zipCode: '71332',
    city: 'Waiblingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.8285,
    longitude: 9.3131
  },
  {
    id: 1647,
    zipCode: '71334',
    city: 'Waiblingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.843,
    longitude: 9.31
  },
  {
    id: 1648,
    zipCode: '71336',
    city: 'Waiblingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.8333,
    longitude: 9.3
  },
  {
    id: 1649,
    zipCode: '71364',
    city: 'Winnenden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.8756,
    longitude: 9.3982
  },
  {
    id: 1650,
    zipCode: '71384',
    city: 'Weinstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.8092,
    longitude: 9.3774
  },
  {
    id: 1651,
    zipCode: '71394',
    city: 'Kernen im Remstal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.8075,
    longitude: 9.3224
  },
  {
    id: 1652,
    zipCode: '71397',
    city: 'Leutenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.8879,
    longitude: 9.3927
  },
  {
    id: 1653,
    zipCode: '71404',
    city: 'Korb',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.843,
    longitude: 9.3626
  },
  {
    id: 1654,
    zipCode: '71409',
    city: 'Schwaikheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.8773,
    longitude: 9.3496
  },
  {
    id: 1655,
    zipCode: '71522',
    city: 'Backnang',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.9474,
    longitude: 9.4372
  },
  {
    id: 1656,
    zipCode: '71540',
    city: 'Murrhardt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.9819,
    longitude: 9.5705
  },
  {
    id: 1657,
    zipCode: '71543',
    city: 'Beilstein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.0394,
    longitude: 9.315
  },
  {
    id: 1658,
    zipCode: '71543',
    city: 'W\u00fcstenrot',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.0808,
    longitude: 9.4606
  },
  {
    id: 1659,
    zipCode: '71546',
    city: 'Aspach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.9667,
    longitude: 9.4
  },
  {
    id: 1660,
    zipCode: '71549',
    city: 'Auenwald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.9333,
    longitude: 9.5
  },
  {
    id: 1661,
    zipCode: '71554',
    city: 'Weissach im Tal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.9301,
    longitude: 9.4769
  },
  {
    id: 1662,
    zipCode: '71560',
    city: 'Sulzbach an der Murr',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 49.003,
    longitude: 9.5003
  },
  {
    id: 1663,
    zipCode: '71563',
    city: 'Affalterbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9227,
    longitude: 9.3236
  },
  {
    id: 1664,
    zipCode: '71566',
    city: 'Alth\u00fctte',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.9156,
    longitude: 9.5698
  },
  {
    id: 1665,
    zipCode: '71570',
    city: 'Oppenweiler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.9827,
    longitude: 9.4585
  },
  {
    id: 1666,
    zipCode: '71573',
    city: 'Allmersbach im Tal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.9066,
    longitude: 9.4682
  },
  {
    id: 1667,
    zipCode: '71576',
    city: 'Burgstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.9281,
    longitude: 9.3724
  },
  {
    id: 1668,
    zipCode: '71577',
    city: 'Gro\u00dferlach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 49.0537,
    longitude: 9.5136
  },
  {
    id: 1669,
    zipCode: '71579',
    city: 'Spiegelberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 49.0408,
    longitude: 9.4444
  },
  {
    id: 1670,
    zipCode: '71634',
    city: 'Ludwigsburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9076,
    longitude: 9.1776
  },
  {
    id: 1671,
    zipCode: '71636',
    city: 'Ludwigsburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.8901,
    longitude: 9.1746
  },
  {
    id: 1672,
    zipCode: '71638',
    city: 'Ludwigsburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.8909,
    longitude: 9.1898
  },
  {
    id: 1673,
    zipCode: '71640',
    city: 'Ludwigsburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.8924,
    longitude: 9.218
  },
  {
    id: 1674,
    zipCode: '71642',
    city: 'Ludwigsburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.907,
    longitude: 9.2174
  },
  {
    id: 1675,
    zipCode: '71665',
    city: 'Vaihingen an der Enz',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9356,
    longitude: 8.9604
  },
  {
    id: 1676,
    zipCode: '71672',
    city: 'Marbach am Neckar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.97,
    longitude: 9.3286
  },
  {
    id: 1677,
    zipCode: '71679',
    city: 'Asperg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9053,
    longitude: 9.135
  },
  {
    id: 1678,
    zipCode: '71686',
    city: 'Remseck am Neckar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.8783,
    longitude: 9.2673
  },
  {
    id: 1679,
    zipCode: '71691',
    city: 'Freiberg am Neckar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.932,
    longitude: 9.2024
  },
  {
    id: 1680,
    zipCode: '71696',
    city: 'M\u00f6glingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.8874,
    longitude: 9.1269
  },
  {
    id: 1681,
    zipCode: '71701',
    city: 'Schwieberdingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.8764,
    longitude: 9.0744
  },
  {
    id: 1682,
    zipCode: '71706',
    city: 'Markgr\u00f6ningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9049,
    longitude: 9.0806
  },
  {
    id: 1683,
    zipCode: '71711',
    city: 'Murr',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9621,
    longitude: 9.2592
  },
  {
    id: 1684,
    zipCode: '71711',
    city: 'Steinheim an der Murr',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9639,
    longitude: 9.283
  },
  {
    id: 1685,
    zipCode: '71717',
    city: 'Beilstein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.0394,
    longitude: 9.315
  },
  {
    id: 1686,
    zipCode: '71718',
    city: 'Billensbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.0621,
    longitude: 9.367
  },
  {
    id: 1687,
    zipCode: '71720',
    city: 'Oberstenfeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 49.0261,
    longitude: 9.3208
  },
  {
    id: 1688,
    zipCode: '71723',
    city: 'Gro\u00dfbottwar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 49.0015,
    longitude: 9.2935
  },
  {
    id: 1689,
    zipCode: '71726',
    city: 'Benningen am Neckar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9467,
    longitude: 9.2421
  },
  {
    id: 1690,
    zipCode: '71729',
    city: 'Erdmannhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9426,
    longitude: 9.2962
  },
  {
    id: 1691,
    zipCode: '71732',
    city: 'Tamm',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9199,
    longitude: 9.1156
  },
  {
    id: 1692,
    zipCode: '71735',
    city: 'Eberdingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.8794,
    longitude: 8.965
  },
  {
    id: 1693,
    zipCode: '71737',
    city: 'Kirchberg an der Murr',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.943,
    longitude: 9.3408
  },
  {
    id: 1694,
    zipCode: '71739',
    city: 'Oberriexingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9265,
    longitude: 9.027
  },
  {
    id: 1695,
    zipCode: '72622',
    city: 'N\u00fcrtingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6256,
    longitude: 9.342
  },
  {
    id: 1696,
    zipCode: '72631',
    city: 'Aichtal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6333,
    longitude: 9.2667
  },
  {
    id: 1697,
    zipCode: '72636',
    city: 'Frickenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.5935,
    longitude: 9.3601
  },
  {
    id: 1698,
    zipCode: '72639',
    city: 'Neuffen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.5546,
    longitude: 9.3755
  },
  {
    id: 1699,
    zipCode: '72644',
    city: 'Oberboihingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.65,
    longitude: 9.3667
  },
  {
    id: 1700,
    zipCode: '72649',
    city: 'Wolfschlugen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.65,
    longitude: 9.2833
  },
  {
    id: 1701,
    zipCode: '72654',
    city: 'Neckartenzlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.5898,
    longitude: 9.2348
  },
  {
    id: 1702,
    zipCode: '72655',
    city: 'Altdorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.5942,
    longitude: 9.2716
  },
  {
    id: 1703,
    zipCode: '72657',
    city: 'Altenriet',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.5914,
    longitude: 9.2219
  },
  {
    id: 1704,
    zipCode: '72658',
    city: 'Bempflingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.5718,
    longitude: 9.2683
  },
  {
    id: 1705,
    zipCode: '72660',
    city: 'Beuren',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.5693,
    longitude: 9.4041
  },
  {
    id: 1706,
    zipCode: '72663',
    city: 'Gro\u00dfbettlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.5905,
    longitude: 9.3078
  },
  {
    id: 1707,
    zipCode: '72664',
    city: 'Kohlberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.5584,
    longitude: 9.3358
  },
  {
    id: 1708,
    zipCode: '72666',
    city: 'Neckartailfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6117,
    longitude: 9.2637
  },
  {
    id: 1709,
    zipCode: '72667',
    city: 'Schlaitdorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6043,
    longitude: 9.2227
  },
  {
    id: 1710,
    zipCode: '72669',
    city: 'Unterensingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6545,
    longitude: 9.358
  },
  {
    id: 1711,
    zipCode: '73033',
    city: 'G\u00f6ppingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.7075,
    longitude: 9.6514
  },
  {
    id: 1712,
    zipCode: '73035',
    city: 'G\u00f6ppingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.7,
    longitude: 9.6667
  },
  {
    id: 1713,
    zipCode: '73037',
    city: 'G\u00f6ppingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6959,
    longitude: 9.6647
  },
  {
    id: 1714,
    zipCode: '73054',
    city: 'Eislingen/Fils',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6944,
    longitude: 9.7009
  },
  {
    id: 1715,
    zipCode: '73061',
    city: 'Ebersbach an der Fils',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.716,
    longitude: 9.5236
  },
  {
    id: 1716,
    zipCode: '73066',
    city: 'Uhingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.7048,
    longitude: 9.5857
  },
  {
    id: 1717,
    zipCode: '73072',
    city: 'Donzdorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6854,
    longitude: 9.8105
  },
  {
    id: 1718,
    zipCode: '73079',
    city: 'S\u00fc\u00dfen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6793,
    longitude: 9.7553
  },
  {
    id: 1719,
    zipCode: '73084',
    city: 'Salach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.692,
    longitude: 9.7371
  },
  {
    id: 1720,
    zipCode: '73087',
    city: 'Boll',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6436,
    longitude: 9.613
  },
  {
    id: 1721,
    zipCode: '73092',
    city: 'Heiningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6618,
    longitude: 9.6498
  },
  {
    id: 1722,
    zipCode: '73095',
    city: 'Albershausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6914,
    longitude: 9.5649
  },
  {
    id: 1723,
    zipCode: '73098',
    city: 'Rechberghausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.7308,
    longitude: 9.6442
  },
  {
    id: 1724,
    zipCode: '73099',
    city: 'Adelberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.7623,
    longitude: 9.5999
  },
  {
    id: 1725,
    zipCode: '73101',
    city: 'Aichelberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6356,
    longitude: 9.5637
  },
  {
    id: 1726,
    zipCode: '73102',
    city: 'Birenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.7473,
    longitude: 9.6611
  },
  {
    id: 1727,
    zipCode: '73104',
    city: 'B\u00f6rtlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.7538,
    longitude: 9.6318
  },
  {
    id: 1728,
    zipCode: '73105',
    city: 'D\u00fcrnau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6408,
    longitude: 9.6354
  },
  {
    id: 1729,
    zipCode: '73107',
    city: 'Eschenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6526,
    longitude: 9.6704
  },
  {
    id: 1730,
    zipCode: '73108',
    city: 'Gammelshausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6402,
    longitude: 9.6507
  },
  {
    id: 1731,
    zipCode: '73110',
    city: 'Hattenhofen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6665,
    longitude: 9.5746
  },
  {
    id: 1732,
    zipCode: '73111',
    city: 'Lauterstein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.7101,
    longitude: 9.8651
  },
  {
    id: 1733,
    zipCode: '73113',
    city: 'Ottenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.7365,
    longitude: 9.7484
  },
  {
    id: 1734,
    zipCode: '73114',
    city: 'Schlat',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6532,
    longitude: 9.7062
  },
  {
    id: 1735,
    zipCode: '73116',
    city: 'W\u00e4schenbeuren',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.7599,
    longitude: 9.6873
  },
  {
    id: 1736,
    zipCode: '73117',
    city: 'Wangen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.7293,
    longitude: 9.6117
  },
  {
    id: 1737,
    zipCode: '73119',
    city: 'Zell unter Aichelberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6488,
    longitude: 9.5714
  },
  {
    id: 1738,
    zipCode: '73207',
    city: 'Plochingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.7107,
    longitude: 9.4195
  },
  {
    id: 1739,
    zipCode: '73230',
    city: 'Kirchheim unter Teck',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6468,
    longitude: 9.4538
  },
  {
    id: 1740,
    zipCode: '73235',
    city: 'Weilheim an der Teck',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6157,
    longitude: 9.5375
  },
  {
    id: 1741,
    zipCode: '73240',
    city: 'Wendlingen am Neckar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6712,
    longitude: 9.3763
  },
  {
    id: 1742,
    zipCode: '73249',
    city: 'Wernau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6931,
    longitude: 9.4153
  },
  {
    id: 1743,
    zipCode: '73252',
    city: 'Lenningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.5581,
    longitude: 9.4663
  },
  {
    id: 1744,
    zipCode: '73257',
    city: 'K\u00f6ngen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6833,
    longitude: 9.3667
  },
  {
    id: 1745,
    zipCode: '73262',
    city: 'Reichenbach an der Fils',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.7101,
    longitude: 9.4643
  },
  {
    id: 1746,
    zipCode: '73265',
    city: 'Dettingen unter Teck',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6167,
    longitude: 9.45
  },
  {
    id: 1747,
    zipCode: '73266',
    city: 'Bissingen an der Teck',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.5991,
    longitude: 9.4915
  },
  {
    id: 1748,
    zipCode: '73268',
    city: 'Erkenbrechtsweiler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.5566,
    longitude: 9.4321
  },
  {
    id: 1749,
    zipCode: '73269',
    city: 'Hochdorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6928,
    longitude: 9.4649
  },
  {
    id: 1750,
    zipCode: '73271',
    city: 'Holzmaden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6333,
    longitude: 9.5167
  },
  {
    id: 1751,
    zipCode: '73272',
    city: 'Neidlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.5787,
    longitude: 9.5645
  },
  {
    id: 1752,
    zipCode: '73274',
    city: 'Notzingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6708,
    longitude: 9.4572
  },
  {
    id: 1753,
    zipCode: '73275',
    city: 'Ohmden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.646,
    longitude: 9.527
  },
  {
    id: 1754,
    zipCode: '73277',
    city: 'Owen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.5874,
    longitude: 9.4498
  },
  {
    id: 1755,
    zipCode: '73278',
    city: 'Schlierbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6736,
    longitude: 9.5181
  },
  {
    id: 1756,
    zipCode: '73312',
    city: 'Geislingen an der Steige',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6242,
    longitude: 9.8274
  },
  {
    id: 1757,
    zipCode: '73312',
    city: 'Geislingen an der Steige T\u00fcrkheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6159,
    longitude: 9.8433
  },
  {
    id: 1758,
    zipCode: '73312',
    city: 'Geislingen an der Steige Aufhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.5865,
    longitude: 9.7662
  },
  {
    id: 1759,
    zipCode: '73326',
    city: 'Deggingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.5971,
    longitude: 9.7189
  },
  {
    id: 1760,
    zipCode: '73329',
    city: 'Kuchen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6358,
    longitude: 9.7999
  },
  {
    id: 1761,
    zipCode: '73333',
    city: 'Gingen an der Fils',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6598,
    longitude: 9.7809
  },
  {
    id: 1762,
    zipCode: '73337',
    city: 'Bad \u00dcberkingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.5999,
    longitude: 9.7959
  },
  {
    id: 1763,
    zipCode: '73342',
    city: 'Bad Ditzenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.5883,
    longitude: 9.7039
  },
  {
    id: 1764,
    zipCode: '73344',
    city: 'Gruibingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.5948,
    longitude: 9.6439
  },
  {
    id: 1765,
    zipCode: '73345',
    city: 'Hohenstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.5444,
    longitude: 9.6639
  },
  {
    id: 1766,
    zipCode: '73345',
    city: 'Drackenstein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.55,
    longitude: 9.6833
  },
  {
    id: 1767,
    zipCode: '73347',
    city: 'M\u00fchlhausen im T\u00e4le',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.5667,
    longitude: 9.65
  },
  {
    id: 1768,
    zipCode: '73349',
    city: 'Wiesensteig',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.5613,
    longitude: 9.6254
  },
  {
    id: 1769,
    zipCode: '73430',
    city: 'Aalen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8409,
    longitude: 10.0931
  },
  {
    id: 1770,
    zipCode: '73431',
    city: 'Aalen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.822,
    longitude: 10.0654
  },
  {
    id: 1771,
    zipCode: '73432',
    city: 'Aalen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8333,
    longitude: 10.1
  },
  {
    id: 1772,
    zipCode: '73433',
    city: 'Aalen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8641,
    longitude: 10.1044
  },
  {
    id: 1773,
    zipCode: '73434',
    city: 'Aalen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8333,
    longitude: 10.1
  },
  {
    id: 1774,
    zipCode: '73441',
    city: 'Bopfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8585,
    longitude: 10.3542
  },
  {
    id: 1775,
    zipCode: '73447',
    city: 'Oberkochen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.7838,
    longitude: 10.1052
  },
  {
    id: 1776,
    zipCode: '73450',
    city: 'Neresheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.7551,
    longitude: 10.3304
  },
  {
    id: 1777,
    zipCode: '73453',
    city: 'Abtsgm\u00fcnd',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.895,
    longitude: 10.0017
  },
  {
    id: 1778,
    zipCode: '73457',
    city: 'Essingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8086,
    longitude: 10.0277
  },
  {
    id: 1779,
    zipCode: '73460',
    city: 'H\u00fcttlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8927,
    longitude: 10.1006
  },
  {
    id: 1780,
    zipCode: '73463',
    city: 'Westhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8833,
    longitude: 10.1833
  },
  {
    id: 1781,
    zipCode: '73466',
    city: 'Lauchheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8713,
    longitude: 10.2422
  },
  {
    id: 1782,
    zipCode: '73467',
    city: 'Kirchheim am Ries',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8792,
    longitude: 10.4003
  },
  {
    id: 1783,
    zipCode: '73469',
    city: 'Riesb\u00fcrg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.85,
    longitude: 10.4333
  },
  {
    id: 1784,
    zipCode: '73479',
    city: 'Ellwangen (Jagst)',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.9623,
    longitude: 10.1545
  },
  {
    id: 1785,
    zipCode: '73485',
    city: 'Unterschneidheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.9333,
    longitude: 10.3667
  },
  {
    id: 1786,
    zipCode: '73486',
    city: 'Adelmannsfelden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.9548,
    longitude: 10.0047
  },
  {
    id: 1787,
    zipCode: '73488',
    city: 'Ellenberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 49.0167,
    longitude: 10.2167
  },
  {
    id: 1788,
    zipCode: '73489',
    city: 'Jagstzell',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 49.0306,
    longitude: 10.0975
  },
  {
    id: 1789,
    zipCode: '73491',
    city: 'Neuler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.928,
    longitude: 10.0689
  },
  {
    id: 1790,
    zipCode: '73492',
    city: 'Rainau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.9333,
    longitude: 10.15
  },
  {
    id: 1791,
    zipCode: '73494',
    city: 'Rosenberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 49.0189,
    longitude: 10.0296
  },
  {
    id: 1792,
    zipCode: '73495',
    city: 'St\u00f6dtlen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 49.0,
    longitude: 10.3
  },
  {
    id: 1793,
    zipCode: '73497',
    city: 'Tannhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.9787,
    longitude: 10.3613
  },
  {
    id: 1794,
    zipCode: '73499',
    city: 'W\u00f6rt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 49.0305,
    longitude: 10.2724
  },
  {
    id: 1795,
    zipCode: '73525',
    city: 'Schw\u00e4bisch Gm\u00fcnd',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.7989,
    longitude: 9.7989
  },
  {
    id: 1796,
    zipCode: '73527',
    city: 'T\u00e4ferrot',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8497,
    longitude: 9.8382
  },
  {
    id: 1797,
    zipCode: '73527',
    city: 'Schw\u00e4bisch Gm\u00fcnd',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8169,
    longitude: 9.7793
  },
  {
    id: 1798,
    zipCode: '73529',
    city: 'Schw\u00e4bisch Gm\u00fcnd',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.7852,
    longitude: 9.8176
  },
  {
    id: 1799,
    zipCode: '73540',
    city: 'Heubach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.7927,
    longitude: 9.9337
  },
  {
    id: 1800,
    zipCode: '73547',
    city: 'Lorch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.7983,
    longitude: 9.6914
  },
  {
    id: 1801,
    zipCode: '73550',
    city: 'Waldstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.7661,
    longitude: 9.8213
  },
  {
    id: 1802,
    zipCode: '73553',
    city: 'Alfdorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.8438,
    longitude: 9.7186
  },
  {
    id: 1803,
    zipCode: '73557',
    city: 'Mutlangen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8259,
    longitude: 9.7971
  },
  {
    id: 1804,
    zipCode: '73560',
    city: 'B\u00f6bingen an der Rems',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8196,
    longitude: 9.9213
  },
  {
    id: 1805,
    zipCode: '73563',
    city: 'M\u00f6gglingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8232,
    longitude: 9.9625
  },
  {
    id: 1806,
    zipCode: '73565',
    city: 'Spraitbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8806,
    longitude: 9.7622
  },
  {
    id: 1807,
    zipCode: '73566',
    city: 'Bartholom\u00e4',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.7535,
    longitude: 9.9875
  },
  {
    id: 1808,
    zipCode: '73568',
    city: 'Durlangen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8563,
    longitude: 9.7965
  },
  {
    id: 1809,
    zipCode: '73569',
    city: 'Eschach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8883,
    longitude: 9.87
  },
  {
    id: 1810,
    zipCode: '73569',
    city: 'Obergr\u00f6ningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8945,
    longitude: 9.9094
  },
  {
    id: 1811,
    zipCode: '73571',
    city: 'G\u00f6ggingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8612,
    longitude: 9.884
  },
  {
    id: 1812,
    zipCode: '73572',
    city: 'Heuchlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8522,
    longitude: 9.9439
  },
  {
    id: 1813,
    zipCode: '73574',
    city: 'Iggingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8317,
    longitude: 9.8789
  },
  {
    id: 1814,
    zipCode: '73575',
    city: 'Leinzell',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8494,
    longitude: 9.8775
  },
  {
    id: 1815,
    zipCode: '73577',
    city: 'Ruppertshofen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8828,
    longitude: 9.8151
  },
  {
    id: 1816,
    zipCode: '73579',
    city: 'Schechingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.8734,
    longitude: 9.9174
  },
  {
    id: 1817,
    zipCode: '73614',
    city: 'Schorndorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.8054,
    longitude: 9.5272
  },
  {
    id: 1818,
    zipCode: '73630',
    city: 'Remshalden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.8151,
    longitude: 9.4239
  },
  {
    id: 1819,
    zipCode: '73635',
    city: 'Rudersberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.8852,
    longitude: 9.5293
  },
  {
    id: 1820,
    zipCode: '73642',
    city: 'Welzheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.8768,
    longitude: 9.6343
  },
  {
    id: 1821,
    zipCode: '73650',
    city: 'Winterbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.7992,
    longitude: 9.4791
  },
  {
    id: 1822,
    zipCode: '73655',
    city: 'Pl\u00fcderhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.7988,
    longitude: 9.5959
  },
  {
    id: 1823,
    zipCode: '73660',
    city: 'Urbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.8168,
    longitude: 9.5769
  },
  {
    id: 1824,
    zipCode: '73663',
    city: 'Berglen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.8667,
    longitude: 9.4667
  },
  {
    id: 1825,
    zipCode: '73666',
    city: 'Baltmannsweiler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.7422,
    longitude: 9.4494
  },
  {
    id: 1826,
    zipCode: '73667',
    city: 'Kaisersbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rems-Murr-Kreis',
    latitude: 48.9302,
    longitude: 9.639
  },
  {
    id: 1827,
    zipCode: '73669',
    city: 'Lichtenwald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.75,
    longitude: 9.4833
  },
  {
    id: 1828,
    zipCode: '73728',
    city: 'Esslingen am Neckar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.7394,
    longitude: 9.3061
  },
  {
    id: 1829,
    zipCode: '73730',
    city: 'Esslingen am Neckar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.7323,
    longitude: 9.3255
  },
  {
    id: 1830,
    zipCode: '73732',
    city: 'Esslingen am Neckar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.769,
    longitude: 9.3122
  },
  {
    id: 1831,
    zipCode: '73733',
    city: 'Esslingen am Neckar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.75,
    longitude: 9.3
  },
  {
    id: 1832,
    zipCode: '73734',
    city: 'Esslingen am Neckar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.7361,
    longitude: 9.2977
  },
  {
    id: 1833,
    zipCode: '73760',
    city: 'Ostfildern',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.727,
    longitude: 9.2495
  },
  {
    id: 1834,
    zipCode: '73765',
    city: 'Neuhausen auf den Fildern',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6833,
    longitude: 9.2833
  },
  {
    id: 1835,
    zipCode: '73770',
    city: 'Denkendorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.6955,
    longitude: 9.3167
  },
  {
    id: 1836,
    zipCode: '73773',
    city: 'Aichwald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.7503,
    longitude: 9.387
  },
  {
    id: 1837,
    zipCode: '73776',
    city: 'Altbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.7227,
    longitude: 9.3808
  },
  {
    id: 1838,
    zipCode: '73779',
    city: 'Deizisau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Esslingen',
    latitude: 48.7122,
    longitude: 9.3861
  },
  {
    id: 1839,
    zipCode: '74072',
    city: 'Heilbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Heilbronn',
    latitude: 49.1423,
    longitude: 9.2234
  },
  {
    id: 1840,
    zipCode: '74074',
    city: 'Heilbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Heilbronn',
    latitude: 49.1286,
    longitude: 9.2214
  },
  {
    id: 1841,
    zipCode: '74076',
    city: 'Heilbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Heilbronn',
    latitude: 49.1618,
    longitude: 9.2193
  },
  {
    id: 1842,
    zipCode: '74078',
    city: 'Heilbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Heilbronn',
    latitude: 49.1566,
    longitude: 9.1746
  },
  {
    id: 1843,
    zipCode: '74080',
    city: 'Heilbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Heilbronn',
    latitude: 49.1386,
    longitude: 9.1954
  },
  {
    id: 1844,
    zipCode: '74081',
    city: 'Heilbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Heilbronn',
    latitude: 49.1236,
    longitude: 9.197
  },
  {
    id: 1845,
    zipCode: '74172',
    city: 'Neckarsulm',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.1891,
    longitude: 9.2253
  },
  {
    id: 1846,
    zipCode: '74177',
    city: 'Bad Friedrichshall',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.2344,
    longitude: 9.2145
  },
  {
    id: 1847,
    zipCode: '74182',
    city: 'Obersulm',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.1361,
    longitude: 9.3774
  },
  {
    id: 1848,
    zipCode: '74189',
    city: 'Weinsberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.1513,
    longitude: 9.2876
  },
  {
    id: 1849,
    zipCode: '74193',
    city: 'Schwaigern',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.1449,
    longitude: 9.0553
  },
  {
    id: 1850,
    zipCode: '74196',
    city: 'Neuenstadt am Kocher',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.235,
    longitude: 9.3322
  },
  {
    id: 1851,
    zipCode: '74199',
    city: 'Untergruppenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.0894,
    longitude: 9.2752
  },
  {
    id: 1852,
    zipCode: '74206',
    city: 'Bad Wimpfen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.2297,
    longitude: 9.1565
  },
  {
    id: 1853,
    zipCode: '74211',
    city: 'Leingarten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.1464,
    longitude: 9.1169
  },
  {
    id: 1854,
    zipCode: '74214',
    city: 'Sch\u00f6ntal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Hohenlohekreis',
    latitude: 49.3524,
    longitude: 9.5088
  },
  {
    id: 1855,
    zipCode: '74219',
    city: 'M\u00f6ckm\u00fchl',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.3249,
    longitude: 9.3584
  },
  {
    id: 1856,
    zipCode: '74223',
    city: 'Flein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.1031,
    longitude: 9.2108
  },
  {
    id: 1857,
    zipCode: '74226',
    city: 'Nordheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.1086,
    longitude: 9.1278
  },
  {
    id: 1858,
    zipCode: '74229',
    city: 'Oedheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.2403,
    longitude: 9.2533
  },
  {
    id: 1859,
    zipCode: '74232',
    city: 'Abstatt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.0682,
    longitude: 9.2907
  },
  {
    id: 1860,
    zipCode: '74235',
    city: 'Erlenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.1725,
    longitude: 9.2683
  },
  {
    id: 1861,
    zipCode: '74238',
    city: 'Krautheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Hohenlohekreis',
    latitude: 49.3879,
    longitude: 9.6355
  },
  {
    id: 1862,
    zipCode: '74239',
    city: 'Hardthausen am Kocher',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.2586,
    longitude: 9.3894
  },
  {
    id: 1863,
    zipCode: '74243',
    city: 'Langenbrettach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.2169,
    longitude: 9.4049
  },
  {
    id: 1864,
    zipCode: '74245',
    city: 'L\u00f6wenstein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.0956,
    longitude: 9.38
  },
  {
    id: 1865,
    zipCode: '74246',
    city: 'Eberstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.1803,
    longitude: 9.3211
  },
  {
    id: 1866,
    zipCode: '74248',
    city: 'Ellhofen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.1467,
    longitude: 9.3219
  },
  {
    id: 1867,
    zipCode: '74249',
    city: 'Jagsthausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.3106,
    longitude: 9.4683
  },
  {
    id: 1868,
    zipCode: '74251',
    city: 'Lehrensteinsfeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.1311,
    longitude: 9.3272
  },
  {
    id: 1869,
    zipCode: '74252',
    city: 'Massenbachhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.1778,
    longitude: 9.0433
  },
  {
    id: 1870,
    zipCode: '74254',
    city: 'Offenau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.2458,
    longitude: 9.1606
  },
  {
    id: 1871,
    zipCode: '74255',
    city: 'Roigheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.3647,
    longitude: 9.34
  },
  {
    id: 1872,
    zipCode: '74257',
    city: 'Untereisesheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.2111,
    longitude: 9.2019
  },
  {
    id: 1873,
    zipCode: '74259',
    city: 'Widdern',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.3183,
    longitude: 9.4221
  },
  {
    id: 1874,
    zipCode: '74321',
    city: 'Bietigheim-Bissingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9441,
    longitude: 9.1175
  },
  {
    id: 1875,
    zipCode: '74336',
    city: 'Brackenheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.0779,
    longitude: 9.066
  },
  {
    id: 1876,
    zipCode: '74337',
    city: 'Botenheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.0651,
    longitude: 9.064
  },
  {
    id: 1877,
    zipCode: '74343',
    city: 'Sachsenheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9584,
    longitude: 9.0708
  },
  {
    id: 1878,
    zipCode: '74348',
    city: 'Lauffen am Neckar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.0734,
    longitude: 9.1457
  },
  {
    id: 1879,
    zipCode: '74354',
    city: 'Besigheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.998,
    longitude: 9.1427
  },
  {
    id: 1880,
    zipCode: '74357',
    city: 'B\u00f6nnigheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 49.0402,
    longitude: 9.0939
  },
  {
    id: 1881,
    zipCode: '74360',
    city: 'Ilsfeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.0555,
    longitude: 9.246
  },
  {
    id: 1882,
    zipCode: '74363',
    city: 'G\u00fcglingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.0664,
    longitude: 9.0017
  },
  {
    id: 1883,
    zipCode: '74366',
    city: 'Kirchheim am Neckar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 49.045,
    longitude: 9.1422
  },
  {
    id: 1884,
    zipCode: '74369',
    city: 'L\u00f6chgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 49.0036,
    longitude: 9.1064
  },
  {
    id: 1885,
    zipCode: '74372',
    city: 'Sersheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9667,
    longitude: 9.0167
  },
  {
    id: 1886,
    zipCode: '74374',
    city: 'Zaberfeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.0561,
    longitude: 8.9269
  },
  {
    id: 1887,
    zipCode: '74376',
    city: 'Gemmrigheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 49.0283,
    longitude: 9.1556
  },
  {
    id: 1888,
    zipCode: '74379',
    city: 'Ingersheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9611,
    longitude: 9.1761
  },
  {
    id: 1889,
    zipCode: '74382',
    city: 'Neckarwestheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.0469,
    longitude: 9.19
  },
  {
    id: 1890,
    zipCode: '74385',
    city: 'Pleidelsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9592,
    longitude: 9.2031
  },
  {
    id: 1891,
    zipCode: '74388',
    city: 'Talheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.0833,
    longitude: 9.1931
  },
  {
    id: 1892,
    zipCode: '74389',
    city: 'Cleebronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.045,
    longitude: 9.0369
  },
  {
    id: 1893,
    zipCode: '74391',
    city: 'Erligheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 49.0225,
    longitude: 9.0972
  },
  {
    id: 1894,
    zipCode: '74392',
    city: 'Freudental',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 49.0097,
    longitude: 9.0592
  },
  {
    id: 1895,
    zipCode: '74394',
    city: 'Hessigheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 48.9941,
    longitude: 9.1863
  },
  {
    id: 1896,
    zipCode: '74395',
    city: 'Mundelsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 49.0008,
    longitude: 9.2078
  },
  {
    id: 1897,
    zipCode: '74397',
    city: 'Pfaffenhofen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.0644,
    longitude: 8.9764
  },
  {
    id: 1898,
    zipCode: '74399',
    city: 'Walheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ludwigsburg',
    latitude: 49.0142,
    longitude: 9.1511
  },
  {
    id: 1899,
    zipCode: '74405',
    city: 'Gaildorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.0003,
    longitude: 9.7695
  },
  {
    id: 1900,
    zipCode: '74417',
    city: 'Gschwend',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ostalbkreis',
    latitude: 48.9333,
    longitude: 9.7444
  },
  {
    id: 1901,
    zipCode: '74420',
    city: 'Oberrot',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.0144,
    longitude: 9.6672
  },
  {
    id: 1902,
    zipCode: '74423',
    city: 'Obersontheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.0567,
    longitude: 9.8992
  },
  {
    id: 1903,
    zipCode: '74424',
    city: 'B\u00fchlertann',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.0417,
    longitude: 9.9086
  },
  {
    id: 1904,
    zipCode: '74426',
    city: 'B\u00fchlerzell',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.0033,
    longitude: 9.9206
  },
  {
    id: 1905,
    zipCode: '74427',
    city: 'Fichtenberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 48.986,
    longitude: 9.712
  },
  {
    id: 1906,
    zipCode: '74429',
    city: 'Sulzbach-Laufen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 48.9667,
    longitude: 9.85
  },
  {
    id: 1907,
    zipCode: '74523',
    city: 'Schw\u00e4bisch Hall',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.1113,
    longitude: 9.7391
  },
  {
    id: 1908,
    zipCode: '74532',
    city: 'Ilshofen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.1702,
    longitude: 9.9183
  },
  {
    id: 1909,
    zipCode: '74535',
    city: 'Mainhardt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.0761,
    longitude: 9.5564
  },
  {
    id: 1910,
    zipCode: '74538',
    city: 'Rosengarten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.0833,
    longitude: 9.7
  },
  {
    id: 1911,
    zipCode: '74541',
    city: 'Vellberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.0843,
    longitude: 9.8791
  },
  {
    id: 1912,
    zipCode: '74542',
    city: 'Braunsbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.1992,
    longitude: 9.7906
  },
  {
    id: 1913,
    zipCode: '74544',
    city: 'Michelbach an der Bilz',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.0703,
    longitude: 9.7625
  },
  {
    id: 1914,
    zipCode: '74545',
    city: 'Michelfeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.118,
    longitude: 9.6433
  },
  {
    id: 1915,
    zipCode: '74547',
    city: 'Unterm\u00fcnkheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.1525,
    longitude: 9.7338
  },
  {
    id: 1916,
    zipCode: '74549',
    city: 'Wolpertshausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.1675,
    longitude: 9.8447
  },
  {
    id: 1917,
    zipCode: '74564',
    city: 'Crailsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.1344,
    longitude: 10.0719
  },
  {
    id: 1918,
    zipCode: '74572',
    city: 'Blaufelden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.2978,
    longitude: 9.9739
  },
  {
    id: 1919,
    zipCode: '74575',
    city: 'Schrozberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.3453,
    longitude: 9.9794
  },
  {
    id: 1920,
    zipCode: '74579',
    city: 'Fichtenau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.0667,
    longitude: 10.2167
  },
  {
    id: 1921,
    zipCode: '74582',
    city: 'Gerabronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.2517,
    longitude: 9.9219
  },
  {
    id: 1922,
    zipCode: '74585',
    city: 'Rot am See',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.25,
    longitude: 10.0167
  },
  {
    id: 1923,
    zipCode: '74586',
    city: 'Frankenhardt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.0833,
    longitude: 9.9833
  },
  {
    id: 1924,
    zipCode: '74589',
    city: 'Satteldorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.1695,
    longitude: 10.0796
  },
  {
    id: 1925,
    zipCode: '74592',
    city: 'Kirchberg an der Jagst',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.2006,
    longitude: 9.9823
  },
  {
    id: 1926,
    zipCode: '74594',
    city: 'Kre\u00dfberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.1333,
    longitude: 10.1833
  },
  {
    id: 1927,
    zipCode: '74595',
    city: 'Langenburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.254,
    longitude: 9.8567
  },
  {
    id: 1928,
    zipCode: '74597',
    city: 'Stimpfach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.0614,
    longitude: 10.0927
  },
  {
    id: 1929,
    zipCode: '74599',
    city: 'Wallhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schw\u00e4bisch Hall',
    latitude: 49.2104,
    longitude: 10.0622
  },
  {
    id: 1930,
    zipCode: '74613',
    city: '\u00d6hringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Hohenlohekreis',
    latitude: 49.1988,
    longitude: 9.5072
  },
  {
    id: 1931,
    zipCode: '74626',
    city: 'Bretzfeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Hohenlohekreis',
    latitude: 49.1794,
    longitude: 9.4383
  },
  {
    id: 1932,
    zipCode: '74629',
    city: 'Pfedelbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Hohenlohekreis',
    latitude: 49.1781,
    longitude: 9.505
  },
  {
    id: 1933,
    zipCode: '74632',
    city: 'Neuenstein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Hohenlohekreis',
    latitude: 49.2049,
    longitude: 9.58
  },
  {
    id: 1934,
    zipCode: '74635',
    city: 'Kupferzell',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Hohenlohekreis',
    latitude: 49.2278,
    longitude: 9.69
  },
  {
    id: 1935,
    zipCode: '74638',
    city: 'Waldenburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Hohenlohekreis',
    latitude: 49.1847,
    longitude: 9.6399
  },
  {
    id: 1936,
    zipCode: '74639',
    city: 'Zweiflingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Hohenlohekreis',
    latitude: 49.2564,
    longitude: 9.5181
  },
  {
    id: 1937,
    zipCode: '74653',
    city: 'Ingelfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Hohenlohekreis',
    latitude: 49.3003,
    longitude: 9.653
  },
  {
    id: 1938,
    zipCode: '74653',
    city: 'K\u00fcnzelsau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Hohenlohekreis',
    latitude: 49.2818,
    longitude: 9.6835
  },
  {
    id: 1939,
    zipCode: '74670',
    city: 'Forchtenberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Hohenlohekreis',
    latitude: 49.2887,
    longitude: 9.5603
  },
  {
    id: 1940,
    zipCode: '74673',
    city: 'Mulfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Hohenlohekreis',
    latitude: 49.3403,
    longitude: 9.8008
  },
  {
    id: 1941,
    zipCode: '74676',
    city: 'Niedernhall',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Hohenlohekreis',
    latitude: 49.2952,
    longitude: 9.616
  },
  {
    id: 1942,
    zipCode: '74677',
    city: 'D\u00f6rzbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Hohenlohekreis',
    latitude: 49.3835,
    longitude: 9.7073
  },
  {
    id: 1943,
    zipCode: '74679',
    city: 'Wei\u00dfbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Hohenlohekreis',
    latitude: 49.2972,
    longitude: 9.5953
  },
  {
    id: 1944,
    zipCode: '74744',
    city: 'Ahorn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.5083,
    longitude: 9.5269
  },
  {
    id: 1945,
    zipCode: '74831',
    city: 'Gundelsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.2833,
    longitude: 9.1604
  },
  {
    id: 1946,
    zipCode: '74832',
    city: 'Bachenau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.2784,
    longitude: 9.1944
  },
  {
    id: 1947,
    zipCode: '74861',
    city: 'Neudenau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.2918,
    longitude: 9.2698
  },
  {
    id: 1948,
    zipCode: '74906',
    city: 'Bad Rappenau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.2385,
    longitude: 9.1018
  },
  {
    id: 1949,
    zipCode: '74912',
    city: 'Kirchardt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.205,
    longitude: 8.9917
  },
  {
    id: 1950,
    zipCode: '74930',
    city: 'Ittlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.1908,
    longitude: 8.9308
  },
  {
    id: 1951,
    zipCode: '74936',
    city: 'Siegelsbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.2697,
    longitude: 9.0897
  },
  {
    id: 1952,
    zipCode: '75031',
    city: 'Eppingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.1364,
    longitude: 8.9123
  },
  {
    id: 1953,
    zipCode: '75050',
    city: 'Gemmingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heilbronn',
    latitude: 49.1564,
    longitude: 8.9819
  },
  {
    id: 1954,
    zipCode: '75392',
    city: 'Deckenpfronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'B\u00f6blingen',
    latitude: 48.6513,
    longitude: 8.8242
  },
  {
    id: 1955,
    zipCode: '89168',
    city: 'Niederstotzingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heidenheim',
    latitude: 48.5413,
    longitude: 10.2351
  },
  {
    id: 1956,
    zipCode: '89518',
    city: 'Heidenheim an der Brenz',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heidenheim',
    latitude: 48.6785,
    longitude: 10.1413
  },
  {
    id: 1957,
    zipCode: '89520',
    city: 'Heidenheim an der Brenz',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heidenheim',
    latitude: 48.6873,
    longitude: 10.1601
  },
  {
    id: 1958,
    zipCode: '89522',
    city: 'Heidenheim an der Brenz',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heidenheim',
    latitude: 48.6833,
    longitude: 10.15
  },
  {
    id: 1959,
    zipCode: '89537',
    city: 'Giengen an der Brenz',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heidenheim',
    latitude: 48.5887,
    longitude: 10.2058
  },
  {
    id: 1960,
    zipCode: '89542',
    city: 'Herbrechtingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heidenheim',
    latitude: 48.6217,
    longitude: 10.176
  },
  {
    id: 1961,
    zipCode: '89547',
    city: 'Gerstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heidenheim',
    latitude: 48.6225,
    longitude: 10.0198
  },
  {
    id: 1962,
    zipCode: '89551',
    city: 'K\u00f6nigsbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heidenheim',
    latitude: 48.7432,
    longitude: 10.1119
  },
  {
    id: 1963,
    zipCode: '89555',
    city: 'Steinheim am Albuch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heidenheim',
    latitude: 48.6909,
    longitude: 10.0638
  },
  {
    id: 1964,
    zipCode: '89558',
    city: 'B\u00f6hmenkirch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'G\u00f6ppingen',
    latitude: 48.6833,
    longitude: 9.9333
  },
  {
    id: 1965,
    zipCode: '89561',
    city: 'Dischingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heidenheim',
    latitude: 48.7,
    longitude: 10.3667
  },
  {
    id: 1966,
    zipCode: '89564',
    city: 'Nattheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heidenheim',
    latitude: 48.6996,
    longitude: 10.2421
  },
  {
    id: 1967,
    zipCode: '89567',
    city: 'Sontheim an der Brenz',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heidenheim',
    latitude: 48.5524,
    longitude: 10.291
  },
  {
    id: 1968,
    zipCode: '89568',
    city: 'Hermaringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Heidenheim',
    latitude: 48.5954,
    longitude: 10.2607
  },
  {
    id: 1969,
    zipCode: '97877',
    city: 'Wertheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.759,
    longitude: 9.5085
  },
  {
    id: 1970,
    zipCode: '97896',
    city: 'Freudenberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.7535,
    longitude: 9.3275
  },
  {
    id: 1971,
    zipCode: '97900',
    city: 'K\u00fclsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.6694,
    longitude: 9.5236
  },
  {
    id: 1972,
    zipCode: '97922',
    city: 'Lauda-K\u00f6nigshofen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.5653,
    longitude: 9.7082
  },
  {
    id: 1973,
    zipCode: '97941',
    city: 'Tauberbischofsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.6247,
    longitude: 9.6628
  },
  {
    id: 1974,
    zipCode: '97944',
    city: 'Boxberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.4796,
    longitude: 9.6401
  },
  {
    id: 1975,
    zipCode: '97947',
    city: 'Gr\u00fcnsfeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.6095,
    longitude: 9.7472
  },
  {
    id: 1976,
    zipCode: '97950',
    city: 'Gro\u00dfrinderfeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.6654,
    longitude: 9.7336
  },
  {
    id: 1977,
    zipCode: '97953',
    city: 'K\u00f6nigheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.6203,
    longitude: 9.5958
  },
  {
    id: 1978,
    zipCode: '97956',
    city: 'Werbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.6708,
    longitude: 9.6394
  },
  {
    id: 1979,
    zipCode: '97957',
    city: 'Wittighausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.6192,
    longitude: 9.8422
  },
  {
    id: 1980,
    zipCode: '97959',
    city: 'Assamstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.4281,
    longitude: 9.6861
  },
  {
    id: 1981,
    zipCode: '97980',
    city: 'Bad Mergentheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.4925,
    longitude: 9.7736
  },
  {
    id: 1982,
    zipCode: '97990',
    city: 'Weikersheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.4787,
    longitude: 9.8998
  },
  {
    id: 1983,
    zipCode: '97993',
    city: 'Creglingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.4694,
    longitude: 10.0312
  },
  {
    id: 1984,
    zipCode: '97996',
    city: 'Niederstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.4,
    longitude: 9.9194
  },
  {
    id: 1985,
    zipCode: '97999',
    city: 'Igersheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Main-Tauber-Kreis',
    latitude: 49.4944,
    longitude: 9.8169
  },
  {
    id: 1986,
    zipCode: '68159',
    city: 'Mannheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Mannheim',
    latitude: 49.4934,
    longitude: 8.4653
  },
  {
    id: 1987,
    zipCode: '68161',
    city: 'Mannheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Mannheim',
    latitude: 49.4873,
    longitude: 8.4695
  },
  {
    id: 1988,
    zipCode: '68163',
    city: 'Mannheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Mannheim',
    latitude: 49.4883,
    longitude: 8.4647
  },
  {
    id: 1989,
    zipCode: '68165',
    city: 'Mannheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Mannheim',
    latitude: 49.4772,
    longitude: 8.4818
  },
  {
    id: 1990,
    zipCode: '68167',
    city: 'Mannheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Mannheim',
    latitude: 49.4996,
    longitude: 8.4939
  },
  {
    id: 1991,
    zipCode: '68169',
    city: 'Mannheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Mannheim',
    latitude: 49.503,
    longitude: 8.4693
  },
  {
    id: 1992,
    zipCode: '68199',
    city: 'Mannheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Mannheim',
    latitude: 49.4598,
    longitude: 8.4881
  },
  {
    id: 1993,
    zipCode: '68219',
    city: 'Mannheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Mannheim',
    latitude: 49.4883,
    longitude: 8.4647
  },
  {
    id: 1994,
    zipCode: '68229',
    city: 'Mannheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Mannheim',
    latitude: 49.4883,
    longitude: 8.4647
  },
  {
    id: 1995,
    zipCode: '68239',
    city: 'Mannheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Mannheim',
    latitude: 49.4883,
    longitude: 8.4647
  },
  {
    id: 1996,
    zipCode: '68259',
    city: 'Mannheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Mannheim',
    latitude: 49.4903,
    longitude: 8.5339
  },
  {
    id: 1997,
    zipCode: '68305',
    city: 'Mannheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Mannheim',
    latitude: 49.5257,
    longitude: 8.4965
  },
  {
    id: 1998,
    zipCode: '68307',
    city: 'Mannheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Mannheim',
    latitude: 49.5461,
    longitude: 8.4488
  },
  {
    id: 1999,
    zipCode: '68309',
    city: 'Mannheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Mannheim',
    latitude: 49.5121,
    longitude: 8.5316
  },
  {
    id: 2000,
    zipCode: '68526',
    city: 'Ladenburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.4731,
    longitude: 8.609
  },
  {
    id: 2001,
    zipCode: '68535',
    city: 'Edingen-Neckarhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.4572,
    longitude: 8.6064
  },
  {
    id: 2002,
    zipCode: '68542',
    city: 'Heddesheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.5056,
    longitude: 8.6036
  },
  {
    id: 2003,
    zipCode: '68549',
    city: 'Ilvesheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.474,
    longitude: 8.5674
  },
  {
    id: 2004,
    zipCode: '68723',
    city: 'Schwetzingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3822,
    longitude: 8.5823
  },
  {
    id: 2005,
    zipCode: '68723',
    city: 'Plankstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3944,
    longitude: 8.5961
  },
  {
    id: 2006,
    zipCode: '68723',
    city: 'Oftersheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3653,
    longitude: 8.5831
  },
  {
    id: 2007,
    zipCode: '68753',
    city: 'Wagh\u00e4usel',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.2499,
    longitude: 8.5126
  },
  {
    id: 2008,
    zipCode: '68766',
    city: 'Hockenheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3233,
    longitude: 8.5519
  },
  {
    id: 2009,
    zipCode: '68775',
    city: 'Ketsch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3678,
    longitude: 8.5311
  },
  {
    id: 2010,
    zipCode: '68782',
    city: 'Br\u00fchl',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3972,
    longitude: 8.5336
  },
  {
    id: 2011,
    zipCode: '68789',
    city: 'Sankt Leon-Rot',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.2659,
    longitude: 8.618
  },
  {
    id: 2012,
    zipCode: '68794',
    city: 'Oberhausen-Rheinhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.2739,
    longitude: 8.4717
  },
  {
    id: 2013,
    zipCode: '68799',
    city: 'Reilingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.2983,
    longitude: 8.5642
  },
  {
    id: 2014,
    zipCode: '68804',
    city: 'Altlu\u00dfheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3017,
    longitude: 8.4992
  },
  {
    id: 2015,
    zipCode: '68809',
    city: 'Neulu\u00dfheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.2981,
    longitude: 8.5183
  },
  {
    id: 2016,
    zipCode: '69115',
    city: 'Heidelberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Heidelberg',
    latitude: 49.4062,
    longitude: 8.6868
  },
  {
    id: 2017,
    zipCode: '69117',
    city: 'Heidelberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Heidelberg',
    latitude: 49.4095,
    longitude: 8.6935
  },
  {
    id: 2018,
    zipCode: '69118',
    city: 'Heidelberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Heidelberg',
    latitude: 49.4194,
    longitude: 8.7345
  },
  {
    id: 2019,
    zipCode: '69120',
    city: 'Heidelberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Heidelberg',
    latitude: 49.4169,
    longitude: 8.6764
  },
  {
    id: 2020,
    zipCode: '69121',
    city: 'Heidelberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Heidelberg',
    latitude: 49.4322,
    longitude: 8.6824
  },
  {
    id: 2021,
    zipCode: '69123',
    city: 'Heidelberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Heidelberg',
    latitude: 49.4167,
    longitude: 8.7
  },
  {
    id: 2022,
    zipCode: '69124',
    city: 'Heidelberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Heidelberg',
    latitude: 49.3829,
    longitude: 8.6656
  },
  {
    id: 2023,
    zipCode: '69126',
    city: 'Heidelberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Heidelberg',
    latitude: 49.3757,
    longitude: 8.6911
  },
  {
    id: 2024,
    zipCode: '69151',
    city: 'Neckargem\u00fcnd',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.389,
    longitude: 8.7959
  },
  {
    id: 2025,
    zipCode: '69168',
    city: 'Wiesloch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.295,
    longitude: 8.6985
  },
  {
    id: 2026,
    zipCode: '69181',
    city: 'Leimen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3474,
    longitude: 8.6873
  },
  {
    id: 2027,
    zipCode: '69190',
    city: 'Walldorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3064,
    longitude: 8.6424
  },
  {
    id: 2028,
    zipCode: '69198',
    city: 'Schriesheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.4737,
    longitude: 8.6636
  },
  {
    id: 2029,
    zipCode: '69207',
    city: 'Sandhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3428,
    longitude: 8.6592
  },
  {
    id: 2030,
    zipCode: '69214',
    city: 'Eppelheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.4019,
    longitude: 8.6364
  },
  {
    id: 2031,
    zipCode: '69221',
    city: 'Dossenheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.4503,
    longitude: 8.6747
  },
  {
    id: 2032,
    zipCode: '69226',
    city: 'Nu\u00dfloch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3239,
    longitude: 8.6956
  },
  {
    id: 2033,
    zipCode: '69231',
    city: 'Rauenberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.2694,
    longitude: 8.7034
  },
  {
    id: 2034,
    zipCode: '69234',
    city: 'Dielheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.2842,
    longitude: 8.7381
  },
  {
    id: 2035,
    zipCode: '69242',
    city: 'M\u00fchlhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.2486,
    longitude: 8.7267
  },
  {
    id: 2036,
    zipCode: '69245',
    city: 'Bammental',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3561,
    longitude: 8.7794
  },
  {
    id: 2037,
    zipCode: '69250',
    city: 'Sch\u00f6nau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.4366,
    longitude: 8.8088
  },
  {
    id: 2038,
    zipCode: '69251',
    city: 'Gaiberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3664,
    longitude: 8.7497
  },
  {
    id: 2039,
    zipCode: '69253',
    city: 'Heiligkreuzsteinach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.4833,
    longitude: 8.795
  },
  {
    id: 2040,
    zipCode: '69254',
    city: 'Malsch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.2472,
    longitude: 8.6828
  },
  {
    id: 2041,
    zipCode: '69256',
    city: 'Mauer',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3408,
    longitude: 8.8003
  },
  {
    id: 2042,
    zipCode: '69257',
    city: 'Wiesenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3614,
    longitude: 8.8036
  },
  {
    id: 2043,
    zipCode: '69259',
    city: 'Wilhelmsfeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.4706,
    longitude: 8.7536
  },
  {
    id: 2044,
    zipCode: '69412',
    city: 'Eberbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.4668,
    longitude: 8.9902
  },
  {
    id: 2045,
    zipCode: '69427',
    city: 'Mudau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.5344,
    longitude: 9.2044
  },
  {
    id: 2046,
    zipCode: '69429',
    city: 'Waldbrunn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.4592,
    longitude: 9.0919
  },
  {
    id: 2047,
    zipCode: '69434',
    city: 'Heddesbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.4803,
    longitude: 8.8281
  },
  {
    id: 2048,
    zipCode: '69436',
    city: 'Sch\u00f6nbrunn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.4111,
    longitude: 8.9278
  },
  {
    id: 2049,
    zipCode: '69437',
    city: 'Neckargerach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.4,
    longitude: 9.0667
  },
  {
    id: 2050,
    zipCode: '69439',
    city: 'Zwingenberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.4192,
    longitude: 9.0406
  },
  {
    id: 2051,
    zipCode: '69469',
    city: 'Weinheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.5489,
    longitude: 8.667
  },
  {
    id: 2052,
    zipCode: '69493',
    city: 'Hirschberg an der Bergstra\u00dfe',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.5062,
    longitude: 8.6657
  },
  {
    id: 2053,
    zipCode: '69502',
    city: 'Hemsbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.5907,
    longitude: 8.6478
  },
  {
    id: 2054,
    zipCode: '69514',
    city: 'Laudenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.6133,
    longitude: 8.6539
  },
  {
    id: 2055,
    zipCode: '71292',
    city: 'Friolzheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.8333,
    longitude: 8.8333
  },
  {
    id: 2056,
    zipCode: '71296',
    city: 'Heimsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.8066,
    longitude: 8.8674
  },
  {
    id: 2057,
    zipCode: '71297',
    city: 'M\u00f6nsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.8667,
    longitude: 8.8667
  },
  {
    id: 2058,
    zipCode: '71299',
    city: 'Wimsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.85,
    longitude: 8.8333
  },
  {
    id: 2059,
    zipCode: '72160',
    city: 'Horb am Neckar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.4889,
    longitude: 8.6734
  },
  {
    id: 2060,
    zipCode: '72178',
    city: 'Waldachtal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.5,
    longitude: 8.5667
  },
  {
    id: 2061,
    zipCode: '72184',
    city: 'Eutingen im G\u00e4u',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.4833,
    longitude: 8.75
  },
  {
    id: 2062,
    zipCode: '72186',
    city: 'Empfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.3926,
    longitude: 8.7104
  },
  {
    id: 2063,
    zipCode: '72202',
    city: 'Nagold',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.5498,
    longitude: 8.7237
  },
  {
    id: 2064,
    zipCode: '72213',
    city: 'Altensteig',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.5865,
    longitude: 8.604
  },
  {
    id: 2065,
    zipCode: '72218',
    city: 'Wildberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.6234,
    longitude: 8.7452
  },
  {
    id: 2066,
    zipCode: '72221',
    city: 'Haiterbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.5207,
    longitude: 8.6443
  },
  {
    id: 2067,
    zipCode: '72224',
    city: 'Ebhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.5833,
    longitude: 8.6833
  },
  {
    id: 2068,
    zipCode: '72226',
    city: 'Simmersfeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.6167,
    longitude: 8.5167
  },
  {
    id: 2069,
    zipCode: '72227',
    city: 'Egenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.5667,
    longitude: 8.6167
  },
  {
    id: 2070,
    zipCode: '72229',
    city: 'Rohrdorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.5667,
    longitude: 8.7
  },
  {
    id: 2071,
    zipCode: '72250',
    city: 'Freudenstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.467,
    longitude: 8.4137
  },
  {
    id: 2072,
    zipCode: '72270',
    city: 'Baiersbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.5032,
    longitude: 8.377
  },
  {
    id: 2073,
    zipCode: '72275',
    city: 'Alpirsbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.3451,
    longitude: 8.402
  },
  {
    id: 2074,
    zipCode: '72280',
    city: 'Dornstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.472,
    longitude: 8.4982
  },
  {
    id: 2075,
    zipCode: '72285',
    city: 'Pfalzgrafenweiler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.5265,
    longitude: 8.5658
  },
  {
    id: 2076,
    zipCode: '72290',
    city: 'Lo\u00dfburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.4,
    longitude: 8.45
  },
  {
    id: 2077,
    zipCode: '72291',
    city: 'Betzweiler-W\u00e4lde',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.3667,
    longitude: 8.4833
  },
  {
    id: 2078,
    zipCode: '72293',
    city: 'Glatten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.4425,
    longitude: 8.5112
  },
  {
    id: 2079,
    zipCode: '72294',
    city: 'Gr\u00f6mbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.5729,
    longitude: 8.5454
  },
  {
    id: 2080,
    zipCode: '72296',
    city: 'Schopfloch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.4548,
    longitude: 8.5513
  },
  {
    id: 2081,
    zipCode: '72297',
    city: 'Seewald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.5919,
    longitude: 8.4178
  },
  {
    id: 2082,
    zipCode: '72299',
    city: 'W\u00f6rnersberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.5667,
    longitude: 8.5667
  },
  {
    id: 2083,
    zipCode: '74706',
    city: 'Osterburken',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.43,
    longitude: 9.4225
  },
  {
    id: 2084,
    zipCode: '74722',
    city: 'Buchen (Odenwald)',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.52,
    longitude: 9.324
  },
  {
    id: 2085,
    zipCode: '74731',
    city: 'Walld\u00fcrn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.5836,
    longitude: 9.3664
  },
  {
    id: 2086,
    zipCode: '74736',
    city: 'Hardheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.6119,
    longitude: 9.4719
  },
  {
    id: 2087,
    zipCode: '74740',
    city: 'Adelsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.4015,
    longitude: 9.3925
  },
  {
    id: 2088,
    zipCode: '74743',
    city: 'Seckach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.4422,
    longitude: 9.3342
  },
  {
    id: 2089,
    zipCode: '74746',
    city: 'H\u00f6pfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.6025,
    longitude: 9.4286
  },
  {
    id: 2090,
    zipCode: '74747',
    city: 'Ravenstein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.3939,
    longitude: 9.5325
  },
  {
    id: 2091,
    zipCode: '74749',
    city: 'Rosenberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.4558,
    longitude: 9.4731
  },
  {
    id: 2092,
    zipCode: '74821',
    city: 'Mosbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.3536,
    longitude: 9.1511
  },
  {
    id: 2093,
    zipCode: '74834',
    city: 'Elztal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.3897,
    longitude: 9.2106
  },
  {
    id: 2094,
    zipCode: '74838',
    city: 'Limbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.4619,
    longitude: 9.2111
  },
  {
    id: 2095,
    zipCode: '74842',
    city: 'Billigheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.3486,
    longitude: 9.2539
  },
  {
    id: 2096,
    zipCode: '74847',
    city: 'Obrigheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.3519,
    longitude: 9.0908
  },
  {
    id: 2097,
    zipCode: '74850',
    city: 'Schefflenz',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.3956,
    longitude: 9.2728
  },
  {
    id: 2098,
    zipCode: '74855',
    city: 'Ha\u00dfmersheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.3,
    longitude: 9.15
  },
  {
    id: 2099,
    zipCode: '74858',
    city: 'Aglasterhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.3569,
    longitude: 8.9869
  },
  {
    id: 2100,
    zipCode: '74862',
    city: 'Binau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.3683,
    longitude: 9.0581
  },
  {
    id: 2101,
    zipCode: '74864',
    city: 'Fahrenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.4314,
    longitude: 9.1506
  },
  {
    id: 2102,
    zipCode: '74865',
    city: 'Neckarzimmern',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.3192,
    longitude: 9.1328
  },
  {
    id: 2103,
    zipCode: '74867',
    city: 'Neunkirchen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.3869,
    longitude: 9.0106
  },
  {
    id: 2104,
    zipCode: '74869',
    city: 'Schwarzach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.3711,
    longitude: 8.9832
  },
  {
    id: 2105,
    zipCode: '74889',
    city: 'Sinsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.2529,
    longitude: 8.8787
  },
  {
    id: 2106,
    zipCode: '74909',
    city: 'Meckesheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3217,
    longitude: 8.8194
  },
  {
    id: 2107,
    zipCode: '74915',
    city: 'Waibstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.2951,
    longitude: 8.9177
  },
  {
    id: 2108,
    zipCode: '74918',
    city: 'Angelbachtal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.2331,
    longitude: 8.7705
  },
  {
    id: 2109,
    zipCode: '74921',
    city: 'Helmstadt-Bargen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.31,
    longitude: 9.0
  },
  {
    id: 2110,
    zipCode: '74924',
    city: 'Neckarbischofsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.2963,
    longitude: 8.9638
  },
  {
    id: 2111,
    zipCode: '74925',
    city: 'Epfenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3392,
    longitude: 8.9078
  },
  {
    id: 2112,
    zipCode: '74927',
    city: 'Eschelbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3194,
    longitude: 8.8653
  },
  {
    id: 2113,
    zipCode: '74928',
    city: 'H\u00fcffenhardt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Neckar-Odenwald-Kreis',
    latitude: 49.2919,
    longitude: 9.0817
  },
  {
    id: 2114,
    zipCode: '74931',
    city: 'Lobbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3664,
    longitude: 8.8917
  },
  {
    id: 2115,
    zipCode: '74933',
    city: 'Neidenstein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3167,
    longitude: 8.8847
  },
  {
    id: 2116,
    zipCode: '74934',
    city: 'Reichartshausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.355,
    longitude: 8.9453
  },
  {
    id: 2117,
    zipCode: '74937',
    city: 'Spechbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.3464,
    longitude: 8.8833
  },
  {
    id: 2118,
    zipCode: '74939',
    city: 'Zuzenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rhein-Neckar-Kreis',
    latitude: 49.2964,
    longitude: 8.8225
  },
  {
    id: 2119,
    zipCode: '75015',
    city: 'Bretten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0369,
    longitude: 8.7075
  },
  {
    id: 2120,
    zipCode: '75038',
    city: 'Oberderdingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0656,
    longitude: 8.8031
  },
  {
    id: 2121,
    zipCode: '75045',
    city: 'Walzbachtal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0257,
    longitude: 8.5861
  },
  {
    id: 2122,
    zipCode: '75053',
    city: 'Gondelsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0592,
    longitude: 8.6583
  },
  {
    id: 2123,
    zipCode: '75056',
    city: 'Sulzfeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.1047,
    longitude: 8.8558
  },
  {
    id: 2124,
    zipCode: '75057',
    city: 'K\u00fcrnbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0775,
    longitude: 8.8456
  },
  {
    id: 2125,
    zipCode: '75059',
    city: 'Zaisenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.1067,
    longitude: 8.8128
  },
  {
    id: 2126,
    zipCode: '75172',
    city: 'Pforzheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Pforzheim',
    latitude: 48.8919,
    longitude: 8.6985
  },
  {
    id: 2127,
    zipCode: '75173',
    city: 'Pforzheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Pforzheim',
    latitude: 48.8833,
    longitude: 8.7
  },
  {
    id: 2128,
    zipCode: '75175',
    city: 'Pforzheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Pforzheim',
    latitude: 48.8915,
    longitude: 8.7156
  },
  {
    id: 2129,
    zipCode: '75177',
    city: 'Pforzheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Pforzheim',
    latitude: 48.8833,
    longitude: 8.7
  },
  {
    id: 2130,
    zipCode: '75179',
    city: 'Pforzheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Pforzheim',
    latitude: 48.9006,
    longitude: 8.6697
  },
  {
    id: 2131,
    zipCode: '75180',
    city: 'Pforzheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Pforzheim',
    latitude: 48.8696,
    longitude: 8.6704
  },
  {
    id: 2132,
    zipCode: '75181',
    city: 'Pforzheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Pforzheim',
    latitude: 48.8851,
    longitude: 8.7307
  },
  {
    id: 2133,
    zipCode: '75196',
    city: 'Remchingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.9513,
    longitude: 8.5732
  },
  {
    id: 2134,
    zipCode: '75203',
    city: 'K\u00f6nigsbach-Stein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.9659,
    longitude: 8.6057
  },
  {
    id: 2135,
    zipCode: '75210',
    city: 'Keltern',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.9,
    longitude: 8.5833
  },
  {
    id: 2136,
    zipCode: '75217',
    city: 'Birkenfeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.8667,
    longitude: 8.6333
  },
  {
    id: 2137,
    zipCode: '75223',
    city: 'Niefern-\u00d6schelbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.9167,
    longitude: 8.7833
  },
  {
    id: 2138,
    zipCode: '75228',
    city: 'Ispringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.9167,
    longitude: 8.6667
  },
  {
    id: 2139,
    zipCode: '75233',
    city: 'Tiefenbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.824,
    longitude: 8.8013
  },
  {
    id: 2140,
    zipCode: '75236',
    city: 'K\u00e4mpfelbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.93,
    longitude: 8.6448
  },
  {
    id: 2141,
    zipCode: '75239',
    city: 'Eisingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.95,
    longitude: 8.6667
  },
  {
    id: 2142,
    zipCode: '75242',
    city: 'Neuhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.7926,
    longitude: 8.7765
  },
  {
    id: 2143,
    zipCode: '75245',
    city: 'Neulingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.9667,
    longitude: 8.7
  },
  {
    id: 2144,
    zipCode: '75248',
    city: '\u00d6lbronn-D\u00fcrrn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.9667,
    longitude: 8.75
  },
  {
    id: 2145,
    zipCode: '75249',
    city: 'Kieselbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.9333,
    longitude: 8.75
  },
  {
    id: 2146,
    zipCode: '75305',
    city: 'Neuenb\u00fcrg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.8452,
    longitude: 8.5957
  },
  {
    id: 2147,
    zipCode: '75323',
    city: 'Bad Wildbad im Schwarzwald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.75,
    longitude: 8.55
  },
  {
    id: 2148,
    zipCode: '75328',
    city: 'Sch\u00f6mberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.7871,
    longitude: 8.645
  },
  {
    id: 2149,
    zipCode: '75331',
    city: 'Engelsbrand',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.8333,
    longitude: 8.65
  },
  {
    id: 2150,
    zipCode: '75334',
    city: 'Straubenhardt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.8466,
    longitude: 8.5431
  },
  {
    id: 2151,
    zipCode: '75335',
    city: 'Dobel',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.8,
    longitude: 8.5
  },
  {
    id: 2152,
    zipCode: '75337',
    city: 'Enzkl\u00f6sterle',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.6664,
    longitude: 8.4708
  },
  {
    id: 2153,
    zipCode: '75339',
    city: 'H\u00f6fen an der Enz',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.8,
    longitude: 8.5833
  },
  {
    id: 2154,
    zipCode: '75365',
    city: 'Calw',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.7142,
    longitude: 8.7403
  },
  {
    id: 2155,
    zipCode: '75378',
    city: 'Bad Liebenzell',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.7743,
    longitude: 8.7297
  },
  {
    id: 2156,
    zipCode: '75382',
    city: 'Althengstett',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.7232,
    longitude: 8.7943
  },
  {
    id: 2157,
    zipCode: '75385',
    city: 'Bad Teinach-Zavelstein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.6905,
    longitude: 8.6928
  },
  {
    id: 2158,
    zipCode: '75387',
    city: 'Neubulach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.6609,
    longitude: 8.6961
  },
  {
    id: 2159,
    zipCode: '75389',
    city: 'Neuweiler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.6667,
    longitude: 8.6
  },
  {
    id: 2160,
    zipCode: '75391',
    city: 'Gechingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.6953,
    longitude: 8.8291
  },
  {
    id: 2161,
    zipCode: '75394',
    city: 'Oberreichenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.7333,
    longitude: 8.6667
  },
  {
    id: 2162,
    zipCode: '75395',
    city: 'Ostelsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.7263,
    longitude: 8.8482
  },
  {
    id: 2163,
    zipCode: '75397',
    city: 'Simmozheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.7513,
    longitude: 8.8114
  },
  {
    id: 2164,
    zipCode: '75399',
    city: 'Unterreichenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.825,
    longitude: 8.7088
  },
  {
    id: 2165,
    zipCode: '75417',
    city: 'M\u00fchlacker',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.9475,
    longitude: 8.8367
  },
  {
    id: 2166,
    zipCode: '75428',
    city: 'Illingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.9562,
    longitude: 8.9246
  },
  {
    id: 2167,
    zipCode: '75433',
    city: 'Maulbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.9996,
    longitude: 8.8034
  },
  {
    id: 2168,
    zipCode: '75438',
    city: 'Knittlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 49.0249,
    longitude: 8.7561
  },
  {
    id: 2169,
    zipCode: '75443',
    city: '\u00d6tisheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.9667,
    longitude: 8.8
  },
  {
    id: 2170,
    zipCode: '75446',
    city: 'Wiernsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.8833,
    longitude: 8.85
  },
  {
    id: 2171,
    zipCode: '75447',
    city: 'Sternenfels',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 49.0514,
    longitude: 8.8508
  },
  {
    id: 2172,
    zipCode: '75449',
    city: 'Wurmberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Enzkreis',
    latitude: 48.8667,
    longitude: 8.8167
  },
  {
    id: 2173,
    zipCode: '76006',
    city: 'Karlsruhe',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.008,
    longitude: 8.42
  },
  {
    id: 2174,
    zipCode: '76131',
    city: 'Karlsruhe',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0078,
    longitude: 8.4199
  },
  {
    id: 2175,
    zipCode: '76133',
    city: 'Karlsruhe',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0083,
    longitude: 8.3979
  },
  {
    id: 2176,
    zipCode: '76135',
    city: 'Karlsruhe',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 48.9907,
    longitude: 8.3719
  },
  {
    id: 2177,
    zipCode: '76137',
    city: 'Karlsruhe',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0019,
    longitude: 8.4287
  },
  {
    id: 2178,
    zipCode: '76139',
    city: 'Karlsruhe',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0047,
    longitude: 8.3858
  },
  {
    id: 2179,
    zipCode: '76149',
    city: 'Karlsruhe',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0401,
    longitude: 8.3936
  },
  {
    id: 2180,
    zipCode: '76185',
    city: 'Karlsruhe',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0111,
    longitude: 8.3601
  },
  {
    id: 2181,
    zipCode: '76187',
    city: 'Karlsruhe',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0224,
    longitude: 8.3742
  },
  {
    id: 2182,
    zipCode: '76189',
    city: 'Karlsruhe',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0148,
    longitude: 8.3521
  },
  {
    id: 2183,
    zipCode: '76199',
    city: 'Karlsruhe',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 48.9661,
    longitude: 8.4043
  },
  {
    id: 2184,
    zipCode: '76227',
    city: 'Karlsruhe',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0003,
    longitude: 8.4776
  },
  {
    id: 2185,
    zipCode: '76228',
    city: 'Karlsruhe',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0047,
    longitude: 8.3858
  },
  {
    id: 2186,
    zipCode: '76229',
    city: 'Karlsruhe',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0047,
    longitude: 8.3858
  },
  {
    id: 2187,
    zipCode: '76275',
    city: 'Ettlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 48.9409,
    longitude: 8.4076
  },
  {
    id: 2188,
    zipCode: '76287',
    city: 'Rheinstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 48.9685,
    longitude: 8.307
  },
  {
    id: 2189,
    zipCode: '76297',
    city: 'Stutensee',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0967,
    longitude: 8.4896
  },
  {
    id: 2190,
    zipCode: '76307',
    city: 'Karlsbad',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 48.9167,
    longitude: 8.5
  },
  {
    id: 2191,
    zipCode: '76316',
    city: 'Malsch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 48.8833,
    longitude: 8.3333
  },
  {
    id: 2192,
    zipCode: '76327',
    city: 'Pfinztal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0044,
    longitude: 8.5209
  },
  {
    id: 2193,
    zipCode: '76332',
    city: 'Bad Herrenalb',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Calw',
    latitude: 48.7979,
    longitude: 8.4362
  },
  {
    id: 2194,
    zipCode: '76337',
    city: 'Waldbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 48.9183,
    longitude: 8.4923
  },
  {
    id: 2195,
    zipCode: '76344',
    city: 'Eggenstein-Leopoldshafen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0901,
    longitude: 8.3988
  },
  {
    id: 2196,
    zipCode: '76351',
    city: 'Linkenheim-Hochstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.132,
    longitude: 8.4124
  },
  {
    id: 2197,
    zipCode: '76356',
    city: 'Weingarten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.0546,
    longitude: 8.5268
  },
  {
    id: 2198,
    zipCode: '76359',
    city: 'Marxzell',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 48.8667,
    longitude: 8.45
  },
  {
    id: 2199,
    zipCode: '76437',
    city: 'Rastatt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.8585,
    longitude: 8.2096
  },
  {
    id: 2200,
    zipCode: '76448',
    city: 'Durmersheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.9333,
    longitude: 8.2667
  },
  {
    id: 2201,
    zipCode: '76456',
    city: 'Kuppenheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.8279,
    longitude: 8.2542
  },
  {
    id: 2202,
    zipCode: '76461',
    city: 'Muggensturm',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.8667,
    longitude: 8.2833
  },
  {
    id: 2203,
    zipCode: '76467',
    city: 'Bietigheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.9092,
    longitude: 8.252
  },
  {
    id: 2204,
    zipCode: '76470',
    city: '\u00d6tigheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.8909,
    longitude: 8.2344
  },
  {
    id: 2205,
    zipCode: '76473',
    city: 'Iffezheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.8217,
    longitude: 8.1431
  },
  {
    id: 2206,
    zipCode: '76474',
    city: 'Au am Rhein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.95,
    longitude: 8.2333
  },
  {
    id: 2207,
    zipCode: '76476',
    city: 'Bischweier',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.8377,
    longitude: 8.2841
  },
  {
    id: 2208,
    zipCode: '76477',
    city: 'Elchesheim-Illingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.9333,
    longitude: 8.2167
  },
  {
    id: 2209,
    zipCode: '76479',
    city: 'Steinmauern',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.901,
    longitude: 8.1969
  },
  {
    id: 2210,
    zipCode: '76530',
    city: 'Baden-Baden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Baden-Baden',
    latitude: 48.75,
    longitude: 8.25
  },
  {
    id: 2211,
    zipCode: '76532',
    city: 'Baden-Baden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Baden-Baden',
    latitude: 48.75,
    longitude: 8.25
  },
  {
    id: 2212,
    zipCode: '76534',
    city: 'Baden-Baden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Baden-Baden',
    latitude: 48.75,
    longitude: 8.25
  },
  {
    id: 2213,
    zipCode: '76547',
    city: 'Sinzheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.7667,
    longitude: 8.1667
  },
  {
    id: 2214,
    zipCode: '76549',
    city: 'H\u00fcgelsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.8,
    longitude: 8.1167
  },
  {
    id: 2215,
    zipCode: '76571',
    city: 'Gaggenau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.8,
    longitude: 8.3333
  },
  {
    id: 2216,
    zipCode: '76593',
    city: 'Gernsbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.7703,
    longitude: 8.3431
  },
  {
    id: 2217,
    zipCode: '76596',
    city: 'Forbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.6833,
    longitude: 8.35
  },
  {
    id: 2218,
    zipCode: '76597',
    city: 'Loffenau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.7721,
    longitude: 8.3846
  },
  {
    id: 2219,
    zipCode: '76599',
    city: 'Weisenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.7276,
    longitude: 8.3538
  },
  {
    id: 2220,
    zipCode: '76646',
    city: 'Bruchsal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.1243,
    longitude: 8.598
  },
  {
    id: 2221,
    zipCode: '76661',
    city: 'Philippsburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.2317,
    longitude: 8.4607
  },
  {
    id: 2222,
    zipCode: '76669',
    city: 'Bad Sch\u00f6nborn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.2069,
    longitude: 8.6436
  },
  {
    id: 2223,
    zipCode: '76676',
    city: 'Graben-Neudorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.1669,
    longitude: 8.4924
  },
  {
    id: 2224,
    zipCode: '76684',
    city: '\u00d6stringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.2191,
    longitude: 8.7119
  },
  {
    id: 2225,
    zipCode: '76689',
    city: 'Karlsdorf-Neuthard',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.1347,
    longitude: 8.5303
  },
  {
    id: 2226,
    zipCode: '76694',
    city: 'Forst',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.1586,
    longitude: 8.5808
  },
  {
    id: 2227,
    zipCode: '76698',
    city: 'Ubstadt-Weiher',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.163,
    longitude: 8.6316
  },
  {
    id: 2228,
    zipCode: '76703',
    city: 'Kraichtal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.1396,
    longitude: 8.7715
  },
  {
    id: 2229,
    zipCode: '76706',
    city: 'Dettenheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.1717,
    longitude: 8.4242
  },
  {
    id: 2230,
    zipCode: '76707',
    city: 'Hambr\u00fccken',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.19,
    longitude: 8.5406
  },
  {
    id: 2231,
    zipCode: '76709',
    city: 'Kronau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Karlsruhe',
    latitude: 49.2225,
    longitude: 8.6311
  },
  {
    id: 2232,
    zipCode: '77776',
    city: 'Bad Rippoldsau-Schapbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freudenstadt',
    latitude: 48.4,
    longitude: 8.3333
  },
  {
    id: 2233,
    zipCode: '77815',
    city: 'B\u00fchl',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.6968,
    longitude: 8.1352
  },
  {
    id: 2234,
    zipCode: '77830',
    city: 'B\u00fchlertal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.6857,
    longitude: 8.1888
  },
  {
    id: 2235,
    zipCode: '77833',
    city: 'Ottersweier',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.6702,
    longitude: 8.1132
  },
  {
    id: 2236,
    zipCode: '77836',
    city: 'Rheinm\u00fcnster',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.7583,
    longitude: 8.05
  },
  {
    id: 2237,
    zipCode: '77839',
    city: 'Lichtenau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rastatt',
    latitude: 48.7261,
    longitude: 8.0049
  },
  {
    id: 2238,
    zipCode: '72172',
    city: 'Sulz am Neckar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.3624,
    longitude: 8.6331
  },
  {
    id: 2239,
    zipCode: '72175',
    city: 'Dornhan',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.3501,
    longitude: 8.509
  },
  {
    id: 2240,
    zipCode: '72189',
    city: 'V\u00f6hringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.3345,
    longitude: 8.6639
  },
  {
    id: 2241,
    zipCode: '77652',
    city: 'Offenburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.4765,
    longitude: 7.9438
  },
  {
    id: 2242,
    zipCode: '77654',
    city: 'Offenburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.4651,
    longitude: 7.9559
  },
  {
    id: 2243,
    zipCode: '77656',
    city: 'Offenburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.4639,
    longitude: 7.9313
  },
  {
    id: 2244,
    zipCode: '77694',
    city: 'Kehl',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.573,
    longitude: 7.8152
  },
  {
    id: 2245,
    zipCode: '77704',
    city: 'Oberkirch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.5324,
    longitude: 8.0786
  },
  {
    id: 2246,
    zipCode: '77709',
    city: 'Oberwolfach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.3167,
    longitude: 8.2167
  },
  {
    id: 2247,
    zipCode: '77709',
    city: 'Wolfach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.2932,
    longitude: 8.2158
  },
  {
    id: 2248,
    zipCode: '77716',
    city: 'Haslach im Kinzigtal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.2777,
    longitude: 8.0894
  },
  {
    id: 2249,
    zipCode: '77716',
    city: 'Hofstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.2585,
    longitude: 8.066
  },
  {
    id: 2250,
    zipCode: '77716',
    city: 'Fischerbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.2869,
    longitude: 8.1096
  },
  {
    id: 2251,
    zipCode: '77723',
    city: 'Gengenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.4048,
    longitude: 8.0143
  },
  {
    id: 2252,
    zipCode: '77728',
    city: 'Oppenau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.4733,
    longitude: 8.1597
  },
  {
    id: 2253,
    zipCode: '77731',
    city: 'Willst\u00e4tt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.5407,
    longitude: 7.8931
  },
  {
    id: 2254,
    zipCode: '77736',
    city: 'Zell am Harmersbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.3465,
    longitude: 8.067
  },
  {
    id: 2255,
    zipCode: '77740',
    city: 'Bad Peterstal-Griesbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.4333,
    longitude: 8.2167
  },
  {
    id: 2256,
    zipCode: '77743',
    city: 'Neuried',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.45,
    longitude: 7.825
  },
  {
    id: 2257,
    zipCode: '77746',
    city: 'Schutterwald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.45,
    longitude: 7.8833
  },
  {
    id: 2258,
    zipCode: '77749',
    city: 'Hohberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.4167,
    longitude: 7.9167
  },
  {
    id: 2259,
    zipCode: '77756',
    city: 'Hausach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.2843,
    longitude: 8.176
  },
  {
    id: 2260,
    zipCode: '77761',
    city: 'Schiltach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.2893,
    longitude: 8.3417
  },
  {
    id: 2261,
    zipCode: '77767',
    city: 'Appenweier',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.5333,
    longitude: 7.9833
  },
  {
    id: 2262,
    zipCode: '77770',
    city: 'Durbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.4935,
    longitude: 8.0174
  },
  {
    id: 2263,
    zipCode: '77773',
    city: 'Schenkenzell',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.312,
    longitude: 8.3721
  },
  {
    id: 2264,
    zipCode: '77781',
    city: 'Biberach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.3333,
    longitude: 8.0333
  },
  {
    id: 2265,
    zipCode: '77784',
    city: 'Oberharmersbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.3736,
    longitude: 8.1254
  },
  {
    id: 2266,
    zipCode: '77787',
    city: 'Nordrach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.4,
    longitude: 8.0833
  },
  {
    id: 2267,
    zipCode: '77790',
    city: 'Steinach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.3,
    longitude: 8.05
  },
  {
    id: 2268,
    zipCode: '77791',
    city: 'Berghaupten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.406,
    longitude: 7.9867
  },
  {
    id: 2269,
    zipCode: '77793',
    city: 'Gutach (Schwarzwaldbahn)',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.2484,
    longitude: 8.2129
  },
  {
    id: 2270,
    zipCode: '77794',
    city: 'Lautenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.5207,
    longitude: 8.1151
  },
  {
    id: 2271,
    zipCode: '77796',
    city: 'M\u00fchlenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.25,
    longitude: 8.1167
  },
  {
    id: 2272,
    zipCode: '77797',
    city: 'Ohlsbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.4322,
    longitude: 7.9938
  },
  {
    id: 2273,
    zipCode: '77799',
    city: 'Ortenberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.4516,
    longitude: 7.9718
  },
  {
    id: 2274,
    zipCode: '77855',
    city: 'Achern',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.6312,
    longitude: 8.0761
  },
  {
    id: 2275,
    zipCode: '77866',
    city: 'Rheinau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.666,
    longitude: 7.9366
  },
  {
    id: 2276,
    zipCode: '77871',
    city: 'Renchen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.5885,
    longitude: 8.0132
  },
  {
    id: 2277,
    zipCode: '77876',
    city: 'Kappelrodeck',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.5918,
    longitude: 8.1169
  },
  {
    id: 2278,
    zipCode: '77880',
    city: 'Sasbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.6397,
    longitude: 8.0937
  },
  {
    id: 2279,
    zipCode: '77883',
    city: 'Ottenh\u00f6fen im Schwarzwald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.5667,
    longitude: 8.15
  },
  {
    id: 2280,
    zipCode: '77886',
    city: 'Lauf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.65,
    longitude: 8.1333
  },
  {
    id: 2281,
    zipCode: '77887',
    city: 'Sasbachwalden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.6167,
    longitude: 8.1333
  },
  {
    id: 2282,
    zipCode: '77889',
    city: 'Seebach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.5762,
    longitude: 8.1705
  },
  {
    id: 2283,
    zipCode: '77933',
    city: 'Lahr/Schwarzwald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.3372,
    longitude: 7.8704
  },
  {
    id: 2284,
    zipCode: '77944',
    city: 'Friesenheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.367,
    longitude: 7.883
  },
  {
    id: 2285,
    zipCode: '77948',
    city: 'Friesenheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.3667,
    longitude: 7.8833
  },
  {
    id: 2286,
    zipCode: '77955',
    city: 'Ettenheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.257,
    longitude: 7.8125
  },
  {
    id: 2287,
    zipCode: '77960',
    city: 'Seelbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.3106,
    longitude: 7.9407
  },
  {
    id: 2288,
    zipCode: '77963',
    city: 'Schwanau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.3667,
    longitude: 7.7624
  },
  {
    id: 2289,
    zipCode: '77966',
    city: 'Kappel-Grafenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.2838,
    longitude: 7.766
  },
  {
    id: 2290,
    zipCode: '77971',
    city: 'Kippenheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.2956,
    longitude: 7.8251
  },
  {
    id: 2291,
    zipCode: '77972',
    city: 'Mahlberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.2864,
    longitude: 7.8141
  },
  {
    id: 2292,
    zipCode: '77974',
    city: 'Mei\u00dfenheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.4103,
    longitude: 7.7727
  },
  {
    id: 2293,
    zipCode: '77975',
    city: 'Ringsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.2477,
    longitude: 7.7782
  },
  {
    id: 2294,
    zipCode: '77977',
    city: 'Rust',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.2667,
    longitude: 7.7333
  },
  {
    id: 2295,
    zipCode: '77978',
    city: 'Schuttertal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.2667,
    longitude: 7.95
  },
  {
    id: 2296,
    zipCode: '78048',
    city: 'Villingen-Schwenningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.0667,
    longitude: 8.45
  },
  {
    id: 2297,
    zipCode: '78050',
    city: 'Villingen-Schwenningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.0667,
    longitude: 8.45
  },
  {
    id: 2298,
    zipCode: '78052',
    city: 'Villingen-Schwenningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.0667,
    longitude: 8.45
  },
  {
    id: 2299,
    zipCode: '78054',
    city: 'Villingen-Schwenningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.0667,
    longitude: 8.45
  },
  {
    id: 2300,
    zipCode: '78056',
    city: 'Villingen-Schwenningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.0667,
    longitude: 8.45
  },
  {
    id: 2301,
    zipCode: '78073',
    city: 'Bad D\u00fcrrheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.0209,
    longitude: 8.5306
  },
  {
    id: 2302,
    zipCode: '78078',
    city: 'Niedereschach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.1333,
    longitude: 8.5333
  },
  {
    id: 2303,
    zipCode: '78083',
    city: 'Dauchingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.0899,
    longitude: 8.5501
  },
  {
    id: 2304,
    zipCode: '78086',
    city: 'Brigachtal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.0167,
    longitude: 8.4667
  },
  {
    id: 2305,
    zipCode: '78087',
    city: 'M\u00f6nchweiler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.1004,
    longitude: 8.4222
  },
  {
    id: 2306,
    zipCode: '78089',
    city: 'Unterkirnach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.0795,
    longitude: 8.3657
  },
  {
    id: 2307,
    zipCode: '78098',
    city: 'Triberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.1363,
    longitude: 8.2365
  },
  {
    id: 2308,
    zipCode: '78112',
    city: 'Sankt Georgen im Schwarzwald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.1272,
    longitude: 8.3351
  },
  {
    id: 2309,
    zipCode: '78120',
    city: 'Furtwangen im Schwarzwald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.0516,
    longitude: 8.2071
  },
  {
    id: 2310,
    zipCode: '78126',
    city: 'K\u00f6nigsfeld im Schwarzwald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.1381,
    longitude: 8.4197
  },
  {
    id: 2311,
    zipCode: '78132',
    city: 'Hornberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ortenaukreis',
    latitude: 48.2107,
    longitude: 8.2327
  },
  {
    id: 2312,
    zipCode: '78136',
    city: 'Schonach im Schwarzwald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.1423,
    longitude: 8.2029
  },
  {
    id: 2313,
    zipCode: '78141',
    city: 'Sch\u00f6nwald im Schwarzwald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.1055,
    longitude: 8.2039
  },
  {
    id: 2314,
    zipCode: '78144',
    city: 'Tennenbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.1904,
    longitude: 8.3518
  },
  {
    id: 2315,
    zipCode: '78147',
    city: 'V\u00f6hrenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.05,
    longitude: 8.3
  },
  {
    id: 2316,
    zipCode: '78148',
    city: 'G\u00fctenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.05,
    longitude: 8.15
  },
  {
    id: 2317,
    zipCode: '78166',
    city: 'Donaueschingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 47.9551,
    longitude: 8.4971
  },
  {
    id: 2318,
    zipCode: '78176',
    city: 'Blumberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 47.8406,
    longitude: 8.5333
  },
  {
    id: 2319,
    zipCode: '78183',
    city: 'H\u00fcfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 47.9254,
    longitude: 8.4883
  },
  {
    id: 2320,
    zipCode: '78187',
    city: 'Geisingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 47.925,
    longitude: 8.65
  },
  {
    id: 2321,
    zipCode: '78194',
    city: 'Immendingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 47.9333,
    longitude: 8.7333
  },
  {
    id: 2322,
    zipCode: '78199',
    city: 'Br\u00e4unlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 47.9296,
    longitude: 8.4481
  },
  {
    id: 2323,
    zipCode: '78224',
    city: 'Singen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.7593,
    longitude: 8.8403
  },
  {
    id: 2324,
    zipCode: '78234',
    city: 'Engen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.8553,
    longitude: 8.7734
  },
  {
    id: 2325,
    zipCode: '78239',
    city: 'Rielasingen-Worblingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.7346,
    longitude: 8.8401
  },
  {
    id: 2326,
    zipCode: '78244',
    city: 'Gottmadingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.7351,
    longitude: 8.7769
  },
  {
    id: 2327,
    zipCode: '78247',
    city: 'Hilzingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.7667,
    longitude: 8.7833
  },
  {
    id: 2328,
    zipCode: '78250',
    city: 'Tengen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.8213,
    longitude: 8.6612
  },
  {
    id: 2329,
    zipCode: '78253',
    city: 'Eigeltingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.858,
    longitude: 8.8978
  },
  {
    id: 2330,
    zipCode: '78256',
    city: 'Stei\u00dflingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.8,
    longitude: 8.9333
  },
  {
    id: 2331,
    zipCode: '78259',
    city: 'M\u00fchlhausen-Ehingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.811,
    longitude: 8.8122
  },
  {
    id: 2332,
    zipCode: '78262',
    city: 'Gailingen am Hochrhein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.7,
    longitude: 8.75
  },
  {
    id: 2333,
    zipCode: '78266',
    city: 'B\u00fcsingen am Hochrhein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.7,
    longitude: 8.6833
  },
  {
    id: 2334,
    zipCode: '78267',
    city: 'Aach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.8424,
    longitude: 8.8538
  },
  {
    id: 2335,
    zipCode: '78269',
    city: 'Volkertshausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.8167,
    longitude: 8.8667
  },
  {
    id: 2336,
    zipCode: '78315',
    city: 'Radolfzell am Bodensee',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.7419,
    longitude: 8.971
  },
  {
    id: 2337,
    zipCode: '78333',
    city: 'Stockach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.8511,
    longitude: 9.0091
  },
  {
    id: 2338,
    zipCode: '78337',
    city: '\u00d6hningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.6619,
    longitude: 8.8867
  },
  {
    id: 2339,
    zipCode: '78343',
    city: 'Gaienhofen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.6833,
    longitude: 8.9833
  },
  {
    id: 2340,
    zipCode: '78345',
    city: 'Moos',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.7244,
    longitude: 8.9348
  },
  {
    id: 2341,
    zipCode: '78351',
    city: 'Bodman-Ludwigshafen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.8182,
    longitude: 9.0554
  },
  {
    id: 2342,
    zipCode: '78355',
    city: 'Hohenfels',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.885,
    longitude: 9.1082
  },
  {
    id: 2343,
    zipCode: '78357',
    city: 'M\u00fchlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.9167,
    longitude: 9.0167
  },
  {
    id: 2344,
    zipCode: '78359',
    city: 'Orsingen-Nenzingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.8427,
    longitude: 8.9591
  },
  {
    id: 2345,
    zipCode: '78462',
    city: 'Konstanz',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.6613,
    longitude: 9.1752
  },
  {
    id: 2346,
    zipCode: '78464',
    city: 'Konstanz',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.6723,
    longitude: 9.1834
  },
  {
    id: 2347,
    zipCode: '78465',
    city: 'Konstanz',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.6667,
    longitude: 9.1833
  },
  {
    id: 2348,
    zipCode: '78467',
    city: 'Konstanz',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.6744,
    longitude: 9.1649
  },
  {
    id: 2349,
    zipCode: '78476',
    city: 'Allensbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.7154,
    longitude: 9.0714
  },
  {
    id: 2350,
    zipCode: '78479',
    city: 'Reichenau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Konstanz',
    latitude: 47.6889,
    longitude: 9.0635
  },
  {
    id: 2351,
    zipCode: '78532',
    city: 'Tuttlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 47.9846,
    longitude: 8.8177
  },
  {
    id: 2352,
    zipCode: '78549',
    city: 'Spaichingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0748,
    longitude: 8.7351
  },
  {
    id: 2353,
    zipCode: '78554',
    city: 'Aldingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.1,
    longitude: 8.7
  },
  {
    id: 2354,
    zipCode: '78559',
    city: 'Gosheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.1343,
    longitude: 8.7543
  },
  {
    id: 2355,
    zipCode: '78564',
    city: 'Wehingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.1453,
    longitude: 8.7915
  },
  {
    id: 2356,
    zipCode: '78564',
    city: 'Reichenbach am Heuberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.1333,
    longitude: 8.85
  },
  {
    id: 2357,
    zipCode: '78567',
    city: 'Fridingen an der Donau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0196,
    longitude: 8.9232
  },
  {
    id: 2358,
    zipCode: '78570',
    city: 'M\u00fchlheim an der Donau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0312,
    longitude: 8.8836
  },
  {
    id: 2359,
    zipCode: '78573',
    city: 'Wurmlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0,
    longitude: 8.7833
  },
  {
    id: 2360,
    zipCode: '78576',
    city: 'Emmingen-Liptingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 47.9333,
    longitude: 8.8833
  },
  {
    id: 2361,
    zipCode: '78579',
    city: 'Neuhausen ob Eck',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 47.9726,
    longitude: 8.9276
  },
  {
    id: 2362,
    zipCode: '78580',
    city: 'B\u00e4renthal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0667,
    longitude: 8.9333
  },
  {
    id: 2363,
    zipCode: '78582',
    city: 'Balgheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0667,
    longitude: 8.7667
  },
  {
    id: 2364,
    zipCode: '78583',
    city: 'B\u00f6ttingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.1,
    longitude: 8.8
  },
  {
    id: 2365,
    zipCode: '78585',
    city: 'Bubsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.1167,
    longitude: 8.8333
  },
  {
    id: 2366,
    zipCode: '78586',
    city: 'Deilingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.1741,
    longitude: 8.7853
  },
  {
    id: 2367,
    zipCode: '78588',
    city: 'Denkingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.1111,
    longitude: 8.7382
  },
  {
    id: 2368,
    zipCode: '78589',
    city: 'D\u00fcrbheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0562,
    longitude: 8.7934
  },
  {
    id: 2369,
    zipCode: '78591',
    city: 'Durchhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0397,
    longitude: 8.6749
  },
  {
    id: 2370,
    zipCode: '78592',
    city: 'Egesheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.1172,
    longitude: 8.8564
  },
  {
    id: 2371,
    zipCode: '78594',
    city: 'Gunningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.05,
    longitude: 8.7
  },
  {
    id: 2372,
    zipCode: '78595',
    city: 'Hausen ob Verena',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0537,
    longitude: 8.7247
  },
  {
    id: 2373,
    zipCode: '78597',
    city: 'Irndorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0667,
    longitude: 8.9667
  },
  {
    id: 2374,
    zipCode: '78598',
    city: 'K\u00f6nigsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.1,
    longitude: 8.8667
  },
  {
    id: 2375,
    zipCode: '78600',
    city: 'Kolbingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0523,
    longitude: 8.8896
  },
  {
    id: 2376,
    zipCode: '78601',
    city: 'Mahlstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0748,
    longitude: 8.8351
  },
  {
    id: 2377,
    zipCode: '78603',
    city: 'Renquishausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0833,
    longitude: 8.9
  },
  {
    id: 2378,
    zipCode: '78604',
    city: 'Rietheim-Weilheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0167,
    longitude: 8.7667
  },
  {
    id: 2379,
    zipCode: '78606',
    city: 'Seitingen-Oberflacht',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0167,
    longitude: 8.7167
  },
  {
    id: 2380,
    zipCode: '78607',
    city: 'Talheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0167,
    longitude: 8.6667
  },
  {
    id: 2381,
    zipCode: '78609',
    city: 'Tuningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Schwarzwald-Baar-Kreis',
    latitude: 48.0333,
    longitude: 8.6
  },
  {
    id: 2382,
    zipCode: '78628',
    city: 'Rottweil',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.1678,
    longitude: 8.6272
  },
  {
    id: 2383,
    zipCode: '78647',
    city: 'Trossingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0767,
    longitude: 8.6441
  },
  {
    id: 2384,
    zipCode: '78652',
    city: 'Dei\u00dflingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.1123,
    longitude: 8.6074
  },
  {
    id: 2385,
    zipCode: '78655',
    city: 'Dunningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.2124,
    longitude: 8.5062
  },
  {
    id: 2386,
    zipCode: '78658',
    city: 'Zimmern ob Rottweil',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.1666,
    longitude: 8.5944
  },
  {
    id: 2387,
    zipCode: '78661',
    city: 'Dietingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.2048,
    longitude: 8.6486
  },
  {
    id: 2388,
    zipCode: '78662',
    city: 'B\u00f6singen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.2333,
    longitude: 8.55
  },
  {
    id: 2389,
    zipCode: '78664',
    city: 'Eschbronn',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.25,
    longitude: 8.4667
  },
  {
    id: 2390,
    zipCode: '78665',
    city: 'Frittlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.1271,
    longitude: 8.7077
  },
  {
    id: 2391,
    zipCode: '78667',
    city: 'Villingendorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.2,
    longitude: 8.5833
  },
  {
    id: 2392,
    zipCode: '78669',
    city: 'Wellendingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.1474,
    longitude: 8.7037
  },
  {
    id: 2393,
    zipCode: '78713',
    city: 'Schramberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.224,
    longitude: 8.3858
  },
  {
    id: 2394,
    zipCode: '78727',
    city: 'Oberndorf am Neckar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.3005,
    longitude: 8.5738
  },
  {
    id: 2395,
    zipCode: '78730',
    city: 'Lauterbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.2333,
    longitude: 8.35
  },
  {
    id: 2396,
    zipCode: '78733',
    city: 'Aichhalden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.2672,
    longitude: 8.4023
  },
  {
    id: 2397,
    zipCode: '78736',
    city: 'Epfendorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.25,
    longitude: 8.6
  },
  {
    id: 2398,
    zipCode: '78737',
    city: 'Fluorn-Winzeln',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.2917,
    longitude: 8.4917
  },
  {
    id: 2399,
    zipCode: '78739',
    city: 'Hardt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Rottweil',
    latitude: 48.1833,
    longitude: 8.4167
  },
  {
    id: 2400,
    zipCode: '79098',
    city: 'Freiburg im Breisgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freiburg im Breisgau',
    latitude: 47.9942,
    longitude: 7.847
  },
  {
    id: 2401,
    zipCode: '79100',
    city: 'Freiburg im Breisgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freiburg im Breisgau',
    latitude: 47.9809,
    longitude: 7.8327
  },
  {
    id: 2402,
    zipCode: '79102',
    city: 'Freiburg im Breisgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freiburg im Breisgau',
    latitude: 48.0,
    longitude: 7.85
  },
  {
    id: 2403,
    zipCode: '79104',
    city: 'Freiburg im Breisgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freiburg im Breisgau',
    latitude: 48.0098,
    longitude: 7.8545
  },
  {
    id: 2404,
    zipCode: '79106',
    city: 'Freiburg im Breisgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freiburg im Breisgau',
    latitude: 48.0,
    longitude: 7.85
  },
  {
    id: 2405,
    zipCode: '79108',
    city: 'Freiburg im Breisgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freiburg im Breisgau',
    latitude: 48.0339,
    longitude: 7.8418
  },
  {
    id: 2406,
    zipCode: '79110',
    city: 'Freiburg im Breisgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freiburg im Breisgau',
    latitude: 48.0207,
    longitude: 7.8167
  },
  {
    id: 2407,
    zipCode: '79111',
    city: 'Freiburg im Breisgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freiburg im Breisgau',
    latitude: 47.9809,
    longitude: 7.7957
  },
  {
    id: 2408,
    zipCode: '79112',
    city: 'Freiburg im Breisgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freiburg im Breisgau',
    latitude: 48.0,
    longitude: 7.85
  },
  {
    id: 2409,
    zipCode: '79114',
    city: 'Freiburg im Breisgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freiburg im Breisgau',
    latitude: 48.0018,
    longitude: 7.818
  },
  {
    id: 2410,
    zipCode: '79115',
    city: 'Freiburg im Breisgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freiburg im Breisgau',
    latitude: 47.9793,
    longitude: 7.822
  },
  {
    id: 2411,
    zipCode: '79117',
    city: 'Freiburg im Breisgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Freiburg im Breisgau',
    latitude: 47.9874,
    longitude: 7.8945
  },
  {
    id: 2412,
    zipCode: '79183',
    city: 'Waldkirch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.0959,
    longitude: 7.9637
  },
  {
    id: 2413,
    zipCode: '79189',
    city: 'Bad Krozingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9167,
    longitude: 7.7
  },
  {
    id: 2414,
    zipCode: '79194',
    city: 'Gundelfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 48.0425,
    longitude: 7.8657
  },
  {
    id: 2415,
    zipCode: '79194',
    city: 'Heuweiler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 48.05,
    longitude: 7.9
  },
  {
    id: 2416,
    zipCode: '79199',
    city: 'Kirchzarten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9667,
    longitude: 7.95
  },
  {
    id: 2417,
    zipCode: '79206',
    city: 'Breisach am Rhein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 48.0328,
    longitude: 7.5829
  },
  {
    id: 2418,
    zipCode: '79211',
    city: 'Denzlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.0667,
    longitude: 7.8833
  },
  {
    id: 2419,
    zipCode: '79215',
    city: 'Elzach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.1725,
    longitude: 8.0699
  },
  {
    id: 2420,
    zipCode: '79215',
    city: 'Biederbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.2,
    longitude: 8.0333
  },
  {
    id: 2421,
    zipCode: '79219',
    city: 'Staufen im Breisgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.8823,
    longitude: 7.7282
  },
  {
    id: 2422,
    zipCode: '79224',
    city: 'Umkirch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 48.0333,
    longitude: 7.7667
  },
  {
    id: 2423,
    zipCode: '79227',
    city: 'Schallstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9585,
    longitude: 7.7575
  },
  {
    id: 2424,
    zipCode: '79232',
    city: 'March',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 48.0681,
    longitude: 7.7788
  },
  {
    id: 2425,
    zipCode: '79235',
    city: 'Vogtsburg im Kaiserstuhl',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 48.0833,
    longitude: 7.6333
  },
  {
    id: 2426,
    zipCode: '79238',
    city: 'Ehrenkirchen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9156,
    longitude: 7.7519
  },
  {
    id: 2427,
    zipCode: '79241',
    city: 'Ihringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 48.043,
    longitude: 7.6476
  },
  {
    id: 2428,
    zipCode: '79244',
    city: 'M\u00fcnstertal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.85,
    longitude: 7.7833
  },
  {
    id: 2429,
    zipCode: '79249',
    city: 'Merzhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9667,
    longitude: 7.8333
  },
  {
    id: 2430,
    zipCode: '79252',
    city: 'Stegen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9833,
    longitude: 7.9667
  },
  {
    id: 2431,
    zipCode: '79254',
    city: 'Oberried',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9333,
    longitude: 7.95
  },
  {
    id: 2432,
    zipCode: '79256',
    city: 'Buchenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9614,
    longitude: 8.0091
  },
  {
    id: 2433,
    zipCode: '79258',
    city: 'Hartheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9333,
    longitude: 7.6333
  },
  {
    id: 2434,
    zipCode: '79261',
    city: 'Gutach im Breisgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.1167,
    longitude: 7.9833
  },
  {
    id: 2435,
    zipCode: '79263',
    city: 'Simonswald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.1004,
    longitude: 8.0525
  },
  {
    id: 2436,
    zipCode: '79268',
    city: 'B\u00f6tzingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 48.0764,
    longitude: 7.7248
  },
  {
    id: 2437,
    zipCode: '79271',
    city: 'Sankt Peter',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 48.0147,
    longitude: 8.0329
  },
  {
    id: 2438,
    zipCode: '79274',
    city: 'Sankt M\u00e4rgen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 48.008,
    longitude: 8.0928
  },
  {
    id: 2439,
    zipCode: '79276',
    city: 'Reute',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.0833,
    longitude: 7.8167
  },
  {
    id: 2440,
    zipCode: '79279',
    city: 'V\u00f6rstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.0667,
    longitude: 7.85
  },
  {
    id: 2441,
    zipCode: '79280',
    city: 'Au',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.95,
    longitude: 7.8333
  },
  {
    id: 2442,
    zipCode: '79282',
    city: 'Ballrechten-Dottingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.8583,
    longitude: 7.6917
  },
  {
    id: 2443,
    zipCode: '79283',
    city: 'Bollschweil',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9214,
    longitude: 7.7899
  },
  {
    id: 2444,
    zipCode: '79285',
    city: 'Ebringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9578,
    longitude: 7.7765
  },
  {
    id: 2445,
    zipCode: '79286',
    city: 'Glottertal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 48.0508,
    longitude: 7.9634
  },
  {
    id: 2446,
    zipCode: '79288',
    city: 'Gottenheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 48.05,
    longitude: 7.7333
  },
  {
    id: 2447,
    zipCode: '79289',
    city: 'Horben',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9333,
    longitude: 7.8667
  },
  {
    id: 2448,
    zipCode: '79291',
    city: 'Merdingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 48.0167,
    longitude: 7.6833
  },
  {
    id: 2449,
    zipCode: '79292',
    city: 'Pfaffenweiler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9333,
    longitude: 7.75
  },
  {
    id: 2450,
    zipCode: '79294',
    city: 'S\u00f6lden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9333,
    longitude: 7.8167
  },
  {
    id: 2451,
    zipCode: '79295',
    city: 'Sulzburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.8412,
    longitude: 7.7078
  },
  {
    id: 2452,
    zipCode: '79297',
    city: 'Winden im Elztal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.144,
    longitude: 8.0469
  },
  {
    id: 2453,
    zipCode: '79299',
    city: 'Wittnau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.95,
    longitude: 7.8167
  },
  {
    id: 2454,
    zipCode: '79312',
    city: 'Emmendingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.121,
    longitude: 7.8536
  },
  {
    id: 2455,
    zipCode: '79331',
    city: 'Teningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.1295,
    longitude: 7.8121
  },
  {
    id: 2456,
    zipCode: '79336',
    city: 'Herbolzheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.2188,
    longitude: 7.7775
  },
  {
    id: 2457,
    zipCode: '79341',
    city: 'Kenzingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.1963,
    longitude: 7.7697
  },
  {
    id: 2458,
    zipCode: '79346',
    city: 'Endingen am Kaiserstuhl',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.1333,
    longitude: 7.7
  },
  {
    id: 2459,
    zipCode: '79348',
    city: 'Freiamt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.1667,
    longitude: 7.9167
  },
  {
    id: 2460,
    zipCode: '79350',
    city: 'Sexau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.1021,
    longitude: 7.9076
  },
  {
    id: 2461,
    zipCode: '79353',
    city: 'Bahlingen am Kaiserstuhl',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.1228,
    longitude: 7.7389
  },
  {
    id: 2462,
    zipCode: '79356',
    city: 'Eichstetten am Kaiserstuhl',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 48.0833,
    longitude: 7.7333
  },
  {
    id: 2463,
    zipCode: '79359',
    city: 'Riegel am Kaiserstuhl',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.15,
    longitude: 7.75
  },
  {
    id: 2464,
    zipCode: '79361',
    city: 'Sasbach am Kaiserstuhl',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.1333,
    longitude: 7.6167
  },
  {
    id: 2465,
    zipCode: '79362',
    city: 'Forchheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.1667,
    longitude: 7.7
  },
  {
    id: 2466,
    zipCode: '79364',
    city: 'Malterdingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.1572,
    longitude: 7.7861
  },
  {
    id: 2467,
    zipCode: '79365',
    city: 'Rheinhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.2266,
    longitude: 7.7109
  },
  {
    id: 2468,
    zipCode: '79367',
    city: 'Weisweil',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.1994,
    longitude: 7.6771
  },
  {
    id: 2469,
    zipCode: '79369',
    city: 'Wyhl am Kaiserstuhl',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Emmendingen',
    latitude: 48.1667,
    longitude: 7.65
  },
  {
    id: 2470,
    zipCode: '79379',
    city: 'M\u00fcllheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.8082,
    longitude: 7.6303
  },
  {
    id: 2471,
    zipCode: '79395',
    city: 'Neuenburg am Rhein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.8143,
    longitude: 7.5601
  },
  {
    id: 2472,
    zipCode: '79400',
    city: 'Kandern',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7139,
    longitude: 7.6624
  },
  {
    id: 2473,
    zipCode: '79410',
    city: 'Badenweiler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.8022,
    longitude: 7.6724
  },
  {
    id: 2474,
    zipCode: '79415',
    city: 'Bad Bellingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7315,
    longitude: 7.5576
  },
  {
    id: 2475,
    zipCode: '79418',
    city: 'Schliengen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.757,
    longitude: 7.5764
  },
  {
    id: 2476,
    zipCode: '79423',
    city: 'Heitersheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.8747,
    longitude: 7.6572
  },
  {
    id: 2477,
    zipCode: '79424',
    city: 'Auggen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.7833,
    longitude: 7.6
  },
  {
    id: 2478,
    zipCode: '79426',
    city: 'Buggingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.8475,
    longitude: 7.638
  },
  {
    id: 2479,
    zipCode: '79427',
    city: 'Eschbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.891,
    longitude: 7.6554
  },
  {
    id: 2480,
    zipCode: '79429',
    city: 'Malsburg-Marzell',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7333,
    longitude: 7.7083
  },
  {
    id: 2481,
    zipCode: '79513',
    city: 'R\u00f6ttlerweiler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.6324,
    longitude: 7.6594
  },
  {
    id: 2482,
    zipCode: '79539',
    city: 'L\u00f6rrach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.6181,
    longitude: 7.6589
  },
  {
    id: 2483,
    zipCode: '79540',
    city: 'L\u00f6rrach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.6167,
    longitude: 7.6667
  },
  {
    id: 2484,
    zipCode: '79541',
    city: 'L\u00f6rrach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.6335,
    longitude: 7.6922
  },
  {
    id: 2485,
    zipCode: '79576',
    city: 'Weil am Rhein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.5933,
    longitude: 7.6208
  },
  {
    id: 2486,
    zipCode: '79578',
    city: 'Steinen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.65,
    longitude: 7.733
  },
  {
    id: 2487,
    zipCode: '79585',
    city: 'Steinen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.65,
    longitude: 7.7333
  },
  {
    id: 2488,
    zipCode: '79588',
    city: 'Efringen-Kirchen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.65,
    longitude: 7.5667
  },
  {
    id: 2489,
    zipCode: '79589',
    city: 'Binzen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.6333,
    longitude: 7.6167
  },
  {
    id: 2490,
    zipCode: '79591',
    city: 'Eimeldingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.6333,
    longitude: 7.6
  },
  {
    id: 2491,
    zipCode: '79592',
    city: 'Fischingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.65,
    longitude: 7.6
  },
  {
    id: 2492,
    zipCode: '79594',
    city: 'Inzlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.5885,
    longitude: 7.6909
  },
  {
    id: 2493,
    zipCode: '79595',
    city: 'R\u00fcmmingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.6412,
    longitude: 7.642
  },
  {
    id: 2494,
    zipCode: '79597',
    city: 'Schallbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.65,
    longitude: 7.6333
  },
  {
    id: 2495,
    zipCode: '79599',
    city: 'Wittlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.6553,
    longitude: 7.6511
  },
  {
    id: 2496,
    zipCode: '79618',
    city: 'Rheinfelden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.5723,
    longitude: 7.7842
  },
  {
    id: 2497,
    zipCode: '79639',
    city: 'Grenzach-Wyhlen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.55,
    longitude: 7.6833
  },
  {
    id: 2498,
    zipCode: '79650',
    city: 'Schopfheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.6511,
    longitude: 7.8209
  },
  {
    id: 2499,
    zipCode: '79664',
    city: 'Wehr',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.6298,
    longitude: 7.9042
  },
  {
    id: 2500,
    zipCode: '79669',
    city: 'Zell im Wiesental',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7055,
    longitude: 7.8525
  },
  {
    id: 2501,
    zipCode: '79674',
    city: 'Todtnau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.8294,
    longitude: 7.9438
  },
  {
    id: 2502,
    zipCode: '79677',
    city: 'Sch\u00f6nau im Schwarzwald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7862,
    longitude: 7.8944
  },
  {
    id: 2503,
    zipCode: '79677',
    city: 'Fr\u00f6hnd',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7595,
    longitude: 7.8857
  },
  {
    id: 2504,
    zipCode: '79677',
    city: 'Tunau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7861,
    longitude: 7.9243
  },
  {
    id: 2505,
    zipCode: '79677',
    city: 'Wembach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7725,
    longitude: 7.8869
  },
  {
    id: 2506,
    zipCode: '79677',
    city: 'Sch\u00f6nenberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7938,
    longitude: 7.8825
  },
  {
    id: 2507,
    zipCode: '79677',
    city: 'B\u00f6llen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.8,
    longitude: 7.8413
  },
  {
    id: 2508,
    zipCode: '79677',
    city: 'Aitern',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.8,
    longitude: 7.9
  },
  {
    id: 2509,
    zipCode: '79682',
    city: 'Todtmoos',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.7401,
    longitude: 8.0018
  },
  {
    id: 2510,
    zipCode: '79683',
    city: 'B\u00fcrchau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7739,
    longitude: 7.8272
  },
  {
    id: 2511,
    zipCode: '79685',
    city: 'H\u00e4g-Ehrsberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7417,
    longitude: 7.9083
  },
  {
    id: 2512,
    zipCode: '79686',
    city: 'Hasel',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.6534,
    longitude: 7.8972
  },
  {
    id: 2513,
    zipCode: '79688',
    city: 'Hausen im Wiesental',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.6833,
    longitude: 7.85
  },
  {
    id: 2514,
    zipCode: '79689',
    city: 'Maulburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.6463,
    longitude: 7.7821
  },
  {
    id: 2515,
    zipCode: '79691',
    city: 'Neuenweg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7956,
    longitude: 7.8274
  },
  {
    id: 2516,
    zipCode: '79692',
    city: 'Sallneck',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7228,
    longitude: 7.7715
  },
  {
    id: 2517,
    zipCode: '79692',
    city: 'Tegernau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7204,
    longitude: 7.7945
  },
  {
    id: 2518,
    zipCode: '79692',
    city: 'Elbenschwand',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7507,
    longitude: 7.8297
  },
  {
    id: 2519,
    zipCode: '79692',
    city: 'Raich',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7505,
    longitude: 7.7969
  },
  {
    id: 2520,
    zipCode: '79694',
    city: 'Utzenfeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.8,
    longitude: 7.9167
  },
  {
    id: 2521,
    zipCode: '79695',
    city: 'Wieden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.8414,
    longitude: 7.882
  },
  {
    id: 2522,
    zipCode: '79697',
    city: 'Wies',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.7479,
    longitude: 7.7675
  },
  {
    id: 2523,
    zipCode: '79699',
    city: 'Wieslet',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.688,
    longitude: 7.798
  },
  {
    id: 2524,
    zipCode: '79713',
    city: 'Bad S\u00e4ckingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.5537,
    longitude: 7.9461
  },
  {
    id: 2525,
    zipCode: '79725',
    city: 'Laufenburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.5651,
    longitude: 8.0604
  },
  {
    id: 2526,
    zipCode: '79730',
    city: 'Murg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.5549,
    longitude: 8.0218
  },
  {
    id: 2527,
    zipCode: '79733',
    city: 'G\u00f6rwihl',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.6427,
    longitude: 8.0748
  },
  {
    id: 2528,
    zipCode: '79736',
    city: 'Rickenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.619,
    longitude: 7.9787
  },
  {
    id: 2529,
    zipCode: '79737',
    city: 'Herrischried',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.6667,
    longitude: 8.0
  },
  {
    id: 2530,
    zipCode: '79739',
    city: 'Schw\u00f6rstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis L\u00f6rrach',
    latitude: 47.5931,
    longitude: 7.8784
  },
  {
    id: 2531,
    zipCode: '79761',
    city: 'Waldshut-Tiengen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.6232,
    longitude: 8.2172
  },
  {
    id: 2532,
    zipCode: '79771',
    city: 'Klettgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.65,
    longitude: 8.4
  },
  {
    id: 2533,
    zipCode: '79774',
    city: 'Albbruck',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.5908,
    longitude: 8.1295
  },
  {
    id: 2534,
    zipCode: '79777',
    city: '\u00dchlingen-Birkendorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.7167,
    longitude: 8.3167
  },
  {
    id: 2535,
    zipCode: '79780',
    city: 'St\u00fchlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.7458,
    longitude: 8.4481
  },
  {
    id: 2536,
    zipCode: '79787',
    city: 'Lauchringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.627,
    longitude: 8.3144
  },
  {
    id: 2537,
    zipCode: '79790',
    city: 'K\u00fcssaberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.6,
    longitude: 8.32
  },
  {
    id: 2538,
    zipCode: '79793',
    city: 'Wut\u00f6schingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.6602,
    longitude: 8.3675
  },
  {
    id: 2539,
    zipCode: '79798',
    city: 'Jestetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.65,
    longitude: 8.5667
  },
  {
    id: 2540,
    zipCode: '79801',
    city: 'Hohentengen am Hochrhein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.57,
    longitude: 8.4325
  },
  {
    id: 2541,
    zipCode: '79802',
    city: 'Dettighofen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.6233,
    longitude: 8.4851
  },
  {
    id: 2542,
    zipCode: '79804',
    city: 'Dogern',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.6095,
    longitude: 8.1671
  },
  {
    id: 2543,
    zipCode: '79805',
    city: 'Eggingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.7,
    longitude: 8.4
  },
  {
    id: 2544,
    zipCode: '79807',
    city: 'Lottstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.6333,
    longitude: 8.5667
  },
  {
    id: 2545,
    zipCode: '79809',
    city: 'Weilheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.6667,
    longitude: 8.2333
  },
  {
    id: 2546,
    zipCode: '79822',
    city: 'Titisee-Neustadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.921,
    longitude: 8.1906
  },
  {
    id: 2547,
    zipCode: '79837',
    city: 'H\u00e4usern',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.75,
    longitude: 8.1667
  },
  {
    id: 2548,
    zipCode: '79837',
    city: 'Ibach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.7333,
    longitude: 8.0667
  },
  {
    id: 2549,
    zipCode: '79837',
    city: 'Sankt Blasien',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.7625,
    longitude: 8.1271
  },
  {
    id: 2550,
    zipCode: '79843',
    city: 'L\u00f6ffingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.8841,
    longitude: 8.3438
  },
  {
    id: 2551,
    zipCode: '79848',
    city: 'Bonndorf im Schwarzwald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.8186,
    longitude: 8.3414
  },
  {
    id: 2552,
    zipCode: '79853',
    city: 'Lenzkirch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.8683,
    longitude: 8.2021
  },
  {
    id: 2553,
    zipCode: '79856',
    city: 'Hinterzarten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9028,
    longitude: 8.107
  },
  {
    id: 2554,
    zipCode: '79859',
    city: 'Schluchsee',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.8167,
    longitude: 8.1833
  },
  {
    id: 2555,
    zipCode: '79862',
    city: 'H\u00f6chenschwand',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.7333,
    longitude: 8.1667
  },
  {
    id: 2556,
    zipCode: '79865',
    city: 'Grafenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.775,
    longitude: 8.2573
  },
  {
    id: 2557,
    zipCode: '79868',
    city: 'Feldberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.865,
    longitude: 8.0704
  },
  {
    id: 2558,
    zipCode: '79871',
    city: 'Eisenbach (Hochschwarzwald)',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9667,
    longitude: 8.2667
  },
  {
    id: 2559,
    zipCode: '79872',
    city: 'Bernau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.8002,
    longitude: 8.0383
  },
  {
    id: 2560,
    zipCode: '79874',
    city: 'Breitnau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9333,
    longitude: 8.0833
  },
  {
    id: 2561,
    zipCode: '79875',
    city: 'Dachsberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.7295,
    longitude: 8.1
  },
  {
    id: 2562,
    zipCode: '79877',
    city: 'Friedenweiler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Breisgau-Hochschwarzwald',
    latitude: 47.9178,
    longitude: 8.2563
  },
  {
    id: 2563,
    zipCode: '79879',
    city: 'Wutach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Waldshut',
    latitude: 47.8333,
    longitude: 8.4333
  },
  {
    id: 2564,
    zipCode: '88637',
    city: 'Buchheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Tuttlingen',
    latitude: 48.0104,
    longitude: 8.986
  },
  {
    id: 2565,
    zipCode: '72070',
    city: 'T\u00fcbingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.5241,
    longitude: 9.0177
  },
  {
    id: 2566,
    zipCode: '72072',
    city: 'T\u00fcbingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.5166,
    longitude: 9.0581
  },
  {
    id: 2567,
    zipCode: '72074',
    city: 'T\u00fcbingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.5311,
    longitude: 9.0705
  },
  {
    id: 2568,
    zipCode: '72076',
    city: 'T\u00fcbingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.5369,
    longitude: 9.0536
  },
  {
    id: 2569,
    zipCode: '72108',
    city: 'Rottenburg am Neckar',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.4796,
    longitude: 8.95
  },
  {
    id: 2570,
    zipCode: '72116',
    city: 'M\u00f6ssingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.4057,
    longitude: 9.0542
  },
  {
    id: 2571,
    zipCode: '72119',
    city: 'Ammerbuch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.5534,
    longitude: 8.9722
  },
  {
    id: 2572,
    zipCode: '72124',
    city: 'Pliezhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.5593,
    longitude: 9.2075
  },
  {
    id: 2573,
    zipCode: '72127',
    city: 'Kusterdingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.5229,
    longitude: 9.1198
  },
  {
    id: 2574,
    zipCode: '72131',
    city: 'Ofterdingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.4167,
    longitude: 9.0333
  },
  {
    id: 2575,
    zipCode: '72135',
    city: 'Dettenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.6076,
    longitude: 9.1004
  },
  {
    id: 2576,
    zipCode: '72138',
    city: 'Kirchentellinsfurt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.5331,
    longitude: 9.1473
  },
  {
    id: 2577,
    zipCode: '72141',
    city: 'Walddorfh\u00e4slach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.587,
    longitude: 9.1814
  },
  {
    id: 2578,
    zipCode: '72144',
    city: 'Du\u00dflingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.4536,
    longitude: 9.0555
  },
  {
    id: 2579,
    zipCode: '72145',
    city: 'Hirrlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.4125,
    longitude: 8.8874
  },
  {
    id: 2580,
    zipCode: '72147',
    city: 'Nehren',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.431,
    longitude: 9.0699
  },
  {
    id: 2581,
    zipCode: '72149',
    city: 'Neustetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.4833,
    longitude: 8.8833
  },
  {
    id: 2582,
    zipCode: '72181',
    city: 'Starzach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.4333,
    longitude: 8.8167
  },
  {
    id: 2583,
    zipCode: '72336',
    city: 'Balingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.2753,
    longitude: 8.8546
  },
  {
    id: 2584,
    zipCode: '72348',
    city: 'Rosenfeld',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.2864,
    longitude: 8.7236
  },
  {
    id: 2585,
    zipCode: '72351',
    city: 'Geislingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.2877,
    longitude: 8.8124
  },
  {
    id: 2586,
    zipCode: '72355',
    city: 'Sch\u00f6mberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.21,
    longitude: 8.7595
  },
  {
    id: 2587,
    zipCode: '72356',
    city: 'Dautmergen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.242,
    longitude: 8.7414
  },
  {
    id: 2588,
    zipCode: '72358',
    city: 'Dormettingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.2369,
    longitude: 8.7733
  },
  {
    id: 2589,
    zipCode: '72359',
    city: 'Dotternhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.2285,
    longitude: 8.7923
  },
  {
    id: 2590,
    zipCode: '72361',
    city: 'Hausen am Tann',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.1983,
    longitude: 8.8363
  },
  {
    id: 2591,
    zipCode: '72362',
    city: 'Nusplingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.1326,
    longitude: 8.8915
  },
  {
    id: 2592,
    zipCode: '72364',
    city: 'Obernheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.163,
    longitude: 8.8611
  },
  {
    id: 2593,
    zipCode: '72365',
    city: 'Ratshausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.1937,
    longitude: 8.7952
  },
  {
    id: 2594,
    zipCode: '72367',
    city: 'Weilen unter den Rinnen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.1898,
    longitude: 8.7649
  },
  {
    id: 2595,
    zipCode: '72369',
    city: 'Zimmern unter der Burg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.2205,
    longitude: 8.7193
  },
  {
    id: 2596,
    zipCode: '72379',
    city: 'Hechingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.3515,
    longitude: 8.9632
  },
  {
    id: 2597,
    zipCode: '72393',
    city: 'Burladingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.2911,
    longitude: 9.1129
  },
  {
    id: 2598,
    zipCode: '72401',
    city: 'Haigerloch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.3661,
    longitude: 8.8036
  },
  {
    id: 2599,
    zipCode: '72406',
    city: 'Bisingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.3101,
    longitude: 8.9174
  },
  {
    id: 2600,
    zipCode: '72411',
    city: 'Bodelshausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.3889,
    longitude: 8.977
  },
  {
    id: 2601,
    zipCode: '72414',
    city: 'Rangendingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.3817,
    longitude: 8.8894
  },
  {
    id: 2602,
    zipCode: '72415',
    city: 'Grosselfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.3323,
    longitude: 8.887
  },
  {
    id: 2603,
    zipCode: '72417',
    city: 'Jungingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.3279,
    longitude: 9.041
  },
  {
    id: 2604,
    zipCode: '72419',
    city: 'Neufra',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.2477,
    longitude: 9.1831
  },
  {
    id: 2605,
    zipCode: '72458',
    city: 'Albstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.2135,
    longitude: 9.0263
  },
  {
    id: 2606,
    zipCode: '72459',
    city: 'Albstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.2167,
    longitude: 9.0167
  },
  {
    id: 2607,
    zipCode: '72461',
    city: 'Albstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.251,
    longitude: 9.0182
  },
  {
    id: 2608,
    zipCode: '72469',
    city: 'Me\u00dfstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.1832,
    longitude: 8.9657
  },
  {
    id: 2609,
    zipCode: '72474',
    city: 'Winterlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.1833,
    longitude: 9.1167
  },
  {
    id: 2610,
    zipCode: '72475',
    city: 'Bitz',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.244,
    longitude: 9.0914
  },
  {
    id: 2611,
    zipCode: '72477',
    city: 'Schwenningen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.1,
    longitude: 9.0
  },
  {
    id: 2612,
    zipCode: '72479',
    city: 'Stra\u00dfberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Zollernalbkreis',
    latitude: 48.178,
    longitude: 9.0906
  },
  {
    id: 2613,
    zipCode: '72488',
    city: 'Sigmaringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.0883,
    longitude: 9.2303
  },
  {
    id: 2614,
    zipCode: '72501',
    city: 'Gammertingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.2524,
    longitude: 9.2235
  },
  {
    id: 2615,
    zipCode: '72505',
    city: 'Krauchenwies',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.0165,
    longitude: 9.2476
  },
  {
    id: 2616,
    zipCode: '72510',
    city: 'Stetten am kalten Markt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.1167,
    longitude: 9.0833
  },
  {
    id: 2617,
    zipCode: '72511',
    city: 'Bingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.1113,
    longitude: 9.2724
  },
  {
    id: 2618,
    zipCode: '72513',
    city: 'Hettingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.216,
    longitude: 9.2317
  },
  {
    id: 2619,
    zipCode: '72514',
    city: 'Inzigkofen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.0703,
    longitude: 9.18
  },
  {
    id: 2620,
    zipCode: '72516',
    city: 'Scheer',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.0729,
    longitude: 9.2949
  },
  {
    id: 2621,
    zipCode: '72517',
    city: 'Sigmaringendorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.0659,
    longitude: 9.2621
  },
  {
    id: 2622,
    zipCode: '72519',
    city: 'Veringenstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.1851,
    longitude: 9.2108
  },
  {
    id: 2623,
    zipCode: '72525',
    city: 'M\u00fcnsingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.4113,
    longitude: 9.497
  },
  {
    id: 2624,
    zipCode: '72531',
    city: 'Hohenstein Oberstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.3308,
    longitude: 9.3306
  },
  {
    id: 2625,
    zipCode: '72531',
    city: 'Hohenstein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.3323,
    longitude: 9.3326
  },
  {
    id: 2626,
    zipCode: '72531',
    city: 'Hohenstein Eglingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.3514,
    longitude: 9.4282
  },
  {
    id: 2627,
    zipCode: '72531',
    city: 'Hohenstein \u00d6denwaldstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.3489,
    longitude: 9.374
  },
  {
    id: 2628,
    zipCode: '72531',
    city: 'Hohenstein Bernloch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.3593,
    longitude: 9.3327
  },
  {
    id: 2629,
    zipCode: '72531',
    city: 'Hohenstein Meidelstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.346,
    longitude: 9.3086
  },
  {
    id: 2630,
    zipCode: '72532',
    city: 'Gomadingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.3998,
    longitude: 9.3906
  },
  {
    id: 2631,
    zipCode: '72534',
    city: 'Hayingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.2753,
    longitude: 9.4776
  },
  {
    id: 2632,
    zipCode: '72535',
    city: 'Heroldstatt Sontheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4472,
    longitude: 9.6731
  },
  {
    id: 2633,
    zipCode: '72535',
    city: 'Heroldstatt Ennabeuren',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4428,
    longitude: 9.6511
  },
  {
    id: 2634,
    zipCode: '72535',
    city: 'Heroldstatt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4469,
    longitude: 9.6685
  },
  {
    id: 2635,
    zipCode: '72537',
    city: 'Mehrstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.3761,
    longitude: 9.566
  },
  {
    id: 2636,
    zipCode: '72539',
    city: 'Pfronstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.2764,
    longitude: 9.36
  },
  {
    id: 2637,
    zipCode: '72555',
    city: 'Metzingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.537,
    longitude: 9.2833
  },
  {
    id: 2638,
    zipCode: '72574',
    city: 'Bad Urach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.4911,
    longitude: 9.4001
  },
  {
    id: 2639,
    zipCode: '72581',
    city: 'Dettingen an der Erms',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.5308,
    longitude: 9.3446
  },
  {
    id: 2640,
    zipCode: '72582',
    city: 'Grabenstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.524,
    longitude: 9.4615
  },
  {
    id: 2641,
    zipCode: '72584',
    city: 'H\u00fclben',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.5198,
    longitude: 9.4079
  },
  {
    id: 2642,
    zipCode: '72585',
    city: 'Riederich',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.5603,
    longitude: 9.2688
  },
  {
    id: 2643,
    zipCode: '72587',
    city: 'R\u00f6merstein Donnstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.5161,
    longitude: 9.5658
  },
  {
    id: 2644,
    zipCode: '72587',
    city: 'R\u00f6merstein Zainingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.483,
    longitude: 9.5473
  },
  {
    id: 2645,
    zipCode: '72587',
    city: 'R\u00f6merstein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.4962,
    longitude: 9.5148
  },
  {
    id: 2646,
    zipCode: '72589',
    city: 'Westerheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5151,
    longitude: 9.6242
  },
  {
    id: 2647,
    zipCode: '72661',
    city: 'Grafenberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.565,
    longitude: 9.3019
  },
  {
    id: 2648,
    zipCode: '72760',
    city: 'Reutlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.5094,
    longitude: 9.204
  },
  {
    id: 2649,
    zipCode: '72762',
    city: 'Reutlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.4845,
    longitude: 9.1939
  },
  {
    id: 2650,
    zipCode: '72764',
    city: 'Reutlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.4931,
    longitude: 9.2125
  },
  {
    id: 2651,
    zipCode: '72766',
    city: 'Reutlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.511,
    longitude: 9.2232
  },
  {
    id: 2652,
    zipCode: '72768',
    city: 'Reutlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.4833,
    longitude: 9.2167
  },
  {
    id: 2653,
    zipCode: '72770',
    city: 'Reutlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.4942,
    longitude: 9.1666
  },
  {
    id: 2654,
    zipCode: '72793',
    city: 'Pfullingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.4646,
    longitude: 9.228
  },
  {
    id: 2655,
    zipCode: '72800',
    city: 'Eningen unter Achalm',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.4869,
    longitude: 9.2595
  },
  {
    id: 2656,
    zipCode: '72805',
    city: 'Lichtenstein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.4396,
    longitude: 9.2528
  },
  {
    id: 2657,
    zipCode: '72810',
    city: 'Gomaringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'T\u00fcbingen',
    latitude: 48.4535,
    longitude: 9.0958
  },
  {
    id: 2658,
    zipCode: '72813',
    city: 'Sankt Johann',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.4833,
    longitude: 9.3167
  },
  {
    id: 2659,
    zipCode: '72818',
    city: 'Trochtelfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.3084,
    longitude: 9.2449
  },
  {
    id: 2660,
    zipCode: '72820',
    city: 'Sonnenb\u00fchl',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.3833,
    longitude: 9.1833
  },
  {
    id: 2661,
    zipCode: '72827',
    city: 'Wannweil',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.5167,
    longitude: 9.15
  },
  {
    id: 2662,
    zipCode: '72829',
    city: 'Engstingen Gro\u00dfengstingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.3882,
    longitude: 9.2852
  },
  {
    id: 2663,
    zipCode: '72829',
    city: 'Engstingen Kohlstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.4059,
    longitude: 9.3313
  },
  {
    id: 2664,
    zipCode: '72829',
    city: 'Engstingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.3934,
    longitude: 9.3049
  },
  {
    id: 2665,
    zipCode: '72829',
    city: 'Engstingen Kleinengstingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.3824,
    longitude: 9.2819
  },
  {
    id: 2666,
    zipCode: '73340',
    city: 'Amstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5788,
    longitude: 9.8739
  },
  {
    id: 2667,
    zipCode: '78354',
    city: 'Sipplingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.7968,
    longitude: 9.0974
  },
  {
    id: 2668,
    zipCode: '88045',
    city: 'Friedrichshafen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.6544,
    longitude: 9.4726
  },
  {
    id: 2669,
    zipCode: '88046',
    city: 'Friedrichshafen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.6578,
    longitude: 9.4852
  },
  {
    id: 2670,
    zipCode: '88048',
    city: 'Friedrichshafen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.6727,
    longitude: 9.4299
  },
  {
    id: 2671,
    zipCode: '88069',
    city: 'Tettnang',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.6686,
    longitude: 9.5913
  },
  {
    id: 2672,
    zipCode: '88074',
    city: 'Meckenbeuren',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.7,
    longitude: 9.5667
  },
  {
    id: 2673,
    zipCode: '88079',
    city: 'Kressbronn am Bodensee',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.5976,
    longitude: 9.5971
  },
  {
    id: 2674,
    zipCode: '88085',
    city: 'Langenargen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.5986,
    longitude: 9.5416
  },
  {
    id: 2675,
    zipCode: '88086',
    city: 'Immenstaad am Bodensee',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.665,
    longitude: 9.359
  },
  {
    id: 2676,
    zipCode: '88090',
    city: 'Immenstaad am Bodensee',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.6653,
    longitude: 9.359
  },
  {
    id: 2677,
    zipCode: '88094',
    city: 'Oberteuringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.7241,
    longitude: 9.4698
  },
  {
    id: 2678,
    zipCode: '88097',
    city: 'Eriskirch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.6248,
    longitude: 9.542
  },
  {
    id: 2679,
    zipCode: '88099',
    city: 'Neukirch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.6574,
    longitude: 9.7033
  },
  {
    id: 2680,
    zipCode: '88147',
    city: 'Achberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.6333,
    longitude: 9.7167
  },
  {
    id: 2681,
    zipCode: '88212',
    city: 'Ravensburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.7815,
    longitude: 9.6183
  },
  {
    id: 2682,
    zipCode: '88213',
    city: 'Ravensburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.7715,
    longitude: 9.5575
  },
  {
    id: 2683,
    zipCode: '88214',
    city: 'Ravensburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.7814,
    longitude: 9.6118
  },
  {
    id: 2684,
    zipCode: '88239',
    city: 'Wangen im Allg\u00e4u',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.6895,
    longitude: 9.8325
  },
  {
    id: 2685,
    zipCode: '88250',
    city: 'Weingarten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.8101,
    longitude: 9.6386
  },
  {
    id: 2686,
    zipCode: '88255',
    city: 'Baienfurt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.8286,
    longitude: 9.6516
  },
  {
    id: 2687,
    zipCode: '88255',
    city: 'Baindt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.85,
    longitude: 9.6667
  },
  {
    id: 2688,
    zipCode: '88260',
    city: 'Argenb\u00fchl',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.6667,
    longitude: 9.9333
  },
  {
    id: 2689,
    zipCode: '88263',
    city: 'Horgenzell',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.8,
    longitude: 9.5
  },
  {
    id: 2690,
    zipCode: '88267',
    city: 'Vogt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.7667,
    longitude: 9.7667
  },
  {
    id: 2691,
    zipCode: '88271',
    city: 'Wilhelmsdorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.8661,
    longitude: 9.4262
  },
  {
    id: 2692,
    zipCode: '88273',
    city: 'Fronreute',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.8667,
    longitude: 9.5833
  },
  {
    id: 2693,
    zipCode: '88276',
    city: 'Berg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.8167,
    longitude: 9.6
  },
  {
    id: 2694,
    zipCode: '88279',
    city: 'Amtzell',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.7,
    longitude: 9.75
  },
  {
    id: 2695,
    zipCode: '88281',
    city: 'Schlier',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.77,
    longitude: 9.6735
  },
  {
    id: 2696,
    zipCode: '88284',
    city: 'Wolpertswende',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.8947,
    longitude: 9.612
  },
  {
    id: 2697,
    zipCode: '88285',
    city: 'Bodnegg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.7101,
    longitude: 9.6884
  },
  {
    id: 2698,
    zipCode: '88287',
    city: 'Gr\u00fcnkraut',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.7442,
    longitude: 9.6559
  },
  {
    id: 2699,
    zipCode: '88289',
    city: 'Waldburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.7571,
    longitude: 9.7134
  },
  {
    id: 2700,
    zipCode: '88299',
    city: 'Leutkirch im Allg\u00e4u',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.8267,
    longitude: 10.0205
  },
  {
    id: 2701,
    zipCode: '88316',
    city: 'Isny im Allg\u00e4u',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.6926,
    longitude: 10.0386
  },
  {
    id: 2702,
    zipCode: '88317',
    city: 'Aichstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.893,
    longitude: 10.0784
  },
  {
    id: 2703,
    zipCode: '88319',
    city: 'Aitrach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.9333,
    longitude: 10.0833
  },
  {
    id: 2704,
    zipCode: '88326',
    city: 'Aulendorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.9508,
    longitude: 9.6374
  },
  {
    id: 2705,
    zipCode: '88339',
    city: 'Bad Waldsee',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.9203,
    longitude: 9.7549
  },
  {
    id: 2706,
    zipCode: '88348',
    city: 'Bad Saulgau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.0123,
    longitude: 9.5035
  },
  {
    id: 2707,
    zipCode: '88348',
    city: 'Allmannsweiler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0285,
    longitude: 9.5936
  },
  {
    id: 2708,
    zipCode: '88353',
    city: 'Ki\u00dflegg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.7889,
    longitude: 9.8838
  },
  {
    id: 2709,
    zipCode: '88356',
    city: 'Ostrach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 47.95,
    longitude: 9.3833
  },
  {
    id: 2710,
    zipCode: '88361',
    city: 'Eichstegen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.9333,
    longitude: 9.5
  },
  {
    id: 2711,
    zipCode: '88361',
    city: 'Boms',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.9763,
    longitude: 9.5164
  },
  {
    id: 2712,
    zipCode: '88361',
    city: 'Altshausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.9333,
    longitude: 9.5333
  },
  {
    id: 2713,
    zipCode: '88364',
    city: 'Wolfegg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.8203,
    longitude: 9.7949
  },
  {
    id: 2714,
    zipCode: '88367',
    city: 'Hohentengen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.0295,
    longitude: 9.3774
  },
  {
    id: 2715,
    zipCode: '88368',
    city: 'Bergatreute',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.85,
    longitude: 9.75
  },
  {
    id: 2716,
    zipCode: '88370',
    city: 'Ebenweiler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.9,
    longitude: 9.5167
  },
  {
    id: 2717,
    zipCode: '88371',
    city: 'Ebersbach-Musbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.9667,
    longitude: 9.5833
  },
  {
    id: 2718,
    zipCode: '88373',
    city: 'Fleischwangen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.8833,
    longitude: 9.4833
  },
  {
    id: 2719,
    zipCode: '88374',
    city: 'Ho\u00dfkirch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.95,
    longitude: 9.45
  },
  {
    id: 2720,
    zipCode: '88376',
    city: 'K\u00f6nigseggwald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.9333,
    longitude: 9.4167
  },
  {
    id: 2721,
    zipCode: '88377',
    city: 'Riedhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.9093,
    longitude: 9.4285
  },
  {
    id: 2722,
    zipCode: '88379',
    city: 'Unterwaldhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.9,
    longitude: 9.4667
  },
  {
    id: 2723,
    zipCode: '88379',
    city: 'Guggenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.9,
    longitude: 9.45
  },
  {
    id: 2724,
    zipCode: '88400',
    city: 'Biberach an der Ri\u00df',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0934,
    longitude: 9.7905
  },
  {
    id: 2725,
    zipCode: '88400',
    city: 'Biberach an der Ri\u00df Bergerhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1008,
    longitude: 9.8128
  },
  {
    id: 2726,
    zipCode: '88410',
    city: 'Bad Wurzach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Ravensburg',
    latitude: 47.908,
    longitude: 9.8969
  },
  {
    id: 2727,
    zipCode: '88416',
    city: 'Erlenmoos',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0653,
    longitude: 9.9757
  },
  {
    id: 2728,
    zipCode: '88416',
    city: 'Ochsenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0703,
    longitude: 9.9503
  },
  {
    id: 2729,
    zipCode: '88416',
    city: 'Steinhausen an der Rottum',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0167,
    longitude: 9.9667
  },
  {
    id: 2730,
    zipCode: '88422',
    city: 'Moosburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0833,
    longitude: 9.6
  },
  {
    id: 2731,
    zipCode: '88422',
    city: 'Bad Buchau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0623,
    longitude: 9.6124
  },
  {
    id: 2732,
    zipCode: '88422',
    city: 'Alleshausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1036,
    longitude: 9.6218
  },
  {
    id: 2733,
    zipCode: '88422',
    city: 'Oggelshausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0667,
    longitude: 9.65
  },
  {
    id: 2734,
    zipCode: '88422',
    city: 'Betzenweiler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1167,
    longitude: 9.5667
  },
  {
    id: 2735,
    zipCode: '88422',
    city: 'Tiefenbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0833,
    longitude: 9.65
  },
  {
    id: 2736,
    zipCode: '88422',
    city: 'Seekirch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1,
    longitude: 9.65
  },
  {
    id: 2737,
    zipCode: '88422',
    city: 'Kanzach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.078,
    longitude: 9.5589
  },
  {
    id: 2738,
    zipCode: '88422',
    city: 'D\u00fcrnau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0603,
    longitude: 9.5553
  },
  {
    id: 2739,
    zipCode: '88427',
    city: 'Bad Schussenried Dunzenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0186,
    longitude: 9.6834
  },
  {
    id: 2740,
    zipCode: '88427',
    city: 'Bad Schussenried',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0047,
    longitude: 9.6574
  },
  {
    id: 2741,
    zipCode: '88430',
    city: 'Rot an der Rot',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.013,
    longitude: 10.0303
  },
  {
    id: 2742,
    zipCode: '88433',
    city: 'Schemmerhofen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1702,
    longitude: 9.7943
  },
  {
    id: 2743,
    zipCode: '88436',
    city: 'Eberhardzell',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0,
    longitude: 9.8167
  },
  {
    id: 2744,
    zipCode: '88436',
    city: 'Eberhardzell F\u00fcramoos',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 47.9977,
    longitude: 9.8934
  },
  {
    id: 2745,
    zipCode: '88436',
    city: 'Eberhardzell F\u00fcramoos, Altbellamont',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0002,
    longitude: 9.906
  },
  {
    id: 2746,
    zipCode: '88437',
    city: 'Maselheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1333,
    longitude: 9.8833
  },
  {
    id: 2747,
    zipCode: '88441',
    city: 'Mittelbiberach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0833,
    longitude: 9.75
  },
  {
    id: 2748,
    zipCode: '88444',
    city: 'Ummendorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0667,
    longitude: 9.8333
  },
  {
    id: 2749,
    zipCode: '88447',
    city: 'Warthausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1286,
    longitude: 9.7975
  },
  {
    id: 2750,
    zipCode: '88448',
    city: 'Attenweiler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1333,
    longitude: 9.7
  },
  {
    id: 2751,
    zipCode: '88450',
    city: 'Berkheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0426,
    longitude: 10.0823
  },
  {
    id: 2752,
    zipCode: '88451',
    city: 'Dettingen an der Iller',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1,
    longitude: 10.1167
  },
  {
    id: 2753,
    zipCode: '88453',
    city: 'Erolzheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.09,
    longitude: 10.073
  },
  {
    id: 2754,
    zipCode: '88454',
    city: 'Hochdorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0256,
    longitude: 9.7878
  },
  {
    id: 2755,
    zipCode: '88456',
    city: 'Ingoldingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0255,
    longitude: 9.742
  },
  {
    id: 2756,
    zipCode: '88457',
    city: 'Kirchdorf an der Iller',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0833,
    longitude: 10.1333
  },
  {
    id: 2757,
    zipCode: '88459',
    city: 'Tannheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.0,
    longitude: 10.0833
  },
  {
    id: 2758,
    zipCode: '88471',
    city: 'Laupheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.2279,
    longitude: 9.8787
  },
  {
    id: 2759,
    zipCode: '88477',
    city: 'Schwendi',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1742,
    longitude: 9.9754
  },
  {
    id: 2760,
    zipCode: '88480',
    city: 'Achstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.2589,
    longitude: 9.8975
  },
  {
    id: 2761,
    zipCode: '88481',
    city: 'Balzheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.1833,
    longitude: 10.0833
  },
  {
    id: 2762,
    zipCode: '88483',
    city: 'Burgrieden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.2333,
    longitude: 9.9333
  },
  {
    id: 2763,
    zipCode: '88484',
    city: 'Gutenzell-H\u00fcrbel',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1167,
    longitude: 9.9833
  },
  {
    id: 2764,
    zipCode: '88486',
    city: 'Kirchberg an der Iller',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1333,
    longitude: 10.0833
  },
  {
    id: 2765,
    zipCode: '88487',
    city: 'Mietingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1833,
    longitude: 9.9
  },
  {
    id: 2766,
    zipCode: '88489',
    city: 'Wain',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.189,
    longitude: 10.0209
  },
  {
    id: 2767,
    zipCode: '88499',
    city: 'Emeringen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2339,
    longitude: 9.5178
  },
  {
    id: 2768,
    zipCode: '88499',
    city: 'Altheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1453,
    longitude: 9.4474
  },
  {
    id: 2769,
    zipCode: '88499',
    city: 'Riedlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1545,
    longitude: 9.4756
  },
  {
    id: 2770,
    zipCode: '88512',
    city: 'Mengen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.0495,
    longitude: 9.3301
  },
  {
    id: 2771,
    zipCode: '88515',
    city: 'Langenenslingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1485,
    longitude: 9.3776
  },
  {
    id: 2772,
    zipCode: '88518',
    city: 'Herbertingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.0667,
    longitude: 9.4333
  },
  {
    id: 2773,
    zipCode: '88521',
    city: 'Ertingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1,
    longitude: 9.4667
  },
  {
    id: 2774,
    zipCode: '88524',
    city: 'Uttenweiler',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.15,
    longitude: 9.6167
  },
  {
    id: 2775,
    zipCode: '88525',
    city: 'D\u00fcrmentingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1167,
    longitude: 9.5333
  },
  {
    id: 2776,
    zipCode: '88527',
    city: 'Unlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Biberach',
    latitude: 48.1673,
    longitude: 9.5222
  },
  {
    id: 2777,
    zipCode: '88529',
    city: 'Zwiefalten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Reutlingen',
    latitude: 48.234,
    longitude: 9.4623
  },
  {
    id: 2778,
    zipCode: '88605',
    city: 'Me\u00dfkirch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 47.9946,
    longitude: 9.1148
  },
  {
    id: 2779,
    zipCode: '88605',
    city: 'Sauldorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 47.9437,
    longitude: 9.1083
  },
  {
    id: 2780,
    zipCode: '88630',
    city: 'Pfullendorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 47.9261,
    longitude: 9.2578
  },
  {
    id: 2781,
    zipCode: '88631',
    city: 'Beuron',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.05,
    longitude: 8.9667
  },
  {
    id: 2782,
    zipCode: '88633',
    city: 'Heiligenberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.8209,
    longitude: 9.3128
  },
  {
    id: 2783,
    zipCode: '88634',
    city: 'Herdwangen-Sch\u00f6nach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 47.85,
    longitude: 9.2
  },
  {
    id: 2784,
    zipCode: '88636',
    city: 'Illmensee',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 47.8623,
    longitude: 9.3724
  },
  {
    id: 2785,
    zipCode: '88637',
    city: 'Leibertingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 48.0426,
    longitude: 9.0131
  },
  {
    id: 2786,
    zipCode: '88639',
    city: 'Wald',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Landkreis Sigmaringen',
    latitude: 47.9333,
    longitude: 9.1667
  },
  {
    id: 2787,
    zipCode: '88662',
    city: '\u00dcberlingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.7698,
    longitude: 9.1714
  },
  {
    id: 2788,
    zipCode: '88677',
    city: 'Markdorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.7192,
    longitude: 9.3903
  },
  {
    id: 2789,
    zipCode: '88682',
    city: 'Salem',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.7626,
    longitude: 9.2903
  },
  {
    id: 2790,
    zipCode: '88690',
    city: 'Uhldingen-M\u00fchlhofen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.7333,
    longitude: 9.25
  },
  {
    id: 2791,
    zipCode: '88693',
    city: 'Deggenhausertal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.8,
    longitude: 9.4
  },
  {
    id: 2792,
    zipCode: '88696',
    city: 'Owingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.8097,
    longitude: 9.1717
  },
  {
    id: 2793,
    zipCode: '88697',
    city: 'Bermatingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.7333,
    longitude: 9.35
  },
  {
    id: 2794,
    zipCode: '88699',
    city: 'Frickingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.8144,
    longitude: 9.2735
  },
  {
    id: 2795,
    zipCode: '88709',
    city: 'Hagnau am Bodensee',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.6667,
    longitude: 9.3167
  },
  {
    id: 2796,
    zipCode: '88709',
    city: 'Meersburg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.6942,
    longitude: 9.2711
  },
  {
    id: 2797,
    zipCode: '88718',
    city: 'Daisendorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.7126,
    longitude: 9.2678
  },
  {
    id: 2798,
    zipCode: '88719',
    city: 'Stetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Bodenseekreis',
    latitude: 47.6901,
    longitude: 9.2986
  },
  {
    id: 2799,
    zipCode: '89040',
    city: 'Ulm',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ulm',
    latitude: 48.417,
    longitude: 9.964
  },
  {
    id: 2800,
    zipCode: '89073',
    city: 'Ulm',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ulm',
    latitude: 48.4015,
    longitude: 9.9927
  },
  {
    id: 2801,
    zipCode: '89075',
    city: 'Ulm',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ulm',
    latitude: 48.4171,
    longitude: 9.9635
  },
  {
    id: 2802,
    zipCode: '89077',
    city: 'Ulm',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ulm',
    latitude: 48.3981,
    longitude: 9.97
  },
  {
    id: 2803,
    zipCode: '89079',
    city: 'Ulm',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ulm',
    latitude: 48.3568,
    longitude: 9.9601
  },
  {
    id: 2804,
    zipCode: '89081',
    city: 'Ulm Jungingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ulm',
    latitude: 48.4459,
    longitude: 9.989
  },
  {
    id: 2805,
    zipCode: '89081',
    city: 'Ulm',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Ulm',
    latitude: 48.4391,
    longitude: 9.9823
  },
  {
    id: 2806,
    zipCode: '89129',
    city: 'Nerenstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5289,
    longitude: 10.0991
  },
  {
    id: 2807,
    zipCode: '89129',
    city: 'Langenau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4962,
    longitude: 10.1185
  },
  {
    id: 2808,
    zipCode: '89129',
    city: 'Setzingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5381,
    longitude: 10.1303
  },
  {
    id: 2809,
    zipCode: '89129',
    city: '\u00d6llingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5287,
    longitude: 10.1476
  },
  {
    id: 2810,
    zipCode: '89134',
    city: 'Blaustein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4181,
    longitude: 9.9106
  },
  {
    id: 2811,
    zipCode: '89143',
    city: 'Blaubeuren',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4122,
    longitude: 9.7843
  },
  {
    id: 2812,
    zipCode: '89143',
    city: 'Blaubeuren Sei\u00dfen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4171,
    longitude: 9.7449
  },
  {
    id: 2813,
    zipCode: '89143',
    city: 'Blaubeuren Wennenden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4375,
    longitude: 9.7449
  },
  {
    id: 2814,
    zipCode: '89143',
    city: 'Blaubeuren Gerhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.3996,
    longitude: 9.8003
  },
  {
    id: 2815,
    zipCode: '89143',
    city: 'Blaubeuren Sonderbuch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4174,
    longitude: 9.8118
  },
  {
    id: 2816,
    zipCode: '89143',
    city: 'Blaubeuren Asch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4379,
    longitude: 9.8195
  },
  {
    id: 2817,
    zipCode: '89150',
    city: 'Laichingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4894,
    longitude: 9.6861
  },
  {
    id: 2818,
    zipCode: '89150',
    city: 'Laichingen Machtolsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4943,
    longitude: 9.7431
  },
  {
    id: 2819,
    zipCode: '89150',
    city: 'Laichingen Feldstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.477,
    longitude: 9.6283
  },
  {
    id: 2820,
    zipCode: '89150',
    city: 'Laichingen Suppingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4591,
    longitude: 9.713
  },
  {
    id: 2821,
    zipCode: '89155',
    city: 'Erbach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.3284,
    longitude: 9.8875
  },
  {
    id: 2822,
    zipCode: '89160',
    city: 'Dornstadt Scharenstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.515,
    longitude: 9.8522
  },
  {
    id: 2823,
    zipCode: '89160',
    city: 'Dornstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.467,
    longitude: 9.9443
  },
  {
    id: 2824,
    zipCode: '89165',
    city: 'Dietenheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2107,
    longitude: 10.0716
  },
  {
    id: 2825,
    zipCode: '89171',
    city: 'Illerkirchberg',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.3167,
    longitude: 10.0167
  },
  {
    id: 2826,
    zipCode: '89173',
    city: 'Lonsee',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5434,
    longitude: 9.92
  },
  {
    id: 2827,
    zipCode: '89174',
    city: 'Altheim (Alb)',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5833,
    longitude: 10.0333
  },
  {
    id: 2828,
    zipCode: '89176',
    city: 'Asselfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5296,
    longitude: 10.1917
  },
  {
    id: 2829,
    zipCode: '89177',
    city: 'Ballendorf',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5542,
    longitude: 10.077
  },
  {
    id: 2830,
    zipCode: '89177',
    city: 'B\u00f6rslingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5389,
    longitude: 10.0631
  },
  {
    id: 2831,
    zipCode: '89179',
    city: 'Beimerstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4833,
    longitude: 9.9833
  },
  {
    id: 2832,
    zipCode: '89180',
    city: 'Bergh\u00fclen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.464,
    longitude: 9.7611
  },
  {
    id: 2833,
    zipCode: '89180',
    city: 'Bergh\u00fclen Treffensbuch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4804,
    longitude: 9.7939
  },
  {
    id: 2834,
    zipCode: '89180',
    city: 'Bergh\u00fclen B\u00fchlenhausen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4599,
    longitude: 9.7809
  },
  {
    id: 2835,
    zipCode: '89182',
    city: 'Bernstadt',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.4996,
    longitude: 10.0258
  },
  {
    id: 2836,
    zipCode: '89183',
    city: 'Breitingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5173,
    longitude: 9.9923
  },
  {
    id: 2837,
    zipCode: '89183',
    city: 'Holzkirch',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5312,
    longitude: 9.9952
  },
  {
    id: 2838,
    zipCode: '89185',
    city: 'H\u00fcttisheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2797,
    longitude: 9.9425
  },
  {
    id: 2839,
    zipCode: '89186',
    city: 'Illerrieden',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2702,
    longitude: 10.0515
  },
  {
    id: 2840,
    zipCode: '89188',
    city: 'Merklingen Widderstall',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5315,
    longitude: 9.7135
  },
  {
    id: 2841,
    zipCode: '89188',
    city: 'Merklingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5113,
    longitude: 9.755
  },
  {
    id: 2842,
    zipCode: '89189',
    city: 'Neenstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5468,
    longitude: 10.0197
  },
  {
    id: 2843,
    zipCode: '89191',
    city: 'Nellingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.542,
    longitude: 9.7905
  },
  {
    id: 2844,
    zipCode: '89191',
    city: 'Nellingen Aichen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5288,
    longitude: 9.8093
  },
  {
    id: 2845,
    zipCode: '89191',
    city: 'Nellingen Oppingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5419,
    longitude: 9.8289
  },
  {
    id: 2846,
    zipCode: '89192',
    city: 'Rammingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5181,
    longitude: 10.172
  },
  {
    id: 2847,
    zipCode: '89194',
    city: 'Schn\u00fcrpflingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2728,
    longitude: 9.9929
  },
  {
    id: 2848,
    zipCode: '89195',
    city: 'Staig',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.3,
    longitude: 9.9914
  },
  {
    id: 2849,
    zipCode: '89197',
    city: 'Weidenstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5525,
    longitude: 9.9961
  },
  {
    id: 2850,
    zipCode: '89198',
    city: 'Westerstetten',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.5192,
    longitude: 9.9549
  },
  {
    id: 2851,
    zipCode: '89584',
    city: 'Lauterach',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2562,
    longitude: 9.5803
  },
  {
    id: 2852,
    zipCode: '89584',
    city: 'Ehingen an der Donau',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2864,
    longitude: 9.6875
  },
  {
    id: 2853,
    zipCode: '89597',
    city: 'Munderkingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2357,
    longitude: 9.644
  },
  {
    id: 2854,
    zipCode: '89597',
    city: 'Unterwachingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2029,
    longitude: 9.6435
  },
  {
    id: 2855,
    zipCode: '89597',
    city: 'Hausen am Bussen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2119,
    longitude: 9.6251
  },
  {
    id: 2856,
    zipCode: '89601',
    city: 'Schelklingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.3758,
    longitude: 9.7327
  },
  {
    id: 2857,
    zipCode: '89604',
    city: 'Allmendingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.3305,
    longitude: 9.7242
  },
  {
    id: 2858,
    zipCode: '89605',
    city: 'Altheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.328,
    longitude: 9.7704
  },
  {
    id: 2859,
    zipCode: '89607',
    city: 'Emerkingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2119,
    longitude: 9.6565
  },
  {
    id: 2860,
    zipCode: '89608',
    city: 'Griesingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2667,
    longitude: 9.7833
  },
  {
    id: 2861,
    zipCode: '89610',
    city: 'Oberdischingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.3,
    longitude: 9.8333
  },
  {
    id: 2862,
    zipCode: '89611',
    city: 'Obermarchtal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2328,
    longitude: 9.5724
  },
  {
    id: 2863,
    zipCode: '89611',
    city: 'Rechtenstein',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2408,
    longitude: 9.5459
  },
  {
    id: 2864,
    zipCode: '89613',
    city: 'Oberstadion',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.186,
    longitude: 9.6924
  },
  {
    id: 2865,
    zipCode: '89613',
    city: 'Grundsheim',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.1667,
    longitude: 9.6667
  },
  {
    id: 2866,
    zipCode: '89614',
    city: '\u00d6pfingen',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2864,
    longitude: 9.8026
  },
  {
    id: 2867,
    zipCode: '89616',
    city: 'Rottenacker',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2348,
    longitude: 9.6896
  },
  {
    id: 2868,
    zipCode: '89617',
    city: 'Untermarchtal',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2392,
    longitude: 9.6098
  },
  {
    id: 2869,
    zipCode: '89619',
    city: 'Unterstadion',
    state: 'Baden-W\u00fcrttemberg',
    community: 'Alb-Donau-Kreis',
    latitude: 48.2031,
    longitude: 9.6884
  },
  {
    id: 2870,
    zipCode: '80331',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1345,
    longitude: 11.571
  },
  {
    id: 2871,
    zipCode: '80333',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1452,
    longitude: 11.5668
  },
  {
    id: 2872,
    zipCode: '80335',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1427,
    longitude: 11.5552
  },
  {
    id: 2873,
    zipCode: '80336',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1345,
    longitude: 11.559
  },
  {
    id: 2874,
    zipCode: '80337',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1224,
    longitude: 11.5449
  },
  {
    id: 2875,
    zipCode: '80339',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1388,
    longitude: 11.5341
  },
  {
    id: 2876,
    zipCode: '80469',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1299,
    longitude: 11.5732
  },
  {
    id: 2877,
    zipCode: '80538',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1401,
    longitude: 11.5885
  },
  {
    id: 2878,
    zipCode: '80539',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.15,
    longitude: 11.5833
  },
  {
    id: 2879,
    zipCode: '80634',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1492,
    longitude: 11.5328
  },
  {
    id: 2880,
    zipCode: '80636',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1558,
    longitude: 11.5409
  },
  {
    id: 2881,
    zipCode: '80637',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1725,
    longitude: 11.5284
  },
  {
    id: 2882,
    zipCode: '80638',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1595,
    longitude: 11.4932
  },
  {
    id: 2883,
    zipCode: '80639',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1526,
    longitude: 11.5154
  },
  {
    id: 2884,
    zipCode: '80686',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.138,
    longitude: 11.507
  },
  {
    id: 2885,
    zipCode: '80687',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1414,
    longitude: 11.502
  },
  {
    id: 2886,
    zipCode: '80689',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1291,
    longitude: 11.4895
  },
  {
    id: 2887,
    zipCode: '80796',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.15,
    longitude: 11.5833
  },
  {
    id: 2888,
    zipCode: '80797',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1611,
    longitude: 11.5586
  },
  {
    id: 2889,
    zipCode: '80798',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.15,
    longitude: 11.5833
  },
  {
    id: 2890,
    zipCode: '80799',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.15,
    longitude: 11.5833
  },
  {
    id: 2891,
    zipCode: '80801',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.15,
    longitude: 11.5833
  },
  {
    id: 2892,
    zipCode: '80802',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1665,
    longitude: 11.5903
  },
  {
    id: 2893,
    zipCode: '80803',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.15,
    longitude: 11.5833
  },
  {
    id: 2894,
    zipCode: '80804',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1738,
    longitude: 11.5858
  },
  {
    id: 2895,
    zipCode: '80805',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1725,
    longitude: 11.5964
  },
  {
    id: 2896,
    zipCode: '80807',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1827,
    longitude: 11.5759
  },
  {
    id: 2897,
    zipCode: '80809',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1787,
    longitude: 11.5617
  },
  {
    id: 2898,
    zipCode: '80933',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.2225,
    longitude: 11.548
  },
  {
    id: 2899,
    zipCode: '80935',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.2043,
    longitude: 11.5585
  },
  {
    id: 2900,
    zipCode: '80937',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1974,
    longitude: 11.5721
  },
  {
    id: 2901,
    zipCode: '80939',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.2054,
    longitude: 11.6238
  },
  {
    id: 2902,
    zipCode: '80992',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1776,
    longitude: 11.5169
  },
  {
    id: 2903,
    zipCode: '80993',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1823,
    longitude: 11.5331
  },
  {
    id: 2904,
    zipCode: '80995',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1976,
    longitude: 11.5181
  },
  {
    id: 2905,
    zipCode: '80997',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1834,
    longitude: 11.4784
  },
  {
    id: 2906,
    zipCode: '80999',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1853,
    longitude: 11.4643
  },
  {
    id: 2907,
    zipCode: '81241',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1475,
    longitude: 11.4635
  },
  {
    id: 2908,
    zipCode: '81243',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1465,
    longitude: 11.4506
  },
  {
    id: 2909,
    zipCode: '81245',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1616,
    longitude: 11.4141
  },
  {
    id: 2910,
    zipCode: '81247',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1662,
    longitude: 11.4673
  },
  {
    id: 2911,
    zipCode: '81249',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.15,
    longitude: 11.5833
  },
  {
    id: 2912,
    zipCode: '81369',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1125,
    longitude: 11.5306
  },
  {
    id: 2913,
    zipCode: '81371',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1167,
    longitude: 11.5478
  },
  {
    id: 2914,
    zipCode: '81373',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1171,
    longitude: 11.5393
  },
  {
    id: 2915,
    zipCode: '81375',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1188,
    longitude: 11.4917
  },
  {
    id: 2916,
    zipCode: '81377',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1204,
    longitude: 11.5001
  },
  {
    id: 2917,
    zipCode: '81379',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.0988,
    longitude: 11.5204
  },
  {
    id: 2918,
    zipCode: '81475',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.15,
    longitude: 11.5833
  },
  {
    id: 2919,
    zipCode: '81476',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.0844,
    longitude: 11.4923
  },
  {
    id: 2920,
    zipCode: '81477',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.0834,
    longitude: 11.5036
  },
  {
    id: 2921,
    zipCode: '81479',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.0915,
    longitude: 11.5392
  },
  {
    id: 2922,
    zipCode: '81539',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1102,
    longitude: 11.5899
  },
  {
    id: 2923,
    zipCode: '81541',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1159,
    longitude: 11.5795
  },
  {
    id: 2924,
    zipCode: '81543',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1203,
    longitude: 11.5733
  },
  {
    id: 2925,
    zipCode: '81545',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.0827,
    longitude: 11.5619
  },
  {
    id: 2926,
    zipCode: '81547',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.0982,
    longitude: 11.5821
  },
  {
    id: 2927,
    zipCode: '81549',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1089,
    longitude: 11.6074
  },
  {
    id: 2928,
    zipCode: '81667',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1285,
    longitude: 11.5975
  },
  {
    id: 2929,
    zipCode: '81669',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1226,
    longitude: 11.6035
  },
  {
    id: 2930,
    zipCode: '81671',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1223,
    longitude: 11.6205
  },
  {
    id: 2931,
    zipCode: '81673',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1265,
    longitude: 11.6317
  },
  {
    id: 2932,
    zipCode: '81675',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1352,
    longitude: 11.6039
  },
  {
    id: 2933,
    zipCode: '81677',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1381,
    longitude: 11.6147
  },
  {
    id: 2934,
    zipCode: '81679',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1512,
    longitude: 11.6103
  },
  {
    id: 2935,
    zipCode: '81735',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1134,
    longitude: 11.6466
  },
  {
    id: 2936,
    zipCode: '81737',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1098,
    longitude: 11.6183
  },
  {
    id: 2937,
    zipCode: '81739',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.15,
    longitude: 11.5833
  },
  {
    id: 2938,
    zipCode: '81825',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.118,
    longitude: 11.6612
  },
  {
    id: 2939,
    zipCode: '81827',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1147,
    longitude: 11.6972
  },
  {
    id: 2940,
    zipCode: '81829',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1404,
    longitude: 11.6802
  },
  {
    id: 2941,
    zipCode: '81925',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1642,
    longitude: 11.6218
  },
  {
    id: 2942,
    zipCode: '81927',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1611,
    longitude: 11.6394
  },
  {
    id: 2943,
    zipCode: '81929',
    city: 'M\u00fcnchen',
    state: 'Bayern',
    community: 'M\u00fcnchen',
    latitude: 48.1408,
    longitude: 11.6366
  },
  {
    id: 2944,
    zipCode: '82008',
    city: 'Unterhaching',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.066,
    longitude: 11.6156
  },
  {
    id: 2945,
    zipCode: '82024',
    city: 'Taufkirchen',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.0486,
    longitude: 11.617
  },
  {
    id: 2946,
    zipCode: '82031',
    city: 'Gr\u00fcnwald',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.0395,
    longitude: 11.5232
  },
  {
    id: 2947,
    zipCode: '82032',
    city: 'Deisenhofen bei M\u00fcnchen',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.0182,
    longitude: 11.5888
  },
  {
    id: 2948,
    zipCode: '82041',
    city: 'Oberhaching',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.0245,
    longitude: 11.5974
  },
  {
    id: 2949,
    zipCode: '82049',
    city: 'Pullach im Isartal',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.0612,
    longitude: 11.5215
  },
  {
    id: 2950,
    zipCode: '82054',
    city: 'Sauerlach',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 47.9586,
    longitude: 11.5674
  },
  {
    id: 2951,
    zipCode: '82057',
    city: 'Icking',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.95,
    longitude: 11.4333
  },
  {
    id: 2952,
    zipCode: '82061',
    city: 'Neuried',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.0932,
    longitude: 11.4656
  },
  {
    id: 2953,
    zipCode: '82064',
    city: 'Stra\u00dflach-Dingharting',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.0049,
    longitude: 11.5141
  },
  {
    id: 2954,
    zipCode: '82065',
    city: 'Baierbrunn',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.0203,
    longitude: 11.4869
  },
  {
    id: 2955,
    zipCode: '82067',
    city: 'Kloster Sch\u00e4ftlarn',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 47.9889,
    longitude: 11.4434
  },
  {
    id: 2956,
    zipCode: '82069',
    city: 'Sch\u00e4ftlarn',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 47.9903,
    longitude: 11.4559
  },
  {
    id: 2957,
    zipCode: '82110',
    city: 'Germering',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.1339,
    longitude: 11.3765
  },
  {
    id: 2958,
    zipCode: '82131',
    city: 'Gauting',
    state: 'Bayern',
    community: 'Starnberg',
    latitude: 48.0692,
    longitude: 11.377
  },
  {
    id: 2959,
    zipCode: '82140',
    city: 'Olching',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.2,
    longitude: 11.3333
  },
  {
    id: 2960,
    zipCode: '82152',
    city: 'Krailling',
    state: 'Bayern',
    community: 'Starnberg',
    latitude: 48.1,
    longitude: 11.4
  },
  {
    id: 2961,
    zipCode: '82152',
    city: 'Planegg',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.1067,
    longitude: 11.4248
  },
  {
    id: 2962,
    zipCode: '82166',
    city: 'Gr\u00e4felfing',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.1188,
    longitude: 11.4294
  },
  {
    id: 2963,
    zipCode: '82178',
    city: 'Puchheim',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.15,
    longitude: 11.35
  },
  {
    id: 2964,
    zipCode: '82194',
    city: 'Gr\u00f6benzell',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.2,
    longitude: 11.3667
  },
  {
    id: 2965,
    zipCode: '82205',
    city: 'Gilching',
    state: 'Bayern',
    community: 'Starnberg',
    latitude: 48.1075,
    longitude: 11.2936
  },
  {
    id: 2966,
    zipCode: '82211',
    city: 'Herrsching am Ammersee',
    state: 'Bayern',
    community: 'Starnberg',
    latitude: 47.9989,
    longitude: 11.1768
  },
  {
    id: 2967,
    zipCode: '82216',
    city: 'Maisach',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.2167,
    longitude: 11.2667
  },
  {
    id: 2968,
    zipCode: '82223',
    city: 'Eichenau',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.1667,
    longitude: 11.3167
  },
  {
    id: 2969,
    zipCode: '82229',
    city: 'Seefeld',
    state: 'Bayern',
    community: 'Starnberg',
    latitude: 48.0351,
    longitude: 11.214
  },
  {
    id: 2970,
    zipCode: '82234',
    city: 'We\u00dfling',
    state: 'Bayern',
    community: 'Starnberg',
    latitude: 48.0745,
    longitude: 11.2482
  },
  {
    id: 2971,
    zipCode: '82237',
    city: 'W\u00f6rthsee',
    state: 'Bayern',
    community: 'Starnberg',
    latitude: 48.0725,
    longitude: 11.2017
  },
  {
    id: 2972,
    zipCode: '82239',
    city: 'Alling',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.1403,
    longitude: 11.3014
  },
  {
    id: 2973,
    zipCode: '82256',
    city: 'F\u00fcrstenfeldbruck',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.179,
    longitude: 11.2547
  },
  {
    id: 2974,
    zipCode: '82266',
    city: 'Inning am Ammersee',
    state: 'Bayern',
    community: 'Starnberg',
    latitude: 48.0764,
    longitude: 11.1523
  },
  {
    id: 2975,
    zipCode: '82269',
    city: 'Geltendorf',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.1174,
    longitude: 11.0322
  },
  {
    id: 2976,
    zipCode: '82272',
    city: 'Moorenweis',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.1556,
    longitude: 11.0785
  },
  {
    id: 2977,
    zipCode: '82275',
    city: 'Emmering',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.1833,
    longitude: 11.2833
  },
  {
    id: 2978,
    zipCode: '82276',
    city: 'Adelshofen',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.1833,
    longitude: 11.1167
  },
  {
    id: 2979,
    zipCode: '82278',
    city: 'Althegnenberg',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.2333,
    longitude: 11.0667
  },
  {
    id: 2980,
    zipCode: '82279',
    city: 'Eching am Ammersee',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.0833,
    longitude: 11.1167
  },
  {
    id: 2981,
    zipCode: '82281',
    city: 'Egenhofen',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.2833,
    longitude: 11.1667
  },
  {
    id: 2982,
    zipCode: '82282',
    city: 'Pischertshofen',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.2833,
    longitude: 11.1667
  },
  {
    id: 2983,
    zipCode: '82284',
    city: 'Grafrath',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.1167,
    longitude: 11.1667
  },
  {
    id: 2984,
    zipCode: '82285',
    city: 'Hattenhofen',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.2223,
    longitude: 11.1155
  },
  {
    id: 2985,
    zipCode: '82287',
    city: 'Jesenwang',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.1667,
    longitude: 11.1333
  },
  {
    id: 2986,
    zipCode: '82288',
    city: 'Kottgeisering',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.1167,
    longitude: 11.1333
  },
  {
    id: 2987,
    zipCode: '82290',
    city: 'Landsberied',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.1667,
    longitude: 11.1667
  },
  {
    id: 2988,
    zipCode: '82291',
    city: 'Mammendorf',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.2084,
    longitude: 11.1633
  },
  {
    id: 2989,
    zipCode: '82293',
    city: 'Mittelstetten',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.25,
    longitude: 11.1
  },
  {
    id: 2990,
    zipCode: '82294',
    city: 'Oberschweinbach',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.2382,
    longitude: 11.1557
  },
  {
    id: 2991,
    zipCode: '82296',
    city: 'Sch\u00f6ngeising',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.1413,
    longitude: 11.204
  },
  {
    id: 2992,
    zipCode: '82299',
    city: 'T\u00fcrkenfeld',
    state: 'Bayern',
    community: 'F\u00fcrstenfeldbruck',
    latitude: 48.1053,
    longitude: 11.083
  },
  {
    id: 2993,
    zipCode: '82319',
    city: 'Starnberg',
    state: 'Bayern',
    community: 'Starnberg',
    latitude: 48.0019,
    longitude: 11.3442
  },
  {
    id: 2994,
    zipCode: '82327',
    city: 'Tutzing',
    state: 'Bayern',
    community: 'Starnberg',
    latitude: 47.9094,
    longitude: 11.2803
  },
  {
    id: 2995,
    zipCode: '82335',
    city: 'Berg',
    state: 'Bayern',
    community: 'Starnberg',
    latitude: 47.9674,
    longitude: 11.3545
  },
  {
    id: 2996,
    zipCode: '82340',
    city: 'Feldafing',
    state: 'Bayern',
    community: 'Starnberg',
    latitude: 47.946,
    longitude: 11.2933
  },
  {
    id: 2997,
    zipCode: '82343',
    city: 'P\u00f6cking',
    state: 'Bayern',
    community: 'Starnberg',
    latitude: 47.9667,
    longitude: 11.3
  },
  {
    id: 2998,
    zipCode: '82346',
    city: 'Andechs',
    state: 'Bayern',
    community: 'Starnberg',
    latitude: 47.9746,
    longitude: 11.1828
  },
  {
    id: 2999,
    zipCode: '82347',
    city: 'Bernried',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.866,
    longitude: 11.2939
  },
  {
    id: 3000,
    zipCode: '82349',
    city: 'Pentenried',
    state: 'Bayern',
    community: 'Starnberg',
    latitude: 48.1,
    longitude: 11.4
  },
  {
    id: 3001,
    zipCode: '82362',
    city: 'Weilheim in Oberbayern',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.8376,
    longitude: 11.1489
  },
  {
    id: 3002,
    zipCode: '82377',
    city: 'Penzberg',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.7529,
    longitude: 11.377
  },
  {
    id: 3003,
    zipCode: '82380',
    city: 'Pei\u00dfenberg',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.8047,
    longitude: 11.0699
  },
  {
    id: 3004,
    zipCode: '82383',
    city: 'Hohenpei\u00dfenberg',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.8,
    longitude: 11.0
  },
  {
    id: 3005,
    zipCode: '82386',
    city: 'Oberhausen',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.7833,
    longitude: 11.1333
  },
  {
    id: 3006,
    zipCode: '82386',
    city: 'Huglfing',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.7667,
    longitude: 11.1667
  },
  {
    id: 3007,
    zipCode: '82387',
    city: 'Antdorf',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.7513,
    longitude: 11.3085
  },
  {
    id: 3008,
    zipCode: '82389',
    city: 'B\u00f6bing',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.7556,
    longitude: 10.9888
  },
  {
    id: 3009,
    zipCode: '82390',
    city: 'Eberfing',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.7917,
    longitude: 11.2
  },
  {
    id: 3010,
    zipCode: '82392',
    city: 'Habach',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.7333,
    longitude: 11.2833
  },
  {
    id: 3011,
    zipCode: '82393',
    city: 'Iffeldorf',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.7667,
    longitude: 11.3167
  },
  {
    id: 3012,
    zipCode: '82395',
    city: 'Obers\u00f6chering',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.7333,
    longitude: 11.2167
  },
  {
    id: 3013,
    zipCode: '82396',
    city: 'P\u00e4hl',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.9,
    longitude: 11.1833
  },
  {
    id: 3014,
    zipCode: '82398',
    city: 'Polling',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.811,
    longitude: 11.1324
  },
  {
    id: 3015,
    zipCode: '82399',
    city: 'Raisting',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.9167,
    longitude: 11.1
  },
  {
    id: 3016,
    zipCode: '82401',
    city: 'Rottenbuch',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.7333,
    longitude: 10.9667
  },
  {
    id: 3017,
    zipCode: '82402',
    city: 'Seeshaupt',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.8247,
    longitude: 11.3022
  },
  {
    id: 3018,
    zipCode: '82404',
    city: 'Sindelsdorf',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.7246,
    longitude: 11.3329
  },
  {
    id: 3019,
    zipCode: '82405',
    city: 'Wessobrunn',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.8741,
    longitude: 11.0246
  },
  {
    id: 3020,
    zipCode: '82407',
    city: 'Wielenbach',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.874,
    longitude: 11.1592
  },
  {
    id: 3021,
    zipCode: '82409',
    city: 'Wildsteig',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.7015,
    longitude: 10.9375
  },
  {
    id: 3022,
    zipCode: '82418',
    city: 'Riegsee',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.6987,
    longitude: 11.2339
  },
  {
    id: 3023,
    zipCode: '82418',
    city: 'Murnau am Staffelsee',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.6808,
    longitude: 11.2012
  },
  {
    id: 3024,
    zipCode: '82418',
    city: 'Seehausen am Staffelsee',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.6893,
    longitude: 11.185
  },
  {
    id: 3025,
    zipCode: '82431',
    city: 'Kochel am See',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.6586,
    longitude: 11.3682
  },
  {
    id: 3026,
    zipCode: '82432',
    city: 'Urfeld, Oberbayern',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.6167,
    longitude: 11.35
  },
  {
    id: 3027,
    zipCode: '82433',
    city: 'Bad Kohlgrub',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.6667,
    longitude: 11.05
  },
  {
    id: 3028,
    zipCode: '82435',
    city: 'Bad Bayersoien',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.6833,
    longitude: 11.0
  },
  {
    id: 3029,
    zipCode: '82436',
    city: 'Eglfing',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.7333,
    longitude: 11.1833
  },
  {
    id: 3030,
    zipCode: '82438',
    city: 'Eschenlohe',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.6,
    longitude: 11.1833
  },
  {
    id: 3031,
    zipCode: '82439',
    city: 'Gro\u00dfweil',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.676,
    longitude: 11.3011
  },
  {
    id: 3032,
    zipCode: '82441',
    city: 'Ohlstadt',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.6333,
    longitude: 11.2333
  },
  {
    id: 3033,
    zipCode: '82442',
    city: 'Saulgrub',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.6664,
    longitude: 11.0247
  },
  {
    id: 3034,
    zipCode: '82444',
    city: 'Schlehdorf',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.658,
    longitude: 11.3149
  },
  {
    id: 3035,
    zipCode: '82445',
    city: 'Schwaigen',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.6167,
    longitude: 11.15
  },
  {
    id: 3036,
    zipCode: '82447',
    city: 'Spatzenhausen',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.7167,
    longitude: 11.2
  },
  {
    id: 3037,
    zipCode: '82449',
    city: 'Uffing am Staffelsee',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.7167,
    longitude: 11.15
  },
  {
    id: 3038,
    zipCode: '82467',
    city: 'Garmisch-Partenkirchen',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.4921,
    longitude: 11.0958
  },
  {
    id: 3039,
    zipCode: '82481',
    city: 'Mittenwald',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.4422,
    longitude: 11.2619
  },
  {
    id: 3040,
    zipCode: '82487',
    city: 'Oberammergau',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.5981,
    longitude: 11.0669
  },
  {
    id: 3041,
    zipCode: '82488',
    city: 'Ettal',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.5667,
    longitude: 11.1
  },
  {
    id: 3042,
    zipCode: '82490',
    city: 'Farchant',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.5304,
    longitude: 11.1115
  },
  {
    id: 3043,
    zipCode: '82491',
    city: 'Grainau',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.4761,
    longitude: 11.0241
  },
  {
    id: 3044,
    zipCode: '82493',
    city: 'Klais',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.5,
    longitude: 11.2833
  },
  {
    id: 3045,
    zipCode: '82494',
    city: 'Kr\u00fcn',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.5052,
    longitude: 11.2792
  },
  {
    id: 3046,
    zipCode: '82496',
    city: 'Oberau',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.5598,
    longitude: 11.1392
  },
  {
    id: 3047,
    zipCode: '82497',
    city: 'Unterammergau',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.6166,
    longitude: 11.0272
  },
  {
    id: 3048,
    zipCode: '82499',
    city: 'Wallgau',
    state: 'Bayern',
    community: 'Landkreis Garmisch-Partenkirchen',
    latitude: 47.5167,
    longitude: 11.2833
  },
  {
    id: 3049,
    zipCode: '82515',
    city: 'Wolfratshausen',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.9129,
    longitude: 11.4217
  },
  {
    id: 3050,
    zipCode: '82538',
    city: 'Geretsried',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.8577,
    longitude: 11.4805
  },
  {
    id: 3051,
    zipCode: '82541',
    city: 'M\u00fcnsing',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.9,
    longitude: 11.3667
  },
  {
    id: 3052,
    zipCode: '82544',
    city: 'Egling',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.9232,
    longitude: 11.5052
  },
  {
    id: 3053,
    zipCode: '82547',
    city: 'Eurasburg',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.8539,
    longitude: 11.4059
  },
  {
    id: 3054,
    zipCode: '82549',
    city: 'K\u00f6nigsdorf',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.8155,
    longitude: 11.4806
  },
  {
    id: 3055,
    zipCode: '83022',
    city: 'Rosenheim',
    state: 'Bayern',
    community: 'Rosenheim',
    latitude: 47.855,
    longitude: 12.1232
  },
  {
    id: 3056,
    zipCode: '83024',
    city: 'Rosenheim',
    state: 'Bayern',
    community: 'Rosenheim',
    latitude: 47.8748,
    longitude: 12.111
  },
  {
    id: 3057,
    zipCode: '83026',
    city: 'Rosenheim',
    state: 'Bayern',
    community: 'Rosenheim',
    latitude: 47.8391,
    longitude: 12.1026
  },
  {
    id: 3058,
    zipCode: '83043',
    city: 'Bad Aibling',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.8638,
    longitude: 12.0105
  },
  {
    id: 3059,
    zipCode: '83052',
    city: 'Bruckm\u00fchl',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.8786,
    longitude: 11.911
  },
  {
    id: 3060,
    zipCode: '83059',
    city: 'Kolbermoor',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.8496,
    longitude: 12.067
  },
  {
    id: 3061,
    zipCode: '83064',
    city: 'Raubling',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.7905,
    longitude: 12.1109
  },
  {
    id: 3062,
    zipCode: '83071',
    city: 'Stephanskirchen',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.8539,
    longitude: 12.1856
  },
  {
    id: 3063,
    zipCode: '83075',
    city: 'Bad Feilnbach',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.7733,
    longitude: 12.0097
  },
  {
    id: 3064,
    zipCode: '83080',
    city: 'Oberaudorf',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.6482,
    longitude: 12.1724
  },
  {
    id: 3065,
    zipCode: '83083',
    city: 'Riedering',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.8387,
    longitude: 12.2078
  },
  {
    id: 3066,
    zipCode: '83088',
    city: 'Kiefersfelden',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.6141,
    longitude: 12.191
  },
  {
    id: 3067,
    zipCode: '83093',
    city: 'Bad Endorf',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.909,
    longitude: 12.2979
  },
  {
    id: 3068,
    zipCode: '83098',
    city: 'Brannenburg',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.74,
    longitude: 12.0917
  },
  {
    id: 3069,
    zipCode: '83101',
    city: 'Rohrdorf',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.7971,
    longitude: 12.1701
  },
  {
    id: 3070,
    zipCode: '83104',
    city: 'Tuntenhausen',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.9351,
    longitude: 12.0152
  },
  {
    id: 3071,
    zipCode: '83109',
    city: 'Gro\u00dfkarolinenfeld',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.891,
    longitude: 12.081
  },
  {
    id: 3072,
    zipCode: '83112',
    city: 'Frasdorf',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.8038,
    longitude: 12.2851
  },
  {
    id: 3073,
    zipCode: '83115',
    city: 'Neubeuern',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.7737,
    longitude: 12.14
  },
  {
    id: 3074,
    zipCode: '83119',
    city: 'Obing',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 48.0005,
    longitude: 12.4053
  },
  {
    id: 3075,
    zipCode: '83122',
    city: 'Samerberg',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.7765,
    longitude: 12.1914
  },
  {
    id: 3076,
    zipCode: '83123',
    city: 'Amerang',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.9914,
    longitude: 12.3079
  },
  {
    id: 3077,
    zipCode: '83125',
    city: 'Eggst\u00e4tt',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.927,
    longitude: 12.3792
  },
  {
    id: 3078,
    zipCode: '83126',
    city: 'Flintsbach',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.7258,
    longitude: 12.1242
  },
  {
    id: 3079,
    zipCode: '83128',
    city: 'Halfing',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.952,
    longitude: 12.2752
  },
  {
    id: 3080,
    zipCode: '83129',
    city: 'H\u00f6slwang',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.9538,
    longitude: 12.3291
  },
  {
    id: 3081,
    zipCode: '83131',
    city: 'Nu\u00dfdorf am Inn',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.7423,
    longitude: 12.1561
  },
  {
    id: 3082,
    zipCode: '83132',
    city: 'Pittenhart',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.9772,
    longitude: 12.39
  },
  {
    id: 3083,
    zipCode: '83134',
    city: 'Prutting',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.8932,
    longitude: 12.2024
  },
  {
    id: 3084,
    zipCode: '83135',
    city: 'Schechen',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.9291,
    longitude: 12.1239
  },
  {
    id: 3085,
    zipCode: '83137',
    city: 'Schonstett',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.9833,
    longitude: 12.25
  },
  {
    id: 3086,
    zipCode: '83139',
    city: 'S\u00f6chtenau',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.9312,
    longitude: 12.2296
  },
  {
    id: 3087,
    zipCode: '83209',
    city: 'Prien am Chiemsee',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.856,
    longitude: 12.3462
  },
  {
    id: 3088,
    zipCode: '83224',
    city: 'Staudach-Egerndach',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.7833,
    longitude: 12.4833
  },
  {
    id: 3089,
    zipCode: '83224',
    city: 'Grassau',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.781,
    longitude: 12.4536
  },
  {
    id: 3090,
    zipCode: '83229',
    city: 'Aschau im Chiemgau',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.7769,
    longitude: 12.323
  },
  {
    id: 3091,
    zipCode: '83233',
    city: 'Bernau am Chiemsee',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.8117,
    longitude: 12.3757
  },
  {
    id: 3092,
    zipCode: '83236',
    city: '\u00dcbersee',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.8167,
    longitude: 12.4833
  },
  {
    id: 3093,
    zipCode: '83242',
    city: 'Reit im Winkl',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.6587,
    longitude: 12.5281
  },
  {
    id: 3094,
    zipCode: '83246',
    city: 'Unterw\u00f6ssen',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.7333,
    longitude: 12.4667
  },
  {
    id: 3095,
    zipCode: '83250',
    city: 'Marquartstein',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.7586,
    longitude: 12.4622
  },
  {
    id: 3096,
    zipCode: '83253',
    city: 'Rimsting',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.8808,
    longitude: 12.3371
  },
  {
    id: 3097,
    zipCode: '83254',
    city: 'Breitbrunn am Chiemsee',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.8895,
    longitude: 12.4004
  },
  {
    id: 3098,
    zipCode: '83256',
    city: 'Chiemsee',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.8667,
    longitude: 12.4167
  },
  {
    id: 3099,
    zipCode: '83257',
    city: 'Gstadt am Chiemsee',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.8845,
    longitude: 12.4181
  },
  {
    id: 3100,
    zipCode: '83259',
    city: 'Schleching',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.721,
    longitude: 12.3948
  },
  {
    id: 3101,
    zipCode: '83278',
    city: 'Traunstein',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.8682,
    longitude: 12.6433
  },
  {
    id: 3102,
    zipCode: '83301',
    city: 'Traunreut',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.9627,
    longitude: 12.5923
  },
  {
    id: 3103,
    zipCode: '83308',
    city: 'Trostberg',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 48.0175,
    longitude: 12.5346
  },
  {
    id: 3104,
    zipCode: '83313',
    city: 'Siegsdorf',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.8228,
    longitude: 12.6428
  },
  {
    id: 3105,
    zipCode: '83317',
    city: 'Teisendorf',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.8492,
    longitude: 12.8192
  },
  {
    id: 3106,
    zipCode: '83324',
    city: 'Ruhpolding',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.7667,
    longitude: 12.65
  },
  {
    id: 3107,
    zipCode: '83329',
    city: 'Wonneberg',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.9167,
    longitude: 12.7167
  },
  {
    id: 3108,
    zipCode: '83329',
    city: 'Waging am See',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.9341,
    longitude: 12.7339
  },
  {
    id: 3109,
    zipCode: '83334',
    city: 'Inzell',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.763,
    longitude: 12.7515
  },
  {
    id: 3110,
    zipCode: '83339',
    city: 'Chieming',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.8926,
    longitude: 12.5401
  },
  {
    id: 3111,
    zipCode: '83342',
    city: 'Tacherting',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 48.0783,
    longitude: 12.5701
  },
  {
    id: 3112,
    zipCode: '83344',
    city: 'Bergen',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.804,
    longitude: 12.583
  },
  {
    id: 3113,
    zipCode: '83346',
    city: 'Bergen',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.8036,
    longitude: 12.5828
  },
  {
    id: 3114,
    zipCode: '83349',
    city: 'Palling',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 48.002,
    longitude: 12.637
  },
  {
    id: 3115,
    zipCode: '83352',
    city: 'Altenmarkt an der Alz',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 48.0026,
    longitude: 12.5367
  },
  {
    id: 3116,
    zipCode: '83355',
    city: 'Grabenst\u00e4tt',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.8453,
    longitude: 12.5433
  },
  {
    id: 3117,
    zipCode: '83358',
    city: 'Seeon-Seebruck',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.9667,
    longitude: 12.4667
  },
  {
    id: 3118,
    zipCode: '83359',
    city: 'Hallabruck',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.8667,
    longitude: 12.7
  },
  {
    id: 3119,
    zipCode: '83361',
    city: 'Kienberg',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 48.0348,
    longitude: 12.4633
  },
  {
    id: 3120,
    zipCode: '83362',
    city: 'Surberg',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.8667,
    longitude: 12.7
  },
  {
    id: 3121,
    zipCode: '83364',
    city: 'Graben bei Neukirchen am Teisenberg',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.844,
    longitude: 12.7342
  },
  {
    id: 3122,
    zipCode: '83365',
    city: 'Nu\u00dfdorf',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.9056,
    longitude: 12.5961
  },
  {
    id: 3123,
    zipCode: '83367',
    city: 'Petting',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.9123,
    longitude: 12.8151
  },
  {
    id: 3124,
    zipCode: '83368',
    city: 'Anning bei Sankt Georgen, Chiemgau',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.9833,
    longitude: 12.5667
  },
  {
    id: 3125,
    zipCode: '83370',
    city: 'Seeon-Seebruck',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.9667,
    longitude: 12.4667
  },
  {
    id: 3126,
    zipCode: '83371',
    city: 'Roitham bei Stein an der Traun',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 48.0,
    longitude: 12.55
  },
  {
    id: 3127,
    zipCode: '83373',
    city: 'Taching am See',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.9594,
    longitude: 12.7293
  },
  {
    id: 3128,
    zipCode: '83374',
    city: 'Niedling',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.9427,
    longitude: 12.6306
  },
  {
    id: 3129,
    zipCode: '83376',
    city: 'Castrum',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.9425,
    longitude: 12.5049
  },
  {
    id: 3130,
    zipCode: '83377',
    city: 'Vachendorf',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.8426,
    longitude: 12.6061
  },
  {
    id: 3131,
    zipCode: '83379',
    city: 'Wonneberg',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.9167,
    longitude: 12.7167
  },
  {
    id: 3132,
    zipCode: '83395',
    city: 'Freilassing',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.8409,
    longitude: 12.9811
  },
  {
    id: 3133,
    zipCode: '83404',
    city: 'Ainring',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.8131,
    longitude: 12.9405
  },
  {
    id: 3134,
    zipCode: '83410',
    city: 'Laufen',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.9357,
    longitude: 12.9286
  },
  {
    id: 3135,
    zipCode: '83413',
    city: 'Fridolfing',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.9977,
    longitude: 12.8263
  },
  {
    id: 3136,
    zipCode: '83416',
    city: 'Saaldorf-Surheim',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.875,
    longitude: 12.9417
  },
  {
    id: 3137,
    zipCode: '83417',
    city: 'Kirchansch\u00f6ring',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 47.953,
    longitude: 12.8343
  },
  {
    id: 3138,
    zipCode: '83435',
    city: 'Bad Reichenhall',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.7295,
    longitude: 12.8782
  },
  {
    id: 3139,
    zipCode: '83451',
    city: 'Piding',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.7667,
    longitude: 12.9167
  },
  {
    id: 3140,
    zipCode: '83454',
    city: 'Anger',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.8019,
    longitude: 12.8581
  },
  {
    id: 3141,
    zipCode: '83457',
    city: 'Bayerisch Gmain',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.7167,
    longitude: 12.9
  },
  {
    id: 3142,
    zipCode: '83458',
    city: 'Schneizlreuth',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.6833,
    longitude: 12.8
  },
  {
    id: 3143,
    zipCode: '83471',
    city: 'Sch\u00f6nau am K\u00f6nigssee',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.6005,
    longitude: 12.987
  },
  {
    id: 3144,
    zipCode: '83471',
    city: 'Berchtesgaden',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.6324,
    longitude: 13.0019
  },
  {
    id: 3145,
    zipCode: '83483',
    city: 'Bischofswiesen',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.6312,
    longitude: 12.983
  },
  {
    id: 3146,
    zipCode: '83486',
    city: 'Ramsau',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.6167,
    longitude: 12.9
  },
  {
    id: 3147,
    zipCode: '83487',
    city: 'Marktschellenberg',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.6966,
    longitude: 13.0434
  },
  {
    id: 3148,
    zipCode: '83489',
    city: 'Strub',
    state: 'Bayern',
    community: 'Berchtesgadener Land',
    latitude: 47.6254,
    longitude: 12.9741
  },
  {
    id: 3149,
    zipCode: '83512',
    city: 'Wasserburg am Inn',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 48.0525,
    longitude: 12.2234
  },
  {
    id: 3150,
    zipCode: '83527',
    city: 'Kirchdorf',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.1754,
    longitude: 12.1965
  },
  {
    id: 3151,
    zipCode: '83527',
    city: 'Haag in Oberbayern',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.162,
    longitude: 12.1794
  },
  {
    id: 3152,
    zipCode: '83530',
    city: 'Schnaitsee',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 48.0667,
    longitude: 12.3667
  },
  {
    id: 3153,
    zipCode: '83533',
    city: 'Edling',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 48.0561,
    longitude: 12.1647
  },
  {
    id: 3154,
    zipCode: '83536',
    city: 'Gars am Inn',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.15,
    longitude: 12.2833
  },
  {
    id: 3155,
    zipCode: '83539',
    city: 'Albaching',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 48.1167,
    longitude: 12.1167
  },
  {
    id: 3156,
    zipCode: '83539',
    city: 'Pfaffing',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 48.0546,
    longitude: 12.1092
  },
  {
    id: 3157,
    zipCode: '83543',
    city: 'Rott am Inn',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.9819,
    longitude: 12.1281
  },
  {
    id: 3158,
    zipCode: '83544',
    city: 'Albaching',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 48.107,
    longitude: 12.1119
  },
  {
    id: 3159,
    zipCode: '83546',
    city: 'Biburg, Gemeinde Gars am Inn',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.1792,
    longitude: 12.3041
  },
  {
    id: 3160,
    zipCode: '83547',
    city: 'Babensham',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 48.0833,
    longitude: 12.2667
  },
  {
    id: 3161,
    zipCode: '83549',
    city: 'Eiselfing',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 48.0411,
    longitude: 12.2427
  },
  {
    id: 3162,
    zipCode: '83550',
    city: 'Emmering',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 47.9976,
    longitude: 12.0564
  },
  {
    id: 3163,
    zipCode: '83552',
    city: 'Durrhausen',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 48.0284,
    longitude: 12.3103
  },
  {
    id: 3164,
    zipCode: '83553',
    city: 'Frauenneuharting',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.0316,
    longitude: 12.056
  },
  {
    id: 3165,
    zipCode: '83555',
    city: 'Haiden bei Gars Bahnhof',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.15,
    longitude: 12.2833
  },
  {
    id: 3166,
    zipCode: '83556',
    city: 'Griesst\u00e4tt',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.994,
    longitude: 12.1773
  },
  {
    id: 3167,
    zipCode: '83558',
    city: 'Maitenbeth',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.1505,
    longitude: 12.0934
  },
  {
    id: 3168,
    zipCode: '83559',
    city: 'Reiser, Gemeinde Gars am Inn',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.1532,
    longitude: 12.3173
  },
  {
    id: 3169,
    zipCode: '83561',
    city: 'Ramerberg',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 48.0181,
    longitude: 12.1451
  },
  {
    id: 3170,
    zipCode: '83562',
    city: 'Rechtmehring',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.1167,
    longitude: 12.1667
  },
  {
    id: 3171,
    zipCode: '83564',
    city: 'Soyen',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 48.1081,
    longitude: 12.2101
  },
  {
    id: 3172,
    zipCode: '83565',
    city: 'Ast, Gemeinde Frauenneuharting',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.0163,
    longitude: 12.0163
  },
  {
    id: 3173,
    zipCode: '83567',
    city: 'Unterreit',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.1167,
    longitude: 12.3333
  },
  {
    id: 3174,
    zipCode: '83569',
    city: 'Vogtareuth',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.9469,
    longitude: 12.1813
  },
  {
    id: 3175,
    zipCode: '83607',
    city: 'Holzkirchen',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.8766,
    longitude: 11.7018
  },
  {
    id: 3176,
    zipCode: '83620',
    city: 'Feldkirchen-Westerham',
    state: 'Bayern',
    community: 'Landkreis Rosenheim',
    latitude: 47.9075,
    longitude: 11.8427
  },
  {
    id: 3177,
    zipCode: '83623',
    city: 'Dietramszell',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.8487,
    longitude: 11.5953
  },
  {
    id: 3178,
    zipCode: '83624',
    city: 'Otterfing',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.909,
    longitude: 11.6755
  },
  {
    id: 3179,
    zipCode: '83626',
    city: 'Valley',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.8931,
    longitude: 11.7791
  },
  {
    id: 3180,
    zipCode: '83627',
    city: 'Warngau',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.8322,
    longitude: 11.7217
  },
  {
    id: 3181,
    zipCode: '83629',
    city: 'Weyarn',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.8584,
    longitude: 11.7992
  },
  {
    id: 3182,
    zipCode: '83646',
    city: 'Bad T\u00f6lz',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.7611,
    longitude: 11.5589
  },
  {
    id: 3183,
    zipCode: '83646',
    city: 'Wackersberg',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.7333,
    longitude: 11.55
  },
  {
    id: 3184,
    zipCode: '83661',
    city: 'Lenggries',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.6833,
    longitude: 11.5667
  },
  {
    id: 3185,
    zipCode: '83666',
    city: 'Waakirchen',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.7725,
    longitude: 11.6731
  },
  {
    id: 3186,
    zipCode: '83670',
    city: 'Bad Heilbrunn',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.7467,
    longitude: 11.4593
  },
  {
    id: 3187,
    zipCode: '83671',
    city: 'Benediktbeuern',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.7062,
    longitude: 11.4152
  },
  {
    id: 3188,
    zipCode: '83673',
    city: 'Bichl',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.7201,
    longitude: 11.4123
  },
  {
    id: 3189,
    zipCode: '83674',
    city: 'Gai\u00dfach',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.75,
    longitude: 11.5833
  },
  {
    id: 3190,
    zipCode: '83676',
    city: 'Jachenau',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.6057,
    longitude: 11.4338
  },
  {
    id: 3191,
    zipCode: '83677',
    city: 'Reichersbeuern',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.7667,
    longitude: 11.6333
  },
  {
    id: 3192,
    zipCode: '83677',
    city: 'Greiling',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.7667,
    longitude: 11.6167
  },
  {
    id: 3193,
    zipCode: '83679',
    city: 'Sachsenkam',
    state: 'Bayern',
    community: 'Landkreis Bad T\u00f6lz-Wolfratshausen',
    latitude: 47.8054,
    longitude: 11.644
  },
  {
    id: 3194,
    zipCode: '83684',
    city: 'Tegernsee',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.7123,
    longitude: 11.7582
  },
  {
    id: 3195,
    zipCode: '83700',
    city: 'Rottach-Egern',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.6897,
    longitude: 11.7706
  },
  {
    id: 3196,
    zipCode: '83703',
    city: 'Gmund am Tegernsee',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.7512,
    longitude: 11.7381
  },
  {
    id: 3197,
    zipCode: '83707',
    city: 'Bad Wiessee',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.7167,
    longitude: 11.7167
  },
  {
    id: 3198,
    zipCode: '83708',
    city: 'Kreuth',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.6408,
    longitude: 11.7449
  },
  {
    id: 3199,
    zipCode: '83714',
    city: 'Miesbach',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.789,
    longitude: 11.8338
  },
  {
    id: 3200,
    zipCode: '83727',
    city: 'Schliersee',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.7362,
    longitude: 11.8594
  },
  {
    id: 3201,
    zipCode: '83730',
    city: 'Fischbachau',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.7195,
    longitude: 11.9508
  },
  {
    id: 3202,
    zipCode: '83734',
    city: 'Hausham',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.7466,
    longitude: 11.8407
  },
  {
    id: 3203,
    zipCode: '83735',
    city: 'Bayrischzell',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.6744,
    longitude: 12.0145
  },
  {
    id: 3204,
    zipCode: '83737',
    city: 'Irschenberg',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.8333,
    longitude: 11.9167
  },
  {
    id: 3205,
    zipCode: '83739',
    city: 'Hofreuth bei W\u00f6rnsm\u00fchl',
    state: 'Bayern',
    community: 'Miesbach',
    latitude: 47.8333,
    longitude: 11.9167
  },
  {
    id: 3206,
    zipCode: '84072',
    city: 'Au in der Hallertau',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.5584,
    longitude: 11.7414
  },
  {
    id: 3207,
    zipCode: '84104',
    city: 'Rudelzhausen',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.6,
    longitude: 11.7667
  },
  {
    id: 3208,
    zipCode: '84405',
    city: 'Dorfen',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.2704,
    longitude: 12.1606
  },
  {
    id: 3209,
    zipCode: '84416',
    city: 'Taufkirchen (Vils)',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.3374,
    longitude: 12.1974
  },
  {
    id: 3210,
    zipCode: '84416',
    city: 'Inning am Holz',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.3469,
    longitude: 12.0751
  },
  {
    id: 3211,
    zipCode: '84419',
    city: 'Obertaufkirchen',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.2605,
    longitude: 12.279
  },
  {
    id: 3212,
    zipCode: '84419',
    city: 'Schwindegg',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.2715,
    longitude: 12.2598
  },
  {
    id: 3213,
    zipCode: '84424',
    city: 'Isen',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.212,
    longitude: 12.0567
  },
  {
    id: 3214,
    zipCode: '84427',
    city: 'Sankt Wolfgang',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.2167,
    longitude: 12.1333
  },
  {
    id: 3215,
    zipCode: '84428',
    city: 'Buchbach',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.3123,
    longitude: 12.2734
  },
  {
    id: 3216,
    zipCode: '84431',
    city: 'Rattenkirchen',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.2421,
    longitude: 12.3151
  },
  {
    id: 3217,
    zipCode: '84431',
    city: 'Heldenstein',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.25,
    longitude: 12.3667
  },
  {
    id: 3218,
    zipCode: '84432',
    city: 'Hohenpolding',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.3833,
    longitude: 12.1333
  },
  {
    id: 3219,
    zipCode: '84434',
    city: 'Kirchberg',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.4,
    longitude: 12.05
  },
  {
    id: 3220,
    zipCode: '84435',
    city: 'Lengdorf',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.2574,
    longitude: 12.0497
  },
  {
    id: 3221,
    zipCode: '84437',
    city: 'Reichertsheim',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.2,
    longitude: 12.2833
  },
  {
    id: 3222,
    zipCode: '84439',
    city: 'Steinkirchen',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.3833,
    longitude: 12.0833
  },
  {
    id: 3223,
    zipCode: '84453',
    city: 'M\u00fchldorf am Inn',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.2503,
    longitude: 12.5215
  },
  {
    id: 3224,
    zipCode: '84478',
    city: 'Waldkraiburg',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.2085,
    longitude: 12.3989
  },
  {
    id: 3225,
    zipCode: '84489',
    city: 'Burghausen',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.1693,
    longitude: 12.8314
  },
  {
    id: 3226,
    zipCode: '84494',
    city: 'Niedertaufkirchen',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.3333,
    longitude: 12.55
  },
  {
    id: 3227,
    zipCode: '84494',
    city: 'Lohkirchen',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.3167,
    longitude: 12.45
  },
  {
    id: 3228,
    zipCode: '84494',
    city: 'Neumarkt-Sankt Veit',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.3605,
    longitude: 12.5072
  },
  {
    id: 3229,
    zipCode: '84494',
    city: 'Niederbergkirchen',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.3167,
    longitude: 12.5
  },
  {
    id: 3230,
    zipCode: '84503',
    city: 'Alt\u00f6tting',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.2253,
    longitude: 12.6766
  },
  {
    id: 3231,
    zipCode: '84508',
    city: 'Burgkirchen an der Alz',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.1675,
    longitude: 12.7325
  },
  {
    id: 3232,
    zipCode: '84513',
    city: 'T\u00f6ging am Inn',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.2602,
    longitude: 12.5846
  },
  {
    id: 3233,
    zipCode: '84513',
    city: 'Erharting',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.2833,
    longitude: 12.5833
  },
  {
    id: 3234,
    zipCode: '84518',
    city: 'Garching an der Alz',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.1345,
    longitude: 12.5815
  },
  {
    id: 3235,
    zipCode: '84524',
    city: 'Neu\u00f6tting',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.241,
    longitude: 12.69
  },
  {
    id: 3236,
    zipCode: '84529',
    city: 'Tittmoning',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 48.0616,
    longitude: 12.7676
  },
  {
    id: 3237,
    zipCode: '84533',
    city: 'Haiming',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.2167,
    longitude: 12.9
  },
  {
    id: 3238,
    zipCode: '84533',
    city: 'Marktl',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.2552,
    longitude: 12.8447
  },
  {
    id: 3239,
    zipCode: '84533',
    city: 'Stammham',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.25,
    longitude: 12.8833
  },
  {
    id: 3240,
    zipCode: '84539',
    city: 'Zangberg',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.2748,
    longitude: 12.4231
  },
  {
    id: 3241,
    zipCode: '84539',
    city: 'Ampfing',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.254,
    longitude: 12.4152
  },
  {
    id: 3242,
    zipCode: '84543',
    city: 'Winh\u00f6ring',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.2667,
    longitude: 12.65
  },
  {
    id: 3243,
    zipCode: '84544',
    city: 'Aschau am Inn',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.1985,
    longitude: 12.35
  },
  {
    id: 3244,
    zipCode: '84546',
    city: 'Egglkofen',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.4,
    longitude: 12.45
  },
  {
    id: 3245,
    zipCode: '84547',
    city: 'Emmerting',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.2,
    longitude: 12.7667
  },
  {
    id: 3246,
    zipCode: '84549',
    city: 'Engelsberg',
    state: 'Bayern',
    community: 'Landkreis Traunstein',
    latitude: 48.1163,
    longitude: 12.5427
  },
  {
    id: 3247,
    zipCode: '84550',
    city: 'Feichten an der Alz',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.0833,
    longitude: 12.6
  },
  {
    id: 3248,
    zipCode: '84553',
    city: 'Halsbach, Kreis Alt\u00f6tting',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.1333,
    longitude: 12.6833
  },
  {
    id: 3249,
    zipCode: '84555',
    city: 'Jettenbach',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.1667,
    longitude: 12.3833
  },
  {
    id: 3250,
    zipCode: '84556',
    city: 'Kastl',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.2,
    longitude: 12.7
  },
  {
    id: 3251,
    zipCode: '84558',
    city: 'Kirchweidach',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.0858,
    longitude: 12.6453
  },
  {
    id: 3252,
    zipCode: '84558',
    city: 'Halsbach',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.1333,
    longitude: 12.6833
  },
  {
    id: 3253,
    zipCode: '84558',
    city: 'Tyrlaching',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.0667,
    longitude: 12.6667
  },
  {
    id: 3254,
    zipCode: '84559',
    city: 'Kraiburg am Inn',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.1819,
    longitude: 12.4307
  },
  {
    id: 3255,
    zipCode: '84561',
    city: 'Mehring',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.1833,
    longitude: 12.7833
  },
  {
    id: 3256,
    zipCode: '84562',
    city: 'Mettenheim',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.2667,
    longitude: 12.4667
  },
  {
    id: 3257,
    zipCode: '84564',
    city: 'Oberbergkirchen',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.3,
    longitude: 12.3833
  },
  {
    id: 3258,
    zipCode: '84565',
    city: 'Oberneukirchen',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.1833,
    longitude: 12.5167
  },
  {
    id: 3259,
    zipCode: '84567',
    city: 'Erlbach',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.3,
    longitude: 12.7833
  },
  {
    id: 3260,
    zipCode: '84567',
    city: 'Perach',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.2667,
    longitude: 12.7667
  },
  {
    id: 3261,
    zipCode: '84568',
    city: 'Pleiskirchen',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.3071,
    longitude: 12.5983
  },
  {
    id: 3262,
    zipCode: '84570',
    city: 'Polling',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.2167,
    longitude: 12.5667
  },
  {
    id: 3263,
    zipCode: '84571',
    city: 'Reischach',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.2907,
    longitude: 12.7262
  },
  {
    id: 3264,
    zipCode: '84573',
    city: 'Sch\u00f6nberg',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.3333,
    longitude: 12.4333
  },
  {
    id: 3265,
    zipCode: '84574',
    city: 'Taufkirchen',
    state: 'Bayern',
    community: 'Landkreis M\u00fchldorf am Inn',
    latitude: 48.15,
    longitude: 12.45
  },
  {
    id: 3266,
    zipCode: '84576',
    city: 'Teising',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.2272,
    longitude: 12.6114
  },
  {
    id: 3267,
    zipCode: '84577',
    city: 'T\u00fc\u00dfling',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.2122,
    longitude: 12.5995
  },
  {
    id: 3268,
    zipCode: '84579',
    city: 'Unterneukirchen',
    state: 'Bayern',
    community: 'Landkreis Alt\u00f6tting',
    latitude: 48.1667,
    longitude: 12.6167
  },
  {
    id: 3269,
    zipCode: '85049',
    city: 'Ingolstadt',
    state: 'Bayern',
    community: 'Ingolstadt',
    latitude: 48.7667,
    longitude: 11.4147
  },
  {
    id: 3270,
    zipCode: '85051',
    city: 'Ingolstadt',
    state: 'Bayern',
    community: 'Ingolstadt',
    latitude: 48.7212,
    longitude: 11.4096
  },
  {
    id: 3271,
    zipCode: '85053',
    city: 'Ingolstadt',
    state: 'Bayern',
    community: 'Ingolstadt',
    latitude: 48.7515,
    longitude: 11.4588
  },
  {
    id: 3272,
    zipCode: '85055',
    city: 'Ingolstadt',
    state: 'Bayern',
    community: 'Ingolstadt',
    latitude: 48.776,
    longitude: 11.4459
  },
  {
    id: 3273,
    zipCode: '85057',
    city: 'Ingolstadt',
    state: 'Bayern',
    community: 'Ingolstadt',
    latitude: 48.775,
    longitude: 11.3914
  },
  {
    id: 3274,
    zipCode: '85072',
    city: 'Eichst\u00e4tt',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.8885,
    longitude: 11.1968
  },
  {
    id: 3275,
    zipCode: '85077',
    city: 'Manching',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.7166,
    longitude: 11.4939
  },
  {
    id: 3276,
    zipCode: '85080',
    city: 'Gaimersheim',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.8071,
    longitude: 11.368
  },
  {
    id: 3277,
    zipCode: '85084',
    city: 'Reichertshofen',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.6577,
    longitude: 11.4661
  },
  {
    id: 3278,
    zipCode: '85088',
    city: 'Vohburg an der Donau',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.7698,
    longitude: 11.6185
  },
  {
    id: 3279,
    zipCode: '85092',
    city: 'K\u00f6sching',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.814,
    longitude: 11.5049
  },
  {
    id: 3280,
    zipCode: '85095',
    city: 'Denkendorf',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.9284,
    longitude: 11.457
  },
  {
    id: 3281,
    zipCode: '85098',
    city: 'Gro\u00dfmehring',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.7667,
    longitude: 11.5333
  },
  {
    id: 3282,
    zipCode: '85101',
    city: 'Lenting',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.8103,
    longitude: 11.4587
  },
  {
    id: 3283,
    zipCode: '85104',
    city: 'Pf\u00f6rring',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.8082,
    longitude: 11.6901
  },
  {
    id: 3284,
    zipCode: '85107',
    city: 'Baar-Ebenhausen',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.6707,
    longitude: 11.4698
  },
  {
    id: 3285,
    zipCode: '85110',
    city: 'Kipfenberg',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.9526,
    longitude: 11.3975
  },
  {
    id: 3286,
    zipCode: '85111',
    city: 'Adelschlag',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.8403,
    longitude: 11.2191
  },
  {
    id: 3287,
    zipCode: '85113',
    city: 'B\u00f6hmfeld',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.8608,
    longitude: 11.3679
  },
  {
    id: 3288,
    zipCode: '85114',
    city: 'Buxheim',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.8069,
    longitude: 11.2921
  },
  {
    id: 3289,
    zipCode: '85116',
    city: 'Egweil',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.7833,
    longitude: 11.2333
  },
  {
    id: 3290,
    zipCode: '85117',
    city: 'Eitensheim',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.8167,
    longitude: 11.3167
  },
  {
    id: 3291,
    zipCode: '85119',
    city: 'Ernsgaden',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.7333,
    longitude: 11.5833
  },
  {
    id: 3292,
    zipCode: '85120',
    city: 'Hepberg',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.8225,
    longitude: 11.4617
  },
  {
    id: 3293,
    zipCode: '85122',
    city: 'Hitzhofen',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.85,
    longitude: 11.3167
  },
  {
    id: 3294,
    zipCode: '85123',
    city: 'Karlskron',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.6833,
    longitude: 11.4167
  },
  {
    id: 3295,
    zipCode: '85125',
    city: 'Kinding',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 49.0016,
    longitude: 11.3831
  },
  {
    id: 3296,
    zipCode: '85126',
    city: 'M\u00fcnchsm\u00fcnster',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.7667,
    longitude: 11.6833
  },
  {
    id: 3297,
    zipCode: '85128',
    city: 'Nassenfels',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.7995,
    longitude: 11.2259
  },
  {
    id: 3298,
    zipCode: '85129',
    city: 'Oberdolling',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.8294,
    longitude: 11.5933
  },
  {
    id: 3299,
    zipCode: '85131',
    city: 'Pollenfeld',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.95,
    longitude: 11.2
  },
  {
    id: 3300,
    zipCode: '85132',
    city: 'Schernfeld',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.9,
    longitude: 11.1
  },
  {
    id: 3301,
    zipCode: '85134',
    city: 'Stammham',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.8558,
    longitude: 11.4554
  },
  {
    id: 3302,
    zipCode: '85135',
    city: 'Titting',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.9968,
    longitude: 11.2115
  },
  {
    id: 3303,
    zipCode: '85137',
    city: 'Walting',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.9167,
    longitude: 11.3
  },
  {
    id: 3304,
    zipCode: '85139',
    city: 'Wettstetten',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.8225,
    longitude: 11.4143
  },
  {
    id: 3305,
    zipCode: '85221',
    city: 'Dachau',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.26,
    longitude: 11.434
  },
  {
    id: 3306,
    zipCode: '85229',
    city: 'Markt Indersdorf',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.3606,
    longitude: 11.3779
  },
  {
    id: 3307,
    zipCode: '85232',
    city: 'Bergkirchen',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.2567,
    longitude: 11.3649
  },
  {
    id: 3308,
    zipCode: '85235',
    city: 'Odelzhausen',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.3089,
    longitude: 11.1989
  },
  {
    id: 3309,
    zipCode: '85235',
    city: 'Pfaffenhofen an der Glonn',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.2956,
    longitude: 11.1634
  },
  {
    id: 3310,
    zipCode: '85238',
    city: 'Petershausen',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.4097,
    longitude: 11.4706
  },
  {
    id: 3311,
    zipCode: '85241',
    city: 'Hebertshausen',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.2896,
    longitude: 11.4653
  },
  {
    id: 3312,
    zipCode: '85244',
    city: 'R\u00f6hrmoos',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.3297,
    longitude: 11.4467
  },
  {
    id: 3313,
    zipCode: '85247',
    city: 'Schwabhausen',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.3032,
    longitude: 11.3557
  },
  {
    id: 3314,
    zipCode: '85250',
    city: 'Altom\u00fcnster',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.3877,
    longitude: 11.2569
  },
  {
    id: 3315,
    zipCode: '85253',
    city: 'Erdweg',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.3318,
    longitude: 11.3034
  },
  {
    id: 3316,
    zipCode: '85254',
    city: 'Sulzemoos',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.2911,
    longitude: 11.2636
  },
  {
    id: 3317,
    zipCode: '85256',
    city: 'Vierkirchen',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.3667,
    longitude: 11.4667
  },
  {
    id: 3318,
    zipCode: '85258',
    city: 'Weichs',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.3833,
    longitude: 11.4167
  },
  {
    id: 3319,
    zipCode: '85259',
    city: 'Wiedenzhausen',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.2998,
    longitude: 11.2391
  },
  {
    id: 3320,
    zipCode: '85276',
    city: 'Hettenshausen',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.5,
    longitude: 11.5
  },
  {
    id: 3321,
    zipCode: '85276',
    city: 'Pfaffenhofen an der Ilm',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.5305,
    longitude: 11.505
  },
  {
    id: 3322,
    zipCode: '85283',
    city: 'Wolnzach',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.6038,
    longitude: 11.6257
  },
  {
    id: 3323,
    zipCode: '85290',
    city: 'Geisenfeld',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.6843,
    longitude: 11.6123
  },
  {
    id: 3324,
    zipCode: '85293',
    city: 'Reichertshausen',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.4667,
    longitude: 11.5167
  },
  {
    id: 3325,
    zipCode: '85296',
    city: 'Rohrbach',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.6167,
    longitude: 11.5667
  },
  {
    id: 3326,
    zipCode: '85298',
    city: 'Scheyern',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.5,
    longitude: 11.4667
  },
  {
    id: 3327,
    zipCode: '85301',
    city: 'Schweitenkirchen',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.5033,
    longitude: 11.6045
  },
  {
    id: 3328,
    zipCode: '85302',
    city: 'Gerolsbach',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.4928,
    longitude: 11.3615
  },
  {
    id: 3329,
    zipCode: '85304',
    city: 'Ilmm\u00fcnster',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.4833,
    longitude: 11.5
  },
  {
    id: 3330,
    zipCode: '85305',
    city: 'Jetzendorf',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.4333,
    longitude: 11.4167
  },
  {
    id: 3331,
    zipCode: '85307',
    city: 'Paunzhausen',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.4749,
    longitude: 11.5646
  },
  {
    id: 3332,
    zipCode: '85309',
    city: 'P\u00f6rnbach',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.6167,
    longitude: 11.4667
  },
  {
    id: 3333,
    zipCode: '85354',
    city: 'Freising',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.3938,
    longitude: 11.7331
  },
  {
    id: 3334,
    zipCode: '85356',
    city: 'Freising',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.3924,
    longitude: 11.7569
  },
  {
    id: 3335,
    zipCode: '85368',
    city: 'Wang',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.4955,
    longitude: 11.9364
  },
  {
    id: 3336,
    zipCode: '85368',
    city: 'Moosburg',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.4709,
    longitude: 11.9381
  },
  {
    id: 3337,
    zipCode: '85375',
    city: 'Neufahrn bei Freising',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.3159,
    longitude: 11.6632
  },
  {
    id: 3338,
    zipCode: '85376',
    city: 'Hetzenhausen',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.3167,
    longitude: 11.6667
  },
  {
    id: 3339,
    zipCode: '85386',
    city: 'Eching',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.3,
    longitude: 11.6167
  },
  {
    id: 3340,
    zipCode: '85391',
    city: 'Allershausen',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.4333,
    longitude: 11.6
  },
  {
    id: 3341,
    zipCode: '85395',
    city: 'Attenkirchen',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.5053,
    longitude: 11.7601
  },
  {
    id: 3342,
    zipCode: '85395',
    city: 'Wolfersdorf',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.4794,
    longitude: 11.7095
  },
  {
    id: 3343,
    zipCode: '85399',
    city: 'Hallbergmoos',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.3275,
    longitude: 11.7514
  },
  {
    id: 3344,
    zipCode: '85402',
    city: 'Kranzberg',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.4061,
    longitude: 11.6125
  },
  {
    id: 3345,
    zipCode: '85405',
    city: 'Nandlstadt',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.5364,
    longitude: 11.8073
  },
  {
    id: 3346,
    zipCode: '85406',
    city: 'Zolling',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.45,
    longitude: 11.7667
  },
  {
    id: 3347,
    zipCode: '85408',
    city: 'Gammelsdorf',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.55,
    longitude: 11.95
  },
  {
    id: 3348,
    zipCode: '85410',
    city: 'Haag an der Amper',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.4584,
    longitude: 11.828
  },
  {
    id: 3349,
    zipCode: '85411',
    city: 'Hohenkammer',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.4241,
    longitude: 11.5252
  },
  {
    id: 3350,
    zipCode: '85413',
    city: 'H\u00f6rgertshausen',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.55,
    longitude: 11.8667
  },
  {
    id: 3351,
    zipCode: '85414',
    city: 'Kirchdorf an der Amper',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.4667,
    longitude: 11.65
  },
  {
    id: 3352,
    zipCode: '85416',
    city: 'Langenbach',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.4333,
    longitude: 11.85
  },
  {
    id: 3353,
    zipCode: '85417',
    city: 'Marzling',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.409,
    longitude: 11.7938
  },
  {
    id: 3354,
    zipCode: '85419',
    city: 'Mauern',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.5167,
    longitude: 11.9
  },
  {
    id: 3355,
    zipCode: '85435',
    city: 'Erding',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.306,
    longitude: 11.9069
  },
  {
    id: 3356,
    zipCode: '85445',
    city: 'Oberding',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.3167,
    longitude: 11.85
  },
  {
    id: 3357,
    zipCode: '85447',
    city: 'Fraunberg',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.3667,
    longitude: 12.0
  },
  {
    id: 3358,
    zipCode: '85452',
    city: 'Moosinning',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.2771,
    longitude: 11.8445
  },
  {
    id: 3359,
    zipCode: '85456',
    city: 'Wartenberg',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.406,
    longitude: 11.9886
  },
  {
    id: 3360,
    zipCode: '85457',
    city: 'W\u00f6rth',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.2453,
    longitude: 11.9021
  },
  {
    id: 3361,
    zipCode: '85459',
    city: 'Berglern',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.3841,
    longitude: 11.9301
  },
  {
    id: 3362,
    zipCode: '85461',
    city: 'Bockhorn',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.3147,
    longitude: 11.9869
  },
  {
    id: 3363,
    zipCode: '85462',
    city: 'Eitting',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.3596,
    longitude: 11.8911
  },
  {
    id: 3364,
    zipCode: '85464',
    city: 'Finsing',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.2162,
    longitude: 11.8241
  },
  {
    id: 3365,
    zipCode: '85465',
    city: 'Langenpreising',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.4257,
    longitude: 11.9722
  },
  {
    id: 3366,
    zipCode: '85467',
    city: 'Neuching',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.2333,
    longitude: 11.85
  },
  {
    id: 3367,
    zipCode: '85469',
    city: 'Walpertskirchen',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.2584,
    longitude: 11.9753
  },
  {
    id: 3368,
    zipCode: '85521',
    city: 'Ottobrunn',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.0649,
    longitude: 11.6633
  },
  {
    id: 3369,
    zipCode: '85540',
    city: 'Haar',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.1088,
    longitude: 11.7265
  },
  {
    id: 3370,
    zipCode: '85551',
    city: 'Kirchheim bei M\u00fcnchen',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.1766,
    longitude: 11.7556
  },
  {
    id: 3371,
    zipCode: '85560',
    city: 'Ebersberg',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.0771,
    longitude: 11.9706
  },
  {
    id: 3372,
    zipCode: '85567',
    city: 'Bruck',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.0212,
    longitude: 11.9078
  },
  {
    id: 3373,
    zipCode: '85567',
    city: 'Grafing bei M\u00fcnchen',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.046,
    longitude: 11.968
  },
  {
    id: 3374,
    zipCode: '85570',
    city: 'Markt Schwaben',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.1895,
    longitude: 11.8691
  },
  {
    id: 3375,
    zipCode: '85570',
    city: 'Ottenhofen',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.2167,
    longitude: 11.8833
  },
  {
    id: 3376,
    zipCode: '85579',
    city: 'Neubiberg',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.0771,
    longitude: 11.6581
  },
  {
    id: 3377,
    zipCode: '85586',
    city: 'Poing',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.17,
    longitude: 11.8186
  },
  {
    id: 3378,
    zipCode: '85591',
    city: 'Vaterstetten',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.1054,
    longitude: 11.7682
  },
  {
    id: 3379,
    zipCode: '85598',
    city: 'Baldham',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.1148,
    longitude: 11.7959
  },
  {
    id: 3380,
    zipCode: '85599',
    city: 'Parsdorf',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.1422,
    longitude: 11.788
  },
  {
    id: 3381,
    zipCode: '85604',
    city: 'Zorneding',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.0843,
    longitude: 11.8245
  },
  {
    id: 3382,
    zipCode: '85609',
    city: 'Aschheim',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.1711,
    longitude: 11.7167
  },
  {
    id: 3383,
    zipCode: '85614',
    city: 'Kirchseeon',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.0714,
    longitude: 11.8888
  },
  {
    id: 3384,
    zipCode: '85617',
    city: 'A\u00dfling',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 47.993,
    longitude: 12.0064
  },
  {
    id: 3385,
    zipCode: '85622',
    city: 'Feldkirchen',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.1481,
    longitude: 11.731
  },
  {
    id: 3386,
    zipCode: '85625',
    city: 'Glonn',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 47.9875,
    longitude: 11.8672
  },
  {
    id: 3387,
    zipCode: '85625',
    city: 'Baiern',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 47.95,
    longitude: 11.9
  },
  {
    id: 3388,
    zipCode: '85630',
    city: 'Grasbrunn',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.0791,
    longitude: 11.7436
  },
  {
    id: 3389,
    zipCode: '85635',
    city: 'H\u00f6henkirchen-Siegertsbrunn',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.0193,
    longitude: 11.7191
  },
  {
    id: 3390,
    zipCode: '85640',
    city: 'Putzbrunn',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.0758,
    longitude: 11.7157
  },
  {
    id: 3391,
    zipCode: '85643',
    city: 'Steinh\u00f6ring',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.0868,
    longitude: 12.0314
  },
  {
    id: 3392,
    zipCode: '85646',
    city: 'Anzing',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.1517,
    longitude: 11.8533
  },
  {
    id: 3393,
    zipCode: '85649',
    city: 'Brunnthal',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.0065,
    longitude: 11.684
  },
  {
    id: 3394,
    zipCode: '85652',
    city: 'Pliening',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.1956,
    longitude: 11.8007
  },
  {
    id: 3395,
    zipCode: '85653',
    city: 'Aying',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 47.9701,
    longitude: 11.7775
  },
  {
    id: 3396,
    zipCode: '85655',
    city: 'Loibersdorf bei Gro\u00dfhelfendorf',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 47.9602,
    longitude: 11.8366
  },
  {
    id: 3397,
    zipCode: '85656',
    city: 'Buch am Buchrain',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.2151,
    longitude: 11.9951
  },
  {
    id: 3398,
    zipCode: '85658',
    city: 'Egmating',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.0041,
    longitude: 11.7953
  },
  {
    id: 3399,
    zipCode: '85659',
    city: 'Forstern',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.1834,
    longitude: 11.9772
  },
  {
    id: 3400,
    zipCode: '85661',
    city: 'Forstinning',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.1687,
    longitude: 11.9124
  },
  {
    id: 3401,
    zipCode: '85662',
    city: 'Hohenbrunn',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.0478,
    longitude: 11.7022
  },
  {
    id: 3402,
    zipCode: '85664',
    city: 'Hohenlinden',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.1561,
    longitude: 11.9946
  },
  {
    id: 3403,
    zipCode: '85665',
    city: 'Moosach',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.0321,
    longitude: 11.8751
  },
  {
    id: 3404,
    zipCode: '85667',
    city: 'Oberpframmern',
    state: 'Bayern',
    community: 'Landkreis Ebersberg',
    latitude: 48.022,
    longitude: 11.8133
  },
  {
    id: 3405,
    zipCode: '85669',
    city: 'Pastetten',
    state: 'Bayern',
    community: 'Erding',
    latitude: 48.1991,
    longitude: 11.9437
  },
  {
    id: 3406,
    zipCode: '85716',
    city: 'Unterschlei\u00dfheim',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.2804,
    longitude: 11.5768
  },
  {
    id: 3407,
    zipCode: '85737',
    city: 'Ismaning',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.2333,
    longitude: 11.6833
  },
  {
    id: 3408,
    zipCode: '85748',
    city: 'Garching bei M\u00fcnchen',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.249,
    longitude: 11.651
  },
  {
    id: 3409,
    zipCode: '85757',
    city: 'Karlsfeld',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.2167,
    longitude: 11.4667
  },
  {
    id: 3410,
    zipCode: '85764',
    city: 'Oberschlei\u00dfheim',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.25,
    longitude: 11.5667
  },
  {
    id: 3411,
    zipCode: '85774',
    city: 'Unterf\u00f6hring',
    state: 'Bayern',
    community: 'Landkreis M\u00fcnchen',
    latitude: 48.1925,
    longitude: 11.6429
  },
  {
    id: 3412,
    zipCode: '85777',
    city: 'Fahrenzhausen',
    state: 'Bayern',
    community: 'Landkreis Freising',
    latitude: 48.3532,
    longitude: 11.5552
  },
  {
    id: 3413,
    zipCode: '85778',
    city: 'Haimhausen',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.3155,
    longitude: 11.5545
  },
  {
    id: 3414,
    zipCode: '86492',
    city: 'Egling an der Paar',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.1833,
    longitude: 10.9833
  },
  {
    id: 3415,
    zipCode: '86529',
    city: 'Schrobenhausen',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.5607,
    longitude: 11.2607
  },
  {
    id: 3416,
    zipCode: '86558',
    city: 'Hohenwart',
    state: 'Bayern',
    community: 'Landkreis Pfaffenhofen an der Ilm',
    latitude: 48.5935,
    longitude: 11.3827
  },
  {
    id: 3417,
    zipCode: '86561',
    city: 'Aresing',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.5333,
    longitude: 11.3
  },
  {
    id: 3418,
    zipCode: '86562',
    city: 'Berg im Gau',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.6333,
    longitude: 11.25
  },
  {
    id: 3419,
    zipCode: '86564',
    city: 'Brunnen',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.629,
    longitude: 11.3092
  },
  {
    id: 3420,
    zipCode: '86565',
    city: 'Gachenbach',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.5,
    longitude: 11.2333
  },
  {
    id: 3421,
    zipCode: '86567',
    city: 'Hilgertshausen-Tandern',
    state: 'Bayern',
    community: 'Landkreis Dachau',
    latitude: 48.4296,
    longitude: 11.3543
  },
  {
    id: 3422,
    zipCode: '86571',
    city: 'Langenmosen',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.6066,
    longitude: 11.2138
  },
  {
    id: 3423,
    zipCode: '86579',
    city: 'Waidhofen',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.5768,
    longitude: 11.3354
  },
  {
    id: 3424,
    zipCode: '86633',
    city: 'Neuburg an der Donau',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.7322,
    longitude: 11.1871
  },
  {
    id: 3425,
    zipCode: '86643',
    city: 'Rennertshofen',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.7594,
    longitude: 11.0454
  },
  {
    id: 3426,
    zipCode: '86666',
    city: 'Burgheim',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.7004,
    longitude: 11.016
  },
  {
    id: 3427,
    zipCode: '86668',
    city: 'Karlshuld',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.6819,
    longitude: 11.285
  },
  {
    id: 3428,
    zipCode: '86669',
    city: 'K\u00f6nigsmoos',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.6667,
    longitude: 11.2167
  },
  {
    id: 3429,
    zipCode: '86673',
    city: 'Bergheim',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.7606,
    longitude: 11.2574
  },
  {
    id: 3430,
    zipCode: '86676',
    city: 'Ehekirchen',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.6333,
    longitude: 11.1
  },
  {
    id: 3431,
    zipCode: '86697',
    city: 'Oberhausen',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.722,
    longitude: 11.1115
  },
  {
    id: 3432,
    zipCode: '86701',
    city: 'Rohrenfels',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.6865,
    longitude: 11.1562
  },
  {
    id: 3433,
    zipCode: '86706',
    city: 'Weichering',
    state: 'Bayern',
    community: 'Neuburg-Schrobenhausen',
    latitude: 48.7171,
    longitude: 11.3214
  },
  {
    id: 3434,
    zipCode: '86836',
    city: 'Obermeitingen',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.1468,
    longitude: 10.8063
  },
  {
    id: 3435,
    zipCode: '86857',
    city: 'Hurlach',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.1184,
    longitude: 10.8111
  },
  {
    id: 3436,
    zipCode: '86859',
    city: 'Igling',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.0667,
    longitude: 10.8
  },
  {
    id: 3437,
    zipCode: '86899',
    city: 'Landsberg am Lech',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.0482,
    longitude: 10.8828
  },
  {
    id: 3438,
    zipCode: '86911',
    city: 'Die\u00dfen am Ammersee',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 47.9508,
    longitude: 11.1031
  },
  {
    id: 3439,
    zipCode: '86916',
    city: 'Kaufering',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.0912,
    longitude: 10.8791
  },
  {
    id: 3440,
    zipCode: '86919',
    city: 'Utting am Ammersee',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.0261,
    longitude: 11.0861
  },
  {
    id: 3441,
    zipCode: '86920',
    city: 'Denklingen',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 47.9167,
    longitude: 10.85
  },
  {
    id: 3442,
    zipCode: '86922',
    city: 'Eresing',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.087,
    longitude: 11.0239
  },
  {
    id: 3443,
    zipCode: '86923',
    city: 'Finning',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.0222,
    longitude: 11.011
  },
  {
    id: 3444,
    zipCode: '86925',
    city: 'Fuchstal',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 47.9333,
    longitude: 10.8167
  },
  {
    id: 3445,
    zipCode: '86926',
    city: 'Greifenberg',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.0706,
    longitude: 11.0835
  },
  {
    id: 3446,
    zipCode: '86928',
    city: 'Hofstetten',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.0085,
    longitude: 10.9711
  },
  {
    id: 3447,
    zipCode: '86929',
    city: 'Penzing',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.0748,
    longitude: 10.9274
  },
  {
    id: 3448,
    zipCode: '86931',
    city: 'Prittriching',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.2007,
    longitude: 10.928
  },
  {
    id: 3449,
    zipCode: '86932',
    city: 'P\u00fcrgen',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.0247,
    longitude: 10.9221
  },
  {
    id: 3450,
    zipCode: '86934',
    city: 'Reichling',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 47.9228,
    longitude: 10.9285
  },
  {
    id: 3451,
    zipCode: '86935',
    city: 'Rott',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 47.9047,
    longitude: 10.9729
  },
  {
    id: 3452,
    zipCode: '86937',
    city: 'Scheuring',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.1677,
    longitude: 10.8957
  },
  {
    id: 3453,
    zipCode: '86938',
    city: 'Schondorf am Ammersee',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.053,
    longitude: 11.0914
  },
  {
    id: 3454,
    zipCode: '86940',
    city: 'Schwifting',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.0456,
    longitude: 10.9276
  },
  {
    id: 3455,
    zipCode: '86941',
    city: 'Sankt Ottilien',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.0957,
    longitude: 11.0452
  },
  {
    id: 3456,
    zipCode: '86943',
    city: 'Thaining',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 47.973,
    longitude: 10.9577
  },
  {
    id: 3457,
    zipCode: '86944',
    city: 'Unterdie\u00dfen',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 47.9833,
    longitude: 10.8333
  },
  {
    id: 3458,
    zipCode: '86946',
    city: 'Vilgertshofen',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 47.95,
    longitude: 10.9167
  },
  {
    id: 3459,
    zipCode: '86947',
    city: 'Weil',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.1172,
    longitude: 10.9216
  },
  {
    id: 3460,
    zipCode: '86949',
    city: 'Windach',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 48.0667,
    longitude: 11.0333
  },
  {
    id: 3461,
    zipCode: '86956',
    city: 'Schongau',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.8124,
    longitude: 10.8966
  },
  {
    id: 3462,
    zipCode: '86971',
    city: 'Peiting',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.7955,
    longitude: 10.9295
  },
  {
    id: 3463,
    zipCode: '86972',
    city: 'Altenstadt',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.8236,
    longitude: 10.8747
  },
  {
    id: 3464,
    zipCode: '86974',
    city: 'Apfeldorf',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 47.9,
    longitude: 10.9333
  },
  {
    id: 3465,
    zipCode: '86975',
    city: 'Bernbeuren',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.737,
    longitude: 10.7771
  },
  {
    id: 3466,
    zipCode: '86977',
    city: 'Burggen',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.7769,
    longitude: 10.8172
  },
  {
    id: 3467,
    zipCode: '86978',
    city: 'Hohenfurch',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.85,
    longitude: 10.9
  },
  {
    id: 3468,
    zipCode: '86980',
    city: 'Ingenried',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.8167,
    longitude: 10.7833
  },
  {
    id: 3469,
    zipCode: '86981',
    city: 'Kinsau',
    state: 'Bayern',
    community: 'Landkreis Landsberg am Lech',
    latitude: 47.8833,
    longitude: 10.9167
  },
  {
    id: 3470,
    zipCode: '86984',
    city: 'Prem',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.6833,
    longitude: 10.8
  },
  {
    id: 3471,
    zipCode: '86986',
    city: 'Schwabbruck',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.825,
    longitude: 10.8362
  },
  {
    id: 3472,
    zipCode: '86987',
    city: 'Schwabsoien',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.8333,
    longitude: 10.8333
  },
  {
    id: 3473,
    zipCode: '86989',
    city: 'Steingaden',
    state: 'Bayern',
    community: 'Landkreis Weilheim-Schongau',
    latitude: 47.7,
    longitude: 10.8667
  },
  {
    id: 3474,
    zipCode: '91795',
    city: 'Dollnstein',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.8683,
    longitude: 11.0734
  },
  {
    id: 3475,
    zipCode: '91804',
    city: 'M\u00f6rnsheim',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.8701,
    longitude: 11.0076
  },
  {
    id: 3476,
    zipCode: '91809',
    city: 'Wellheim',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.8197,
    longitude: 11.0888
  },
  {
    id: 3477,
    zipCode: '92339',
    city: 'Beilngries',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 49.0341,
    longitude: 11.4739
  },
  {
    id: 3478,
    zipCode: '93336',
    city: 'Altmannstein',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.8992,
    longitude: 11.652
  },
  {
    id: 3479,
    zipCode: '93349',
    city: 'Mindelstetten',
    state: 'Bayern',
    community: 'Eichst\u00e4tt',
    latitude: 48.85,
    longitude: 11.65
  },
  {
    id: 3480,
    zipCode: '84028',
    city: 'Landshut',
    state: 'Bayern',
    community: 'Kreisfreie Stadt Landshut',
    latitude: 48.5359,
    longitude: 12.1523
  },
  {
    id: 3481,
    zipCode: '84030',
    city: 'Ergolding',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.5765,
    longitude: 12.171
  },
  {
    id: 3482,
    zipCode: '84030',
    city: 'Landshut',
    state: 'Bayern',
    community: 'Kreisfreie Stadt Landshut',
    latitude: 48.5602,
    longitude: 12.1366
  },
  {
    id: 3483,
    zipCode: '84032',
    city: 'Altdorf',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.5559,
    longitude: 12.11
  },
  {
    id: 3484,
    zipCode: '84032',
    city: 'Landshut',
    state: 'Bayern',
    community: 'Kreisfreie Stadt Landshut',
    latitude: 48.5333,
    longitude: 12.15
  },
  {
    id: 3485,
    zipCode: '84034',
    city: 'Landshut',
    state: 'Bayern',
    community: 'Kreisfreie Stadt Landshut',
    latitude: 48.5359,
    longitude: 12.1325
  },
  {
    id: 3486,
    zipCode: '84036',
    city: 'Kumhausen',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.5094,
    longitude: 12.1564
  },
  {
    id: 3487,
    zipCode: '84036',
    city: 'Landshut',
    state: 'Bayern',
    community: 'Kreisfreie Stadt Landshut',
    latitude: 48.5265,
    longitude: 12.1575
  },
  {
    id: 3488,
    zipCode: '84048',
    city: 'Mainburg',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.6418,
    longitude: 11.7809
  },
  {
    id: 3489,
    zipCode: '84051',
    city: 'Essenbach',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.6133,
    longitude: 12.2183
  },
  {
    id: 3490,
    zipCode: '84056',
    city: 'Rottenburg an der Laaber',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.7023,
    longitude: 12.0272
  },
  {
    id: 3491,
    zipCode: '84061',
    city: 'Ergoldsbach',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.6926,
    longitude: 12.2044
  },
  {
    id: 3492,
    zipCode: '84066',
    city: 'Mallersdorf-Pfaffenberg',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.7664,
    longitude: 12.231
  },
  {
    id: 3493,
    zipCode: '84076',
    city: 'Pfeffenhausen',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.6647,
    longitude: 11.9659
  },
  {
    id: 3494,
    zipCode: '84079',
    city: 'Bruckberg',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.5224,
    longitude: 11.9945
  },
  {
    id: 3495,
    zipCode: '84082',
    city: 'Laberweinting',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.8,
    longitude: 12.3167
  },
  {
    id: 3496,
    zipCode: '84085',
    city: 'Langquaid',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.8232,
    longitude: 12.0513
  },
  {
    id: 3497,
    zipCode: '84088',
    city: 'Neufahrn in Niederbayern',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.7352,
    longitude: 12.1929
  },
  {
    id: 3498,
    zipCode: '84089',
    city: 'Aiglsbach',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.6921,
    longitude: 11.7083
  },
  {
    id: 3499,
    zipCode: '84091',
    city: 'Attenhofen',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.6507,
    longitude: 11.8485
  },
  {
    id: 3500,
    zipCode: '84092',
    city: 'Bayerbach',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.7045,
    longitude: 12.2975
  },
  {
    id: 3501,
    zipCode: '84094',
    city: 'Elsendorf',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.7076,
    longitude: 11.8098
  },
  {
    id: 3502,
    zipCode: '84095',
    city: 'Furth',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.591,
    longitude: 12.0206
  },
  {
    id: 3503,
    zipCode: '84097',
    city: 'Herrngiersdorf',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.7886,
    longitude: 12.072
  },
  {
    id: 3504,
    zipCode: '84098',
    city: 'Hohenthann',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.6576,
    longitude: 12.0307
  },
  {
    id: 3505,
    zipCode: '84100',
    city: 'Niederaichbach',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.6,
    longitude: 12.3167
  },
  {
    id: 3506,
    zipCode: '84101',
    city: 'Obers\u00fc\u00dfbach',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.6167,
    longitude: 11.95
  },
  {
    id: 3507,
    zipCode: '84103',
    city: 'Postau',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.65,
    longitude: 12.3333
  },
  {
    id: 3508,
    zipCode: '84106',
    city: 'Volkenschwand',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.6,
    longitude: 11.8833
  },
  {
    id: 3509,
    zipCode: '84107',
    city: 'Weihmichl',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.6,
    longitude: 12.05
  },
  {
    id: 3510,
    zipCode: '84109',
    city: 'W\u00f6rth an der Isar',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.623,
    longitude: 12.3394
  },
  {
    id: 3511,
    zipCode: '84130',
    city: 'Dingolfing',
    state: 'Bayern',
    community: 'Dingolfing-Landau',
    latitude: 48.6424,
    longitude: 12.4928
  },
  {
    id: 3512,
    zipCode: '84137',
    city: 'Vilsbiburg',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.453,
    longitude: 12.356
  },
  {
    id: 3513,
    zipCode: '84140',
    city: 'Gangkofen',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.437,
    longitude: 12.5642
  },
  {
    id: 3514,
    zipCode: '84144',
    city: 'Geisenhausen',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.4761,
    longitude: 12.2582
  },
  {
    id: 3515,
    zipCode: '84149',
    city: 'Velden',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.3663,
    longitude: 12.256
  },
  {
    id: 3516,
    zipCode: '84152',
    city: 'Mengkofen',
    state: 'Bayern',
    community: 'Dingolfing-Landau',
    latitude: 48.7189,
    longitude: 12.4405
  },
  {
    id: 3517,
    zipCode: '84155',
    city: 'Bodenkirchen',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.3833,
    longitude: 12.3833
  },
  {
    id: 3518,
    zipCode: '84160',
    city: 'Frontenhausen',
    state: 'Bayern',
    community: 'Dingolfing-Landau',
    latitude: 48.5463,
    longitude: 12.5312
  },
  {
    id: 3519,
    zipCode: '84163',
    city: 'Marklkofen',
    state: 'Bayern',
    community: 'Dingolfing-Landau',
    latitude: 48.55,
    longitude: 12.5667
  },
  {
    id: 3520,
    zipCode: '84164',
    city: 'Moosthenning',
    state: 'Bayern',
    community: 'Dingolfing-Landau',
    latitude: 48.6766,
    longitude: 12.4974
  },
  {
    id: 3521,
    zipCode: '84166',
    city: 'Adlkofen',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.55,
    longitude: 12.2667
  },
  {
    id: 3522,
    zipCode: '84168',
    city: 'Aham',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.5265,
    longitude: 12.4606
  },
  {
    id: 3523,
    zipCode: '84169',
    city: 'Altfraunhofen',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.45,
    longitude: 12.1667
  },
  {
    id: 3524,
    zipCode: '84171',
    city: 'Baierbach',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.4167,
    longitude: 12.2
  },
  {
    id: 3525,
    zipCode: '84172',
    city: 'Buch am Erlbach',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.4478,
    longitude: 12.0357
  },
  {
    id: 3526,
    zipCode: '84174',
    city: 'Eching',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.5,
    longitude: 12.0667
  },
  {
    id: 3527,
    zipCode: '84175',
    city: 'Schalkham',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.4833,
    longitude: 12.4167
  },
  {
    id: 3528,
    zipCode: '84175',
    city: 'Gerzen',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.4885,
    longitude: 12.3758
  },
  {
    id: 3529,
    zipCode: '84177',
    city: 'Gottfrieding',
    state: 'Bayern',
    community: 'Dingolfing-Landau',
    latitude: 48.6374,
    longitude: 12.5356
  },
  {
    id: 3530,
    zipCode: '84178',
    city: 'Kr\u00f6ning',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.5333,
    longitude: 12.3667
  },
  {
    id: 3531,
    zipCode: '84180',
    city: 'Loiching',
    state: 'Bayern',
    community: 'Dingolfing-Landau',
    latitude: 48.6167,
    longitude: 12.4333
  },
  {
    id: 3532,
    zipCode: '84181',
    city: 'Neufraunhofen',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.4,
    longitude: 12.2167
  },
  {
    id: 3533,
    zipCode: '84183',
    city: 'Niederviehbach',
    state: 'Bayern',
    community: 'Dingolfing-Landau',
    latitude: 48.6167,
    longitude: 12.3833
  },
  {
    id: 3534,
    zipCode: '84184',
    city: 'Tiefenbach',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.5,
    longitude: 12.1
  },
  {
    id: 3535,
    zipCode: '84186',
    city: 'Vilsheim',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.4488,
    longitude: 12.1069
  },
  {
    id: 3536,
    zipCode: '84187',
    city: 'Weng',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.6587,
    longitude: 12.3693
  },
  {
    id: 3537,
    zipCode: '84189',
    city: 'Wurmsham',
    state: 'Bayern',
    community: 'Landshut',
    latitude: 48.35,
    longitude: 12.3333
  },
  {
    id: 3538,
    zipCode: '84307',
    city: 'Eggenfelden',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.4051,
    longitude: 12.7575
  },
  {
    id: 3539,
    zipCode: '84323',
    city: 'Massing',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.3912,
    longitude: 12.6095
  },
  {
    id: 3540,
    zipCode: '84326',
    city: 'Rimbach',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.4667,
    longitude: 12.65
  },
  {
    id: 3541,
    zipCode: '84326',
    city: 'Falkenberg',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.4615,
    longitude: 12.7305
  },
  {
    id: 3542,
    zipCode: '84329',
    city: 'Wurmannsquick',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.3533,
    longitude: 12.786
  },
  {
    id: 3543,
    zipCode: '84332',
    city: 'Hebertsfelden',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.406,
    longitude: 12.8226
  },
  {
    id: 3544,
    zipCode: '84333',
    city: 'Malgersdorf',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.5333,
    longitude: 12.75
  },
  {
    id: 3545,
    zipCode: '84335',
    city: 'Mitterskirchen',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.35,
    longitude: 12.7333
  },
  {
    id: 3546,
    zipCode: '84337',
    city: 'Sch\u00f6nau',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.4833,
    longitude: 12.85
  },
  {
    id: 3547,
    zipCode: '84339',
    city: 'Unterdietfurt',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.3833,
    longitude: 12.6667
  },
  {
    id: 3548,
    zipCode: '84347',
    city: 'Pfarrkirchen',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.432,
    longitude: 12.9381
  },
  {
    id: 3549,
    zipCode: '84359',
    city: 'Simbach am Inn',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.2655,
    longitude: 13.0231
  },
  {
    id: 3550,
    zipCode: '84364',
    city: 'Bad Birnbach',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.4449,
    longitude: 13.091
  },
  {
    id: 3551,
    zipCode: '84367',
    city: 'Reut',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.3167,
    longitude: 12.9333
  },
  {
    id: 3552,
    zipCode: '84367',
    city: 'Zeilarn',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.3148,
    longitude: 12.8963
  },
  {
    id: 3553,
    zipCode: '84367',
    city: 'Tann',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.3146,
    longitude: 12.893
  },
  {
    id: 3554,
    zipCode: '84371',
    city: 'Triftern',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.3947,
    longitude: 13.0063
  },
  {
    id: 3555,
    zipCode: '84375',
    city: 'Kirchdorf am Inn',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.2475,
    longitude: 12.9845
  },
  {
    id: 3556,
    zipCode: '84378',
    city: 'Dietersburg',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.4925,
    longitude: 12.925
  },
  {
    id: 3557,
    zipCode: '84381',
    city: 'Johanniskirchen',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.5333,
    longitude: 12.95
  },
  {
    id: 3558,
    zipCode: '84384',
    city: 'Wittibreut',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.3292,
    longitude: 12.987
  },
  {
    id: 3559,
    zipCode: '84385',
    city: 'Egglham',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.529,
    longitude: 13.054
  },
  {
    id: 3560,
    zipCode: '84387',
    city: 'Julbach',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.2543,
    longitude: 12.9579
  },
  {
    id: 3561,
    zipCode: '84389',
    city: 'Postm\u00fcnster',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.4167,
    longitude: 12.9
  },
  {
    id: 3562,
    zipCode: '84552',
    city: 'Geratskirchen',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.3386,
    longitude: 12.6623
  },
  {
    id: 3563,
    zipCode: '93077',
    city: 'Bad Abbach',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.9375,
    longitude: 12.0449
  },
  {
    id: 3564,
    zipCode: '93309',
    city: 'Kelheim',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.9173,
    longitude: 11.8862
  },
  {
    id: 3565,
    zipCode: '93326',
    city: 'Abensberg',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.8168,
    longitude: 11.8498
  },
  {
    id: 3566,
    zipCode: '93333',
    city: 'Neustadt an der Donau',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.8071,
    longitude: 11.7695
  },
  {
    id: 3567,
    zipCode: '93339',
    city: 'Riedenburg',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.9638,
    longitude: 11.6888
  },
  {
    id: 3568,
    zipCode: '93342',
    city: 'Saal an der Donau',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.9,
    longitude: 11.9333
  },
  {
    id: 3569,
    zipCode: '93343',
    city: 'Essing',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.9347,
    longitude: 11.7897
  },
  {
    id: 3570,
    zipCode: '93345',
    city: 'Hausen',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.8595,
    longitude: 12.0063
  },
  {
    id: 3571,
    zipCode: '93346',
    city: 'Ihrlerstein',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.9333,
    longitude: 11.8667
  },
  {
    id: 3572,
    zipCode: '93348',
    city: 'Kirchdorf',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.771,
    longitude: 11.9037
  },
  {
    id: 3573,
    zipCode: '93351',
    city: 'Painten',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.9973,
    longitude: 11.8195
  },
  {
    id: 3574,
    zipCode: '93352',
    city: 'Rohr in Niederbayern',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.7667,
    longitude: 11.9667
  },
  {
    id: 3575,
    zipCode: '93354',
    city: 'Siegenburg',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.7542,
    longitude: 11.8483
  },
  {
    id: 3576,
    zipCode: '93354',
    city: 'Biburg',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.7907,
    longitude: 11.8573
  },
  {
    id: 3577,
    zipCode: '93356',
    city: 'Teugn',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.893,
    longitude: 12.0117
  },
  {
    id: 3578,
    zipCode: '93358',
    city: 'Train',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.7333,
    longitude: 11.8333
  },
  {
    id: 3579,
    zipCode: '93359',
    city: 'Wildenberg',
    state: 'Bayern',
    community: 'Landkreis Kelheim',
    latitude: 48.7298,
    longitude: 11.8985
  },
  {
    id: 3580,
    zipCode: '93471',
    city: 'Arnbruck',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 49.1301,
    longitude: 12.9982
  },
  {
    id: 3581,
    zipCode: '94032',
    city: 'Passau',
    state: 'Bayern',
    community: 'Passau',
    latitude: 48.5732,
    longitude: 13.4506
  },
  {
    id: 3582,
    zipCode: '94034',
    city: 'Passau',
    state: 'Bayern',
    community: 'Passau',
    latitude: 48.589,
    longitude: 13.3971
  },
  {
    id: 3583,
    zipCode: '94036',
    city: 'Passau',
    state: 'Bayern',
    community: 'Passau',
    latitude: 48.5693,
    longitude: 13.4122
  },
  {
    id: 3584,
    zipCode: '94051',
    city: 'Hauzenberg',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.6496,
    longitude: 13.6265
  },
  {
    id: 3585,
    zipCode: '94060',
    city: 'Pocking',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.4015,
    longitude: 13.3132
  },
  {
    id: 3586,
    zipCode: '94065',
    city: 'Waldkirchen',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.7327,
    longitude: 13.6008
  },
  {
    id: 3587,
    zipCode: '94072',
    city: 'Bad F\u00fcssing',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.351,
    longitude: 13.312
  },
  {
    id: 3588,
    zipCode: '94078',
    city: 'Freyung',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.8095,
    longitude: 13.5477
  },
  {
    id: 3589,
    zipCode: '94081',
    city: 'F\u00fcrstenzell',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.5216,
    longitude: 13.3175
  },
  {
    id: 3590,
    zipCode: '94086',
    city: 'Bad Griesbach im Rottal',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.4557,
    longitude: 13.1939
  },
  {
    id: 3591,
    zipCode: '94089',
    city: 'Neureichenau',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.7486,
    longitude: 13.747
  },
  {
    id: 3592,
    zipCode: '94094',
    city: 'Malching',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.3608,
    longitude: 13.1924
  },
  {
    id: 3593,
    zipCode: '94094',
    city: 'Rotthalm\u00fcnster',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.3582,
    longitude: 13.2016
  },
  {
    id: 3594,
    zipCode: '94099',
    city: 'Ruhstorf an der Rott',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.4333,
    longitude: 13.3333
  },
  {
    id: 3595,
    zipCode: '94104',
    city: 'Tittling',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.7262,
    longitude: 13.3822
  },
  {
    id: 3596,
    zipCode: '94104',
    city: 'Witzmannsberg',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.7167,
    longitude: 13.4167
  },
  {
    id: 3597,
    zipCode: '94107',
    city: 'Untergriesbach',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.5743,
    longitude: 13.6672
  },
  {
    id: 3598,
    zipCode: '94110',
    city: 'Wegscheid',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.6014,
    longitude: 13.7873
  },
  {
    id: 3599,
    zipCode: '94113',
    city: 'Tiefenbach',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.6242,
    longitude: 13.4003
  },
  {
    id: 3600,
    zipCode: '94116',
    city: 'Hutthurm',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.6728,
    longitude: 13.4715
  },
  {
    id: 3601,
    zipCode: '94118',
    city: 'Jandelsbrunn',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.7333,
    longitude: 13.7
  },
  {
    id: 3602,
    zipCode: '94121',
    city: 'Salzweg',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.6167,
    longitude: 13.4833
  },
  {
    id: 3603,
    zipCode: '94124',
    city: 'B\u00fcchlberg',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.6711,
    longitude: 13.521
  },
  {
    id: 3604,
    zipCode: '94127',
    city: 'Neuburg am Inn',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.5,
    longitude: 13.45
  },
  {
    id: 3605,
    zipCode: '94130',
    city: 'Obernzell',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.5549,
    longitude: 13.6373
  },
  {
    id: 3606,
    zipCode: '94133',
    city: 'R\u00f6hrnbach',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.7386,
    longitude: 13.5227
  },
  {
    id: 3607,
    zipCode: '94136',
    city: 'Thyrnau',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.6167,
    longitude: 13.5333
  },
  {
    id: 3608,
    zipCode: '94137',
    city: 'Bayerbach',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.4102,
    longitude: 13.1441
  },
  {
    id: 3609,
    zipCode: '94139',
    city: 'Breitenberg',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.7044,
    longitude: 13.7933
  },
  {
    id: 3610,
    zipCode: '94140',
    city: 'Ering',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.2992,
    longitude: 13.1503
  },
  {
    id: 3611,
    zipCode: '94142',
    city: 'F\u00fcrsteneck',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.7167,
    longitude: 13.4667
  },
  {
    id: 3612,
    zipCode: '94143',
    city: 'Grainet',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.8,
    longitude: 13.65
  },
  {
    id: 3613,
    zipCode: '94145',
    city: 'Haidm\u00fchle',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.8257,
    longitude: 13.7765
  },
  {
    id: 3614,
    zipCode: '94146',
    city: 'Hinterschmiding',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.8234,
    longitude: 13.6037
  },
  {
    id: 3615,
    zipCode: '94148',
    city: 'Kirchham',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.3464,
    longitude: 13.2672
  },
  {
    id: 3616,
    zipCode: '94149',
    city: 'K\u00f6\u00dflarn',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.3667,
    longitude: 13.1167
  },
  {
    id: 3617,
    zipCode: '94151',
    city: 'Mauth',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.8897,
    longitude: 13.5846
  },
  {
    id: 3618,
    zipCode: '94152',
    city: 'Neuhaus am Inn',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.4609,
    longitude: 13.4208
  },
  {
    id: 3619,
    zipCode: '94154',
    city: 'Neukirchen vorm Wald',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.6833,
    longitude: 13.3833
  },
  {
    id: 3620,
    zipCode: '94155',
    city: 'Otterskirchen',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.6167,
    longitude: 13.2167
  },
  {
    id: 3621,
    zipCode: '94157',
    city: 'Perlesreut',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.7818,
    longitude: 13.4384
  },
  {
    id: 3622,
    zipCode: '94158',
    city: 'Philippsreut',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.8667,
    longitude: 13.6833
  },
  {
    id: 3623,
    zipCode: '94160',
    city: 'Ringelai',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.8134,
    longitude: 13.4713
  },
  {
    id: 3624,
    zipCode: '94161',
    city: 'Ruderting',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.65,
    longitude: 13.4167
  },
  {
    id: 3625,
    zipCode: '94163',
    city: 'Saldenburg',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.7731,
    longitude: 13.3559
  },
  {
    id: 3626,
    zipCode: '94164',
    city: 'Sonnen',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.6833,
    longitude: 13.7167
  },
  {
    id: 3627,
    zipCode: '94166',
    city: 'Stubenberg',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.3167,
    longitude: 13.0833
  },
  {
    id: 3628,
    zipCode: '94167',
    city: 'Tettenweis',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.4428,
    longitude: 13.2696
  },
  {
    id: 3629,
    zipCode: '94169',
    city: 'Thurmansbang',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.7663,
    longitude: 13.3155
  },
  {
    id: 3630,
    zipCode: '94209',
    city: 'Regen',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 48.9719,
    longitude: 13.1282
  },
  {
    id: 3631,
    zipCode: '94227',
    city: 'Lindberg',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 49.0368,
    longitude: 13.2542
  },
  {
    id: 3632,
    zipCode: '94227',
    city: 'Zwiesel',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 49.0169,
    longitude: 13.2377
  },
  {
    id: 3633,
    zipCode: '94234',
    city: 'Viechtach',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 49.08,
    longitude: 12.8857
  },
  {
    id: 3634,
    zipCode: '94239',
    city: 'Ruhmannsfelden',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 48.9833,
    longitude: 12.9835
  },
  {
    id: 3635,
    zipCode: '94239',
    city: 'Gotteszell',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 48.9667,
    longitude: 12.9667
  },
  {
    id: 3636,
    zipCode: '94239',
    city: 'Zachenberg',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 48.9667,
    longitude: 13.0
  },
  {
    id: 3637,
    zipCode: '94244',
    city: 'Geiersthal',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 49.0457,
    longitude: 12.9817
  },
  {
    id: 3638,
    zipCode: '94244',
    city: 'Teisnach',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 49.0411,
    longitude: 12.9878
  },
  {
    id: 3639,
    zipCode: '94249',
    city: 'Bodenmais',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 49.0667,
    longitude: 13.1
  },
  {
    id: 3640,
    zipCode: '94250',
    city: 'Achslach',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 48.9717,
    longitude: 12.9351
  },
  {
    id: 3641,
    zipCode: '94252',
    city: 'Bayerisch Eisenstein',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 49.1167,
    longitude: 13.2
  },
  {
    id: 3642,
    zipCode: '94253',
    city: 'Bischofsmais',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 48.918,
    longitude: 13.0818
  },
  {
    id: 3643,
    zipCode: '94255',
    city: 'B\u00f6brach',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 49.0562,
    longitude: 13.0347
  },
  {
    id: 3644,
    zipCode: '94256',
    city: 'Drachselsried',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 49.1076,
    longitude: 13.0118
  },
  {
    id: 3645,
    zipCode: '94258',
    city: 'Frauenau',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 48.9889,
    longitude: 13.3007
  },
  {
    id: 3646,
    zipCode: '94259',
    city: 'Kirchberg im Wald',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 48.9,
    longitude: 13.1833
  },
  {
    id: 3647,
    zipCode: '94261',
    city: 'Kirchdorf im Wald',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 48.9105,
    longitude: 13.2661
  },
  {
    id: 3648,
    zipCode: '94262',
    city: 'Kollnburg',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 49.0466,
    longitude: 12.8612
  },
  {
    id: 3649,
    zipCode: '94264',
    city: 'Langdorf',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 49.015,
    longitude: 13.1465
  },
  {
    id: 3650,
    zipCode: '94265',
    city: 'Patersdorf',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 49.0167,
    longitude: 12.9833
  },
  {
    id: 3651,
    zipCode: '94267',
    city: 'Prackenbach',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 49.0954,
    longitude: 12.8261
  },
  {
    id: 3652,
    zipCode: '94269',
    city: 'Rinchnach',
    state: 'Bayern',
    community: 'Landkreis Regen',
    latitude: 48.9496,
    longitude: 13.201
  },
  {
    id: 3653,
    zipCode: '94315',
    city: 'Straubing',
    state: 'Bayern',
    community: 'Straubing',
    latitude: 48.8813,
    longitude: 12.5739
  },
  {
    id: 3654,
    zipCode: '94327',
    city: 'Bogen',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.9112,
    longitude: 12.6896
  },
  {
    id: 3655,
    zipCode: '94330',
    city: 'Salching',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.8105,
    longitude: 12.5704
  },
  {
    id: 3656,
    zipCode: '94330',
    city: 'Aiterhofen',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.8448,
    longitude: 12.6245
  },
  {
    id: 3657,
    zipCode: '94333',
    city: 'Geiselh\u00f6ring',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.825,
    longitude: 12.3965
  },
  {
    id: 3658,
    zipCode: '94336',
    city: 'Windberg',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.9429,
    longitude: 12.7462
  },
  {
    id: 3659,
    zipCode: '94336',
    city: 'Hunderdorf',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.95,
    longitude: 12.7333
  },
  {
    id: 3660,
    zipCode: '94339',
    city: 'Leiblfing',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.7757,
    longitude: 12.5179
  },
  {
    id: 3661,
    zipCode: '94342',
    city: 'Stra\u00dfkirchen',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.8307,
    longitude: 12.7211
  },
  {
    id: 3662,
    zipCode: '94342',
    city: 'Irlbach',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.8413,
    longitude: 12.7514
  },
  {
    id: 3663,
    zipCode: '94344',
    city: 'Wiesenfelden',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 49.0407,
    longitude: 12.5401
  },
  {
    id: 3664,
    zipCode: '94345',
    city: 'Aholfing',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.9428,
    longitude: 12.4686
  },
  {
    id: 3665,
    zipCode: '94347',
    city: 'Ascha',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 49.0,
    longitude: 12.6333
  },
  {
    id: 3666,
    zipCode: '94348',
    city: 'Atting',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.8941,
    longitude: 12.4878
  },
  {
    id: 3667,
    zipCode: '94350',
    city: 'Falkenfels',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 49.0042,
    longitude: 12.5948
  },
  {
    id: 3668,
    zipCode: '94351',
    city: 'Feldkirchen',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.8383,
    longitude: 12.5278
  },
  {
    id: 3669,
    zipCode: '94353',
    city: 'Haibach',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 49.0241,
    longitude: 12.7155
  },
  {
    id: 3670,
    zipCode: '94354',
    city: 'Haselbach',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 49.0035,
    longitude: 12.6918
  },
  {
    id: 3671,
    zipCode: '94356',
    city: 'Kirchroth',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.95,
    longitude: 12.55
  },
  {
    id: 3672,
    zipCode: '94357',
    city: 'Konzell',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 49.0724,
    longitude: 12.7111
  },
  {
    id: 3673,
    zipCode: '94359',
    city: 'Loitzendorf',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 49.0846,
    longitude: 12.6559
  },
  {
    id: 3674,
    zipCode: '94360',
    city: 'Mitterfels',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.9763,
    longitude: 12.6785
  },
  {
    id: 3675,
    zipCode: '94362',
    city: 'Neukirchen',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.9751,
    longitude: 12.7555
  },
  {
    id: 3676,
    zipCode: '94363',
    city: 'Oberschneiding',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.7957,
    longitude: 12.642
  },
  {
    id: 3677,
    zipCode: '94365',
    city: 'Parkstetten',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.9167,
    longitude: 12.6
  },
  {
    id: 3678,
    zipCode: '94366',
    city: 'Perasdorf',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.95,
    longitude: 12.8
  },
  {
    id: 3679,
    zipCode: '94368',
    city: 'Perkam',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.8553,
    longitude: 12.4398
  },
  {
    id: 3680,
    zipCode: '94369',
    city: 'Rain',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.905,
    longitude: 12.4687
  },
  {
    id: 3681,
    zipCode: '94371',
    city: 'Rattenberg',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 49.0861,
    longitude: 12.7491
  },
  {
    id: 3682,
    zipCode: '94372',
    city: 'Rattiszell',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 49.0257,
    longitude: 12.6592
  },
  {
    id: 3683,
    zipCode: '94374',
    city: 'Schwarzach',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.9157,
    longitude: 12.8114
  },
  {
    id: 3684,
    zipCode: '94375',
    city: 'Stallwang',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 49.051,
    longitude: 12.655
  },
  {
    id: 3685,
    zipCode: '94377',
    city: 'Steinach',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.9542,
    longitude: 12.6071
  },
  {
    id: 3686,
    zipCode: '94379',
    city: 'Sankt Englmar',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 49.003,
    longitude: 12.8266
  },
  {
    id: 3687,
    zipCode: '94405',
    city: 'Landau an der Isar',
    state: 'Bayern',
    community: 'Dingolfing-Landau',
    latitude: 48.6725,
    longitude: 12.6932
  },
  {
    id: 3688,
    zipCode: '94419',
    city: 'Reisbach',
    state: 'Bayern',
    community: 'Dingolfing-Landau',
    latitude: 48.5701,
    longitude: 12.628
  },
  {
    id: 3689,
    zipCode: '94424',
    city: 'Arnstorf',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.5584,
    longitude: 12.8167
  },
  {
    id: 3690,
    zipCode: '94428',
    city: 'Eichendorf',
    state: 'Bayern',
    community: 'Dingolfing-Landau',
    latitude: 48.6327,
    longitude: 12.8559
  },
  {
    id: 3691,
    zipCode: '94431',
    city: 'Pilsting',
    state: 'Bayern',
    community: 'Dingolfing-Landau',
    latitude: 48.7012,
    longitude: 12.651
  },
  {
    id: 3692,
    zipCode: '94436',
    city: 'Simbach',
    state: 'Bayern',
    community: 'Dingolfing-Landau',
    latitude: 48.5661,
    longitude: 12.7389
  },
  {
    id: 3693,
    zipCode: '94437',
    city: 'Mamming',
    state: 'Bayern',
    community: 'Dingolfing-Landau',
    latitude: 48.6517,
    longitude: 12.6078
  },
  {
    id: 3694,
    zipCode: '94439',
    city: 'Ro\u00dfbach',
    state: 'Bayern',
    community: 'Landkreis Rottal-Inn',
    latitude: 48.6,
    longitude: 12.9333
  },
  {
    id: 3695,
    zipCode: '94447',
    city: 'Plattling',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.7787,
    longitude: 12.8751
  },
  {
    id: 3696,
    zipCode: '94469',
    city: 'Deggendorf',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.8409,
    longitude: 12.9607
  },
  {
    id: 3697,
    zipCode: '94474',
    city: 'Vilshofen',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.6269,
    longitude: 13.1922
  },
  {
    id: 3698,
    zipCode: '94481',
    city: 'Grafenau',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.8577,
    longitude: 13.3974
  },
  {
    id: 3699,
    zipCode: '94486',
    city: 'Osterhofen',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.7,
    longitude: 13.0222
  },
  {
    id: 3700,
    zipCode: '94491',
    city: 'Hengersberg',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.7725,
    longitude: 13.0549
  },
  {
    id: 3701,
    zipCode: '94496',
    city: 'Ortenburg',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.546,
    longitude: 13.2225
  },
  {
    id: 3702,
    zipCode: '94501',
    city: 'Aidenbach',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.5703,
    longitude: 13.09
  },
  {
    id: 3703,
    zipCode: '94501',
    city: 'Beutelsbach',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.55,
    longitude: 13.1167
  },
  {
    id: 3704,
    zipCode: '94501',
    city: 'Aldersbach',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.5897,
    longitude: 13.0897
  },
  {
    id: 3705,
    zipCode: '94505',
    city: 'Bernried',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.9167,
    longitude: 12.8833
  },
  {
    id: 3706,
    zipCode: '94508',
    city: 'Sch\u00f6llnach',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.7541,
    longitude: 13.1778
  },
  {
    id: 3707,
    zipCode: '94513',
    city: 'Sch\u00f6nberg',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.8397,
    longitude: 13.3371
  },
  {
    id: 3708,
    zipCode: '94518',
    city: 'Spiegelau',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.9152,
    longitude: 13.3623
  },
  {
    id: 3709,
    zipCode: '94522',
    city: 'Wallersdorf',
    state: 'Bayern',
    community: 'Dingolfing-Landau',
    latitude: 48.7377,
    longitude: 12.7474
  },
  {
    id: 3710,
    zipCode: '94526',
    city: 'Metten',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.8551,
    longitude: 12.9155
  },
  {
    id: 3711,
    zipCode: '94527',
    city: 'Aholming',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.7354,
    longitude: 12.91
  },
  {
    id: 3712,
    zipCode: '94529',
    city: 'Aicha vorm Wald',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.676,
    longitude: 13.2954
  },
  {
    id: 3713,
    zipCode: '94530',
    city: 'Auerbach',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.8035,
    longitude: 13.0995
  },
  {
    id: 3714,
    zipCode: '94532',
    city: 'Au\u00dfernzell',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.7241,
    longitude: 13.2029
  },
  {
    id: 3715,
    zipCode: '94533',
    city: 'Buchhofen',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.697,
    longitude: 12.9246
  },
  {
    id: 3716,
    zipCode: '94535',
    city: 'Eging am See',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.7139,
    longitude: 13.2713
  },
  {
    id: 3717,
    zipCode: '94536',
    city: 'Eppenschlag',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.8894,
    longitude: 13.2999
  },
  {
    id: 3718,
    zipCode: '94538',
    city: 'F\u00fcrstenstein',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.7167,
    longitude: 13.3333
  },
  {
    id: 3719,
    zipCode: '94539',
    city: 'Grafling',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.8949,
    longitude: 12.9751
  },
  {
    id: 3720,
    zipCode: '94541',
    city: 'Grattersdorf',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.8036,
    longitude: 13.1537
  },
  {
    id: 3721,
    zipCode: '94542',
    city: 'Haarbach',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.5,
    longitude: 13.15
  },
  {
    id: 3722,
    zipCode: '94544',
    city: 'Hofkirchen',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.6781,
    longitude: 13.1192
  },
  {
    id: 3723,
    zipCode: '94545',
    city: 'Hohenau',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.8498,
    longitude: 13.4882
  },
  {
    id: 3724,
    zipCode: '94547',
    city: 'Iggensbach',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.7301,
    longitude: 13.1423
  },
  {
    id: 3725,
    zipCode: '94548',
    city: 'Innernzell',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.8515,
    longitude: 13.2754
  },
  {
    id: 3726,
    zipCode: '94550',
    city: 'K\u00fcnzing',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.6667,
    longitude: 13.0833
  },
  {
    id: 3727,
    zipCode: '94551',
    city: 'Hunding',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.8423,
    longitude: 13.1768
  },
  {
    id: 3728,
    zipCode: '94551',
    city: 'Lalling',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.8452,
    longitude: 13.1401
  },
  {
    id: 3729,
    zipCode: '94553',
    city: 'Mariaposching',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.8333,
    longitude: 12.8
  },
  {
    id: 3730,
    zipCode: '94554',
    city: 'Moos',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.7515,
    longitude: 12.9611
  },
  {
    id: 3731,
    zipCode: '94556',
    city: 'Neusch\u00f6nau',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.8842,
    longitude: 13.4758
  },
  {
    id: 3732,
    zipCode: '94557',
    city: 'Niederalteich',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.7656,
    longitude: 13.0241
  },
  {
    id: 3733,
    zipCode: '94559',
    city: 'Niederwinkling',
    state: 'Bayern',
    community: 'Landkreis Straubing-Bogen',
    latitude: 48.8833,
    longitude: 12.8
  },
  {
    id: 3734,
    zipCode: '94560',
    city: 'Offenberg',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.8619,
    longitude: 12.8629
  },
  {
    id: 3735,
    zipCode: '94562',
    city: 'Oberp\u00f6ring',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.7018,
    longitude: 12.8248
  },
  {
    id: 3736,
    zipCode: '94563',
    city: 'Otzing',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.7613,
    longitude: 12.8088
  },
  {
    id: 3737,
    zipCode: '94565',
    city: 'Erlhof bei Rathsmannsdorf',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.6771,
    longitude: 13.2258
  },
  {
    id: 3738,
    zipCode: '94566',
    city: 'Sankt Oswald-Riedlh\u00fctte',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.9,
    longitude: 13.4167
  },
  {
    id: 3739,
    zipCode: '94568',
    city: 'Sankt Oswald-Riedlh\u00fctte',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.9,
    longitude: 13.4167
  },
  {
    id: 3740,
    zipCode: '94569',
    city: 'Stephansposching',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.8167,
    longitude: 12.8
  },
  {
    id: 3741,
    zipCode: '94571',
    city: 'Schaufling',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.85,
    longitude: 13.0667
  },
  {
    id: 3742,
    zipCode: '94572',
    city: 'Sch\u00f6fweg',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.8388,
    longitude: 13.2286
  },
  {
    id: 3743,
    zipCode: '94574',
    city: 'Wallerfing',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.6842,
    longitude: 12.8804
  },
  {
    id: 3744,
    zipCode: '94575',
    city: 'Windorf',
    state: 'Bayern',
    community: 'Landkreis Passau',
    latitude: 48.6244,
    longitude: 13.2219
  },
  {
    id: 3745,
    zipCode: '94577',
    city: 'Winzer',
    state: 'Bayern',
    community: 'Landkreis Deggendorf',
    latitude: 48.7228,
    longitude: 13.0775
  },
  {
    id: 3746,
    zipCode: '94579',
    city: 'Zenting',
    state: 'Bayern',
    community: 'Freyung-Grafenau',
    latitude: 48.7913,
    longitude: 13.2597
  },
  {
    id: 3747,
    zipCode: '84069',
    city: 'Schierling',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 48.8342,
    longitude: 12.1395
  },
  {
    id: 3748,
    zipCode: '90602',
    city: 'Pyrbaum',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.2962,
    longitude: 11.2866
  },
  {
    id: 3749,
    zipCode: '91249',
    city: 'Weigendorf',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.4977,
    longitude: 11.5687
  },
  {
    id: 3750,
    zipCode: '91275',
    city: 'Auerbach in der Oberpfalz',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.6938,
    longitude: 11.621
  },
  {
    id: 3751,
    zipCode: '91281',
    city: 'Kirchenthumbach',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.7487,
    longitude: 11.7254
  },
  {
    id: 3752,
    zipCode: '92224',
    city: 'Amberg',
    state: 'Bayern',
    community: 'Amberg',
    latitude: 49.4429,
    longitude: 11.8627
  },
  {
    id: 3753,
    zipCode: '92237',
    city: 'Sulzbach-Rosenberg',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.5013,
    longitude: 11.746
  },
  {
    id: 3754,
    zipCode: '92242',
    city: 'Hirschau',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.544,
    longitude: 11.9462
  },
  {
    id: 3755,
    zipCode: '92245',
    city: 'K\u00fcmmersbruck',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.4192,
    longitude: 11.8883
  },
  {
    id: 3756,
    zipCode: '92249',
    city: 'Vilseck',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.6148,
    longitude: 11.8026
  },
  {
    id: 3757,
    zipCode: '92253',
    city: 'Schnaittenbach',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.5469,
    longitude: 12.0018
  },
  {
    id: 3758,
    zipCode: '92256',
    city: 'Hahnbach',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.5339,
    longitude: 11.803
  },
  {
    id: 3759,
    zipCode: '92259',
    city: 'Neukirchen bei Sulzbach-Rosenberg',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.5297,
    longitude: 11.6259
  },
  {
    id: 3760,
    zipCode: '92260',
    city: 'Ammerthal',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.4412,
    longitude: 11.7618
  },
  {
    id: 3761,
    zipCode: '92262',
    city: 'Birgland',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.4167,
    longitude: 11.6333
  },
  {
    id: 3762,
    zipCode: '92263',
    city: 'Ebermannsdorf',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.3938,
    longitude: 11.9358
  },
  {
    id: 3763,
    zipCode: '92265',
    city: 'Edelsfeld',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.5764,
    longitude: 11.6959
  },
  {
    id: 3764,
    zipCode: '92266',
    city: 'Ensdorf',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.3406,
    longitude: 11.9359
  },
  {
    id: 3765,
    zipCode: '92268',
    city: 'Etzelwang',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.5276,
    longitude: 11.586
  },
  {
    id: 3766,
    zipCode: '92269',
    city: 'Fensterbach',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4,
    longitude: 12.05
  },
  {
    id: 3767,
    zipCode: '92271',
    city: 'Freihung',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.6213,
    longitude: 11.9082
  },
  {
    id: 3768,
    zipCode: '92272',
    city: 'Freudenberg',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.4833,
    longitude: 11.9833
  },
  {
    id: 3769,
    zipCode: '92274',
    city: 'Gebenbach',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.5376,
    longitude: 11.872
  },
  {
    id: 3770,
    zipCode: '92275',
    city: 'Hirschbach',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.55,
    longitude: 11.5333
  },
  {
    id: 3771,
    zipCode: '92277',
    city: 'Hohenburg',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.2951,
    longitude: 11.7991
  },
  {
    id: 3772,
    zipCode: '92278',
    city: 'Illschwang',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.45,
    longitude: 11.6833
  },
  {
    id: 3773,
    zipCode: '92280',
    city: 'Kastl',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.3696,
    longitude: 11.6826
  },
  {
    id: 3774,
    zipCode: '92281',
    city: 'K\u00f6nigstein',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.6085,
    longitude: 11.6314
  },
  {
    id: 3775,
    zipCode: '92283',
    city: 'Lauterhofen',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.3684,
    longitude: 11.6029
  },
  {
    id: 3776,
    zipCode: '92284',
    city: 'Poppenricht',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.4756,
    longitude: 11.7978
  },
  {
    id: 3777,
    zipCode: '92286',
    city: 'Rieden',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.3236,
    longitude: 11.9421
  },
  {
    id: 3778,
    zipCode: '92287',
    city: 'Schmidm\u00fchlen',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.269,
    longitude: 11.9243
  },
  {
    id: 3779,
    zipCode: '92289',
    city: 'Ursensollen',
    state: 'Bayern',
    community: 'Amberg-Sulzbach',
    latitude: 49.402,
    longitude: 11.755
  },
  {
    id: 3780,
    zipCode: '92318',
    city: 'Neumarkt in der Oberpfalz',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.2803,
    longitude: 11.4628
  },
  {
    id: 3781,
    zipCode: '92331',
    city: 'Parsberg',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.1607,
    longitude: 11.7183
  },
  {
    id: 3782,
    zipCode: '92331',
    city: 'Lupburg',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.1551,
    longitude: 11.7564
  },
  {
    id: 3783,
    zipCode: '92334',
    city: 'Berching',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.1069,
    longitude: 11.4414
  },
  {
    id: 3784,
    zipCode: '92342',
    city: 'Freystadt',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.2001,
    longitude: 11.3303
  },
  {
    id: 3785,
    zipCode: '92345',
    city: 'Dietfurt an der Altm\u00fchl',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.0375,
    longitude: 11.5839
  },
  {
    id: 3786,
    zipCode: '92348',
    city: 'Berg bei Neumarkt in der Oberpfalz',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.3317,
    longitude: 11.4403
  },
  {
    id: 3787,
    zipCode: '92353',
    city: 'Postbauer-Heng',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.3053,
    longitude: 11.3572
  },
  {
    id: 3788,
    zipCode: '92355',
    city: 'Velburg',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.2515,
    longitude: 11.6345
  },
  {
    id: 3789,
    zipCode: '92358',
    city: 'Seubersdorf in der Oberpfalz',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.1571,
    longitude: 11.6329
  },
  {
    id: 3790,
    zipCode: '92360',
    city: 'M\u00fchlhausen',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.1695,
    longitude: 11.4466
  },
  {
    id: 3791,
    zipCode: '92361',
    city: 'Berngau',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.25,
    longitude: 11.4
  },
  {
    id: 3792,
    zipCode: '92363',
    city: 'Breitenbrunn',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.0837,
    longitude: 11.6198
  },
  {
    id: 3793,
    zipCode: '92364',
    city: 'Deining',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.2256,
    longitude: 11.5397
  },
  {
    id: 3794,
    zipCode: '92366',
    city: 'Hohenfels',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.204,
    longitude: 11.8484
  },
  {
    id: 3795,
    zipCode: '92367',
    city: 'Pilsach',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.3214,
    longitude: 11.5031
  },
  {
    id: 3796,
    zipCode: '92369',
    city: 'Sengenthal',
    state: 'Bayern',
    community: 'Landkreis Neumarkt in der Oberpfalz',
    latitude: 49.2333,
    longitude: 11.4667
  },
  {
    id: 3797,
    zipCode: '92421',
    city: 'Schwandorf',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.3236,
    longitude: 12.0993
  },
  {
    id: 3798,
    zipCode: '92431',
    city: 'Neunburg vorm Wald',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.3478,
    longitude: 12.3862
  },
  {
    id: 3799,
    zipCode: '92436',
    city: 'Bruck in der Oberpfalz',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.2493,
    longitude: 12.3071
  },
  {
    id: 3800,
    zipCode: '92439',
    city: 'Bodenw\u00f6hr',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.2708,
    longitude: 12.3015
  },
  {
    id: 3801,
    zipCode: '92442',
    city: 'Wackersdorf',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.3167,
    longitude: 12.1833
  },
  {
    id: 3802,
    zipCode: '92444',
    city: 'R\u00f6tz',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.3432,
    longitude: 12.5296
  },
  {
    id: 3803,
    zipCode: '92445',
    city: 'Neukirchen-Balbini',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.291,
    longitude: 12.4364
  },
  {
    id: 3804,
    zipCode: '92447',
    city: 'Schwarzhofen',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.3775,
    longitude: 12.3449
  },
  {
    id: 3805,
    zipCode: '92449',
    city: 'Steinberg',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.2833,
    longitude: 12.1833
  },
  {
    id: 3806,
    zipCode: '92507',
    city: 'Nabburg',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4535,
    longitude: 12.18
  },
  {
    id: 3807,
    zipCode: '92521',
    city: 'Schwarzenfeld',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.3877,
    longitude: 12.1348
  },
  {
    id: 3808,
    zipCode: '92526',
    city: 'Oberviechtach',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4581,
    longitude: 12.4167
  },
  {
    id: 3809,
    zipCode: '92533',
    city: 'Wernberg-K\u00f6blitz',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.5393,
    longitude: 12.1613
  },
  {
    id: 3810,
    zipCode: '92536',
    city: 'Pfreimd Pamsendorf',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4945,
    longitude: 12.2723
  },
  {
    id: 3811,
    zipCode: '92536',
    city: 'Pfreimd Pfreimd',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4932,
    longitude: 12.1833
  },
  {
    id: 3812,
    zipCode: '92536',
    city: 'Pfreimd',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4911,
    longitude: 12.1807
  },
  {
    id: 3813,
    zipCode: '92536',
    city: 'Pfreimd Hohentreswitz',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4975,
    longitude: 12.2583
  },
  {
    id: 3814,
    zipCode: '92536',
    city: 'Pfreimd Untersteinbach',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4877,
    longitude: 12.1667
  },
  {
    id: 3815,
    zipCode: '92536',
    city: 'Pfreimd Weihern',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.5246,
    longitude: 12.2083
  },
  {
    id: 3816,
    zipCode: '92536',
    city: 'Iffelsdorf',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.5,
    longitude: 12.175
  },
  {
    id: 3817,
    zipCode: '92539',
    city: 'Sch\u00f6nsee',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.5103,
    longitude: 12.5476
  },
  {
    id: 3818,
    zipCode: '92540',
    city: 'Altendorf',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4055,
    longitude: 12.2815
  },
  {
    id: 3819,
    zipCode: '92542',
    city: 'Dieterskirchen',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4167,
    longitude: 12.4167
  },
  {
    id: 3820,
    zipCode: '92543',
    city: 'Guteneck',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.45,
    longitude: 12.2833
  },
  {
    id: 3821,
    zipCode: '92545',
    city: 'Niedermurach',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.45,
    longitude: 12.3761
  },
  {
    id: 3822,
    zipCode: '92546',
    city: 'Schmidgaden',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4234,
    longitude: 12.0925
  },
  {
    id: 3823,
    zipCode: '92548',
    city: 'Schwarzach bei Nabburg',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4105,
    longitude: 12.2274
  },
  {
    id: 3824,
    zipCode: '92549',
    city: 'Stadlern',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.5066,
    longitude: 12.6124
  },
  {
    id: 3825,
    zipCode: '92551',
    city: 'Stulln',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4167,
    longitude: 12.1333
  },
  {
    id: 3826,
    zipCode: '92552',
    city: 'Teunz',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4833,
    longitude: 12.3833
  },
  {
    id: 3827,
    zipCode: '92554',
    city: 'Thanstein',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.3833,
    longitude: 12.4667
  },
  {
    id: 3828,
    zipCode: '92555',
    city: 'Trausnitz',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.5211,
    longitude: 12.2625
  },
  {
    id: 3829,
    zipCode: '92557',
    city: 'Weiding',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4833,
    longitude: 12.5667
  },
  {
    id: 3830,
    zipCode: '92559',
    city: 'Winklarn',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4269,
    longitude: 12.4799
  },
  {
    id: 3831,
    zipCode: '92637',
    city: 'Weiden',
    state: 'Bayern',
    community: 'Weiden i.d.OPf.',
    latitude: 49.6768,
    longitude: 12.1561
  },
  {
    id: 3832,
    zipCode: '92637',
    city: 'Theisseil',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.6903,
    longitude: 12.2274
  },
  {
    id: 3833,
    zipCode: '92648',
    city: 'Vohenstrau\u00df',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.6238,
    longitude: 12.3381
  },
  {
    id: 3834,
    zipCode: '92655',
    city: 'Grafenw\u00f6hr',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.6989,
    longitude: 11.8675
  },
  {
    id: 3835,
    zipCode: '92660',
    city: 'Neustadt an der Waldnaab',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.7329,
    longitude: 12.1777
  },
  {
    id: 3836,
    zipCode: '92665',
    city: 'Altenstadt an der Waldnaab',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.7159,
    longitude: 12.1598
  },
  {
    id: 3837,
    zipCode: '92665',
    city: 'Kirchendemenreuth',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.7833,
    longitude: 12.1
  },
  {
    id: 3838,
    zipCode: '92670',
    city: 'Windischeschenbach',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.8011,
    longitude: 12.1571
  },
  {
    id: 3839,
    zipCode: '92676',
    city: 'Speinshart',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.79,
    longitude: 11.8195
  },
  {
    id: 3840,
    zipCode: '92676',
    city: 'Eschenbach in der Oberpfalz',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.7554,
    longitude: 11.8331
  },
  {
    id: 3841,
    zipCode: '92681',
    city: 'Erbendorf',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.8398,
    longitude: 12.0459
  },
  {
    id: 3842,
    zipCode: '92685',
    city: 'Flo\u00df',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.724,
    longitude: 12.2759
  },
  {
    id: 3843,
    zipCode: '92690',
    city: 'Pressath',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.7686,
    longitude: 11.9397
  },
  {
    id: 3844,
    zipCode: '92693',
    city: 'Eslarn',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.5835,
    longitude: 12.5216
  },
  {
    id: 3845,
    zipCode: '92694',
    city: 'Etzenricht',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.6333,
    longitude: 12.1
  },
  {
    id: 3846,
    zipCode: '92696',
    city: 'Flossenb\u00fcrg',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.7333,
    longitude: 12.35
  },
  {
    id: 3847,
    zipCode: '92697',
    city: 'Georgenberg',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.703,
    longitude: 12.4208
  },
  {
    id: 3848,
    zipCode: '92699',
    city: 'Bechtsrieth',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.6449,
    longitude: 12.21
  },
  {
    id: 3849,
    zipCode: '92699',
    city: 'Irchenrieth',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.6229,
    longitude: 12.225
  },
  {
    id: 3850,
    zipCode: '92700',
    city: 'Kaltenbrunn, Oberpfalz',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.65,
    longitude: 11.95
  },
  {
    id: 3851,
    zipCode: '92702',
    city: 'Kohlberg',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.5912,
    longitude: 12.0195
  },
  {
    id: 3852,
    zipCode: '92703',
    city: 'Krummennaab',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.8333,
    longitude: 12.1
  },
  {
    id: 3853,
    zipCode: '92705',
    city: 'Leuchtenberg',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.5974,
    longitude: 12.2584
  },
  {
    id: 3854,
    zipCode: '92706',
    city: 'Luhe-Wildenau',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.5837,
    longitude: 12.1492
  },
  {
    id: 3855,
    zipCode: '92708',
    city: 'Mantel',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.6541,
    longitude: 12.0407
  },
  {
    id: 3856,
    zipCode: '92709',
    city: 'Moosbach',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.5891,
    longitude: 12.4104
  },
  {
    id: 3857,
    zipCode: '92711',
    city: 'Parkstein',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.7292,
    longitude: 12.0675
  },
  {
    id: 3858,
    zipCode: '92712',
    city: 'Pirk',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.6333,
    longitude: 12.1667
  },
  {
    id: 3859,
    zipCode: '92714',
    city: 'Pleystein',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.6491,
    longitude: 12.4063
  },
  {
    id: 3860,
    zipCode: '92715',
    city: 'P\u00fcchersreuth',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.75,
    longitude: 12.2333
  },
  {
    id: 3861,
    zipCode: '92717',
    city: 'Reuth bei Erbendorf',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.8438,
    longitude: 12.1214
  },
  {
    id: 3862,
    zipCode: '92718',
    city: 'Schirmitz',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.65,
    longitude: 12.1667
  },
  {
    id: 3863,
    zipCode: '92720',
    city: 'Schwarzenbach',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.7246,
    longitude: 11.9976
  },
  {
    id: 3864,
    zipCode: '92721',
    city: 'St\u00f6rnstein',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.7323,
    longitude: 12.2055
  },
  {
    id: 3865,
    zipCode: '92723',
    city: 'Gleiritsch',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.4973,
    longitude: 12.3152
  },
  {
    id: 3866,
    zipCode: '92723',
    city: 'T\u00e4nnesberg',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.5318,
    longitude: 12.3276
  },
  {
    id: 3867,
    zipCode: '92724',
    city: 'Trabitz',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.8,
    longitude: 11.9
  },
  {
    id: 3868,
    zipCode: '92726',
    city: 'Waidhaus',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.6422,
    longitude: 12.4952
  },
  {
    id: 3869,
    zipCode: '92727',
    city: 'Waldthurn',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.6722,
    longitude: 12.3292
  },
  {
    id: 3870,
    zipCode: '92729',
    city: 'Weiherhammer',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.6333,
    longitude: 12.0667
  },
  {
    id: 3871,
    zipCode: '93047',
    city: 'Regensburg',
    state: 'Bayern',
    community: 'Regensburg',
    latitude: 49.0168,
    longitude: 12.0954
  },
  {
    id: 3872,
    zipCode: '93049',
    city: 'Regensburg',
    state: 'Bayern',
    community: 'Regensburg',
    latitude: 49.0153,
    longitude: 12.0577
  },
  {
    id: 3873,
    zipCode: '93051',
    city: 'Regensburg',
    state: 'Bayern',
    community: 'Regensburg',
    latitude: 49.0007,
    longitude: 12.0734
  },
  {
    id: 3874,
    zipCode: '93053',
    city: 'Regensburg',
    state: 'Bayern',
    community: 'Regensburg',
    latitude: 48.9965,
    longitude: 12.1202
  },
  {
    id: 3875,
    zipCode: '93055',
    city: 'Regensburg',
    state: 'Bayern',
    community: 'Regensburg',
    latitude: 49.0143,
    longitude: 12.1427
  },
  {
    id: 3876,
    zipCode: '93057',
    city: 'Regensburg',
    state: 'Bayern',
    community: 'Regensburg',
    latitude: 49.0499,
    longitude: 12.1006
  },
  {
    id: 3877,
    zipCode: '93059',
    city: 'Regensburg',
    state: 'Bayern',
    community: 'Regensburg',
    latitude: 49.0312,
    longitude: 12.1022
  },
  {
    id: 3878,
    zipCode: '93073',
    city: 'Neutraubling',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 48.9874,
    longitude: 12.201
  },
  {
    id: 3879,
    zipCode: '93080',
    city: 'Pentling',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 48.9834,
    longitude: 12.0587
  },
  {
    id: 3880,
    zipCode: '93083',
    city: 'Obertraubling',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 48.9667,
    longitude: 12.1667
  },
  {
    id: 3881,
    zipCode: '93086',
    city: 'W\u00f6rth an der Donau',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0009,
    longitude: 12.4054
  },
  {
    id: 3882,
    zipCode: '93087',
    city: 'Alteglofsheim',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 48.9167,
    longitude: 12.2
  },
  {
    id: 3883,
    zipCode: '93089',
    city: 'Aufhausen',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 48.872,
    longitude: 12.2821
  },
  {
    id: 3884,
    zipCode: '93090',
    city: 'Bach an der Donau',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0217,
    longitude: 12.3037
  },
  {
    id: 3885,
    zipCode: '93092',
    city: 'Barbing',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0,
    longitude: 12.2
  },
  {
    id: 3886,
    zipCode: '93093',
    city: 'Donaustauf',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0326,
    longitude: 12.2046
  },
  {
    id: 3887,
    zipCode: '93095',
    city: 'Hagelstadt',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 48.9,
    longitude: 12.2167
  },
  {
    id: 3888,
    zipCode: '93096',
    city: 'K\u00f6fering',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 48.9333,
    longitude: 12.2
  },
  {
    id: 3889,
    zipCode: '93098',
    city: 'Mintraching',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 48.9536,
    longitude: 12.2421
  },
  {
    id: 3890,
    zipCode: '93099',
    city: 'M\u00f6tzing',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 48.8935,
    longitude: 12.3736
  },
  {
    id: 3891,
    zipCode: '93101',
    city: 'Pfakofen',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 48.8582,
    longitude: 12.2274
  },
  {
    id: 3892,
    zipCode: '93102',
    city: 'Pfatter',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 48.9631,
    longitude: 12.3825
  },
  {
    id: 3893,
    zipCode: '93104',
    city: 'Riekofen',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 48.9167,
    longitude: 12.35
  },
  {
    id: 3894,
    zipCode: '93104',
    city: 'S\u00fcnching',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 48.8785,
    longitude: 12.3513
  },
  {
    id: 3895,
    zipCode: '93105',
    city: 'Tegernheim',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0239,
    longitude: 12.173
  },
  {
    id: 3896,
    zipCode: '93107',
    city: 'Thalmassing',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 48.9117,
    longitude: 12.155
  },
  {
    id: 3897,
    zipCode: '93109',
    city: 'Wiesent',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0167,
    longitude: 12.3833
  },
  {
    id: 3898,
    zipCode: '93128',
    city: 'Regenstauf',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.1201,
    longitude: 12.1303
  },
  {
    id: 3899,
    zipCode: '93133',
    city: 'Burglengenfeld',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.2038,
    longitude: 12.0445
  },
  {
    id: 3900,
    zipCode: '93138',
    city: 'Lappersdorf',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0469,
    longitude: 12.0913
  },
  {
    id: 3901,
    zipCode: '93142',
    city: 'Maxh\u00fctte-Haidhof',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.1996,
    longitude: 12.0923
  },
  {
    id: 3902,
    zipCode: '93149',
    city: 'Nittenau',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.1942,
    longitude: 12.2674
  },
  {
    id: 3903,
    zipCode: '93152',
    city: 'Nittendorf',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0246,
    longitude: 11.9613
  },
  {
    id: 3904,
    zipCode: '93155',
    city: 'Hemau',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0383,
    longitude: 11.8522
  },
  {
    id: 3905,
    zipCode: '93158',
    city: 'Teublitz',
    state: 'Bayern',
    community: 'Landkreis Schwandorf',
    latitude: 49.2229,
    longitude: 12.0873
  },
  {
    id: 3906,
    zipCode: '93161',
    city: 'Sinzing',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0,
    longitude: 12.0333
  },
  {
    id: 3907,
    zipCode: '93164',
    city: 'Laaber',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0672,
    longitude: 11.8855
  },
  {
    id: 3908,
    zipCode: '93164',
    city: 'Brunn',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.1,
    longitude: 11.9
  },
  {
    id: 3909,
    zipCode: '93167',
    city: 'Falkenstein',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.0975,
    longitude: 12.488
  },
  {
    id: 3910,
    zipCode: '93170',
    city: 'Bernhardswald',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0912,
    longitude: 12.2474
  },
  {
    id: 3911,
    zipCode: '93173',
    city: 'Wenzenbach',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0756,
    longitude: 12.1995
  },
  {
    id: 3912,
    zipCode: '93176',
    city: 'Beratzhausen',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0952,
    longitude: 11.8097
  },
  {
    id: 3913,
    zipCode: '93177',
    city: 'Altenthann',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.1,
    longitude: 12.3
  },
  {
    id: 3914,
    zipCode: '93179',
    city: 'Brennberg',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0667,
    longitude: 12.4
  },
  {
    id: 3915,
    zipCode: '93180',
    city: 'Deuerling',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0372,
    longitude: 11.9104
  },
  {
    id: 3916,
    zipCode: '93182',
    city: 'Duggendorf',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.1167,
    longitude: 11.9167
  },
  {
    id: 3917,
    zipCode: '93183',
    city: 'Holzheim am Forst',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.1485,
    longitude: 11.9977
  },
  {
    id: 3918,
    zipCode: '93183',
    city: 'Kallm\u00fcnz',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.1609,
    longitude: 11.9605
  },
  {
    id: 3919,
    zipCode: '93185',
    city: 'Michelsneukirchen',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.1229,
    longitude: 12.5528
  },
  {
    id: 3920,
    zipCode: '93186',
    city: 'Pettendorf',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0607,
    longitude: 12.0078
  },
  {
    id: 3921,
    zipCode: '93188',
    city: 'Pielenhofen',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0723,
    longitude: 11.957
  },
  {
    id: 3922,
    zipCode: '93189',
    city: 'Reichenbach',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.1833,
    longitude: 12.35
  },
  {
    id: 3923,
    zipCode: '93191',
    city: 'Rettenbach',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.0667,
    longitude: 12.45
  },
  {
    id: 3924,
    zipCode: '93192',
    city: 'Wald',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.15,
    longitude: 12.35
  },
  {
    id: 3925,
    zipCode: '93194',
    city: 'Walderbach',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.1833,
    longitude: 12.3833
  },
  {
    id: 3926,
    zipCode: '93195',
    city: 'Wolfsegg',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.1073,
    longitude: 11.9781
  },
  {
    id: 3927,
    zipCode: '93197',
    city: 'Zeitlarn',
    state: 'Bayern',
    community: 'Landkreis Regensburg',
    latitude: 49.0785,
    longitude: 12.1117
  },
  {
    id: 3928,
    zipCode: '93199',
    city: 'Zell',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.1444,
    longitude: 12.4141
  },
  {
    id: 3929,
    zipCode: '93413',
    city: 'Cham',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.2257,
    longitude: 12.655
  },
  {
    id: 3930,
    zipCode: '93426',
    city: 'Roding',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.1943,
    longitude: 12.5196
  },
  {
    id: 3931,
    zipCode: '93437',
    city: 'Furth im Wald',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.3095,
    longitude: 12.8416
  },
  {
    id: 3932,
    zipCode: '93444',
    city: 'K\u00f6tzting',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.1765,
    longitude: 12.8552
  },
  {
    id: 3933,
    zipCode: '93449',
    city: 'Waldm\u00fcnchen',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.378,
    longitude: 12.7091
  },
  {
    id: 3934,
    zipCode: '93453',
    city: 'Neukirchen beim Heiligen Blut',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.2587,
    longitude: 12.9687
  },
  {
    id: 3935,
    zipCode: '93455',
    city: 'Traitsching',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.15,
    longitude: 12.65
  },
  {
    id: 3936,
    zipCode: '93458',
    city: 'Eschlkam',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.2988,
    longitude: 12.9157
  },
  {
    id: 3937,
    zipCode: '93462',
    city: 'Lam',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.1967,
    longitude: 13.0505
  },
  {
    id: 3938,
    zipCode: '93464',
    city: 'Tiefenbach',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.4333,
    longitude: 12.5833
  },
  {
    id: 3939,
    zipCode: '93466',
    city: 'Chamerau',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.2,
    longitude: 12.75
  },
  {
    id: 3940,
    zipCode: '93468',
    city: 'Miltach',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.162,
    longitude: 12.7684
  },
  {
    id: 3941,
    zipCode: '93470',
    city: 'Lohberg',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.176,
    longitude: 13.1055
  },
  {
    id: 3942,
    zipCode: '93473',
    city: 'Arnschwang',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.2766,
    longitude: 12.8159
  },
  {
    id: 3943,
    zipCode: '93474',
    city: 'Arrach',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.1915,
    longitude: 12.9939
  },
  {
    id: 3944,
    zipCode: '93476',
    city: 'Blaibach',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.1667,
    longitude: 12.8167
  },
  {
    id: 3945,
    zipCode: '93477',
    city: 'Glei\u00dfenberg',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.3167,
    longitude: 12.7333
  },
  {
    id: 3946,
    zipCode: '93479',
    city: 'Grafenwiesen',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.2,
    longitude: 12.8833
  },
  {
    id: 3947,
    zipCode: '93480',
    city: 'Hohenwarth',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.2,
    longitude: 12.9333
  },
  {
    id: 3948,
    zipCode: '93482',
    city: 'Pemfling',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.2667,
    longitude: 12.6167
  },
  {
    id: 3949,
    zipCode: '93483',
    city: 'P\u00f6sing',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.2333,
    longitude: 12.55
  },
  {
    id: 3950,
    zipCode: '93485',
    city: 'Rimbach',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.2333,
    longitude: 12.8833
  },
  {
    id: 3951,
    zipCode: '93486',
    city: 'Runding',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.2151,
    longitude: 12.7621
  },
  {
    id: 3952,
    zipCode: '93488',
    city: 'Sch\u00f6nthal',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.35,
    longitude: 12.6
  },
  {
    id: 3953,
    zipCode: '93489',
    city: 'Schorndorf',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.1604,
    longitude: 12.5932
  },
  {
    id: 3954,
    zipCode: '93491',
    city: 'Stamsried',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.2676,
    longitude: 12.5305
  },
  {
    id: 3955,
    zipCode: '93492',
    city: 'Treffelstein',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.4225,
    longitude: 12.6157
  },
  {
    id: 3956,
    zipCode: '93494',
    city: 'Waffenbrunn',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.2667,
    longitude: 12.6667
  },
  {
    id: 3957,
    zipCode: '93495',
    city: 'Weiding',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.2628,
    longitude: 12.7631
  },
  {
    id: 3958,
    zipCode: '93497',
    city: 'Willmering',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.25,
    longitude: 12.6667
  },
  {
    id: 3959,
    zipCode: '93499',
    city: 'Zandt',
    state: 'Bayern',
    community: 'Cham',
    latitude: 49.15,
    longitude: 12.7333
  },
  {
    id: 3960,
    zipCode: '95478',
    city: 'Kemnath',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.8701,
    longitude: 11.8908
  },
  {
    id: 3961,
    zipCode: '95505',
    city: 'Immenreuth',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.9,
    longitude: 11.8667
  },
  {
    id: 3962,
    zipCode: '95506',
    city: 'Kastl',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.8333,
    longitude: 11.9
  },
  {
    id: 3963,
    zipCode: '95508',
    city: 'Kulmain',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.9,
    longitude: 11.9
  },
  {
    id: 3964,
    zipCode: '95514',
    city: 'Neustadt am Kulm',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.8167,
    longitude: 11.8333
  },
  {
    id: 3965,
    zipCode: '95519',
    city: 'Schlammersdorf',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.8,
    longitude: 11.7333
  },
  {
    id: 3966,
    zipCode: '95519',
    city: 'Vorbach',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Waldnaab',
    latitude: 49.8214,
    longitude: 11.7362
  },
  {
    id: 3967,
    zipCode: '95643',
    city: 'Tirschenreuth',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.8826,
    longitude: 12.3311
  },
  {
    id: 3968,
    zipCode: '95652',
    city: 'Waldsassen',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 50.0017,
    longitude: 12.3043
  },
  {
    id: 3969,
    zipCode: '95666',
    city: 'Mitterteich',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.9514,
    longitude: 12.2421
  },
  {
    id: 3970,
    zipCode: '95666',
    city: 'Leonberg',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.9471,
    longitude: 12.2852
  },
  {
    id: 3971,
    zipCode: '95671',
    city: 'B\u00e4rnau',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.8108,
    longitude: 12.4332
  },
  {
    id: 3972,
    zipCode: '95676',
    city: 'Wiesau',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.9082,
    longitude: 12.1889
  },
  {
    id: 3973,
    zipCode: '95679',
    city: 'Waldershof',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.9814,
    longitude: 12.0629
  },
  {
    id: 3974,
    zipCode: '95682',
    city: 'Brand',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.9597,
    longitude: 11.9107
  },
  {
    id: 3975,
    zipCode: '95683',
    city: 'Ebnath',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.95,
    longitude: 11.9333
  },
  {
    id: 3976,
    zipCode: '95685',
    city: 'Falkenberg',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.8584,
    longitude: 12.2268
  },
  {
    id: 3977,
    zipCode: '95688',
    city: 'Friedenfels',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.8826,
    longitude: 12.1012
  },
  {
    id: 3978,
    zipCode: '95689',
    city: 'Fuchsm\u00fchl',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.9226,
    longitude: 12.1458
  },
  {
    id: 3979,
    zipCode: '95692',
    city: 'Konnersreuth',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 50.0109,
    longitude: 12.2271
  },
  {
    id: 3980,
    zipCode: '95695',
    city: 'M\u00e4hring',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.9109,
    longitude: 12.5245
  },
  {
    id: 3981,
    zipCode: '95698',
    city: 'Neualbenreuth',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.9804,
    longitude: 12.4437
  },
  {
    id: 3982,
    zipCode: '95700',
    city: 'Neusorg',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.9333,
    longitude: 11.9667
  },
  {
    id: 3983,
    zipCode: '95701',
    city: 'Pechbrunn',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.9667,
    longitude: 12.1667
  },
  {
    id: 3984,
    zipCode: '95703',
    city: 'Pl\u00f6\u00dfberg',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.784,
    longitude: 12.31
  },
  {
    id: 3985,
    zipCode: '95704',
    city: 'Pullenreuth',
    state: 'Bayern',
    community: 'Landkreis Tirschenreuth',
    latitude: 49.9333,
    longitude: 12.0
  },
  {
    id: 3986,
    zipCode: '91077',
    city: 'Kleinsendelbach',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.5956,
    longitude: 11.1577
  },
  {
    id: 3987,
    zipCode: '91077',
    city: 'Hetzles',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.6333,
    longitude: 11.1333
  },
  {
    id: 3988,
    zipCode: '91077',
    city: 'Neunkirchen am Brand',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.612,
    longitude: 11.1297
  },
  {
    id: 3989,
    zipCode: '91077',
    city: 'Dormitz',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.5979,
    longitude: 11.1176
  },
  {
    id: 3990,
    zipCode: '91090',
    city: 'Effeltrich',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.6593,
    longitude: 11.0932
  },
  {
    id: 3991,
    zipCode: '91094',
    city: 'Langensendelbach',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.6405,
    longitude: 11.071
  },
  {
    id: 3992,
    zipCode: '91099',
    city: 'Poxdorf',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.6634,
    longitude: 11.0708
  },
  {
    id: 3993,
    zipCode: '91257',
    city: 'Pegnitz',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.7522,
    longitude: 11.5419
  },
  {
    id: 3994,
    zipCode: '91278',
    city: 'Pottenstein',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.7713,
    longitude: 11.4078
  },
  {
    id: 3995,
    zipCode: '91282',
    city: 'Betzenstein',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.6817,
    longitude: 11.4177
  },
  {
    id: 3996,
    zipCode: '91286',
    city: 'Obertrubach',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.7,
    longitude: 11.35
  },
  {
    id: 3997,
    zipCode: '91287',
    city: 'Plech',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.6524,
    longitude: 11.4693
  },
  {
    id: 3998,
    zipCode: '91289',
    city: 'Schnabelwaid',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.8122,
    longitude: 11.5827
  },
  {
    id: 3999,
    zipCode: '91301',
    city: 'Forchheim',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.7175,
    longitude: 11.0588
  },
  {
    id: 4000,
    zipCode: '91320',
    city: 'Ebermannstadt',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.7815,
    longitude: 11.1817
  },
  {
    id: 4001,
    zipCode: '91322',
    city: 'Gr\u00e4fenberg',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.6443,
    longitude: 11.2497
  },
  {
    id: 4002,
    zipCode: '91327',
    city: 'G\u00f6\u00dfweinstein',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.769,
    longitude: 11.3384
  },
  {
    id: 4003,
    zipCode: '91330',
    city: 'Eggolsheim',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.7696,
    longitude: 11.057
  },
  {
    id: 4004,
    zipCode: '91332',
    city: 'Heiligenstadt',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.863,
    longitude: 11.1719
  },
  {
    id: 4005,
    zipCode: '91336',
    city: 'Heroldsbach',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.6934,
    longitude: 10.9988
  },
  {
    id: 4006,
    zipCode: '91338',
    city: 'Igensdorf',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.6232,
    longitude: 11.2314
  },
  {
    id: 4007,
    zipCode: '91344',
    city: 'Waischenfeld',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.8465,
    longitude: 11.3481
  },
  {
    id: 4008,
    zipCode: '91346',
    city: 'Wiesenttal',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.8,
    longitude: 11.2667
  },
  {
    id: 4009,
    zipCode: '91347',
    city: 'Aufse\u00df',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.8837,
    longitude: 11.2269
  },
  {
    id: 4010,
    zipCode: '91349',
    city: 'Egloffstein',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.7018,
    longitude: 11.2575
  },
  {
    id: 4011,
    zipCode: '91352',
    city: 'Hallerndorf',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.7591,
    longitude: 10.9795
  },
  {
    id: 4012,
    zipCode: '91353',
    city: 'Hausen',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.6895,
    longitude: 11.0322
  },
  {
    id: 4013,
    zipCode: '91355',
    city: 'Hiltpoltstein',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.6607,
    longitude: 11.3227
  },
  {
    id: 4014,
    zipCode: '91356',
    city: 'Kirchehrenbach',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.7333,
    longitude: 11.15
  },
  {
    id: 4015,
    zipCode: '91358',
    city: 'Kunreuth',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.6824,
    longitude: 11.1433
  },
  {
    id: 4016,
    zipCode: '91359',
    city: 'Leutenbach',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.7095,
    longitude: 11.1722
  },
  {
    id: 4017,
    zipCode: '91361',
    city: 'Pinzberg',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.6897,
    longitude: 11.1021
  },
  {
    id: 4018,
    zipCode: '91362',
    city: 'Pretzfeld',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.7545,
    longitude: 11.1743
  },
  {
    id: 4019,
    zipCode: '91364',
    city: 'Unterleinleiter',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.823,
    longitude: 11.1891
  },
  {
    id: 4020,
    zipCode: '91365',
    city: 'Weilersbach',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.75,
    longitude: 11.1167
  },
  {
    id: 4021,
    zipCode: '91367',
    city: 'Wei\u00dfenohe',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.6309,
    longitude: 11.2537
  },
  {
    id: 4022,
    zipCode: '91369',
    city: 'Wiesenthau',
    state: 'Bayern',
    community: 'Landkreis Forchheim',
    latitude: 49.7133,
    longitude: 11.1356
  },
  {
    id: 4023,
    zipCode: '95028',
    city: 'Hof',
    state: 'Bayern',
    community: 'Hof',
    latitude: 50.3209,
    longitude: 11.9172
  },
  {
    id: 4024,
    zipCode: '95030',
    city: 'Hof',
    state: 'Bayern',
    community: 'Hof',
    latitude: 50.3173,
    longitude: 11.8961
  },
  {
    id: 4025,
    zipCode: '95032',
    city: 'Hof',
    state: 'Bayern',
    community: 'Hof',
    latitude: 50.2953,
    longitude: 11.9103
  },
  {
    id: 4026,
    zipCode: '95100',
    city: 'Selb',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 50.1706,
    longitude: 12.1305
  },
  {
    id: 4027,
    zipCode: '95111',
    city: 'Rehau',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.2492,
    longitude: 12.0342
  },
  {
    id: 4028,
    zipCode: '95119',
    city: 'Naila',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.3303,
    longitude: 11.7046
  },
  {
    id: 4029,
    zipCode: '95126',
    city: 'Schwarzenbach an der Saale',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.2228,
    longitude: 11.935
  },
  {
    id: 4030,
    zipCode: '95131',
    city: 'Schwarzenbach am Wald',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.2846,
    longitude: 11.6249
  },
  {
    id: 4031,
    zipCode: '95138',
    city: 'Bad Steben',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.3665,
    longitude: 11.6444
  },
  {
    id: 4032,
    zipCode: '95145',
    city: 'Oberkotzau',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.2624,
    longitude: 11.9348
  },
  {
    id: 4033,
    zipCode: '95152',
    city: 'Selbitz',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.317,
    longitude: 11.7502
  },
  {
    id: 4034,
    zipCode: '95158',
    city: 'Kirchenlamitz',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 50.1519,
    longitude: 11.9483
  },
  {
    id: 4035,
    zipCode: '95163',
    city: 'Wei\u00dfenstadt',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 50.1022,
    longitude: 11.8885
  },
  {
    id: 4036,
    zipCode: '95168',
    city: 'Marktleuthen',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 50.1301,
    longitude: 12.0023
  },
  {
    id: 4037,
    zipCode: '95173',
    city: 'Sch\u00f6nwald',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 50.1997,
    longitude: 12.085
  },
  {
    id: 4038,
    zipCode: '95176',
    city: 'Konradsreuth',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.2667,
    longitude: 11.85
  },
  {
    id: 4039,
    zipCode: '95179',
    city: 'Geroldsgr\u00fcn',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.3333,
    longitude: 11.6
  },
  {
    id: 4040,
    zipCode: '95180',
    city: 'Berg',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.3747,
    longitude: 11.7785
  },
  {
    id: 4041,
    zipCode: '95182',
    city: 'D\u00f6hlau',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.2833,
    longitude: 11.95
  },
  {
    id: 4042,
    zipCode: '95183',
    city: 'Trogen',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.3667,
    longitude: 11.95
  },
  {
    id: 4043,
    zipCode: '95183',
    city: 'Feilitzsch',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.3667,
    longitude: 11.9333
  },
  {
    id: 4044,
    zipCode: '95183',
    city: 'T\u00f6pen',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.3907,
    longitude: 11.8733
  },
  {
    id: 4045,
    zipCode: '95185',
    city: 'Gattendorf',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.3221,
    longitude: 11.9978
  },
  {
    id: 4046,
    zipCode: '95186',
    city: 'H\u00f6chst\u00e4dt im Fichtelgebirge',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 50.1,
    longitude: 12.0833
  },
  {
    id: 4047,
    zipCode: '95188',
    city: 'Issigau',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.3752,
    longitude: 11.7207
  },
  {
    id: 4048,
    zipCode: '95189',
    city: 'K\u00f6ditz',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.3333,
    longitude: 11.85
  },
  {
    id: 4049,
    zipCode: '95191',
    city: 'Leupoldsgr\u00fcn',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.3,
    longitude: 11.8
  },
  {
    id: 4050,
    zipCode: '95192',
    city: 'Lichtenberg',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.3833,
    longitude: 11.6762
  },
  {
    id: 4051,
    zipCode: '95194',
    city: 'Regnitzlosau',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.3,
    longitude: 12.05
  },
  {
    id: 4052,
    zipCode: '95195',
    city: 'R\u00f6slau',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 50.0833,
    longitude: 11.9833
  },
  {
    id: 4053,
    zipCode: '95197',
    city: 'Schauenstein',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.2783,
    longitude: 11.7417
  },
  {
    id: 4054,
    zipCode: '95199',
    city: 'Thierstein',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 50.1064,
    longitude: 12.102
  },
  {
    id: 4055,
    zipCode: '95213',
    city: 'M\u00fcnchberg',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.1895,
    longitude: 11.7882
  },
  {
    id: 4056,
    zipCode: '95233',
    city: 'Helmbrechts',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.2356,
    longitude: 11.7159
  },
  {
    id: 4057,
    zipCode: '95234',
    city: 'Sparneck',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.1621,
    longitude: 11.8435
  },
  {
    id: 4058,
    zipCode: '95236',
    city: 'Stammbach',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.1455,
    longitude: 11.6913
  },
  {
    id: 4059,
    zipCode: '95237',
    city: 'Wei\u00dfdorf',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.1833,
    longitude: 11.85
  },
  {
    id: 4060,
    zipCode: '95239',
    city: 'Zell',
    state: 'Bayern',
    community: 'Landkreis Hof',
    latitude: 50.1333,
    longitude: 11.8
  },
  {
    id: 4061,
    zipCode: '95326',
    city: 'Kulmbach',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.1007,
    longitude: 11.4503
  },
  {
    id: 4062,
    zipCode: '95336',
    city: 'Mainleus',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.0999,
    longitude: 11.3766
  },
  {
    id: 4063,
    zipCode: '95339',
    city: 'Wirsberg',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.1057,
    longitude: 11.6052
  },
  {
    id: 4064,
    zipCode: '95339',
    city: 'Neuenmarkt',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.0919,
    longitude: 11.5803
  },
  {
    id: 4065,
    zipCode: '95346',
    city: 'Stadtsteinach',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.1643,
    longitude: 11.5035
  },
  {
    id: 4066,
    zipCode: '95349',
    city: 'Thurnau',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.0254,
    longitude: 11.3935
  },
  {
    id: 4067,
    zipCode: '95352',
    city: 'Marktleugast',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.1731,
    longitude: 11.6339
  },
  {
    id: 4068,
    zipCode: '95355',
    city: 'Presseck',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.228,
    longitude: 11.5551
  },
  {
    id: 4069,
    zipCode: '95356',
    city: 'Grafengehaig',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.2031,
    longitude: 11.5936
  },
  {
    id: 4070,
    zipCode: '95358',
    city: 'Guttenberg',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.1552,
    longitude: 11.5648
  },
  {
    id: 4071,
    zipCode: '95359',
    city: 'Kasendorf',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.0367,
    longitude: 11.352
  },
  {
    id: 4072,
    zipCode: '95361',
    city: 'K\u00f6dnitz',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.1,
    longitude: 11.5333
  },
  {
    id: 4073,
    zipCode: '95362',
    city: 'Kupferberg',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.1396,
    longitude: 11.5776
  },
  {
    id: 4074,
    zipCode: '95364',
    city: 'Ludwigschorgast',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.1264,
    longitude: 11.5597
  },
  {
    id: 4075,
    zipCode: '95365',
    city: 'Rugendorf',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.2,
    longitude: 11.4667
  },
  {
    id: 4076,
    zipCode: '95367',
    city: 'Trebgast',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.0667,
    longitude: 11.55
  },
  {
    id: 4077,
    zipCode: '95369',
    city: 'Untersteinach',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.1333,
    longitude: 11.5167
  },
  {
    id: 4078,
    zipCode: '95444',
    city: 'Bayreuth',
    state: 'Bayern',
    community: 'Bayreuth',
    latitude: 49.9461,
    longitude: 11.5762
  },
  {
    id: 4079,
    zipCode: '95445',
    city: 'Bayreuth',
    state: 'Bayern',
    community: 'Bayreuth',
    latitude: 49.9431,
    longitude: 11.5592
  },
  {
    id: 4080,
    zipCode: '95447',
    city: 'Bayreuth',
    state: 'Bayern',
    community: 'Bayreuth',
    latitude: 49.9481,
    longitude: 11.5783
  },
  {
    id: 4081,
    zipCode: '95448',
    city: 'Bayreuth',
    state: 'Bayern',
    community: 'Bayreuth',
    latitude: 49.9474,
    longitude: 11.5993
  },
  {
    id: 4082,
    zipCode: '95460',
    city: 'Bad Berneck im Fichtelgebirge',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 50.0456,
    longitude: 11.6724
  },
  {
    id: 4083,
    zipCode: '95463',
    city: 'Bindlach',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.9817,
    longitude: 11.6139
  },
  {
    id: 4084,
    zipCode: '95466',
    city: 'Kirchenpingarten',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.9333,
    longitude: 11.7833
  },
  {
    id: 4085,
    zipCode: '95466',
    city: 'Weidenberg',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.9416,
    longitude: 11.7221
  },
  {
    id: 4086,
    zipCode: '95469',
    city: 'Speichersdorf',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.8713,
    longitude: 11.7812
  },
  {
    id: 4087,
    zipCode: '95473',
    city: 'Haag',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.87,
    longitude: 11.5607
  },
  {
    id: 4088,
    zipCode: '95473',
    city: 'Creu\u00dfen',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.845,
    longitude: 11.6268
  },
  {
    id: 4089,
    zipCode: '95473',
    city: 'Prebitz',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.8333,
    longitude: 11.6833
  },
  {
    id: 4090,
    zipCode: '95482',
    city: 'Gefrees',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 50.0954,
    longitude: 11.7377
  },
  {
    id: 4091,
    zipCode: '95485',
    city: 'Warmensteinach',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.9935,
    longitude: 11.7787
  },
  {
    id: 4092,
    zipCode: '95488',
    city: 'Eckersdorf',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.9348,
    longitude: 11.4962
  },
  {
    id: 4093,
    zipCode: '95490',
    city: 'Mistelgau',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.9126,
    longitude: 11.4659
  },
  {
    id: 4094,
    zipCode: '95491',
    city: 'Ahorntal',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.85,
    longitude: 11.4333
  },
  {
    id: 4095,
    zipCode: '95493',
    city: 'Bischofsgr\u00fcn',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 50.0512,
    longitude: 11.8
  },
  {
    id: 4096,
    zipCode: '95494',
    city: 'Gesees',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.9,
    longitude: 11.5333
  },
  {
    id: 4097,
    zipCode: '95496',
    city: 'Glash\u00fctten',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.8874,
    longitude: 11.4487
  },
  {
    id: 4098,
    zipCode: '95497',
    city: 'Goldkronach',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 50.0109,
    longitude: 11.6875
  },
  {
    id: 4099,
    zipCode: '95499',
    city: 'Harsdorf',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.0333,
    longitude: 11.5667
  },
  {
    id: 4100,
    zipCode: '95500',
    city: 'Heinersreuth',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.9667,
    longitude: 11.5333
  },
  {
    id: 4101,
    zipCode: '95502',
    city: 'Himmelkron',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.0667,
    longitude: 11.6
  },
  {
    id: 4102,
    zipCode: '95503',
    city: 'Hummeltal',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.9,
    longitude: 11.5167
  },
  {
    id: 4103,
    zipCode: '95509',
    city: 'Marktschorgast',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.0947,
    longitude: 11.6547
  },
  {
    id: 4104,
    zipCode: '95511',
    city: 'Mistelbach',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.9126,
    longitude: 11.5126
  },
  {
    id: 4105,
    zipCode: '95512',
    city: 'Neudrossenfeld',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 50.0167,
    longitude: 11.5
  },
  {
    id: 4106,
    zipCode: '95515',
    city: 'Plankenfels',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.8833,
    longitude: 11.3333
  },
  {
    id: 4107,
    zipCode: '95517',
    city: 'Emtmannsberg',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.8923,
    longitude: 11.6447
  },
  {
    id: 4108,
    zipCode: '95517',
    city: 'Seybothenreuth',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.8937,
    longitude: 11.7053
  },
  {
    id: 4109,
    zipCode: '95615',
    city: 'Marktredwitz',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 50.0044,
    longitude: 12.0859
  },
  {
    id: 4110,
    zipCode: '95632',
    city: 'Wunsiedel',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 50.0392,
    longitude: 12.0034
  },
  {
    id: 4111,
    zipCode: '95659',
    city: 'Arzberg',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 50.0577,
    longitude: 12.1868
  },
  {
    id: 4112,
    zipCode: '95680',
    city: 'Bad Alexandersbad',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 50.0167,
    longitude: 12.0167
  },
  {
    id: 4113,
    zipCode: '95686',
    city: 'Fichtelberg',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 50.0029,
    longitude: 11.8542
  },
  {
    id: 4114,
    zipCode: '95691',
    city: 'Hohenberg an der Eger',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 50.095,
    longitude: 12.2201
  },
  {
    id: 4115,
    zipCode: '95694',
    city: 'Mehlmeisel',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.9742,
    longitude: 11.862
  },
  {
    id: 4116,
    zipCode: '95697',
    city: 'Nagel',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 49.9833,
    longitude: 11.9167
  },
  {
    id: 4117,
    zipCode: '95706',
    city: 'Schirnding',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 50.0821,
    longitude: 12.2274
  },
  {
    id: 4118,
    zipCode: '95707',
    city: 'Thiersheim',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 50.0761,
    longitude: 12.1265
  },
  {
    id: 4119,
    zipCode: '95709',
    city: 'Tr\u00f6stau',
    state: 'Bayern',
    community: 'Wunsiedel i.Fichtelgebirge',
    latitude: 50.0167,
    longitude: 11.95
  },
  {
    id: 4120,
    zipCode: '96047',
    city: 'Bamberg',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.8934,
    longitude: 10.8911
  },
  {
    id: 4121,
    zipCode: '96049',
    city: 'Bamberg',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.88,
    longitude: 10.8834
  },
  {
    id: 4122,
    zipCode: '96050',
    city: 'Bamberg',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.8883,
    longitude: 10.9185
  },
  {
    id: 4123,
    zipCode: '96052',
    city: 'Bamberg',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.9083,
    longitude: 10.8951
  },
  {
    id: 4124,
    zipCode: '96103',
    city: 'Hallstadt',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.929,
    longitude: 10.8754
  },
  {
    id: 4125,
    zipCode: '96110',
    city: 'Sche\u00dflitz',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.9757,
    longitude: 11.033
  },
  {
    id: 4126,
    zipCode: '96114',
    city: 'Hirschaid',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.8179,
    longitude: 10.9892
  },
  {
    id: 4127,
    zipCode: '96117',
    city: 'Memmelsdorf',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.9301,
    longitude: 10.9592
  },
  {
    id: 4128,
    zipCode: '96120',
    city: 'Bischberg',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.9109,
    longitude: 10.8321
  },
  {
    id: 4129,
    zipCode: '96123',
    city: 'Litzendorf',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.9144,
    longitude: 11.0103
  },
  {
    id: 4130,
    zipCode: '96129',
    city: 'Strullendorf',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.8443,
    longitude: 10.9721
  },
  {
    id: 4131,
    zipCode: '96132',
    city: 'Schl\u00fcsselfeld',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.7562,
    longitude: 10.6187
  },
  {
    id: 4132,
    zipCode: '96135',
    city: 'Stegaurach',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.8654,
    longitude: 10.8438
  },
  {
    id: 4133,
    zipCode: '96138',
    city: 'Burgebrach',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.8283,
    longitude: 10.7434
  },
  {
    id: 4134,
    zipCode: '96142',
    city: 'Hollfeld',
    state: 'Bayern',
    community: 'Landkreis Bayreuth',
    latitude: 49.9379,
    longitude: 11.2915
  },
  {
    id: 4135,
    zipCode: '96145',
    city: 'Se\u00dflach',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.1897,
    longitude: 10.842
  },
  {
    id: 4136,
    zipCode: '96146',
    city: 'Altendorf',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.8,
    longitude: 11.0167
  },
  {
    id: 4137,
    zipCode: '96148',
    city: 'Baunach',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.9859,
    longitude: 10.8518
  },
  {
    id: 4138,
    zipCode: '96149',
    city: 'Breiteng\u00fc\u00dfbach',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.9721,
    longitude: 10.8859
  },
  {
    id: 4139,
    zipCode: '96154',
    city: 'Burgwindheim',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.8273,
    longitude: 10.5963
  },
  {
    id: 4140,
    zipCode: '96155',
    city: 'Buttenheim',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.8036,
    longitude: 11.03
  },
  {
    id: 4141,
    zipCode: '96157',
    city: 'Ebrach',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.8481,
    longitude: 10.4967
  },
  {
    id: 4142,
    zipCode: '96158',
    city: 'Frensdorf',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.8167,
    longitude: 10.8667
  },
  {
    id: 4143,
    zipCode: '96161',
    city: 'Gerach',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 50.0333,
    longitude: 10.8
  },
  {
    id: 4144,
    zipCode: '96163',
    city: 'Gundelsheim',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.9371,
    longitude: 10.9199
  },
  {
    id: 4145,
    zipCode: '96164',
    city: 'Kemmern',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.9549,
    longitude: 10.8778
  },
  {
    id: 4146,
    zipCode: '96167',
    city: 'K\u00f6nigsfeld',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.946,
    longitude: 11.1652
  },
  {
    id: 4147,
    zipCode: '96169',
    city: 'Lauter',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.9732,
    longitude: 10.7884
  },
  {
    id: 4148,
    zipCode: '96170',
    city: 'Priesendorf',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.9075,
    longitude: 10.7118
  },
  {
    id: 4149,
    zipCode: '96173',
    city: 'Oberhaid',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.9325,
    longitude: 10.8147
  },
  {
    id: 4150,
    zipCode: '96175',
    city: 'Pettstadt',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.83,
    longitude: 10.9284
  },
  {
    id: 4151,
    zipCode: '96178',
    city: 'Pommersfelden',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.7667,
    longitude: 10.8167
  },
  {
    id: 4152,
    zipCode: '96179',
    city: 'Rattelsdorf',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 50.015,
    longitude: 10.8886
  },
  {
    id: 4153,
    zipCode: '96182',
    city: 'Reckendorf',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 50.0167,
    longitude: 10.8333
  },
  {
    id: 4154,
    zipCode: '96185',
    city: 'Sch\u00f6nbrunn',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.857,
    longitude: 10.6902
  },
  {
    id: 4155,
    zipCode: '96187',
    city: 'Stadelhofen',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 50.0032,
    longitude: 11.1976
  },
  {
    id: 4156,
    zipCode: '96191',
    city: 'Viereth-Trunstadt',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.9222,
    longitude: 10.7772
  },
  {
    id: 4157,
    zipCode: '96194',
    city: 'Walsdorf',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 49.8667,
    longitude: 10.7833
  },
  {
    id: 4158,
    zipCode: '96196',
    city: 'Wattendorf',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 50.0326,
    longitude: 11.1262
  },
  {
    id: 4159,
    zipCode: '96197',
    city: 'Wonsees',
    state: 'Bayern',
    community: 'Landkreis Kulmbach',
    latitude: 49.9761,
    longitude: 11.3005
  },
  {
    id: 4160,
    zipCode: '96199',
    city: 'Zapfendorf',
    state: 'Bayern',
    community: 'Bamberg',
    latitude: 50.0178,
    longitude: 10.9324
  },
  {
    id: 4161,
    zipCode: '96215',
    city: 'Lichtenfels',
    state: 'Bayern',
    community: 'Landkreis Lichtenfels',
    latitude: 50.1457,
    longitude: 11.0593
  },
  {
    id: 4162,
    zipCode: '96224',
    city: 'Burgkunstadt',
    state: 'Bayern',
    community: 'Landkreis Lichtenfels',
    latitude: 50.1409,
    longitude: 11.252
  },
  {
    id: 4163,
    zipCode: '96231',
    city: 'Bad Staffelstein',
    state: 'Bayern',
    community: 'Landkreis Lichtenfels',
    latitude: 50.102,
    longitude: 11.0013
  },
  {
    id: 4164,
    zipCode: '96237',
    city: 'Ebersdorf',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.329,
    longitude: 11.1527
  },
  {
    id: 4165,
    zipCode: '96242',
    city: 'Sonnefeld',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.2167,
    longitude: 11.1333
  },
  {
    id: 4166,
    zipCode: '96247',
    city: 'Michelau in Oberfranken',
    state: 'Bayern',
    community: 'Landkreis Lichtenfels',
    latitude: 50.168,
    longitude: 11.1139
  },
  {
    id: 4167,
    zipCode: '96250',
    city: 'Ebensfeld',
    state: 'Bayern',
    community: 'Landkreis Lichtenfels',
    latitude: 50.0664,
    longitude: 10.9583
  },
  {
    id: 4168,
    zipCode: '96253',
    city: 'Untersiemau',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.1942,
    longitude: 10.9745
  },
  {
    id: 4169,
    zipCode: '96257',
    city: 'Redwitz an der Rodach',
    state: 'Bayern',
    community: 'Landkreis Lichtenfels',
    latitude: 50.1732,
    longitude: 11.2083
  },
  {
    id: 4170,
    zipCode: '96257',
    city: 'Marktgraitz',
    state: 'Bayern',
    community: 'Landkreis Lichtenfels',
    latitude: 50.1836,
    longitude: 11.1944
  },
  {
    id: 4171,
    zipCode: '96260',
    city: 'Weismain',
    state: 'Bayern',
    community: 'Landkreis Lichtenfels',
    latitude: 50.0851,
    longitude: 11.2402
  },
  {
    id: 4172,
    zipCode: '96264',
    city: 'Altenkunstadt',
    state: 'Bayern',
    community: 'Landkreis Lichtenfels',
    latitude: 50.125,
    longitude: 11.2503
  },
  {
    id: 4173,
    zipCode: '96268',
    city: 'Mitwitz',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.2511,
    longitude: 11.2082
  },
  {
    id: 4174,
    zipCode: '96269',
    city: 'Gro\u00dfheirath',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.176,
    longitude: 10.9505
  },
  {
    id: 4175,
    zipCode: '96271',
    city: 'Grub am Forst',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.2299,
    longitude: 11.0198
  },
  {
    id: 4176,
    zipCode: '96272',
    city: 'Hochstadt am Main',
    state: 'Bayern',
    community: 'Landkreis Lichtenfels',
    latitude: 50.1501,
    longitude: 11.1712
  },
  {
    id: 4177,
    zipCode: '96274',
    city: 'Itzgrund',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.15,
    longitude: 10.9
  },
  {
    id: 4178,
    zipCode: '96275',
    city: 'Marktzeuln',
    state: 'Bayern',
    community: 'Landkreis Lichtenfels',
    latitude: 50.1667,
    longitude: 11.1669
  },
  {
    id: 4179,
    zipCode: '96277',
    city: 'Schneckenlohe',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.2118,
    longitude: 11.194
  },
  {
    id: 4180,
    zipCode: '96279',
    city: 'Weidhausen bei Coburg',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.2035,
    longitude: 11.1401
  },
  {
    id: 4181,
    zipCode: '96317',
    city: 'Kronach',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.2396,
    longitude: 11.3331
  },
  {
    id: 4182,
    zipCode: '96328',
    city: 'K\u00fcps',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.1912,
    longitude: 11.2668
  },
  {
    id: 4183,
    zipCode: '96332',
    city: 'Pressig',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.3524,
    longitude: 11.3097
  },
  {
    id: 4184,
    zipCode: '96337',
    city: 'Ludwigsstadt',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.486,
    longitude: 11.3873
  },
  {
    id: 4185,
    zipCode: '96342',
    city: 'Stockheim',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.3064,
    longitude: 11.2817
  },
  {
    id: 4186,
    zipCode: '96346',
    city: 'Wallenfels',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.2685,
    longitude: 11.4706
  },
  {
    id: 4187,
    zipCode: '96349',
    city: 'Steinwiesen',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.2944,
    longitude: 11.4629
  },
  {
    id: 4188,
    zipCode: '96352',
    city: 'Wilhelmsthal',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.3111,
    longitude: 11.3728
  },
  {
    id: 4189,
    zipCode: '96355',
    city: 'Tettau',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.4698,
    longitude: 11.2589
  },
  {
    id: 4190,
    zipCode: '96358',
    city: 'Teuschnitz',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.3984,
    longitude: 11.3824
  },
  {
    id: 4191,
    zipCode: '96358',
    city: 'Reichenbach',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.4243,
    longitude: 11.413
  },
  {
    id: 4192,
    zipCode: '96361',
    city: 'Steinbach am Wald',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.439,
    longitude: 11.3692
  },
  {
    id: 4193,
    zipCode: '96364',
    city: 'Marktrodach',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.25,
    longitude: 11.3833
  },
  {
    id: 4194,
    zipCode: '96365',
    city: 'Nordhalben',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.3741,
    longitude: 11.5099
  },
  {
    id: 4195,
    zipCode: '96367',
    city: 'Tschirn',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.4,
    longitude: 11.45
  },
  {
    id: 4196,
    zipCode: '96369',
    city: 'Wei\u00dfenbrunn',
    state: 'Bayern',
    community: 'Landkreis Kronach',
    latitude: 50.2,
    longitude: 11.35
  },
  {
    id: 4197,
    zipCode: '96450',
    city: 'Coburg',
    state: 'Bayern',
    community: 'Coburg',
    latitude: 50.2594,
    longitude: 10.9638
  },
  {
    id: 4198,
    zipCode: '96465',
    city: 'Neustadt bei Coburg',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.3298,
    longitude: 11.1206
  },
  {
    id: 4199,
    zipCode: '96472',
    city: 'R\u00f6dental',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.2952,
    longitude: 11.0412
  },
  {
    id: 4200,
    zipCode: '96476',
    city: 'Bad Rodach',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.3333,
    longitude: 10.7833
  },
  {
    id: 4201,
    zipCode: '96479',
    city: 'Weitramsdorf',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.256,
    longitude: 10.8799
  },
  {
    id: 4202,
    zipCode: '96482',
    city: 'Ahorn',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.2376,
    longitude: 10.9542
  },
  {
    id: 4203,
    zipCode: '96484',
    city: 'Meeder',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.3212,
    longitude: 10.907
  },
  {
    id: 4204,
    zipCode: '96486',
    city: 'Lautertal',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.3333,
    longitude: 10.9667
  },
  {
    id: 4205,
    zipCode: '96487',
    city: 'D\u00f6rfles-Esbach',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.2833,
    longitude: 11.0
  },
  {
    id: 4206,
    zipCode: '96489',
    city: 'Niederf\u00fcllbach',
    state: 'Bayern',
    community: 'Landkreis Coburg',
    latitude: 50.22,
    longitude: 10.9909
  },
  {
    id: 4207,
    zipCode: '90402',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4504,
    longitude: 11.0778
  },
  {
    id: 4208,
    zipCode: '90403',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4541,
    longitude: 11.0768
  },
  {
    id: 4209,
    zipCode: '90408',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4678,
    longitude: 11.0693
  },
  {
    id: 4210,
    zipCode: '90409',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4478,
    longitude: 11.0683
  },
  {
    id: 4211,
    zipCode: '90411',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4897,
    longitude: 11.1064
  },
  {
    id: 4212,
    zipCode: '90419',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4639,
    longitude: 11.0671
  },
  {
    id: 4213,
    zipCode: '90425',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4732,
    longitude: 11.0567
  },
  {
    id: 4214,
    zipCode: '90427',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.5178,
    longitude: 11.0058
  },
  {
    id: 4215,
    zipCode: '90429',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4599,
    longitude: 11.0275
  },
  {
    id: 4216,
    zipCode: '90431',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4453,
    longitude: 11.0222
  },
  {
    id: 4217,
    zipCode: '90439',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4358,
    longitude: 11.0384
  },
  {
    id: 4218,
    zipCode: '90441',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4324,
    longitude: 11.0497
  },
  {
    id: 4219,
    zipCode: '90443',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.446,
    longitude: 11.0782
  },
  {
    id: 4220,
    zipCode: '90449',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4177,
    longitude: 11.0297
  },
  {
    id: 4221,
    zipCode: '90451',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4072,
    longitude: 11.0352
  },
  {
    id: 4222,
    zipCode: '90453',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.3834,
    longitude: 11.0416
  },
  {
    id: 4223,
    zipCode: '90455',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4478,
    longitude: 11.0683
  },
  {
    id: 4224,
    zipCode: '90457',
    city: 'Moorenbrunn',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.3984,
    longitude: 11.174
  },
  {
    id: 4225,
    zipCode: '90459',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4403,
    longitude: 11.0809
  },
  {
    id: 4226,
    zipCode: '90461',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4361,
    longitude: 11.0925
  },
  {
    id: 4227,
    zipCode: '90469',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4092,
    longitude: 11.092
  },
  {
    id: 4228,
    zipCode: '90471',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.417,
    longitude: 11.1251
  },
  {
    id: 4229,
    zipCode: '90473',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4044,
    longitude: 11.1341
  },
  {
    id: 4230,
    zipCode: '90475',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4075,
    longitude: 11.1649
  },
  {
    id: 4231,
    zipCode: '90478',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.443,
    longitude: 11.0948
  },
  {
    id: 4232,
    zipCode: '90480',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4371,
    longitude: 11.1194
  },
  {
    id: 4233,
    zipCode: '90482',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.464,
    longitude: 11.1491
  },
  {
    id: 4234,
    zipCode: '90489',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4586,
    longitude: 11.0974
  },
  {
    id: 4235,
    zipCode: '90491',
    city: 'N\u00fcrnberg',
    state: 'Bayern',
    community: 'N\u00fcrnberg',
    latitude: 49.4741,
    longitude: 11.1296
  },
  {
    id: 4236,
    zipCode: '90513',
    city: 'Zirndorf',
    state: 'Bayern',
    community: 'Landkreis F\u00fcrth',
    latitude: 49.4424,
    longitude: 10.9541
  },
  {
    id: 4237,
    zipCode: '90518',
    city: 'Altdorf',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.3856,
    longitude: 11.3573
  },
  {
    id: 4238,
    zipCode: '90522',
    city: 'Oberasbach',
    state: 'Bayern',
    community: 'Landkreis F\u00fcrth',
    latitude: 49.4228,
    longitude: 10.9577
  },
  {
    id: 4239,
    zipCode: '90530',
    city: 'Wendelstein',
    state: 'Bayern',
    community: 'Landkreis Roth',
    latitude: 49.3523,
    longitude: 11.1507
  },
  {
    id: 4240,
    zipCode: '90537',
    city: 'Feucht',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.376,
    longitude: 11.2143
  },
  {
    id: 4241,
    zipCode: '90542',
    city: 'Eckental',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.5833,
    longitude: 11.25
  },
  {
    id: 4242,
    zipCode: '90547',
    city: 'Stein bei N\u00fcrnberg',
    state: 'Bayern',
    community: 'Landkreis F\u00fcrth',
    latitude: 49.406,
    longitude: 10.9991
  },
  {
    id: 4243,
    zipCode: '90552',
    city: 'R\u00f6thenbach an der Pegnitz',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.483,
    longitude: 11.2412
  },
  {
    id: 4244,
    zipCode: '90556',
    city: 'Seukendorf',
    state: 'Bayern',
    community: 'Landkreis F\u00fcrth',
    latitude: 49.4884,
    longitude: 10.88
  },
  {
    id: 4245,
    zipCode: '90556',
    city: 'Cadolzburg',
    state: 'Bayern',
    community: 'Landkreis F\u00fcrth',
    latitude: 49.4573,
    longitude: 10.8533
  },
  {
    id: 4246,
    zipCode: '90559',
    city: 'Burgthann',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.352,
    longitude: 11.3115
  },
  {
    id: 4247,
    zipCode: '90562',
    city: 'Kalchreuth',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.5579,
    longitude: 11.1335
  },
  {
    id: 4248,
    zipCode: '90562',
    city: 'Heroldsberg',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.5325,
    longitude: 11.1555
  },
  {
    id: 4249,
    zipCode: '90571',
    city: 'Schwaig',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.4695,
    longitude: 11.2006
  },
  {
    id: 4250,
    zipCode: '90574',
    city: 'Ro\u00dftal',
    state: 'Bayern',
    community: 'Landkreis F\u00fcrth',
    latitude: 49.3957,
    longitude: 10.8885
  },
  {
    id: 4251,
    zipCode: '90579',
    city: 'Langenzenn',
    state: 'Bayern',
    community: 'Landkreis F\u00fcrth',
    latitude: 49.4946,
    longitude: 10.7923
  },
  {
    id: 4252,
    zipCode: '90584',
    city: 'Allersberg',
    state: 'Bayern',
    community: 'Landkreis Roth',
    latitude: 49.2513,
    longitude: 11.2366
  },
  {
    id: 4253,
    zipCode: '90587',
    city: 'Tuchenbach',
    state: 'Bayern',
    community: 'Landkreis F\u00fcrth',
    latitude: 49.5279,
    longitude: 10.8597
  },
  {
    id: 4254,
    zipCode: '90587',
    city: 'Veitsbronn',
    state: 'Bayern',
    community: 'Landkreis F\u00fcrth',
    latitude: 49.5124,
    longitude: 10.888
  },
  {
    id: 4255,
    zipCode: '90587',
    city: 'Obermichelbach',
    state: 'Bayern',
    community: 'Landkreis F\u00fcrth',
    latitude: 49.5312,
    longitude: 10.9089
  },
  {
    id: 4256,
    zipCode: '90592',
    city: 'Schwarzenbruck',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.3578,
    longitude: 11.2433
  },
  {
    id: 4257,
    zipCode: '90596',
    city: 'Schwanstetten',
    state: 'Bayern',
    community: 'Landkreis Roth',
    latitude: 49.3249,
    longitude: 11.1227
  },
  {
    id: 4258,
    zipCode: '90599',
    city: 'Dietenhofen',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.4,
    longitude: 10.6898
  },
  {
    id: 4259,
    zipCode: '90607',
    city: 'R\u00fcckersdorf',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.4976,
    longitude: 11.2475
  },
  {
    id: 4260,
    zipCode: '90610',
    city: 'Winkelhaid',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.3896,
    longitude: 11.2989
  },
  {
    id: 4261,
    zipCode: '90613',
    city: 'Gro\u00dfhabersdorf',
    state: 'Bayern',
    community: 'Landkreis F\u00fcrth',
    latitude: 49.4,
    longitude: 10.7833
  },
  {
    id: 4262,
    zipCode: '90614',
    city: 'Ammerndorf',
    state: 'Bayern',
    community: 'Landkreis F\u00fcrth',
    latitude: 49.4233,
    longitude: 10.8501
  },
  {
    id: 4263,
    zipCode: '90616',
    city: 'Neuhof an der Zenn',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.4569,
    longitude: 10.6455
  },
  {
    id: 4264,
    zipCode: '90617',
    city: 'Puschendorf',
    state: 'Bayern',
    community: 'Landkreis F\u00fcrth',
    latitude: 49.524,
    longitude: 10.8319
  },
  {
    id: 4265,
    zipCode: '90619',
    city: 'Trautskirchen',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.4581,
    longitude: 10.5936
  },
  {
    id: 4266,
    zipCode: '90762',
    city: 'F\u00fcrth',
    state: 'Bayern',
    community: 'F\u00fcrth',
    latitude: 49.4706,
    longitude: 10.9971
  },
  {
    id: 4267,
    zipCode: '90763',
    city: 'F\u00fcrth',
    state: 'Bayern',
    community: 'F\u00fcrth',
    latitude: 49.5069,
    longitude: 10.9565
  },
  {
    id: 4268,
    zipCode: '90765',
    city: 'F\u00fcrth',
    state: 'Bayern',
    community: 'F\u00fcrth',
    latitude: 49.483,
    longitude: 11.004
  },
  {
    id: 4269,
    zipCode: '90766',
    city: 'F\u00fcrth',
    state: 'Bayern',
    community: 'F\u00fcrth',
    latitude: 49.4865,
    longitude: 10.9608
  },
  {
    id: 4270,
    zipCode: '90768',
    city: 'F\u00fcrth',
    state: 'Bayern',
    community: 'F\u00fcrth',
    latitude: 49.4954,
    longitude: 10.9444
  },
  {
    id: 4271,
    zipCode: '91052',
    city: 'Erlangen',
    state: 'Bayern',
    community: 'Kreisfreie Stadt Erlangen',
    latitude: 49.5888,
    longitude: 11.0098
  },
  {
    id: 4272,
    zipCode: '91054',
    city: 'Buckenhof',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.5932,
    longitude: 11.0504
  },
  {
    id: 4273,
    zipCode: '91054',
    city: 'Erlangen',
    state: 'Bayern',
    community: 'Kreisfreie Stadt Erlangen',
    latitude: 49.5988,
    longitude: 11.0087
  },
  {
    id: 4274,
    zipCode: '91056',
    city: 'Erlangen',
    state: 'Bayern',
    community: 'Kreisfreie Stadt Erlangen',
    latitude: 49.5986,
    longitude: 10.9675
  },
  {
    id: 4275,
    zipCode: '91058',
    city: 'Erlangen',
    state: 'Bayern',
    community: 'Kreisfreie Stadt Erlangen',
    latitude: 49.55,
    longitude: 11.0036
  },
  {
    id: 4276,
    zipCode: '91074',
    city: 'Herzogenaurach',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.568,
    longitude: 10.8856
  },
  {
    id: 4277,
    zipCode: '91080',
    city: 'Spardorf',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.6085,
    longitude: 11.0559
  },
  {
    id: 4278,
    zipCode: '91080',
    city: 'Uttenreuth',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.5967,
    longitude: 11.0722
  },
  {
    id: 4279,
    zipCode: '91080',
    city: 'Marloffstein',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.6179,
    longitude: 11.0632
  },
  {
    id: 4280,
    zipCode: '91083',
    city: 'Baiersdorf',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.6581,
    longitude: 11.0359
  },
  {
    id: 4281,
    zipCode: '91085',
    city: 'Weisendorf',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.6228,
    longitude: 10.8253
  },
  {
    id: 4282,
    zipCode: '91086',
    city: 'Aurachtal',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.5833,
    longitude: 10.8333
  },
  {
    id: 4283,
    zipCode: '91088',
    city: 'Bubenreuth',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.6274,
    longitude: 11.0172
  },
  {
    id: 4284,
    zipCode: '91091',
    city: 'Gro\u00dfenseebach',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.6325,
    longitude: 10.8748
  },
  {
    id: 4285,
    zipCode: '91093',
    city: 'He\u00dfdorf',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.6273,
    longitude: 10.91
  },
  {
    id: 4286,
    zipCode: '91096',
    city: 'M\u00f6hrendorf',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.6333,
    longitude: 11.0
  },
  {
    id: 4287,
    zipCode: '91097',
    city: 'Oberreichenbach',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.5895,
    longitude: 10.7689
  },
  {
    id: 4288,
    zipCode: '91126',
    city: 'Schwabach',
    state: 'Bayern',
    community: 'Kreisfreie Stadt Schwabach',
    latitude: 49.3305,
    longitude: 11.0235
  },
  {
    id: 4289,
    zipCode: '91126',
    city: 'Rednitzhembach',
    state: 'Bayern',
    community: 'Landkreis Roth',
    latitude: 49.3009,
    longitude: 11.08
  },
  {
    id: 4290,
    zipCode: '91126',
    city: 'Kammerstein',
    state: 'Bayern',
    community: 'Landkreis Roth',
    latitude: 49.2932,
    longitude: 10.9728
  },
  {
    id: 4291,
    zipCode: '91154',
    city: 'Roth',
    state: 'Bayern',
    community: 'Landkreis Roth',
    latitude: 49.2597,
    longitude: 11.1457
  },
  {
    id: 4292,
    zipCode: '91161',
    city: 'Hilpoltstein',
    state: 'Bayern',
    community: 'Landkreis Roth',
    latitude: 49.1905,
    longitude: 11.1906
  },
  {
    id: 4293,
    zipCode: '91166',
    city: 'Georgensgm\u00fcnd',
    state: 'Bayern',
    community: 'Landkreis Roth',
    latitude: 49.1897,
    longitude: 11.0167
  },
  {
    id: 4294,
    zipCode: '91171',
    city: 'Greding',
    state: 'Bayern',
    community: 'Landkreis Roth',
    latitude: 49.047,
    longitude: 11.357
  },
  {
    id: 4295,
    zipCode: '91174',
    city: 'Spalt',
    state: 'Bayern',
    community: 'Landkreis Roth',
    latitude: 49.1755,
    longitude: 10.9245
  },
  {
    id: 4296,
    zipCode: '91177',
    city: 'Thalm\u00e4ssing',
    state: 'Bayern',
    community: 'Landkreis Roth',
    latitude: 49.0883,
    longitude: 11.2215
  },
  {
    id: 4297,
    zipCode: '91180',
    city: 'Heideck',
    state: 'Bayern',
    community: 'Landkreis Roth',
    latitude: 49.1337,
    longitude: 11.1273
  },
  {
    id: 4298,
    zipCode: '91183',
    city: 'Abenberg',
    state: 'Bayern',
    community: 'Landkreis Roth',
    latitude: 49.2428,
    longitude: 10.964
  },
  {
    id: 4299,
    zipCode: '91186',
    city: 'B\u00fcchenbach',
    state: 'Bayern',
    community: 'Landkreis Roth',
    latitude: 49.2678,
    longitude: 11.0589
  },
  {
    id: 4300,
    zipCode: '91187',
    city: 'R\u00f6ttenbach',
    state: 'Bayern',
    community: 'Landkreis Roth',
    latitude: 49.15,
    longitude: 11.0333
  },
  {
    id: 4301,
    zipCode: '91189',
    city: 'Rohr',
    state: 'Bayern',
    community: 'Landkreis Roth',
    latitude: 49.3411,
    longitude: 10.8898
  },
  {
    id: 4302,
    zipCode: '91207',
    city: 'Lauf an der Pegnitz',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.5139,
    longitude: 11.2825
  },
  {
    id: 4303,
    zipCode: '91217',
    city: 'Hersbruck',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.5108,
    longitude: 11.4315
  },
  {
    id: 4304,
    zipCode: '91220',
    city: 'Schnaittach',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.5596,
    longitude: 11.3433
  },
  {
    id: 4305,
    zipCode: '91224',
    city: 'Pommelsbrunn',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.5044,
    longitude: 11.511
  },
  {
    id: 4306,
    zipCode: '91227',
    city: 'Leinburg',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.4517,
    longitude: 11.31
  },
  {
    id: 4307,
    zipCode: '91230',
    city: 'Happurg',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.4937,
    longitude: 11.4712
  },
  {
    id: 4308,
    zipCode: '91233',
    city: 'Neunkirchen am Sand',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.5246,
    longitude: 11.3196
  },
  {
    id: 4309,
    zipCode: '91235',
    city: 'Hartenstein',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.6,
    longitude: 11.5167
  },
  {
    id: 4310,
    zipCode: '91235',
    city: 'Velden',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.6139,
    longitude: 11.5101
  },
  {
    id: 4311,
    zipCode: '91236',
    city: 'Alfeld',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.4333,
    longitude: 11.55
  },
  {
    id: 4312,
    zipCode: '91238',
    city: 'Engelthal',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.4718,
    longitude: 11.3994
  },
  {
    id: 4313,
    zipCode: '91238',
    city: 'Offenhausen',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.4497,
    longitude: 11.4132
  },
  {
    id: 4314,
    zipCode: '91239',
    city: 'Henfenfeld',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.4985,
    longitude: 11.3906
  },
  {
    id: 4315,
    zipCode: '91241',
    city: 'Kirchensittenbach',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.556,
    longitude: 11.4223
  },
  {
    id: 4316,
    zipCode: '91242',
    city: 'Ottensoos',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.5095,
    longitude: 11.3416
  },
  {
    id: 4317,
    zipCode: '91244',
    city: 'Reichenschwand',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.5138,
    longitude: 11.3727
  },
  {
    id: 4318,
    zipCode: '91245',
    city: 'Simmelsdorf',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.5977,
    longitude: 11.339
  },
  {
    id: 4319,
    zipCode: '91247',
    city: 'Vorra',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.5572,
    longitude: 11.4942
  },
  {
    id: 4320,
    zipCode: '91284',
    city: 'Neuhaus an der Pegnitz',
    state: 'Bayern',
    community: 'N\u00fcrnberger Land',
    latitude: 49.628,
    longitude: 11.5507
  },
  {
    id: 4321,
    zipCode: '91315',
    city: 'H\u00f6chstadt an der Aisch',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.7062,
    longitude: 10.8133
  },
  {
    id: 4322,
    zipCode: '91325',
    city: 'Adelsdorf',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.7122,
    longitude: 10.895
  },
  {
    id: 4323,
    zipCode: '91334',
    city: 'Hemhofen',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.6833,
    longitude: 10.9333
  },
  {
    id: 4324,
    zipCode: '91341',
    city: 'R\u00f6ttenbach',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.6643,
    longitude: 10.9261
  },
  {
    id: 4325,
    zipCode: '91350',
    city: 'Gremsdorf',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.6951,
    longitude: 10.8322
  },
  {
    id: 4326,
    zipCode: '91413',
    city: 'Neustadt an der Aisch',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.5795,
    longitude: 10.6113
  },
  {
    id: 4327,
    zipCode: '91438',
    city: 'Bad Windsheim',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.5027,
    longitude: 10.4154
  },
  {
    id: 4328,
    zipCode: '91443',
    city: 'Scheinfeld',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.6693,
    longitude: 10.4655
  },
  {
    id: 4329,
    zipCode: '91448',
    city: 'Emskirchen',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.5528,
    longitude: 10.7128
  },
  {
    id: 4330,
    zipCode: '91452',
    city: 'Wilhermsdorf',
    state: 'Bayern',
    community: 'Landkreis F\u00fcrth',
    latitude: 49.4831,
    longitude: 10.7156
  },
  {
    id: 4331,
    zipCode: '91456',
    city: 'Diespeck',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.6,
    longitude: 10.6333
  },
  {
    id: 4332,
    zipCode: '91459',
    city: 'Markt Erlbach',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.4937,
    longitude: 10.6527
  },
  {
    id: 4333,
    zipCode: '91460',
    city: 'Baudenbach',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.6251,
    longitude: 10.536
  },
  {
    id: 4334,
    zipCode: '91462',
    city: 'Dachsbach',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.6405,
    longitude: 10.7065
  },
  {
    id: 4335,
    zipCode: '91463',
    city: 'Dietersheim',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.5563,
    longitude: 10.5407
  },
  {
    id: 4336,
    zipCode: '91465',
    city: 'Ergersheim',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.5167,
    longitude: 10.3333
  },
  {
    id: 4337,
    zipCode: '91466',
    city: 'Gerhardshofen',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.6312,
    longitude: 10.6913
  },
  {
    id: 4338,
    zipCode: '91468',
    city: 'Gutenstetten',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.6167,
    longitude: 10.6333
  },
  {
    id: 4339,
    zipCode: '91469',
    city: 'Hagenb\u00fcchach',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.5333,
    longitude: 10.7667
  },
  {
    id: 4340,
    zipCode: '91471',
    city: 'Illesheim',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.4802,
    longitude: 10.3817
  },
  {
    id: 4341,
    zipCode: '91472',
    city: 'Ipsheim',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.5275,
    longitude: 10.4818
  },
  {
    id: 4342,
    zipCode: '91474',
    city: 'Langenfeld',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.6167,
    longitude: 10.5167
  },
  {
    id: 4343,
    zipCode: '91475',
    city: 'Lonnerstadt',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.6988,
    longitude: 10.7671
  },
  {
    id: 4344,
    zipCode: '91477',
    city: 'Markt Bibart',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.6479,
    longitude: 10.4249
  },
  {
    id: 4345,
    zipCode: '91478',
    city: 'Markt Nordheim',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.5909,
    longitude: 10.3556
  },
  {
    id: 4346,
    zipCode: '91480',
    city: 'Markt Taschendorf',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.7011,
    longitude: 10.5556
  },
  {
    id: 4347,
    zipCode: '91481',
    city: 'M\u00fcnchsteinach',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.6394,
    longitude: 10.595
  },
  {
    id: 4348,
    zipCode: '91483',
    city: 'Oberscheinfeld',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.7083,
    longitude: 10.4342
  },
  {
    id: 4349,
    zipCode: '91484',
    city: 'Sugenheim',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.6028,
    longitude: 10.4356
  },
  {
    id: 4350,
    zipCode: '91486',
    city: 'Uehlfeld',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.6708,
    longitude: 10.7202
  },
  {
    id: 4351,
    zipCode: '91487',
    city: 'Vestenbergsgreuth',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.6876,
    longitude: 10.6516
  },
  {
    id: 4352,
    zipCode: '91489',
    city: 'Wilhelmsdorf',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.5642,
    longitude: 10.7372
  },
  {
    id: 4353,
    zipCode: '91522',
    city: 'Ansbach',
    state: 'Bayern',
    community: 'Ansbach',
    latitude: 49.3048,
    longitude: 10.5931
  },
  {
    id: 4354,
    zipCode: '91541',
    city: 'Rothenburg ob der Tauber',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.3789,
    longitude: 10.1871
  },
  {
    id: 4355,
    zipCode: '91550',
    city: 'Dinkelsb\u00fchl',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.0694,
    longitude: 10.3199
  },
  {
    id: 4356,
    zipCode: '91555',
    city: 'Feuchtwangen',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.1629,
    longitude: 10.3385
  },
  {
    id: 4357,
    zipCode: '91560',
    city: 'Heilsbronn',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.3357,
    longitude: 10.7874
  },
  {
    id: 4358,
    zipCode: '91564',
    city: 'Neuendettelsau',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.2833,
    longitude: 10.7833
  },
  {
    id: 4359,
    zipCode: '91567',
    city: 'Herrieden',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.2378,
    longitude: 10.5035
  },
  {
    id: 4360,
    zipCode: '91572',
    city: 'Bechhofen',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.1631,
    longitude: 10.5557
  },
  {
    id: 4361,
    zipCode: '91575',
    city: 'Windsbach',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.2479,
    longitude: 10.8265
  },
  {
    id: 4362,
    zipCode: '91578',
    city: 'Leutershausen',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.2987,
    longitude: 10.4119
  },
  {
    id: 4363,
    zipCode: '91580',
    city: 'Petersaurach',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.3,
    longitude: 10.75
  },
  {
    id: 4364,
    zipCode: '91583',
    city: 'Schillingsf\u00fcrst',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.2878,
    longitude: 10.2628
  },
  {
    id: 4365,
    zipCode: '91583',
    city: 'Diebach',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.3091,
    longitude: 10.1919
  },
  {
    id: 4366,
    zipCode: '91586',
    city: 'Lichtenau',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.2775,
    longitude: 10.6867
  },
  {
    id: 4367,
    zipCode: '91587',
    city: 'Adelshofen',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.4333,
    longitude: 10.1667
  },
  {
    id: 4368,
    zipCode: '91589',
    city: 'Aurach',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.25,
    longitude: 10.4167
  },
  {
    id: 4369,
    zipCode: '91590',
    city: 'Bruckberg',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.3599,
    longitude: 10.6992
  },
  {
    id: 4370,
    zipCode: '91592',
    city: 'Buch am Wald',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.3302,
    longitude: 10.3348
  },
  {
    id: 4371,
    zipCode: '91593',
    city: 'Burgbernheim',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.451,
    longitude: 10.3239
  },
  {
    id: 4372,
    zipCode: '91595',
    city: 'Burgoberbach',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.2333,
    longitude: 10.5833
  },
  {
    id: 4373,
    zipCode: '91596',
    city: 'Burk',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.1332,
    longitude: 10.4789
  },
  {
    id: 4374,
    zipCode: '91598',
    city: 'Colmberg',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.3548,
    longitude: 10.4116
  },
  {
    id: 4375,
    zipCode: '91599',
    city: 'Dentlein am Forst',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.1477,
    longitude: 10.4231
  },
  {
    id: 4376,
    zipCode: '91601',
    city: 'Domb\u00fchl',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.2535,
    longitude: 10.2854
  },
  {
    id: 4377,
    zipCode: '91602',
    city: 'D\u00fcrrwangen',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.1078,
    longitude: 10.385
  },
  {
    id: 4378,
    zipCode: '91604',
    city: 'Flachslanden',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.4407,
    longitude: 10.5224
  },
  {
    id: 4379,
    zipCode: '91605',
    city: 'Gallmersgarten',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.45,
    longitude: 10.2667
  },
  {
    id: 4380,
    zipCode: '91607',
    city: 'Gebsattel',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.35,
    longitude: 10.2
  },
  {
    id: 4381,
    zipCode: '91608',
    city: 'Geslau',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.3664,
    longitude: 10.3153
  },
  {
    id: 4382,
    zipCode: '91610',
    city: 'Insingen',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.3,
    longitude: 10.1667
  },
  {
    id: 4383,
    zipCode: '91611',
    city: 'Lehrberg',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.3457,
    longitude: 10.511
  },
  {
    id: 4384,
    zipCode: '91613',
    city: 'Marktbergel',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.4416,
    longitude: 10.3636
  },
  {
    id: 4385,
    zipCode: '91614',
    city: 'M\u00f6nchsroth',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.0185,
    longitude: 10.3586
  },
  {
    id: 4386,
    zipCode: '91616',
    city: 'Neusitz',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.3719,
    longitude: 10.2256
  },
  {
    id: 4387,
    zipCode: '91617',
    city: 'Oberdachstetten',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.4167,
    longitude: 10.4333
  },
  {
    id: 4388,
    zipCode: '91619',
    city: 'Obernzenn',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.4519,
    longitude: 10.4667
  },
  {
    id: 4389,
    zipCode: '91620',
    city: 'Ohrenbach',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.4706,
    longitude: 10.2101
  },
  {
    id: 4390,
    zipCode: '91622',
    city: 'R\u00fcgland',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.4,
    longitude: 10.5833
  },
  {
    id: 4391,
    zipCode: '91623',
    city: 'Sachsen',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.29,
    longitude: 10.6597
  },
  {
    id: 4392,
    zipCode: '91625',
    city: 'Schnelldorf',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.1705,
    longitude: 10.2321
  },
  {
    id: 4393,
    zipCode: '91626',
    city: 'Schopfloch',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.1192,
    longitude: 10.3077
  },
  {
    id: 4394,
    zipCode: '91628',
    city: 'Steinsfeld',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.4167,
    longitude: 10.2167
  },
  {
    id: 4395,
    zipCode: '91629',
    city: 'Weihenzell',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.35,
    longitude: 10.6167
  },
  {
    id: 4396,
    zipCode: '91631',
    city: 'Wettringen',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.2579,
    longitude: 10.1569
  },
  {
    id: 4397,
    zipCode: '91632',
    city: 'Wieseth',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.1667,
    longitude: 10.4833
  },
  {
    id: 4398,
    zipCode: '91634',
    city: 'Wilburgstetten',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.0243,
    longitude: 10.395
  },
  {
    id: 4399,
    zipCode: '91635',
    city: 'Windelsbach',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.4,
    longitude: 10.3
  },
  {
    id: 4400,
    zipCode: '91637',
    city: 'W\u00f6rnitz',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.2581,
    longitude: 10.2418
  },
  {
    id: 4401,
    zipCode: '91639',
    city: 'Wolframs-Eschenbach',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.2267,
    longitude: 10.7277
  },
  {
    id: 4402,
    zipCode: '91710',
    city: 'Gunzenhausen',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.1166,
    longitude: 10.7597
  },
  {
    id: 4403,
    zipCode: '91717',
    city: 'Wassertr\u00fcdingen',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.0433,
    longitude: 10.5991
  },
  {
    id: 4404,
    zipCode: '91719',
    city: 'Heidenheim',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.0172,
    longitude: 10.7435
  },
  {
    id: 4405,
    zipCode: '91720',
    city: 'Absberg',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.1444,
    longitude: 10.881
  },
  {
    id: 4406,
    zipCode: '91722',
    city: 'Arberg',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.1443,
    longitude: 10.6172
  },
  {
    id: 4407,
    zipCode: '91723',
    city: 'Dittenheim',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.0554,
    longitude: 10.792
  },
  {
    id: 4408,
    zipCode: '91725',
    city: 'Ehingen',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.0868,
    longitude: 10.5407
  },
  {
    id: 4409,
    zipCode: '91726',
    city: 'Gerolfingen',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.0534,
    longitude: 10.5115
  },
  {
    id: 4410,
    zipCode: '91728',
    city: 'Gnotzheim',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.0598,
    longitude: 10.7127
  },
  {
    id: 4411,
    zipCode: '91729',
    city: 'Haundorf',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.176,
    longitude: 10.7712
  },
  {
    id: 4412,
    zipCode: '91731',
    city: 'Langfurth',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.1011,
    longitude: 10.4536
  },
  {
    id: 4413,
    zipCode: '91732',
    city: 'Merkendorf',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.2036,
    longitude: 10.7042
  },
  {
    id: 4414,
    zipCode: '91734',
    city: 'Mitteleschenbach',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.2119,
    longitude: 10.7978
  },
  {
    id: 4415,
    zipCode: '91735',
    city: 'Muhr am See',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.1545,
    longitude: 10.7184
  },
  {
    id: 4416,
    zipCode: '91737',
    city: 'Ornbau',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.1762,
    longitude: 10.658
  },
  {
    id: 4417,
    zipCode: '91738',
    city: 'Pfofeld',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.1059,
    longitude: 10.8366
  },
  {
    id: 4418,
    zipCode: '91740',
    city: 'R\u00f6ckingen',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.0554,
    longitude: 10.5595
  },
  {
    id: 4419,
    zipCode: '91741',
    city: 'Theilenhofen',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.0822,
    longitude: 10.8528
  },
  {
    id: 4420,
    zipCode: '91743',
    city: 'Unterschwaningen',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.0798,
    longitude: 10.6218
  },
  {
    id: 4421,
    zipCode: '91744',
    city: 'Weiltingen',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.0388,
    longitude: 10.4505
  },
  {
    id: 4422,
    zipCode: '91746',
    city: 'Weidenbach',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.1982,
    longitude: 10.6449
  },
  {
    id: 4423,
    zipCode: '91747',
    city: 'Westheim',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.0,
    longitude: 10.6667
  },
  {
    id: 4424,
    zipCode: '91749',
    city: 'Wittelshofen',
    state: 'Bayern',
    community: 'Landkreis Ansbach',
    latitude: 49.0612,
    longitude: 10.4812
  },
  {
    id: 4425,
    zipCode: '91757',
    city: 'Treuchtlingen',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 48.9547,
    longitude: 10.9083
  },
  {
    id: 4426,
    zipCode: '91781',
    city: 'Wei\u00dfenburg in Bayern',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.0309,
    longitude: 10.9722
  },
  {
    id: 4427,
    zipCode: '91785',
    city: 'Pleinfeld',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.1047,
    longitude: 10.9819
  },
  {
    id: 4428,
    zipCode: '91788',
    city: 'Pappenheim',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 48.9338,
    longitude: 10.9743
  },
  {
    id: 4429,
    zipCode: '91790',
    city: 'Bergen',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.0735,
    longitude: 11.114
  },
  {
    id: 4430,
    zipCode: '91790',
    city: 'Raitenbuch',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.0147,
    longitude: 11.1249
  },
  {
    id: 4431,
    zipCode: '91790',
    city: 'Nennslingen',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.0471,
    longitude: 11.1305
  },
  {
    id: 4432,
    zipCode: '91790',
    city: 'Burgsalach',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.0332,
    longitude: 11.0977
  },
  {
    id: 4433,
    zipCode: '91792',
    city: 'Ellingen',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.0608,
    longitude: 10.9678
  },
  {
    id: 4434,
    zipCode: '91793',
    city: 'Alesheim',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.0465,
    longitude: 10.865
  },
  {
    id: 4435,
    zipCode: '91796',
    city: 'Ettenstatt',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.0775,
    longitude: 11.0554
  },
  {
    id: 4436,
    zipCode: '91798',
    city: 'H\u00f6ttingen',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.0626,
    longitude: 11.0053
  },
  {
    id: 4437,
    zipCode: '91799',
    city: 'Langenaltheim',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 48.8932,
    longitude: 10.9311
  },
  {
    id: 4438,
    zipCode: '91801',
    city: 'Markt Berolzheim',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.0096,
    longitude: 10.8447
  },
  {
    id: 4439,
    zipCode: '91802',
    city: 'Meinheim',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 49.0333,
    longitude: 10.8167
  },
  {
    id: 4440,
    zipCode: '91805',
    city: 'Polsingen',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 48.9207,
    longitude: 10.7115
  },
  {
    id: 4441,
    zipCode: '91807',
    city: 'Solnhofen',
    state: 'Bayern',
    community: 'Landkreis Wei\u00dfenburg-Gunzenhausen',
    latitude: 48.8958,
    longitude: 10.9956
  },
  {
    id: 4442,
    zipCode: '96152',
    city: 'Burghaslach',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.7331,
    longitude: 10.6007
  },
  {
    id: 4443,
    zipCode: '96172',
    city: 'M\u00fchlhausen',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.7544,
    longitude: 10.7756
  },
  {
    id: 4444,
    zipCode: '96193',
    city: 'Wachenroth',
    state: 'Bayern',
    community: 'Landkreis Erlangen-H\u00f6chstadt',
    latitude: 49.7519,
    longitude: 10.7134
  },
  {
    id: 4445,
    zipCode: '97215',
    city: 'Weigenheim',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.5758,
    longitude: 10.2644
  },
  {
    id: 4446,
    zipCode: '97215',
    city: 'Uffenheim',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.5441,
    longitude: 10.2329
  },
  {
    id: 4447,
    zipCode: '97215',
    city: 'Simmershofen',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.5333,
    longitude: 10.1333
  },
  {
    id: 4448,
    zipCode: '97258',
    city: 'Hemmersheim',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.5629,
    longitude: 10.0964
  },
  {
    id: 4449,
    zipCode: '97258',
    city: 'Oberickelsheim',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.6,
    longitude: 10.1333
  },
  {
    id: 4450,
    zipCode: '97258',
    city: 'Ippesheim',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.6021,
    longitude: 10.2255
  },
  {
    id: 4451,
    zipCode: '97258',
    city: 'Gollhofen',
    state: 'Bayern',
    community: 'Landkreis Neustadt an der Aisch-Bad Windsheim',
    latitude: 49.5814,
    longitude: 10.1252
  },
  {
    id: 4452,
    zipCode: '63739',
    city: 'Aschaffenburg',
    state: 'Bayern',
    community: 'Aschaffenburg',
    latitude: 49.9757,
    longitude: 9.1478
  },
  {
    id: 4453,
    zipCode: '63741',
    city: 'Aschaffenburg',
    state: 'Bayern',
    community: 'Aschaffenburg',
    latitude: 49.9751,
    longitude: 9.1314
  },
  {
    id: 4454,
    zipCode: '63743',
    city: 'Aschaffenburg',
    state: 'Bayern',
    community: 'Aschaffenburg',
    latitude: 49.9648,
    longitude: 9.1647
  },
  {
    id: 4455,
    zipCode: '63755',
    city: 'Alzenau in Unterfranken',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.0888,
    longitude: 9.0646
  },
  {
    id: 4456,
    zipCode: '63762',
    city: 'Gro\u00dfostheim',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 49.9199,
    longitude: 9.076
  },
  {
    id: 4457,
    zipCode: '63768',
    city: 'H\u00f6sbach',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.0065,
    longitude: 9.2076
  },
  {
    id: 4458,
    zipCode: '63773',
    city: 'Goldbach',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 49.9995,
    longitude: 9.1844
  },
  {
    id: 4459,
    zipCode: '63776',
    city: 'M\u00f6mbris',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.0692,
    longitude: 9.1637
  },
  {
    id: 4460,
    zipCode: '63785',
    city: 'Obernburg am Main',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.8358,
    longitude: 9.131
  },
  {
    id: 4461,
    zipCode: '63791',
    city: 'Karlstein am Main',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.0487,
    longitude: 9.0287
  },
  {
    id: 4462,
    zipCode: '63796',
    city: 'Kahl am Main',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.0698,
    longitude: 9.0055
  },
  {
    id: 4463,
    zipCode: '63801',
    city: 'Kleinostheim',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.0,
    longitude: 9.0667
  },
  {
    id: 4464,
    zipCode: '63808',
    city: 'Haibach',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 49.9644,
    longitude: 9.2072
  },
  {
    id: 4465,
    zipCode: '63811',
    city: 'Stockstadt am Main',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 49.97,
    longitude: 9.0715
  },
  {
    id: 4466,
    zipCode: '63814',
    city: 'Mainaschaff',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 49.9817,
    longitude: 9.09
  },
  {
    id: 4467,
    zipCode: '63820',
    city: 'Elsenfeld',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.8429,
    longitude: 9.1636
  },
  {
    id: 4468,
    zipCode: '63825',
    city: 'Blankenbach',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.0667,
    longitude: 9.2333
  },
  {
    id: 4469,
    zipCode: '63825',
    city: 'Westerngrund',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.1,
    longitude: 9.25
  },
  {
    id: 4470,
    zipCode: '63825',
    city: 'Sch\u00f6llkrippen',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.0855,
    longitude: 9.247
  },
  {
    id: 4471,
    zipCode: '63825',
    city: 'Sommerkahl',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.0696,
    longitude: 9.2568
  },
  {
    id: 4472,
    zipCode: '63826',
    city: 'Geiselbach',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.1233,
    longitude: 9.1966
  },
  {
    id: 4473,
    zipCode: '63828',
    city: 'Kleinkahl',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.1167,
    longitude: 9.2667
  },
  {
    id: 4474,
    zipCode: '63829',
    city: 'Krombach',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.0832,
    longitude: 9.2061
  },
  {
    id: 4475,
    zipCode: '63831',
    city: 'Wiesen',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.1167,
    longitude: 9.3667
  },
  {
    id: 4476,
    zipCode: '63834',
    city: 'Sulzbach am Main',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.9115,
    longitude: 9.1532
  },
  {
    id: 4477,
    zipCode: '63839',
    city: 'Kleinwallstadt',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.8746,
    longitude: 9.1693
  },
  {
    id: 4478,
    zipCode: '63840',
    city: 'Hausen',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.8697,
    longitude: 9.2103
  },
  {
    id: 4479,
    zipCode: '63843',
    city: 'Niedernberg',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.9122,
    longitude: 9.1369
  },
  {
    id: 4480,
    zipCode: '63846',
    city: 'Laufach',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.0167,
    longitude: 9.3
  },
  {
    id: 4481,
    zipCode: '63849',
    city: 'Leidersbach',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.9014,
    longitude: 9.2217
  },
  {
    id: 4482,
    zipCode: '63853',
    city: 'M\u00f6mlingen',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.8597,
    longitude: 9.0833
  },
  {
    id: 4483,
    zipCode: '63856',
    city: 'Bessenbach',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 49.9694,
    longitude: 9.2686
  },
  {
    id: 4484,
    zipCode: '63857',
    city: 'Waldaschaff',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 49.9753,
    longitude: 9.3019
  },
  {
    id: 4485,
    zipCode: '63860',
    city: 'Rothenbuch',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 49.9653,
    longitude: 9.3939
  },
  {
    id: 4486,
    zipCode: '63863',
    city: 'Eschau',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.8189,
    longitude: 9.2592
  },
  {
    id: 4487,
    zipCode: '63864',
    city: 'Glattbach',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.0,
    longitude: 9.15
  },
  {
    id: 4488,
    zipCode: '63867',
    city: 'Johannesberg',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.0316,
    longitude: 9.1425
  },
  {
    id: 4489,
    zipCode: '63868',
    city: 'Gro\u00dfwallstadt',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.8794,
    longitude: 9.1534
  },
  {
    id: 4490,
    zipCode: '63869',
    city: 'Heigenbr\u00fccken',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.0282,
    longitude: 9.3712
  },
  {
    id: 4491,
    zipCode: '63871',
    city: 'Heinrichsthal',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.0711,
    longitude: 9.343
  },
  {
    id: 4492,
    zipCode: '63872',
    city: 'Heimbuchenthal',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 49.8892,
    longitude: 9.2956
  },
  {
    id: 4493,
    zipCode: '63874',
    city: 'Dammbach',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 49.8577,
    longitude: 9.3276
  },
  {
    id: 4494,
    zipCode: '63875',
    city: 'Mespelbrunn',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 49.9144,
    longitude: 9.2919
  },
  {
    id: 4495,
    zipCode: '63877',
    city: 'Sailauf',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 50.0246,
    longitude: 9.2593
  },
  {
    id: 4496,
    zipCode: '63879',
    city: 'Weibersbrunn',
    state: 'Bayern',
    community: 'Landkreis Aschaffenburg',
    latitude: 49.9308,
    longitude: 9.3661
  },
  {
    id: 4497,
    zipCode: '63897',
    city: 'Miltenberg',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.7045,
    longitude: 9.2673
  },
  {
    id: 4498,
    zipCode: '63906',
    city: 'Erlenbach am Main',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.8034,
    longitude: 9.1631
  },
  {
    id: 4499,
    zipCode: '63911',
    city: 'Klingenberg am Main',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.7851,
    longitude: 9.1803
  },
  {
    id: 4500,
    zipCode: '63916',
    city: 'Amorbach',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.6444,
    longitude: 9.2218
  },
  {
    id: 4501,
    zipCode: '63920',
    city: 'Gro\u00dfheubach',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.7283,
    longitude: 9.2228
  },
  {
    id: 4502,
    zipCode: '63924',
    city: 'R\u00fcdenau',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.7114,
    longitude: 9.1792
  },
  {
    id: 4503,
    zipCode: '63924',
    city: 'Kleinheubach',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.7211,
    longitude: 9.2135
  },
  {
    id: 4504,
    zipCode: '63925',
    city: 'Laudenbach',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.7458,
    longitude: 9.1761
  },
  {
    id: 4505,
    zipCode: '63927',
    city: 'B\u00fcrgstadt',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.7148,
    longitude: 9.2692
  },
  {
    id: 4506,
    zipCode: '63928',
    city: 'Eichenb\u00fchl',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.7056,
    longitude: 9.3292
  },
  {
    id: 4507,
    zipCode: '63930',
    city: 'Neunkirchen',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.7072,
    longitude: 9.4025
  },
  {
    id: 4508,
    zipCode: '63931',
    city: 'Kirchzell',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.618,
    longitude: 9.1779
  },
  {
    id: 4509,
    zipCode: '63933',
    city: 'M\u00f6nchberg',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.7933,
    longitude: 9.2686
  },
  {
    id: 4510,
    zipCode: '63934',
    city: 'R\u00f6llbach',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.7731,
    longitude: 9.2461
  },
  {
    id: 4511,
    zipCode: '63936',
    city: 'Schneeberg',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.6402,
    longitude: 9.2506
  },
  {
    id: 4512,
    zipCode: '63937',
    city: 'Weilbach',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.6681,
    longitude: 9.2164
  },
  {
    id: 4513,
    zipCode: '63939',
    city: 'W\u00f6rth am Main',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.7972,
    longitude: 9.1539
  },
  {
    id: 4514,
    zipCode: '96106',
    city: 'Ebern',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.0955,
    longitude: 10.7983
  },
  {
    id: 4515,
    zipCode: '96126',
    city: 'Ermershausen',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.2085,
    longitude: 10.6258
  },
  {
    id: 4516,
    zipCode: '96126',
    city: 'Maroldsweisach',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.1958,
    longitude: 10.66
  },
  {
    id: 4517,
    zipCode: '96151',
    city: 'Breitbrunn',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.0167,
    longitude: 10.7
  },
  {
    id: 4518,
    zipCode: '96160',
    city: 'Geiselwind',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.7736,
    longitude: 10.4706
  },
  {
    id: 4519,
    zipCode: '96166',
    city: 'Kirchlauter',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.0443,
    longitude: 10.7178
  },
  {
    id: 4520,
    zipCode: '96170',
    city: 'Lisberg',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.882,
    longitude: 10.73
  },
  {
    id: 4521,
    zipCode: '96176',
    city: 'Pfarrweisach',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.15,
    longitude: 10.7333
  },
  {
    id: 4522,
    zipCode: '96181',
    city: 'Rauhenebrach',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 49.8833,
    longitude: 10.6167
  },
  {
    id: 4523,
    zipCode: '96184',
    city: 'Rentweinsdorf',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.0634,
    longitude: 10.7992
  },
  {
    id: 4524,
    zipCode: '96188',
    city: 'Stettfeld',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 49.9719,
    longitude: 10.7239
  },
  {
    id: 4525,
    zipCode: '96190',
    city: 'Untermerzbach',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.1275,
    longitude: 10.8563
  },
  {
    id: 4526,
    zipCode: '97070',
    city: 'W\u00fcrzburg',
    state: 'Bayern',
    community: 'W\u00fcrzburg',
    latitude: 49.7971,
    longitude: 9.9337
  },
  {
    id: 4527,
    zipCode: '97072',
    city: 'W\u00fcrzburg',
    state: 'Bayern',
    community: 'W\u00fcrzburg',
    latitude: 49.7829,
    longitude: 9.9366
  },
  {
    id: 4528,
    zipCode: '97074',
    city: 'W\u00fcrzburg',
    state: 'Bayern',
    community: 'W\u00fcrzburg',
    latitude: 49.7802,
    longitude: 9.9416
  },
  {
    id: 4529,
    zipCode: '97076',
    city: 'W\u00fcrzburg',
    state: 'Bayern',
    community: 'W\u00fcrzburg',
    latitude: 49.8044,
    longitude: 9.977
  },
  {
    id: 4530,
    zipCode: '97078',
    city: 'W\u00fcrzburg',
    state: 'Bayern',
    community: 'W\u00fcrzburg',
    latitude: 49.8118,
    longitude: 9.9635
  },
  {
    id: 4531,
    zipCode: '97080',
    city: 'W\u00fcrzburg',
    state: 'Bayern',
    community: 'W\u00fcrzburg',
    latitude: 49.8017,
    longitude: 9.9058
  },
  {
    id: 4532,
    zipCode: '97082',
    city: 'W\u00fcrzburg',
    state: 'Bayern',
    community: 'W\u00fcrzburg',
    latitude: 49.7899,
    longitude: 9.9206
  },
  {
    id: 4533,
    zipCode: '97084',
    city: 'W\u00fcrzburg',
    state: 'Bayern',
    community: 'W\u00fcrzburg',
    latitude: 49.7685,
    longitude: 9.9382
  },
  {
    id: 4534,
    zipCode: '97199',
    city: 'Ochsenfurt',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.6643,
    longitude: 10.0623
  },
  {
    id: 4535,
    zipCode: '97204',
    city: 'H\u00f6chberg',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7845,
    longitude: 9.8822
  },
  {
    id: 4536,
    zipCode: '97209',
    city: 'Veitsh\u00f6chheim',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.8328,
    longitude: 9.8817
  },
  {
    id: 4537,
    zipCode: '97218',
    city: 'Gerbrunn',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7753,
    longitude: 9.9936
  },
  {
    id: 4538,
    zipCode: '97222',
    city: 'Rimpar',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.8569,
    longitude: 9.9571
  },
  {
    id: 4539,
    zipCode: '97225',
    city: 'Zellingen',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.8974,
    longitude: 9.8175
  },
  {
    id: 4540,
    zipCode: '97228',
    city: 'Rottendorf',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7923,
    longitude: 10.0259
  },
  {
    id: 4541,
    zipCode: '97230',
    city: 'Estenfeld',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.829,
    longitude: 10.0059
  },
  {
    id: 4542,
    zipCode: '97232',
    city: 'Giebelstadt',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.6531,
    longitude: 9.9444
  },
  {
    id: 4543,
    zipCode: '97234',
    city: 'Reichenberg',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7319,
    longitude: 9.9148
  },
  {
    id: 4544,
    zipCode: '97236',
    city: 'Randersacker',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7602,
    longitude: 9.9828
  },
  {
    id: 4545,
    zipCode: '97237',
    city: 'Altertheim',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7167,
    longitude: 9.75
  },
  {
    id: 4546,
    zipCode: '97239',
    city: 'Aub',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.5527,
    longitude: 10.0653
  },
  {
    id: 4547,
    zipCode: '97241',
    city: 'Bergtheim',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.9,
    longitude: 10.0667
  },
  {
    id: 4548,
    zipCode: '97241',
    city: 'Oberpleichfeld',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.8769,
    longitude: 10.0868
  },
  {
    id: 4549,
    zipCode: '97243',
    city: 'Bieberehren',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.5173,
    longitude: 10.0091
  },
  {
    id: 4550,
    zipCode: '97244',
    city: 'B\u00fctthard',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.5991,
    longitude: 9.8799
  },
  {
    id: 4551,
    zipCode: '97246',
    city: 'Eibelstadt',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7239,
    longitude: 9.9996
  },
  {
    id: 4552,
    zipCode: '97247',
    city: 'Eisenheim',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.8833,
    longitude: 10.1667
  },
  {
    id: 4553,
    zipCode: '97249',
    city: 'Eisingen',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7597,
    longitude: 9.8311
  },
  {
    id: 4554,
    zipCode: '97250',
    city: 'Erlabrunn',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.8597,
    longitude: 9.8442
  },
  {
    id: 4555,
    zipCode: '97252',
    city: 'Frickenhausen am Main',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.6667,
    longitude: 10.0833
  },
  {
    id: 4556,
    zipCode: '97253',
    city: 'Gauk\u00f6nigshofen',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.6333,
    longitude: 10.0
  },
  {
    id: 4557,
    zipCode: '97255',
    city: 'Gelchsheim',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.5724,
    longitude: 10.0202
  },
  {
    id: 4558,
    zipCode: '97255',
    city: 'Sonderhofen',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.5931,
    longitude: 10.0025
  },
  {
    id: 4559,
    zipCode: '97256',
    city: 'Geroldshausen',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.6836,
    longitude: 9.9022
  },
  {
    id: 4560,
    zipCode: '97259',
    city: 'Greu\u00dfenheim',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.8167,
    longitude: 9.7667
  },
  {
    id: 4561,
    zipCode: '97261',
    city: 'G\u00fcntersleben',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.8697,
    longitude: 9.905
  },
  {
    id: 4562,
    zipCode: '97262',
    city: 'Hausen bei W\u00fcrzburg',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.9333,
    longitude: 10.0167
  },
  {
    id: 4563,
    zipCode: '97264',
    city: 'Helmstadt',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7618,
    longitude: 9.708
  },
  {
    id: 4564,
    zipCode: '97265',
    city: 'Hettstadt',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7994,
    longitude: 9.815
  },
  {
    id: 4565,
    zipCode: '97267',
    city: 'Himmelstadt',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.9239,
    longitude: 9.8017
  },
  {
    id: 4566,
    zipCode: '97268',
    city: 'Kirchheim',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.6561,
    longitude: 9.8578
  },
  {
    id: 4567,
    zipCode: '97270',
    city: 'Kist',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7428,
    longitude: 9.8439
  },
  {
    id: 4568,
    zipCode: '97271',
    city: 'Kleinrinderfeld',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7003,
    longitude: 9.8447
  },
  {
    id: 4569,
    zipCode: '97273',
    city: 'K\u00fcrnach',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.85,
    longitude: 10.0333
  },
  {
    id: 4570,
    zipCode: '97274',
    city: 'Leinach',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.8619,
    longitude: 9.8049
  },
  {
    id: 4571,
    zipCode: '97276',
    city: 'Margetsh\u00f6chheim',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.8375,
    longitude: 9.8639
  },
  {
    id: 4572,
    zipCode: '97277',
    city: 'Neubrunn',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7309,
    longitude: 9.6716
  },
  {
    id: 4573,
    zipCode: '97279',
    city: 'Prosselsheim',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.8631,
    longitude: 10.1267
  },
  {
    id: 4574,
    zipCode: '97280',
    city: 'Remlingen',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.8048,
    longitude: 9.6948
  },
  {
    id: 4575,
    zipCode: '97282',
    city: 'Retzstadt',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.9125,
    longitude: 9.8819
  },
  {
    id: 4576,
    zipCode: '97283',
    city: 'Riedenheim',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.5572,
    longitude: 9.9781
  },
  {
    id: 4577,
    zipCode: '97285',
    city: 'Tauberrettersheim',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.4944,
    longitude: 9.9367
  },
  {
    id: 4578,
    zipCode: '97285',
    city: 'R\u00f6ttingen',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.5097,
    longitude: 9.9708
  },
  {
    id: 4579,
    zipCode: '97286',
    city: 'Winterhausen',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7068,
    longitude: 10.0166
  },
  {
    id: 4580,
    zipCode: '97286',
    city: 'Sommerhausen',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7036,
    longitude: 10.0261
  },
  {
    id: 4581,
    zipCode: '97288',
    city: 'Theilheim',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.754,
    longitude: 10.0306
  },
  {
    id: 4582,
    zipCode: '97289',
    city: 'Th\u00fcngen',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.9414,
    longitude: 9.8586
  },
  {
    id: 4583,
    zipCode: '97291',
    city: 'Th\u00fcngersheim',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.8783,
    longitude: 9.8492
  },
  {
    id: 4584,
    zipCode: '97292',
    city: 'Holzkirchen',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7814,
    longitude: 9.6803
  },
  {
    id: 4585,
    zipCode: '97292',
    city: 'Uettingen',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7947,
    longitude: 9.7306
  },
  {
    id: 4586,
    zipCode: '97294',
    city: 'Unterpleichfeld',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.8689,
    longitude: 10.044
  },
  {
    id: 4587,
    zipCode: '97295',
    city: 'Waldbrunn',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7586,
    longitude: 9.8036
  },
  {
    id: 4588,
    zipCode: '97297',
    city: 'Waldb\u00fcttelbrunn',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.7883,
    longitude: 9.8467
  },
  {
    id: 4589,
    zipCode: '97299',
    city: 'Zell am Main',
    state: 'Bayern',
    community: 'Landkreis W\u00fcrzburg',
    latitude: 49.8121,
    longitude: 9.8696
  },
  {
    id: 4590,
    zipCode: '97318',
    city: 'Kitzingen',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.7397,
    longitude: 10.1507
  },
  {
    id: 4591,
    zipCode: '97318',
    city: 'Biebelried',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.7667,
    longitude: 10.0833
  },
  {
    id: 4592,
    zipCode: '97320',
    city: 'Sulzfeld am Main',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.7069,
    longitude: 10.1325
  },
  {
    id: 4593,
    zipCode: '97320',
    city: 'Buchbrunn',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.7598,
    longitude: 10.1369
  },
  {
    id: 4594,
    zipCode: '97320',
    city: 'Albertshofen',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.7667,
    longitude: 10.1667
  },
  {
    id: 4595,
    zipCode: '97320',
    city: 'Gro\u00dflangheim',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.7562,
    longitude: 10.2406
  },
  {
    id: 4596,
    zipCode: '97320',
    city: 'Mainstockheim',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.7716,
    longitude: 10.1481
  },
  {
    id: 4597,
    zipCode: '97332',
    city: 'Volkach',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.8635,
    longitude: 10.2281
  },
  {
    id: 4598,
    zipCode: '97334',
    city: 'Nordheim am Main',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.85,
    longitude: 10.1833
  },
  {
    id: 4599,
    zipCode: '97334',
    city: 'Sommerach',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.8292,
    longitude: 10.2079
  },
  {
    id: 4600,
    zipCode: '97337',
    city: 'Dettelbach',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.8029,
    longitude: 10.1652
  },
  {
    id: 4601,
    zipCode: '97340',
    city: 'Marktbreit',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.6654,
    longitude: 10.1481
  },
  {
    id: 4602,
    zipCode: '97340',
    city: 'Martinsheim',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.6235,
    longitude: 10.1488
  },
  {
    id: 4603,
    zipCode: '97340',
    city: 'Segnitz',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.6724,
    longitude: 10.1442
  },
  {
    id: 4604,
    zipCode: '97342',
    city: 'Marktsteft',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.6961,
    longitude: 10.1363
  },
  {
    id: 4605,
    zipCode: '97342',
    city: 'Obernbreit',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.6586,
    longitude: 10.1642
  },
  {
    id: 4606,
    zipCode: '97342',
    city: 'Seinsheim',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.6407,
    longitude: 10.2204
  },
  {
    id: 4607,
    zipCode: '97346',
    city: 'Iphofen',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.7024,
    longitude: 10.2604
  },
  {
    id: 4608,
    zipCode: '97348',
    city: 'R\u00f6delsee',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.7333,
    longitude: 10.25
  },
  {
    id: 4609,
    zipCode: '97348',
    city: 'Willanzheim',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.6801,
    longitude: 10.2325
  },
  {
    id: 4610,
    zipCode: '97348',
    city: 'Markt Einersheim',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.6866,
    longitude: 10.2916
  },
  {
    id: 4611,
    zipCode: '97350',
    city: 'Mainbernheim',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.7079,
    longitude: 10.219
  },
  {
    id: 4612,
    zipCode: '97353',
    city: 'Wiesentheid',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.7945,
    longitude: 10.3451
  },
  {
    id: 4613,
    zipCode: '97355',
    city: 'Abtswind',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.7701,
    longitude: 10.3732
  },
  {
    id: 4614,
    zipCode: '97355',
    city: 'Castell',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.7417,
    longitude: 10.3498
  },
  {
    id: 4615,
    zipCode: '97355',
    city: 'Wiesenbronn',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.75,
    longitude: 10.3
  },
  {
    id: 4616,
    zipCode: '97355',
    city: 'R\u00fcdenhausen',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.765,
    longitude: 10.3401
  },
  {
    id: 4617,
    zipCode: '97355',
    city: 'Kleinlangheim',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.7709,
    longitude: 10.2843
  },
  {
    id: 4618,
    zipCode: '97357',
    city: 'Prichsenstadt',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.8193,
    longitude: 10.3477
  },
  {
    id: 4619,
    zipCode: '97359',
    city: 'Schwarzach am Main',
    state: 'Bayern',
    community: 'Landkreis Kitzingen',
    latitude: 49.7996,
    longitude: 10.2298
  },
  {
    id: 4620,
    zipCode: '97412',
    city: 'Schweinfurt',
    state: 'Bayern',
    community: 'Schweinfurt',
    latitude: 50.05,
    longitude: 10.2333
  },
  {
    id: 4621,
    zipCode: '97421',
    city: 'Schweinfurt',
    state: 'Bayern',
    community: 'Schweinfurt',
    latitude: 50.0442,
    longitude: 10.2267
  },
  {
    id: 4622,
    zipCode: '97422',
    city: 'Schweinfurt',
    state: 'Bayern',
    community: 'Schweinfurt',
    latitude: 50.0545,
    longitude: 10.2441
  },
  {
    id: 4623,
    zipCode: '97424',
    city: 'Schweinfurt',
    state: 'Bayern',
    community: 'Schweinfurt',
    latitude: 50.0348,
    longitude: 10.2064
  },
  {
    id: 4624,
    zipCode: '97437',
    city: 'Ha\u00dffurt',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.0352,
    longitude: 10.5156
  },
  {
    id: 4625,
    zipCode: '97440',
    city: 'Werneck',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.982,
    longitude: 10.0988
  },
  {
    id: 4626,
    zipCode: '97447',
    city: 'Gerolzhofen',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.9002,
    longitude: 10.3483
  },
  {
    id: 4627,
    zipCode: '97447',
    city: 'Frankenwinheim',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.8873,
    longitude: 10.3143
  },
  {
    id: 4628,
    zipCode: '97450',
    city: 'Arnstein',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.9777,
    longitude: 9.9698
  },
  {
    id: 4629,
    zipCode: '97453',
    city: 'Schonungen',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 50.0501,
    longitude: 10.3081
  },
  {
    id: 4630,
    zipCode: '97456',
    city: 'Dittelbrunn',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 50.0721,
    longitude: 10.2197
  },
  {
    id: 4631,
    zipCode: '97461',
    city: 'Hofheim in Unterfranken',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.1368,
    longitude: 10.5232
  },
  {
    id: 4632,
    zipCode: '97464',
    city: 'Niederwerrn',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 50.0615,
    longitude: 10.1827
  },
  {
    id: 4633,
    zipCode: '97469',
    city: 'Gochsheim',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 50.0167,
    longitude: 10.2833
  },
  {
    id: 4634,
    zipCode: '97475',
    city: 'Zeil am Main',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.0024,
    longitude: 10.6098
  },
  {
    id: 4635,
    zipCode: '97478',
    city: 'Knetzgau',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 49.9833,
    longitude: 10.55
  },
  {
    id: 4636,
    zipCode: '97483',
    city: 'Eltmann',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 49.9715,
    longitude: 10.6671
  },
  {
    id: 4637,
    zipCode: '97486',
    city: 'K\u00f6nigsberg in Bayern',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.0808,
    longitude: 10.5676
  },
  {
    id: 4638,
    zipCode: '97488',
    city: 'Stadtlauringen',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 50.1871,
    longitude: 10.3616
  },
  {
    id: 4639,
    zipCode: '97490',
    city: 'Poppenhausen',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 50.1,
    longitude: 10.1424
  },
  {
    id: 4640,
    zipCode: '97491',
    city: 'Aidhausen',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.15,
    longitude: 10.4333
  },
  {
    id: 4641,
    zipCode: '97493',
    city: 'Bergrheinfeld',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 50.0103,
    longitude: 10.1809
  },
  {
    id: 4642,
    zipCode: '97494',
    city: 'Bundorf',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.2167,
    longitude: 10.5167
  },
  {
    id: 4643,
    zipCode: '97496',
    city: 'Burgpreppach',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.1415,
    longitude: 10.6498
  },
  {
    id: 4644,
    zipCode: '97497',
    city: 'Dingolshausen',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.9071,
    longitude: 10.3903
  },
  {
    id: 4645,
    zipCode: '97499',
    city: 'Donnersdorf',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.9667,
    longitude: 10.4167
  },
  {
    id: 4646,
    zipCode: '97500',
    city: 'Ebelsbach',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 49.9857,
    longitude: 10.6744
  },
  {
    id: 4647,
    zipCode: '97502',
    city: 'Euerbach',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 50.062,
    longitude: 10.1369
  },
  {
    id: 4648,
    zipCode: '97503',
    city: 'G\u00e4dheim',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.0333,
    longitude: 10.35
  },
  {
    id: 4649,
    zipCode: '97505',
    city: 'Geldersheim',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 50.0429,
    longitude: 10.1561
  },
  {
    id: 4650,
    zipCode: '97506',
    city: 'Grafenrheinfeld',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 50.0,
    longitude: 10.2
  },
  {
    id: 4651,
    zipCode: '97508',
    city: 'Grettstadt',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.9833,
    longitude: 10.3167
  },
  {
    id: 4652,
    zipCode: '97509',
    city: 'Kolitzheim',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.9167,
    longitude: 10.2333
  },
  {
    id: 4653,
    zipCode: '97511',
    city: 'L\u00fclsfeld',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.8681,
    longitude: 10.3213
  },
  {
    id: 4654,
    zipCode: '97513',
    city: 'Michelau im Steigerwald',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.9,
    longitude: 10.4333
  },
  {
    id: 4655,
    zipCode: '97514',
    city: 'Oberaurach',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 49.9271,
    longitude: 10.6333
  },
  {
    id: 4656,
    zipCode: '97516',
    city: 'Oberschwarzach',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.8605,
    longitude: 10.41
  },
  {
    id: 4657,
    zipCode: '97517',
    city: 'Rannungen',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.1654,
    longitude: 10.2048
  },
  {
    id: 4658,
    zipCode: '97519',
    city: 'Riedbach',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.1,
    longitude: 10.4667
  },
  {
    id: 4659,
    zipCode: '97520',
    city: 'R\u00f6thlein',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.9833,
    longitude: 10.2167
  },
  {
    id: 4660,
    zipCode: '97522',
    city: 'Sand am Main',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 49.9833,
    longitude: 10.6
  },
  {
    id: 4661,
    zipCode: '97523',
    city: 'Schwanfeld',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.9217,
    longitude: 10.1387
  },
  {
    id: 4662,
    zipCode: '97525',
    city: 'Schwebheim',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.9904,
    longitude: 10.2478
  },
  {
    id: 4663,
    zipCode: '97526',
    city: 'Sennfeld',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 50.039,
    longitude: 10.2599
  },
  {
    id: 4664,
    zipCode: '97528',
    city: 'Sulzdorf an der Lederhecke',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.2408,
    longitude: 10.5628
  },
  {
    id: 4665,
    zipCode: '97529',
    city: 'Sulzheim',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.95,
    longitude: 10.3333
  },
  {
    id: 4666,
    zipCode: '97531',
    city: 'Theres',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.0111,
    longitude: 10.4278
  },
  {
    id: 4667,
    zipCode: '97532',
    city: '\u00dcchtelhausen',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 50.0918,
    longitude: 10.2686
  },
  {
    id: 4668,
    zipCode: '97534',
    city: 'Waigolshausen',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.9643,
    longitude: 10.12
  },
  {
    id: 4669,
    zipCode: '97535',
    city: 'Wasserlosen',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 50.0948,
    longitude: 10.0302
  },
  {
    id: 4670,
    zipCode: '97537',
    city: 'Wipfeld',
    state: 'Bayern',
    community: 'Landkreis Schweinfurt',
    latitude: 49.9167,
    longitude: 10.1667
  },
  {
    id: 4671,
    zipCode: '97539',
    city: 'Wonfurt',
    state: 'Bayern',
    community: 'Landkreis Ha\u00dfberge',
    latitude: 50.0167,
    longitude: 10.4667
  },
  {
    id: 4672,
    zipCode: '97616',
    city: 'Salz',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.3084,
    longitude: 10.212
  },
  {
    id: 4673,
    zipCode: '97616',
    city: 'Bad Neustadt an der Saale',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.3217,
    longitude: 10.2067
  },
  {
    id: 4674,
    zipCode: '97618',
    city: 'Hohenroth',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.3167,
    longitude: 10.1833
  },
  {
    id: 4675,
    zipCode: '97618',
    city: 'W\u00fclfershausen an der Saale',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.3333,
    longitude: 10.3433
  },
  {
    id: 4676,
    zipCode: '97618',
    city: 'Heustreu',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.3549,
    longitude: 10.2607
  },
  {
    id: 4677,
    zipCode: '97618',
    city: 'Wollbach',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.3667,
    longitude: 10.2333
  },
  {
    id: 4678,
    zipCode: '97618',
    city: 'Unsleben',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.3794,
    longitude: 10.2531
  },
  {
    id: 4679,
    zipCode: '97618',
    city: 'Strahlungen',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.2833,
    longitude: 10.2333
  },
  {
    id: 4680,
    zipCode: '97618',
    city: 'Niederlauer',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.2941,
    longitude: 10.1771
  },
  {
    id: 4681,
    zipCode: '97618',
    city: 'Hollstadt',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.35,
    longitude: 10.3
  },
  {
    id: 4682,
    zipCode: '97618',
    city: 'R\u00f6delmaier',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.3198,
    longitude: 10.277
  },
  {
    id: 4683,
    zipCode: '97631',
    city: 'Bad K\u00f6nigshofen im Grabfeld',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.3008,
    longitude: 10.4689
  },
  {
    id: 4684,
    zipCode: '97633',
    city: 'Aubstadt',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.3333,
    longitude: 10.4333
  },
  {
    id: 4685,
    zipCode: '97633',
    city: 'Sulzfeld',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.2597,
    longitude: 10.4053
  },
  {
    id: 4686,
    zipCode: '97633',
    city: 'Gro\u00dfeibstadt',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.301,
    longitude: 10.4098
  },
  {
    id: 4687,
    zipCode: '97633',
    city: 'H\u00f6chheim',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.3667,
    longitude: 10.45
  },
  {
    id: 4688,
    zipCode: '97633',
    city: 'Saal an der Saale',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.3167,
    longitude: 10.3577
  },
  {
    id: 4689,
    zipCode: '97633',
    city: 'Trappstadt',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.3188,
    longitude: 10.5699
  },
  {
    id: 4690,
    zipCode: '97633',
    city: 'Gro\u00dfbardorf',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.2667,
    longitude: 10.3667
  },
  {
    id: 4691,
    zipCode: '97633',
    city: 'Herbstadt',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.3333,
    longitude: 10.5
  },
  {
    id: 4692,
    zipCode: '97638',
    city: 'Mellrichstadt',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.4285,
    longitude: 10.3033
  },
  {
    id: 4693,
    zipCode: '97640',
    city: 'Hendungen',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.3946,
    longitude: 10.352
  },
  {
    id: 4694,
    zipCode: '97640',
    city: 'Oberstreu',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.4034,
    longitude: 10.2878
  },
  {
    id: 4695,
    zipCode: '97640',
    city: 'Stockheim',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.4596,
    longitude: 10.273
  },
  {
    id: 4696,
    zipCode: '97645',
    city: 'Ostheim vor der Rh\u00f6n',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.46,
    longitude: 10.2306
  },
  {
    id: 4697,
    zipCode: '97647',
    city: 'Sondheim vor der Rh\u00f6n',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.4651,
    longitude: 10.1567
  },
  {
    id: 4698,
    zipCode: '97647',
    city: 'Hausen',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.5064,
    longitude: 10.1266
  },
  {
    id: 4699,
    zipCode: '97647',
    city: 'Willmars',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.5,
    longitude: 10.25
  },
  {
    id: 4700,
    zipCode: '97647',
    city: 'Nordheim vor der Rh\u00f6n',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.4782,
    longitude: 10.1842
  },
  {
    id: 4701,
    zipCode: '97650',
    city: 'Fladungen',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.5205,
    longitude: 10.1458
  },
  {
    id: 4702,
    zipCode: '97653',
    city: 'Bischofsheim an der Rh\u00f6n',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.4024,
    longitude: 10.0075
  },
  {
    id: 4703,
    zipCode: '97654',
    city: 'Bastheim',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.4008,
    longitude: 10.2037
  },
  {
    id: 4704,
    zipCode: '97656',
    city: 'Oberelsbach',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.4412,
    longitude: 10.1169
  },
  {
    id: 4705,
    zipCode: '97657',
    city: 'Sandberg',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.3482,
    longitude: 10.0081
  },
  {
    id: 4706,
    zipCode: '97659',
    city: 'Sch\u00f6nau an der Brend',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.381,
    longitude: 10.1044
  },
  {
    id: 4707,
    zipCode: '97688',
    city: 'Bad Kissingen',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.2023,
    longitude: 10.0778
  },
  {
    id: 4708,
    zipCode: '97702',
    city: 'M\u00fcnnerstadt',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.2464,
    longitude: 10.2019
  },
  {
    id: 4709,
    zipCode: '97705',
    city: 'Burkardroth',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.2713,
    longitude: 9.9916
  },
  {
    id: 4710,
    zipCode: '97708',
    city: 'Bad Bocklet',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.2665,
    longitude: 10.079
  },
  {
    id: 4711,
    zipCode: '97711',
    city: 'Thundorf in Unterfranken',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.201,
    longitude: 10.3191
  },
  {
    id: 4712,
    zipCode: '97711',
    city: 'Ma\u00dfbach',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.1832,
    longitude: 10.2752
  },
  {
    id: 4713,
    zipCode: '97714',
    city: 'Oerlenbach',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.15,
    longitude: 10.1333
  },
  {
    id: 4714,
    zipCode: '97717',
    city: 'Sulzthal',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.1323,
    longitude: 10.0347
  },
  {
    id: 4715,
    zipCode: '97717',
    city: 'Euerdorf',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.1485,
    longitude: 10.0233
  },
  {
    id: 4716,
    zipCode: '97717',
    city: 'Aura an der Saale',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.164,
    longitude: 10.007
  },
  {
    id: 4717,
    zipCode: '97720',
    city: 'N\u00fcdlingen',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.2206,
    longitude: 10.123
  },
  {
    id: 4718,
    zipCode: '97723',
    city: 'Oberthulba',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.199,
    longitude: 9.9588
  },
  {
    id: 4719,
    zipCode: '97724',
    city: 'Burglauer',
    state: 'Bayern',
    community: 'Landkreis Rh\u00f6n-Grabfeld',
    latitude: 50.2764,
    longitude: 10.1794
  },
  {
    id: 4720,
    zipCode: '97725',
    city: 'Elfershausen',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.1474,
    longitude: 9.9615
  },
  {
    id: 4721,
    zipCode: '97727',
    city: 'Fuchsstadt',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.1082,
    longitude: 9.9337
  },
  {
    id: 4722,
    zipCode: '97729',
    city: 'Ramsthal',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.1404,
    longitude: 10.0678
  },
  {
    id: 4723,
    zipCode: '97737',
    city: 'Gem\u00fcnden am Main',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 50.0495,
    longitude: 9.7059
  },
  {
    id: 4724,
    zipCode: '97753',
    city: 'Karlstadt',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.9603,
    longitude: 9.7724
  },
  {
    id: 4725,
    zipCode: '97762',
    city: 'Hammelburg',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.1163,
    longitude: 9.8914
  },
  {
    id: 4726,
    zipCode: '97769',
    city: 'Bad Br\u00fcckenau',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.3085,
    longitude: 9.7898
  },
  {
    id: 4727,
    zipCode: '97772',
    city: 'Wildflecken',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.3776,
    longitude: 9.9109
  },
  {
    id: 4728,
    zipCode: '97773',
    city: 'Aura im Sinngrund',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 50.1782,
    longitude: 9.5755
  },
  {
    id: 4729,
    zipCode: '97775',
    city: 'Burgsinn',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 50.1497,
    longitude: 9.6512
  },
  {
    id: 4730,
    zipCode: '97776',
    city: 'Eu\u00dfenheim',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.9859,
    longitude: 9.809
  },
  {
    id: 4731,
    zipCode: '97778',
    city: 'Fellen',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 50.15,
    longitude: 9.5833
  },
  {
    id: 4732,
    zipCode: '97779',
    city: 'Geroda',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.2806,
    longitude: 9.8955
  },
  {
    id: 4733,
    zipCode: '97780',
    city: 'G\u00f6ssenheim',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 50.0167,
    longitude: 9.7833
  },
  {
    id: 4734,
    zipCode: '97782',
    city: 'Gr\u00e4fendorf',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 50.1227,
    longitude: 9.7405
  },
  {
    id: 4735,
    zipCode: '97783',
    city: 'Karsbach',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 50.0409,
    longitude: 9.7853
  },
  {
    id: 4736,
    zipCode: '97785',
    city: 'Mittelsinn',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 50.1922,
    longitude: 9.617
  },
  {
    id: 4737,
    zipCode: '97786',
    city: 'Motten',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.3956,
    longitude: 9.7725
  },
  {
    id: 4738,
    zipCode: '97788',
    city: 'Neuendorf',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 50.0333,
    longitude: 9.65
  },
  {
    id: 4739,
    zipCode: '97789',
    city: 'Oberleichtersbach',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.2833,
    longitude: 9.8
  },
  {
    id: 4740,
    zipCode: '97791',
    city: 'Obersinn',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 50.2088,
    longitude: 9.6155
  },
  {
    id: 4741,
    zipCode: '97792',
    city: 'Riedenberg',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.3199,
    longitude: 9.861
  },
  {
    id: 4742,
    zipCode: '97794',
    city: 'Rieneck',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 50.0935,
    longitude: 9.648
  },
  {
    id: 4743,
    zipCode: '97795',
    city: 'Schondra',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.2681,
    longitude: 9.8628
  },
  {
    id: 4744,
    zipCode: '97797',
    city: 'Wartmannsroth',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.1667,
    longitude: 9.7833
  },
  {
    id: 4745,
    zipCode: '97799',
    city: 'Zeitlofs',
    state: 'Bayern',
    community: 'Landkreis Bad Kissingen',
    latitude: 50.2619,
    longitude: 9.6724
  },
  {
    id: 4746,
    zipCode: '97816',
    city: 'Lohr am Main',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.9892,
    longitude: 9.5722
  },
  {
    id: 4747,
    zipCode: '97828',
    city: 'Marktheidenfeld',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.8454,
    longitude: 9.6036
  },
  {
    id: 4748,
    zipCode: '97833',
    city: 'Frammersbach',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 50.0647,
    longitude: 9.4689
  },
  {
    id: 4749,
    zipCode: '97834',
    city: 'Birkenfeld',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.8586,
    longitude: 9.6956
  },
  {
    id: 4750,
    zipCode: '97836',
    city: 'Bischbrunn',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.8703,
    longitude: 9.4892
  },
  {
    id: 4751,
    zipCode: '97837',
    city: 'Erlenbach bei Marktheidenfeld',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.8193,
    longitude: 9.6273
  },
  {
    id: 4752,
    zipCode: '97839',
    city: 'Esselbach',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.8553,
    longitude: 9.5258
  },
  {
    id: 4753,
    zipCode: '97840',
    city: 'Hafenlohr',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.8694,
    longitude: 9.6022
  },
  {
    id: 4754,
    zipCode: '97842',
    city: 'Karbach',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.867,
    longitude: 9.6381
  },
  {
    id: 4755,
    zipCode: '97843',
    city: 'Neuh\u00fctten',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 50.0,
    longitude: 9.4167
  },
  {
    id: 4756,
    zipCode: '97845',
    city: 'Neustadt am Main',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.9302,
    longitude: 9.5681
  },
  {
    id: 4757,
    zipCode: '97846',
    city: 'Partenstein',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 50.0418,
    longitude: 9.5199
  },
  {
    id: 4758,
    zipCode: '97848',
    city: 'Rechtenbach',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.9831,
    longitude: 9.5083
  },
  {
    id: 4759,
    zipCode: '97849',
    city: 'Roden',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.8956,
    longitude: 9.6264
  },
  {
    id: 4760,
    zipCode: '97851',
    city: 'Rothenfels',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.8914,
    longitude: 9.5926
  },
  {
    id: 4761,
    zipCode: '97852',
    city: 'Schollbrunn',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.835,
    longitude: 9.4639
  },
  {
    id: 4762,
    zipCode: '97854',
    city: 'Steinfeld',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.9528,
    longitude: 9.6694
  },
  {
    id: 4763,
    zipCode: '97855',
    city: 'Triefenstein',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.8006,
    longitude: 9.6067
  },
  {
    id: 4764,
    zipCode: '97857',
    city: 'Urspringen',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.9017,
    longitude: 9.6712
  },
  {
    id: 4765,
    zipCode: '97859',
    city: 'Wiesthal',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 50.0333,
    longitude: 9.4333
  },
  {
    id: 4766,
    zipCode: '97892',
    city: 'Kreuzwertheim',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.7682,
    longitude: 9.5182
  },
  {
    id: 4767,
    zipCode: '97901',
    city: 'Altenbuch',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.8286,
    longitude: 9.4014
  },
  {
    id: 4768,
    zipCode: '97903',
    city: 'Collenberg',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.7435,
    longitude: 9.3203
  },
  {
    id: 4769,
    zipCode: '97904',
    city: 'Dorfprozelten',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.7806,
    longitude: 9.3803
  },
  {
    id: 4770,
    zipCode: '97906',
    city: 'Faulbach',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.7853,
    longitude: 9.4442
  },
  {
    id: 4771,
    zipCode: '97907',
    city: 'Hasloch',
    state: 'Bayern',
    community: 'Main-Spessart',
    latitude: 49.7919,
    longitude: 9.4936
  },
  {
    id: 4772,
    zipCode: '97909',
    city: 'Stadtprozelten',
    state: 'Bayern',
    community: 'Landkreis Miltenberg',
    latitude: 49.7847,
    longitude: 9.4118
  },
  {
    id: 4773,
    zipCode: '82297',
    city: 'Steindorf',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.2167,
    longitude: 11.0
  },
  {
    id: 4774,
    zipCode: '86150',
    city: 'Augsburg',
    state: 'Bayern',
    community: 'Augsburg',
    latitude: 48.3673,
    longitude: 10.8921
  },
  {
    id: 4775,
    zipCode: '86152',
    city: 'Augsburg',
    state: 'Bayern',
    community: 'Augsburg',
    latitude: 48.3718,
    longitude: 10.8925
  },
  {
    id: 4776,
    zipCode: '86153',
    city: 'Augsburg',
    state: 'Bayern',
    community: 'Augsburg',
    latitude: 48.3664,
    longitude: 10.9034
  },
  {
    id: 4777,
    zipCode: '86154',
    city: 'Augsburg',
    state: 'Bayern',
    community: 'Augsburg',
    latitude: 48.3932,
    longitude: 10.8814
  },
  {
    id: 4778,
    zipCode: '86156',
    city: 'Augsburg',
    state: 'Bayern',
    community: 'Augsburg',
    latitude: 48.3815,
    longitude: 10.8548
  },
  {
    id: 4779,
    zipCode: '86157',
    city: 'Augsburg',
    state: 'Bayern',
    community: 'Augsburg',
    latitude: 48.3643,
    longitude: 10.8761
  },
  {
    id: 4780,
    zipCode: '86159',
    city: 'Augsburg',
    state: 'Bayern',
    community: 'Augsburg',
    latitude: 48.3509,
    longitude: 10.895
  },
  {
    id: 4781,
    zipCode: '86161',
    city: 'Augsburg',
    state: 'Bayern',
    community: 'Augsburg',
    latitude: 48.3505,
    longitude: 10.9133
  },
  {
    id: 4782,
    zipCode: '86163',
    city: 'Augsburg',
    state: 'Bayern',
    community: 'Augsburg',
    latitude: 48.3553,
    longitude: 10.9431
  },
  {
    id: 4783,
    zipCode: '86165',
    city: 'Augsburg',
    state: 'Bayern',
    community: 'Augsburg',
    latitude: 48.3822,
    longitude: 10.9337
  },
  {
    id: 4784,
    zipCode: '86167',
    city: 'Augsburg',
    state: 'Bayern',
    community: 'Augsburg',
    latitude: 48.3877,
    longitude: 10.9161
  },
  {
    id: 4785,
    zipCode: '86169',
    city: 'Augsburg',
    state: 'Bayern',
    community: 'Augsburg',
    latitude: 48.405,
    longitude: 10.9061
  },
  {
    id: 4786,
    zipCode: '86179',
    city: 'Augsburg',
    state: 'Bayern',
    community: 'Augsburg',
    latitude: 48.3109,
    longitude: 10.9001
  },
  {
    id: 4787,
    zipCode: '86199',
    city: 'Augsburg',
    state: 'Bayern',
    community: 'Augsburg',
    latitude: 48.3291,
    longitude: 10.8578
  },
  {
    id: 4788,
    zipCode: '86316',
    city: 'Friedberg',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.3569,
    longitude: 10.9846
  },
  {
    id: 4789,
    zipCode: '86343',
    city: 'K\u00f6nigsbrunn',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.2751,
    longitude: 10.8918
  },
  {
    id: 4790,
    zipCode: '86356',
    city: 'Neus\u00e4\u00df',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.3925,
    longitude: 10.8333
  },
  {
    id: 4791,
    zipCode: '86368',
    city: 'Gersthofen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.4243,
    longitude: 10.8727
  },
  {
    id: 4792,
    zipCode: '86381',
    city: 'Krumbach',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.2418,
    longitude: 10.3632
  },
  {
    id: 4793,
    zipCode: '86391',
    city: 'Stadtbergen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.3664,
    longitude: 10.8464
  },
  {
    id: 4794,
    zipCode: '86399',
    city: 'Bobingen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.2709,
    longitude: 10.8339
  },
  {
    id: 4795,
    zipCode: '86405',
    city: 'Meitingen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.5459,
    longitude: 10.8518
  },
  {
    id: 4796,
    zipCode: '86415',
    city: 'Mering',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.2656,
    longitude: 10.9846
  },
  {
    id: 4797,
    zipCode: '86420',
    city: 'Diedorf',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.3532,
    longitude: 10.7821
  },
  {
    id: 4798,
    zipCode: '86424',
    city: 'Dinkelscherben',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.3483,
    longitude: 10.5889
  },
  {
    id: 4799,
    zipCode: '86438',
    city: 'Kissing',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.3038,
    longitude: 10.9709
  },
  {
    id: 4800,
    zipCode: '86441',
    city: 'Zusmarshausen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.4001,
    longitude: 10.5992
  },
  {
    id: 4801,
    zipCode: '86444',
    city: 'Affing',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.4667,
    longitude: 10.9833
  },
  {
    id: 4802,
    zipCode: '86447',
    city: 'Aindling',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.5136,
    longitude: 10.9531
  },
  {
    id: 4803,
    zipCode: '86447',
    city: 'Todtenweis',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.5171,
    longitude: 10.9286
  },
  {
    id: 4804,
    zipCode: '86450',
    city: 'Altenm\u00fcnster',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.465,
    longitude: 10.5906
  },
  {
    id: 4805,
    zipCode: '86453',
    city: 'Dasing',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.3848,
    longitude: 11.0467
  },
  {
    id: 4806,
    zipCode: '86456',
    city: 'Gablingen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.45,
    longitude: 10.8167
  },
  {
    id: 4807,
    zipCode: '86459',
    city: 'Gessertshausen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.329,
    longitude: 10.7328
  },
  {
    id: 4808,
    zipCode: '86462',
    city: 'Langweid am Lech',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.4833,
    longitude: 10.85
  },
  {
    id: 4809,
    zipCode: '86465',
    city: 'Welden',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.4551,
    longitude: 10.6609
  },
  {
    id: 4810,
    zipCode: '86465',
    city: 'Heretsried',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.4597,
    longitude: 10.736
  },
  {
    id: 4811,
    zipCode: '86470',
    city: 'Thannhausen',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.2833,
    longitude: 10.4692
  },
  {
    id: 4812,
    zipCode: '86473',
    city: 'Ziemetshausen',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.2924,
    longitude: 10.535
  },
  {
    id: 4813,
    zipCode: '86476',
    city: 'Neuburg an der Kammel',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.3028,
    longitude: 10.3613
  },
  {
    id: 4814,
    zipCode: '86477',
    city: 'Adelsried',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.4246,
    longitude: 10.7183
  },
  {
    id: 4815,
    zipCode: '86479',
    city: 'Aichen',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.229,
    longitude: 10.5395
  },
  {
    id: 4816,
    zipCode: '86480',
    city: 'Waltenhausen',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.1905,
    longitude: 10.3646
  },
  {
    id: 4817,
    zipCode: '86480',
    city: 'Aletshausen',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.1986,
    longitude: 10.3888
  },
  {
    id: 4818,
    zipCode: '86482',
    city: 'Aystetten',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.4056,
    longitude: 10.7774
  },
  {
    id: 4819,
    zipCode: '86483',
    city: 'Balzhausen',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.2423,
    longitude: 10.4937
  },
  {
    id: 4820,
    zipCode: '86485',
    city: 'Biberbach',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.5178,
    longitude: 10.8114
  },
  {
    id: 4821,
    zipCode: '86486',
    city: 'Bonstetten',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.44,
    longitude: 10.7053
  },
  {
    id: 4822,
    zipCode: '86488',
    city: 'Breitenthal',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.2378,
    longitude: 10.2995
  },
  {
    id: 4823,
    zipCode: '86489',
    city: 'Deisenhausen',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.2555,
    longitude: 10.327
  },
  {
    id: 4824,
    zipCode: '86491',
    city: 'Ebershausen',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.2055,
    longitude: 10.3156
  },
  {
    id: 4825,
    zipCode: '86494',
    city: 'Emersacker',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.4897,
    longitude: 10.6738
  },
  {
    id: 4826,
    zipCode: '86495',
    city: 'Eurasburg',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.3333,
    longitude: 11.0833
  },
  {
    id: 4827,
    zipCode: '86497',
    city: 'Horgau',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.3951,
    longitude: 10.6828
  },
  {
    id: 4828,
    zipCode: '86498',
    city: 'Kettershausen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.1833,
    longitude: 10.2667
  },
  {
    id: 4829,
    zipCode: '86500',
    city: 'Kutzenhausen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.342,
    longitude: 10.6946
  },
  {
    id: 4830,
    zipCode: '86502',
    city: 'Laugna',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.5333,
    longitude: 10.7
  },
  {
    id: 4831,
    zipCode: '86504',
    city: 'Merching',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.2459,
    longitude: 10.9853
  },
  {
    id: 4832,
    zipCode: '86505',
    city: 'M\u00fcnsterhausen',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.3097,
    longitude: 10.455
  },
  {
    id: 4833,
    zipCode: '86507',
    city: 'Oberottmarshausen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.2372,
    longitude: 10.8575
  },
  {
    id: 4834,
    zipCode: '86507',
    city: 'Kleinaitingen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.2185,
    longitude: 10.8692
  },
  {
    id: 4835,
    zipCode: '86508',
    city: 'Rehling',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.4833,
    longitude: 10.9333
  },
  {
    id: 4836,
    zipCode: '86510',
    city: 'Ried',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.2901,
    longitude: 11.0438
  },
  {
    id: 4837,
    zipCode: '86511',
    city: 'Schmiechen',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.2167,
    longitude: 10.9667
  },
  {
    id: 4838,
    zipCode: '86513',
    city: 'Ursberg',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.2643,
    longitude: 10.4459
  },
  {
    id: 4839,
    zipCode: '86514',
    city: 'Ustersbach',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.3167,
    longitude: 10.65
  },
  {
    id: 4840,
    zipCode: '86517',
    city: 'Wehringen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.25,
    longitude: 10.8
  },
  {
    id: 4841,
    zipCode: '86519',
    city: 'Wiesenbach',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.2667,
    longitude: 10.3333
  },
  {
    id: 4842,
    zipCode: '86551',
    city: 'Aichach',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.4576,
    longitude: 11.1341
  },
  {
    id: 4843,
    zipCode: '86554',
    city: 'P\u00f6ttmes',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.5838,
    longitude: 11.0876
  },
  {
    id: 4844,
    zipCode: '86556',
    city: 'K\u00fchbach',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.491,
    longitude: 11.1869
  },
  {
    id: 4845,
    zipCode: '86559',
    city: 'Adelzhausen',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.3567,
    longitude: 11.1385
  },
  {
    id: 4846,
    zipCode: '86568',
    city: 'Hollenbach',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.4833,
    longitude: 11.0667
  },
  {
    id: 4847,
    zipCode: '86570',
    city: 'Inchenhofen',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.5129,
    longitude: 11.1146
  },
  {
    id: 4848,
    zipCode: '86573',
    city: 'Obergriesbach',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.423,
    longitude: 11.0685
  },
  {
    id: 4849,
    zipCode: '86574',
    city: 'Petersdorf',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.5167,
    longitude: 11.0333
  },
  {
    id: 4850,
    zipCode: '86576',
    city: 'Schiltberg',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.4629,
    longitude: 11.2488
  },
  {
    id: 4851,
    zipCode: '86577',
    city: 'Sielenbach',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.4,
    longitude: 11.1667
  },
  {
    id: 4852,
    zipCode: '86609',
    city: 'Donauw\u00f6rth',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.718,
    longitude: 10.7793
  },
  {
    id: 4853,
    zipCode: '86637',
    city: 'Wertingen',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.5631,
    longitude: 10.6815
  },
  {
    id: 4854,
    zipCode: '86641',
    city: 'Rain',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.6903,
    longitude: 10.9161
  },
  {
    id: 4855,
    zipCode: '86647',
    city: 'Buttenwiesen',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.6,
    longitude: 10.7167
  },
  {
    id: 4856,
    zipCode: '86650',
    city: 'Wemding',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.8746,
    longitude: 10.7245
  },
  {
    id: 4857,
    zipCode: '86653',
    city: 'Monheim',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.8439,
    longitude: 10.8583
  },
  {
    id: 4858,
    zipCode: '86653',
    city: 'Daiting',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.7918,
    longitude: 10.9046
  },
  {
    id: 4859,
    zipCode: '86655',
    city: 'Harburg',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.7867,
    longitude: 10.6893
  },
  {
    id: 4860,
    zipCode: '86657',
    city: 'Bissingen',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.7169,
    longitude: 10.6177
  },
  {
    id: 4861,
    zipCode: '86660',
    city: 'Tapfheim',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.6732,
    longitude: 10.6838
  },
  {
    id: 4862,
    zipCode: '86663',
    city: 'Asbach-B\u00e4umenheim',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.6833,
    longitude: 10.8167
  },
  {
    id: 4863,
    zipCode: '86672',
    city: 'Thierhaupten',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.5653,
    longitude: 10.9086
  },
  {
    id: 4864,
    zipCode: '86674',
    city: 'Baar',
    state: 'Bayern',
    community: 'Landkreis Aichach-Friedberg',
    latitude: 48.5833,
    longitude: 10.9667
  },
  {
    id: 4865,
    zipCode: '86675',
    city: 'Buchdorf',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.7833,
    longitude: 10.8333
  },
  {
    id: 4866,
    zipCode: '86678',
    city: 'Ehingen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.6,
    longitude: 10.8
  },
  {
    id: 4867,
    zipCode: '86679',
    city: 'Ellgau',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.6,
    longitude: 10.8667
  },
  {
    id: 4868,
    zipCode: '86681',
    city: 'F\u00fcnfstetten',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.8321,
    longitude: 10.7654
  },
  {
    id: 4869,
    zipCode: '86682',
    city: 'Genderkingen',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.7,
    longitude: 10.8833
  },
  {
    id: 4870,
    zipCode: '86684',
    city: 'Holzheim',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.6112,
    longitude: 10.9484
  },
  {
    id: 4871,
    zipCode: '86685',
    city: 'Huisheim',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.8251,
    longitude: 10.7033
  },
  {
    id: 4872,
    zipCode: '86687',
    city: 'Kaisheim',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.7675,
    longitude: 10.7964
  },
  {
    id: 4873,
    zipCode: '86688',
    city: 'Marxheim',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.7415,
    longitude: 10.945
  },
  {
    id: 4874,
    zipCode: '86690',
    city: 'Mertingen',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.657,
    longitude: 10.8056
  },
  {
    id: 4875,
    zipCode: '86692',
    city: 'M\u00fcnster',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.6225,
    longitude: 10.9017
  },
  {
    id: 4876,
    zipCode: '86694',
    city: 'Niedersch\u00f6nenfeld',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.7167,
    longitude: 10.9333
  },
  {
    id: 4877,
    zipCode: '86695',
    city: 'Allmannshofen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.6126,
    longitude: 10.8093
  },
  {
    id: 4878,
    zipCode: '86695',
    city: 'Nordendorf',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.5948,
    longitude: 10.8318
  },
  {
    id: 4879,
    zipCode: '86698',
    city: 'Oberndorf am Lech',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.6667,
    longitude: 10.8667
  },
  {
    id: 4880,
    zipCode: '86700',
    city: 'Otting',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.8725,
    longitude: 10.8002
  },
  {
    id: 4881,
    zipCode: '86703',
    city: 'R\u00f6gling',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.85,
    longitude: 10.95
  },
  {
    id: 4882,
    zipCode: '86704',
    city: 'Tagmersheim',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.8167,
    longitude: 10.9667
  },
  {
    id: 4883,
    zipCode: '86707',
    city: 'K\u00fchlenthal',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.5667,
    longitude: 10.8167
  },
  {
    id: 4884,
    zipCode: '86707',
    city: 'Westendorf',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.5721,
    longitude: 10.8405
  },
  {
    id: 4885,
    zipCode: '86709',
    city: 'Wolferstadt',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.9035,
    longitude: 10.7813
  },
  {
    id: 4886,
    zipCode: '86720',
    city: 'N\u00f6rdlingen',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.8512,
    longitude: 10.4887
  },
  {
    id: 4887,
    zipCode: '86732',
    city: 'Oettingen in Bayern',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.9527,
    longitude: 10.6046
  },
  {
    id: 4888,
    zipCode: '86733',
    city: 'Alerheim',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.85,
    longitude: 10.6167
  },
  {
    id: 4889,
    zipCode: '86735',
    city: 'Amerdingen',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.7257,
    longitude: 10.4856
  },
  {
    id: 4890,
    zipCode: '86735',
    city: 'Forheim',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.7667,
    longitude: 10.45
  },
  {
    id: 4891,
    zipCode: '86736',
    city: 'Auhausen',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 49.0079,
    longitude: 10.6224
  },
  {
    id: 4892,
    zipCode: '86738',
    city: 'Deiningen',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.8667,
    longitude: 10.5667
  },
  {
    id: 4893,
    zipCode: '86739',
    city: 'Ederheim',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.8083,
    longitude: 10.4661
  },
  {
    id: 4894,
    zipCode: '86741',
    city: 'Ehingen am Ries',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.9642,
    longitude: 10.5543
  },
  {
    id: 4895,
    zipCode: '86742',
    city: 'Fremdingen',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.9724,
    longitude: 10.4575
  },
  {
    id: 4896,
    zipCode: '86744',
    city: 'Hainsfarth',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.9584,
    longitude: 10.6249
  },
  {
    id: 4897,
    zipCode: '86745',
    city: 'Hohenaltheim',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.784,
    longitude: 10.5349
  },
  {
    id: 4898,
    zipCode: '86747',
    city: 'Maihingen',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.9275,
    longitude: 10.4987
  },
  {
    id: 4899,
    zipCode: '86748',
    city: 'Marktoffingen',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.9257,
    longitude: 10.4708
  },
  {
    id: 4900,
    zipCode: '86750',
    city: 'Megesheim',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.9333,
    longitude: 10.65
  },
  {
    id: 4901,
    zipCode: '86751',
    city: 'M\u00f6nchsdeggingen',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.776,
    longitude: 10.5804
  },
  {
    id: 4902,
    zipCode: '86753',
    city: 'M\u00f6ttingen',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.8092,
    longitude: 10.5902
  },
  {
    id: 4903,
    zipCode: '86754',
    city: 'Munningen',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.9167,
    longitude: 10.6
  },
  {
    id: 4904,
    zipCode: '86756',
    city: 'Reimlingen',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.8167,
    longitude: 10.5167
  },
  {
    id: 4905,
    zipCode: '86757',
    city: 'Wallerstein',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.8874,
    longitude: 10.4759
  },
  {
    id: 4906,
    zipCode: '86759',
    city: 'Wechingen',
    state: 'Bayern',
    community: 'Landkreis Donau-Ries',
    latitude: 48.8923,
    longitude: 10.6133
  },
  {
    id: 4907,
    zipCode: '86807',
    city: 'Buchloe',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 48.0372,
    longitude: 10.7255
  },
  {
    id: 4908,
    zipCode: '86825',
    city: 'Bad W\u00f6rishofen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0067,
    longitude: 10.5967
  },
  {
    id: 4909,
    zipCode: '86830',
    city: 'Schwabm\u00fcnchen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.1793,
    longitude: 10.7568
  },
  {
    id: 4910,
    zipCode: '86833',
    city: 'Ettringen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.1,
    longitude: 10.65
  },
  {
    id: 4911,
    zipCode: '86836',
    city: 'Graben',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.1873,
    longitude: 10.8222
  },
  {
    id: 4912,
    zipCode: '86836',
    city: 'Klosterlechfeld',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.1559,
    longitude: 10.8299
  },
  {
    id: 4913,
    zipCode: '86836',
    city: 'Untermeitingen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.1608,
    longitude: 10.8069
  },
  {
    id: 4914,
    zipCode: '86842',
    city: 'T\u00fcrkheim',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.064,
    longitude: 10.6416
  },
  {
    id: 4915,
    zipCode: '86845',
    city: 'Gro\u00dfaitingen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.2275,
    longitude: 10.7795
  },
  {
    id: 4916,
    zipCode: '86850',
    city: 'Fischach',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.2905,
    longitude: 10.6559
  },
  {
    id: 4917,
    zipCode: '86853',
    city: 'Langerringen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.1459,
    longitude: 10.7589
  },
  {
    id: 4918,
    zipCode: '86854',
    city: 'Amberg',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0667,
    longitude: 10.6833
  },
  {
    id: 4919,
    zipCode: '86856',
    city: 'Hiltenfingen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.1609,
    longitude: 10.7175
  },
  {
    id: 4920,
    zipCode: '86860',
    city: 'Jengen',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.9993,
    longitude: 10.7257
  },
  {
    id: 4921,
    zipCode: '86862',
    city: 'Lamerdingen',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 48.092,
    longitude: 10.7398
  },
  {
    id: 4922,
    zipCode: '86863',
    city: 'Langenneufnach',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.2667,
    longitude: 10.6
  },
  {
    id: 4923,
    zipCode: '86865',
    city: 'Markt Wald',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.1368,
    longitude: 10.582
  },
  {
    id: 4924,
    zipCode: '86866',
    city: 'Mickhausen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.2417,
    longitude: 10.6403
  },
  {
    id: 4925,
    zipCode: '86868',
    city: 'Mittelneufnach',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.1764,
    longitude: 10.5975
  },
  {
    id: 4926,
    zipCode: '86869',
    city: 'Oberostendorf',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.9436,
    longitude: 10.7427
  },
  {
    id: 4927,
    zipCode: '86871',
    city: 'Rammingen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0667,
    longitude: 10.5833
  },
  {
    id: 4928,
    zipCode: '86872',
    city: 'Scherstetten',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.1803,
    longitude: 10.6401
  },
  {
    id: 4929,
    zipCode: '86874',
    city: 'Tussenhausen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.1022,
    longitude: 10.5607
  },
  {
    id: 4930,
    zipCode: '86875',
    city: 'Waal',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.9968,
    longitude: 10.7779
  },
  {
    id: 4931,
    zipCode: '86877',
    city: 'Walkertshofen',
    state: 'Bayern',
    community: 'Landkreis Augsburg',
    latitude: 48.2261,
    longitude: 10.5884
  },
  {
    id: 4932,
    zipCode: '86879',
    city: 'Wiedergeltingen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0395,
    longitude: 10.6741
  },
  {
    id: 4933,
    zipCode: '86983',
    city: 'Lechbruck',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.7016,
    longitude: 10.7949
  },
  {
    id: 4934,
    zipCode: '87435',
    city: 'Kempten',
    state: 'Bayern',
    community: 'Kempten (Allg\u00e4u)',
    latitude: 47.7184,
    longitude: 10.3132
  },
  {
    id: 4935,
    zipCode: '87437',
    city: 'Kempten',
    state: 'Bayern',
    community: 'Kempten (Allg\u00e4u)',
    latitude: 47.7229,
    longitude: 10.3288
  },
  {
    id: 4936,
    zipCode: '87439',
    city: 'Kempten',
    state: 'Bayern',
    community: 'Kempten (Allg\u00e4u)',
    latitude: 47.7177,
    longitude: 10.2989
  },
  {
    id: 4937,
    zipCode: '87448',
    city: 'Waltenhofen',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.6732,
    longitude: 10.307
  },
  {
    id: 4938,
    zipCode: '87452',
    city: 'Altusried',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.8041,
    longitude: 10.2143
  },
  {
    id: 4939,
    zipCode: '87459',
    city: 'Pfronten',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.5822,
    longitude: 10.5496
  },
  {
    id: 4940,
    zipCode: '87463',
    city: 'Dietmannsried',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.8079,
    longitude: 10.2895
  },
  {
    id: 4941,
    zipCode: '87466',
    city: 'Oy-Mittelberg',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.6333,
    longitude: 10.4333
  },
  {
    id: 4942,
    zipCode: '87471',
    city: 'Durach',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.6944,
    longitude: 10.3445
  },
  {
    id: 4943,
    zipCode: '87474',
    city: 'Buchenberg',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.6959,
    longitude: 10.2393
  },
  {
    id: 4944,
    zipCode: '87477',
    city: 'Sulzberg',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.6603,
    longitude: 10.3499
  },
  {
    id: 4945,
    zipCode: '87480',
    city: 'Weitnau',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.6417,
    longitude: 10.1273
  },
  {
    id: 4946,
    zipCode: '87484',
    city: 'Nesselwang',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.6234,
    longitude: 10.5024
  },
  {
    id: 4947,
    zipCode: '87487',
    city: 'Wiggensbach',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.7478,
    longitude: 10.2299
  },
  {
    id: 4948,
    zipCode: '87488',
    city: 'Betzigau',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.7333,
    longitude: 10.3833
  },
  {
    id: 4949,
    zipCode: '87490',
    city: 'Haldenwang',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.8,
    longitude: 10.35
  },
  {
    id: 4950,
    zipCode: '87493',
    city: 'Lauben',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.7833,
    longitude: 10.3
  },
  {
    id: 4951,
    zipCode: '87494',
    city: 'R\u00fcckholz',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.6667,
    longitude: 10.55
  },
  {
    id: 4952,
    zipCode: '87496',
    city: 'Untrasried',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.8333,
    longitude: 10.3833
  },
  {
    id: 4953,
    zipCode: '87497',
    city: 'Wertach',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.603,
    longitude: 10.4097
  },
  {
    id: 4954,
    zipCode: '87499',
    city: 'Wildpoldsried',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.7667,
    longitude: 10.4
  },
  {
    id: 4955,
    zipCode: '87509',
    city: 'Immenstadt im Allg\u00e4u',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.56,
    longitude: 10.2139
  },
  {
    id: 4956,
    zipCode: '87527',
    city: 'Sonthofen',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.5182,
    longitude: 10.2826
  },
  {
    id: 4957,
    zipCode: '87527',
    city: 'Ofterschwang',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.5,
    longitude: 10.2333
  },
  {
    id: 4958,
    zipCode: '87534',
    city: 'Oberstaufen',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.5557,
    longitude: 10.0224
  },
  {
    id: 4959,
    zipCode: '87538',
    city: 'Balderschwang',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.4667,
    longitude: 10.1
  },
  {
    id: 4960,
    zipCode: '87538',
    city: 'Fischen im Allg\u00e4u',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.4609,
    longitude: 10.2716
  },
  {
    id: 4961,
    zipCode: '87538',
    city: 'Bolsterlang',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.4667,
    longitude: 10.2333
  },
  {
    id: 4962,
    zipCode: '87538',
    city: 'Obermaiselstein',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.45,
    longitude: 10.2333
  },
  {
    id: 4963,
    zipCode: '87541',
    city: 'Bad Hindelang',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.5062,
    longitude: 10.3723
  },
  {
    id: 4964,
    zipCode: '87544',
    city: 'Blaichach',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.5421,
    longitude: 10.2585
  },
  {
    id: 4965,
    zipCode: '87545',
    city: 'Burgberg im Allg\u00e4u',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.5355,
    longitude: 10.2849
  },
  {
    id: 4966,
    zipCode: '87547',
    city: 'Missen-Wilhams',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.6,
    longitude: 10.1167
  },
  {
    id: 4967,
    zipCode: '87549',
    city: 'Rettenberg',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.5743,
    longitude: 10.2917
  },
  {
    id: 4968,
    zipCode: '87561',
    city: 'Oberstdorf',
    state: 'Bayern',
    community: 'Landkreis Oberallg\u00e4u',
    latitude: 47.4072,
    longitude: 10.2794
  },
  {
    id: 4969,
    zipCode: '87600',
    city: 'Kaufbeuren',
    state: 'Bayern',
    community: 'Kaufbeuren',
    latitude: 47.8824,
    longitude: 10.6219
  },
  {
    id: 4970,
    zipCode: '87616',
    city: 'Marktoberdorf',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.7796,
    longitude: 10.6171
  },
  {
    id: 4971,
    zipCode: '87616',
    city: 'Wald',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.7228,
    longitude: 10.5582
  },
  {
    id: 4972,
    zipCode: '87629',
    city: 'F\u00fcssen',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.5714,
    longitude: 10.7017
  },
  {
    id: 4973,
    zipCode: '87634',
    city: 'G\u00fcnzach',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.8249,
    longitude: 10.4355
  },
  {
    id: 4974,
    zipCode: '87634',
    city: 'Oberg\u00fcnzburg',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.8455,
    longitude: 10.4182
  },
  {
    id: 4975,
    zipCode: '87637',
    city: 'Eisenberg',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.6137,
    longitude: 10.6072
  },
  {
    id: 4976,
    zipCode: '87637',
    city: 'Seeg',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.65,
    longitude: 10.6
  },
  {
    id: 4977,
    zipCode: '87640',
    city: 'Biessenhofen',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.8306,
    longitude: 10.6402
  },
  {
    id: 4978,
    zipCode: '87642',
    city: 'Halblech',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.6316,
    longitude: 10.8202
  },
  {
    id: 4979,
    zipCode: '87645',
    city: 'Schwangau',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.5604,
    longitude: 10.7721
  },
  {
    id: 4980,
    zipCode: '87647',
    city: 'Kraftisried',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.7793,
    longitude: 10.4709
  },
  {
    id: 4981,
    zipCode: '87647',
    city: 'Unterthingau',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.7715,
    longitude: 10.5045
  },
  {
    id: 4982,
    zipCode: '87648',
    city: 'Aitrang',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.8167,
    longitude: 10.5333
  },
  {
    id: 4983,
    zipCode: '87650',
    city: 'Baisweil',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.9444,
    longitude: 10.5401
  },
  {
    id: 4984,
    zipCode: '87651',
    city: 'Bidingen',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.8297,
    longitude: 10.7262
  },
  {
    id: 4985,
    zipCode: '87653',
    city: 'Eggenthal',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.9167,
    longitude: 10.5167
  },
  {
    id: 4986,
    zipCode: '87654',
    city: 'Friesenried',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.8748,
    longitude: 10.5346
  },
  {
    id: 4987,
    zipCode: '87656',
    city: 'Germaringen',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.9232,
    longitude: 10.6721
  },
  {
    id: 4988,
    zipCode: '87657',
    city: 'G\u00f6risried',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.7067,
    longitude: 10.5101
  },
  {
    id: 4989,
    zipCode: '87659',
    city: 'Hopferau',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.6167,
    longitude: 10.6333
  },
  {
    id: 4990,
    zipCode: '87660',
    city: 'Irsee',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.9082,
    longitude: 10.5718
  },
  {
    id: 4991,
    zipCode: '87662',
    city: 'Osterzell',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.8833,
    longitude: 10.75
  },
  {
    id: 4992,
    zipCode: '87662',
    city: 'Kaltental',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.9,
    longitude: 10.75
  },
  {
    id: 4993,
    zipCode: '87663',
    city: 'Lengenwang',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.7,
    longitude: 10.6
  },
  {
    id: 4994,
    zipCode: '87665',
    city: 'Mauerstetten',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.8936,
    longitude: 10.6713
  },
  {
    id: 4995,
    zipCode: '87666',
    city: 'Pforzen',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.93,
    longitude: 10.6136
  },
  {
    id: 4996,
    zipCode: '87668',
    city: 'Rieden',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.95,
    longitude: 10.65
  },
  {
    id: 4997,
    zipCode: '87669',
    city: 'Rieden am Forggensee',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.6167,
    longitude: 10.7167
  },
  {
    id: 4998,
    zipCode: '87671',
    city: 'Ronsberg',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.8958,
    longitude: 10.4157
  },
  {
    id: 4999,
    zipCode: '87672',
    city: 'Ro\u00dfhaupten',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.65,
    longitude: 10.7167
  },
  {
    id: 5000,
    zipCode: '87674',
    city: 'Ruderatshofen',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.8167,
    longitude: 10.5833
  },
  {
    id: 5001,
    zipCode: '87675',
    city: 'Rettenbach am Auerberg',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.7739,
    longitude: 10.75
  },
  {
    id: 5002,
    zipCode: '87675',
    city: 'St\u00f6tten am Auerberg',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.7387,
    longitude: 10.6888
  },
  {
    id: 5003,
    zipCode: '87677',
    city: 'St\u00f6ttwang',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.8833,
    longitude: 10.7167
  },
  {
    id: 5004,
    zipCode: '87679',
    city: 'Westendorf',
    state: 'Bayern',
    community: 'Landkreis Ostallg\u00e4u',
    latitude: 47.9333,
    longitude: 10.7167
  },
  {
    id: 5005,
    zipCode: '87700',
    city: 'Memmingen',
    state: 'Bayern',
    community: 'Memmingen',
    latitude: 47.9837,
    longitude: 10.1853
  },
  {
    id: 5006,
    zipCode: '87719',
    city: 'Mindelheim',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0458,
    longitude: 10.4922
  },
  {
    id: 5007,
    zipCode: '87724',
    city: 'Ottobeuren',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 47.9413,
    longitude: 10.2997
  },
  {
    id: 5008,
    zipCode: '87727',
    city: 'Babenhausen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.145,
    longitude: 10.2533
  },
  {
    id: 5009,
    zipCode: '87730',
    city: 'Bad Gr\u00f6nenbach',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 47.8771,
    longitude: 10.2221
  },
  {
    id: 5010,
    zipCode: '87733',
    city: 'Markt Rettenbach',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 47.9473,
    longitude: 10.3961
  },
  {
    id: 5011,
    zipCode: '87734',
    city: 'Benningen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 47.9667,
    longitude: 10.2167
  },
  {
    id: 5012,
    zipCode: '87736',
    city: 'B\u00f6hen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 47.8833,
    longitude: 10.3
  },
  {
    id: 5013,
    zipCode: '87737',
    city: 'Boos',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0752,
    longitude: 10.1952
  },
  {
    id: 5014,
    zipCode: '87739',
    city: 'Breitenbrunn',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.1333,
    longitude: 10.4
  },
  {
    id: 5015,
    zipCode: '87740',
    city: 'Buxheim',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0,
    longitude: 10.1333
  },
  {
    id: 5016,
    zipCode: '87742',
    city: 'Dirlewang',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0019,
    longitude: 10.5031
  },
  {
    id: 5017,
    zipCode: '87742',
    city: 'Apfeltrach',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0167,
    longitude: 10.5
  },
  {
    id: 5018,
    zipCode: '87743',
    city: 'Egg an der G\u00fcnz',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0871,
    longitude: 10.2849
  },
  {
    id: 5019,
    zipCode: '87745',
    city: 'Eppishausen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.1667,
    longitude: 10.5167
  },
  {
    id: 5020,
    zipCode: '87746',
    city: 'Erkheim',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0373,
    longitude: 10.3357
  },
  {
    id: 5021,
    zipCode: '87748',
    city: 'Fellheim',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0728,
    longitude: 10.1522
  },
  {
    id: 5022,
    zipCode: '87749',
    city: 'Hawangen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 47.9667,
    longitude: 10.2667
  },
  {
    id: 5023,
    zipCode: '87751',
    city: 'Heimertingen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0333,
    longitude: 10.15
  },
  {
    id: 5024,
    zipCode: '87752',
    city: 'Holzg\u00fcnz',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.025,
    longitude: 10.259
  },
  {
    id: 5025,
    zipCode: '87754',
    city: 'Kammlach',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.05,
    longitude: 10.4167
  },
  {
    id: 5026,
    zipCode: '87755',
    city: 'Kirchhaslach',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.1504,
    longitude: 10.3102
  },
  {
    id: 5027,
    zipCode: '87757',
    city: 'Kirchheim in Schwaben',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.187,
    longitude: 10.4661
  },
  {
    id: 5028,
    zipCode: '87758',
    city: 'Kronburg',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 47.9043,
    longitude: 10.1572
  },
  {
    id: 5029,
    zipCode: '87760',
    city: 'Lachen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 47.9459,
    longitude: 10.2394
  },
  {
    id: 5030,
    zipCode: '87761',
    city: 'Lauben',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0593,
    longitude: 10.2901
  },
  {
    id: 5031,
    zipCode: '87763',
    city: 'Lautrach',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 47.8982,
    longitude: 10.1178
  },
  {
    id: 5032,
    zipCode: '87764',
    city: 'Legau',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 47.8563,
    longitude: 10.1298
  },
  {
    id: 5033,
    zipCode: '87766',
    city: 'Memmingerberg',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 47.988,
    longitude: 10.2229
  },
  {
    id: 5034,
    zipCode: '87767',
    city: 'Niederrieden',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0576,
    longitude: 10.1832
  },
  {
    id: 5035,
    zipCode: '87769',
    city: 'Oberrieden',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0889,
    longitude: 10.4261
  },
  {
    id: 5036,
    zipCode: '87770',
    city: 'Obersch\u00f6negg',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.1085,
    longitude: 10.2985
  },
  {
    id: 5037,
    zipCode: '87772',
    city: 'Pfaffenhausen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.1188,
    longitude: 10.455
  },
  {
    id: 5038,
    zipCode: '87773',
    city: 'Ple\u00df',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.1,
    longitude: 10.15
  },
  {
    id: 5039,
    zipCode: '87775',
    city: 'Salgen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.1307,
    longitude: 10.4789
  },
  {
    id: 5040,
    zipCode: '87776',
    city: 'Sontheim',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.007,
    longitude: 10.3546
  },
  {
    id: 5041,
    zipCode: '87778',
    city: 'Stetten',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0238,
    longitude: 10.4447
  },
  {
    id: 5042,
    zipCode: '87779',
    city: 'Trunkelsberg',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0,
    longitude: 10.2167
  },
  {
    id: 5043,
    zipCode: '87781',
    city: 'Ungerhausen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0057,
    longitude: 10.2667
  },
  {
    id: 5044,
    zipCode: '87782',
    city: 'Unteregg',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 47.9667,
    longitude: 10.4667
  },
  {
    id: 5045,
    zipCode: '87784',
    city: 'Westerheim',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.0167,
    longitude: 10.3
  },
  {
    id: 5046,
    zipCode: '87785',
    city: 'Winterrieden',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 48.1212,
    longitude: 10.2258
  },
  {
    id: 5047,
    zipCode: '87787',
    city: 'Wolfertschwenden',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 47.8935,
    longitude: 10.2672
  },
  {
    id: 5048,
    zipCode: '87789',
    city: 'Woringen',
    state: 'Bayern',
    community: 'Landkreis Unterallg\u00e4u',
    latitude: 47.9167,
    longitude: 10.2
  },
  {
    id: 5049,
    zipCode: '88131',
    city: 'Lindau (Bodensee)',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.5501,
    longitude: 9.7085
  },
  {
    id: 5050,
    zipCode: '88131',
    city: 'Bodolz',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.5667,
    longitude: 9.6667
  },
  {
    id: 5051,
    zipCode: '88138',
    city: 'Sigmarszell',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.5833,
    longitude: 9.7667
  },
  {
    id: 5052,
    zipCode: '88138',
    city: 'Wei\u00dfensberg',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.5813,
    longitude: 9.7259
  },
  {
    id: 5053,
    zipCode: '88138',
    city: 'Hergensweiler',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.6167,
    longitude: 9.7833
  },
  {
    id: 5054,
    zipCode: '88142',
    city: 'Wasserburg (Bodensee)',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.5667,
    longitude: 9.6333
  },
  {
    id: 5055,
    zipCode: '88145',
    city: 'Hergatz',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.65,
    longitude: 9.8333
  },
  {
    id: 5056,
    zipCode: '88145',
    city: 'Opfenbach',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.6333,
    longitude: 9.8333
  },
  {
    id: 5057,
    zipCode: '88149',
    city: 'Nonnenhorn',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.5739,
    longitude: 9.6104
  },
  {
    id: 5058,
    zipCode: '88161',
    city: 'Lindenberg im Allg\u00e4u',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.6028,
    longitude: 9.8855
  },
  {
    id: 5059,
    zipCode: '88167',
    city: 'Gestratz',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.65,
    longitude: 9.9833
  },
  {
    id: 5060,
    zipCode: '88167',
    city: 'R\u00f6thenbach (Allg\u00e4u)',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.6167,
    longitude: 9.9833
  },
  {
    id: 5061,
    zipCode: '88167',
    city: 'Maierh\u00f6fen',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.65,
    longitude: 10.05
  },
  {
    id: 5062,
    zipCode: '88167',
    city: 'Gr\u00fcnenbach',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.6286,
    longitude: 10.0084
  },
  {
    id: 5063,
    zipCode: '88167',
    city: 'Stiefenhofen',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.5932,
    longitude: 10.0037
  },
  {
    id: 5064,
    zipCode: '88171',
    city: 'Weiler-Simmerberg',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.5826,
    longitude: 9.9135
  },
  {
    id: 5065,
    zipCode: '88175',
    city: 'Scheidegg',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.5814,
    longitude: 9.8483
  },
  {
    id: 5066,
    zipCode: '88178',
    city: 'Heimenkirch',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.6296,
    longitude: 9.903
  },
  {
    id: 5067,
    zipCode: '88179',
    city: 'Oberreute',
    state: 'Bayern',
    community: 'Landkreis Lindau',
    latitude: 47.563,
    longitude: 9.9445
  },
  {
    id: 5068,
    zipCode: '89231',
    city: 'Neu-Ulm',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.4,
    longitude: 10.0167
  },
  {
    id: 5069,
    zipCode: '89233',
    city: 'Neu-Ulm',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.4,
    longitude: 10.0167
  },
  {
    id: 5070,
    zipCode: '89250',
    city: 'Senden',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.3244,
    longitude: 10.0444
  },
  {
    id: 5071,
    zipCode: '89257',
    city: 'Illertissen',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.2234,
    longitude: 10.1035
  },
  {
    id: 5072,
    zipCode: '89264',
    city: 'Wei\u00dfenhorn',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.305,
    longitude: 10.1605
  },
  {
    id: 5073,
    zipCode: '89269',
    city: 'V\u00f6hringen',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.2784,
    longitude: 10.0824
  },
  {
    id: 5074,
    zipCode: '89275',
    city: 'Elchingen',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.45,
    longitude: 10.1
  },
  {
    id: 5075,
    zipCode: '89278',
    city: 'Nersingen',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.4283,
    longitude: 10.1236
  },
  {
    id: 5076,
    zipCode: '89281',
    city: 'Altenstadt',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.1603,
    longitude: 10.1144
  },
  {
    id: 5077,
    zipCode: '89284',
    city: 'Pfaffenhofen an der Roth',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.3545,
    longitude: 10.1618
  },
  {
    id: 5078,
    zipCode: '89287',
    city: 'Bellenberg',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.2573,
    longitude: 10.0909
  },
  {
    id: 5079,
    zipCode: '89290',
    city: 'Buch',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.2248,
    longitude: 10.1805
  },
  {
    id: 5080,
    zipCode: '89291',
    city: 'Holzheim',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.3833,
    longitude: 10.1
  },
  {
    id: 5081,
    zipCode: '89293',
    city: 'Kellm\u00fcnz',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.1216,
    longitude: 10.1281
  },
  {
    id: 5082,
    zipCode: '89294',
    city: 'Oberroth',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.1758,
    longitude: 10.1891
  },
  {
    id: 5083,
    zipCode: '89296',
    city: 'Osterberg',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.15,
    longitude: 10.1667
  },
  {
    id: 5084,
    zipCode: '89297',
    city: 'Roggenburg',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.2759,
    longitude: 10.2314
  },
  {
    id: 5085,
    zipCode: '89299',
    city: 'Unterroth',
    state: 'Bayern',
    community: 'Neu-Ulm',
    latitude: 48.1956,
    longitude: 10.1711
  },
  {
    id: 5086,
    zipCode: '89312',
    city: 'G\u00fcnzburg',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.456,
    longitude: 10.277
  },
  {
    id: 5087,
    zipCode: '89331',
    city: 'Burgau',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.4316,
    longitude: 10.4099
  },
  {
    id: 5088,
    zipCode: '89335',
    city: 'Ichenhausen',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.3712,
    longitude: 10.3071
  },
  {
    id: 5089,
    zipCode: '89340',
    city: 'Leipheim',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.45,
    longitude: 10.2228
  },
  {
    id: 5090,
    zipCode: '89343',
    city: 'Jettingen-Scheppach',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.3896,
    longitude: 10.4381
  },
  {
    id: 5091,
    zipCode: '89344',
    city: 'Aislingen',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.5065,
    longitude: 10.4578
  },
  {
    id: 5092,
    zipCode: '89346',
    city: 'Bibertal',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.4,
    longitude: 10.2
  },
  {
    id: 5093,
    zipCode: '89347',
    city: 'Bubesheim',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.4333,
    longitude: 10.25
  },
  {
    id: 5094,
    zipCode: '89349',
    city: 'Burtenbach',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.3405,
    longitude: 10.4528
  },
  {
    id: 5095,
    zipCode: '89350',
    city: 'D\u00fcrrlauingen',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.4667,
    longitude: 10.4286
  },
  {
    id: 5096,
    zipCode: '89352',
    city: 'Ellzee',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.3397,
    longitude: 10.3189
  },
  {
    id: 5097,
    zipCode: '89353',
    city: 'Gl\u00f6tt',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.5,
    longitude: 10.4833
  },
  {
    id: 5098,
    zipCode: '89355',
    city: 'Gundremmingen',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.5,
    longitude: 10.4
  },
  {
    id: 5099,
    zipCode: '89356',
    city: 'Haldenwang',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.4376,
    longitude: 10.4482
  },
  {
    id: 5100,
    zipCode: '89358',
    city: 'Kammeltal',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.3833,
    longitude: 10.3667
  },
  {
    id: 5101,
    zipCode: '89359',
    city: 'K\u00f6tz',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.4167,
    longitude: 10.2833
  },
  {
    id: 5102,
    zipCode: '89361',
    city: 'Landensberg',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.4344,
    longitude: 10.5242
  },
  {
    id: 5103,
    zipCode: '89362',
    city: 'Offingen',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.4826,
    longitude: 10.3625
  },
  {
    id: 5104,
    zipCode: '89364',
    city: 'Rettenbach',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.4588,
    longitude: 10.3524
  },
  {
    id: 5105,
    zipCode: '89365',
    city: 'R\u00f6fingen',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.4244,
    longitude: 10.4427
  },
  {
    id: 5106,
    zipCode: '89367',
    city: 'Waldstetten',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.3481,
    longitude: 10.2938
  },
  {
    id: 5107,
    zipCode: '89368',
    city: 'Winterbach',
    state: 'Bayern',
    community: 'Landkreis G\u00fcnzburg',
    latitude: 48.4667,
    longitude: 10.4833
  },
  {
    id: 5108,
    zipCode: '89407',
    city: 'Dillingen an der Donau',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.5815,
    longitude: 10.4953
  },
  {
    id: 5109,
    zipCode: '89415',
    city: 'Lauingen (Donau)',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.5654,
    longitude: 10.4297
  },
  {
    id: 5110,
    zipCode: '89420',
    city: 'H\u00f6chst\u00e4dt an der Donau',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.6112,
    longitude: 10.5682
  },
  {
    id: 5111,
    zipCode: '89423',
    city: 'Gundelfingen an der Donau',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.551,
    longitude: 10.3689
  },
  {
    id: 5112,
    zipCode: '89426',
    city: 'Wittislingen',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.6192,
    longitude: 10.4172
  },
  {
    id: 5113,
    zipCode: '89426',
    city: 'M\u00f6dingen',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.6433,
    longitude: 10.4317
  },
  {
    id: 5114,
    zipCode: '89428',
    city: 'Syrgenstein',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.6612,
    longitude: 10.31
  },
  {
    id: 5115,
    zipCode: '89429',
    city: 'Bachhagel',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.6322,
    longitude: 10.3205
  },
  {
    id: 5116,
    zipCode: '89431',
    city: 'B\u00e4chingen an der Brenz',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.5463,
    longitude: 10.3128
  },
  {
    id: 5117,
    zipCode: '89432',
    city: 'Binswangen',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.558,
    longitude: 10.6425
  },
  {
    id: 5118,
    zipCode: '89434',
    city: 'Blindheim',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.6314,
    longitude: 10.6199
  },
  {
    id: 5119,
    zipCode: '89435',
    city: 'Finningen',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.6545,
    longitude: 10.4986
  },
  {
    id: 5120,
    zipCode: '89437',
    city: 'Haunsheim',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.5998,
    longitude: 10.374
  },
  {
    id: 5121,
    zipCode: '89438',
    city: 'Holzheim',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.5142,
    longitude: 10.5306
  },
  {
    id: 5122,
    zipCode: '89440',
    city: 'Lutzingen',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.65,
    longitude: 10.55
  },
  {
    id: 5123,
    zipCode: '89441',
    city: 'Medlingen',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.5703,
    longitude: 10.3161
  },
  {
    id: 5124,
    zipCode: '89443',
    city: 'Schwenningen',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.65,
    longitude: 10.65
  },
  {
    id: 5125,
    zipCode: '89444',
    city: 'Villenbach',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.5089,
    longitude: 10.6147
  },
  {
    id: 5126,
    zipCode: '89446',
    city: 'Ziertheim',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.6524,
    longitude: 10.3988
  },
  {
    id: 5127,
    zipCode: '89447',
    city: 'Z\u00f6schingen',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.6736,
    longitude: 10.3252
  },
  {
    id: 5128,
    zipCode: '89449',
    city: 'Zusamaltheim',
    state: 'Bayern',
    community: 'Landkreis Dillingen an der Donau',
    latitude: 48.531,
    longitude: 10.6356
  },
  {
    id: 5129,
    zipCode: '27568',
    city: 'Bremerhaven',
    state: 'Bremen',
    community: 'Bremerhaven, Stadt',
    latitude: 53.5687,
    longitude: 8.5741
  },
  {
    id: 5130,
    zipCode: '27570',
    city: 'Bremerhaven',
    state: 'Bremen',
    community: 'Bremerhaven, Stadt',
    latitude: 53.5286,
    longitude: 8.5907
  },
  {
    id: 5131,
    zipCode: '27572',
    city: 'Bremerhaven',
    state: 'Bremen',
    community: 'Bremerhaven, Stadt',
    latitude: 53.5002,
    longitude: 8.6047
  },
  {
    id: 5132,
    zipCode: '27574',
    city: 'Bremerhaven',
    state: 'Bremen',
    community: 'Bremerhaven, Stadt',
    latitude: 53.5299,
    longitude: 8.6098
  },
  {
    id: 5133,
    zipCode: '27576',
    city: 'Bremerhaven',
    state: 'Bremen',
    community: 'Bremerhaven, Stadt',
    latitude: 53.5545,
    longitude: 8.5933
  },
  {
    id: 5134,
    zipCode: '27578',
    city: 'Bremerhaven',
    state: 'Bremen',
    community: 'Bremerhaven, Stadt',
    latitude: 53.5887,
    longitude: 8.5977
  },
  {
    id: 5135,
    zipCode: '27580',
    city: 'Bremerhaven',
    state: 'Bremen',
    community: 'Bremerhaven, Stadt',
    latitude: 53.5685,
    longitude: 8.5968
  },
  {
    id: 5136,
    zipCode: '28195',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.0889,
    longitude: 8.7906
  },
  {
    id: 5137,
    zipCode: '28197',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.0854,
    longitude: 8.7463
  },
  {
    id: 5138,
    zipCode: '28199',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.0618,
    longitude: 8.79
  },
  {
    id: 5139,
    zipCode: '28201',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.0577,
    longitude: 8.8036
  },
  {
    id: 5140,
    zipCode: '28203',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.0711,
    longitude: 8.8317
  },
  {
    id: 5141,
    zipCode: '28205',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.0709,
    longitude: 8.846
  },
  {
    id: 5142,
    zipCode: '28207',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.0687,
    longitude: 8.8697
  },
  {
    id: 5143,
    zipCode: '28209',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.0841,
    longitude: 8.8271
  },
  {
    id: 5144,
    zipCode: '28211',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.0859,
    longitude: 8.8549
  },
  {
    id: 5145,
    zipCode: '28213',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.1094,
    longitude: 8.7814
  },
  {
    id: 5146,
    zipCode: '28215',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.0926,
    longitude: 8.8073
  },
  {
    id: 5147,
    zipCode: '28217',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.0938,
    longitude: 8.783
  },
  {
    id: 5148,
    zipCode: '28219',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.1036,
    longitude: 8.7875
  },
  {
    id: 5149,
    zipCode: '28237',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.1165,
    longitude: 8.7595
  },
  {
    id: 5150,
    zipCode: '28239',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.124,
    longitude: 8.7464
  },
  {
    id: 5151,
    zipCode: '28259',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.0543,
    longitude: 8.7457
  },
  {
    id: 5152,
    zipCode: '28277',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.1094,
    longitude: 8.7814
  },
  {
    id: 5153,
    zipCode: '28279',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.0483,
    longitude: 8.8383
  },
  {
    id: 5154,
    zipCode: '28307',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.0441,
    longitude: 8.9558
  },
  {
    id: 5155,
    zipCode: '28309',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.0515,
    longitude: 8.8896
  },
  {
    id: 5156,
    zipCode: '28325',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.1094,
    longitude: 8.7814
  },
  {
    id: 5157,
    zipCode: '28327',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.081,
    longitude: 8.8925
  },
  {
    id: 5158,
    zipCode: '28329',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.0815,
    longitude: 8.8721
  },
  {
    id: 5159,
    zipCode: '28335',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.054,
    longitude: 8.746
  },
  {
    id: 5160,
    zipCode: '28355',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.1001,
    longitude: 8.9029
  },
  {
    id: 5161,
    zipCode: '28357',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.1178,
    longitude: 8.8947
  },
  {
    id: 5162,
    zipCode: '28359',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.1003,
    longitude: 8.8752
  },
  {
    id: 5163,
    zipCode: '28717',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.1735,
    longitude: 8.7045
  },
  {
    id: 5164,
    zipCode: '28719',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.1728,
    longitude: 8.7135
  },
  {
    id: 5165,
    zipCode: '28755',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.1094,
    longitude: 8.7814
  },
  {
    id: 5166,
    zipCode: '28757',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.1094,
    longitude: 8.7814
  },
  {
    id: 5167,
    zipCode: '28759',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.1094,
    longitude: 8.7814
  },
  {
    id: 5168,
    zipCode: '28777',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.1094,
    longitude: 8.7814
  },
  {
    id: 5169,
    zipCode: '28779',
    city: 'Bremen',
    state: 'Bremen',
    community: 'Kreisfreie Stadt Bremen',
    latitude: 53.1094,
    longitude: 8.7814
  },
  {
    id: 5170,
    zipCode: '35510',
    city: 'Butzbach',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.4339,
    longitude: 8.6712
  },
  {
    id: 5171,
    zipCode: '35516',
    city: 'M\u00fcnzenberg',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.4563,
    longitude: 8.7293
  },
  {
    id: 5172,
    zipCode: '35519',
    city: 'Rockenberg',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.4305,
    longitude: 8.7369
  },
  {
    id: 5173,
    zipCode: '36381',
    city: 'Schl\u00fcchtern',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.3655,
    longitude: 9.5829
  },
  {
    id: 5174,
    zipCode: '36391',
    city: 'Sinntal',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.3127,
    longitude: 9.6234
  },
  {
    id: 5175,
    zipCode: '36396',
    city: 'Steinau an der Stra\u00dfe',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.314,
    longitude: 9.4633
  },
  {
    id: 5176,
    zipCode: '55246',
    city: 'Mainz-Kostheim',
    state: 'Hessen',
    community: 'Wiesbaden, Landeshauptstadt',
    latitude: 50.0051,
    longitude: 8.3134
  },
  {
    id: 5177,
    zipCode: '55252',
    city: 'Mainz-Kastel',
    state: 'Hessen',
    community: 'Wiesbaden, Landeshauptstadt',
    latitude: 50.0102,
    longitude: 8.2844
  },
  {
    id: 5178,
    zipCode: '60306',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1159,
    longitude: 8.6702
  },
  {
    id: 5179,
    zipCode: '60308',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1125,
    longitude: 8.6529
  },
  {
    id: 5180,
    zipCode: '60310',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1107,
    longitude: 8.673
  },
  {
    id: 5181,
    zipCode: '60311',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1112,
    longitude: 8.6831
  },
  {
    id: 5182,
    zipCode: '60313',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1153,
    longitude: 8.6823
  },
  {
    id: 5183,
    zipCode: '60314',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1137,
    longitude: 8.7119
  },
  {
    id: 5184,
    zipCode: '60316',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1209,
    longitude: 8.6966
  },
  {
    id: 5185,
    zipCode: '60318',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1252,
    longitude: 8.6865
  },
  {
    id: 5186,
    zipCode: '60320',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.139,
    longitude: 8.6725
  },
  {
    id: 5187,
    zipCode: '60322',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.125,
    longitude: 8.6762
  },
  {
    id: 5188,
    zipCode: '60323',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1219,
    longitude: 8.6655
  },
  {
    id: 5189,
    zipCode: '60325',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1155,
    longitude: 8.6596
  },
  {
    id: 5190,
    zipCode: '60326',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1025,
    longitude: 8.6299
  },
  {
    id: 5191,
    zipCode: '60327',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1038,
    longitude: 8.6522
  },
  {
    id: 5192,
    zipCode: '60329',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1074,
    longitude: 8.6663
  },
  {
    id: 5193,
    zipCode: '60385',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1253,
    longitude: 8.7108
  },
  {
    id: 5194,
    zipCode: '60386',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1268,
    longitude: 8.7554
  },
  {
    id: 5195,
    zipCode: '60388',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1506,
    longitude: 8.7537
  },
  {
    id: 5196,
    zipCode: '60389',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1383,
    longitude: 8.7116
  },
  {
    id: 5197,
    zipCode: '60431',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1457,
    longitude: 8.6549
  },
  {
    id: 5198,
    zipCode: '60433',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1605,
    longitude: 8.6684
  },
  {
    id: 5199,
    zipCode: '60435',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1544,
    longitude: 8.6912
  },
  {
    id: 5200,
    zipCode: '60437',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1924,
    longitude: 8.6753
  },
  {
    id: 5201,
    zipCode: '60438',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1787,
    longitude: 8.632
  },
  {
    id: 5202,
    zipCode: '60439',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1605,
    longitude: 8.6337
  },
  {
    id: 5203,
    zipCode: '60486',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1162,
    longitude: 8.6365
  },
  {
    id: 5204,
    zipCode: '60487',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1257,
    longitude: 8.6414
  },
  {
    id: 5205,
    zipCode: '60488',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1416,
    longitude: 8.6155
  },
  {
    id: 5206,
    zipCode: '60489',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1252,
    longitude: 8.6088
  },
  {
    id: 5207,
    zipCode: '60528',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.0837,
    longitude: 8.644
  },
  {
    id: 5208,
    zipCode: '60529',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.0841,
    longitude: 8.5916
  },
  {
    id: 5209,
    zipCode: '60549',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.0413,
    longitude: 8.5702
  },
  {
    id: 5210,
    zipCode: '60594',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1039,
    longitude: 8.6886
  },
  {
    id: 5211,
    zipCode: '60596',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.0974,
    longitude: 8.6735
  },
  {
    id: 5212,
    zipCode: '60598',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.09,
    longitude: 8.6816
  },
  {
    id: 5213,
    zipCode: '60599',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.096,
    longitude: 8.7111
  },
  {
    id: 5214,
    zipCode: '61118',
    city: 'Bad Vilbel',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.1787,
    longitude: 8.7376
  },
  {
    id: 5215,
    zipCode: '61130',
    city: 'Nidderau',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.2381,
    longitude: 8.867
  },
  {
    id: 5216,
    zipCode: '61137',
    city: 'Sch\u00f6neck',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.2056,
    longitude: 8.8333
  },
  {
    id: 5217,
    zipCode: '61138',
    city: 'Niederdorfelden',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.1942,
    longitude: 8.8
  },
  {
    id: 5218,
    zipCode: '61169',
    city: 'Friedberg',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.3374,
    longitude: 8.7559
  },
  {
    id: 5219,
    zipCode: '61184',
    city: 'Karben',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.2302,
    longitude: 8.7716
  },
  {
    id: 5220,
    zipCode: '61191',
    city: 'Rosbach vor der H\u00f6he Ober-Rosbach',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.305,
    longitude: 8.69
  },
  {
    id: 5221,
    zipCode: '61191',
    city: 'Rosbach vor der H\u00f6he Nieder-Rosbach',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.299,
    longitude: 8.708
  },
  {
    id: 5222,
    zipCode: '61191',
    city: 'Rosbach vor der H\u00f6he',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.3033,
    longitude: 8.6898
  },
  {
    id: 5223,
    zipCode: '61191',
    city: 'Rosbach vor der H\u00f6he Rodheim vor der H\u00f6he',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.265,
    longitude: 8.698
  },
  {
    id: 5224,
    zipCode: '61194',
    city: 'Niddatal',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.2833,
    longitude: 8.8333
  },
  {
    id: 5225,
    zipCode: '61197',
    city: 'Florstadt',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.3287,
    longitude: 8.9167
  },
  {
    id: 5226,
    zipCode: '61200',
    city: 'W\u00f6lfersheim',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.4,
    longitude: 8.8167
  },
  {
    id: 5227,
    zipCode: '61203',
    city: 'Reichelsheim',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.3564,
    longitude: 8.8745
  },
  {
    id: 5228,
    zipCode: '61206',
    city: 'W\u00f6llstadt',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.2833,
    longitude: 8.7667
  },
  {
    id: 5229,
    zipCode: '61209',
    city: 'Echzell',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.3889,
    longitude: 8.8861
  },
  {
    id: 5230,
    zipCode: '61231',
    city: 'Bad Nauheim',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.3646,
    longitude: 8.7386
  },
  {
    id: 5231,
    zipCode: '61239',
    city: 'Ober-M\u00f6rlen',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.3735,
    longitude: 8.6909
  },
  {
    id: 5232,
    zipCode: '61250',
    city: 'Usingen',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.3355,
    longitude: 8.5369
  },
  {
    id: 5233,
    zipCode: '61267',
    city: 'Neu-Anspach',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.3167,
    longitude: 8.5
  },
  {
    id: 5234,
    zipCode: '61273',
    city: 'Wehrheim',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.3,
    longitude: 8.5667
  },
  {
    id: 5235,
    zipCode: '61276',
    city: 'Weilrod',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.3333,
    longitude: 8.4167
  },
  {
    id: 5236,
    zipCode: '61279',
    city: 'Gr\u00e4venwiesbach',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.3902,
    longitude: 8.4569
  },
  {
    id: 5237,
    zipCode: '61348',
    city: 'Bad Homburg vor der H\u00f6he',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.2265,
    longitude: 8.612
  },
  {
    id: 5238,
    zipCode: '61350',
    city: 'Bad Homburg vor der H\u00f6he',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.2377,
    longitude: 8.6024
  },
  {
    id: 5239,
    zipCode: '61352',
    city: 'Bad Homburg vor der H\u00f6he',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.2167,
    longitude: 8.6167
  },
  {
    id: 5240,
    zipCode: '61381',
    city: 'Friedrichsdorf',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.2496,
    longitude: 8.6428
  },
  {
    id: 5241,
    zipCode: '61389',
    city: 'Schmitten',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.2667,
    longitude: 8.45
  },
  {
    id: 5242,
    zipCode: '61440',
    city: 'Oberursel',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.2073,
    longitude: 8.5775
  },
  {
    id: 5243,
    zipCode: '61449',
    city: 'Steinbach (Taunus)',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.1648,
    longitude: 8.5706
  },
  {
    id: 5244,
    zipCode: '61462',
    city: 'K\u00f6nigstein im Taunus Falkenstein',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.1811,
    longitude: 8.4716
  },
  {
    id: 5245,
    zipCode: '61462',
    city: 'K\u00f6nigstein im Taunus',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.1794,
    longitude: 8.4713
  },
  {
    id: 5246,
    zipCode: '61462',
    city: 'K\u00f6nigstein im Taunus Mammolshain',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.1809,
    longitude: 8.472
  },
  {
    id: 5247,
    zipCode: '61462',
    city: 'K\u00f6nigstein im Taunus Schneidhain',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.1667,
    longitude: 8.45
  },
  {
    id: 5248,
    zipCode: '61476',
    city: 'Kronberg im Taunus',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.1789,
    longitude: 8.5134
  },
  {
    id: 5249,
    zipCode: '61479',
    city: 'Glash\u00fctten',
    state: 'Hessen',
    community: 'Hochtaunuskreis',
    latitude: 50.2167,
    longitude: 8.4
  },
  {
    id: 5250,
    zipCode: '63065',
    city: 'Offenbach',
    state: 'Hessen',
    community: 'Offenbach am Main, Stadt',
    latitude: 50.1054,
    longitude: 8.762
  },
  {
    id: 5251,
    zipCode: '63067',
    city: 'Offenbach',
    state: 'Hessen',
    community: 'Offenbach am Main, Stadt',
    latitude: 50.1069,
    longitude: 8.7344
  },
  {
    id: 5252,
    zipCode: '63069',
    city: 'Offenbach',
    state: 'Hessen',
    community: 'Offenbach am Main, Stadt',
    latitude: 50.0894,
    longitude: 8.7494
  },
  {
    id: 5253,
    zipCode: '63071',
    city: 'Offenbach',
    state: 'Hessen',
    community: 'Offenbach am Main, Stadt',
    latitude: 50.0993,
    longitude: 8.7852
  },
  {
    id: 5254,
    zipCode: '63073',
    city: 'Offenbach',
    state: 'Hessen',
    community: 'Offenbach am Main, Stadt',
    latitude: 50.1,
    longitude: 8.7667
  },
  {
    id: 5255,
    zipCode: '63075',
    city: 'Offenbach',
    state: 'Hessen',
    community: 'Offenbach am Main, Stadt',
    latitude: 50.123,
    longitude: 8.7921
  },
  {
    id: 5256,
    zipCode: '63110',
    city: 'Rodgau',
    state: 'Hessen',
    community: 'Offenbach',
    latitude: 50.0263,
    longitude: 8.8859
  },
  {
    id: 5257,
    zipCode: '63128',
    city: 'Dietzenbach',
    state: 'Hessen',
    community: 'Offenbach',
    latitude: 50.0098,
    longitude: 8.7778
  },
  {
    id: 5258,
    zipCode: '63150',
    city: 'Heusenstamm',
    state: 'Hessen',
    community: 'Offenbach',
    latitude: 50.0555,
    longitude: 8.8008
  },
  {
    id: 5259,
    zipCode: '63165',
    city: 'M\u00fchlheim',
    state: 'Hessen',
    community: 'Offenbach',
    latitude: 50.1078,
    longitude: 8.8318
  },
  {
    id: 5260,
    zipCode: '63179',
    city: 'Obertshausen',
    state: 'Hessen',
    community: 'Offenbach',
    latitude: 50.0714,
    longitude: 8.8512
  },
  {
    id: 5261,
    zipCode: '63225',
    city: 'Langen',
    state: 'Hessen',
    community: 'Offenbach',
    latitude: 49.9896,
    longitude: 8.6685
  },
  {
    id: 5262,
    zipCode: '63263',
    city: 'Neu-Isenburg',
    state: 'Hessen',
    community: 'Offenbach',
    latitude: 50.0583,
    longitude: 8.6918
  },
  {
    id: 5263,
    zipCode: '63303',
    city: 'Dreieich',
    state: 'Hessen',
    community: 'Offenbach',
    latitude: 50.02,
    longitude: 8.6961
  },
  {
    id: 5264,
    zipCode: '63322',
    city: 'R\u00f6dermark',
    state: 'Hessen',
    community: 'Offenbach',
    latitude: 49.974,
    longitude: 8.8282
  },
  {
    id: 5265,
    zipCode: '63329',
    city: 'Egelsbach',
    state: 'Hessen',
    community: 'Offenbach',
    latitude: 49.9679,
    longitude: 8.6634
  },
  {
    id: 5266,
    zipCode: '63405',
    city: 'Hanau',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.1333,
    longitude: 8.9167
  },
  {
    id: 5267,
    zipCode: '63450',
    city: 'Hanau',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.1316,
    longitude: 8.9208
  },
  {
    id: 5268,
    zipCode: '63452',
    city: 'Hanau',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.1442,
    longitude: 8.9169
  },
  {
    id: 5269,
    zipCode: '63454',
    city: 'Hanau',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.1391,
    longitude: 8.8864
  },
  {
    id: 5270,
    zipCode: '63456',
    city: 'Hanau',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.1139,
    longitude: 8.9107
  },
  {
    id: 5271,
    zipCode: '63457',
    city: 'Hanau',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.1063,
    longitude: 8.9495
  },
  {
    id: 5272,
    zipCode: '63477',
    city: 'Maintal',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.15,
    longitude: 8.8333
  },
  {
    id: 5273,
    zipCode: '63486',
    city: 'Bruchk\u00f6bel',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.1785,
    longitude: 8.9232
  },
  {
    id: 5274,
    zipCode: '63500',
    city: 'Seligenstadt',
    state: 'Hessen',
    community: 'Offenbach',
    latitude: 50.0432,
    longitude: 8.9739
  },
  {
    id: 5275,
    zipCode: '63505',
    city: 'Langenselbold',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.1766,
    longitude: 9.04
  },
  {
    id: 5276,
    zipCode: '63512',
    city: 'Hainburg',
    state: 'Hessen',
    community: 'Offenbach',
    latitude: 50.0833,
    longitude: 8.9333
  },
  {
    id: 5277,
    zipCode: '63517',
    city: 'Rodenbach',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.15,
    longitude: 9.0333
  },
  {
    id: 5278,
    zipCode: '63526',
    city: 'Erlensee',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.163,
    longitude: 8.9782
  },
  {
    id: 5279,
    zipCode: '63533',
    city: 'Mainhausen',
    state: 'Hessen',
    community: 'Offenbach',
    latitude: 50.0127,
    longitude: 8.9901
  },
  {
    id: 5280,
    zipCode: '63538',
    city: 'Gro\u00dfkrotzenburg',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.0833,
    longitude: 8.9833
  },
  {
    id: 5281,
    zipCode: '63543',
    city: 'Neuberg',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.2,
    longitude: 8.9833
  },
  {
    id: 5282,
    zipCode: '63546',
    city: 'Hammersbach',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.2167,
    longitude: 8.9833
  },
  {
    id: 5283,
    zipCode: '63549',
    city: 'Ronneburg',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.2278,
    longitude: 9.0556
  },
  {
    id: 5284,
    zipCode: '63571',
    city: 'Gelnhausen',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.2016,
    longitude: 9.1874
  },
  {
    id: 5285,
    zipCode: '63579',
    city: 'Freigericht',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.1323,
    longitude: 9.1346
  },
  {
    id: 5286,
    zipCode: '63584',
    city: 'Gr\u00fcndau',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.2064,
    longitude: 9.1388
  },
  {
    id: 5287,
    zipCode: '63589',
    city: 'Linsengericht',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.1667,
    longitude: 9.2167
  },
  {
    id: 5288,
    zipCode: '63594',
    city: 'Hasselroth',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.1667,
    longitude: 9.1
  },
  {
    id: 5289,
    zipCode: '63599',
    city: 'Biebergem\u00fcnd',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.1806,
    longitude: 9.2861
  },
  {
    id: 5290,
    zipCode: '63607',
    city: 'W\u00e4chtersbach',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.2551,
    longitude: 9.2956
  },
  {
    id: 5291,
    zipCode: '63619',
    city: 'Bad Orb',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.2279,
    longitude: 9.3478
  },
  {
    id: 5292,
    zipCode: '63628',
    city: 'Bad Soden-Salm\u00fcnster',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.2757,
    longitude: 9.367
  },
  {
    id: 5293,
    zipCode: '63633',
    city: 'Birstein',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.35,
    longitude: 9.3
  },
  {
    id: 5294,
    zipCode: '63636',
    city: 'Brachttal',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.3167,
    longitude: 9.2833
  },
  {
    id: 5295,
    zipCode: '63637',
    city: 'Jossgrund',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.1792,
    longitude: 9.4583
  },
  {
    id: 5296,
    zipCode: '63639',
    city: 'Fl\u00f6rsbachtal',
    state: 'Hessen',
    community: 'Main-Kinzig-Kreis',
    latitude: 50.1208,
    longitude: 9.4375
  },
  {
    id: 5297,
    zipCode: '63654',
    city: 'B\u00fcdingen',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.2901,
    longitude: 9.1114
  },
  {
    id: 5298,
    zipCode: '63667',
    city: 'Nidda',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.4133,
    longitude: 9.0064
  },
  {
    id: 5299,
    zipCode: '63674',
    city: 'Altenstadt',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.2875,
    longitude: 8.9437
  },
  {
    id: 5300,
    zipCode: '63683',
    city: 'Ortenberg',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.3558,
    longitude: 9.056
  },
  {
    id: 5301,
    zipCode: '63688',
    city: 'Gedern',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.4248,
    longitude: 9.1984
  },
  {
    id: 5302,
    zipCode: '63691',
    city: 'Ranstadt',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.3574,
    longitude: 8.9837
  },
  {
    id: 5303,
    zipCode: '63694',
    city: 'Limeshain',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.2591,
    longitude: 8.9776
  },
  {
    id: 5304,
    zipCode: '63695',
    city: 'Glauburg',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.3167,
    longitude: 9.0
  },
  {
    id: 5305,
    zipCode: '63697',
    city: 'Hirzenhain',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.4,
    longitude: 9.1333
  },
  {
    id: 5306,
    zipCode: '63699',
    city: 'Kefenrod',
    state: 'Hessen',
    community: 'Wetteraukreis',
    latitude: 50.3448,
    longitude: 9.2114
  },
  {
    id: 5307,
    zipCode: '64283',
    city: 'Darmstadt',
    state: 'Hessen',
    community: 'Darmstadt, Wissenschaftsstadt',
    latitude: 49.8719,
    longitude: 8.6484
  },
  {
    id: 5308,
    zipCode: '64285',
    city: 'Darmstadt',
    state: 'Hessen',
    community: 'Darmstadt, Wissenschaftsstadt',
    latitude: 49.8591,
    longitude: 8.6486
  },
  {
    id: 5309,
    zipCode: '64287',
    city: 'Darmstadt',
    state: 'Hessen',
    community: 'Darmstadt, Wissenschaftsstadt',
    latitude: 49.8676,
    longitude: 8.6644
  },
  {
    id: 5310,
    zipCode: '64289',
    city: 'Darmstadt',
    state: 'Hessen',
    community: 'Darmstadt, Wissenschaftsstadt',
    latitude: 49.8972,
    longitude: 8.6809
  },
  {
    id: 5311,
    zipCode: '64291',
    city: 'Darmstadt',
    state: 'Hessen',
    community: 'Darmstadt, Wissenschaftsstadt',
    latitude: 49.9111,
    longitude: 8.6573
  },
  {
    id: 5312,
    zipCode: '64293',
    city: 'Darmstadt',
    state: 'Hessen',
    community: 'Darmstadt, Wissenschaftsstadt',
    latitude: 49.8875,
    longitude: 8.6446
  },
  {
    id: 5313,
    zipCode: '64295',
    city: 'Darmstadt',
    state: 'Hessen',
    community: 'Darmstadt, Wissenschaftsstadt',
    latitude: 49.8611,
    longitude: 8.6373
  },
  {
    id: 5314,
    zipCode: '64297',
    city: 'Darmstadt',
    state: 'Hessen',
    community: 'Darmstadt, Wissenschaftsstadt',
    latitude: 49.8192,
    longitude: 8.6449
  },
  {
    id: 5315,
    zipCode: '64319',
    city: 'Pfungstadt',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.8056,
    longitude: 8.6031
  },
  {
    id: 5316,
    zipCode: '64331',
    city: 'Weiterstadt',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.9039,
    longitude: 8.5887
  },
  {
    id: 5317,
    zipCode: '64342',
    city: 'Seeheim-Jugenheim',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.765,
    longitude: 8.6519
  },
  {
    id: 5318,
    zipCode: '64347',
    city: 'Griesheim',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.8609,
    longitude: 8.5725
  },
  {
    id: 5319,
    zipCode: '64354',
    city: 'Reinheim',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.8292,
    longitude: 8.8357
  },
  {
    id: 5320,
    zipCode: '64367',
    city: 'M\u00fchltal',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.8156,
    longitude: 8.7081
  },
  {
    id: 5321,
    zipCode: '64372',
    city: 'Ober-Ramstadt',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.8308,
    longitude: 8.7489
  },
  {
    id: 5322,
    zipCode: '64380',
    city: 'Ro\u00dfdorf',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.8597,
    longitude: 8.7617
  },
  {
    id: 5323,
    zipCode: '64385',
    city: 'Reichelsheim',
    state: 'Hessen',
    community: 'Odenwaldkreis',
    latitude: 49.7121,
    longitude: 8.839
  },
  {
    id: 5324,
    zipCode: '64390',
    city: 'Erzhausen',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.9553,
    longitude: 8.6475
  },
  {
    id: 5325,
    zipCode: '64395',
    city: 'Brensbach',
    state: 'Hessen',
    community: 'Odenwaldkreis',
    latitude: 49.7739,
    longitude: 8.8844
  },
  {
    id: 5326,
    zipCode: '64397',
    city: 'Modautal',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.7606,
    longitude: 8.7208
  },
  {
    id: 5327,
    zipCode: '64401',
    city: 'Gro\u00df-Bieberau',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.8006,
    longitude: 8.8243
  },
  {
    id: 5328,
    zipCode: '64404',
    city: 'Bickenbach',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.7592,
    longitude: 8.6175
  },
  {
    id: 5329,
    zipCode: '64405',
    city: 'Fischbachtal',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.7647,
    longitude: 8.785
  },
  {
    id: 5330,
    zipCode: '64407',
    city: 'Fr\u00e4nkisch-Crumbach',
    state: 'Hessen',
    community: 'Odenwaldkreis',
    latitude: 49.7461,
    longitude: 8.8586
  },
  {
    id: 5331,
    zipCode: '64409',
    city: 'Messel',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.9383,
    longitude: 8.7406
  },
  {
    id: 5332,
    zipCode: '64521',
    city: 'Gro\u00df-Gerau',
    state: 'Hessen',
    community: 'Gro\u00df-Gerau',
    latitude: 49.9214,
    longitude: 8.4825
  },
  {
    id: 5333,
    zipCode: '64546',
    city: 'M\u00f6rfelden-Walldorf',
    state: 'Hessen',
    community: 'Gro\u00df-Gerau',
    latitude: 49.9947,
    longitude: 8.5836
  },
  {
    id: 5334,
    zipCode: '64560',
    city: 'Riedstadt',
    state: 'Hessen',
    community: 'Gro\u00df-Gerau',
    latitude: 49.8341,
    longitude: 8.4962
  },
  {
    id: 5335,
    zipCode: '64569',
    city: 'Nauheim',
    state: 'Hessen',
    community: 'Gro\u00df-Gerau',
    latitude: 49.9508,
    longitude: 8.4633
  },
  {
    id: 5336,
    zipCode: '64572',
    city: 'B\u00fcttelborn',
    state: 'Hessen',
    community: 'Gro\u00df-Gerau',
    latitude: 49.9033,
    longitude: 8.5233
  },
  {
    id: 5337,
    zipCode: '64579',
    city: 'Gernsheim',
    state: 'Hessen',
    community: 'Gro\u00df-Gerau',
    latitude: 49.7531,
    longitude: 8.4886
  },
  {
    id: 5338,
    zipCode: '64584',
    city: 'Biebesheim am Rhein',
    state: 'Hessen',
    community: 'Gro\u00df-Gerau',
    latitude: 49.7836,
    longitude: 8.4744
  },
  {
    id: 5339,
    zipCode: '64589',
    city: 'Stockstadt am Rhein',
    state: 'Hessen',
    community: 'Gro\u00df-Gerau',
    latitude: 49.8094,
    longitude: 8.4728
  },
  {
    id: 5340,
    zipCode: '64625',
    city: 'Bensheim',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.6837,
    longitude: 8.6184
  },
  {
    id: 5341,
    zipCode: '64646',
    city: 'Heppenheim (Bergstra\u00dfe)',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.6407,
    longitude: 8.6367
  },
  {
    id: 5342,
    zipCode: '64653',
    city: 'Lorsch',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.65,
    longitude: 8.5667
  },
  {
    id: 5343,
    zipCode: '64658',
    city: 'F\u00fcrth',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.6508,
    longitude: 8.7847
  },
  {
    id: 5344,
    zipCode: '64665',
    city: 'Alsbach-H\u00e4hnlein',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.7386,
    longitude: 8.5958
  },
  {
    id: 5345,
    zipCode: '64668',
    city: 'Rimbach',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.625,
    longitude: 8.7631
  },
  {
    id: 5346,
    zipCode: '64673',
    city: 'Zwingenberg',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.7239,
    longitude: 8.6108
  },
  {
    id: 5347,
    zipCode: '64678',
    city: 'Lindenfels',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.6837,
    longitude: 8.7815
  },
  {
    id: 5348,
    zipCode: '64683',
    city: 'Einhausen',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.6767,
    longitude: 8.5483
  },
  {
    id: 5349,
    zipCode: '64686',
    city: 'Lautertal',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.7258,
    longitude: 8.7033
  },
  {
    id: 5350,
    zipCode: '64689',
    city: 'Grasellenbach',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.63,
    longitude: 8.8822
  },
  {
    id: 5351,
    zipCode: '64711',
    city: 'Erbach',
    state: 'Hessen',
    community: 'Odenwaldkreis',
    latitude: 49.6615,
    longitude: 8.994
  },
  {
    id: 5352,
    zipCode: '64720',
    city: 'Michelstadt',
    state: 'Hessen',
    community: 'Odenwaldkreis',
    latitude: 49.6757,
    longitude: 9.0037
  },
  {
    id: 5353,
    zipCode: '64732',
    city: 'Bad K\u00f6nig',
    state: 'Hessen',
    community: 'Odenwaldkreis',
    latitude: 49.7432,
    longitude: 9.0075
  },
  {
    id: 5354,
    zipCode: '64739',
    city: 'H\u00f6chst im Odenwald',
    state: 'Hessen',
    community: 'Odenwaldkreis',
    latitude: 49.7997,
    longitude: 8.9994
  },
  {
    id: 5355,
    zipCode: '64743',
    city: 'Beerfelden',
    state: 'Hessen',
    community: 'Odenwaldkreis',
    latitude: 49.5686,
    longitude: 8.9744
  },
  {
    id: 5356,
    zipCode: '64747',
    city: 'Breuberg',
    state: 'Hessen',
    community: 'Odenwaldkreis',
    latitude: 49.8,
    longitude: 9.0667
  },
  {
    id: 5357,
    zipCode: '64750',
    city: 'L\u00fctzelbach',
    state: 'Hessen',
    community: 'Odenwaldkreis',
    latitude: 49.7883,
    longitude: 9.0753
  },
  {
    id: 5358,
    zipCode: '64753',
    city: 'Brombachtal',
    state: 'Hessen',
    community: 'Odenwaldkreis',
    latitude: 49.7325,
    longitude: 8.9622
  },
  {
    id: 5359,
    zipCode: '64754',
    city: 'Hesseneck',
    state: 'Hessen',
    community: 'Odenwaldkreis',
    latitude: 49.5699,
    longitude: 9.0629
  },
  {
    id: 5360,
    zipCode: '64756',
    city: 'Mossautal',
    state: 'Hessen',
    community: 'Odenwaldkreis',
    latitude: 49.6533,
    longitude: 8.9289
  },
  {
    id: 5361,
    zipCode: '64757',
    city: 'Rothenberg',
    state: 'Hessen',
    community: 'Odenwaldkreis',
    latitude: 49.4992,
    longitude: 8.9192
  },
  {
    id: 5362,
    zipCode: '64759',
    city: 'Sensbachtal',
    state: 'Hessen',
    community: 'Odenwaldkreis',
    latitude: 49.5489,
    longitude: 9.015
  },
  {
    id: 5363,
    zipCode: '64807',
    city: 'Dieburg',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.8974,
    longitude: 8.8461
  },
  {
    id: 5364,
    zipCode: '64823',
    city: 'Gro\u00df-Umstadt',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.869,
    longitude: 8.9321
  },
  {
    id: 5365,
    zipCode: '64832',
    city: 'Babenhausen',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.9652,
    longitude: 8.9513
  },
  {
    id: 5366,
    zipCode: '64839',
    city: 'M\u00fcnster',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.9228,
    longitude: 8.8678
  },
  {
    id: 5367,
    zipCode: '64846',
    city: 'Gro\u00df-Zimmern',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.8758,
    longitude: 8.8344
  },
  {
    id: 5368,
    zipCode: '64850',
    city: 'Schaafheim',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.9242,
    longitude: 9.0094
  },
  {
    id: 5369,
    zipCode: '64853',
    city: 'Otzberg',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.8261,
    longitude: 8.9225
  },
  {
    id: 5370,
    zipCode: '64859',
    city: 'Eppertshausen',
    state: 'Hessen',
    community: 'Darmstadt-Dieburg',
    latitude: 49.9506,
    longitude: 8.8539
  },
  {
    id: 5371,
    zipCode: '65183',
    city: 'Wiesbaden',
    state: 'Hessen',
    community: 'Wiesbaden, Landeshauptstadt',
    latitude: 50.0817,
    longitude: 8.2389
  },
  {
    id: 5372,
    zipCode: '65185',
    city: 'Wiesbaden',
    state: 'Hessen',
    community: 'Wiesbaden, Landeshauptstadt',
    latitude: 50.0773,
    longitude: 8.2424
  },
  {
    id: 5373,
    zipCode: '65187',
    city: 'Wiesbaden',
    state: 'Hessen',
    community: 'Wiesbaden, Landeshauptstadt',
    latitude: 50.0691,
    longitude: 8.2254
  },
  {
    id: 5374,
    zipCode: '65189',
    city: 'Wiesbaden',
    state: 'Hessen',
    community: 'Wiesbaden, Landeshauptstadt',
    latitude: 50.071,
    longitude: 8.2565
  },
  {
    id: 5375,
    zipCode: '65191',
    city: 'Wiesbaden',
    state: 'Hessen',
    community: 'Wiesbaden, Landeshauptstadt',
    latitude: 50.0876,
    longitude: 8.2797
  },
  {
    id: 5376,
    zipCode: '65193',
    city: 'Wiesbaden',
    state: 'Hessen',
    community: 'Wiesbaden, Landeshauptstadt',
    latitude: 50.0896,
    longitude: 8.2428
  },
  {
    id: 5377,
    zipCode: '65195',
    city: 'Wiesbaden',
    state: 'Hessen',
    community: 'Wiesbaden, Landeshauptstadt',
    latitude: 50.1095,
    longitude: 8.1967
  },
  {
    id: 5378,
    zipCode: '65197',
    city: 'Wiesbaden',
    state: 'Hessen',
    community: 'Wiesbaden, Landeshauptstadt',
    latitude: 50.0794,
    longitude: 8.2157
  },
  {
    id: 5379,
    zipCode: '65199',
    city: 'Wiesbaden',
    state: 'Hessen',
    community: 'Wiesbaden, Landeshauptstadt',
    latitude: 50.0734,
    longitude: 8.196
  },
  {
    id: 5380,
    zipCode: '65201',
    city: 'Wiesbaden',
    state: 'Hessen',
    community: 'Wiesbaden, Landeshauptstadt',
    latitude: 50.0441,
    longitude: 8.2036
  },
  {
    id: 5381,
    zipCode: '65203',
    city: 'Wiesbaden',
    state: 'Hessen',
    community: 'Wiesbaden, Landeshauptstadt',
    latitude: 50.045,
    longitude: 8.2453
  },
  {
    id: 5382,
    zipCode: '65205',
    city: 'Wiesbaden',
    state: 'Hessen',
    community: 'Wiesbaden, Landeshauptstadt',
    latitude: 50.0613,
    longitude: 8.3442
  },
  {
    id: 5383,
    zipCode: '65207',
    city: 'Wiesbaden',
    state: 'Hessen',
    community: 'Wiesbaden, Landeshauptstadt',
    latitude: 50.123,
    longitude: 8.3018
  },
  {
    id: 5384,
    zipCode: '65219',
    city: 'Taunusstein',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.15,
    longitude: 8.15
  },
  {
    id: 5385,
    zipCode: '65220',
    city: 'Taunusstein',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.15,
    longitude: 8.15
  },
  {
    id: 5386,
    zipCode: '65221',
    city: 'Taunusstein',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.15,
    longitude: 8.15
  },
  {
    id: 5387,
    zipCode: '65222',
    city: 'Taunusstein',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.15,
    longitude: 8.15
  },
  {
    id: 5388,
    zipCode: '65223',
    city: 'Taunusstein',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.15,
    longitude: 8.15
  },
  {
    id: 5389,
    zipCode: '65224',
    city: 'Taunusstein',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.15,
    longitude: 8.15
  },
  {
    id: 5390,
    zipCode: '65232',
    city: 'Taunusstein',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.1377,
    longitude: 8.1337
  },
  {
    id: 5391,
    zipCode: '65239',
    city: 'Hochheim am Main',
    state: 'Hessen',
    community: 'Main-Taunus-Kreis',
    latitude: 50.0144,
    longitude: 8.3522
  },
  {
    id: 5392,
    zipCode: '65307',
    city: 'Bad Schwalbach',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.142,
    longitude: 8.0696
  },
  {
    id: 5393,
    zipCode: '65321',
    city: 'Heidenrod',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.1649,
    longitude: 7.9535
  },
  {
    id: 5394,
    zipCode: '65326',
    city: 'Aarbergen',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.25,
    longitude: 8.0667
  },
  {
    id: 5395,
    zipCode: '65329',
    city: 'Hohenstein',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.2,
    longitude: 8.0667
  },
  {
    id: 5396,
    zipCode: '65343',
    city: 'Eltville am Rhein',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.0333,
    longitude: 8.1167
  },
  {
    id: 5397,
    zipCode: '65344',
    city: 'Eltville am Rhein',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.0333,
    longitude: 8.1167
  },
  {
    id: 5398,
    zipCode: '65345',
    city: 'Eltville am Rhein',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.0333,
    longitude: 8.1167
  },
  {
    id: 5399,
    zipCode: '65346',
    city: 'Eltville am Rhein',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.0333,
    longitude: 8.1167
  },
  {
    id: 5400,
    zipCode: '65347',
    city: 'Eltville am Rhein',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.0132,
    longitude: 8.0615
  },
  {
    id: 5401,
    zipCode: '65366',
    city: 'Geisenheim',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 49.9847,
    longitude: 7.9684
  },
  {
    id: 5402,
    zipCode: '65375',
    city: 'Oestrich-Winkel',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.0,
    longitude: 8.0
  },
  {
    id: 5403,
    zipCode: '65385',
    city: 'R\u00fcdesheim am Rhein',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 49.9821,
    longitude: 7.9296
  },
  {
    id: 5404,
    zipCode: '65388',
    city: 'Schlangenbad',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.0932,
    longitude: 8.1031
  },
  {
    id: 5405,
    zipCode: '65391',
    city: 'Lorch',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.0462,
    longitude: 7.8042
  },
  {
    id: 5406,
    zipCode: '65396',
    city: 'Walluf',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.04,
    longitude: 8.1554
  },
  {
    id: 5407,
    zipCode: '65399',
    city: 'Kiedrich',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.0396,
    longitude: 8.0853
  },
  {
    id: 5408,
    zipCode: '65428',
    city: 'R\u00fcsselsheim',
    state: 'Hessen',
    community: 'Gro\u00df-Gerau',
    latitude: 49.9896,
    longitude: 8.4225
  },
  {
    id: 5409,
    zipCode: '65439',
    city: 'Fl\u00f6rsheim',
    state: 'Hessen',
    community: 'Main-Taunus-Kreis',
    latitude: 50.0131,
    longitude: 8.4278
  },
  {
    id: 5410,
    zipCode: '65451',
    city: 'Kelsterbach',
    state: 'Hessen',
    community: 'Gro\u00df-Gerau',
    latitude: 50.0613,
    longitude: 8.5292
  },
  {
    id: 5411,
    zipCode: '65462',
    city: 'Ginsheim-Gustavsburg',
    state: 'Hessen',
    community: 'Gro\u00df-Gerau',
    latitude: 49.9711,
    longitude: 8.3453
  },
  {
    id: 5412,
    zipCode: '65468',
    city: 'Trebur',
    state: 'Hessen',
    community: 'Gro\u00df-Gerau',
    latitude: 49.9264,
    longitude: 8.4073
  },
  {
    id: 5413,
    zipCode: '65474',
    city: 'Bischofsheim',
    state: 'Hessen',
    community: 'Gro\u00df-Gerau',
    latitude: 49.9939,
    longitude: 8.3672
  },
  {
    id: 5414,
    zipCode: '65479',
    city: 'Raunheim',
    state: 'Hessen',
    community: 'Gro\u00df-Gerau',
    latitude: 50.0132,
    longitude: 8.4525
  },
  {
    id: 5415,
    zipCode: '65510',
    city: 'H\u00fcnstetten',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.2333,
    longitude: 8.1833
  },
  {
    id: 5416,
    zipCode: '65510',
    city: 'Idstein',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.2177,
    longitude: 8.2668
  },
  {
    id: 5417,
    zipCode: '65527',
    city: 'Niedernhausen',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.1631,
    longitude: 8.3134
  },
  {
    id: 5418,
    zipCode: '65529',
    city: 'Waldems',
    state: 'Hessen',
    community: 'Rheingau-Taunus-Kreis',
    latitude: 50.25,
    longitude: 8.3333
  },
  {
    id: 5419,
    zipCode: '65719',
    city: 'Hofheim am Taunus',
    state: 'Hessen',
    community: 'Main-Taunus-Kreis',
    latitude: 50.0902,
    longitude: 8.4493
  },
  {
    id: 5420,
    zipCode: '65760',
    city: 'Eschborn',
    state: 'Hessen',
    community: 'Main-Taunus-Kreis',
    latitude: 50.1433,
    longitude: 8.5711
  },
  {
    id: 5421,
    zipCode: '65779',
    city: 'Kelkheim (Taunus)',
    state: 'Hessen',
    community: 'Main-Taunus-Kreis',
    latitude: 50.137,
    longitude: 8.4502
  },
  {
    id: 5422,
    zipCode: '65795',
    city: 'Hattersheim',
    state: 'Hessen',
    community: 'Main-Taunus-Kreis',
    latitude: 50.0785,
    longitude: 8.4755
  },
  {
    id: 5423,
    zipCode: '65812',
    city: 'Bad Soden am Taunus',
    state: 'Hessen',
    community: 'Main-Taunus-Kreis',
    latitude: 50.1408,
    longitude: 8.5045
  },
  {
    id: 5424,
    zipCode: '65817',
    city: 'Eppstein',
    state: 'Hessen',
    community: 'Main-Taunus-Kreis',
    latitude: 50.1428,
    longitude: 8.3923
  },
  {
    id: 5425,
    zipCode: '65824',
    city: 'Schwalbach am Taunus',
    state: 'Hessen',
    community: 'Main-Taunus-Kreis',
    latitude: 50.15,
    longitude: 8.5333
  },
  {
    id: 5426,
    zipCode: '65830',
    city: 'Kriftel',
    state: 'Hessen',
    community: 'Main-Taunus-Kreis',
    latitude: 50.0841,
    longitude: 8.4698
  },
  {
    id: 5427,
    zipCode: '65835',
    city: 'Liederbach am Taunus',
    state: 'Hessen',
    community: 'Main-Taunus-Kreis',
    latitude: 50.1185,
    longitude: 8.4885
  },
  {
    id: 5428,
    zipCode: '65843',
    city: 'Sulzbach',
    state: 'Hessen',
    community: 'Main-Taunus-Kreis',
    latitude: 50.134,
    longitude: 8.528
  },
  {
    id: 5429,
    zipCode: '65929',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1045,
    longitude: 8.5389
  },
  {
    id: 5430,
    zipCode: '65931',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.091,
    longitude: 8.5044
  },
  {
    id: 5431,
    zipCode: '65933',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.0979,
    longitude: 8.5999
  },
  {
    id: 5432,
    zipCode: '65934',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1027,
    longitude: 8.5749
  },
  {
    id: 5433,
    zipCode: '65936',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    community: 'Frankfurt am Main, Stadt',
    latitude: 50.1207,
    longitude: 8.5663
  },
  {
    id: 5434,
    zipCode: '68519',
    city: 'Viernheim',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.5403,
    longitude: 8.5782
  },
  {
    id: 5435,
    zipCode: '68623',
    city: 'Lampertheim',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.5979,
    longitude: 8.4725
  },
  {
    id: 5436,
    zipCode: '68642',
    city: 'B\u00fcrstadt',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.6427,
    longitude: 8.4594
  },
  {
    id: 5437,
    zipCode: '68647',
    city: 'Biblis',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.6917,
    longitude: 8.4586
  },
  {
    id: 5438,
    zipCode: '68649',
    city: 'Gro\u00df-Rohrheim',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.7211,
    longitude: 8.4828
  },
  {
    id: 5439,
    zipCode: '69239',
    city: 'Neckarsteinach',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.4074,
    longitude: 8.8434
  },
  {
    id: 5440,
    zipCode: '69434',
    city: 'Hirschhorn',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.4457,
    longitude: 8.8959
  },
  {
    id: 5441,
    zipCode: '69483',
    city: 'Wald-Michelbach',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.57,
    longitude: 8.8317
  },
  {
    id: 5442,
    zipCode: '69488',
    city: 'Birkenau',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.5625,
    longitude: 8.7069
  },
  {
    id: 5443,
    zipCode: '69509',
    city: 'M\u00f6rlenbach',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.5992,
    longitude: 8.7347
  },
  {
    id: 5444,
    zipCode: '69517',
    city: 'Gorxheimertal',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.5325,
    longitude: 8.7295
  },
  {
    id: 5445,
    zipCode: '69518',
    city: 'Abtsteinach',
    state: 'Hessen',
    community: 'Bergstra\u00dfe',
    latitude: 49.5367,
    longitude: 8.7875
  },
  {
    id: 5446,
    zipCode: '35037',
    city: 'Marburg',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.803,
    longitude: 8.7625
  },
  {
    id: 5447,
    zipCode: '35039',
    city: 'Marburg',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.8098,
    longitude: 8.7773
  },
  {
    id: 5448,
    zipCode: '35041',
    city: 'Marburg',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.8165,
    longitude: 8.7513
  },
  {
    id: 5449,
    zipCode: '35043',
    city: 'Marburg',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.7765,
    longitude: 8.7645
  },
  {
    id: 5450,
    zipCode: '35075',
    city: 'Gladenbach',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.7685,
    longitude: 8.5808
  },
  {
    id: 5451,
    zipCode: '35080',
    city: 'Bad Endbach',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.75,
    longitude: 8.5
  },
  {
    id: 5452,
    zipCode: '35083',
    city: 'Wetter',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.9025,
    longitude: 8.7237
  },
  {
    id: 5453,
    zipCode: '35085',
    city: 'Ebsdorfergrund',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.726,
    longitude: 8.857
  },
  {
    id: 5454,
    zipCode: '35091',
    city: 'C\u00f6lbe',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.851,
    longitude: 8.7809
  },
  {
    id: 5455,
    zipCode: '35094',
    city: 'Lahntal',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.8619,
    longitude: 8.6976
  },
  {
    id: 5456,
    zipCode: '35096',
    city: 'Weimar',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.7542,
    longitude: 8.6958
  },
  {
    id: 5457,
    zipCode: '35102',
    city: 'Lohra',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.7333,
    longitude: 8.6333
  },
  {
    id: 5458,
    zipCode: '35112',
    city: 'Fronhausen',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.7,
    longitude: 8.7
  },
  {
    id: 5459,
    zipCode: '35117',
    city: 'M\u00fcnchhausen',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.9608,
    longitude: 8.7184
  },
  {
    id: 5460,
    zipCode: '35216',
    city: 'Biedenkopf',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.9112,
    longitude: 8.5302
  },
  {
    id: 5461,
    zipCode: '35232',
    city: 'Dautphetal',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.8417,
    longitude: 8.5542
  },
  {
    id: 5462,
    zipCode: '35236',
    city: 'Breidenbach',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.8873,
    longitude: 8.4575
  },
  {
    id: 5463,
    zipCode: '35239',
    city: 'Steffenberg',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.85,
    longitude: 8.4833
  },
  {
    id: 5464,
    zipCode: '35260',
    city: 'Stadtallendorf',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.8226,
    longitude: 9.0129
  },
  {
    id: 5465,
    zipCode: '35274',
    city: 'Kirchhain',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.8272,
    longitude: 8.9281
  },
  {
    id: 5466,
    zipCode: '35279',
    city: 'Neustadt (Hessen)',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.85,
    longitude: 9.1167
  },
  {
    id: 5467,
    zipCode: '35282',
    city: 'Rauschenberg',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.8833,
    longitude: 8.9186
  },
  {
    id: 5468,
    zipCode: '35287',
    city: 'Am\u00f6neburg',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.796,
    longitude: 8.9233
  },
  {
    id: 5469,
    zipCode: '35288',
    city: 'Wohratal',
    state: 'Hessen',
    community: 'Marburg-Biedenkopf',
    latitude: 50.9375,
    longitude: 8.9333
  },
  {
    id: 5470,
    zipCode: '35305',
    city: 'Gr\u00fcnberg',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.594,
    longitude: 8.9587
  },
  {
    id: 5471,
    zipCode: '35315',
    city: 'Homberg (Ohm)',
    state: 'Hessen',
    community: 'Vogelsbergkreis',
    latitude: 50.7333,
    longitude: 9.0
  },
  {
    id: 5472,
    zipCode: '35321',
    city: 'Laubach',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.542,
    longitude: 8.9903
  },
  {
    id: 5473,
    zipCode: '35325',
    city: 'M\u00fccke',
    state: 'Hessen',
    community: 'Vogelsbergkreis',
    latitude: 50.6284,
    longitude: 9.0547
  },
  {
    id: 5474,
    zipCode: '35327',
    city: 'Ulrichstein',
    state: 'Hessen',
    community: 'Vogelsbergkreis',
    latitude: 50.5755,
    longitude: 9.1927
  },
  {
    id: 5475,
    zipCode: '35329',
    city: 'Gem\u00fcnden (Felda)',
    state: 'Hessen',
    community: 'Vogelsbergkreis',
    latitude: 50.7,
    longitude: 9.05
  },
  {
    id: 5476,
    zipCode: '35390',
    city: 'Gie\u00dfen',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.5849,
    longitude: 8.6742
  },
  {
    id: 5477,
    zipCode: '35392',
    city: 'Gie\u00dfen',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.5669,
    longitude: 8.6538
  },
  {
    id: 5478,
    zipCode: '35394',
    city: 'Gie\u00dfen',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.5746,
    longitude: 8.7135
  },
  {
    id: 5479,
    zipCode: '35396',
    city: 'Gie\u00dfen',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.6165,
    longitude: 8.7044
  },
  {
    id: 5480,
    zipCode: '35398',
    city: 'Gie\u00dfen',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.5833,
    longitude: 8.65
  },
  {
    id: 5481,
    zipCode: '35410',
    city: 'Hungen',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.4737,
    longitude: 8.8933
  },
  {
    id: 5482,
    zipCode: '35415',
    city: 'Pohlheim',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.5167,
    longitude: 8.7
  },
  {
    id: 5483,
    zipCode: '35418',
    city: 'Buseck',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.6148,
    longitude: 8.783
  },
  {
    id: 5484,
    zipCode: '35423',
    city: 'Lich',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.5208,
    longitude: 8.8157
  },
  {
    id: 5485,
    zipCode: '35428',
    city: 'Langg\u00f6ns',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.5,
    longitude: 8.6667
  },
  {
    id: 5486,
    zipCode: '35435',
    city: 'Wettenberg',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.6167,
    longitude: 8.65
  },
  {
    id: 5487,
    zipCode: '35440',
    city: 'Linden',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.5374,
    longitude: 8.6497
  },
  {
    id: 5488,
    zipCode: '35444',
    city: 'Biebertal',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.6182,
    longitude: 8.6017
  },
  {
    id: 5489,
    zipCode: '35447',
    city: 'Reiskirchen',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.6,
    longitude: 8.8333
  },
  {
    id: 5490,
    zipCode: '35452',
    city: 'Heuchelheim',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.5833,
    longitude: 8.6333
  },
  {
    id: 5491,
    zipCode: '35457',
    city: 'Lollar',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.6465,
    longitude: 8.7049
  },
  {
    id: 5492,
    zipCode: '35460',
    city: 'Staufenberg',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.662,
    longitude: 8.7316
  },
  {
    id: 5493,
    zipCode: '35463',
    city: 'Fernwald',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.55,
    longitude: 8.7833
  },
  {
    id: 5494,
    zipCode: '35466',
    city: 'Rabenau',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.6775,
    longitude: 8.8643
  },
  {
    id: 5495,
    zipCode: '35469',
    city: 'Allendorf (Lumda)',
    state: 'Hessen',
    community: 'Gie\u00dfen',
    latitude: 50.6833,
    longitude: 8.8333
  },
  {
    id: 5496,
    zipCode: '35576',
    city: 'Wetzlar',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.5665,
    longitude: 8.5247
  },
  {
    id: 5497,
    zipCode: '35578',
    city: 'Wetzlar',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.5455,
    longitude: 8.505
  },
  {
    id: 5498,
    zipCode: '35579',
    city: 'Wetzlar',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.55,
    longitude: 8.5
  },
  {
    id: 5499,
    zipCode: '35580',
    city: 'Wetzlar',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.55,
    longitude: 8.5
  },
  {
    id: 5500,
    zipCode: '35581',
    city: 'Wetzlar',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.55,
    longitude: 8.5
  },
  {
    id: 5501,
    zipCode: '35582',
    city: 'Wetzlar',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.55,
    longitude: 8.5
  },
  {
    id: 5502,
    zipCode: '35583',
    city: 'Wetzlar',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.55,
    longitude: 8.5
  },
  {
    id: 5503,
    zipCode: '35584',
    city: 'Wetzlar',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.55,
    longitude: 8.5
  },
  {
    id: 5504,
    zipCode: '35585',
    city: 'Wetzlar',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.55,
    longitude: 8.5
  },
  {
    id: 5505,
    zipCode: '35586',
    city: 'Wetzlar',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.55,
    longitude: 8.5
  },
  {
    id: 5506,
    zipCode: '35606',
    city: 'Solms',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.5362,
    longitude: 8.407
  },
  {
    id: 5507,
    zipCode: '35614',
    city: 'A\u00dflar',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.5916,
    longitude: 8.4627
  },
  {
    id: 5508,
    zipCode: '35619',
    city: 'Braunfels Tiefenbach',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.5341,
    longitude: 8.3333
  },
  {
    id: 5509,
    zipCode: '35619',
    city: 'Braunfels Braunfels',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.5171,
    longitude: 8.3834
  },
  {
    id: 5510,
    zipCode: '35619',
    city: 'Braunfels Neukirchen',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.4843,
    longitude: 8.4385
  },
  {
    id: 5511,
    zipCode: '35619',
    city: 'Braunfels Philippstein',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.4922,
    longitude: 8.3758
  },
  {
    id: 5512,
    zipCode: '35619',
    city: 'Braunfels Bonbaden',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.5033,
    longitude: 8.4282
  },
  {
    id: 5513,
    zipCode: '35619',
    city: 'Braunfels Altenkirchen',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.4725,
    longitude: 8.4071
  },
  {
    id: 5514,
    zipCode: '35619',
    city: 'Braunfels',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.5154,
    longitude: 8.3892
  },
  {
    id: 5515,
    zipCode: '35625',
    city: 'H\u00fcttenberg',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.521,
    longitude: 8.5758
  },
  {
    id: 5516,
    zipCode: '35630',
    city: 'Ehringshausen',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.6,
    longitude: 8.3833
  },
  {
    id: 5517,
    zipCode: '35633',
    city: 'Lahnau',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.5833,
    longitude: 8.5667
  },
  {
    id: 5518,
    zipCode: '35638',
    city: 'Leun',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.5513,
    longitude: 8.3584
  },
  {
    id: 5519,
    zipCode: '35641',
    city: 'Sch\u00f6ffengrund',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.4935,
    longitude: 8.4718
  },
  {
    id: 5520,
    zipCode: '35644',
    city: 'Hohenahr',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.6689,
    longitude: 8.4896
  },
  {
    id: 5521,
    zipCode: '35647',
    city: 'Waldsolms',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.4167,
    longitude: 8.5167
  },
  {
    id: 5522,
    zipCode: '35649',
    city: 'Bischoffen',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.7,
    longitude: 8.45
  },
  {
    id: 5523,
    zipCode: '35683',
    city: 'Dillenburg',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.7369,
    longitude: 8.2873
  },
  {
    id: 5524,
    zipCode: '35684',
    city: 'Dillenburg',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.7333,
    longitude: 8.2833
  },
  {
    id: 5525,
    zipCode: '35685',
    city: 'Dillenburg',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.7333,
    longitude: 8.2833
  },
  {
    id: 5526,
    zipCode: '35686',
    city: 'Dillenburg',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.7333,
    longitude: 8.2833
  },
  {
    id: 5527,
    zipCode: '35687',
    city: 'Dillenburg',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.7333,
    longitude: 8.2833
  },
  {
    id: 5528,
    zipCode: '35688',
    city: 'Dillenburg',
    state: 'Hessen',
    community: 'Lahn-Dill-Kreis',
    latitude: 50.7333,
    longitude: 8.2833
  },
  {
    id: 5529,
    zipCode: '35689',
    city: 'Dillenburg',
    state: 'Hessen',
    latitude: 50.7333,