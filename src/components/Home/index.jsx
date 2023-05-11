import React from 'react'
import Header from '../../components/Cabecalho/Header'
import './Home.css'
import QuemSouEu from '../QuemSouEu'
function Home() {
  return (
    <div className='img-da-main'>
        <Header/>

        <QuemSouEu/>
    </div>
  )
}

export default Home