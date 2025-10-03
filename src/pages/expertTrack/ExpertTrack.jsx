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

export default function ExpertTrack() {
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
                       Followed Expert
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
                       Author Questions  
                  </button>
                  <button className="expertTrackContainerRightButton">
                       <CallToActionOutlinedIcon/>
                       Author answers
                  </button>
                  <button className="expertTrackContainerRightButton">
                       <PsychologyAltOutlinedIcon/>
                       Knowledge
                  </button>
              </div>
              <div className="expertTrackContainerRightContent">
                <HomePageQuestionSection/>
              </div>
       </div>
    </div>
  )
}
