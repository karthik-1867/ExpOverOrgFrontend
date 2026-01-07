import React, { useState } from 'react'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import "./communityList.css"

export default function CommunityList({data,fulldata,setSelectedId}) {
    
  let maxChars = 12;
  console.log("funlldat",fulldata)


  const displayText =  data.communityName.length > maxChars
      ? data.communityName.slice(0, maxChars) + "…"
      : data.communityName;

  const handleSelect=()=>{
      setSelectedId(data._id)
  }
  return (
                <li className='expertTrackContainerListItem'  onClick={handleSelect}>
                  <div className="expertTrackOwnerDetails">
                    <img src={data?.communityProfileImg} alt="" className='expertTrackOwnerprofileImg'/>

                    <div className="expertTrackOwnerNameAndDesignation">
                       <span style={{'fontWeight':'bold','fontSize':'16px'}} >{displayText}</span>
                       <span style={{'fontWeight':'200','fontSize':'12px'}}>{data.communityDescription}</span>
                    </div>
                  </div>
                  <div className="expertTrackOwnerLeftDetails">
                      <div className="expertTrackOwnerLeftFollowers">
                            <Groups2OutlinedIcon/>
                            {data.totalMembers}
                       </div>

                  </div>
                </li>
  )
}
