import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import SwipeRightOutlinedIcon from '@mui/icons-material/SwipeRightOutlined';

import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';

import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CodeEditor from '../CodeEditor/CodeEditor';

export default function HomeQueryPostItems({data, type}){

    console.log("trypes",type,data)
    const [save,setSave] = useState(false)
    const [followup,setFollowup] = useState(false)

    const navigate = useNavigate()

    const getRoute = () => {
        switch(type) {
            case 'questionByExpert':
                return `/expertTrack/clickedAnswer/${data._id}`;
            case 'questionByFriend':
                 return `/friendPage/clickedAnswer/${data._id}`;
            case 'allpost':
            default:
                return `/allpost/answer/${data._id}`;
        }

    };

    const handleSave = async(e) => {
      e.preventDefault();
      e.stopPropagation()
      if(save===false){
            setSave(true)
            console.log("saving question",data)
           await axios.post(`${process.env.REACT_APP_URL}/save/saveContentController/question/${data._id}`,{},{withCredentials:true})
      }else{
           setSave(false)
      }
    }

    const handleFollowup = async(e) => {
      e.preventDefault()
      e.stopPropagation()
      if(followup===false){
            setFollowup(true)
            await axios.post(`${process.env.REACT_APP_URL}/followupMessages/followup/${data._id}`,{},{withCredentials:true})
      }else{
            setFollowup(false)
      }
    }
    
    return(
            // <NavLink to={getRoute()} style={{textDecoration:'none'}}>

       
                                <div className="HomeQueryPost" onClick={()=>navigate(getRoute())}>
                                      <div className="HomeQueryTopSection">
                                            <div className="HomeQueryTopSectionProfileAndImg">
                                                <img src={data.userId.profilePicture} alt="" className='HomeQueryTopSectionImg'/>
                                               <div className="HomeQueryTopSectionProfileDetail">
                                                {data.userId.name}
                                                <span className='HomeQueryTopSectionProfileDesignation'>Software Architect&bull;Posted 5min ago</span>
                                               </div>
                                            </div>
                                            <div className="HomeContriButionAndFollowers">
        
                                                  <div className="HomeUrFollower">
                                                        <GroupOutlinedIcon/>
                                                        Follower : {data.userId.followers}
                                                  </div>
                                                  <div className="HomeUrContribution">
                                                        <EmojiObjectsOutlinedIcon/>
                                                        Solution contributed : {data.userId.solutionsPosted}
                                                  </div>
                                                  <div className="HomeUrFriend">
                                                        <ConnectWithoutContactOutlinedIcon/>
                                                        Friend : {data.friends}
                                                  </div>
                                      </div>
                                            
                                      </div>
                                      <hr className='PostHoriline'/>
                                      <div className="HomeQueryMidSection">
                                            <div className="HomeQueryMidSectionLeft">
                                                <img src={data.QuestionProfileImg} alt="" className='HomeQueryMidSectionLogo'/>
                                            </div>
                                            <div className="HomeQueryMidSectionRight">
                                                  <p className='HomeQueryMidSectionRightShortDesc'>{data.QuestionTitle}</p>
                                                  {data.code!='' && <CodeEditor value={data.code}/>}
                                                  <p className="HomeQueryMidSectionRightLongDesc">
                                                        <h className='HomeQueryMidSectionRightLongDescHeading'>
                                                            <QuestionAnswerOutlinedIcon/>
                                                            Problem Description:
                                                            </h>
                                                       
                                                        {data.QuestionBody}
                                                  </p>
        
        
                                                  
                                                  <div 
                                                  className="HomeQueryEndSection">
        
                                                        <div className="HomeQueryEndSectionLeft">
                                                              <div className="HomeQueryEndSectionNumberCard">
                                                                    <SwipeRightOutlinedIcon/>
                                                                    Accepted by : {data.acceptedBy}
                                                              </div>
                                                              <div className="HomeQueryEndSectionNumberCard">
                                                                    <QuestionAnswerOutlinedIcon/>
                                                                    Answered by : {data.answers}
                                                              </div>
                                                        </div>
                                                        <div className="HomeQueryEndSectionRightContainer">

                                                            <div className="HomeQueryEndSectionRight" onClick={(e)=>handleSave(e)}>
                                                                  <TurnedInNotOutlinedIcon/>
                                                                  {
                                                                        (data?.saved?.length>0 || save) ?
                                                                        'Saved'
                                                                        :
                                                                        'Save question'
                                                                  }
                                                            </div>
                                                            <div className="HomeQueryEndSectionRight" onClick={(e)=>handleFollowup(e)}>
                                                                  <UpdateOutlinedIcon/>
                                                                  {
                                                                        (data?.followup?.length>0 || followup) ? 
                                                                        'Following'
                                                                        :
                                                                        'Follow up'
                                                                  }
                                                            </div>
                                                        </div>
                                                        
                                                  </div>
                                            </div>
                                      </div>
        
                                </div>
            // </NavLink>
    )
}