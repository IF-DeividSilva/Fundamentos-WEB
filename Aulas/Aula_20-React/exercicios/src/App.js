import logo from './logo.svg';
import './App.css';
import Primeiro from './componentes/Primeiro';
import BomDia from './componentes/BomDia';
import { BoaTarde, BoaNoite } from './componentes/Multiplos';
import Saudacao from './componentes/Saudacao';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <BomDia nome="João" idade={20} />
        <BoaTarde nome="Maria" />
        <BoaNoite nome="Pedro" />
      */}
        
        <Saudacao tipo="Olá" nome="Ana" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
