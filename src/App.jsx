import Creating from "./components/Creating"
import Explore from "./components/Explore"
import Home from "./components/Home"
import LikeUs from "./components/LikeUs"
import Logo from "./components/Logo"
import Navbar from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import Our from "./components/Our"
import Phone from "./components/Phone"
import Footer from "./components/Footer"

function App() {

  return (
    <>  
      <Navbar/>
      <Home/>
      <Explore/>
      <Creating/>
      <LikeUs/>
      <Logo/>
      <Our/>
      <Phone/>
      <Footer/>
    </>
  )
}

export default App
