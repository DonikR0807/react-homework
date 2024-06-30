export interface RateMovieBody {
  movieId: string;
  user_rate: number;
}

export interface RateMovieResponse {
  token: string;
}

export type Istate = Record<string, number>;
