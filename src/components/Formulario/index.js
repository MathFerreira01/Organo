import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

function Formulario() {

  const times = [
    'CS GO',
    'GTA V',
    'Battlefield'
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="formulario">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do player.</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço de imagem" />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
}

export default Formulario;
