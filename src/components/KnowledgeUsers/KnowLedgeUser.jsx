import React from 'react'
import { NavLink } from 'react-router-dom'
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';

export default function KnowLedgeUser({data,id}) {
 
console.log("full knowedge sdasd",data)
  return (
             <NavLink to={`/community/individualKnowledge/${data.communityId}/${data.yoursId._id}`} style={{textDecoration:'none'}}>

     
                <li className={`expertTrackContainerListItemRight ${id===data.yoursId._id && 'Selected'}`} >
                  <div className="expertTrackOwnerDetails">
                    <img src={data?.yoursId?.profilePicture} alt="" className='expertTrackOwnerprofileImg'/>

                    <div className="expertTrackOwnerNameAndDesignation">
                       <span style={{'fontWeight':'bold','fontSize':'17px'}}>{data.yoursId.name}</span>
                    </div>
                  </div>
                  <div className="expertTrackOwnerLeftDetails">
                       <div className="expertTrackOwnerLeftFollowers">
                            <InsertCommentOutlinedIcon/>
                            {data.count<10 ? '0'+data.count : data.count}
                       </div>
                  </div>
                </li>
                </NavLink>
  )
}
