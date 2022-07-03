import './Time.css'
function Time(props) {
  const background = {background: props.corSecundaria}
  const border = {borderColor: props.corPrimaria}

  return (
    <section className='time' style={background}>
        <h3 style={border}>{props.nome}</h3>
    </section>
  )
}

export default Time
