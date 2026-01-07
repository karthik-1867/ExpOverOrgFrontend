import React, { useEffect, useState } from 'react'
import "../inviteStatus/friendInviteStatus.css"
import SwipeRightOutlinedIcon from '@mui/icons-material/SwipeRightOutlined';
import SwipeLeftOutlinedIcon from '@mui/icons-material/SwipeLeftOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import FriendsItems from '../friendsItems/FriendsItems';
import { Users } from '../../Dummy';
import { useNavigate, useOutletContext } from 'react-router-dom';
import axios from 'axios';
import HomeQueryPostItems from '../HomeQueryPostItems/HomeQueryPostItems';
import AnswerList from '../AnswerList/AnswerList';
import PeopleLoader from '../PeopleLoader/PeopleLoader';
import Nodata from '../Nodata/Nodata';
import HomeQueryPostItemsLoader from '../HomequerypostItemsLoader/HomeQueryPostItemsLoader';

export default function FriendinviteStatus() {
    const { handleUpdate } = useOutletContext();
    const [type,SetType] = useState('AllUser');
    const [tab,setTab] = useState('question');
     const [question,setQuestion] = useState('');
    const [answer,setAnswer] = useState('');
    
    const [knowledge,setKnowledge] = useState('');
    const [alluser,setAllUser] = useState([]);
    const [id,setId] = useState(0); 
    const [detail,setDetail] = useState('');
    const [loading,setLoading] = useState(false);
    const arr = Array(10).fill().map((_, i) => i);

     console.log("pending invite",detail)
        const handleTab = async(tab) => {
              setTab(tab);
              if(tab === 'question'){
                   const question = await axios.get(`${process.env.REACT_APP_URL}/question/getTop5Question/${id}`,{withCredentials:true})
                    setQuestion(question.data);
              }else if(tab === 'answer'){
                    const answer = await axios.get(`${process.env.REACT_APP_URL}/answer/getTop5AnswersByUserId/${id}`,{withCredentials:true})
                    setAnswer(answer.data);
              }else{

              }
        }


        const getUser = async() => {
             try{

                setLoading(true);
                setAllUser([])
                setQuestion([])                
                  if(type === 'AllUser'){
                       const user = await axios.get(`${process.env.REACT_APP_URL}/friends/invitePendingList`,{withCredentials:true})
                       console.log("usereee",user);
                       const allFriends = user.data.map((item)=>item.friendId);
                       const question = await axios.get(`${process.env.REACT_APP_URL}/question/getTop5Question/${allFriends[0]._id}`,{withCredentials:true})
                        setQuestion(question.data);
                       setAllUser(allFriends); 
                       setId(allFriends[0]._id)
                       
                         
                       
                  }else{
                       const user = await axios.get(`${process.env.REACT_APP_URL}/friends/inviteRequestList`,{withCredentials:true})
                        console.log("userdetail",user)
                         const allFriends = user.data.map((item)=>item.userId);
                       const question = await axios.get(`${process.env.REACT_APP_URL}/question/getTop5Question/${allFriends[0]._id}`,{withCredentials:true})
                        setQuestion(question.data);
                       setAllUser(allFriends); 
                       setId(allFriends[0]._id)
                      
                  }
                  
              
             }catch(e){
                  console.log(e);
             }

             setLoading(false);
         }
     useEffect(()=>{

         getUser()
        },[type])

        useEffect(()=>{
            const data = async() => {
                if(id != 0){

                    const userDetail = alluser.filter((i)=>i._id===id)[0];
                    setDetail(userDetail)
                    setLoading(true);

                    if(tab === 'question'){
                        const question = await axios.get(`${process.env.REACT_APP_URL}/question/getTop5Question/${id}`,{withCredentials:true})
                            setQuestion(question.data);
                    }else if(tab === 'answer'){
                            const answer = await axios.get(`${process.env.REACT_APP_URL}/answer/getTop5AnswersByUserId/${id}`,{withCredentials:true})
                            setAnswer(answer.data);
                    }else{
    
                    }
                    setLoading(false);
                }
            }

            data();
        },[id])


        const handleAccept = async() => {
            console.log("accpept id",id)
             await axios.put(`${process.env.REACT_APP_URL}/friends/acceptInvite/${id}`,{},{withCredentials:true})
             getUser()
             handleUpdate()
        }

        console.log("alluserlog",alluser)

  return (
    <div className='friendStatusContainer'>
        <div className="friendInviteStatusLeft">
            <div className="friendInviteStatusLeftButtons">
                <button className={`friendInviteStatusLeftButton ${type ==='AllUser' && 'ActiveButton'}`} onClick={()=>SetType('AllUser')}>
                    <SwipeRightOutlinedIcon/>
                    Pending Invites
                </button>
                <button className={`friendInviteStatusLeftButton ${type ==='friend' && 'ActiveButton'}`} onClick={()=>SetType('friend')}>
                    <SwipeLeftOutlinedIcon/>
                    Invites Requests
                </button>
            </div>

            <ul className='expertTrackContainerLists'>
                {alluser.length>0 && alluser.map((user)=>(
                    <FriendsItems key={user.id} id={id} data={user} setId={setId} type={type} handleAccept={handleAccept}/>
                ))}
                {
                    (alluser.length==0 && loading==true) &&
                    
                    arr.map((i)=>
                    (<PeopleLoader type={type}/>)
                    )   
                }
                {
                 alluser.length==0 && <Nodata type='left' message='No user request'/>
                }
            </ul>
        </div>
        <div className="freindInviteStatusRight">
                <div className="IntroDetails">
                    {loading == false ?
                        <img src={detail.profilePicture} className='IntroImage'/>
                    :
                        <div className="IntroImageLoader"></div>
                    }
                    <div className="details">
                        <div className="singleDetail" style={{width:'90%'}}>
                            <span className='Detail'>Solution contributed :</span>
                            <span>{detail.solutionsPosted}</span>
                        </div>
                        <div className="singleDetail" style={{width:'90%'}}>
                             <span className='Detail'>Followers :</span>
                            <span>{detail.solutionsPosted}</span>
                        </div>
                        
                        <div className="singleDetail" style={{width:'90%'}}>
                             <span className='Detail'>Friends :</span>
                             <span>{detail.followers}</span>
                        </div>
                        
                                               <div className="singleDetail" style={{width:'90%'}}>
                             <span className='Detail'>Friends :</span>
                             <span>{detail.followers}</span>
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
                            {tab === 'question' && 
                               ( question.length > 0 ? question?.map((item)=>(

                                <HomeQueryPostItems key={item._id} data={item} type='questionByExpert'/>
                            ))
                            :

                            (loading === true ?
                             <div className="HomeQueryPostSection">
                                    {       
                                        arr.map((i)=>
                                        (<HomeQueryPostItemsLoader/>)
                                        )
                                    }
                            </div>

                            :
                            <Nodata type='right' message='No Question posted'/>))

                            }
                            {tab === 'answer' && 
                            
                                 (answer.length > 0 ? 
                            
                                <div className="HomeQueryAnsSection" >
                                {answer?.map((item)=>(
                                
                                    <AnswerList key={item._id} data={item}/>
                                ))}
                                </div>

                                 :
                                <Nodata type='right' message='No answer posted'/>)

                            }
                    </div>
                    
        </div>

        </div>

    </div> 
  )
}
