import React from 'react'
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import GroupRemoveOutlinedIcon from '@mui/icons-material/GroupRemoveOutlined';

export default function Statuspeope({data}) {

  console.log("dattaaaa",data)

  
const string = data?.userId.name.length > 17 ? data?.userId.name.slice(0,  17) + ".." : data?.userId.name

  return (
                <li className={`expertTrackContainerListItem ${data.type === 'community' && 'Selected'}`} >
                  <div className="expertTrackOwnerDetails">
                    <img src={data?.userId.profilePicture} alt="" className={`expertTrackOwnerprofileImg ${data.status==='accepted'?'green':'red'}`}/>

                    <div className="expertTrackOwnerNameAndDesignation">
                       <span style={{'fontWeight':'bold','fontSize':'17px'}}>{string}</span>
                       <span style={{'fontWeight':'100','fontSize':'12px'}}>Software enginneer</span>
                    </div>
                  </div>
                  <div className="expertTrackOwnerLeftDetails">
                      <div className="expertTrackOwnerLeftFollowers">
                            {data.status==='accepted' ? <GroupAddOutlinedIcon/> : <GroupRemoveOutlinedIcon/>}
                            <span style={{color: (data.status==='accepted'?'#38ca38':data.status==='pending'?'orange':'red'),background:(data.status==='accepted'?'rgb(51 128 7)':data.status==='pending'?'#935f00':'#cb0000ab'),padding: '3px',border: '1px solid',borderRadius: '3px'}}>
                                {data?.status}
                              </span>
                       </div>
                  </div>
                </li>
  )
}
