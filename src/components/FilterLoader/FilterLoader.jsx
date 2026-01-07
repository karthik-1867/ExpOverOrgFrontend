import React from 'react'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import GroupRemoveOutlinedIcon from '@mui/icons-material/GroupRemoveOutlined';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

export default function FilterLoader({type}) {
  return (
             <li className='expertTrackContainerListItemRight' >
                  <div className="expertTrackOwnerDetails">
                    <span className='expertTrackOwnerprofileImgLoader'></span>

                    <div className="expertTrackOwnerNameAndDesignation">
                       <span className='NameLoader'></span>
                       <span className='DesignationLoader'></span>
                    </div>
                  </div>
                  <div className="expertTrackOwnerLeftDetails">
                      <ToggleSwitch type={type}/>
                  </div>
                </li>
  )
}
