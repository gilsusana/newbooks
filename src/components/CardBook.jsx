import {Link} from "react-router-dom";


function CardBook ({titol, autoria, isbn, image}) {
    return (

<div className='itemBooksContainer'>
      <div className='itemBookSquare'>
          <div className='marcoBookImg'>
            <img src= {image} alt='imagenlibro'/>
          </div>
      <div className="containerInferior">
      <div className='iconContainer'>
            <div className='iconContainerLeft'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-heart"></i>
                <Link to= "/detailsbook"className="fa-solid fa-eye"></Link>
           </div>
            <div className='iconContainerRight'>
                <i className="fa-solid fa-pen-to-square"></i>
                <i className="fa-solid fa-trash-can"></i>
            </div>
      </div>
      </div>
      <div className="titleBook">
          <p className="title">{titol}</p>
          <p className="author">{autoria}</p>
          <p className="isbn">{isbn}</p>
          
      </div>
  </div>
 
</div>

    );
}

export default CardBook;