import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import CommentList from '../CommentList/CommentList';
import CodeEditor from '../CodeEditor/CodeEditor';

export default function AnswerList ({data}){
    console.log("comment data",data)
    return(
            <>
                <div className="HomeAnsPost">
                                <div className="HomeQueryTopSection">
                                    <div className="HomeQueryTopSectionProfileAndImg">
                                    <img src={data.userId.profilePicture} alt="" className='HomeQueryTopSectionImg'/>
                                    <div className="HomeQueryTopSectionProfileDetail">
                                    {data.userId.name}
                                    <span className='HomeQueryTopSectionProfileDesignation'>Software Architect&bull;Posted 5min ago</span>
                                    </div>
                                    </div>
                                    <div className="HomeContriButionAndFollowers">
                                            
                                            Answer #1
                                    </div>
                                        
                                </div>
                                <hr className='PostHoriline'/>
                                <div className="HomeQueryMidSectionAns">
                                        <div className="HomeQueryMidSectionLeft">
                                            <ArrowDropUpOutlinedIcon/>
                                            {data.upvoteCount}
                                            <ArrowDropDownOutlinedIcon/>
                                        </div>
                                        <div className="HomeQueryMidSectionRight">
                                      {data.code && <CodeEditor value={data.code}/>}
                                            <p className="HomeQueryMidSectionRightLongDesc">
                                            <h className='HomeQueryMidSectionRightLongDescHeading'>                                                   
                                                    Answer:
                                            </h>
                                     
                                                    {data.AnswerBody}
                                            </p>


                                            
                                            <div 
                                            className="HomeQueryEndSection">

                                                    <div className="HomeQueryEndSectionLeft">
                                                        
                                                        <div className="HomeQueryEndSectionNumberCard">
                                                                <QuestionAnswerOutlinedIcon/>
                                                                Comment : {data.comments.length}
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
                {data.comments.length > 0 && data.comments.map((Item)=>(
                    <CommentList key={Item._id} data={Item}/>
                ))}
              
            </>
    )
}