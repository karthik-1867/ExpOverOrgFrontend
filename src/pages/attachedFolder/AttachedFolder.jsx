import React, { useEffect, useState } from 'react'
import ExpertTrackListItems from '../../components/expertTrackListItems/ExpertTrackListItems'
import { Users } from '../../Dummy'
import axios from 'axios';
import HomeQueryPostItems from '../../components/HomeQueryPostItems/HomeQueryPostItems';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
export default function AttachedFolder() {


 const [question,setQuestion] = useState("");

  useEffect(()=>{
      const userDetails = async() => {
            try{
 
                  const question = await axios.get(`${process.env.REACT_APP_URL}/question/getQuestions`,{withCredentials:true})
                  setQuestion(question.data)

            }catch(e){
                console.log(e)
            }
      }

      userDetails();
  },[])

  return (
        <div className="saveContainer">
            <div className="saveContainerLeftPanel">
             <div class="HomeRecommendedHeading"><FeaturedPlayListOutlinedIcon/>Recommended</div>
                <div className="saveContainerList">
                   <ul className='expertTrackContainerLists'>
                  {Users.map((item)=>(
                    <ExpertTrackListItems key={item.id} data={item}/>
                  ))}
                   </ul>
                </div>
            </div>
            <div className="saveRightContainer">
               <div className="savedQuestionPost">
                   <div class="HomeRecommendedHeading"><FeaturedPlayListOutlinedIcon/>Recommended</div>
                   <div className="savedPostSection">
                        {question.length > 0 && question?.map((item)=>(
    
                             <HomeQueryPostItems key={item._id} data={item}/>
                        ))
                        }
                   </div>
               </div>
               <div className="saveOpenLink">
                   <div class="HomeRecommendedHeading"><FeaturedPlayListOutlinedIcon/>Recommended</div>
                   <div className="savedPostSection">
                        
                        {question.length > 0 && question?.map((item)=>(
    
                             <HomeQueryPostItems key={item._id} data={item}/>
                        ))
                        }
                   </div>
               </div>
            </div>
        </div>
  )
}
