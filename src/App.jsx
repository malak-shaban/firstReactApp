import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

let lay = createBrowserRouter([{
  path: "/", element: <Layout />,
  children: [
     { index: true, element: <Home /> },
     { path: 'about', element: <About /> },
     { path: 'portfolio', element: <Portfolio /> },
     { path: 'contact', element: <Contact /> },
  ],
}])
export default function App() {
  return (
    <>
      <RouterProvider router={lay}></RouterProvider>
    </>
  )
}
