import React, { useEffect, useState } from 'react'
import "../home/home.css"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';


import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import SwipeRightOutlinedIcon from '@mui/icons-material/SwipeRightOutlined';

import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import HomePageInputs from '../../components/HomePageInputs/HomePageInputs';
import HomePageQuestionSection from '../../components/HomePageQuestionSection/HomePageQuestionSection';
import HomePageAnsSect from '../../components/HomePageAnsSection/HomePageAnsSect';
import { NavLink,Outlet } from 'react-router-dom';
import axios from 'axios';



export default function Home() {
  const [tab,setTab] = useState(true);


  const handleAllPost = async() =>{
    try{
        const user = await axios.get(`${process.env.REACT_APP_URL}/user/getAllUser`,{withCredentials:true})
        console.log(user);
        setTab(false)
      }catch(e){
       console.log(e);
    }
  }

  

  return (
    <div className='HomeContainer'>
        <div className="HomeLeftPage">
            <div className="HomeButtons">
                  
                      <NavLink to="inputs" end className={({ isActive }) => `${isActive || tab ? 'HomeButton ActiveButton' : 'HomeButton'}`}>
                        <HelpRoundedIcon />
                        Post question
                      </NavLink>
               
                   <NavLink to="questions" className={({ isActive }) => `${isActive ? 'HomeButton ActiveButton' : 'HomeButton'}`} onClick={handleAllPost}>
                                    <DynamicFeedOutlinedIcon/>
                        All post
                  </NavLink>
                  <NavLink to="urQuestions" className={({ isActive }) => `${isActive ? 'HomeButton ActiveButton' : 'HomeButton'}`} onClick={handleAllPost}>
                       <AllInboxIcon/>
                        Your posts
                 </NavLink>
                   <NavLink to="expertquestions" className={({ isActive }) => `${isActive ? 'HomeButton ActiveButton' : 'HomeButton'}`} onClick={handleAllPost}>
                        <Diversity2OutlinedIcon/>
                        Friends posts
                  </NavLink>
                 <NavLink to="friendquestions" className={({ isActive }) => `${isActive ? 'HomeButton ActiveButton' : 'HomeButton'}`} onClick={handleAllPost}>
                        <ContactPageOutlinedIcon/>
                        Expert posts
                 </NavLink>
            </div>
            {/* {tab === 'question' && <HomePageInputs/>}
            {tab === 'all post' &&<HomePageQuestionSection/>}
            <HomePageAnsSect/> */}
            <Outlet/>
            
            
                 
        </div>

        <div className="HomeRecommendWrapper">
        <div className="HomeRecommended">
            <div className="HomeRecommendedHeading">
                  <FeaturedPlayListOutlinedIcon/>
                  Recommended
            </div>
            <div className="HomeRecommendedQuestion">
                  <p className='HomeRecommendedQuestionPara'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" className='HomeRecommendedQuestionParaImg'/>

                    
                        Q How to resolve cors issue
                  </p>
                   <p className='HomeRecommendedQuestionPara'>
                         <img src=" https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="" className='HomeRecommendedQuestionParaImg'/>
                        Q Issue in iterating python objects</p>
                    <p className='HomeRecommendedQuestionPara'>
                        <img src="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" alt="" className='HomeRecommendedQuestionParaImg'/>

                       
                        Q Dynamic array c++ problem</p>
                     <p className='HomeRecommendedQuestionPara'>
                         <img src="https://icon2.cleanpng.com/20180917/rgp/kisspng-javascript-logo-product-design-brand-1713939908433.webp" alt="" className='HomeRecommendedQuestionParaImg'/>
                        
                        Q Whats the use of cohesion</p>
                      <p className='HomeRecommendedQuestionPara'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" className='HomeRecommendedQuestionParaImg'/>
                        Q How to bind data in React js</p>
                       <p className='HomeRecommendedQuestionPara'>
                         <img src="https://icon2.cleanpng.com/20180917/rgp/kisspng-javascript-logo-product-design-brand-1713939908433.webp" alt="" className='HomeRecommendedQuestionParaImg'/>
                        Q How to manage memory in closure</p>
                                          <p className='HomeRecommendedQuestionPara'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" className='HomeRecommendedQuestionParaImg'/>

                    
                        Q How to resolve cors issue
                  </p>
                   <p className='HomeRecommendedQuestionPara'>
                         <img src=" https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="" className='HomeRecommendedQuestionParaImg'/>
                        Q Issue in iterating python objects</p>
                    <p className='HomeRecommendedQuestionPara'>
                        <img src="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" alt="" className='HomeRecommendedQuestionParaImg'/>

                       
                        Q Dynamic array c++ problem</p>
                     <p className='HomeRecommendedQuestionPara'>
                         <img src="https://icon2.cleanpng.com/20180917/rgp/kisspng-javascript-logo-product-design-brand-1713939908433.webp" alt="" className='HomeRecommendedQuestionParaImg'/>
                        
                        Q Whats the use of cohesion</p>
                      <p className='HomeRecommendedQuestionPara'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" className='HomeRecommendedQuestionParaImg'/>
                        Q How to bind data in React js</p>
                       <p className='HomeRecommendedQuestionPara'>
                         <img src="https://icon2.cleanpng.com/20180917/rgp/kisspng-javascript-logo-product-design-brand-1713939908433.webp" alt="" className='HomeRecommendedQuestionParaImg'/>
                        Q How to manage memory in closure</p>
                                         
                  
                         
            </div>
        </div>
        <div className="HomeRecommended">
            <div className="HomeRecommendedHeading">
                  <FeaturedPlayListOutlinedIcon/>
                  Recommended
            </div>
            <div className="HomeRecommendedQuestion">
                  <p className='HomeRecommendedQuestionPara'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" className='HomeRecommendedQuestionParaImg'/>

                    
                        Q How to resolve cors issue
                  </p>
                   <p className='HomeRecommendedQuestionPara'>
                         <img src=" https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="" className='HomeRecommendedQuestionParaImg'/>
                        Q Issue in iterating python objects</p>
                    <p className='HomeRecommendedQuestionPara'>
                        <img src="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" alt="" className='HomeRecommendedQuestionParaImg'/>

                       
                        Q Dynamic array c++ problem</p>
                     <p className='HomeRecommendedQuestionPara'>
                         <img src="https://icon2.cleanpng.com/20180917/rgp/kisspng-javascript-logo-product-design-brand-1713939908433.webp" alt="" className='HomeRecommendedQuestionParaImg'/>
                        
                        Q Whats the use of cohesion</p>
                      <p className='HomeRecommendedQuestionPara'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" className='HomeRecommendedQuestionParaImg'/>
                        Q How to bind data in React js</p>
                       <p className='HomeRecommendedQuestionPara'>
                         <img src="https://icon2.cleanpng.com/20180917/rgp/kisspng-javascript-logo-product-design-brand-1713939908433.webp" alt="" className='HomeRecommendedQuestionParaImg'/>
                        Q How to manage memory in closure</p>
                                          <p className='HomeRecommendedQuestionPara'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" className='HomeRecommendedQuestionParaImg'/>

                    
                        Q How to resolve cors issue
                  </p>
                   <p className='HomeRecommendedQuestionPara'>
                         <img src=" https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="" className='HomeRecommendedQuestionParaImg'/>
                        Q Issue in iterating python objects</p>
                    <p className='HomeRecommendedQuestionPara'>
                        <img src="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" alt="" className='HomeRecommendedQuestionParaImg'/>

                       
                        Q Dynamic array c++ problem</p>
                     <p className='HomeRecommendedQuestionPara'>
                         <img src="https://icon2.cleanpng.com/20180917/rgp/kisspng-javascript-logo-product-design-brand-1713939908433.webp" alt="" className='HomeRecommendedQuestionParaImg'/>
                        
                        Q Whats the use of cohesion</p>
                      <p className='HomeRecommendedQuestionPara'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" className='HomeRecommendedQuestionParaImg'/>
                        Q How to bind data in React js</p>
                       <p className='HomeRecommendedQuestionPara'>
                         <img src="https://icon2.cleanpng.com/20180917/rgp/kisspng-javascript-logo-product-design-brand-1713939908433.webp" alt="" className='HomeRecommendedQuestionParaImg'/>
                        Q How to manage memory in closure</p>
                                         
                  
                         
            </div>
        </div>
        </div>

    </div>
  )
}
