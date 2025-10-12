import React from 'react'
import "../createCommunity/createCommunity.css"
import { MessageSharp, PeopleAltOutlined } from '@mui/icons-material'

export default function CreateCommunity() {
  return (
    <div className='createCommunityContainer'>

                <div className="HomeQueryTextInputsWrapper">
                       
                       <label className='HomeQueryShortDesc'>
                          <PeopleAltOutlined/>
                          Community name
                       </label>
                        <input type="text" className="textbox" placeholder='Enter Community name' />
                        <label className='HomeQueryShortDesc'>
                              <MessageSharp/>  
                              Short Description
                        </label>
                       <input type="text" className="textbox" placeholder='Community short description' />
                        <div className="HomeQueryCategoryAndLabel">  
                             <label className='HomeQueryShortDesc'>
                               <PeopleAltOutlined/>
                               Community type</label>
                               <select name="owner" class="HomeQueryCategory"><option value="Python">Public</option><option value="Java">Private</option></select>
                        </div>
                        <button className="createCommunitySubmit">Submit</button>
                        

                         </div>
  
    </div>
  )
}
