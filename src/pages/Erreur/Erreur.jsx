import { NavLink } from "react-router-dom";
import s from "./style.module.scss";

export function Erreur() {
  return (
    <div className={s.container}>
      <h2>Erreur 404</h2>
      <h3>La page que vous demandez est introuvable !!!</h3>{" "}
      <NavLink to="/">
        <h4 className="retourAccueil">Retourner à la page d'accueil</h4>
      </NavLink>
    </div>
  );
}
