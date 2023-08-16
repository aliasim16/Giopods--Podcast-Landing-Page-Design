import React, { useContext } from 'react'
import { useEffect,useState } from 'react'
import "../Css/Products.css"
import { MainContext } from '../context/context'
import '../context/context'




function Products() {

    const {     
        list,
        filteredList,
        search,
        basket,
        total,
        setList,
        setSearch,
        setBasket,
        setTotal
    } = useContext(MainContext)


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
                        className="form-control form-control-lg"
                        type="text" 
                        placeholder="Kategoriye veya Kulaklık ismine göre arama yapabilrsiniz "
                        aria-label=".form-control-lg example"/>

                    </form>   
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
                            <p id='card_category' >Müzik Türü: <span>{item.category}</span></p>
                            <div className="buttons">
                                <button className='btn btn-primary btn_continue_reading' >
                                    <a href="#" className="btn btn-primary">Continue Reading</a>
                                </button>
                                <button onClick={()=>{ 
                                    
                                    setBasket([...basket,item])
                                    setTotal(+1)
                                    console.log(basket)
                                    console.log(total)
                                }} className='btn btn-success btn_continue_reading' >
                                    <a href="#" className="btn success">Sepete Ekle</a>
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

export default Products