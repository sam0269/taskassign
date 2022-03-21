import React from 'react'
import Container from './Components/Container'
import Login from './Components/Login'
import { Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <>
        <Routes>
                <Route path='/' exact element={<Login />} />
                <Route path='/container' exact element={ <Container authorize={true}/>} />
           </Routes>  
    </>
  )
}

export default App