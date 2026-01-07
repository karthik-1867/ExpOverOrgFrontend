import React, { useEffect, useRef, useState } from 'react'
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import CodeEditor from '../CodeEditor/CodeEditor';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import './knowledgeList.css'

export default function KnowledgeList({data}) {
 console.log("knowledge data",data)

  const [isExpanded, setIsExpanded] = useState(true);
  const [lines,setLines] = useState('');
   const ref = useRef();
   console.log("lines",lines)
  let maxChars = 200;
  const toggle = () => {
    setIsExpanded(prev => !prev);
  }

  useEffect(() => {
    const el = ref.current;
    console.log("elsss",el)
    if (!el) return;
    const style = getComputedStyle(el);
    const lineHeight = parseFloat(style.lineHeight);
    const total = el.scrollHeight;
    console.log("executing lines",total , lineHeight,style.lineHeight)
    setLines(Math.round(total / (1.2*16)));
  },[data.content]);

  

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
                                                 
                                                  <p ref={ref} className={`HomeQueryMidSectionRightLongDesc ${isExpanded ? '' : 'clamp-lines' }`} style={{ WebkitLineClamp: !isExpanded ? '3' : 'none' }}>
                                                       <h className='HomeQueryMidSectionRightLongDescHeading' >
                                                            <ImportContactsOutlinedIcon/>
                                                            Knowledge Description:</h>
                                                       
                                                      
                                                       {data.content}
                                                     
                                                     
         
                                                  </p>
                                                   {lines >3  &&<button onClick={toggle} style={{fontWeight:'500px',padding:'5px',borderRadius:'10px',background:'linear-gradient(to bottom, orange, #af5f14)',color:'white',marginBottom:'10px',border:'2px solid orange'}}>
                                                            {isExpanded ? "Show less" : "Show more"}
                                                   </button>}
                                                  { data?.code && data.code !='' && <CodeEditor value={data.code}/>}
        
        
                                                  
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
