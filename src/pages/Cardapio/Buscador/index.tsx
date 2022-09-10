import { CgSearch } from "react-icons/Cg";
import styles from "./Buscador.module.scss";

interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({ busca, setBusca }: Props) {
  return <div className={styles.buscador}>
    <input type="search" name="busca" id="busca" placeholder="Buscar" onChange={e => {
      setBusca(e.target.value);
    }} value={busca} />
    <CgSearch
      size={20}
      color="4C4D5F" />
  </div>;
}