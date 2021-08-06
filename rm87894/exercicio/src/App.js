import './App.css';
import Cabecalho from './componentes/cabecalho/Cabecalho';
import Carros from './componentes/carro/carro';
import Links from './componentes/links/links';


export default function App() {
  return (
   <>
    <div className="App">
      <Cabecalho/>
      <Carros/>
      <Links/>
    </div>
  </>
  );

}


