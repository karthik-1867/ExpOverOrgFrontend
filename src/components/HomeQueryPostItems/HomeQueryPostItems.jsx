import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import SwipeRightOutlinedIcon from '@mui/icons-material/SwipeRightOutlined';

import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';

export default function HomeQueryPostItems({data}){
    return(
                                <div className="HomeQueryPost">
                                      <div className="HomeQueryTopSection">
                                            <div className="HomeQueryTopSectionProfileAndImg">
                                                <img src={data.profile} alt="" className='HomeQueryTopSectionImg'/>
                                               <div className="HomeQueryTopSectionProfileDetail">
                                                {data.profileName}
                                                <span className='HomeQueryTopSectionProfileDesignation'>Software Architect&bull;Posted 5min ago</span>
                                               </div>
                                            </div>
                                            <div className="HomeContriButionAndFollowers">
        
                                                  <div className="HomeUrFollower">
                                                        <GroupOutlinedIcon/>
                                                        Follower : {data.Follower}
                                                  </div>
                                                  <div className="HomeUrContribution">
                                                        <EmojiObjectsOutlinedIcon/>
                                                        Solution contributed : {data.SolutionContributed}
                                                  </div>
                                                  <div className="HomeUrFriend">
                                                        <ConnectWithoutContactOutlinedIcon/>
                                                        Friend : {data.Friend}
                                                  </div>
                                      </div>
                                            
                                      </div>
                                      <hr className='PostHoriline'/>
                                      <div className="HomeQueryMidSection">
                                            <div className="HomeQueryMidSectionLeft">
                                                <img src={data.QuestionProfileImg} alt="" className='HomeQueryMidSectionLogo'/>
                                            </div>
                                            <div className="HomeQueryMidSectionRight">
                                                  <p className='HomeQueryMidSectionRightShortDesc'>{data.Question}</p>
                                                  <p className="HomeQueryMidSectionRightLongDesc">
                                                        {data.QuestionFullDesc}
                                                  </p>
        
        
                                                  
                                                  <div 
                                                  className="HomeQueryEndSection">
        
                                                        <div className="HomeQueryEndSectionLeft">
                                                              <div className="HomeQueryEndSectionNumberCard">
                                                                    <SwipeRightOutlinedIcon/>
                                                                    Accepted by : {data.Accepted}
                                                              </div>
                                                              <div className="HomeQueryEndSectionNumberCard">
                                                                    <QuestionAnswerOutlinedIcon/>
                                                                    Answered by : {data.AnsweredBy}
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