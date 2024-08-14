import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

// componentes para login, junto com sua lógica

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const navigate = useNavigate();

  const verifique = () => {
    if (login === "Guilherme" && senha === "123") {
      setErro(false);
      setLogin("");
      setSenha("");
      navigate(`/receitas`);
    } else {
      setErro(true);
      setLogin("");
      setSenha("");
    }
  };
  return (
    <main className={styles.container}>
      <div className={styles.iconCocoBambu}>
        <img className={styles.img} src="/src/assets/img/logo-coco-bambu.png"></img>
      </div>
      <input type="text" value={login} className={styles.inputFieldLogin} placeholder="Nome do usuário" onChange={(e) => setLogin(e.target.value)}></input>
      <input type="password" value={senha} className={styles.inputFieldSenha} placeholder="Senha" onChange={(e) => setSenha(e.target.value)}></input>
      <button className={styles.button} onClick={verifique}>
        Acessar
      </button>
      {erro && (
        <div className="erro">
          <p>Erro ao logar, tente novamente! Dados inseridos inválidos</p>
        </div>
      )}
    </main>
  );
}
