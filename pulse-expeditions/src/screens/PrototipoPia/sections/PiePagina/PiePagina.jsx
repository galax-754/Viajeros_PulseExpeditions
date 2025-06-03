import React from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

// Lista de enlaces del pie de página
const footerLinks = [
  "Contáctanos",
  "Centro de Ayuda",
  "Directrices",
  "Política de Privacidad",
  "Términos de Servicio",
  "No Vender Mi Información Personal",
];

export const PiePagina = () => {
  return (
    // Pie de página principal de la aplicación
    <footer className="pie-pagina">
      {/* Lista de enlaces útiles */}
      <div className="pie-pagina__enlaces">
        {footerLinks.map((link, index) => (
          <a key={index} href="#" className="pie-pagina__enlace">
            {link}
          </a>
        ))}
      </div>

      {/* Iconos de redes sociales */}
      <div className="pie-pagina__redes">
        <a href="#" className="pie-pagina__icono">
          <FacebookIcon />
        </a>
        <a href="#" className="pie-pagina__icono">
          <TwitterIcon />
        </a>
        <a href="#" className="pie-pagina__icono">
          <InstagramIcon />
        </a>
      </div>

      {/* Texto de derechos de autor */}
      <p className="pie-pagina__copyright">
        © 2025 Pulse Expeditions, Inc. Todos los derechos reservados.
      </p>
    </footer>
  );
};