import s from "./style.module.scss";
import { Navigate, useParams } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { destinationsList } from "../../data/destinationsList";

export function Destination() {
  let { id } = useParams();
  const getOneDestination = (id) => {
    return destinationsList.find((log) => log.id === id);
  };
  const singleDestination = getOneDestination(id);

  return singleDestination ? (
    <div className={s.destination}>
      <Link to={"/#destinations"}>
        <i className="fa-solid fa-chevron-left"></i>Retour aux destinations
      </Link>
      <img src={singleDestination.src} alt={singleDestination.alt} />
      <h2>{singleDestination.nom}</h2>
      <h3>{singleDestination.prix}€ la semaine par personne</h3>
      <p>{singleDestination.description}</p>
    </div>
  ) : (
    <Navigate to={"/*"} />
  );
}
