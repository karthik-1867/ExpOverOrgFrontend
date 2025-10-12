import React from 'react'
import "../inviteStatus/friendInviteStatus.css"
import SwipeRightOutlinedIcon from '@mui/icons-material/SwipeRightOutlined';
import SwipeLeftOutlinedIcon from '@mui/icons-material/SwipeLeftOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import FriendsItems from '../friendsItems/FriendsItems';
import { Users } from '../../Dummy';

export default function FriendinviteStatus() {
  return (
    <div className='friendStatusContainer'>
        <div className="friendInviteStatusLeft">
            <div className="friendInviteStatusLeftButtons">
                <button className="friendInviteStatusLeftButton ActiveButton">
                    <SwipeRightOutlinedIcon/>
                    Accepted
                </button>
                <button className="friendInviteStatusLeftButton">
                    <SwipeLeftOutlinedIcon/>
                    Rejected
                </button>
            </div>

            <ul className='expertTrackContainerLists'>
                {Users.map((user)=>(
                    <FriendsItems key={user.id} data={user}/>
                ))}
            </ul>
        </div>
        <div className="freindInviteStatusRight">
             <div className="friendInviteStatusRightButtons">
                 <button className="friendInviteStatusRightButton ActiveButton">
                    <PendingActionsOutlinedIcon/>
                    Pending Invites
                </button>
                <button className="friendInviteStatusRightButton">
                    <PersonAddOutlinedIcon/>
                    Invites Requests
                </button>
             </div>
                         <ul className='expertTrackContainerLists'>
                {Users.map((user)=>(
                    <FriendsItems key={user.id} data={user}/>
                ))}
            </ul>
        </div>

    </div> 
  )
}
