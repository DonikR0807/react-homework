export type ActorInMovie = {
  name: string;
  photo: string; // base64 img
};

export type FullMovieInfo = {
  id: string;
  title: string;
  description: string;
  release_year: number;
  poster: string; //base64 img
  genre: string;
  rating: string; //float
  total_rates_count: string; //int
  actors: ActorInMovie[];
};

export type ShortMovieInfo = Pick<
  FullMovieInfo,
  | "id"
  | "title"
  | "description"
  | "rating"
  | "genre"
  | "release_year"
  | "poster"
>;

export type MovieSearchResult = {
  search_result: ShortMovieInfo[];
  total_pages: number;
};
