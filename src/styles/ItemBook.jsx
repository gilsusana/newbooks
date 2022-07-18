*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.itemBooksContainer{
    padding-top: 2%;
    padding-left: 5%;
    padding-right: 5%;
}

.itemBookSquare{
    padding: 10px 20px 30px;
    background: #AFD5DA;
    border-radius: 30px 30px 40px 40px;
    width: 220px;
    height: min-content;
  }

  .marcoBookImg{
    width: 100%;
    height: 20rem;
    border-radius: 30px 30px 0px 0px;
    overflow:hidden; 
    position: relative;
}  

.bookCover{
    width:100%;
    height:100%;
    object-fit: cover;
    bottom: 0%;
  }

  .itemBookText{
    position: relative;
}

.title{
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    color: rgb(69, 17, 17);
    
}
  
.author{
    font-style: normal;
    color: slategrey;
    font-weight: 600;
    font-size: 1rem;
}

.nombre{
    font-style: normal;
    font-weight: 700;
    font-size: 0.8rem;
}
  
.year{
    font-style: normal;
    color: slategrey;
    font-weight: 600;
    font-size: 1rem;
    
}

.isbn{
    color: rgb(86, 86, 86);
    font-size: small;
}


.fa-solid{
    color: rgb(255, 253, 253) ;
    text-decoration: none;
    
}
.fa-solid fa-eye{
    color: #ffffff;
}

.iconContainer{
    display: flex;
    justify-content: space-between;
    margin: 11px 0px;
}

.iconContainerLeft{
    display: flex;
    gap: 10px;
}

.iconContainerRight{
    display: flex;
    gap: 10px;
}

.containerInferior{
    display: flex;
    flex-direction: column;
}

.list-books{
    display: flex;
    flex-wrap: wrap;
}
