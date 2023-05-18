import { APropos } from "../../components/APropos/APropos";
import { Contact } from "../../components/Contact/Contact";
import { Destinations } from "../../components/Destinations/Destinations";
import { InfoVoyage } from "../../components/InfosVoyage/InfosVoyage";
import { Presentation } from "../../components/Presentation/Presentation";
import s from "./style.module.scss";

export function Accueil() {
  return (
    <>
      <Presentation />
      <InfoVoyage />
      <Destinations />
      <APropos />
      <Contact />
    </>
  );
}
