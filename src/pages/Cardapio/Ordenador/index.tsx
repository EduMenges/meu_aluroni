import { SetStateAction, useState } from "react";
import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/Md";

interface Props {
    ordenador: string,
    setOrdenador: React.Dispatch<SetStateAction<string>>
}

export default function Ordenador({ ordenador, setOrdenador }: Props) {
  const [aberto, setAberto] = useState(false);
  const nomeDoOrdenador = opcoes.find(opcao => opcao.value === ordenador)?.nome || "Ordenar por";

  return (
    <button
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
      className={classNames({
        [styles.ordenador]: true,
        [styles["ordenador--ativo"]]: aberto
      })}
    >
      <span>{nomeDoOrdenador}</span>
      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}

      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles["ordenador__options--ativo"]]: aberto
      })}>
        {opcoes.map(opcao => (
          <div
            className={styles.ordenador__option}
            key={opcao.value}
            onClick={() => setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}