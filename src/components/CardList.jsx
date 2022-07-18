import React, { useEffect, useState } from 'react';
import CardBook from "./CardBook";
import '../styles/ItemBook.css';  
import { serviceAxios } from '../services/serviceAxios';


function CardsList() {

   const [booksApi, setBooksApi] = useState([]);
   const serviceslibary= serviceAxios()
    useEffect(()=>{  
      serviceslibary.get().then(res=>setBooksApi(res.data))
    },[])

     
    return (
        <main className="list-books">
           {
            booksApi.map ((item,index) =>(
            <CardBook key={index} titol={item.titol} autoria={item.autoria} isbn={item.isbn} genre={item.genre} year={item.year} editorial={item.editorial} image={item.image}/>
            ))
           }
        </main>
    );
}
export default CardsList;
