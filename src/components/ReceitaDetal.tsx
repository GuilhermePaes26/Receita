import { useReceitas } from "../contexts/ReceitasContexts";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./ReceitaDetal.module.css";
import { useState } from "react";

// componet voltado ao card das receita, junto com seu resumo

const ReceitasList = () => {
  const { receitas, loading, error } = useReceitas();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const searchToLowerCase = search.toLocaleLowerCase();
  const receita = receitas.filter((receitas) => receitas.titulo.toLocaleLowerCase().includes(searchToLowerCase));

  // erro ao consumir api
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  //função para navegar para receita inteira
  const handleNav = (id: number) => {
    navigate(`/receitas/${id}`);
  };

  return (
    <div>
      <header className={styles.header}>
        <Link to="/receitas" className={styles.link}>
          <img className={styles.logo} src="/src/assets/img/logo-coco-bambu-mini.png"></img>
        </Link>
        <input className={styles.search} type="search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
        <Link className={styles.exit} to="/">
          Sair
        </Link>
      </header>
      <h1 className={styles.h1Principal}>Receitas</h1>
      {receita.length > 0 ? (
        <ul className={styles.receitaCard}>
          {receita.map((receita) => (
            <ul className={styles.ReceitaDes} key={receita.id}>
              <img className={styles.img} src={receita.imgP} alt={`Imagem de ${receita.titulo}`} />
              <h2 className={styles.ttResumo}>{receita.titulo}</h2>
              <ul className={styles.ulResumo}>{receita.resumo}</ul>
              <ul>
                <button className={styles.btn} onClick={() => handleNav(receita.id)}>
                  Ver receita
                </button>
              </ul>
            </ul>
          ))}
        </ul>
      ) : (
        //erro caso não encontre nenhuma receita, para não bugar a estilização do footer
        <div className={styles.errorContainer}>
          <img className={styles.errorImg} src="/src/assets/img/icon-close.png" alt="Nenhuma receita encontrada" />
          <p>Nenhuma receita encontrada</p>
        </div>
      )}
    </div>
  );
};

export default ReceitasList;
