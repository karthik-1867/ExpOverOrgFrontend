import SwipeRightOutlinedIcon from '@mui/icons-material/SwipeRightOutlined';
import SwipeLeftOutlinedIcon from '@mui/icons-material/SwipeLeftOutlined';
import { Users } from '../../Dummy';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import "../IntroDetails/introDetails.css"
import axios from 'axios';
import HomeQueryPostItems from '../HomeQueryPostItems/HomeQueryPostItems';
import AnswerList from '../AnswerList/AnswerList';
import CategoryList from '../CategoryList/CatgeoryList';
import HomeQueryPostItemsLoader from '../HomequerypostItemsLoader/HomeQueryPostItemsLoader';
import Nodata from '../Nodata/Nodata';
export default function IntroDetails(){ 
    const [detail,setDetail] = useState('');
    const [tab,setTab] = useState('question');
    const [question,setQuestion] = useState('');
    const [answer,setAnswer] = useState('');
    const [knowledge,setKnowledge] = useState('');
    const [category,setCategory] = useState('');
    const [loading,setLoading] = useState(false);

    const id = useParams();
    const arr = Array(10).fill().map((_, i) => i);

    console.log("detial",detail)
    useEffect(()=>{
        const getUser = async() => {
            
            setLoading(true);
            if(id.id == 'loading')
            {
                setLoading(true);
            }
            else
            {
                const user = await axios.get(`${process.env.REACT_APP_URL}/user/getUserDetailById/${id.id}`,{withCredentials:true});
               
                if(tab === 'question'){               
                const question = await axios.get(`${process.env.REACT_APP_URL}/question/getTop5Question/${id.id}`,{withCredentials:true})
                setDetail(user.data);
                setQuestion(question.data);
                }
                else if(tab === 'answer'){
                    const answer = await axios.get(`${process.env.REACT_APP_URL}/answer/getTop5AnswersByUserId/${id.id}`,{withCredentials:true})
                    setDetail(user.data);
                    setAnswer(answer.data);
                }
                else{   
                }
               
               
                setLoading(false)
                const category = await axios.post(`${process.env.REACT_APP_URL}/category/getCategoryBasedOnList`,{list:`${user.data.expertise}`},{withCredentials:true})
                setCategory(category.data);

            }

        }

        getUser();
           

        },[id])

        const handleTab = async(tab) => {
              setTab(tab);
              if(tab === 'question'){
                   const question = await axios.get(`${process.env.REACT_APP_URL}/question/getTop5Question/${id.id}`,{withCredentials:true})
                    setQuestion(question.data);
              }else if(tab === 'answer'){
                    setAnswer([]);
                    const answer = await axios.get(`${process.env.REACT_APP_URL}/answer/getTop5AnswersByUserId/${id.id}`,{withCredentials:true})
                    setAnswer(answer.data);
              }else{

              }
        }

    return(
        <div className="IntroDetailsContainer">
            <div className="freindInviteStatusRight">
                <div className="IntroDetails">
                    {loading == false ? 
                    <img src={detail.profilePicture} className='IntroImage'/>
                     :
                        <div className="IntroImageLoader"></div>}
                    <div className="details">
                        <div className="singleDetail">
                            <span className='Detail'>Solution contributed :</span>
                            <span>{detail.solutionsPosted}</span>
                        </div>
                        <div className="singleDetail">
                             <span className='Detail'>Followers :</span>
                            <span>{detail.solutionsPosted}</span>
                        </div>
                        
                        <div className="singleDetail">
                             <span className='Detail'>Friends :</span>
                             <span>{detail.followers}</span>
                        </div>
                        
                        <div className="singleDetail">
                            <span className='Detail'>Designation :</span>
                             <span>{detail.followers}</span>
                        </div>
                                                <div className="singleDetail">
                            <span className='Detail'>Solution contributed :</span>
                            <span>{detail.solutionsPosted}</span>
                        </div>
                        <div className="singleDetail">
                             <span className='Detail'>Followers :</span>
                            <span>{detail.solutionsPosted}</span>
                        </div>
                        
                        <div className="singleDetail">
                             <span className='Detail'>Friends :</span>
                             <span>{detail.followers}</span>
                        </div>
                        
                        <div className="singleDetail">
                            <span className='Detail'>Designation :</span>
                             <span>{detail.followers}</span>
                        </div>
                        
                    </div>
                    <div className="ExpertiseList" style={{display:'flex',flexDirection:'column',gap:'10px',padding:'10px',color:'orange'}}>
                         Expertise
                        <div className="ExpertiseListWrapper" style={{display:'flex',flexDirection:'column',gap:'10px',background:'black',padding:'10px',maxHeight:'15vh',overflowY:'scroll',boxShadow:'0 10px 30px rgba(0, 0, 0, 0.6), 0 -6px 20px rgba(255, 140, 0, 0.02) inset'
    ,backdropFilter: 'blur(4px)'}}>
                            {
                                category.length > 0 && category?.map((item)=>(
                                <CategoryList data={item} key={item._id}/>
                                ))
                            }
                        </div>

                    </div>
                </div>

                <div className="friendInviteStatusLeftButtons">
                    <button className={`friendInviteStatusLeftButton ${tab === 'question' && 'ActiveButton'}`} onClick={()=>handleTab('question')}>
                        <SwipeRightOutlinedIcon/>
                        Top 5 question
                    </button>
                    <button className={`friendInviteStatusLeftButton ${tab === 'answer' && 'ActiveButton'}`} onClick={()=>handleTab('answer')}>
                        <SwipeLeftOutlinedIcon/>
                        Top 5 Answers
                    </button>
                    <button className={`friendInviteStatusLeftButton ${tab === 'knowledge' && 'ActiveButton'}`} onClick={()=>handleTab('knowledge')}>
                        <SwipeLeftOutlinedIcon/>
                        Top 5 Knowledge
                    </button>
                </div>
                <div className="FriendsInnerContent">
                    <div className="FriendsInnerContentSection2" style={{display:'flex',flexDirection:'column',gap:'1px',overflowX:'scroll',overflowX:'hidden',height:'60vh'}}>
                            {
                                loading == true &&
                                arr.map((i)=>
                                (<HomeQueryPostItemsLoader/>)
                                )
                            }
                            {tab === 'question' && question.length > 0 && question?.map((item)=>(

                                <HomeQueryPostItems key={item._id} data={item} type='questionByExpert'/>
                            ))
                            }
                            {tab === 'answer' && (answer.length > 0 ? 
                            
                                <div className="HomeQueryAnsSection" >
                                {answer?.map((item)=>(
                                
                                    <AnswerList key={item._id} data={item}/>
                                ))}
                                </div>
                                :
                                <Nodata message='No answers posted yet' />)

                            }
                    </div>
                </div>

            </div>
        </div>

    )
}