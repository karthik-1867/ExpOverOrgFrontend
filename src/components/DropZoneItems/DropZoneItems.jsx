import React from 'react'
import CodeEditor from '../CodeEditor/CodeEditor'
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';

export default function DropZoneItems({data,cancelSave}) {
  return (
                     <div className="HomeQueryPost">
                                      <div className="HomeQueryTopSection">
                                            <div className="HomeQueryTopSectionProfileAndImg">
                                                <img src={data?.savedquestionId?.userId.profilePicture} alt="" className='HomeQueryTopSectionImg'/>
                                               <div className="HomeQueryTopSectionProfileDetail">
                                                {data?.savedquestionId?.userId.name}
                                                <span className='HomeQueryTopSectionProfileDesignation'>Software Architect&bull;Posted 5min ago</span>
                                               </div>
                                            </div>

                                            
                                      </div>
                                      <hr className='PostHoriline'/>
                                      <div className="HomeQueryMidSection">
                                            <div className="HomeQueryMidSectionLeft">
                                                <img src={data?.savedquestionId?.QuestionProfileImg} alt="" className='HomeQueryMidSectionLogo'/>
                                            </div>
                                            <div className="HomeQueryMidSectionRight">
                                                  <p className='HomeQueryMidSectionRightShortDesc'>{data.savedquestionId?.QuestionTitle}</p>
                                                  <CodeEditor/>
                                                  <p className="HomeQueryMidSectionRightLongDesc">
                                                        {data?.savedquestionId?.QuestionBody}
                                                  </p>
        
        
                                                  
                                                  <div 
                                                  className="HomeQueryEndSection">
    
                                                       <div className="saveContainerCreateFolderCancel" onClick={()=>cancelSave(data)}>
                                                              <TurnedInNotOutlinedIcon/>
                                                              cancel save
                                                        </div>
                                                  </div>
                                            </div>
                                      </div>
        
                                </div>
  )
}
