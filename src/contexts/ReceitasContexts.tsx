import { createContext, useState, useEffect, useContext, ReactNode } from "react";

interface Receita {
  id: number;
  titulo: string;
  resumo: string;
  ingredientes: string[];
  tempo: number;
  passos: string[];
  imgP: string;
  img: string;
}

interface ReceitasContextType {
  receitas: Receita[];
  loading: boolean;
  error: string | null;
}

const defaultContextValue: ReceitasContextType = {
  receitas: [],
  loading: true,
  error: null,
};

export const ReceitasContext = createContext<ReceitasContextType>(defaultContextValue);

interface ReceitasContextProviderProps {
  children: ReactNode;
}

export function ReceitasContextProvider({ children }: ReceitasContextProviderProps) {
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/receitas")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Falha na resposta");
        }
        return response.json();
      })
      .then((data) => {
        setReceitas(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return <ReceitasContext.Provider value={{ receitas, loading, error }}>{children}</ReceitasContext.Provider>;
}

export const useReceitas = () => useContext(ReceitasContext);
