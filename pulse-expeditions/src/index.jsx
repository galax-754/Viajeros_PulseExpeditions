// Este es el archivo principal de entrada de la aplicación React
// Configura el punto de montaje de la aplicación y establece el enrutamiento básico

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PrototipoPia } from "./screens/PrototipoPia";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <BrowserRouter>
      <PrototipoPia />
    </BrowserRouter>
  </StrictMode>
);