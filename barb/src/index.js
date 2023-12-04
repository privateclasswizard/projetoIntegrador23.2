import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Inicial from "../src/pages/Inicial/Inicial.js";
import Login from "../src/pages/Login/Login.js";
import Home from "../src/pages/Home/Home.js";
import RegistroUsuario from "../src/pages/RegistroUsuario/RegistroUsuario.js";
import RegistroBarbeiro from "../src/pages/RegistroBarbeiro/RegistroBarbeiro.js";
import RegistroHorario from "../src/pages/RegistroHorario/RegistroHorario.js";
import ConfirmarHorario from "../src/pages/CorfirmaHorario/ConfirmaHorario.js";
import Relatorio from "../src/pages/Relatorio/Relatorio.js";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/inicial", element: <Inicial /> },
  { path: "/login", element: <Login /> },
  { path: "/registrosUsuario", element: <RegistroUsuario /> },
  { path: "/registrarhorario", element: <RegistroHorario /> },
  { path: "/registrobarbeiro", element: <RegistroBarbeiro /> },
  { path: "/confirmarhorario", element: <ConfirmarHorario /> },
  { path: "/relatorios", element: <Relatorio /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


