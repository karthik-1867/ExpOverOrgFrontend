import React, { useState } from 'react'
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

const tabs = []

export default function Home() {
  const [tab,setTab] = useState('question');


  

  return (
    <div className='HomeContainer'>
        <div className="HomeLeftPage">
            <div className="HomeButtons">
                  <button className={tab == "question" ? "HomeButton ActiveButton" : "HomeButton"} onClick={()=>setTab('question')}>
                        <HelpRoundedIcon />
                        Post question
                  </button>
                  <button className={tab == "all post" ? "HomeButton ActiveButton" : "HomeButton"} onClick={()=>setTab('all post')}>
                                    <DynamicFeedOutlinedIcon/>
                        All post
                  </button>
                  <button className={tab == "your post" ? "HomeButton ActiveButton" : "HomeButton"} onClick={()=>setTab('your post')}>
                       <AllInboxIcon/>
                        Your posts
                  </button>
                  <button className={tab == "friends post" ? "HomeButton ActiveButton" : "HomeButton"} onClick={()=>setTab('friends post')}>
                        <Diversity2OutlinedIcon/>
                        Friends posts
                  </button>
                  <button className={tab == "expert post" ? "HomeButton ActiveButton" : "HomeButton"} onClick={()=>setTab('expert post')}>
                        <ContactPageOutlinedIcon/>
                        Expert posts
                  </button>
            </div>
            {tab === 'question' && <HomePageInputs/>}
            {tab === 'all post' &&<HomePageQuestionSection/>}
            <HomePageAnsSect/>

            
                 
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
  )
}
