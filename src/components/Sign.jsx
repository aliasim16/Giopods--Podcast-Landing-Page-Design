import React from 'react'
import "../Css/Sign.css"
import { MainContext,useContext } from '../context/context'
import '../context/context'

function Sign() {

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
        isloading,
        setIslogin,
        islogin
    } = useContext(MainContext) 
  return (
    <>
    <div className="container sign_container ">
        <div className="row sign_row ">
            <div className="col-sm col-md col-lg  sign_box">
                <h1>Kayıt Ol / Giriş Yap</h1>
                <form action=''>
                    <div className="input">
                    <label htmlFor="name">Kullanıcı Adı:</label>
                    <input type="text" name="name" id='username'  />
                    </div>
                    <div className="input">
                    <label htmlFor="password">Şifre:</label>
                    <input type="password" name="password" id='password' />
                    </div>
                    <button onClick={(e)=>{
                        localStorage.setItem('username',document.getElementById('username').value)
                        localStorage.setItem('password',document.getElementById('password').value)
                        console.log('kayıt yapıldı')
                        e.preventDefault()
                        document.getElementById('succes').innerHTML='Kayıt Yapıldı'
                    }} type="submit">Kayıt Ol</button>
                    <h1 id='error'className='text-danger' ></h1>
                    <h1 id='succes' className='text-success' ></h1>
                    <button onClick={(e)=>{
                        if(localStorage.getItem('username')===document.getElementById('username').value && localStorage.getItem('password')===document.getElementById('password').value){
                            setIslogin(true)
                            console.log('giriş yapıldı')
                            e.preventDefault()
                            document.getElementById('succes').innerHTML='Giriş Yapıldı'
                        }
                        else if (localStorage.getItem('username')!== document.getElementById('username').value || localStorage.getItem('password')!==document.getElementById('password').value){
                            setIslogin(false)
                            console.log('giriş yapılamadı')
                            e.preventDefault()
                            document.getElementById('error').innerHTML='Kullanıcı adı veya şifre hatalı'
                        }
                    }} type="submit">Giriş Yap</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sign