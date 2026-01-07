import React, { useEffect, useState } from 'react'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
export default function KnowledgeUserIntroList({data}) {
 const [obj,setObj] = useState({});

     useEffect(()=>{
        switch (true) {
         case (data.level === 'Legendary'):
           setObj({'mainWrapper':'green-darkBadge','wrapperBadge':'green-dark',"icon":'fa-trophy','text':'Legendary','border':'green-darkBadgeBorder'}) 
           break;
         case data.level  === 'Elite':
           setObj({'mainWrapper':'blueBadge','wrapperBadge':'blue',"icon":'fa-magic','text':'Elite','border':'blueBadgeBorder'})
           break;
         case data.level  === 'Marque':
           setObj({'mainWrapper':'tealBadge','wrapperBadge':'teal',"icon":'fa-rocket','text':'Marque','border':'tealBadgeBorder'})
           break;
         case data.level  === 'Veteran':
           setObj({'mainWrapper':'purpleBatch','wrapperBadge':'purple',"icon":'fa-shield','text':'Veteran','border':'purpleBatchBorder'}) 
           break;
         case data.level  === 'Tech geek':
          setObj({'mainWrapper':'redBatch','wrapperBadge':'redBigBadge',"icon":'fa-anchor','text':'Tech geek','border':'redBigBatchBorder'}) 
           break;
         case data.level  === 'Achiever':
           setObj({'mainWrapper':'pingBadge','wrapperBadge':'pink',"icon":'fa-star','text':'Achiever','border':'pingBadgeBorder'}) 
           break;
          case data.level  === 'Explorer':
           setObj({'mainWrapper':'yellowBadge','wrapperBadge':'yellow',"icon":'fa-bolt','text':'Explorer','border':'yellowBadgeBorder'}) 
           break;
         default:
           console.log("deafult",data.upvoteCount,(data.level  === 10))
           setObj({'mainWrapper':'orangeBadge','wrapperBadge':'orange',"icon":'fa-pied-piper','text':'Newbie','border':'orangeBadgeBorder'}) 
           break;
       }
     },[data])

  return (
                <li className={`expertTrackContainerListItemRight`}>
                  <div className="expertTrackOwnerDetails">
                    <img src={data?.profilePicture} alt="" className={`expertTrackOwnerprofileImg`}/>

                    <div className="expertTrackOwnerNameAndDesignation2">
                       <div className="expertTrackOwnerNameAndDesignationRight">
                           <span style={{'fontWeight':'bold','fontSize':'17px'}}>{data.name}</span>
                           <span style={{'fontWeight':'100','fontSize':'12px'}}>Software enginneer</span>
                       </div>

                    </div>
                  </div>
                  <div className="expertTrackOwnerLeftDetails">
                     
                     <div class={`main-wrapper2 ${obj.mainWrapper}`}>
                        <div class={`badge2 ${obj.wrapperBadge}`}>
                           <div class="circle">  <i class={`fa ${obj.icon} txtSh`} style={{fontSize:'20px'}}></i></div>
                           <div class="ribbon">{obj.text}</div>
                        </div>
                     </div>
                     
                      <div className="expertTrackOwnerLeftFollowers">
                            <Groups2OutlinedIcon/>
                            {data.followers}
                       </div>
                  </div>
            </li>
  )
}
