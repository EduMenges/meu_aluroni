import classNames from "classnames";
import { unit } from "mathjs";
import { IPrato } from "types/IPrato";
import styles from "./DetalhesDoPrato.module.scss";

const formatadorDeReais = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

export default function DetalhesPrato({
  category,
  size,
  serving,
  price
}: IPrato) {
  return <ul className={styles.tags}>
    <li
      className={classNames({
        [styles.tags__tipo]: true,
        [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true
      })}
    >
      {category.label}
    </li>
    <li className={styles.tags__porcao}>
      {unit(size, "g").toString()}
    </li>
    <li className={styles.tags__qtdpessoas}>
      {`Serve ${serving} pessoa${serving == 1 ? "" : "s"}`}
    </li>
    <li className={styles.tags__valor}>
      {formatadorDeReais.format(price - 0.01)}
    </li>
  </ul>;
}