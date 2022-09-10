import styles from "./PaginaPadrao.module.scss";
import { Outlet } from "react-router-dom";
import stylesTema from "styles/Tema.module.scss";
import React from "react";

export default function PaginaPadrao({ children }: { children?: React.ReactNode }) {
  return (<>
    <header className={`${styles.header} ${stylesTema.container}`}>
      <p className={styles.header__text}>A casa do código e da massa.</p>
    </header>
    <div className={stylesTema.container}>
      <Outlet />
      {children}
    </div>
  </>);
}