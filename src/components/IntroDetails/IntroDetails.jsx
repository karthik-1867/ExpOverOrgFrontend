import SwipeRightOutlinedIcon from '@mui/icons-material/SwipeRightOutlined';
import SwipeLeftOutlinedIcon from '@mui/icons-material/SwipeLeftOutlined';
import { Users } from '../../Dummy';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { useEffect, useState } from 'react';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
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
    const [obj,setObj] = useState({});
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
                setDetail(user.data[0]);
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
                const category = await axios.post(`${process.env.REACT_APP_URL}/category/getCategoryBasedOnList`,{list:`${user.data[0].expertise}`},{withCredentials:true})
                setCategory(category.data);

            }

        }

        getUser();
           

        },[id])

         useEffect(()=>{
            switch (true) {
             case (detail.upvotesCount > 100):
               setObj({'text':'Legendary'}) 
               break;
             case detail.upvotesCount > 93:
               setObj({'text':'Elite'})
               break;
             case detail.upvotesCount > 90:
               setObj({'text':'Marque'})
               break;
             case detail.upvotesCount > 80:
               setObj({'text':'Veteran'}) 
               break;
             case detail.upvotesCount > 50:
              setObj({'text':'Tech geek'}) 
               break;
             case detail.upvotesCount > 20:
               setObj({'text':'Achiever'}) 
               break;
             default:
               console.log("deafult",detail.upvotesCount,(detail.upvotesCount > 10))
               setObj({'text':'Explorer'}) 
               break;
           }
         },[detail])


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
                    // <div className="IntroDetailsBanner">
                        <img src={detail.profilePicture} className='IntroImage'/>
                         /* <div className="overlay"></div>
                          <div className="text-content">
                            <h1>{detail.name}</h1>
                        </div>
                    </div> */
                     :
                        <div className="IntroImageLoader"></div>}
                    <div className="details">
                            <div className="singleDetail">

                                <div className="DetailWrapper">
                                    <span className='DeatailIcon orangeDetail'><AccountCircleOutlinedIcon/></span>
                                    <div className="TextWrapper">
                                        <span className='BigDetail'>Name</span>
                                        {!loading && <span className='Detail'>{detail?.name}</span>}
                                        {loading && <span className='DetailLoader w65'></span>}
                                    </div>
                                </div>

                            
                            </div>
                            <div className="singleDetail">
                                <div className="DetailWrapper">
                                    <span className='DeatailIcon redDetail'><EmailOutlinedIcon/></span>
                                
                                    <div className="TextWrapper">
                                        <span className='BigDetail'>Email</span>
                                        {!loading && <span className='Detail'>{detail.email}</span>}
                                        {loading && <span className='DetailLoader w75'></span>}
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="singleDetail">
                                <div className="DetailWrapper">
                                    <span className='DeatailIcon purpleDetail'><WorkOutlinedIcon/></span>
                                    
                                    <div className="TextWrapper">
                                        <span className='BigDetail'>Designation</span>
                                        {!loading &&<span className='Detail'>Software enginner</span>}
                                        {loading && <span className='DetailLoader w40'></span>}
                                    </div>
                                </div>
                                
                                
                                
                            </div>
                            
                            <div className="singleDetail">
                                <div className="DetailWrapper">
                                    <span className='DeatailIcon pinkDetail'><StarHalfOutlinedIcon/></span>
                                    <div className="TextWrapper">
                                        <span className='BigDetail'>Level</span>
                                        {!loading && <span className='Detail'>{obj.text}</span>}
                                        {loading && <span className='DetailLoader w60'></span>}
                                    </div>
                                </div>
                                
                           </div>

                        
                    </div>
                                        <div className="details">
                            <div className="singleDetail">

                                <div className="DetailWrapper">
                                    <span className='DeatailIcon blueBadge'><Diversity3OutlinedIcon/></span>
                                    <div className="TextWrapper">
                                        <span className='BigDetail'>Friends</span>
                                        {!loading && <span className='Detail'>{detail.friendsCount<10 ? '0'+detail.friendsCount : detail.friendsCount}</span>}
                                        {loading && <span className='DetailLoader w65'></span>}
                                    </div>
                                </div>

                            
                            </div>
                            <div className="singleDetail">
                                <div className="DetailWrapper">
                                    <span className='DeatailIcon tealBadge'><PersonAddAlt1OutlinedIcon/></span>
                                
                                    <div className="TextWrapper">
                                        <span className='BigDetail'>Followers</span>
                                        {!loading && <span className='Detail'>{detail.expertsCount <10 ? '0'+detail.expertsCount : detail.expertsCount}</span>}
                                        {loading && <span className='DetailLoader w75'></span>}
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="singleDetail">
                                <div className="DetailWrapper">
                                    <span className='DeatailIcon green-darkBadge'><EmojiObjectsOutlinedIcon/></span>
                                    
                                    <div className="TextWrapper">
                                        <span className='BigDetail'>Solution contribution</span>
                                        {!loading &&<span className='Detail'>{detail.answersCount < 10 ? '0'+detail.answersCount : detail.answersCount }</span>}
                                        {loading && <span className='DetailLoader w40'></span>}
                                    </div>
                                </div>
                                
                                
                                
                            </div>
                            
                            <div className="singleDetail">
                                <div className="DetailWrapper">
                                    <span className='DeatailIcon violetBadge'><ThumbUpAltOutlinedIcon/></span>
                                    <div className="TextWrapper">
                                        <span className='BigDetail'>Votes</span>
                                        {!loading && <span className='Detail'>{detail.upvotesCount < 10 ? '0'+detail.upvotesCount : detail.upvotesCount}</span>}
                                        {loading && <span className='DetailLoader w60'></span>}
                                    </div>
                                </div>
                                
                           </div>

                        
                    </div>
                   {/* <div className="details">

                    <div className="ProfileStatsWrapper2">
                        <div className="ProfileStatBox2 orangeBadge">
                            <div className="ProfileStatImg2 orangeImg">

                            <Diversity3OutlinedIcon className='ProfileIcon3' style={{textSshadow:"0 4px 2px rgba(0, 0, 0, 15.1) !important"}}/>
                            </div>
                            <span className='BadgeStats2'>
                                Friends :   {detail.friendsCount}
                           </span>
                        </div>
                        <div className="ProfileStatBox2 purpleBatch">
                            <div className="ProfileStatImg2 blueImg">

                            <PersonAddAlt1OutlinedIcon className='ProfileIcon3'/>
                            </div>
                            <span className='BadgeStats2'>
                                Followers :   {detail.expertsCount}
                                </span>
                        </div>
                        <div className="ProfileStatBox2 green-darkBadge">
                            <div className="ProfileStatImg2 lightGreenImg">

                            <EmojiObjectsOutlinedIcon className='ProfileIcon3'/>
                            </div>
                            <span className='BadgeStats2'>
                                Solution  :   {detail.answersCount}
                                </span>
                        </div>
                        <div className="ProfileStatBox2 redBatch">
                            <div className="ProfileStatImg2 redImg">

                            <ThumbUpAltOutlinedIcon className='ProfileIcon3'/>
                            </div>
                            <span className='BadgeStats2'>
                                Votes :   {detail.upvotesCount}
                                </span>
                        </div>

                    </div>
                    </div> */}
                    {/* <div className="details">
                       <h1 className='HomeQueryMidSectionRightLongDescHeading2'>

                        Stats
                       </h1>
                <div className="ProfileStatsWrapper2">
                    <div className="ProfileStatBox2 orangeBadge">
                          <div className="ProfileStatImg2 orangeImg">

                          <Diversity3OutlinedIcon className='ProfileIcon3' style={{textSshadow:"0 4px 2px rgba(0, 0, 0, 15.1) !important"}}/>
                          </div>
                          <span className='BadgeStats2'>
                            
                               <span>
                                Friends: 
                                </span>
                                <span>

                                   30
                                </span>

                            </span>
                    </div>
                    <div className="ProfileStatBox2 purpleBatch">
                          <div className="ProfileStatImg2 blueImg">

                          <PersonAddAlt1OutlinedIcon className='ProfileIcon3'/>
                          </div>
                          <span className='BadgeStats2'>
                            Followers :   30
                            </span>
                    </div>
                    <div className="ProfileStatBox2 green-darkBadge">
                          <div className="ProfileStatImg2 lightGreenImg">

                          <EmojiObjectsOutlinedIcon className='ProfileIcon3'/>
                          </div>
                          <span className='BadgeStats2'>
                            Solution  :   30
                            </span>
                    </div>
                    <div className="ProfileStatBox2 redBatch">
                          <div className="ProfileStatImg2 redImg">

                          <ThumbUpAltOutlinedIcon className='ProfileIcon3'/>
                          </div>
                          <span className='BadgeStats2'>
                            Votes :   30
                            </span>
                    </div>

                </div>
                        
                    </div> */}
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