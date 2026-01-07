import React, { useEffect, useState } from 'react'
import CommunityNotificationList from '../CommunityNotificationList/CommunityNotificationList';

export default function CommunityNotificationStatus({data}) {
  const [community,setCommunity] = useState([])


  useEffect(()=>{
      const communitys = data.map((i)=>i.communityId).filter((c,idx,arr)=>(arr.findIndex(x => x._id === c._id) === idx))
      setCommunity(communitys)

      console.log("communiyusduas",communitys)
        
  },[data]);

  return (
      <>
      {
          community.map((i)=>(
              <CommunityNotificationList data={i} fullData={data} key={i._id}/>
            ))
        }
        </>
  )
}
