import React from 'react'

function ItemBook() {
  return (
  <>

 <div className='itemBooksContainer'>
      <div className='itemBookSquare'>
          <div className='marcoBookImg'>
              <img className='bookCover' src="https://descontrol.cat/wp-content/uploads/2019/07/Captura-de-Pantalla-2020-06-17-a-les-16.29.42-699x1024.png" alt="Portada libro" />
          </div>
      <div className="containerInferior">
      <div className='iconContainer'>
            <div className='iconContainerLeft'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-heart"></i>
                <i class="fa-solid fa-eye"></i>
           </div>
            <div className='iconContainerRight'>
                <i className="fa-solid fa-pen-to-square"></i>
                <i className="fa-solid fa-trash-can"></i>
            </div>
      </div>
      </div>
      <div className="titleBook">
          <p className="title">Título libro</p>
          <p className="author">Autor</p>
          <p className="year">Año</p>
      </div>
  </div>
 
</div>
  </>
  )
}

export default ItemBook