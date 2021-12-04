/* eslint-disable react/jsx-indent */
import React from 'react'
import GlobalStyle from './styles/GlobalStyles'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { PhotoCardQuery } from './container/PhotoCardQuery'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
export const App = () => {
  const url = new window.URLSearchParams(window.location.search)
  const detail = url.get('detail')

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        {
        detail
          ? <PhotoCardQuery id={detail} />
          : <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/pet/:id' element={<Home />} />
            </Routes>
      }
      </BrowserRouter>

    </>
  )
}
