import React from 'react'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import GroupRemoveOutlinedIcon from '@mui/icons-material/GroupRemoveOutlined';
export default function PeopleLoader({type}) {
  return (
                <li className='expertTrackContainerListItem' >
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
                            0
                       </div>
                       {type === 'AllUser' ?
                        <div className="expertTrackOwnerFollow">
                            <GroupAddOutlinedIcon/>     
                       </div>
                       :
                        <div className="expertTrackOwnerFollow">
                            <GroupRemoveOutlinedIcon/>      
                       </div> 
                      }
                  </div>
                </li>
  )
}
