import Banner from '../../assets/banner.png'

import './styles.css'

function Header() {
  return (
    <header className='banner'>
      <img src={Banner} alt="Banner principal da pagina"/>
    </header>
  )
}

export default Header
