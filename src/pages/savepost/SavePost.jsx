import React, { useEffect, useState, useRef } from 'react'
import "../savepost/savePost.css"
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import { Users } from '../../Dummy';
import ExpertTrackListItems from '../../components/expertTrackListItems/ExpertTrackListItems';
import HomeQueryPostItems from '../../components/HomeQueryPostItems/HomeQueryPostItems';
import axios from 'axios';
import SavedQuestionItems from '../../components/savedQuestionItems/SavedQuestionItems';
import FirstLevelFolder from '../../components/FirstLevelFolder/FirstLevelFolder';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useOutletContext } from 'react-router-dom';
import CreateFolder from '../../components/CreateFolder/CreateFolder';
import Dropzone from '../../components/Dropzone/Dropzone';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import FirstLevelFolderLoader from '../../components/FirstLevelFolderLoader/FirstLevelFolderLoader';
import HomeQueryPostItemsLoader from '../../components/HomequerypostItemsLoader/HomeQueryPostItemsLoader';
import SaveQuestionItemLoader from '../../components/SaveQuestionItemsLoader/SaveQuestionItemLoader';

export default function SavePost() {

  const [folders,setFolders] = useState([]);
  const [activeCard,setActiveCard] = useState("");
  const [loading,setLoading] = useState(false);

  const [drop,setDrop] = useState("");
  const [expandPost,setExpandPost] = useState(false);
  const [expandPostType,setExpandPostType] = useState("");
  
  const [openDropzone,setOpenDropZone] = useState(false);
  const [question,setQuestion] = useState("");
  const [openLink,setOpenLink] = useState("");
  const { setBreadCrumbList,createFolder,setCreateFolder,setFolderId,folderId,prevId,setPrevId } = useOutletContext();
   
   console.log("updated fodler",folders)
   console.log("active card",activeCard);
  
    const arr = Array(50).fill().map((_, i) => i);
   const handleSave = (data) => {
      setActiveCard(data);
      setOpenDropZone(true);
  }

  useEffect(()=>{
      const userDetails = async() => {
            try{
                  setLoading(true);
                  let question;
                  const folder = await axios.get(`${process.env.REACT_APP_URL}/save/getQuestionFolders`,{withCredentials:true})                
                  if(folder.data.length>0){
                         let fid;
                         if(prevId===""){
                              setFolderId(folder.data[0]._id);
                              fid = folder.data[0]._id;
                         }else{
                              setFolderId(prevId);
                              fid = prevId;
                         }
 
                    question = await axios.get(`${process.env.REACT_APP_URL}/save/getSavedQuestionsInFolder/${fid}`,{withCredentials:true});
                    

                    
                    setQuestion(question.data);
                    if(question.data.length===0){
                      setOpenDropZone(true)
                    }
                    
                  }

                  const openLink = await axios.get(`${process.env.REACT_APP_URL}/save/getOpenQuestionsLink`,{withCredentials:true})
                  setFolders(folder.data)
                  
                  setOpenLink(openLink.data);
                  setLoading(false);
            }catch(e){
                console.log(e)
            }
      }

      userDetails();
  },[])

  const handleFolderId = async(id) => {
      const question = await axios.get(`${process.env.REACT_APP_URL}/save/getSavedQuestionsInFolder/${id}`,{withCredentials:true}); 
      setQuestion(question.data);
       if(question.data.length===0){
          setOpenDropZone(true)
        }else{
          setOpenDropZone(false)
        }
      setFolderId(id);
  }



  const handleQuestionFolderUpdate = async() => {
          try{
               const questions = await axios.get(`${process.env.REACT_APP_URL}/save/getSavedQuestionsInFolder/${folderId}`,{withCredentials:true})
               const openLink = await axios.get(`${process.env.REACT_APP_URL}/save/getOpenQuestionsLink`,{withCredentials:true})
               setQuestion(questions.data)
               setOpenLink(openLink.data);
               setActiveCard("");
          }catch(e){

          }    
}

 const handleExpandPost = (type) =>{
      setExpandPost((i)=>!i);
      setExpandPostType(type);
 }


  const refreshFolder = async() =>{
      try{
          const folder = await axios.get(`${process.env.REACT_APP_URL}/save/getQuestionFolders`,{withCredentials:true})   

          setFolders(folder.data)
          console.log("refredsh folder called",folder.data)

           if(folder.data.length>0){
               question = await axios.get(`${process.env.REACT_APP_URL}/save/getSavedQuestionsInFolder/${folder.data[0]._id}`,{withCredentials:true})
               setQuestion(question.data); 

           }
          
      }catch(e){

      }
  }

  

  

  return (
    <div className="saveContainer">
        <div className="saveContainerLeftPanel" >
         
               <div class="HomeRecommendedHeading">
                    <FolderOpenOutlinedIcon/>
                    Folders
               </div>

              
   
            <div className="saveContainerList">
               <ul className='expertTrackContainerLists'>
              {loading == false && folders.length>0 && folders?.map((item)=>(
               <>
                
                
                <FirstLevelFolder key={item._id} data={item} handleFolderId={handleFolderId} setBreadCrumbList={setBreadCrumbList} folderId={folderId} setPrevId={setPrevId}/>

               </>
              ))}
              {
                    loading == true &&
                    arr.map((i)=>
                    (<FirstLevelFolderLoader/>)
                    )
              }
               </ul>
            </div>
        </div>
        <div className="saveRightContainer">
           {
               !createFolder ?
               <>
                    <div className={`savedQuestionPost ${(expandPost && expandPostType=='openLink') && 'hidden'}`} >
                              <div className="SaveHeadingWrapper" onClick={()=>handleExpandPost('saved')}>
                                   <div class="HomeRecommendedHeading2"><FeaturedPlayListOutlinedIcon />
                                   Saved
                                   </div>
                                   <div class="expertTrackOwnerFollow"><OpenInFullOutlinedIcon/></div>
                              </div>
                         <div className="savedPostSection">
                              {
                              
                              openDropzone ?
                              <Dropzone activeCard={activeCard} setActiveCard={setActiveCard} setOpenLink={setOpenLink} folderId={folderId} setOpenDropZone={setOpenDropZone} handleQuestionFolderUpdate={handleQuestionFolderUpdate}/>:
                              (loading == false ? question.length > 0 && question?.map((item)=>(

                                   <SavedQuestionItems key={item._id} data={item} type="saved" setActiveCard={setActiveCard} />
                                   
                              )
                         
                                 )
                                 :
                                 arr.map((i)=>
                                      <SaveQuestionItemLoader/>
                                )
                              
                              )
                              }
                              
                              
                             
                         </div>
                    </div>
                    <div className={`saveOpenLink ${(expandPost && expandPostType=='saved') && 'hidden'}`}>
                        
                        <div className="SaveHeadingWrapper" onClick={()=>handleExpandPost('openLink')}>
                         <div class="HomeRecommendedHeading2"><FeaturedPlayListOutlinedIcon/>Open links</div>
                          <div class="expertTrackOwnerFollow"><OpenInFullOutlinedIcon/></div>
                        </div>
                        
                        
                         <div className="savedPostSection">
                              {loading==true && arr.map((i)=>
                              (<SaveQuestionItemLoader/>)
                              )    
                              }
                              {loading==false && openLink.length > 0 && openLink?.map((item)=>(

                                   <SavedQuestionItems key={item._id} data={item} type="save" setActiveCard={setActiveCard} setOpenDropZone={setOpenDropZone} handleSave={handleSave}/>
                              ))
                              }
                         </div>
                    </div>
               </>
               :

               <CreateFolder id='none' refreshFolder={refreshFolder} setCreateFolder={setCreateFolder}/>
           }
        </div>
    </div>
  )
}
