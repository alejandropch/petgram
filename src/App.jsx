/* eslint-disable react/jsx-indent */
import React from 'react'
import GlobalStyle from './styles/GlobalStyles'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { Profile } from './pages/Profile'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Context } from './context/Context'

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

           <Context.Consumer>
             {
               ({ isAuth }) =>
                 <Routes>
                  <Route exact path='/favs' element={isAuth ? <Favs /> : <NotRegisteredUser />} />
                  <Route exact path='/profile' element={isAuth ? <Profile /> : <NotRegisteredUser />} />
                 </Routes>

             }
           </Context.Consumer>
           <NavBar />
      </BrowserRouter>
    </>
  )
}
