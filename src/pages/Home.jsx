import React from 'react'
import logoLibrary from '../assets/img/ciba-logo.png'
import {Link} from 'react-router-dom'


function Home () {
  return (
    <>
   <div className='homeContainer'>
    <img src={logoLibrary} alt="logo library" className='logo-librosHome' />
    <Link to = '/bookspage'><button className='btn-enter'>ENTRAR</button></Link>
   </div>
   </>
  )
}

export default Home