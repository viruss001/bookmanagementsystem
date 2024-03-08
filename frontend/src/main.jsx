import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {  RouterProvider, createBrowserRouter} from 'react-router-dom'
import BookList from './page/BookList.jsx'
import Book from './page/Book.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
      path:"",
      element:<BookList/>
    },
      {
      path:"/Book/:id",
      element:<Book/>
    },
    ]
  
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
