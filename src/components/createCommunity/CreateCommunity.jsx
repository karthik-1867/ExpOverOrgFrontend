import React, { useState } from 'react'
import "../createCommunity/createCommunity.css"
import { MessageSharp, PeopleAltOutlined } from '@mui/icons-material'
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import axios from 'axios';
export default function CreateCommunity() {
  const initials = {communityName:"",communityDescription:"",communityProfileImg:"",communityType:"public"}
  const [inputs,setInputs] = useState(initials);
  

  const handleInput = (e) =>{
         setInputs((prev)=>{
           return {...prev, [e.target.name]:e.target.value}
         })
  }

  const handleChange = (event) => {
  
    setInputs((prev)=>{
      return {...prev, communityType:event.target.value}
    }
   )
    console.log('Selected:', event.target.value);
    
  };


  
  const createFolders = async(e) =>{
    e.preventDefault()
    const {communityName,communityDescription,communityProfileImg,communityType} = inputs
   
        try{
              await axios.post(`${process.env.REACT_APP_URL}/community/createCommunity`,{communityName,communityDescription,communityProfileImg,communityType},{withCredentials:true});
               setInputs(initials);  
        }catch(e){
          console.log(JSON.stringify(e.response))

        }
        
  }

  return (


                <div className="LoginContainer">




                <form onSubmit={createFolders} className="LoginForm Selected">
                    <div className="LoginInputs">
                        <label className="LoginLabel">
                            <Diversity2OutlinedIcon/>
                            Community name
                        </label>
                        <input
                            type="text"  
                            value={inputs.communityName}
                            onChange={handleInput} 
                            name="communityName"
                            className="LoginInput" 
                            placeholder='Enter Community name'/>
                    </div>
                    <br/>
                    <div className="LoginInputs">
                        <label className="LoginLabel">
                           <DescriptionOutlinedIcon/>
                           Short Description
                        </label>
                       <input type="text" 
                          value={inputs.communityDescription}
                          onChange={handleInput}
                          name="communityDescription"
                           className="LoginInput" 
                           placeholder='Community short description' />
                    </div>
                    <br/>
                    <div className="LoginInputs">
                        <label className="LoginLabel">
                           <ImageOutlinedIcon/>
                           Upload image
                        </label>
                       <input type="text" 
                            value={inputs.communityProfileImg}
                            onChange={handleInput}
                            name="communityProfileImg"
                            className="LoginInput" 
                            placeholder='Community short description' />
                    </div>
                    <br/>
                    <div className="LoginInputs">
                        <label className='LoginLabel'>
                               <PeopleAltOutlined/>
                               Community type</label>
                      <select name="owner" 
                              value={inputs.communityType} 
                              onChange={handleChange} 
                              class="HomeQueryCategory">
                                  <option value="public">Public</option>
                                  <option value="private">Private</option>
                      </select>
                    </div>
                     <button type='submit' className="saveContainerCreateFolder2">
                      <GroupAddOutlinedIcon/>
                      Submit
                      </button>
                  </form>



                       
                       


  
    </div>
  )
}
