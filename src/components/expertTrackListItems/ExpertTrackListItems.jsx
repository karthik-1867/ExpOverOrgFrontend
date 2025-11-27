import React, { useEffect, useState } from 'react'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import GroupRemoveOutlinedIcon from '@mui/icons-material/GroupRemoveOutlined';
import { useNavigate, useParams } from 'react-router-dom';

export default function ExpertTrackListItems({data,setId,section,api,type,handleFollow}) {

 console.log("dataloogge",data,api,section)
 const navigate = useNavigate();

  const handleSelect = () =>{
     console.log("handleselect called")
     setId(data._id)
     navigate(`/${api}/${section}/${data._id}`);
  }



  return (
            <li className='expertTrackContainerListItem' onClick={handleSelect}>
                  <div className="expertTrackOwnerDetails">
                    <img src={data?.profilePicture} alt="" className='expertTrackOwnerprofileImg'/>

                    <div className="expertTrackOwnerNameAndDesignation">
                       <span style={{'fontWeight':'bold','fontSize':'17px'}}>{data.name}</span>
                       <span style={{'fontWeight':'100','fontSize':'12px'}}>Software enginneer</span>
                    </div>
                  </div>
                  <div className="expertTrackOwnerLeftDetails">
                      <div className="expertTrackOwnerLeftFollowers">
                            <Groups2OutlinedIcon/>
                            {data.followers}
                       </div>
                       {type === 'AllUser' ?
                        <div className="expertTrackOwnerFollow" onClick={()=>handleFollow(data._id)}>
                            <GroupAddOutlinedIcon/>
                            {api === 'friendPage' ? 'Request' : ''}                           
                       </div>
                       :
                        <div className="expertTrackOwnerFollow" onClick={()=>handleFollow(data._id)}>
                            <GroupRemoveOutlinedIcon/>  
                            {api === 'friendPage' ? 'unfollow' : ''}                         
                       </div>
                       }

                  </div>
                </li>
  )
}
