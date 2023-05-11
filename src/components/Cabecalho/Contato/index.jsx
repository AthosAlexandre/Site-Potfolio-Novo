import React from 'react'
import './Contato.css'
import phone from '../../../assets/img/phone-portrait.svg'
import instagram from '../../../assets/img/logo-instagram.svg'
import linkedin from '../../../assets/img/logo-linkedin.svg'
function Contato() {
  return (
    <section className='contato'>
      <div className="rede-socias">
        <div className="instagram">
          <a href="https://www.instagram.com/athosalexandre99/" target='_blank'>
          <img className='insta' src={instagram} alt="" />
          </a>
        </div>

        <div className="linkedin">
          <a href="https://www.linkedin.com/in/athos-alexandre-109199218/" target='_blank'>
          <img className='linke' src={linkedin} alt="" />
          </a>
        </div>
      </div>

      <div className="celular">
        <div className="phone"><img src={phone} alt="" /></div>
        <h3>(67)99836-9815</h3>
      </div>
    </section>
  )
}

export default Contato