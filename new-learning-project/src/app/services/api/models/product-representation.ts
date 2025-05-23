import { RatingRepresentation } from '../models/rating-representation'; // adjust the path as needed

export interface ProductRepresentation {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: RatingRepresentation;
  // Add any other properties you need from the API response
  // For example, if you want to include the 'count' property from the rating object
  // count: number;
  // Add any other properties you need from the API response
}
