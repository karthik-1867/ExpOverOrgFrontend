import React from 'react'
import "../savepost/savePost.css"
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
export default function SavePost() {
  return (
    <div className='saveContainer'>
        <div className="saveContainerTop">
           <div className="saveContainerTopFolderNames">
                Folder Name
           </div>
           <div className="saveContainerTopNoOfFiles">
                Total number of files
           </div>
           <div className="saveContainerTopFloating">
                Total number of floating links
           </div>
        </div>
        <div className="saveContainerBottom">
           <div className="saveContainerBottomFolderNames">
                <FolderRoundedIcon style={{'color':'#F8D775'}}/>
                Question
           </div>
           <div className="saveContainerBottomNoOfFiles">
                12 files
           </div>
           <div className="saveContainerBottomFloating">
                  <LinkRoundedIcon style={{'color':'blue'}}/> 
                  <div className="saveContainerBottomFloatingText">

                    10 open links
                  </div>
           </div>
        </div>
                <div className="saveContainerBottom">
           <div className="saveContainerBottomFolderNames">
                 <FolderRoundedIcon style={{'color':'#F8D775'}}/>
                Answer
           </div>
           <div className="saveContainerBottomNoOfFiles">
                12 files 
           </div>
           <div className="saveContainerBottomFloating">
                               <LinkRoundedIcon style={{'color':'blue'}}/> 
                  <div className="saveContainerBottomFloatingText">

                    10 open links
                  </div>
           </div>
        </div>
                <div className="saveContainerBottom">
           <div className="saveContainerBottomFolderNames">
                 <FolderRoundedIcon style={{'color':'#F8D775'}}/>
                Knowledge
           </div>
           <div className="saveContainerBottomNoOfFiles">
                12 files 
           </div>
           <div className="saveContainerBottomFloating">
                                 <LinkRoundedIcon style={{'color':'blue'}}/> 
                  <div className="saveContainerBottomFloatingText">

                    10 open links
                  </div>
           </div>
        </div>
                <div className="saveContainerBottom">
           <div className="saveContainerBottomFolderNames">
                 <FolderRoundedIcon style={{'color':'#F8D775'}}/>
                Your Quetsion posts
           </div>
           <div className="saveContainerBottomNoOfFiles">
                12 files 
           </div>
           <div className="saveContainerBottomFloating">
                                 <LinkRoundedIcon style={{'color':'blue'}}/> 
                  <div className="saveContainerBottomFloatingText">

                    10 open links
                  </div>
           </div>
        </div>
                <div className="saveContainerBottom">
           <div className="saveContainerBottomFolderNames">
                <FolderRoundedIcon style={{'color':'#F8D775'}}/>
                Your answer posts
           </div>
           <div className="saveContainerBottomNoOfFiles">
                12 files  
           </div>
           <div className="saveContainerBottomFloating">
                                <LinkRoundedIcon style={{'color':'blue'}}/> 
                  <div className="saveContainerBottomFloatingText">

                    10 open links
                  </div>
           </div>
        </div>
    </div>
  )
}
