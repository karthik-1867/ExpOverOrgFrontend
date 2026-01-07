import React, { useEffect, useRef, useState } from 'react'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import Statuspeope from '../StatusPeople/Statuspeope';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

export default function CommunityNotificationList({data,fullData,statusCheck=true,handleUserSelect,selected}) {
 
  const [status,setStatus] = useState(false);
  const [toggle,setToggle] = useState(false);

const string = statusCheck && data.communityName.length > 9 ? data.communityName.slice(0,  9) + "..." : data.communityName
 
   useEffect(()=>{
       if(statusCheck===false) return;
       console.log("fulllllfdata",fullData,data)
       const statusData = fullData.filter((i)=>i.communityId._id===data._id)
       setStatus(statusData);
       console.log("statussas",statusData)
   },[])


  const callHandleClick = () => {
      if(statusCheck===false && handleUserSelect){
          handleUserSelect(data._id);
      } 
  }

  return (
    <>
    
               <li className={`expertTrackContainerListItem ${selected===data._id && 'Selected'}`}  onClick={()=>callHandleClick()}>
                  <div className="expertTrackOwnerDetails">
                    <img src={data?.communityProfileImg} alt="" className='expertTrackOwnerprofileImg'/>

                    <div className="expertTrackOwnerNameAndDesignation">
                       <span style={{'fontWeight':'bold','fontSize':'16px'}} >
                         
                               {string}
                            
                        </span>
                       <span style={{'fontWeight':'200','fontSize':'12px'}}>{data.communityDescription}</span>
                    </div>
                  </div>
                 {statusCheck === true && <div className="expertTrackOwnerLeftDetails" onClick={()=>setToggle(!toggle)}>
                      <div className="expertTrackOwnerFollow">
                             {toggle ? <KeyboardArrowUpOutlinedIcon/> : <KeyboardArrowDownOutlinedIcon/>}  
                       </div>
                  </div>
                 }
                </li>
                {statusCheck === true &&
                  toggle && status.map((i)=>(
                    <Statuspeope data={i} key={i._id}/>
                  ))
                }

    </>
  )
}
