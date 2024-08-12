import { useReceitas } from "../contexts/ReceitasContexts";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./ReceitaDetal.module.css";
import { useState } from "react";

const ReceitasList = () => {
  const { receitas, loading, error } = useReceitas();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const searchToLowerCase = search.toLocaleLowerCase();
  const receita = receitas.filter((receitas) => receitas.titulo.toLocaleLowerCase().includes(searchToLowerCase));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const handleNav = (id: number) => {
    navigate(`/receitas/${id}`);
  };

  return (
    <div>
      <header className={styles.header}>
        <Link to="/receitas" className="Logo">
          <img className={styles.logo} src="/src/assets/img/logo-coco-bambu-mini.png"></img>
        </Link>
        <input className={styles.search} type="search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
        <Link className={styles.exit} to="/">
          Sair
        </Link>
      </header>
      <h1 className={styles.h1Principal}>Receitas</h1>
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
    </div>
  );
};

export default ReceitasList;
