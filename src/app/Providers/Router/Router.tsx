import {
  Route,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../../Layout";
import { RouteConfig, RouteNames } from "src/shared/lib";
import { MainPage } from "src/pages/Main";
import { NotFoundPage } from "src/pages/NotFound";
import { MoviePage } from "src/pages/Movie";

const routeElements: Record<RouteNames, RouteObject> = {
  [RouteNames.MAIN]: {
    path: RouteConfig.main,
    element: <MainPage></MainPage>,
  },
  [RouteNames.MOVIE]: {
    path: RouteConfig.MOVIE,
    element: <MoviePage></MoviePage>,
  },
  [RouteNames.NOT_FOUND]: {
    path: RouteConfig.NOT_FOUND,
    element: <NotFoundPage></NotFoundPage>,
  },
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      {Object.values(routeElements).map(({ element, path }) => (
        <Route element={element} path={path} key={path} />
      ))}
    </Route>,
  ),
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
