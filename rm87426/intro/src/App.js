import logo from './logo.svg';
import './App.css';
import Cabecalho from './componentes/cabecalho/Cabecalho';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <Cabecalho/>
        </div>
        
      </header>
    </div>
  );
}

 
