import React, { useEffect, useState } from 'react'
import './notificationFollowup.css'
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import axios from 'axios';
import FollowupQuestionList from '../FollowupQuestionList/FollowupQuestionList';
import ExpertPageAnsSection from '../ExpertPageAnsSection/ExpertPageAnsSection';
import { Outlet } from 'react-router-dom';
import HomeQueryPostItemsLoader from '../HomequerypostItemsLoader/HomeQueryPostItemsLoader';
export default function NotificationFollowup() {
  const [question,setQuestion] = useState([]);
  const [loading,setLoading] = useState(false);
 const arr = Array(10).fill().map((_, i) => i);
  useEffect(()=>{
    const getQuestion = async() => {
    try{
        setLoading(true)
        const question = await axios.get(`${process.env.REACT_APP_URL}/followupMessages/getFollowup`,{withCredentials:true})
        console.log("questiuons",question)
        const questionFilter = question.data.map((i)=>{
          
          return {count:i.finalNotificationCount,...i.question}
        })
        setQuestion(questionFilter);
        setLoading(false);
    }catch(e){
        console.log(e)
    }
    }
    getQuestion();
    },[])

  return (
          <div className="NotificationBoxFollowup" >

            <div className="NotificationBoxLeft">
                <div className="HomeRecommendedHeading">
                    <HelpOutlinedIcon/>
                    Followup Questions
               </div>
               <div className="NotificationFollowupContent">
                 
                 <ul className='NotificationFollowupList'>

                    {
                        loading === false && question.map((item)=>(  
                            <FollowupQuestionList data={item} key={item._id}/>
                        ))
                    }


                 </ul>

               </div>   

            </div>
            <div className="NotificationBoxRight">
                <div className="HomeRecommendedHeading">
                    <HelpOutlinedIcon/>
                    Updates
               </div>
                <Outlet/>
            </div>
          </div>
  )
}
