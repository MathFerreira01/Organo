import Colaborador from "../Colaborador";
import "./Time.css";
function Time(props) {
  const background = { background: props.corSecundaria };
  const border = { borderColor: props.corPrimaria };

  return (

    (props.colaboradores.length > 0) ?
    <section className="time" style={background}>
      <h3 style={border}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            corDeFundo={props.corPrimaria}
          />
        ))}
      </div>
    </section>
    : ''
  );
}

export default Time;
