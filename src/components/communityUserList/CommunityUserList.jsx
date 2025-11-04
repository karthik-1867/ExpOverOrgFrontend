import React, { useEffect, useState } from 'react'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import { useNavigate, useParams } from 'react-router-dom';

export default function CommunityUserList({data,setId,section,api}) {

 console.log("dataloogge",data)
 const navigate = useNavigate();

  const handleSelect = () =>{
     console.log("handleselect called")
     setId(data._id)
     navigate(`/${api}/${section}/${data._id}`);
  }



  return (
            <li className='expertTrackContainerListItem'  onClick={handleSelect}>
                  <div className="expertTrackOwnerDetails">
                    <img src={data?.communityProfileImg} alt="" className='expertTrackOwnerprofileImg'/>

                    <div className="expertTrackOwnerNameAndDesignation">
                       <span style={{'fontWeight':'bold','fontSize':'16px'}} >{data.communityName}</span>
                       <span style={{'fontWeight':'200','fontSize':'12px'}}>{data.communityDescription}</span>
                    </div>
                  </div>
                  <div className="expertTrackOwnerLeftDetails">
                      <div className="expertTrackOwnerLeftFollowers">
                            <Groups2OutlinedIcon/>
                            {data.totalMembers}
                       </div>
                       <div className="expertTrackOwnerFollow">
                            <GroupAddOutlinedIcon/>
                            Follow
                       </div>
                  </div>
                </li>
  )
}
