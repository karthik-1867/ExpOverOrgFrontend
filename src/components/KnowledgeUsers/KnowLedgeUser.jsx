import React from 'react'
import { NavLink } from 'react-router-dom'

export default function KnowLedgeUser({data,communityId}) {
 
console.log("full knowedge",data)
  return (
             <NavLink to={`/community/individualKnowledge/${communityId}/${data.yoursId._id}`} style={{textDecoration:'none'}}>

     
                <li className='expertTrackContainerListItem' >
                  <div className="expertTrackOwnerDetails">
                    <img src={data?.yoursId?.profilePicture} alt="" className='expertTrackOwnerprofileImg'/>

                    <div className="expertTrackOwnerNameAndDesignation">
                       <span style={{'fontWeight':'bold','fontSize':'17px'}}>{data.yoursId.name}</span>
                    </div>
                  </div>
                  <div className="expertTrackOwnerLeftDetails">
                       <div className="expertTrackOwnerFollow">
                           Count
                            :
                            {data.count}
                       </div>
                  </div>
                </li>
                </NavLink>
  )
}
