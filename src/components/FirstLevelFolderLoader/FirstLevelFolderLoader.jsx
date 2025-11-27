import React from 'react'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import './firstLevelFolderLoader.css'
export default function FirstLevelFolderLoader() {
  return (
                <li 
              
              className={`expertTrackContainerListItem`} 
              
            >
                  <div className="expertTrackOwnerDetails">
                    <span className='expertTrackOwnerprofileImgLoader'></span>

                    <div className="expertTrackOwnerNameAndDesignationLoader">
                       <span className='NameLoader'></span>
                       <span className='DesignationLoader'></span>
                    </div>
                  </div>
                  <div className="expertTrackOwnerLeftDetails">
                       <div className="expertTrackOwnerFollow">
                            <ArrowRightAltOutlinedIcon/>  
                       </div>
                  </div>
                </li>
  )
}
