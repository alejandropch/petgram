/* eslint-disable react/jsx-indent */
import React from 'react'
import GlobalStyle from './styles/GlobalStyles'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />

           <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/pet/:id' element={<Home />} />
              <Route exact path='/detail/:detailid' element={<Detail />} />

           </Routes>

      </BrowserRouter>

    </>
  )
}
