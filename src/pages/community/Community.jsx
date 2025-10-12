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
import CommunityInviteStatus from '../../components/communityInviteStatus/CommunityInviteStatus';
import CreateCommunity from '../../components/createCommunity/CreateCommunity';


export default function Community() {
  return (
    <div className='expertTrackContainer'>
       <div className="expertTrackcontainerLeft">
              <div className="expertTrackContainerLeftButtons">
                 <button className="expertTrackContainerLeftButton ActiveButton">
                       <PeopleAltOutlinedIcon/>
                       Public commnuity
                  </button>
                  <button className="expertTrackContainerLeftButton">
                       <ContactPageOutlinedIcon/>
                       Private Community
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
                         Share knowledge  
                  </button>
                  <button className="expertTrackContainerRightButton">
                       <CallToActionOutlinedIcon/>
                        Create community
                  </button>
                  <button className="expertTrackContainerRightButton">
                       <PsychologyAltOutlinedIcon/>
                       join public community
                  </button>
                   <button className="expertTrackContainerRightButton">
                       <PersonAddAlt1Outlined/>
                        Invite status
                  </button>
              </div>
              <div className="friendContainerRightContent">
                {/* <HomePageQuestionSection/> */}
                {/* <CommunityInviteStatus/> */}
                <CreateCommunity/>
              </div>
       </div>
    </div>
  )
}
