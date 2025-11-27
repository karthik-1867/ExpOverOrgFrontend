import React, { useEffect, useState } from 'react'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import SwipeRightOutlinedIcon from '@mui/icons-material/SwipeRightOutlined';

import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import HomeQueryPostItems from '../HomeQueryPostItems/HomeQueryPostItems';
import {question} from "../../Dummy.js"
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HomeQueryPostItemsLoader from '../HomequerypostItemsLoader/HomeQueryPostItemsLoader.jsx';

export default function HomePageQuestionSection({type}) {
  const [user,setUser] = useState("");
  const [questions,setQuestion] = useState([]);
  const [loading,setLoading] = useState(false);
  const [expertQuestions,setExpertQuestion] = useState();

  const id = useParams();

  console.log('type',type)
  console.log("12sadasd",questions)
  console.log("homepageids",id)
  const arr = Array(50).fill().map((_, i) => i);

  useEffect(()=>{
      const userDetails = async() => {
            try{
               
                setLoading(true);
                
                if(id.id === 'loading'){
                  return setLoading(true);     
                }
                
                
                if(type === 'question'){
                  const user = await axios.get(`${process.env.REACT_APP_URL}/user/getYourDetails`,{withCredentials:true})
                  setUser(user)
                  const question = await axios.get(`${process.env.REACT_APP_URL}/question/getQuestions`,{withCredentials:true})
                  console.log("questiuons",question)
                  setQuestion(question.data)
                }
                else if(type === 'questionByExpert' || type === 'questionByFriend'){
                   const question = await axios.get(`${process.env.REACT_APP_URL}/question/getQuestionByUserId/${id.id}`,{withCredentials:true})
                   console.log("questiuons",question)
                   setQuestion(question.data)
                }
                setLoading(false);

            }catch(e){
                console.log(e)
            }
      }

      userDetails();
  },[id])


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
                  <div className="HomeQueryPostSection">
                        {loading == false && questions.length > 0 && questions?.map((item)=>(

                               <HomeQueryPostItems key={item._id} data={item} type={type}/>
                               
                        ))
                        }
                        {
                            loading == true && 
                              arr.map((i)=>
                              (<HomeQueryPostItemsLoader/>)
                            )
                        }
                  </div>
            </div> 
  )
}
