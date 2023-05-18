import s from "./style.module.scss";
import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
export function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const [largeur, setLargeur] = useState();
  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
      if (window.innerWidth > 475) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className={s.container}>
      <div className={s.logo} id="logo">
        <a href="/">
          <img src="/assets/3d-model-gd9605aad7_640.jpg" alt="logo" />
        </a>
        <h1>Voyagez.com</h1>
      </div>
      <div
        className={toggle ? s.burgerMenuOpen : s.burgerMenu}
        onClick={toggleMenu}
      >
        <div className={s.line}></div>
      </div>
      <nav
        className={toggle  ? s.navMobile : s.navig}
        onClick={largeur < 475 || toggle ? toggleMenu : undefined}
      >
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
      </nav>
    </div>
  );
}
