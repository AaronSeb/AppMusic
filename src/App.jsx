import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import VerVideo from './Pages/VerVideo'
import Page404 from './Pages/Page404'
import Categoria from './Pages/Categoria'
import NuevoVideo from './Pages/NuevoVideo'
import GlobalStyle from './GlobalStyled'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'

function App() {
  
  return (
    <>
      <Router>
        <>
        <GlobalStyle/>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/nuevo-video' element={<NuevoVideo url={'/videos'}/>}/>
          <Route path='/videos/:id' element={<VerVideo />}/>
          <Route path='/nueva-categoria' element={<Categoria url={'/categorias'}/>}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>
        <Footer/>
        </>
      </Router>
    </>
  )
}

export default App
