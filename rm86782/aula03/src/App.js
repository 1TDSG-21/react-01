import React, {useState} from "react";
import Demo from "./components/demo/Demo";
import Features from "./components/features/Features";
import Home from "./components/home/Home";
import Pricing from "./components/pricing/Pricing";
import Resource from "./components/resource/Resource";


function App() {

  const [componente, setComponente] = useState(<Home />)

  return (
    <div>
      <header>
        <a href="#" onClick={() => setComponente(<Home />)}>Home</a>
        <a href="#"onClick={() => setComponente(<Features />)}>Features</a>
        <a href="#" onClick={() => setComponente(<Pricing />)}>Pricing</a>
        <a href="#" onClick={() => setComponente(<Demo />)}>Demo</a>
        <a href="#" onClick={() => setComponente(<Resource />)}>Resources</a>
      </header>
      {componente}
    </div>
  );
}

export default App;
