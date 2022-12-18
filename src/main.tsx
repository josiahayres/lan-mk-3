import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { MantineTheme } from "./mantine-theme";
import { router } from "./router";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <MantineTheme>
        <RouterProvider router={router} />
      </MantineTheme>
    </React.StrictMode>
  );
} else {
  console.error("Could not find element with ID 'root'");
}
