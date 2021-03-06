/* eslint-disable react/jsx-indent */
import React, { useContext, Suspense } from 'react'
import GlobalStyle from './styles/GlobalStyles'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { Context } from './context/Context'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
// import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
// import { Favs } from './pages/Favs'
// import { Profile } from './pages/Profile'
// import { NotRegisteredUser } from './pages/NotRegisteredUser'
// import { NotFound } from './pages/NotFound'
const Favs = React.lazy(() => import('./pages/Favs'))
const Profile = React.lazy(() => import('./pages/Profile'))
const Detail = React.lazy(() => import('./pages/Detail'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
           <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/pet/[id].js' element={<Home />} />
              <Route path='/detail/:detailid' element={<Detail />} />

              <Route exact path='/favs' element={!isAuth ? <Navigate noThrow replace to='/profile' /> : <Favs />} />
              <Route exact path='/profile' element={isAuth ? <Profile /> : <NotRegisteredUser />} />
              <Route exact path='*' element={<NotFound />} />

           </Routes>

           <NavBar />
      </BrowserRouter>
    </Suspense>
  )
}
