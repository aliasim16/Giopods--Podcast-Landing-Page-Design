import { Router, Route, Routes } from 'react-router-dom';
import Creating from "./components/Creating"
import Explore from "./components/Explore"
import Home from "./components/Home"
import LikeUs from "./components/LikeUs"
import Logo from "./components/Logo"
import Navbar from "./components/Navbar"
import Our from "./components/Our"
import Phone from "./components/Phone"
import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import Products from './components/Products';

function App() {

  return (
    <>  
    {/* Without Single Page Application */}
      <Navbar/>
      <Routes>
        <Route path="/"
          element={<Home />}>
        </Route>
        <Route path="/explore"
          element={<Explore />}>
        </Route>
        <Route path="/creating"
          element={<Creating />}>
        </Route>
        <Route path="/episodes"
          element={<LikeUs />}>
        </Route>
        <Route path="/blog"
          element={<Products  />}>
        </Route>

      </Routes>

      
      {/* <Home/>
      <Explore/>
      <Creating/>
      <LikeUs/>
      <Logo/>
      <Our/>
      <Phone/> */}
      <Footer/>
    </>
  )
}

export default App
