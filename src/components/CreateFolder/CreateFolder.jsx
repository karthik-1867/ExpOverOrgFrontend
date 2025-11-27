import axios from 'axios';
import React, { useState } from 'react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
export default function CreateFolder({id,refreshFolder,setCreateFolder}) {

    const [inputs,setInputs] = useState({folderName:"",folderDescription:"",folderImg:""});
      const [errorMessage,setErrorMessage] = useState("");
    
    
      console.log(inputs)
    
      const handleInput = (e) =>{
         setInputs((prev)=>{
           return {...prev, [e.target.name]:e.target.value}
         })
      }
    
      const createFolders = async(e) => {
        e.preventDefault()
    
        const {folderName,folderDescription,folderImg} = inputs;
        console.log(folderName,folderDescription,folderImg);
        setErrorMessage("")
        if(!folderName){
          return setErrorMessage("please enter folderName");
        }
    
        if(!folderDescription){
          return setErrorMessage("please enter folderDescription")
        }
    
        try{
         
          if(id==='none'){
              const user = await axios.post(`${process.env.REACT_APP_URL}/save/createFolder`,{folderName,folderDescription,folderImg},{withCredentials:true})
              console.log(user);
              refreshFolder()
              setCreateFolder(false)
          }else{
              const user = await axios.post(`${process.env.REACT_APP_URL}/save/createFolder/${id}`,{folderName,folderDescription,folderImg},{withCredentials:true})
              console.log(user);
              refreshFolder()
              setCreateFolder(false)
          }
    
        }catch(e){
          console.log(JSON.stringify(e.response))
          return setErrorMessage(e.response);
        }
    
    
    
    
      }

  return (
            <div className="LoginContainer">


                <form onSubmit={createFolders} className="LoginForm">
                    <div className="LoginInputs">
                        <label className="LoginLabel">
                            <FolderOpenOutlinedIcon/>
                            Folder
                        </label>
                        <input
                            className="LoginInput"
                            type="text"
                            name="folderName"
                            value={inputs.folderName}
                            onChange={handleInput}
                            placeholder="Folder name"
                            />
                    </div>
                    <br/>
                    <div className="LoginInputs">       
                        <label className="LoginLabel">
                            <DescriptionOutlinedIcon/>
                            Description:
                        </label>
                        <input
                        className="LoginInput"
                        placeholder="Folder description"
                        type="text"
                        name="folderDescription"
                        value={inputs.folderDescription}
                        onChange={handleInput}
                        />
                    </div>
                    <br/>
                      <div className="LoginInputs">
                        <label className="LoginLabel">
                            <ImageOutlinedIcon/>
                            Image
                        </label>
                        <input
                            className="LoginInput"
                            type="text"
                            name="folderImg"
                            value={inputs.folderImg}
                            onChange={handleInput}
                            placeholder="Upload image"
                            />
                    </div>
                    <br/>
                    <button type="submit" className="saveContainerCreateFolder2">  
                        <AddCircleOutlineOutlinedIcon/>
                         create folder
                    </button>
                 </form>
                 

                    
           </div>
  )
}
