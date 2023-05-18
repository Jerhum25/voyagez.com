import s from "./style.module.scss";

export function InfoVoyage() {
  return (
    <section className={s.container} id="destinations">
      <h2>nos destinations</h2>
      <form action="">
        <div className={s.info}>
          <label htmlFor="adulte">Nombre d'adulte(s)</label>
          <select id="adulte">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className={s.info}>
          <label htmlFor="enfant">Nombre d'enfant(s)</label>
          <select id="enfant">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className={s.info}>
          <label htmlFor="dateArrivee">Date d'arrivée</label>
          <input type="date" id="dateArrivee"/>
        </div>
        <div className={s.info}>
          <label htmlFor="dateDepart">Date de départ</label>
          <input type="date" id="dateDepart"/>
        </div>
        <button type="submit">valider</button>
      </form>
    </section>
  );
}
