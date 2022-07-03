import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

function Formulario(props) {

  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [imagem, setImagem] = useState("")
  const [time, setTime] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    props.colaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  }

  return (
    <section className="formulario">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do player.</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu nome" 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto 
          obrigatorio={true} 
          label="Cargo"  
          placeholder="Digite seu cargo" 
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
          label="Imagem" 
          placeholder="Digite o endereço de imagem" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Time" 
          itens={props.nomesTimes}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
}

export default Formulario;
