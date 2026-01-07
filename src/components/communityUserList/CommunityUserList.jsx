import React, { useEffect, useState } from 'react'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import GroupRemoveOutlinedIcon from '@mui/icons-material/GroupRemoveOutlined';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function CommunityUserList({data,setId,section,api,type,handleCommunity,id}) {

 console.log("dataloogge",data)
 const navigate = useNavigate();

  const handleSelect = () =>{
     console.log("handleselect called")
     setId(data._id)
     navigate(`/${api}/${section}/${data._id}`);
  }

  const handleFollow = async(requestType) => {
    if(requestType=='follow'){
      let api = type === 'allPublicCommunity' ? 'followPublicCommunity' : 'followPrivateCommunity';
      await axios.post(`${process.env.REACT_APP_URL}/community/${api}/${data._id}`,{},{withCredentials:true})
      handleCommunity(type)
    }else{
      let api = type === 'getFollowedPublicCommunity' ? 'unfollowPublicCommunity' : 'unfollowPrivateCommunity';
      await axios.delete(`${process.env.REACT_APP_URL}/community/${api}/${data._id}`,{withCredentials:true})
      handleCommunity(type)
    }
  }



  return (
            <li className={`expertTrackContainerListItem ${id===data._id && 'Selected'}`}  onClick={handleSelect}>
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
                            {data.count<10 ? '0'+data.count : data.count}
                       </div>
                       {
                        type == 'allPublicCommunity' || type == 'allPrivateCommunity' ?
                        <div className="expertTrackOwnerFollow" onClick={()=>handleFollow('follow')}>
                            <GroupAddOutlinedIcon/>
                            {type === 'allPublicCommunity' && 'Follow'}
                            {type === 'allPrivateCommunity' && 'Request'}
                       </div>
                       :
                       <div className="expertTrackOwnerFollow" onClick={()=>handleFollow('unfollow')}>
                            <GroupRemoveOutlinedIcon/>
                            Unfollow
                       </div>
                       }
                  </div>
                </li>
  )
}
