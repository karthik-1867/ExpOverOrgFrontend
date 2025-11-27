import React from 'react'
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

export default function SavedQuestionItems({data,type,setActiveCard,setOpenDropZone,handleSave}) {




  return (
    
                                    <div className="HomeQueryPost" draggable onDragStart={()=>setActiveCard(data)} onDragEnd={()=>setActiveCard("")}>
                                      <div className="HomeQueryTopSection">
                                            <div className="HomeQueryTopSectionProfileAndImg">
                                                <img src={data.savedquestionId.userId.profilePicture} alt="" className='HomeQueryTopSectionImg'/>
                                               <div className="HomeQueryTopSectionProfileDetail">
                                                {data.savedquestionId.userId.name}
                                                <span className='HomeQueryTopSectionProfileDesignation'>Software Architect&bull;Posted 5min ago</span>
                                               </div>
                                            </div>

                                            
                                      </div>
                                      <hr className='PostHoriline'/>
                                      <div className="HomeQueryMidSection">
                                            <div className="HomeQueryMidSectionLeft">
                                                <img src={data.savedquestionId.QuestionProfileImg} alt="" className='HomeQueryMidSectionLogo'/>
                                            </div>
                                            <div className="HomeQueryMidSectionRight">
                                                  <p className='HomeQueryMidSectionRightShortDesc'>{data.savedquestionId.QuestionTitle}</p>
                                                  {data.savedquestionId.code && <CodeEditor value={data.savedquestionId.code}/>}
                                                  <p className="HomeQueryMidSectionRightLongDesc">
                                                        {data.savedquestionId.QuestionBody}
                                                  </p>
        
        
                                                  
                                                  <div 
                                                  className="HomeQueryEndSection">
    
                                                        {type === 'save' && <div className="saveContainerCreateFolderSave" onClick={()=>handleSave(data)}>
                                                              <TurnedInNotOutlinedIcon/>
                                                              Save question
                                                        </div>}
                                                  </div>
                                            </div>
                                      </div>
        
                                </div>
  )
}
