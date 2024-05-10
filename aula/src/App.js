import React, {useState} from 'react';
import './App.css';
import NovoConteudo from './NovoConteudo.js';
import NovoConteudoDois from './NovoConteudoDois.js';

function App() {
  
  const [str,setStr] = useState('Oi Mundo');

  function handleClick(){
    setStr('Olá mundo que foi carregado');
  }
  
  return (
    <div className="App">
      <h1>{str}</h1>
      <NovoConteudo></NovoConteudo>
      <NovoConteudo valor="texto adicional">
      </NovoConteudo>
      <NovoConteudoDois></NovoConteudoDois>
      <button onClick={()=>handleClick()}>
        Clique para mudar</button>
    </div>
  );
}

export default App;
