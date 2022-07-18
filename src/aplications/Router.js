import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Enter from '../App'
import BooksPage from '../pages/BooksPage'
import DetailsBook from '../pages/DetailsBook'
import NewBook from '../pages/NewBook'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Enter/>}/>
            <Route path='/bookspage' element={<BooksPage/>}/>
            <Route path='/detailsbook' element={<DetailsBook/>}/>
            <Route path='/newBook' element={<NewBook/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;