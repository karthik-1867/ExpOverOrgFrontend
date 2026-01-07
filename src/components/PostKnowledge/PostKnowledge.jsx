import React, { useState } from 'react'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CodeEditor from '../CodeEditor/CodeEditor';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function PostKnowledge() {
   const [inputs,setInputs] = useState({content:"",code:""});
   const {id,type} = useParams();

  const handleSubmit = async(e) => {
   const {code,content} = inputs;
      e.preventDefault(); 
      let api = type === 'public' ? 'postKnowledgePublic' : 'postKnowledgePrivate'    
      await axios.post(`${process.env.REACT_APP_URL}/knowledge/${api}/${id}`,{code,content},{withCredentials:true})
      setInputs({
            code:"",
            content:""
      })
  }

  const handleCodeChange = (value) => {
            setInputs((prev)=>{
                  return {...prev, code:value}
            })
  }

  const handleInput = (e) => {
       setInputs((prev)=>{
           return {...prev, [e.target.name]:e.target.value}
         })
  }

  return (

    <div className="LoginContainer">

         <form className="LoginForm2 Selected" onSubmit={handleSubmit}>
                       <div className="LoginInputs">

                        <label className='HomeQueryShortDesc'>
                            <DescriptionOutlinedIcon/>
                            Code
                        </label>
                        <CodeEditor value={inputs.code} onChange={handleCodeChange}/>
                       </div>
                       <br/>
                       <div className="LoginInputs">

                        <label className='HomeQueryShortDesc'>
                            <DescriptionOutlinedIcon/>
                            Short Description
                        </label>
                        <textarea
                            id="myTextarea"
                            class="textbox"
                            name='content'
                            rows="10"
                            cols="33"
                            placeholder="Type Short description question…"
                            value={inputs.content}
                            onChange={e => handleInput(e)}
                            ></textarea>
                       </div>
                       <br/>
                       <button type="submit" className='saveContainerCreateFolder2' style={{background: "linear-gradient(to bottom, #62ff12, #007600)",border: "1px solid #62ff12",color:'white'}}>
                              <DescriptionOutlinedIcon/>
                             Sumbit
                         </button>
                        

                         </form>
    </div>


  )
}
