import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Index, {loader as clientesLoader} from './pages/Index'
import NuevoCliente from './pages/NuevoCliente'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
      path: '/',
      element: <Layout/>,
      children:[ //outlet permite usar los children
        {
          index: true,
          element: <Index/>,
          loader: clientesLoader
        },
        {
          path: '/clientes/nuevo',
          element: <NuevoCliente/>
        }
      ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider 
          router={router}
        />
  </React.StrictMode>,
)
