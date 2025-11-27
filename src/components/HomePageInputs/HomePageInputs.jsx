import React, { useEffect, useState } from 'react'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import HomeCategory from '../HomeCategory/HomeCategory';
import axios from 'axios';
import CodeEditor from '../CodeEditor/CodeEditor';
export default function HomePageInputs() {

  const [catgeory,setCategory] = useState("");
  const [selectedCategory,setSelectedCategory] = useState("");
  const [inputs,setinputs] = useState({
      code:"",
      QuestionTitle:"",
      QuestionBody:"",
      QuestionCategory:""
  })

  console.log("inputs",inputs)


  useEffect(()=>{
     
      const getCategory = async() => {
            const category = await axios.get(`${process.env.REACT_APP_URL}/category/getAllCategory`,{withCredentials:true})
            setCategory(category.data);
      }

      getCategory()

  },[])

  const handleSubmit = async(e) => {
      const {code,QuestionTitle,QuestionBody,QuestionCategory} = inputs;
        e.preventDefault();
      

      
      await axios.post(`${process.env.REACT_APP_URL}/question/postQuestion`,{code,QuestionBody,QuestionCategory,QuestionTitle},{withCredentials:true})
      setinputs({
            code:"",
            QuestionTitle:"", 
            QuestionBody:"",
            QuestionCategory:""
      })
  }

  const handleInput = (e) => {
            setinputs((prev)=>{
                  return {...prev, [e.target.name]:e.target.value}
            })
  }

  const handleCategory = (value) => {
           setSelectedCategory(value._id);
           setinputs((prev)=>{
                  return {...prev, QuestionCategory:value.categoryName}
            })
  }   

  const handleCodeChange = (value) => {
            setinputs((prev)=>{
                  return {...prev, code:value}
            })
  }

  return (
             <div className="HomeQuery">
                  <div className="HomeQueryHeading">

                        <div className="HomeQueryNameAndImg">
                              <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" className='HomeQueryImgProfile'/>
                              <div className="HomeQueryNameSection">

                                 Karthik
                                 <span className='HomeQueryDesign'>Software engineer</span>
                              </div>
                        </div>
                        <div className="HomeContriButionAndFollowers">

                              <div className="HomeUrFollower">
                                    <GroupOutlinedIcon/>
                                    Follower : 300
                              </div>
                              <div className="HomeUrContribution">
                                    <EmojiObjectsOutlinedIcon/>
                                    Solution contributed : 20
                              </div>
                              <div className="HomeUrFriend">
                                    <ConnectWithoutContactOutlinedIcon/>
                                    Friend : 30
                              </div>
                        </div>
                  </div>
                  <div className="HomeQueryTextInputs">
                       <form className="HomeQueryTextInputsWrapper" onSubmit={handleSubmit}>
                        <label className='HomeQueryShortDesc'>
                              <DescriptionOutlinedIcon/>
                              Code
                        </label>
                       <CodeEditor value={inputs.code} onChange={handleCodeChange}/>
                       <label className='HomeQueryShortDesc'>
                          <DescriptionOutlinedIcon/>
                          Short Description
                       </label>
                       <textarea
                        id="myTextarea"
                        class="textbox"
                        name='QuestionTitle'
                        rows="1"
                        cols="30"
                        placeholder="Type Short description question…"
                        value={inputs.QuestionTitle}
                        onChange={e => handleInput(e)}
                        ></textarea>
                        <label className='HomeQueryShortDesc'>
                              <DescriptionRoundedIcon/>      
                              Full Description
                        </label>
                       <textarea
                        id="myTextarea"
                        class="textbox"
                        rows="7"
                        cols="30"
                        name='QuestionBody'  
                        placeholder="Full Description of problem statement…"
                        value={inputs.QuestionBody}
                        onChange={e => handleInput(e)}
                        ></textarea>
                        <div className="HomeQueryInfo">
                           <InfoOutlinedIcon/>
                           If category of question described does'nt exist. U can create ur own category but it would be reviewed first. You can click right button to create
                           <button className='HomeQueryCategoryCreate'>
                              Create category
                           </button>
                            
                        </div>
                         <button type="submit" className='HomeQueryCategoryCreate' style={{background: "linear-gradient(to bottom, #62ff12, #007600)",border: "1px solid #62ff12",color:'white'}}>
                             Sumbit
                         </button>
                        

                         </form>
                         <div className="categoryHomeListItems">
                              <label className='HomeQueryShortDesc'>
                              <DescriptionOutlinedIcon/>
                              Category options
                                    </label>
                                 <ul className='categoryContainerListItems'>
                                    {catgeory.length>0 && catgeory?.map((item)=>(
                                          <HomeCategory selectedCategory={selectedCategory} key={item._id} data={item} handleCategory={handleCategory}/>
                                    ))}
                                 </ul>
                         </div>
                  </div>   
            </div> 
  )
}
