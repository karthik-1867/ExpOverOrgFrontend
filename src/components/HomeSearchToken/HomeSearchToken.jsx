import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HomeSearchToken({data,setSearchTokenSelected}) {
  return (

     <NavLink to="tokenSearch" className={({ isActive }) => `${isActive ? 'HomeSearchTokenContent' : 'HomeSearchTokenContent'}`} onClick={()=>setSearchTokenSelected({selected:'true',data:data})} style={{textDecoration:'none'}}>

            {/* <div className="HomeSearchTokenContent"> */}
                <span>
                    <img src={data.category[0].categoryImage} alt="" style={{width:'50px',height:'50px',borderRadius:'10px',objectFit:'cover',boxShadow:'0 10px 50px rgba(0, 0, 0, 0.6), 0 -6px 20px rgba(255, 140, 0, 0.02) inset'}}/>
                </span>
                <div className="HomeSearchTokenDetails">
                    <div className="HomeSearchTokenName">
                        Search Token name : {data.stringSearch}
                    </div>
                    <div className="HomeSearchTokenResultContent">
                        Found <span style={{color:'white',fontWeight:'bold',fontSize:'16px'}}>{data.cuurentcount}</span> records for <span style={{color:'white',fontWeight:'bold'}}>{data.stringSearch}</span> token
                    </div>
                </div>
         {/* </div> */}
     </NavLink>
  )
}
