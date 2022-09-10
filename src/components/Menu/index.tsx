import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
import stylesTema from "styles/Tema.module.scss";

interface IRotas {
  label: string,
  to: string
}

export default function Menu() {
  const rotas: IRotas[] = [{
    label: "Inicio",
    to: "/"
  }, {
    label: "Cardápio",
    to: "/cardapio"
  }, {
    label: "Sobre",
    to: "/sobre"
  }];

  return <nav className={`${styles.menu} ${stylesTema.container}`}>
    <Logo />
    <ul className={styles.menu__list}>
      {rotas.map((rota, index) => (
        <li key={index} className={styles.menu__link}>
          <Link to={rota.to}>
            {rota.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>;
}