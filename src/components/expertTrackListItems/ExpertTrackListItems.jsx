import React, { useEffect, useState } from 'react'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import GroupRemoveOutlinedIcon from '@mui/icons-material/GroupRemoveOutlined';
import { useNavigate, useParams } from 'react-router-dom';
import "../Badges/badges.css"
export default function ExpertTrackListItems({data,setId,section,api,type,id,handleFollow}) {

 console.log("dataloogge",data,data.count)
 const navigate = useNavigate();
 const [obj,setObj] = useState({});

 
    console.log("object",data)
 

 useEffect(()=>{
    switch (true) {
     case (data.upvoteCount > 120):
       setObj({'mainWrapper':'green-darkBadge','wrapperBadge':'green-dark',"icon":'fa-trophy','text':'Legendary','border':'green-darkBadgeBorder'}) 
       break;
     case data.upvoteCount > 100:
       setObj({'mainWrapper':'blueBadge','wrapperBadge':'blue',"icon":'fa-magic','text':'Elite','border':'blueBadgeBorder'})
       break;
     case data.upvoteCount > 90:
       setObj({'mainWrapper':'tealBadge','wrapperBadge':'teal',"icon":'fa-rocket','text':'Marque','border':'tealBadgeBorder'})
       break;
     case data.upvoteCount > 75:
       setObj({'mainWrapper':'purpleBatch','wrapperBadge':'purple',"icon":'fa-shield','text':'Veteran','border':'purpleBatchBorder'}) 
       break;
     case data.upvoteCount > 50:
      setObj({'mainWrapper':'redBatch','wrapperBadge':'redBigBadge',"icon":'fa-anchor','text':'Tech geek','border':'redBigBatchBorder'}) 
       break;
     case data.upvoteCount > 30:
       setObj({'mainWrapper':'pingBadge','wrapperBadge':'pink',"icon":'fa-star','text':'Achiever','border':'pingBadgeBorder'}) 
       break;
      case data.upvoteCount > 20:
       setObj({'mainWrapper':'yellowBadge','wrapperBadge':'yellow',"icon":'fa-bolt','text':'Explorer','border':'yellowBadgeBorder'}) 
       break;
     default:
       console.log("deafult",data.upvoteCount,(data.upvoteCount > 10))
       setObj({'mainWrapper':'orangeBadge','wrapperBadge':'orange',"icon":'fa-pied-piper','text':'Newbie','border':'orangeBadgeBorder'}) 
       break;
   }
 },[data])


  const handleSelect = () =>{
     console.log("handleselect called")
     setId(data._id)
     navigate(`/${api}/${section}/${data._id}`);
  }



  return (
            <li className={`${api === 'friendPage' || api == 'community' ? 'expertTrackContainerListItemRight' : 'expertTrackContainerListItem'} ${id===data._id && 'Selected'}`} onClick={handleSelect}>
                  <div className="expertTrackOwnerDetails">
                    <img src={data?.profilePicture} alt="" className={`expertTrackOwnerprofileImg ${api !== 'friendPage' && obj.border}`}/>

                    <div className="expertTrackOwnerNameAndDesignation2">
                       <div className="expertTrackOwnerNameAndDesignationRight">
                           <span style={{'fontWeight':'bold','fontSize':'17px'}}>{data.name}</span>
                           <span style={{'fontWeight':'100','fontSize':'12px'}}>Software enginneer</span>
                       </div>

                    </div>
                  </div>
                  <div className="expertTrackOwnerLeftDetails">
                     { api !== 'friendPage' &&
                     <div class={`main-wrapper2 ${obj.mainWrapper}`}>
                        <div class={`badge2 ${obj.wrapperBadge}`}>
                           <div class="circle">  <i class={`fa ${obj.icon} txtSh`} style={{fontSize:'20px'}}></i></div>
                           <div class="ribbon">{obj.text}</div>
                        </div>
                     </div>
                     }
                      <div className="expertTrackOwnerLeftFollowers">
                            <Groups2OutlinedIcon/>
                            {data.count < 10 ? '0'+data.count : data.count}
                       </div>
                       
                       {type === 'AllUser' ?
                        <div className="expertTrackOwnerFollow" onClick={()=>handleFollow(data._id)}>
                            <GroupAddOutlinedIcon/>
                            {api === 'friendPage' ? 'Request' : ''}                           
                       </div>
                       :
                        <div className="expertTrackOwnerFollow" onClick={()=>handleFollow(data._id)}>
                            <GroupRemoveOutlinedIcon/>  
                            {api === 'friendPage' ? 'Unfollow' : ''}                         
                       </div>
                       }

                  </div>
            </li>
  )
}
