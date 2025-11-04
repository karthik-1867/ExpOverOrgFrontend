import React from 'react'
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';

export default function KnowledgeList({data}) {
  return (
                                    <div className="HomeQueryPost">
                                      <div className="HomeQueryTopSection">
                                            <div className="HomeQueryTopSectionProfileAndImg">
                                                <img src={data.authorId.profilePicture} alt="" className='HomeQueryTopSectionImg'/>
                                               <div className="HomeQueryTopSectionProfileDetail">
                                                 {data.authorId.name}
                                                <span className='HomeQueryTopSectionProfileDesignation'>Software Architect&bull;Posted 5min ago</span>
                                               </div>
                                            </div>

                                            
                                      </div>
                                      <hr className='PostHoriline'/>
                                      <div className="HomeQueryMidSection">

                                            <div className="HomeQueryMidSectionRight" style={{padding:'0 30px'}}>
                                                 
                                                  <p className="HomeQueryMidSectionRightLongDesc">
                                                       {data.content}
                                                  </p>
        
        
                                                  
                                                  <div 
                                                  className="HomeQueryEndSection">
        

                                                        <div className="HomeQueryEndSectionRight">
                                                              <TurnedInNotOutlinedIcon/>
                                                              Save Knowledge
                                                        </div>
                                                  </div>
                                            </div>
                                      </div>
        
                                </div>
  )
}
