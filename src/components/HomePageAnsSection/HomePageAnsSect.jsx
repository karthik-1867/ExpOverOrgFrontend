import React, { useEffect, useState } from 'react'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import SwipeRightOutlinedIcon from '@mui/icons-material/SwipeRightOutlined';

import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AnswerList from '../AnswerList/AnswerList';
import HomeQueryPostItemsLoader from '../HomequerypostItemsLoader/HomeQueryPostItemsLoader';
import Nodata from '../Nodata/Nodata';
export default function HomePageAnsSect() {
      const [ans,setAns] = useState("");
      const [question,setQuestion] = useState("")
      const [loading,setLoading] = useState(false)
      const id = useParams();
       const arr = Array(10).fill().map((_, i) => i);
      console.log("ans",ans)
      console.log("question",question)
      useEffect(()=>{
            const answer = async() => {
                  try{
                       setLoading(true)
                       const ans = await axios.get(`${process.env.REACT_APP_URL}/answer/getAnswersByQuestionId/${id.id}`,{withCredentials:true})
                       setAns(ans.data)

                       

                       setQuestion(ans?.data[0]?.questionId)
                       setLoading(false)
                  }catch(e){
                       console.log(e)
                  }
            }

            answer();
      },[id])
 
 
      return (
                     <div className="HomeQueryAndAns">
                       
                       { !loading && ans.length>0 && <div className="HomeQueryAndAnsPost">
                              <div className="HomeQueryTopSection">
                                    <div className="HomeQueryTopSectionProfileAndImg">
                                    <img src={question.QuestionProfileImg} alt="" className='HomeQueryTopSectionImg'/>
                                    <div className="HomeQueryTopSectionProfileDetail">
                                     {question.profileName}
                                    <span className='HomeQueryTopSectionProfileDesignation'>Software Architect&bull;Posted 5min ago</span>
                                    </div>
                                    </div>
                                    <div className="HomeContriButionAndFollowers">

                                          <div className="HomeUrFollower">
                                                <GroupOutlinedIcon/>
                                                Follower : {question.followers}
                                          </div>
                                          <div className="HomeUrContribution">
                                                <EmojiObjectsOutlinedIcon/>
                                                Solution contributed : {question.solutionsContributed}
                                          </div>
                                          <div className="HomeUrFriend">
                                                <ConnectWithoutContactOutlinedIcon/>
                                                Friend : {question.friends}
                                          </div>
                              </div>
                                    
                              </div>
                              <hr className='PostHoriline'/>
                              <div className="HomeQueryMidSection">
                                    <div className="HomeQueryMidSectionLeft">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" className='HomeQueryMidSectionLogo'/>
                                    </div>
                                    <div className="HomeQueryMidSectionRight">
                                          <p className='HomeQueryMidSectionRightShortDesc'>Q {question.QuestionTitle}</p>
                                          <p className="HomeQueryMidSectionRightLongDesc">
                                           <h className='HomeQueryMidSectionRightLongDescHeading'>                                                   
                                                    Question Description:
                                            </h>
                                                {question.QuestionBody}
                                          </p>


                                          
                                          <div 
                                          className="HomeQueryEndSection">

                                                <div className="HomeQueryEndSectionLeft">
                                                      <div className="HomeQueryEndSectionNumberCard">
                                                            <SwipeRightOutlinedIcon/>
                                                            Accepted by : {question.acceptedBy}
                                                      </div>
                                                      <div className="HomeQueryEndSectionNumberCard">
                                                            <QuestionAnswerOutlinedIcon/>
                                                            Answered by : {question.answers}
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
                       }
                        <div className="HomeQueryAnsSection">
                              { !loading && ans.length > 0 && ans?.map((item)=>(
                                    <AnswerList key={item._id} data={item}/>
                              ))}
                             { !loading && ans.length == 0 &&
                                    <Nodata type='left' message='No update'/>
                              }

                              {       
                                    loading === true && arr.map((i)=>
                                    (<HomeQueryPostItemsLoader/>)
                                    )
                             }
                              {/* <div className="HomeAnsPost">
                                    <div className="HomeQueryTopSection">
                                          <div className="HomeQueryTopSectionProfileAndImg">
                                          <img src="https://www.tracyvets.com/files/Parakeets.jpeg" alt="" className='HomeQueryTopSectionImg'/>
                                          <div className="HomeQueryTopSectionProfileDetail">
                                          Heroko
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
                                              300
                                             <ArrowDropDownOutlinedIcon/>
                                          </div>
                                          <div className="HomeQueryMidSectionRight">
                                                
                                                <p className="HomeQueryMidSectionRightLongDesc">
                                                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis corporis blanditiis aliquam quia quae, earum doloribus quidem autem ipsa, nesciunt, quas distinctio! Facere ex beatae asperiores 
                                                      
                                                      ipsam cumque, accusamus illum.
                                                      Ex eligendi dolores illum veritatis fuga nihil qui. Eligendi, 
                                                      
                                                      
                                                      eveniet iste! Unde neque quibusdam maiores, tempora quisquam nulla dolore facere commodi molestiae provident ipsam. Hic deleniti at iste aperiam asperiores.
                                                      Quia voluptatem officiis dolorem ipsam blanditiis, porro voluptatibus, ut veritatis ea eveniet provident voluptatum animi repudiandae fuga labore eaque reprehenderit aliquam! Ipsum corrupti suscipit sequi? Pariatur alias ut perferendis dolor.
                                                      Recusandae beatae doloremque, aspernatur dolore accusantium quia enim quas rerum ipsa dolores fugiat eveniet dolor voluptatem, sequi vero? Corporis enim ad necessitatibus esse tempora illo voluptate asperiores harum in officia.
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
                              <div className="HomeAnsPostComment">
                                    <div className="HomeQueryTopSection">
                                          <div className="HomeQueryTopSectionProfileAndImg">
                                          <img src="https://www.tracyvets.com/files/Parakeets.jpeg" alt="" className='HomeQueryTopSectionImg'/>
                                          <div className="HomeQueryTopSectionProfileDetail">
                                          Heroko
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
                                              -30
                                             <ArrowDropDownOutlinedIcon/>
                                          </div>
                                          <div className="HomeQueryMidSectionRight">
                                                
                                                <p className="HomeQueryMidSectionRightLongDesc">
                                                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis corporis blanditiis aliquam quia quae, earum doloribus quidem autem ipsa, nesciunt, quas distinctio! Facere ex beatae asperiores 
                                                      
                                                      ipsam cumque, accusamus illum.
                                                      Ex eligendi dolores illum veritatis fuga nihil qui. Eligendi, 
                                                      
                                                      
                                                      eveniet iste! Unde neque quibusdam maiores, tempora quisquam nulla dolore facere commodi molestiae provident ipsam. Hic deleniti at iste aperiam asperiores.
                                                      Quia voluptatem officiis dolorem ipsam blanditiis, porro voluptatibus, ut veritatis ea eveniet provident voluptatum animi repudiandae fuga labore eaque reprehenderit aliquam! Ipsum corrupti suscipit sequi? Pariatur alias ut perferendis dolor.
                                                      Recusandae beatae doloremque, aspernatur dolore accusantium quia enim quas rerum ipsa dolores fugiat eveniet dolor voluptatem, sequi vero? Corporis enim ad necessitatibus esse tempora illo voluptate asperiores harum in officia.
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
                              <div className="HomeAnsPost">
                                    <div className="HomeQueryTopSection">
                                          <div className="HomeQueryTopSectionProfileAndImg">
                                          <img src="https://www.tracyvets.com/files/Parakeets.jpeg" alt="" className='HomeQueryTopSectionImg'/>
                                          <div className="HomeQueryTopSectionProfileDetail">
                                          Heroko
                                          <span className='HomeQueryTopSectionProfileDesignation'>Software Architect&bull;Posted 5min ago</span>
                                          </div>
                                          </div>
                                          <div className="HomeContriButionAndFollowers">
                                                 
                                                 Answer #2
                                          </div>
                                          
                                    </div>
                                    <hr className='PostHoriline'/>
                                    <div className="HomeQueryMidSectionAns negative">
                                          <div className="HomeQueryMidSectionLeft">
                                             <ArrowDropUpOutlinedIcon/>
                                              -30
                                             <ArrowDropDownOutlinedIcon/>
                                          </div>
                                          <div className="HomeQueryMidSectionRight">
                                                
                                                <p className="HomeQueryMidSectionRightLongDesc">
                                                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis corporis blanditiis aliquam quia quae, earum doloribus quidem autem ipsa, nesciunt, quas distinctio! Facere ex beatae asperiores 
                                                      
                                                      ipsam cumque, accusamus illum.
                                                      Ex eligendi dolores illum veritatis fuga nihil qui. Eligendi, 
                                                      
                                                      
                                                      eveniet iste! Unde neque quibusdam maiores, tempora quisquam nulla dolore facere commodi molestiae provident ipsam. Hic deleniti at iste aperiam asperiores.
                                                      Quia voluptatem officiis dolorem ipsam blanditiis, porro voluptatibus, ut veritatis ea eveniet provident voluptatum animi repudiandae fuga labore eaque reprehenderit aliquam! Ipsum corrupti suscipit sequi? Pariatur alias ut perferendis dolor.
                                                      Recusandae beatae doloremque, aspernatur dolore accusantium quia enim quas rerum ipsa dolores fugiat eveniet dolor voluptatem, sequi vero? Corporis enim ad necessitatibus esse tempora illo voluptate asperiores harum in officia.
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
                               <div className="HomeAnsPostComment">
                                    <div className="HomeQueryTopSection">
                                          <div className="HomeQueryTopSectionProfileAndImg">
                                          <img src="https://www.tracyvets.com/files/Parakeets.jpeg" alt="" className='HomeQueryTopSectionImg'/>
                                          <div className="HomeQueryTopSectionProfileDetail">
                                          Heroko
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
                                              -30
                                             <ArrowDropDownOutlinedIcon/>
                                          </div>
                                          <div className="HomeQueryMidSectionRight">
                                                
                                                <p className="HomeQueryMidSectionRightLongDesc">
                                                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis corporis blanditiis aliquam quia quae, earum doloribus quidem autem ipsa, nesciunt, quas distinctio! Facere ex beatae asperiores 
                                                      
                                                      ipsam cumque, accusamus illum.
                                                      Ex eligendi dolores illum veritatis fuga nihil qui. Eligendi, 
                                                      
                                                      
                                                      eveniet iste! Unde neque quibusdam maiores, tempora quisquam nulla dolore facere commodi molestiae provident ipsam. Hic deleniti at iste aperiam asperiores.
                                                      Quia voluptatem officiis dolorem ipsam blanditiis, porro voluptatibus, ut veritatis ea eveniet provident voluptatum animi repudiandae fuga labore eaque reprehenderit aliquam! Ipsum corrupti suscipit sequi? Pariatur alias ut perferendis dolor.
                                                      Recusandae beatae doloremque, aspernatur dolore accusantium quia enim quas rerum ipsa dolores fugiat eveniet dolor voluptatem, sequi vero? Corporis enim ad necessitatibus esse tempora illo voluptate asperiores harum in officia.

                                                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad facere maxime repudiandae voluptates quia explicabo suscipit excepturi iste qui. Quasi quae ipsum aperiam expedita, error nemo sapiente obcaecati? Nesciunt, ducimus?
                                                      Dolorem nemo ipsam, at, aliquid nostrum, earum alias omnis a nesciunt praesentium explicabo? Aperiam officiis pariatur iusto libero at necessitatibus, ex neque expedita itaque nostrum accusamus nihil, sapiente fugit laboriosam!
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
                              <div className="HomeAnsPostComment">
                                    <div className="HomeQueryTopSection">
                                          <div className="HomeQueryTopSectionProfileAndImg">
                                          <img src="https://www.tracyvets.com/files/Parakeets.jpeg" alt="" className='HomeQueryTopSectionImg'/>
                                          <div className="HomeQueryTopSectionProfileDetail">
                                          Heroko
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
                                              -30
                                             <ArrowDropDownOutlinedIcon/>
                                          </div>
                                          <div className="HomeQueryMidSectionRight">
                                                
                                                <p className="HomeQueryMidSectionRightLongDesc">
                                                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis corporis blanditiis aliquam quia quae, earum doloribus quidem autem ipsa, nesciunt, quas distinctio! Facere ex beatae asperiores 
                                                      
                                                      ipsam cumque, accusamus illum.
                                                      Ex eligendi dolores illum veritatis fuga nihil qui. Eligendi, 
                                                      
                                                      
                                                      eveniet iste! Unde neque quibusdam maiores, tempora quisquam nulla dolore facere commodi molestiae provident ipsam. Hic deleniti at iste aperiam asperiores.
                                                      Quia voluptatem officiis dolorem ipsam blanditiis, porro voluptatibus, ut veritatis ea eveniet provident voluptatum animi repudiandae fuga labore eaque reprehenderit aliquam! Ipsum corrupti suscipit sequi? Pariatur alias ut perferendis dolor.
                                                      Recusandae beatae doloremque, aspernatur dolore accusantium quia enim quas rerum ipsa dolores fugiat eveniet dolor voluptatem, sequi vero? Corporis enim ad necessitatibus esse tempora illo voluptate asperiores harum in officia.

                                                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad facere maxime repudiandae voluptates quia explicabo suscipit excepturi iste qui. Quasi quae ipsum aperiam expedita, error nemo sapiente obcaecati? Nesciunt, ducimus?
                                                      Dolorem nemo ipsam, at, aliquid nostrum, earum alias omnis a nesciunt praesentium explicabo? Aperiam officiis pariatur iusto libero at necessitatibus, ex neque expedita itaque nostrum accusamus nihil, sapiente fugit laboriosam!
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

                              </div>  */}
                        </div>
            </div>
  )
}
