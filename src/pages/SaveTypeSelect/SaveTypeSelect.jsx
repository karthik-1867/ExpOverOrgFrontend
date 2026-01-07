import React from 'react'
import "../SaveTypeSelect/saveTypeSelect.css"
import { useNavigate } from 'react-router-dom'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';

export default function SaveTypeSelect() {
  
  const navigate = useNavigate()

  const handleHello = (e) => {
     e.preventDefault()

     navigate('/saveSection/save')

  }
  return (
     <div className="SaveTypeSelectContainer">
        <div className="SaveTypeRight">
            <div className="SaveTypeQuestionSection">
                <div className="IntroDetailsBannerSaveType">
                            <img src="https://res.cloudinary.com/dnitpjr1v/image/upload/v1767271506/generated-image-latest_dl78ay.png" alt="" className="SaveTypeImg" />
                        
                            <div className="overlaySaveType"></div>
                            <div className="text-content">
            
                            </div>
                </div>
                <div className="SaveTypeBoxContainer">
                    <span class="DeatailIcon redDetail">
                        <HelpOutlineOutlinedIcon/>
                    </span>
                    <div className="TextWrapper">
                    <span className='BigDetail'>Open links</span>
                    <span className='Detail'>70 Questions</span>
                    </div>
                </div>
                <div className="SaveTypeBoxContainer">
                    <span class="DeatailIcon redDetail">
                        <FolderOpenOutlinedIcon/>
                    </span>
                    <div className="TextWrapper">
                    <span className='BigDetail'>Folders</span>
                    <span className='Detail'>10 folders</span>
                    </div>
                </div>
            <div className="SaveTypeBoxContainer">
                    <span class="DeatailIcon redDetail">
                        <FolderCopyOutlinedIcon/>
                    </span>
                    <div className="TextWrapper">
                    <span className='BigDetail'>Sub-folders</span>
                    <span className='Detail'>10 First level sub folders</span>
                    </div>
                </div>
                <button className='SaveTypeQuestionSectionButton redDetailGradient' onClick={handleHello}>Question section</button>

            </div>
        </div>
        <div className="SaveTypeRight">         
            <div className="SaveTypeQuestionSection">
                <div className="IntroDetailsBannerSaveType">

                <img src="https://res.cloudinary.com/dnitpjr1v/image/upload/v1767270304/generated-image_ucbmjc.png" alt="" className="SaveTypeImg" />   
                    <div className="overlaySaveType"></div>
                    <div className="text-content">
                                
                    </div> 
                </div>
                            <div className="SaveTypeBoxContainer">
                    <span class="DeatailIcon lightGreenDetail">
                        <HelpOutlineOutlinedIcon/>
                    </span>
                    <div className="TextWrapper">
                    <span className='BigDetail'>Open links</span>
                    <span className='Detail'>70 Questions</span>
                    </div>
                </div>
                <div className="SaveTypeBoxContainer">
                    <span class="DeatailIcon lightGreenDetail">
                        <FolderOpenOutlinedIcon/>
                    </span>
                    <div className="TextWrapper">
                    <span className='BigDetail'>Folders</span>
                    <span className='Detail'>10 folders</span>
                    </div>
                </div>
            <div className="SaveTypeBoxContainer">
                    <span class="DeatailIcon lightGreenDetail">
                        <FolderCopyOutlinedIcon/>
                    </span>
                    <div className="TextWrapper">
                    <span className='BigDetail'>Sub-folders</span>
                    <span className='Detail'>10 First level sub folders</span>
                    </div>
                </div>
                <button className='SaveTypeQuestionSectionButton lightGreenButtonGradient'>Answer section</button>
            </div>
         </div>
         <div className="SaveTypeRight"> 
            <div className="SaveTypeQuestionSection">
                <div className="IntroDetailsBannerSaveType">
                <img src="https://res.cloudinary.com/dnitpjr1v/image/upload/v1767270645/generated-image_2_u1evex.png" alt="" className="SaveTypeImg" />  
                                <div className="overlaySaveType"></div>
                    <div className="text-content">
                                
                    </div> 
                </div> 
                <div className="SaveTypeBoxContainer">
                    <span class="DeatailIcon orangeDetail">
                        <HelpOutlineOutlinedIcon/>
                    </span>
                    <div className="TextWrapper">
                    <span className='BigDetail'>Open links</span>
                    <span className='Detail'>70 Questions</span>
                    </div>
                </div>
                <div className="SaveTypeBoxContainer">
                    <span class="DeatailIcon orangeDetail">
                        <FolderOpenOutlinedIcon/>
                    </span>
                    <div className="TextWrapper">
                    <span className='BigDetail'>Folders</span>
                    <span className='Detail'>10 folders</span>
                    </div>
                </div>
            <div className="SaveTypeBoxContainer">
                    <span class="DeatailIcon orangeDetail">
                        <FolderCopyOutlinedIcon/>
                    </span>
                    <div className="TextWrapper">
                    <span className='BigDetail'>Sub-folders</span>
                    <span className='Detail'>10 First level sub folders</span>
                    </div>
                </div>
                <button className='SaveTypeQuestionSectionButton orangeButton'>Knowledge section</button>  
            </div>
        </div>
     </div>


  )
}
