import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import PokedeskPage from './pages/PokedexPage'
import PokeIdPage from './pages/PokeIdPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  

  return (
   
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>

        <Route element={<ProtectedRoutes/>}>
          <Route path='pokedex' element={<PokedeskPage/>}/>

          {/*Estos dos puntos despues del ID indican que tendré un parámetro en la ruta*/}
          <Route path='pokedex/:id' element={<PokeIdPage/>}/>
        </Route>
      </Routes>
   
  )
}

export default App
