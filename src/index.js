import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Accueil } from "./pages/Accueil/Accueil";
import { Details } from "./pages/Details/Details";
import { Erreur } from "./pages/Erreur/Erreur";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
      <Route path="*" element={<Erreur />} />
    </Routes>
  </BrowserRouter>
);
