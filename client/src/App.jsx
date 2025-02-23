import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import Header from './components/Header'
import PrivateRoute from './pages/PrivateRoute'
const App = () => {
  return (
<BrowserRouter>
<Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='about-us' element={<AboutUs/>}/>
      <Route path='sign-up' element={<SignUp/>}/>
      <Route path='sign-in' element={<SignIn/>}/>
      <Route element={<PrivateRoute/>}>
      <Route path='profile' element={<Profile/>}/></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App