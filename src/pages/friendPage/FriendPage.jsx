import React from 'react'
import "../expertTrack/expertTrack.css" 
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import CallToActionOutlinedIcon from '@mui/icons-material/CallToActionOutlined';
import { Users } from '../../Dummy';
import ExpertTrackListItems from '../../components/expertTrackListItems/ExpertTrackListItems';
import HomePageQuestionSection from '../../components/HomePageQuestionSection/HomePageQuestionSection';
import { PersonAddAlt1Outlined } from '@mui/icons-material';
import FriendinviteStatus from '../../components/inviteStatus/FriendinviteStatus';

export default function FriendPage() {
  return (
    <div className='expertTrackContainer'>
       <div className="expertTrackcontainerLeft">
              <div className="expertTrackContainerLeftButtons">
                 <button className="expertTrackContainerLeftButton ActiveButton">
                       <PeopleAltOutlinedIcon/>
                       All user 
                  </button>
                  <button className="expertTrackContainerLeftButton">
                       <ContactPageOutlinedIcon/>
                       Followed Friend
                  </button>
              </div>
              <ul className='expertTrackContainerLists'>
                   {Users.map((user)=>(
                       <ExpertTrackListItems key={user.id} data={user}/>
                   ))}
              </ul>
       </div>
       <div className="expertTrackContainerRight">
            <div className="expertTrackContainerRightButtons">
                 <button className="expertTrackContainerRightButton ActiveButton">
                        <HelpRoundedIcon />
                         Questions  
                  </button>
                  <button className="expertTrackContainerRightButton">
                       <CallToActionOutlinedIcon/>
                        answers
                  </button>
                  <button className="expertTrackContainerRightButton">
                       <PsychologyAltOutlinedIcon/>
                       Knowledge
                  </button>
                   <button className="expertTrackContainerRightButton">
                       <PersonAddAlt1Outlined/>
                        Invite status
                  </button>
              </div>
              <div className="friendContainerRightContent">
                {/* <HomePageQuestionSection/> */}
                <FriendinviteStatus/>
              </div>
       </div>
    </div>
  )
}
