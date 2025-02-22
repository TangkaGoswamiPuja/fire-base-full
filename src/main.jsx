import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Paths/Path'
import Auth from './AuthFile/Auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
   <Auth>   
     <RouterProvider router={router} ></RouterProvider>

  
</Auth>

   
  </React.StrictMode>
)
