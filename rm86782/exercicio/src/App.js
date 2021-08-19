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
<<<<<<< HEAD
      <Carros carrosAtrib={listaDeCarros} nmLista={nomeLista}/>
      <Parceiros multiplicador={multiplicador}/>
=======
      <Carros/>
      <Parceiros/>
      <footer>
        <p>Eu fiz isso no github :)</p>
      </footer>
>>>>>>> 616f2f2a6fcafaa294ea4284d8c18c310a72f2af
    </div>
  );
}

export default App;
