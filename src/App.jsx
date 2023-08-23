// componenets
import Creating from "./components/Creating"
import Explore from "./components/Explore"
import Home from "./components/Home"
import LikeUs from "./components/LikeUs"
import Logo from "./components/Logo"
import Navbar from "./components/Navbar"
import Our from "./components/Our"
import Phone from "./components/Phone"
import Footer from "./components/Footer"
import Products from './components/Products';
import Basket from './components/Basket';
import Sign from './components/Sign';
//
import { Router, Route, Routes } from 'react-router-dom';
import { MainContext } from './context/context';
import { useState, useEffect } from 'react';
import './context/context'


function App() {
  
  const getFilteredLists = (search,list) =>{
    if(!search){
        return list;
    }
    
    return list.filter((item)=> 
    item.name.toString().toLowerCase().includes(search) ||
    item.category.toString().toLowerCase().includes(search ))
  }

  const [list,setList] = useState([]) 
  const [search,setSearch] = useState("")
  const  [basket,setBasket] = useState([])
  let [total,setTotal] = useState(0)
  const [isloading, setIsloading] = useState(true)
  const [islogin, setIslogin] = useState(false) 


  useEffect(()=>{
    fetch('https://headphoneservice.onrender.com/api/all')
    .then(res=>res.json())
    .then((list)=>setList(list))
    .catch(err=>console.log(err))
    .finally(()=>setIsloading(false))
  },[])
  
  const filteredList = getFilteredLists(search,list);

  const data ={
      list,
      filteredList,
      search,
      basket,
      total,
      setList,
      setSearch,
      setBasket,
      setTotal,
      isloading,
      islogin,
      setIslogin
  }

  return (
    <MainContext.Provider value={data}>  
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
          element={<Products />}>
        </Route>
        <Route path="/basket"
          element={<Basket />}>
        </Route>
        <Route path="/sign" 
          element={<Sign/>}>
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
    </MainContext.Provider>
  )
}

export default App
