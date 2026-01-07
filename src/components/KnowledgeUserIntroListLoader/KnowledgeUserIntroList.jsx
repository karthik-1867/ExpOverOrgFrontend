import React, { useEffect, useState } from 'react'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';

export default function KnowledgeUserIntroListLoader() {

    
   const [obj,setObj] = useState({});
  
       useEffect(()=>{
          const rand = Math.floor(Math.random() * 8);

          switch (true) {
           case (rand === 7):
             setObj({'mainWrapper':'green-darkBadge','wrapperBadge':'green-dark',"icon":'fa-trophy','text':'Legendary','border':'green-darkBadgeBorder'}) 
             break;
           case rand === 6:
             setObj({'mainWrapper':'blueBadge','wrapperBadge':'blue',"icon":'fa-magic','text':'Elite','border':'blueBadgeBorder'})
             break;
           case rand === 5:
             setObj({'mainWrapper':'tealBadge','wrapperBadge':'teal',"icon":'fa-rocket','text':'Marque','border':'tealBadgeBorder'})
             break;
           case rand === 4:
             setObj({'mainWrapper':'purpleBatch','wrapperBadge':'purple',"icon":'fa-shield','text':'Veteran','border':'purpleBatchBorder'}) 
             break;
           case rand === 3:
            setObj({'mainWrapper':'redBatch','wrapperBadge':'redBigBadge',"icon":'fa-anchor','text':'Tech geek','border':'redBigBatchBorder'}) 
             break;
           case rand === 2:
             setObj({'mainWrapper':'pingBadge','wrapperBadge':'pink',"icon":'fa-star','text':'Achiever','border':'pingBadgeBorder'}) 
             break;
            case rand === 1:
             setObj({'mainWrapper':'yellowBadge','wrapperBadge':'yellow',"icon":'fa-bolt','text':'Explorer','border':'yellowBadgeBorder'}) 
             break;
           default:
             console.log("deafult")
             setObj({'mainWrapper':'orangeBadge','wrapperBadge':'orange',"icon":'fa-pied-piper','text':'Newbie','border':'orangeBadgeBorder'}) 
             break;
         }
       },[])  


  return (
                <li className={`expertTrackContainerListItemRight`}>
                  <div className="expertTrackOwnerDetails">
                    
                    <span className='expertTrackOwnerprofileImgLoader'></span>
                    <div className="expertTrackOwnerNameAndDesignation2">
                       <div className="expertTrackOwnerNameAndDesignationRight">
                           <span style={{'fontWeight':'bold','fontSize':'17px',padding:'6px',background:'orange',width:'75px',borderRadius:'10px'}}></span>
                           <span style={{'fontWeight':'100','fontSize':'12px',padding:'5px',background:'orange',width:'60px',borderRadius:'10px'}}></span>
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
                            0
                       </div>
                  </div>
            </li>
  )
}
