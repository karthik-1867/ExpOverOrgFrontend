import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
export default function CommentList({data}){
     console.log("dataid",data)
     return (
                            <div className="HomeAnsPostComment">
                                    <div className="HomeQueryTopSection">
                                          <div className="HomeQueryTopSectionProfileAndImg">
                                          <img src={data.userId.profilePicture} alt="" className='HomeQueryTopSectionImg'/>
                                          <div className="HomeQueryTopSectionProfileDetail">
                                          {data.userId.name}
                                          <span className='HomeQueryTopSectionProfileDesignation'>Software Architect&bull;Posted 5min ago</span>
                                          </div>
                                          </div>
                                          <div className="HomeContriButionAndFollowers">
                                                 
                                                 Comment #1
                                          </div>
                                          
                                    </div>
                                    <hr className='PostHoriline'/>
                                    <div className="HomeQueryMidSectionAnsComment">
                                          <div className="HomeQueryCommentBar">
                                                <span className='HomeQueryCommentBarText'>comment</span>
                                          </div>
                                          <div className="HomeQueryMidSectionLeft">
                                             <ArrowDropUpOutlinedIcon/>
                                              {data.upvotes}
                                             <ArrowDropDownOutlinedIcon/>
                                          </div>
                                          <div className="HomeQueryMidSectionRight">
                                                
                                                <p className="HomeQueryMidSectionRightLongDesc">
                                                      <h className='HomeQueryMidSectionRightLongDescHeading'>                                                   
                                                         Comment:
                                                      </h>
                                                      {data.AnswerBody}
                                                </p>


                                                
                                                <div 
                                                className="HomeQueryEndSection">

                                                      <div className="HomeQueryEndSectionLeft">
                                                           
                                                            <div className="HomeQueryEndSectionNumberCard">
                                                                  <QuestionAnswerOutlinedIcon/>
                                                                  Comment : 1
                                                            </div>
                                                      </div>
                                                      <div className="HomeQueryEndSectionRight">
                                                            <TurnedInNotOutlinedIcon/>
                                                            Save Answer
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                              </div> 
     )
 }