import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { MantineTheme } from "./mantine-theme";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineTheme>
      <RouterProvider router={router} />
    </MantineTheme>
  </React.StrictMode>
);
