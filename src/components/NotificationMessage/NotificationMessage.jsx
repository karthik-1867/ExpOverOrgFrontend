import React, { useEffect, useState } from 'react'
import PeopleLoader from '../PeopleLoader/PeopleLoader'
import HomeQueryPostItemsLoader from '../HomequerypostItemsLoader/HomeQueryPostItemsLoader'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import CallToActionOutlinedIcon from '@mui/icons-material/CallToActionOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';

import ForumIcon from '@mui/icons-material/Forum';
import './notificationMessage.css'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import ExpertTrackListItems from '../expertTrackListItems/ExpertTrackListItems';
import NotificationUserListItem from '../NotificationUserListItem/NotificationUserListItem';
import HomeQueryPostItems from '../HomeQueryPostItems/HomeQueryPostItems';
import CommunityNotificationList from '../CommunityNotificationList/CommunityNotificationList';
import KnowledgeList from '../KnowledgeList/KnowledgeList';

export default function NotificationMessage() {
    const [users,setUsers] = useState([]);
    const [type,setType] = useState('friends');
    const [community,setCommunity] = useState([]);
    const [selected,setSelected] = useState(null);
    const [loading,setLoading] = useState(false);
    const [messages,setMessages] = useState([]);
    const [knowledge,setKnowledge] = useState([]);

    const getUsers = async (typ) => {
        try {
            setLoading(true);
            setUsers([]);
            setCommunity([]);
            setMessages([]);
            let apiUrl = '';
            switch(typ) {
                case 'Experts':
                    apiUrl = `Notification/getExpertNotificationMessages`;
                    break;
                case 'public':
                    apiUrl = `Notification/getNotificationKnowledge`;
                    break;
                case 'private':
                    apiUrl = `Notification/getNotificationPrivateKnowledge`;
                    break;
                case 'friends':
                    apiUrl = `Notification/getFriendNotificationMessages`;
                    break;
                default:
                    apiUrl = `Notification/getFriendNotificationMessages`;
                    break;
            }

            const res = await axios.get(`${process.env.REACT_APP_URL}/${apiUrl}`, { withCredentials: true });
            if(typ==='friends' || typ==='Experts'){
                setUsers(res.data);
                setSelected(res.data[0]?._id);
                const messageFlat = res.data[0].notifications.map((user) => {
                    const {Question,userId,...rest} = user;
                    return {
                        ...Question,
                        userId: {...userId},
                    };
                });
                console.log("messageFlat",messageFlat)
                setMessages(messageFlat || []);
            }else{
                setCommunity(res.data);
                setSelected(res.data[0]?.communityId);
                console.log("community data",res.data)
                setMessages([]);
                const knowledgeFlat = res.data[0]?.notifications.map((notif) => {
                    const {knowledgeDetails,...rest} = notif;
                   
                    return {
                        ...knowledgeDetails,
                        ...rest,
                    };
                });
                console.log("knowledgeFlat",knowledgeFlat)
                setKnowledge(knowledgeFlat || []);
            }           
            setLoading(false); 
            console.log("notification users",res.data) 
        }catch (err) {
            console.log(err);
        }   
    }
    
    useEffect(() => {
        getUsers('friends');
    }, []);


    const handleUserSelect = async(userId) =>{
        setSelected(userId);
        console.log("selected userId",userId)
        if(type === 'friends' || type==='Experts')
        {
            const user = users.find((u) => u._id === userId);
            const messageFlat = user.notifications.map((notif) => {
                const {Question,userId,...rest} = notif;
                return {    
                    ...Question,
                     userId: {...userId},
                };
            });
            setMessages(messageFlat || []);
        }else{
            console.log("communitys",community,userId)
            const comm = community.find((c) => c.communityId === userId);
            console.log("selected community",comm)
            const knowledgeFlat = comm.notifications.map((notif) => {
                const {knowledgeDetails,...rest} = notif;
                return {
                    ...knowledgeDetails,
                    ...rest,
                };
            });
            console.log("knowledgeFlat",knowledgeFlat)
            setKnowledge(knowledgeFlat || []);
        }
    }

    const handleCategorySelect = (cat) => {
         setType(cat);
         getUsers(cat);
    }
    
    const arr = Array(10).fill().map((_, i) => i);
  return (

          <div className="NotificationBox">

             {/* <div className="expertTrackContainerRightButtons">
                 <NavLink to={`/expertTrack/questions/id`} end style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton ActiveButton'}`} >               
                         <HelpRoundedIcon />
                         Expert  
                 </NavLink>
                  <NavLink to={`/expertTrack/answer/id`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`} >               
                       <CallToActionOutlinedIcon/>
                       Friends
                   </NavLink>
                 <NavLink to={`/expertTrack/knowledge/id`}  style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`}>                
                       <PsychologyAltOutlinedIcon/>
                       Public community
                  </NavLink>
                   <NavLink to={`/expertTrack/knowledge/id`}  style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`}>                
                       <PsychologyAltOutlinedIcon/>
                    Private community
                  </NavLink>
              </div> */}
            <div className="chooseBox" style={{display:'flex',gap:'5px'}}>
                  <button className={`${type === 'friends' ? 'All' : 'unSelected'}`} onClick={()=>handleCategorySelect('friends')}>
                    <ConnectWithoutContactOutlinedIcon/>
                    Friends
                    </button>
                   <button className={`${type === 'Experts' ? 'All' : 'unSelected'}`} onClick={()=>handleCategorySelect('Experts')}>
                    <ContactPageOutlinedIcon/>
                    Experts
                    </button>
                    <button className={`${type === 'public'? 'All' : 'unSelected'}`} onClick={()=>handleCategorySelect('public')}>
                     <ForumIcon/>
                     public community
                    </button>
                    <button className={`${type === 'private' ? 'All' : 'unSelected'}`} onClick={()=>handleCategorySelect('private')}>
                   <ForumIcon/>
                    Private community
                    </button>
                </div>
                 
                <div className='NotificationMessageContainer'>

                            <ul className='NotificationLeft2'>
                                {      
                                    loading === true && arr.map((i)=>
                                    (<PeopleLoader />)
                                    )
                                }
                                {
                                    loading === false && (type === 'friends' || type === 'Experts') && users.map((user)=>
                                        (
                                           <NotificationUserListItem data={user} key={user._id} id={selected} handleUserSelect={handleUserSelect}/> 
                                        ))
                                }
                                {
                                    loading === false && (type === 'public' || type === 'private') && community?.map((comm)=>
                                        (
                                           <CommunityNotificationList data={comm.communityDetails}  key={comm._id} statusCheck={false} handleUserSelect={handleUserSelect} selected={selected}/> 
                                        ))
                                }
                            </ul>
                        <div className="NotificationRight" style={{height:'90vh',display:'flex',flexDirection:'column',gap:'10px'}}>
                            {
                                (type === 'friends' || type==='Experts') &&
                            <div class="chooseBox" style={{display: 'flex', gap: '5px'}}> 
                                <button class="All"><ConnectWithoutContactOutlinedIcon/>Question</button>
                                <button class="unSelected"><ContactPageOutlinedIcon/>Answer</button>
                                <button class="unSelected">
                                    <ForumIcon/>public Knowledge</button>
                            </div>
                            }

                            { 

                                loading === true && arr.map((i)=>
                                    (<HomeQueryPostItemsLoader/>)
                                )
                            }
                            <ul style={{padding:'0px',margin:'0px',listStyleType:'none',width:'100%',overflowY:'auto',flexGrow:'1'}}>

                            
                            {
                               loading === false && (type === 'friends' || type === 'Experts') && messages.map((msg)=>
                                    (
                                        <HomeQueryPostItems key={msg._id} data={msg} type={'allpost'}/>
                                    ))
                            }
                            {
                                loading === false && (type === 'public' || type === 'private') && knowledge?.map((comm)=>
                                    (
                                        
                                         <KnowledgeList key={comm._id} data={comm} />
                                    
                                    ))
                            }
                            </ul>
                            </div>


                </div>
          </div>
  )
}
