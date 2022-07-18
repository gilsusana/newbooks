import React, { useEffect, useState } from 'react';
import CardBook from "./CardBook";
import { axios } from 'axios';
import '../styles/ItemBook.css';  


function CardsList() {

   const [booksApi, setBooksApi] = useState([]);
    useEffect(()=>{  
       axios.get(" http://localhost:5000/books")
       .then((response) =>{
       setBooksApi(response.data)
       })
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
