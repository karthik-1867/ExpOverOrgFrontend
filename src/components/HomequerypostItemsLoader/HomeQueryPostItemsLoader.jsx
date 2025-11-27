import React from 'react'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import SwipeRightOutlinedIcon from '@mui/icons-material/SwipeRightOutlined';

import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';

import './homeQueryPostItemsLoader.css'

export default function HomeQueryPostItemsLoader() {
  return (
                                   <div className="HomeQueryPost">
                                      <div className="HomeQueryTopSection">
                                            <div className="HomeQueryTopSectionProfileAndImg">
                                                <span className='HomeQueryTopSectionImgLoader'></span>
                                                <div className="HomeQueryTopSectionProfileDetail">
                                                    <span className='HomeQueryTopSectionNameLoader'></span>
                                                    <span className='HomeQueryTopSectionProfileDesignationLoader'></span>
                                                </div>
                                            </div>
                                           <div className="HomeContriButionAndFollowers">
        
                                                  <div className="HomeUrFollower">
                                                        <GroupOutlinedIcon/>
                                                        Follower : 
                                                        <span className='HomeQueryTopSectionNumberLoader'></span>
                                                  </div>
                                                  <div className="HomeUrContribution">
                                                        <EmojiObjectsOutlinedIcon/>
                                                        Solution contributed :  <span className='HomeQueryTopSectionNumberLoader'></span>
                                                  </div>
                                                  <div className="HomeUrFriend">
                                                        <ConnectWithoutContactOutlinedIcon/>
                                                        Friend :  <span className='HomeQueryTopSectionNumberLoader'></span>
                                                  </div>
                                      </div>
                                            
                                      </div>
                                      <hr className='PostHoriline'/>
                                      <div className="HomeQueryMidSection">
                                            <div className="HomeQueryMidSectionLeft">
                                                <span className='HomeQueryMidSectionLogoImgLoader'></span>
                                            </div>
                                            <div className="HomeQueryMidSectionRight">
                                                  <p className='HomeQueryMidSectionRightShortDescLoader'></p>
                                                  <p className="HomeQueryMidSectionRightLongDescLoader">
                                                        
                                                  </p>
                                                 <p className='HomeQueryMidSectionRightShortDescLoader90'></p>
                                                 <p className='HomeQueryMidSectionRightShortDescLoader80'></p>

                                                  
                                                  <div 
                                                  className="HomeQueryEndSection">
        
                                                        <div className="HomeQueryEndSectionLeft">
                                                              <div className="HomeQueryEndSectionNumberCard">
                                                                    <SwipeRightOutlinedIcon/>
                                                                    Accepted by : <span className='HomeQueryTopSectionNumberLoader'></span>
                                                              </div>
                                                              <div className="HomeQueryEndSectionNumberCard">
                                                                    <QuestionAnswerOutlinedIcon/>
                                                                    Answered by : <span className='HomeQueryTopSectionNumberLoader'></span>
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
  )
}
