import React from 'react'
import { useEffect,useState } from 'react'
import "./Css/Products.css"

const getFilteredLists = (search,list) =>{
    if(!search){
        return list;
    }
    
    return list.filter((item)=> 
    item.name.includes(search) ||
    item.category.includes(search ))
}
function Products() {

    const [list,setList] = useState([]) 
    const [search,setSearch] = useState("")


    useEffect(()=>{
      fetch('https://headphoneservice.onrender.com/api/all')
      .then(res=>res.json())
      .then((list)=>setList(list))
      .catch(err=>console.log(err))
      
    },[])
    
    const filteredList = getFilteredLists(search,list);

  return (
    
    <>
        <div className="container products_container my-4">
            <div className="row ">

                <div className="col-sm column">
                    <form >
                        <div className="label">
                            <label className='my-3' htmlFor="search">Search</label>
                        </div>
                        <input 
                        onChange={(e)=> setSearch(e.target.value) }
                        class="form-control form-control-lg"
                        type="text" 
                        placeholder="Kategoriye veya Kulaklık ismine göre arama yapabilrsiniz "
                        aria-label=".form-control-lg example"/>

                    </form>    
                {/* <div className="dropdown">
                    <a className="btn btn-primary dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Kategori Filtrele
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Hip Hop</a></li>
                        <li><a className="dropdown-item" href="#">Rock</a></li>
                        <li><a className="dropdown-item" href="#">Jazz</a></li>
                        <li><a className="dropdown-item" href="#">Pop</a></li>
                    </ul>
                </div> */}
                </div>
            </div>
            <div className="row">
            {
            filteredList.map((item=>
                <div className="col-sm-6 col-md-4 col-lg-3 my-3" key={item.id}>
                    <div className="card card_img " >
                        <img src={item.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p id="card_paragraph" className="card-text card_paragraph">{item.description}</p>
                            <p>{item.category}</p>
                            <button className='btn btn-primary btn_continue_reading' >
                                <a href="#" className="btn btn-primary">Continue Reading</a>
                            </button>
                        </div>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    </>
  )
}

export default Products