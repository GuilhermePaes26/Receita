import { Outlet } from "react-router-dom";
// import styles from "./RootLayout.module.css";

export default function RootLayout() {
  return (
    <>
      {/* <header className={styles.header}>
        <Link to="/receitas" className="Logo">
          <img className={styles.logo} src="/src/assets/img/logo-coco-bambu-mini.png"></img>
        </Link>
        <nav>
          <Link to="/">Sair</Link>
        </nav>
      </header> */}
      <div>
        <Outlet />
      </div>
      <footer>Feito</footer>
    </>
  );
}
