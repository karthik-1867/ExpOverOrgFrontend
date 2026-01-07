import React from 'react'
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import { NavLink } from 'react-router-dom';

export default function FollowupQuestionList({data}) {
  return (
    <NavLink to={`/Notification/Followups/${data._id}`} style={{textDecoration:'none',color:'inherit'}}>
    <li>
        <p className='NotificationFollowupItem'>
                <img src={data.QuestionProfileImg} alt="" className='NotificationImg'/>
            
                <span className='NotificationText'>
                    {data.QuestionTitle}
                </span>
                <div className="NoticationEnd">
                    <div class="expertTrackOwnerLeftFollowers">
                        <UpdateOutlinedIcon/>
                     <span style={{color: "orange",background: "#935f00", padding: "3px", border: "1px solid", borderRadius: "3px"}}>upd : {data.count}</span>
                    
                    </div>
                   
                </div>
        </p>

    </li>
    </NavLink>
  )
}
