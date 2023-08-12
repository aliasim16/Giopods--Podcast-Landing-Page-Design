import React from 'react'
import { useEffect,useState } from 'react'
import "./Css/Products.css"

function Products() {

    const [list,setList] = useState([]) 

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then((list)=>setList(list))
      .catch(err=>console.log(err))
      
    },[])

  return (
    
    <>
        <div className="container products_container">
            <div className="row">
            {
            list.map((item=>
                <div className="col-sm-6 col-md-4 col-lg-3 my-3" key={item.id}>
                    <div className="card card_img " >
                        <img src={item.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text card_paragraph">{item.description}</p>
                            <a href="#" className="btn btn-primary">Continue Reading</a>
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