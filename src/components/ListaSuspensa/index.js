import './ListaSuspensa.css'

function ListaSuspensa(props) {

  const handleChange = (event) => {
    props.aoAlterado(event.target.value)
  }

  return (
    <div className='lista-suspensa'>
      <label>{props.label}</label>
      <select 
        required={props.required} 
        onChange={handleChange} 
        value={props.valor}
      >
        <option value=''></option>
        {props.itens.map(item => <option key={item}>{item}</option>)}

      </select>
    </div>
  )
}

export default ListaSuspensa
