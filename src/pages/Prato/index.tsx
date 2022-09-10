import styles from "./Prato.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import cardapio from "data/cardapio.json";
import DetalhesPrato from "components/DetalhesDoPrato";
import NotFound from "pages/NotFound";
import PaginaPadrao from "components/PaginaPadrao";

export default function Prato() {
  const navigate = useNavigate();
  const { id } = useParams();
  const prato = cardapio.find(item => item.id === Number(id));

  if (!prato) {
    return <NotFound />;
  } else return <PaginaPadrao>
    <section className={styles.container}>
      <button className={styles.voltar}
        onClick={() => navigate(-1)}>
        {"< Voltar"}
      </button>
      <h1 className={styles.titulo}>
        {prato.title}
      </h1>
      <div className={styles.imagem}>
        <img src={prato.photo} alt={prato.title} />
      </div>
      <div className={styles.conteudo}>
        <p className={styles.conteudo__descricao}>
          {prato.description}
        </p>
        <DetalhesPrato {...prato} />
      </div>
    </section>
  </PaginaPadrao>;
}