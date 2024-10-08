import React, { useState } from 'react';
import "./LeftBAR2.css";
import { Nahdi_Gayth } from '../context/GlobalContext';
 

const LeftBAR2 = () => {

  const [open,setopen] = useState(false)
  const [updateUserName,setUpdateUserName] = useState("")
  const [updatename,setupdatename] = useState("")
  const [updatebio,setupdatebio] =  useState("")
  



  const [activeSection, setActiveSection] = useState('videos'); // Set default to 'videos'
   const Move = Nahdi_Gayth()
   console.log(Move.FLOWING2,"you se me ")
 
  const renderContent = () => {
    if (activeSection === 'videos') {
      return <div>add videos</div>;
      
    } else if (activeSection === 'favorites') {
      return <div className='container__fav'>
                   <div className='card__favorite'>
                  
                      {Move.FLOWING2.map((item)=>
                      
                      <video 
                      className='video__player' 
                      width="400" 
                      height="515" 
                      
                      autoPlay
                      src={item.url}
                      muted  
                      loop  
                      playsInline   
                      
                      /> 

                      )}
 
                   </div>
      </div>;
    }
  };


 const Handel__click = (e)=>{
  e.preventDefault();
 
  Move.dispatch({
    type : "UPDATE__USER" ,
    paylod :{
      
      email : updatename,
      bio : updatebio,

    }
  })

 }
  return (
    <div className='LeftBAR2'>
      <div className='top__nav__bar'>
        <div className='top__nav__bar__img'>
          <img
            loading="lazy"
            alt=""
            src={Move.user?.imgUrl?Move.user.imgUrl :"https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/37088e0f4d5663fc7b1baab2317fd6cb~c5_720x720.jpeg?lk3s=a5d48078&amp;nonce=76217&amp;refresh_token=6ac8a92226bf0bfd183487e9c09400af&amp;x-expires=1724324400&amp;x-signature=tTIBkeBor74qKHSc6db1MXho2jY%3D&amp;shp=a5d48078&amp;shcp=a1d2006b"}
          
            className="css-1zpj2q-ImgAvatar e1e9er4e1"
          />
        </div>
        <div className='top__nav__bar__title'>
          <div className='index1'>{Move.user?`hello ${Move.user.email}`:"Guest"}</div>
          <div className='index2'>@___{Move.user ? Move.user.email :"@Guest"}</div>
          <div className='edit'>
            <span className="material-symbols-outlined">edit</span>
            <span onClick={()=>setopen(true)} style={{cursor:"pointer"}}>Edit Profile</span>
          </div>
        </div>
      </div>

      <div className='floowers'>
        <div className='Following'>
          <span className='xa'>Following:</span>
          <span>0</span>
        </div>
        <div className='Followers'>
          <span className='xa'>Followers:</span>
          <span>323M</span>
        </div>
        <div className='Likes'>
          <span className='xa'>Likes:</span>
          <span>100Md</span>
        </div>
      </div>

      <div className='bio__tiktok__mern__stack'> 
      <h2>{Move?.user?.bio ? Move.user.bio : "no comment yet "}</h2>

      </div>

      <div className='section__videos__tiktok'>
        <h2 
          onClick={() => setActiveSection('videos')}
          className={activeSection === 'videos' ? 'active' : ''}
        >
          Videos
        </h2>
        <h2 
          onClick={() => setActiveSection('favorites')}
          className={activeSection === 'favorites' ? 'active' : ''}
        >
          Favorite
        </h2>
      </div>

      <div className='section__content'>
        {renderContent()}
      </div>


      <div className="update__card" style={open?{display:"flex"}:  {display:"none"}}>
      <h3 onClick={() => setopen(false)} style={{ cursor: "pointer" }}>X</h3>
      <div className='section__update__camera'>
           
  
<div class="form-container">
      <form class="form">
        <div class="form-group">
          

      
          
         
          <label for="name"> name</label>
          
          <input type="text" id="name" name="name"  placeholder='Change name' onChange={(e)=>setupdatename(e.target.value)}/>
        </div>
        <div class="form-group">
          <label for="textarea">Set bio ... ?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50"  placeholder='set bio....' onChange={(e)=>setupdatebio(e.target.value)}>          </textarea>
        </div>
        <button class="form-submit-btn"  onClick={Handel__click}  >      <h2>{Move?.user?.bio ? "Update" : "ADD Comment"}</h2></button>
      </form>
    </div>
        </div>
      </div>
   
    </div>
 
  );
}

export default LeftBAR2;
