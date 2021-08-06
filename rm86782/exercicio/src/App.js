import './App.css';
import Cabecalho from './components/Cabecalho';
import Carros from './components/Carros';
import Parceiros from './components/Parceiros';

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Carros/>
      <Parceiros/>
    </div>
  );
}

export default App;
