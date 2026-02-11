import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import Contato from "./routes/Mapa.jsx";
import Linha from "./routes/Linha.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // rota padrão "/"
        element: <Home />,
      },
      {
        path: "linha",
        element: <Linha />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
