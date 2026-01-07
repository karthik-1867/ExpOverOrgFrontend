import React, { useEffect } from 'react'

import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import axios from 'axios';

export default function CommunityMembersList({data,updateCommunity}) {

    console.log("community fdata",data)

  useEffect(()=>{

  },[data])

  const handleAccept = async() => {
     console.log("community fdata",data)
     await axios.post(`${process.env.REACT_APP_URL}/community/acceptInviteCommunity/${data._id}`,{},{withCredentials:true})
     updateCommunity(data.community._id)
  }

  return (
              <li className='expertTrackContainerListItem' >
                  <div className="expertTrackOwnerDetails">
                    <img src={data.yours?.profilePicture} alt="" className='expertTrackOwnerprofileImg'/>

                    <div className="expertTrackOwnerNameAndDesignation">
                       <span style={{'fontWeight':'bold','fontSize':'17px'}}>{data.yours?.name}</span>
                       <span style={{'fontWeight':'100','fontSize':'12px'}}>Software enginneer</span>
                    </div>
                  </div>
                  <div className="expertTrackOwnerLeftDetails">
                  <div class="communityFollow" onClick={()=>handleAccept()}>
                    <Groups2OutlinedIcon/>
                     Accept
                    </div>
                  </div>
                </li>
  )
}
