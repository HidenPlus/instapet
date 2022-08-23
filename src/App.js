import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import { NavBar } from './components/NavBar'
import { Logo } from './logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

const isLogged = false

export default function App () {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/user' element={isLogged ? <User /> : <NotRegisteredUser />} />
        <Route path='/favs' element={isLogged ? <Favs /> : <NotRegisteredUser />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  )
}
