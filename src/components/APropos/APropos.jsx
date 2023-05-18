import s from "./style.module.scss";

export function APropos() {
  return (
    <div className={s.container} id="aPropos">
      <h2>à propos de nous</h2>
      <div>
        <p>
          Notre agence de voyage est dédiée à offrir à nos clients des
          expériences inoubliables à travers le monde. Nous sommes passionnés
          par le voyage et nous nous efforçons de fournir des services
          exceptionnels à tous nos clients. Notre équipe de professionnels
          expérimentés est là pour vous aider à planifier chaque détail de votre
          voyage, de la sélection de votre destination à l'organisation de votre
          hébergement, de vos activités et de votre transport. Que vous soyez à
          la recherche d'un voyage d'aventure, d'une escapade romantique, d'un
          voyage en famille ou d'un voyage d'affaires, nous sommes là pour
          répondre à tous vos besoins de voyage. Nous nous engageons à offrir
          des voyages sur mesure qui répondent à vos goûts et à vos exigences
          individuelles, afin que vous puissiez profiter de chaque moment de
          votre voyage en toute tranquillité d'esprit.
        </p>
        <img src="assets/travel-g030d14cdf_1920.jpg" alt="" />
      </div>
    </div>
  );
}
