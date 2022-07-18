
import React, { useEffect, useState } from 'react';
import { serviceAxios } from '../services/serviceAxios';



function Newbook() {

  const [booksApi, setBooksApi] = useState([]);
  const serviceslibary= serviceAxios()
  useEffect(()=>{  
  serviceslibary.create().then(res=>console.log(res))
},
[])

    return(
    <>
   <div className="containerCreate">
      <div className="containerTitleForm">
              <p className="titleForm">Por favor, complete el formulario para crear un nuevo libro</p>
      </div>
      <form id="miFormulario">
          <div className="allInputs">

          <div className="inputForm">
              <input className="tituloForm" type="text" placeholder="Ingrese Signatura"/>
            </div>

            <div className="inputForm">
              <input className="tituloForm" type="text" placeholder="Ingrese Título del libro"/>
            </div>
      
            <div className="inputForm">
              <input className="authorForm" type="text" placeholder="Ingrese el Autor"/>
            </div>
  
            <div className="inputForm">
              <input className="editorialForm" type="text" placeholder="Ingrese el descriptor"/>
            </div>
           
            <div className="inputForm">
              <input className="yearForm" type="text" placeholder="Ingrese ISBN"/>
            </div>

            <div className="inputForm">
              <input className="yearForm" type="text" placeholder="Ingrese las observaciones"/>
            </div>
  
            <div className="inputForm">
              <input className="imageForm" type="text" placeholder="Ingrese URL de la imagen de la portada del libro"/>
            </div>
  
      </div>
      <div className="containerBtn" >
            
              <button className="btnSend">Enviar datos</button>
      
      </div>
  
      </form>
  </div>
          </>
        )
    }
    
    
    export default Newbook;