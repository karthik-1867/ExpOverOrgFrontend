import React from 'react'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import SwipeRightOutlinedIcon from '@mui/icons-material/SwipeRightOutlined';

import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import HomeQueryPostItems from '../HomeQueryPostItems/HomeQueryPostItems';
import {question} from "../../Dummy.js"

export default function HomePageQuestionSection() {
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
                        {question.map((item)=>(

                              <HomeQueryPostItems key={item.id} data={item}/>
                        ))
                        }
                  </div>
            </div> 
  )
}
