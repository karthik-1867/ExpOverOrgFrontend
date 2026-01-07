import React from 'react'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';

export default function NotificationUserListItem({data,id,handleUserSelect}) {

  const handleSelect = () =>{
     console.log("handleselect called")
     handleUserSelect(data._id);
  }
  return (
                <li className={`expertTrackContainerListItem ${id===data._id && 'Selected'}`} onClick={handleSelect}>
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
                  </div>
            </li>
  )
}
