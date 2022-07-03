import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Time from "./components/Time";

function App() {
  const times = [
    {
      nome: "CS GO",
      corPrimaria: "#F7EECF",
      corSecundaria: "#A47F61",
    },
    {
      nome: "GTA V",
      corPrimaria: "#84A67B",
      corSecundaria: "#14260B",
    },
    {
      nome: "Battlefield",
      corPrimaria: "#A1A5A6",
      corSecundaria: "#242326",
    },
  ];
  const [colaboradores, setColaboradores] = useState([]);

  const novoColaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div>
      <Header />
      <Formulario
        colaboradorCadastrado={(colaborador) => novoColaborador(colaborador)}
        nomesTimes={times.map(time => time.nome)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
        />
      ))}
    </div>
  );
}

export default App;
