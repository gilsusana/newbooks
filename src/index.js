import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './aplications/Router';
import '../src/styles/Home.css';
import '../src/styles/BooksPage.css';
import '../src/styles/DetailsBook.css';
import '../src/styles/ItemBook.css';
import '../src/styles/FormNewBook.css';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Router/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
