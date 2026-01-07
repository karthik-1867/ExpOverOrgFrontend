import React from 'react'
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';

export default function KnowledgeLoader() {
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
