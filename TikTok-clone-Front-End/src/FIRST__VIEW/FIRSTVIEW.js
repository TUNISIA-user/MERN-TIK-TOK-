import React from 'react'
import "./FirstVIew.css"
import { useNavigate } from 'react-router-dom'
const   FIRSTVIEW = () => {
    const Nav = useNavigate()
  
  return (
    <div className='container__first_view'>
        
        <div className="insdide__cotnainer">
          <div className='firstview__img'><img src='./betterfly.PNG'/></div>
          <div className='firstview__titile'> 
            <h1>TIKTOK</h1>
            <h4 className='whatsapp'>What's up?     </h4>
          </div>


          <div className='firstview__button'>

            <input type='button' className='button1' value="Create a new account" onClick={()=> {Nav("/Spinner")}} />

            <input type='button' className='button2' value="Sign in" />
           
          </div>          

        </div>  

        </div>
  )
}

export default FIRSTVIEW    