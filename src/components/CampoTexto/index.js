import React, { useState } from 'react'

import './CampoTexto.css'

function CampoTexto(props) {

  const [input, setInput] = useState("")

  const handleChange = (event) => {
    setInput(event.targer.value)
  }

  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input 
        value={input} 
        onChange={handleChange} 
        required={props.obrigatorio} 
        placeholder={props.placeholder}/>
    </div>
  )
}

export default CampoTexto
