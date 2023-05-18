import { HashLink as Link } from "react-router-hash-link";
import s from "./style.module.scss";

export function Footer() {
  return (
    <div className={s.container}>
      <div className={s.links}>
        <div className={s.contactFooter}>
          <h3>Contactez-nous</h3>
          <p>
            <span>Voyagez.com</span>
            <br />
            123 rue des Voyageurs
            <br />
            75001 Paris
            <br />
            <br />
            Téléphone : 01 23 45 67 89
          </p>
        </div>
        <div className={s.liensRapides}>
          <h3>Liens rapides</h3>
          <ul>
            <li>
              <Link to="/#">accueil</Link>
            </li>
            <li>
              <Link to="/#destinations">nos destinations</Link>
            </li>
            <li>
              <Link to="/#aPropos">à propos de nous</Link>
            </li>
            <li>
              <Link to="/#contact">nous contacter</Link>
            </li>
          </ul>
        </div>
        <div className={s.suivezNous}>
          <h3>Suivez-nous</h3>
          <ul className={s.social}>
            <li>
              <a href="https://www.facebook.com">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.fr">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.copyright}>
        <p className={s.copy}>&copy;2023 Jerhum</p>
      </div>
    </div>
  );
}
