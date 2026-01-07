import React, { useEffect, useState } from 'react'
import FirstLevelFolder from '../../components/FirstLevelFolder/FirstLevelFolder'
import SavedQuestionItems from '../../components/savedQuestionItems/SavedQuestionItems'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import axios from 'axios';
import Dropzone from '../../components/Dropzone/Dropzone';
import CreateFolder from '../../components/CreateFolder/CreateFolder';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import FirstLevelFolderLoader from '../../components/FirstLevelFolderLoader/FirstLevelFolderLoader';
import SaveQuestionItemLoader from '../../components/SaveQuestionItemsLoader/SaveQuestionItemLoader';

export default function SubFolder() {
    const [folders,setFolders] = useState("");
    const [activeCard,setActiveCard] = useState("");
    const [loading,setLoading] = useState(false);

      const [drop,setDrop] = useState("");
      const [openDropzone,setOpenDropZone] = useState(false);
      const [expandPost,setExpandPost] = useState(false);
      const [expandPostType,setExpandPostType] = useState("");
    
    const [question,setQuestion] = useState("");
    const [openLink,setOpenLink] = useState("");
     const { breadCrumbList,setBreadCrumbList,breadCrumbUpdate,createFolder,setCreateFolder,setFolderId,folderId,prevId,setPrevId } = useOutletContext();
     const arr = Array(50).fill().map((_, i) => i);

    const navigate = useNavigate()
 
    const id = useParams();
    console.log("active card",activeCard);
  useEffect(()=>{
      const userDetails = async() => {
            try{

                  setQuestion([])
                  setOpenLink([])
                  setLoading(true);
                  let question;
                  const folder = await axios.get(`${process.env.REACT_APP_URL}/save/getFolderAttachedId/${id.id}`,{withCredentials:true})                
                  console.log("folder data",folder.data)
                  if(folder.data.length>0){

                         let fid;
                         console.log("previd in subfolder",prevId)
                         if(prevId===""){
                              setFolderId(folder.data[0]._id);
                              fid = folder.data[0]._id;
                         }else{
                              setFolderId(prevId);
                              fid = prevId;
                         }

                    question = await axios.get(`${process.env.REACT_APP_URL}/save/getSavedQuestionsInFolder/${fid}`,{withCredentials:true})
                    setQuestion(question.data);


                    if(question.data.length===0){
                      setOpenDropZone(true)
                    }

                    
                  }else{

                    setQuestion([]);

                  }

                  const openLink = await axios.get(`${process.env.REACT_APP_URL}/save/getOpenQuestionsLink/${id.id}`,{withCredentials:true})
                  setFolders(folder.data)
                  
                  setOpenLink(openLink.data);
                  setLoading(false);

            }catch(e){
                console.log(e)
            }
      }

      userDetails();
  },[id])


    const handleFolderId = async(id) => {
      const question = await axios.get(`${process.env.REACT_APP_URL}/save/getSavedQuestionsInFolder/${id}`,{withCredentials:true})
      setQuestion(question.data);
      if(question.data.length===0){
          setOpenDropZone(true)
        }else{
          setOpenDropZone(false)
        }

      setFolderId(id);
    }

  const handleSave = (data) => {
      setActiveCard(data);
      setOpenDropZone(true);
  }

    const handleBack = () => {
        
        breadCrumbUpdate(breadCrumbList[breadCrumbList.length-1],'back')
        navigate(-1)
    }

      const handleQuestionFolderUpdate = async() => {
          try{
               const questions = await axios.get(`${process.env.REACT_APP_URL}/save/getSavedQuestionsInFolder/${folderId}`,{withCredentials:true})
               const openLink = await axios.get(`${process.env.REACT_APP_URL}/save/getOpenQuestionsLink/${id.id}`,{withCredentials:true})
               setQuestion(questions.data)
               setOpenLink(openLink.data);
               setActiveCard("");
              
          }catch(e){

          }    
    }

      const refreshFolder = async() =>{
      try{
          const folder = await axios.get(`${process.env.REACT_APP_URL}/save/getFolderAttachedId/${id.id}`,{withCredentials:true})   

          setFolders(folder.data)
          console.log("refredsh folder called",folder.data)

           if(folder.data.length>0){
               question = await axios.get(`${process.env.REACT_APP_URL}/save/getSavedQuestionsInFolder/${folder.data[0]._id}`,{withCredentials:true})
               setQuestion(question.data); 

           }
           const openLink = await axios.get(`${process.env.REACT_APP_URL}/save/getOpenQuestionsLink/${id.id}`,{withCredentials:true})
           setOpenLink(openLink.data);
      }catch(e){

      }
  }

   const handleExpandPost = (type) =>{
      setExpandPost((i)=>!i);
      setExpandPostType(type);
 }


    return (
       <div className="saveContainer">
           <div className="saveContainerLeftPanel">
              
               <div className="SaveHeadingWrapper">
                    <div class="HomeRecommendedHeading2">
                      <FeaturedPlayListOutlinedIcon/>Recommended
                    </div>
                    <div className="expertTrackOwnerFollow" onClick={handleBack}>
                      <KeyboardBackspaceOutlinedIcon/>
                    </div>
               </div>



               <div className="saveContainerList">
                  <ul className='expertTrackContainerLists'>
                 {loading === false && folders.length>0 && folders?.map((item)=>(
                   <FirstLevelFolder key={item.id} data={item} handleFolderId={handleFolderId} setBreadCrumbList={setBreadCrumbList} folderId={folderId} setPrevId={setPrevId}/>
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
                                   Recommended
                                   </div>
                                   <div class="expertTrackOwnerFollow"><OpenInFullOutlinedIcon/></div>
                              </div>
                         <div className="savedPostSection">
                              {
                              
                              openDropzone ?
                              <Dropzone activeCard={activeCard} setOpenLink={setOpenLink} folderId={folderId} setOpenDropZone={setOpenDropZone} handleQuestionFolderUpdate={handleQuestionFolderUpdate} setActiveCard={setActiveCard}/>:
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
                         <div class="HomeRecommendedHeading2"><FeaturedPlayListOutlinedIcon/>Recommended</div>
                          <div class="expertTrackOwnerFollow"><OpenInFullOutlinedIcon/></div>
                        </div>
                  <div className="savedPostSection">
                       
                       {loading === false && openLink.length > 0 && openLink?.map((item)=>(
   
                            <SavedQuestionItems key={item._id} data={item} type="save" setActiveCard={setActiveCard} handleSave={handleSave}/>
                       ))
                       }
                      {loading==true && arr.map((i)=>
                      (<SaveQuestionItemLoader/>)
                      )    
                      }
                  </div>
              </div>
              </>:
              <CreateFolder id={id.id} refreshFolder={refreshFolder} setCreateFolder={setCreateFolder}/>
  }
           </div>
       </div>
  )
}
