type Paths = "/" | "/movie/:movieId" | "*";

export enum RouteNames {
  MAIN = "main",
  MOVIE = "MOVIE",
  NOT_FOUND = "NOT_FOUND",
}

export const RouteConfig: Record<RouteNames, Paths> = {
  [RouteNames.MAIN]: "/",
  [RouteNames.MOVIE]: "/movie/:movieId",
  [RouteNames.NOT_FOUND]: "*",
};
