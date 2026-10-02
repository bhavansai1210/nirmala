export interface BusinessInfo {
  id: 'nirmalaJewellers' | 'mamidiJewellers' | 'nirmalaGrandFunctionHall';
  num: string;
  name: string;
  category: 'Jewellery' | 'Celebrations';
  tagline: string;
  eyebrow: string;
  shortDesc: string;
  phone: string;
  displayPhone: string;
  address: string;
  area: string;
  city: string;
  pincode: string;
  mapsUrl: string;
  showAccommodation?: boolean;
}

export const businesses: Record<string, BusinessInfo> = {
  nirmalaJewellers: {
    id: 'nirmalaJewellers',
    num: '01',
    name: 'Nirmala Jewellers',
    category: 'Jewellery',
    tagline: 'Crafted for life’s meaningful moments.',
    eyebrow: '01 · JEWELLERY',
    shortDesc: 'A trusted jewellery destination in the heart of Rajamahendravaram.',
    phone: '+917997994411',
    displayPhone: '+91 79979 94411',
    address: 'KVR Swamy Road, Nalla Mandu St, beside OK Stores, Rajamahendravaram, Andhra Pradesh 533101',
    area: 'KVR Swamy Road',
    city: 'Rajamahendravaram',
    pincode: '533101',
    mapsUrl: 'https://maps.google.com/?q=Nirmala+Jewellers+KVR+Swamy+Road+Rajamahendravaram'
  },

  mamidiJewellers: {
    id: 'mamidiJewellers',
    num: '02',
    name: 'Mamidi Venkataraju Jewellers',
    category: 'Jewellery',
    tagline: 'Timeless craftsmanship & heritage presence.',
    eyebrow: '02 · JEWELLERY',
    shortDesc: 'Another name connected to the jewellery story of Rajamahendravaram.',
    phone: '', // Intentionally empty - do not display fake numbers
    displayPhone: '',
    address: '2Q3C+76M, Main Rd, VGTPS Colony, Mangalavaripeta, Dowlaiswaram, Rajamahendravaram, Andhra Pradesh 533101',
    area: 'Dowlaiswaram',
    city: 'Rajamahendravaram',
    pincode: '533101',
    mapsUrl: 'https://maps.google.com/?q=Mamidi+Venkataraju+Jewellers+Main+Road+Dowlaiswaram+Rajamahendravaram'
  },

  nirmalaGrandFunctionHall: {
    id: 'nirmalaGrandFunctionHall',
    num: '03',
    name: 'Nirmala Grand Function Hall',
    category: 'Celebrations',
    tagline: 'Make room for the moments that matter.',
    eyebrow: '03 · CELEBRATIONS',
    shortDesc: 'A venue in Mangalavaripeta, Rajamahendravaram for gatherings, celebrations and memorable occasions.',
    phone: '+918832427444',
    displayPhone: '+91 883 242 7444',
    address: '8-18-22, Kambham Choultry St, Mangalavaripeta, Rajamahendravaram, Andhra Pradesh 533101',
    area: 'Mangalavaripeta',
    city: 'Rajamahendravaram',
    pincode: '533101',
    mapsUrl: 'https://maps.google.com/?q=Nirmala+Grand+Function+Hall+Kambham+Choultry+St+Rajamahendravaram',
    showAccommodation: true
  }
};
