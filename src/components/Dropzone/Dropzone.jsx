import React, { useEffect, useState } from 'react'
import './dropzone.css'
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import SavedQuestionItems from '../savedQuestionItems/SavedQuestionItems';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import DropZoneItems from '../DropZoneItems/DropZoneItems';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import axios from 'axios';
export default function Dropzone({activeCard,setOpenLink,folderId,setOpenDropZone,handleQuestionFolderUpdate,setActiveCard}) {
    const [aboutToSave,setAboutToSave] = useState([]);
    console.log("aboutToSave",aboutToSave)

    const handleDropLogic = () => {
        
        setOpenLink((i)=>(i.length>0 && i.filter((item)=>item._id !== activeCard._id)));

        if(activeCard!==""){
            setAboutToSave((i)=>
            {
                
                    if (i.includes(activeCard)) {
                    return i;
                    }
                    return [...i, activeCard];
                }
            );
      }
        
    }

    const handleDrop = (e) => {
        e.preventDefault();
        handleDropLogic();
    }

    useEffect(() => {
         handleDropLogic()
    }, [activeCard]);

    const cancelSave = (data) => {
       
        setAboutToSave((i)=>(i.filter((item)=>item._id !== data._id)));
        if(activeCard._id === data._id){
            setActiveCard("");
        }
        setOpenLink((i)=>{
              if (i.length>0 && i.includes(data)) {
                return i;
                }

                if(i.length===0 || i === false){
                    return [data];
                }
                console.log("here is i",i)

                return [...i, data];
        })
    }

    const cancelAll = () => {
        setAboutToSave([]);

        
        setOpenLink((i)=>{
            if(i===false || i.length===0){
                return [...aboutToSave];
            }   
            return [...i,...aboutToSave]
        });
        setOpenDropZone(false);
        setActiveCard("");
    }

    const handleConfirmSave = async() => {
        try{
              const questionIds = aboutToSave.map(item => item.savedquestionId._id.replaceAll('"', ''));
              await axios.post(`${process.env.REACT_APP_URL}/save/saveMultipleQuestionToFolder/${folderId}`,{questionIds},{withCredentials:true});
              setAboutToSave([]);
              setOpenLink((i)=>(i.filter((item)=>!questionIds.includes(item._id))));
              setOpenDropZone(false);
              handleQuestionFolderUpdate();
        }catch(e){
              console.log(e);
        }       
    }   


  return (
        <div className="dropzoneContainer">
                <div className="dropArea" onDrop={(e)=>handleDrop(e)} onDragOver={(e)=>e.preventDefault()}>
                    <GetAppOutlinedIcon/>
                    Drop here
                </div>
                <div  className="HomeQueryEndSection" style={{marginTop:'10px'}}>
    
                         <div className="saveContainerCreateFolderSave" onClick={()=>handleConfirmSave()}>
                            <TurnedInNotOutlinedIcon/>
                             Confirm save
                         </div>
                        <div className="saveContainerCreateFolderCancel" onClick={()=>cancelAll()}>
                            <TurnedInNotOutlinedIcon/>
                            Back
                         </div>
                </div>
                <div className="savedPostSection">
                    
                    {aboutToSave.length > 0 && aboutToSave?.map((item)=>(

                        <DropZoneItems key={item._id} data={item} cancelSave={cancelSave}/>
                    ))
                    }
                </div>
        </div>
  )
}
