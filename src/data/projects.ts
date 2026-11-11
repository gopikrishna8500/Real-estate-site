export type City = 'Hyderabad' | 'Bangalore' | 'Chennai' | 'Mumbai' | 'Pune';
export type PropertyType = 'Apartment' | 'Villa' | 'Commercial';
export type ProjectStatus = 'Ready to Move' | 'Under Construction' | 'New Launch';

export interface Project {
  id: string;
  name: string;
  city: City;
  locality: string;
  type: PropertyType;
  status: ProjectStatus;
  priceRange: string;
  badge: string;
  image: string;
}

export const CITIES: City[] = ['Hyderabad', 'Bangalore', 'Chennai', 'Mumbai', 'Pune'];
export const PROPERTY_TYPES: PropertyType[] = ['Apartment', 'Villa', 'Commercial'];

export const PROJECTS: Project[] = [
  {
    id: 'hyd-1',
    name: 'Vertex 33 West',
    city: 'Hyderabad',
    locality: 'Nallagandla',
    type: 'Apartment',
    status: 'Ready to Move',
    priceRange: 'INR 1.12 - 1.75 Cr',
    badge: 'Fully Gated Community',
    image: 'https://images.pexels.com/photos/28513670/pexels-photo-28513670.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'hyd-2',
    name: 'Stone Ridge',
    city: 'Hyderabad',
    locality: 'Hitech City',
    type: 'Apartment',
    status: 'Under Construction',
    priceRange: 'INR 1.10 - 3.04 Cr',
    badge: 'Fully Gated Community',
    image: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'hyd-3',
    name: 'Skyline Oriana',
    city: 'Hyderabad',
    locality: 'Moosapet',
    type: 'Apartment',
    status: 'New Launch',
    priceRange: 'INR 1.12 - 4.31 Cr',
    badge: 'Luxury Towers',
    image: 'https://images.pexels.com/photos/7168456/pexels-photo-7168456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'hyd-4',
    name: 'Sage Raghava',
    city: 'Hyderabad',
    locality: 'Kollur',
    type: 'Villa',
    status: 'Under Construction',
    priceRange: 'INR 9.3 - 10.5 Cr',
    badge: 'Independent Villas',
    image: 'https://images.pexels.com/photos/11646716/pexels-photo-11646716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'blr-1',
    name: 'Prestige Greenwood',
    city: 'Bangalore',
    locality: 'Whitefield',
    type: 'Apartment',
    status: 'Ready to Move',
    priceRange: 'INR 90 L - 1.8 Cr',
    badge: 'Fully Gated Community',
    image: 'https://images.pexels.com/photos/11631278/pexels-photo-11631278.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'blr-2',
    name: 'Ecospace Villas',
    city: 'Bangalore',
    locality: 'Sarjapur Road',
    type: 'Villa',
    status: 'Under Construction',
    priceRange: 'INR 2.1 Cr onwards',
    badge: 'Independent Villas',
    image: 'https://images.pexels.com/photos/28054849/pexels-photo-28054849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'blr-3',
    name: 'Tech Park Plaza',
    city: 'Bangalore',
    locality: 'Outer Ring Road',
    type: 'Commercial',
    status: 'New Launch',
    priceRange: 'INR 85 L onwards',
    badge: 'Office Spaces',
    image: 'https://images.pexels.com/photos/40489996/pexels-photo-40489996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'che-1',
    name: 'Marina Bay Towers',
    city: 'Chennai',
    locality: 'OMR',
    type: 'Apartment',
    status: 'New Launch',
    priceRange: 'INR 75 L - 1.2 Cr',
    badge: 'Sea-Facing Views',
    image: 'https://images.pexels.com/photos/9170385/pexels-photo-9170385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'che-2',
    name: 'Green Meadows Homes',
    city: 'Chennai',
    locality: 'Porur',
    type: 'Villa',
    status: 'Ready to Move',
    priceRange: 'INR 1.4 - 2.2 Cr',
    badge: 'Fully Gated Community',
    image: 'https://images.pexels.com/photos/11646716/pexels-photo-11646716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'mum-1',
    name: 'Harbour Crest',
    city: 'Mumbai',
    locality: 'Thane West',
    type: 'Apartment',
    status: 'Under Construction',
    priceRange: 'INR 1.1 - 2.6 Cr',
    badge: 'Sea-Facing Views',
    image: 'https://images.pexels.com/photos/5265832/pexels-photo-5265832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'mum-2',
    name: 'Bay Point Commercial',
    city: 'Mumbai',
    locality: 'Navi Mumbai',
    type: 'Commercial',
    status: 'New Launch',
    priceRange: 'INR 1.6 Cr onwards',
    badge: 'Office Spaces',
    image: 'https://images.pexels.com/photos/7030651/pexels-photo-7030651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'pun-1',
    name: 'Hillcrest Enclave',
    city: 'Pune',
    locality: 'Hinjewadi',
    type: 'Apartment',
    status: 'Ready to Move',
    priceRange: 'INR 70 L - 1.1 Cr',
    badge: 'Fully Gated Community',
    image: 'https://images.pexels.com/photos/37488703/pexels-photo-37488703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'pun-2',
    name: 'Riverside Row Houses',
    city: 'Pune',
    locality: 'Kharadi',
    type: 'Villa',
    status: 'Under Construction',
    priceRange: 'INR 1.8 - 2.9 Cr',
    badge: 'Independent Villas',
    image: 'https://images.pexels.com/photos/7028105/pexels-photo-7028105.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];
