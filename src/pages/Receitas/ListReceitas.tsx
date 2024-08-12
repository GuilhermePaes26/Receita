import ReceitasList from "../../components/ReceitaDetal";
import { ReceitasContextProvider } from "../../contexts/ReceitasContexts";

export default function ListReceitas() {
  return (
    <ReceitasContextProvider>
      <ReceitasList />
    </ReceitasContextProvider>
  );
}
