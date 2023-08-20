import React from 'react'
import { MainContext,useContext } from '../context/context'
import '../context/context'

function Basket() {
    
    const {     
        list,
        filteredList,
        search,
        basket,
        total,
        setList,
        setSearch,
        setBasket,
        setTotal,
        isloading

    } = useContext(MainContext)

  return (
    
    <>
        <div className="container">
            <div className="row">

            
            <h1>Sepetinizde olan ürün sayısı: {total} </h1>
            {
                isloading && 
                <div className="d-flex justify-content-center align-item-center">
                <div className="spinner-border spinner " style={{color:"#5628AE",width:"9rem", height:"9rem",fontSize:"36px" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                </div>
            }
            {
            basket.map((item=>
                <div className="col-sm-6 col-md-4 col-lg-3 my-3" key={item.id}>
                    <div className="card card_img " >
                        <img src={item.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p id="card_paragraph" className="card-text card_paragraph">{item.description}</p>
                            <p id='card_category' >Müzik Türü: <span>{item.category}</span></p>
                            <div className="buttons">
                                
                                <button className='btn btn-danger delete' onClick={()=>{
                                    setBasket((current)=>
                                        current.filter((product)=>product.id !== item.id))
                                        setTotal((total)=>total-1)
                                }} >
                                    <a href="#" className="btn btn-danger">Sepetten Çıkar</a>
                                </button>
                                
                            </div>

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

export default Basket