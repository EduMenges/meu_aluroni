import { IFiltro } from "types/IFiltro";
import filtros from "./filtros.json";
import styles from "./Filtros.module.scss";
import classNames from "classnames";

interface Props {
    filtro: IFiltro,
    setFiltro: React.Dispatch<React.SetStateAction<IFiltro>>
}

export default function Filtro({ filtro, setFiltro }: Props) {

  function filtroEhOAtivo(opcao: IFiltro) {
    return filtro && filtro === opcao;
  }

  function defineFiltro(opcao: IFiltro) {
    filtroEhOAtivo(opcao) ? setFiltro(null) : setFiltro(opcao);
  }

  return (
    <ul className={styles.filtros}>
      {filtros.map(filtro => (
        <li
          key={filtro.id}>
          <button
            className={classNames({
              [styles.filtros__filtro]: true,
              [styles["filtros__filtro--ativo"]]: filtroEhOAtivo(filtro.id)
            })}
            onClick={() => defineFiltro(filtro.id)}
          >
            {filtro.label}
          </button>
        </li>
      ))}
    </ul>
  );
}