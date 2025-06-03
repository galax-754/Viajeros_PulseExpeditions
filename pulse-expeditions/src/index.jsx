// Este es el archivo principal de entrada de la aplicación React
// Configura el punto de montaje de la aplicación y establece el enrutamiento básico

import { StrictMode } from "react"; //una herramienta que ayuda a detectar errores comunes en el desarrollo
import { createRoot } from "react-dom/client"; //es lo que React usa para mostrar la aplicación dentro del HTML
import { BrowserRouter } from "react-router-dom"; //permite que la aplicación use rutas (diferentes páginas sin recargar el sitio)
import { PrototipoPia } from "./screens/PrototipoPia"; 

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <BrowserRouter>
      <PrototipoPia />
    </BrowserRouter>
  </StrictMode>
);