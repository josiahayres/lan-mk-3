import {
  createBrowserRouter,
  createHashRouter,
  Navigate,
} from "react-router-dom";

import Root, { loader as rootLoader } from "./routes/root";
import { ErrorPage } from "./error-page";
import { Home } from "./routes/home";
import { Competitors } from "./routes/competitors";

export const router = createHashRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "competitors",
          element: <Competitors />,
        },
      ],
    },
  ],
  { basename: "" }
);
