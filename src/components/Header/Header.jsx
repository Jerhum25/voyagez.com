import s from "./style.module.scss";
import { useState, useEffect } from "react";

export function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
    console.log(toggle);
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
      <div className={s.logo}>
        <a href="/">
          <img src="/assets/3d-model-gd9605aad7_640.jpg" alt="logo" />
        </a>
        <h1>Voyagez.com</h1>
      </div>
      <div
        className={toggle || largeur < 475 ? s.burgerMenuOpen : s.burgerMenu}
        onClick={toggleMenu}
      >
        <div className={s.line}></div>
      </div>
      <nav
        className={toggle || largeur < 475 ? s.navMobile : s.navig}
        onClick={toggle || largeur < 475 ? toggleMenu : undefined}
      >
        <li>
          <a href="/#">accueil</a>
        </li>
        <li>
          <a href="/#destinations">nos destinations</a>
        </li>
        <li>
          <a href="/#aPropos">à propos de nous</a>
        </li>
        <li>
          <a href="/#contact">nous contacter</a>
        </li>
      </nav>
    </div>
  );
}
