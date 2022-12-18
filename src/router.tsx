import { createBrowserRouter } from "react-router-dom";

import Root, { loader as rootLoader } from "./routes/root";
import { ErrorPage } from "./error-page";
import { Contact } from "./routes/contact";
import { Home } from "./routes/home";
import { Competitors } from "./routes/competitors";

export const router = createBrowserRouter(
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
          path: "contact",
          element: <Contact />,
        },
        {
          path: "competitors",
          element: <Competitors />,
        },
      ],
    },
  ],
  { basename: "/lan-mk-3/" }
);
