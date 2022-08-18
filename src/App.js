import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './logo'
import { PhotoCardWithQuery } from './components/PhotoCardWithQuery'
import { Home } from './pages/Home'

export default function App() {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:id' element={<PhotoCardWithQuery />} />
      </Routes>
    </BrowserRouter>
  )
}
