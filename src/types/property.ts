export interface Property {
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  location: string;
  type: "Apartment" | "House" | "Studio" | "Shared Room";
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  rating: number;
  ownerId: string;
  ownerName: string;
  createdAt: string;
}

export interface PropertiesResponse {
  properties: Property[];
  total: number;
  page: number;
  totalPages: number;
}