import { useEffect, useState } from "react";
import { IPrato } from "types/IPrato";
import Item from "./Item";
import cardapio from "data/cardapio.json";
import styles from "./Itens.module.scss";

interface Props {
  busca: string,
  filtro: number | null,
  ordenador: string
}

export default function Itens({ busca, ordenador, filtro }: Props) {
  const [listaDePratos, setListaDePratos] = useState(cardapio);

  useEffect(() => {
    const novaLista = cardapio.filter(prato => {
      return testaBusca(prato.title) && testaFiltro(prato.category.id);
    }).sort(ordenadora());
    setListaDePratos(novaLista);
  }, [busca, filtro, ordenador]);

  function testaBusca(nome: string) {
    const temSubstring = new RegExp(busca, "i");
    return temSubstring.test(nome);
  }

  function testaFiltro(categoria: number) {
    if (filtro) return categoria === filtro;
    else return true;
  }

  function ordenadora() {
    return (a: IPrato, b: IPrato) => {
      switch (ordenador) {
        case "porcao":
          return a.size > b.size ? 1 : -1;
          break;
        case "qtd_pessoas":
          return a.serving > b.serving ? 1 : -1;
          break;
        case "preco":
          return a.price > b.price ? 1 : -1;
          break;
        default: return -1;
      }
    };
  }

  return <ul className={styles.itens}>
    {listaDePratos.map(item => <Item
      item={item}
      key={item.id}
    />)}
  </ul>;
}