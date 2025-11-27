import React, { useEffect, useState } from 'react'
import ExpertTrackListItems from '../../components/expertTrackListItems/ExpertTrackListItems'
import { Users } from '../../Dummy'
import axios from 'axios';
import HomeQueryPostItems from '../../components/HomeQueryPostItems/HomeQueryPostItems';

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
             <div class="HomeRecommendedHeading"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1umw9bq-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FeaturedPlayListOutlinedIcon"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18zM5 10h9v2H5zm0-3h9v2H5z"></path></svg>Recommended</div>
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
                   <div class="HomeRecommendedHeading"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1umw9bq-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FeaturedPlayListOutlinedIcon"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18zM5 10h9v2H5zm0-3h9v2H5z"></path></svg>Recommended</div>
                   <div className="savedPostSection">
                        {question.length > 0 && question?.map((item)=>(
    
                             <HomeQueryPostItems key={item._id} data={item}/>
                        ))
                        }
                   </div>
               </div>
               <div className="saveOpenLink">
                   <div class="HomeRecommendedHeading"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1umw9bq-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FeaturedPlayListOutlinedIcon"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18zM5 10h9v2H5zm0-3h9v2H5z"></path></svg>Recommended</div>
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
