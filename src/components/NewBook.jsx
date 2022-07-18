
import React, { useEffect, useState } from 'react';
import { serviceAxios } from '../services/serviceAxios';



function Newbook() {

  const [booksApi, setBooksApi] = useState([]);
  const serviceslibary= serviceAxios()
  useEffect(()=>{  
  serviceslibary.create().then(res=>console.log(res))
  },[]) 

  /*
  serviceslibary.get().then(res=>setBooksApi(res.data))
   


/*useEffect(() => {
  console.log("Loading...");
  const fetchData = async (id,signatura,titol,autoria,descriptors,isbn,observacions,images) => {
    try {
      const { data } = await serviceAxios.post(
        "http://localhost:5000/books",
        { id,
          signatura,
          titol,
          autoria,
          descriptors,
          isbn,
          observacions,
          images,
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData(
    1,)
}, []);
*/
    return(
    <>
   <div className="containerCreate">
      <div className="containerTitleForm">
              <p className="titleForm">Por favor, complete el formulario para crear un nuevo libro</p>
      </div>
      <form id="miFormulario">
          <div className="allInputs">

          <div className="inputForm">
              <input className="signatura" type="text" placeholder="Ingrese Signatura"/>
            </div>

            <div className="inputForm">
              <input className="titol" type="text" placeholder="Ingrese Título del libro"/>
            </div>
      
            <div className="inputForm">
              <input className="autoria" type="text" placeholder="Ingrese el Autor"/>
            </div>
  
            <div className="inputForm">
              <input className="descriptors" type="text" placeholder="Ingrese el descriptor"/>
            </div>
           
            <div className="inputForm">
              <input className="ISBN" type="text" placeholder="Ingrese ISBN"/>
            </div>

            <div className="inputForm">
              <input className="observacions" type="text" placeholder="Ingrese las observaciones"/>
            </div>
  
            <div className="inputForm">
              <input className="image" type="text" placeholder="Ingrese URL de la imagen de la portada del libro"/>
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