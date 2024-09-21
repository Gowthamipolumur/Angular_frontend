export interface Movie {
  id: number;
  movieName: string;  // Previously 'name', now 'movieName' as used in your template
  genre: string;      // If this field should be 'genre' and not 'genres'
  duration: number;
  releaseDate: string;
  rating: number;
  description: string;
  imageUrl: string;
  trailerUrl: string;
  cast: string;
  director: string;
  language: string;
  category: string;
}
