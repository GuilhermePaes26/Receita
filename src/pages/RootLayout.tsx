import { Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css";

export default function RootLayout() {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <footer className={styles.footer}>Feito por Guilherme Paes</footer>
    </>
  );
}
