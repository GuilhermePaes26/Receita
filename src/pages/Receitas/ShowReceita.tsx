import { ReceitasContextProvider } from "../../contexts/ReceitasContexts";
import ShowPreparo from "../../components/ShowPreparo";

export default function ListReceitas() {
  return (
    <ReceitasContextProvider>
      <ShowPreparo />
    </ReceitasContextProvider>
  );
}
