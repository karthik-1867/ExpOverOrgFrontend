import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import SwipeRightOutlinedIcon from '@mui/icons-material/SwipeRightOutlined';

import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CodeEditor from '../CodeEditor/CodeEditor';

export default function HomeQueryPostItems({data, type}){

    console.log("trypes",type,data)

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
    
    return(
            <NavLink to={getRoute()} style={{textDecoration:'none'}}>

       
                                <div className="HomeQueryPost">
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
                                                        <div className="HomeQueryEndSectionRight">
                                                              <TurnedInNotOutlinedIcon/>
                                                              Save question
                                                        </div>
                                                  </div>
                                            </div>
                                      </div>
        
                                </div>
            </NavLink>
    )
}