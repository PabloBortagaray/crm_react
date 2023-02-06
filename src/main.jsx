import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path: '/nosotros',
          element: <h1> Nosotros</h1>
        }
      ]
  },
  {
      path: '/nosotros',
      element: <h1> Nosotros</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider 
          router={router}
        />
  </React.StrictMode>,
)
