import React from 'react'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';

export default function FriendsItems({data,setId,type,handleAccept}) {
  return (
            <li className='expertTrackContainerListItem' onClick={()=>setId(data._id)}>
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
                        {type === 'friend' && 
                          <div className="expertTrackOwnerFollow" onClick={()=>handleAccept(data._id)}>
                            <GroupAddOutlinedIcon/>
                            Accept                           
                       </div>
                       }
                  </div>
                </li>
  )
}
