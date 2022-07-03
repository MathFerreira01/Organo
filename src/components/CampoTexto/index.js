import './CampoTexto.css'

function CampoTexto(props) {

  const handleChange = (event) => {
    props.aoAlterado(event.target.value)
  }

  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input 
        value={props.valor} 
        onChange={handleChange} 
        required={props.obrigatorio} 
        placeholder={props.placeholder}/>
    </div>
  )
}

export default CampoTexto
