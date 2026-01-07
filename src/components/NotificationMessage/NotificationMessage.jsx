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
                                <button class="All"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1umw9bq-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ConnectWithoutContactOutlinedIcon"><path d="M11 14H9c0-4.97 4.03-9 9-9v2c-3.87 0-7 3.13-7 7m7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3M7 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2m4.45.5h-2C9.21 5.92 7.99 7 6.5 7h-3C2.67 7 2 7.67 2 8.5V11h6V8.74c1.86-.59 3.25-2.23 3.45-4.24M19 17c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2m1.5 1h-3c-1.49 0-2.71-1.08-2.95-2.5h-2c.2 2.01 1.59 3.65 3.45 4.24V22h6v-2.5c0-.83-.67-1.5-1.5-1.5"></path></svg>Question</button>
                                <button class="unSelected"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1umw9bq-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContactPageOutlinedIcon"><path d="M13.17 4 18 8.83V20H6V4zM14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm-2 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58s-1.93.21-2.78.58C8.48 15.9 8 16.62 8 17.43V18h8z"></path></svg>Answer</button>
                                <button class="unSelected">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1umw9bq-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ForumIcon"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1m-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1"></path></svg>public Knowledge</button>
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
