import './App.css';
import Cabecalho from './components/Cabecalho';
import Carros from './components/Carros';
import Parceiros from './components/Parceiros';

function App() {
  // Componente pai
  const listaDeCarros = ["Verona", "Veraneio", "Elba", "Miura", "Gurgel"]
  const nomeLista = "Carros antigos e bonitos"

  const multiplicador = (firstNum, SecondNum) => firstNum * SecondNum
  
  return (
    <div className="App">
      <Cabecalho/>
      <Carros carrosAtrib={listaDeCarros} nmLista={nomeLista}/>
      <Parceiros multiplicador={multiplicador}/>
    </div>
  );
}

export default App;
