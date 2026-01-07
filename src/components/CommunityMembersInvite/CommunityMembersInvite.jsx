import React, { useEffect, useState } from 'react'
import CommunityMembersList from '../CommunityMembersList/CommunityMembersList';

export default function CommunityMembersInvite({data,fulldata,updateCommunity}) {

  const [friends,setFriends] = useState([]);

   console.log("data...",friends)
     console.log("fulldata....",fulldata)
  useEffect(()=>{
        const request = fulldata.filter((i)=>i.community._id===data)
        console.log("request",request)
        setFriends(request)
  },[data,fulldata])

  return (
        <ul className='expertTrackContainerLists' style={{width:'100%'}}>
          
          {
            friends.length>0 && friends.map((i)=>(
                <CommunityMembersList data={i} key={i._id} updateCommunity={updateCommunity}/>
            ))
          }
        </ul>
  )
}
