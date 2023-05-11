import React from 'react'
import Contato from '../Contato'
import './Header.css'

function Header() {
  return (
    <>
      <header>
        <Contato />

        <nav className="navbar navbar-expand-lg px-5 navbar-dark bg-dark ">
          <a class="navbar-brand" href="#">Athos Alexandre</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
            <div class="navbar-nav ">
              <a className="nav-link" href="#">HOME</a>
              <a className="nav-link" href="#">O QUE FAÇO</a>
              <a className="nav-link" href="#">PORTFÓLIO</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header