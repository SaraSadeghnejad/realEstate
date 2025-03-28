import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import Header from './components/Header'
import PrivateRoute from './pages/PrivateRoute'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
const App = () => {
  return (
<BrowserRouter>
<Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='about-us' element={<AboutUs/>}/>
      <Route path='listing/:listingId' element={<Listing/>}/>
      <Route path='sign-up' element={<SignUp/>}/>
      <Route path='sign-in' element={<SignIn/>}/>
      <Route element={<PrivateRoute/>}>
      <Route path='profile' element={<Profile/>}/></Route>
      <Route path='create-listing' element={<CreateListing/>}/>
      <Route path='update-listing/:listingId' element={<UpdateListing/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App