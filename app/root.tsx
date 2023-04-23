import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import themeStylesheetUrl from "./styles/theme.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      type: "text/css",
    },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css",
    },
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: themeStylesheetUrl },
    {
      rel: "preconnect",
      href: "https://www.google.com",
    },
    {
      rel: "preconnect",
      href: "https://www.gstatic.com",
      crossOrigin: "anonymous",
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Nutricionista - Esther Zamora",
  viewport: "width=device-width,initial-scale=1",
  description:
    "¿Estás buscando un Dietista Nutricionista online o en Valencia? Puedo ayudarte a mejorar tu salud, mediante un plan de alimentación personalizado. Visita nuestros servicios: sobrepeso, obesidad, diabetes y otras patologías, embarazo y lactancia, alimentación vegetariana y vegana… ¡Aprovecha los descuentos especiales al reservar hoy la cita!",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-[#FFF] font-poppins text-base text-[#313131] ">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
