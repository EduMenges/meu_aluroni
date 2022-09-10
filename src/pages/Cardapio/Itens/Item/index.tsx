import DetalhesPrato from "components/DetalhesDoPrato";
import { useNavigate } from "react-router-dom";
import { IPrato } from "types/IPrato";
import styles from "./Item.module.scss";

interface Props {
  item: IPrato
}

export default function Item({ item }: Props) {
  const navigate = useNavigate();

  return <article className={styles.item}
    onClick={() => navigate(`/prato/${item.id}`)}>
    <div className={styles.item__imagem}>
      <img src={item.photo} alt={item.title} /></div>
    <div className={styles.item__descricao}>
      <div className={styles.item__titulo}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
      <DetalhesPrato {...item} />
    </div>
  </article>;
}