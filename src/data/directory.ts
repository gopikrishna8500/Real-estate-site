import { Building2, Castle, Factory, Hotel, Landmark, Mountain, Sailboat, Ship, Store, Sun, Trees, Waves, type LucideIcon } from 'lucide-react';

export interface Developer {
  id: string;
  name: string;
  initials: string;
  totalProjects: number;
  experienceYears: number;
  readyToMove: number;
  underConstruction: number;
  newLaunch: number;
}

export interface Locality {
  id: string;
  name: string;
  city: string;
  pricePerSqFt: string;
  newProjects: number;
  image: string;
}

export interface CityTile {
  name: string;
  icon: LucideIcon;
}

export interface Faq {
  question: string;
  answer: string;
}

export const DEVELOPERS: Developer[] = [
  { id: 'dev-1', name: 'Lotus Crest Developers', initials: 'LC', totalProjects: 15, experienceYears: 15, readyToMove: 7, underConstruction: 8, newLaunch: 1 },
  { id: 'dev-2', name: 'Summit Urban Realty', initials: 'SU', totalProjects: 144, experienceYears: 33, readyToMove: 118, underConstruction: 29, newLaunch: 7 },
  { id: 'dev-3', name: 'Heritage Prime Group', initials: 'HP', totalProjects: 111, experienceYears: 70, readyToMove: 125, underConstruction: 9, newLaunch: 5 },
  { id: 'dev-4', name: 'Azure Park Builders', initials: 'AP', totalProjects: 42, experienceYears: 18, readyToMove: 20, underConstruction: 16, newLaunch: 6 },
];

export const LOCALITIES: Locality[] = [
  { id: 'loc-1', name: 'Gachibowli', city: 'Hyderabad', pricePerSqFt: 'INR 8.0K', newProjects: 18, image: 'https://images.pexels.com/photos/27151834/pexels-photo-27151834.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'loc-2', name: 'Miyapur', city: 'Hyderabad', pricePerSqFt: 'INR 5.7K', newProjects: 44, image: 'https://images.pexels.com/photos/12480801/pexels-photo-12480801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'loc-3', name: 'Kondapur', city: 'Hyderabad', pricePerSqFt: 'INR 7.1K', newProjects: 51, image: 'https://images.pexels.com/photos/26599716/pexels-photo-26599716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'loc-4', name: 'Whitefield', city: 'Bangalore', pricePerSqFt: 'INR 7.4K', newProjects: 36, image: 'https://images.pexels.com/photos/9169886/pexels-photo-9169886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export const CITY_TILES: CityTile[] = [
  { name: 'Hyderabad', icon: Landmark },
  { name: 'Mumbai', icon: Waves },
  { name: 'Thane', icon: Building2 },
  { name: 'Navi Mumbai', icon: Ship },
  { name: 'Delhi', icon: Castle },
  { name: 'Bangalore', icon: Sun },
  { name: 'Pune', icon: Mountain },
  { name: 'Chennai', icon: Hotel },
  { name: 'Noida', icon: Factory },
  { name: 'Gurgaon', icon: Trees },
  { name: 'Kolkata', icon: Store },
  { name: 'Goa', icon: Sailboat },
];

export const HYDERABAD_LOCALITIES = [
  'A S Rao Nagar', 'Adibatla', 'Alkapur', 'Ameerpet', 'Aminpur', 'Attapur', 'Bachupally',
  'Bahadurpally', 'Balanagar', 'Bandlaguda', 'Banjara Hills', 'Beeramguda', 'Bolarum', 'Bowrampet',
  'Chandanagar', 'Financial District', 'Gachibowli', 'Gagillapur', 'Gajularamaram', 'Gopanpally',
  'Hafeezpet', 'Hi Tech City', 'Hyder Nagar', 'Isnapur', 'Jubilee Hills', 'Kapra', 'Karmanghat',
  'Kismathpur', 'Kokapet', 'Kollur', 'Kompally', 'Kondapur', 'Kukatpally', 'LB Nagar', 'Miyapur',
];

export const FAQS: Faq[] = [
  {
    question: 'Do I really need a real estate agent to buy or sell property?',
    answer: 'An agent saves time by filtering listings, checking approvals and negotiating on your behalf. We offer that guidance without charging buyers a brokerage fee.',
  },
  {
    question: 'What services does Roof Enclaves offer?',
    answer: 'We help with new homes, resale properties, plots, commercial spaces, interior design, home loan assistance and documentation.',
  },
  {
    question: 'What legal checks do you perform before recommending a property?',
    answer: 'We verify title records, approved layouts, construction permits and encumbrance status before any project is shown to you.',
  },
  {
    question: 'Do you help with home loans?',
    answer: 'Yes. Our loan desk compares offers from partner banks and guides you through eligibility, documents and disbursement timelines.',
  },
  {
    question: 'What documents should I check before buying a property in Hyderabad?',
    answer: 'Review the sale deed, encumbrance certificate, approved building plan, occupancy certificate and the builder\'s land-ownership papers.',
  },
];
