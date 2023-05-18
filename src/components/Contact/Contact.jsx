import s from "./style.module.scss";

export function Contact() {
  return (
    <section className={s.container} id="contact">
      <h2>contactez nous</h2>
      <form>
        <div>
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Adresse Mail" />
          <input type="text" placeholder="Objet du Message" />
        </div>
        <div>
          <textarea placeholder="Votre Message" cols="30" rows="7"></textarea>
          <button>envoyer votre message</button>
        </div>
      </form>
    </section>
  );
}
