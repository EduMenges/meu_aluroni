import { useState } from "react";
import { IFiltro } from "types/IFiltro";
import Buscador from "./Buscador";
import styles from "./Cardapio.module.scss";
import Filtro from "./Filtro";
import Itens from "./Itens";
import Ordenador from "./Ordenador";
export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<IFiltro>(null);
  const [ordenador, setOrdenador] = useState("");

  return <main className={styles.cardapio}>
    <h3 className={styles.cardapio__titulo}>Cardápio</h3>
    <Buscador busca={busca} setBusca={setBusca} />
    <div className={styles.cardapio__filtros}>
      <Filtro filtro={filtro} setFiltro={setFiltro} />
      <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
    </div>
    <Itens ordenador={ordenador} busca={busca} filtro={filtro} />
  </main>;
}