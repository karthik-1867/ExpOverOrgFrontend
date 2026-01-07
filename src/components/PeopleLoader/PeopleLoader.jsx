import React from 'react'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import GroupRemoveOutlinedIcon from '@mui/icons-material/GroupRemoveOutlined';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
export default function PeopleLoader({type,category='expert'}) {
  return (
                <li className={`${category==='friend' ? 'expertTrackContainerListItemRight' : 'expertTrackContainerListItem'}`} >
                  <div className="expertTrackOwnerDetails">
                    <span className='expertTrackOwnerprofileImgLoader'></span>

                    <div className="expertTrackOwnerNameAndDesignation">
                       <span className='NameLoader'></span>
                       <span className='DesignationLoader'></span>
                    </div>
                  </div>
                  <div className="expertTrackOwnerLeftDetails">
                      <div className="expertTrackOwnerLeftFollowers">
                            <Groups2OutlinedIcon/>
                            00
                       </div>
                     
                       {
                       
                       category === 'expert' ? 
                       (type === 'AllUser' ? <div className="expertTrackOwnerFollow">
                            <GroupAddOutlinedIcon/>     
                       </div>
                       :
                        <div className="expertTrackOwnerFollow">
                            <GroupRemoveOutlinedIcon/>      
                       </div>)
                       :
                       (
                      type === 'AllUser' || type == 'allPublicCommunity' || type == 'allPrivateCommunity' ? <div className="expertTrackOwnerFollow">
                            <GroupAddOutlinedIcon/>
                            {category === 'friend' && 'Request'}
                            {type === 'AllUser' || type ==='allPublicCommunity' && 'Follow'}  
                            {type === 'allPrivateCommunity' && 'Request'}   
                       </div>
                       :
                        <div className="expertTrackOwnerFollow">
                            <GroupRemoveOutlinedIcon/>
                            Unfollow      
                       </div>

                       ) 
                      }
                  </div>
                </li>
  )
}
