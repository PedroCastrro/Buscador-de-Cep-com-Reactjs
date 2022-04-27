import { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import './style.css';
import api from './services/api';

function App() {

    const [input, setInput] = useState('');
    const [cep, setCep] = useState({});

     async function handleSearch(){
      // 89809730/json/

      if(input === ''){
        alert("Preencha algum cep!")
        return;
      }

        try{
          const response = await api.get(`${input}/json`);
          setCep(response.data)
          setInput("")
        }catch{
          alert("Ops erro ao buscar!");
          setInput("")
        }
    }
  return (
    <div className="container">
      <h1 className="title">Busque seu CEP</h1>

      <div className="containerInput">
    <input 
    type="text"
    placeholder="Digite seu cep.."
    value={input}
    onChange={(Event) => setInput(Event.target.value) }
    />

    <button className="buttonSearch" onClick={handleSearch}>
       <FaSistrix size={25} color="#FFF"/>
       </button>
    </div>

      {Object.keys(cep).leght > 0 && (
      
      <main className="main">
        <h2>CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
      
      </main>
      )}

    </div>
      );
}
      


export default App;
