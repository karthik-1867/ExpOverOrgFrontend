import React from 'react'
import "../createCommunity/createCommunity.css"
import { MessageSharp, PeopleAltOutlined } from '@mui/icons-material'
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
export default function CreateCommunity() {


  const createFolders = () =>{

  }

  return (


                <div className="LoginContainer">




                <form onSubmit={createFolders} className="LoginForm">
                    <div className="LoginInputs">
                        <label className="LoginLabel">
                            <Diversity2OutlinedIcon/>
                            Community name
                        </label>
                        <input
                            type="text" className="LoginInput" placeholder='Enter Community name'/>
                    </div>
                    <br/>
                    <div className="LoginInputs">
                        <label className="LoginLabel">
                           <DescriptionOutlinedIcon/>
                           Short Description
                        </label>
                       <input type="text" className="LoginInput" placeholder='Community short description' />
                    </div>
                    <br/>
                    <div className="LoginInputs">
                        <label className='LoginLabel'>
                               <PeopleAltOutlined/>
                               Community type</label>
                      <select name="owner" class="HomeQueryCategory"><option value="Python">Public</option><option value="Java">Private</option></select>
                    </div>
                     <button type='submit' className="saveContainerCreateFolder2">
                      <GroupAddOutlinedIcon/>
                      Submit
                      </button>
                  </form>



                       
                       


  
    </div>
  )
}
