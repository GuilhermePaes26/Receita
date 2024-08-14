import { Link, useParams } from "react-router-dom";
import { useReceitas } from "../contexts/ReceitasContexts";
import { useState } from "react";
import styles from "./ShowPreparo.module.css";

const ReceitaDetalhes = () => {
  const { receitas, loading, error } = useReceitas();
  const { id } = useParams(); // Pega o ID da URL
  const [finish, SetFinish] = useState("Finalizar");
  const handlePress = () => {
    SetFinish(finish === "Finalizar" ? "Finalizado" : "Finalizar");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // consumindo a api de acordo com o id
  const receita = receitas.find((r) => r.id == id);

  if (!receita) return <p>Receita não encontrada.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.topo}>
        <div className={styles.tempo}>
          <p className={styles.pDesc}>
            <b>
              Tempo de preparo:<br></br> {receita.tempo} minutos
            </b>
          </p>
        </div>
        <img className={styles.imgDetalhes} src={receita.img} alt={`Imagem de ${receita.titulo}`} />
        <div className={styles.resumo}>
          <h2 className={styles.h2Title}>{receita.titulo}</h2>
          <p className={styles.pDesc}>{receita.resumo}</p>
        </div>
      </div>
      <h2 className={styles.h2Title}>Ingredientes</h2>
      <ul className={styles.ulIng}>
        {receita.ingredientes.map((ingrediente, index) => (
          <div className={styles.flexRow} key={index}>
            <input type="checkbox"></input>
            <label>{ingrediente}</label>
          </div>
        ))}
      </ul>
      <h2 className={styles.h2Title}>Passos</h2>
      {receita.passos.map((passo, index) => (
        <div className={styles.flexColum} key={index}>
          <div className={styles.flexRow}>
            <input type="checkbox"></input>
            <label>
              <b>Passo {index + 1}</b>
            </label>
          </div>
          <div className={styles.labelPasso}>
            <label>{passo}</label>
          </div>
        </div>
      ))}
      <button className={finish === "Finalizar" ? styles.btnFinalizar : styles.btnFinalizado} onClick={handlePress}>
        {finish}
      </button>
      <div className={styles.backDiv}>
        <div className={styles.backLink}>
          <Link className={styles.backDirect} to="/receitas">
            <img className={styles.backImg} src="/src/assets/img/icon-back.png"></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReceitaDetalhes;
