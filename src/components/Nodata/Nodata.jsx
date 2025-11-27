import React from 'react'
import './nodata.css'

export default function Nodata({type,message}) {
  return (
    <div className='NodataContainer'>
     {/* <img src="https://res.cloudinary.com/dnitpjr1v/image/upload/v1763826419/InShot_20251122_211558835_es45sl.png" alt="" className={type=='left' ? 'NodataImg' : 'NodataImgBig'}/>  */}
      <img src="https://res.cloudinary.com/dnitpjr1v/image/upload/v1763900302/InShot_20251123_174625050_t6ldfg.png" alt="" className={type=='left' ? 'NodataImg' : 'NodataImgBig'}/> 
     
         {/* <img src="https://res.cloudinary.com/dnitpjr1v/image/upload/v1763827336/InShot_20251122_213036434_o6mryt.png" alt="" className={type=='left' ? 'NodataImg' : 'NodataImgBig'}/> */}
       
        <span className='NodataText'>{message}</span>
       
    </div>
  )
}
