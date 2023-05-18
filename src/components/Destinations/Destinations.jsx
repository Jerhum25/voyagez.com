import s from "./style.module.scss";
import {destinationsList} from "../../data/destinationsList";
import { Link } from "react-router-dom";

export function Destinations() {
  return (
    <div className={s.container}>
      {destinationsList.map(({ index, nom, src, alt, id }) => (
        <Link to={`/details/${id}`} className={s.destination} key={index + nom}>
          <img src={src} alt={alt} />
          <h2>{nom}</h2>
        </Link>
      ))}
    </div>
  );
}
