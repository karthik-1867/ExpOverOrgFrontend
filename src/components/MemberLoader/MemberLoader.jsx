import React from 'react'
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';

export default function MemberLoader() {
  return (
                <li className='expertTrackContainerListItem' >
                  <div className="expertTrackOwnerDetails">
                     <span className='expertTrackOwnerprofileImgLoader'></span>

                    <div className="expertTrackOwnerNameAndDesignationLoader">
                       <span className='NameLoader'></span>
                    </div>
                  </div>
                  <div className="expertTrackOwnerLeftDetails">
                       <div className="expertTrackOwnerLeftFollowers">
                          <InsertCommentOutlinedIcon/>
                            00
                       </div>
                  </div>
                </li>
  )
}
