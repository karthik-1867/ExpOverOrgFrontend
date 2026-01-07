import React, { useEffect, useState } from 'react'
import PeopleLoader from '../../components/PeopleLoader/PeopleLoader';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import CallToActionOutlinedIcon from '@mui/icons-material/CallToActionOutlined';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import HomeQueryPostItemsLoader from '../../components/HomequerypostItemsLoader/HomeQueryPostItemsLoader';
import NotificationMessage from '../../components/NotificationMessage/NotificationMessage';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationManager from '../../components/NotificationManager/NotificationManager';
import axios from 'axios';
import Statuspeope from '../../components/StatusPeople/Statuspeope';
import CommunityNotificationStatus from '../../components/CommunityNotificationStatus/CommunityNotificationStatus';

export default function Notification() {

  const [status,setStatus] = useState([]);
  const [communityStatus,setCommunityStatus] = useState([]); 
  const [loading,setLoading] = useState(false);
  const [selectType,setSelectType] = useState('friends');
  const navgate = useNavigate();



   const getStatus = async(type) => {
        console.log("getStatus")
        setLoading(true);
        setStatus([])
        let api = ''
        switch (type) {
               case 'all':
                     api = 'Notification/getFriendStatusNotification'
                     
               break;
               case 'accepted':
                     api = 'Notification/getFriendAcceptedStatusNotification'
                     
               break;
                case 'rejected':
                     api = 'Notification/getFriendRejeptedStatusNotification'
                     
               break;
              
               default:
                    api = 'Notification/getFriendStatusNotification'
               break;
          }
        

        const Notification = await axios.get(`${process.env.REACT_APP_URL}/${api}`,{withCredentials:true});
        console.log("notification status",Notification.data)
        setStatus(Notification.data);
        setLoading(false);
  }

  useEffect(()=>{
     getStatus('all');
     navgate('/Notification/Messages');
  },[])


  const getCommunityStatus = async() => {
        const Notification = await axios.get(`${process.env.REACT_APP_URL}/Notification/getCommunityNotification`,{withCredentials:true});
        console.log("get community status",Notification.data)
        setCommunityStatus(Notification.data);
        setLoading(false);
  }

  const chooseSelectType = async(type) =>{
       setSelectType(type);
       console.log('type',type)
       if(type==='friends'){
          getStatus('all');
       }else{
         setStatus([]);
         getCommunityStatus()
         
       }
  }


  

    const arr = Array(10).fill().map((_, i) => i);
  return (
        <div className='expertTrackContainer'>
       <div className="NoticationTrackcontainerLeft">
              <div className="SaveHeadingWrapper">
                    <div class="HomeRecommendedHeading2">
                      <FeaturedPlayListOutlinedIcon/>Status
                    </div>
                    <div className="expertTrackOwnerFollow">
                      <KeyboardBackspaceOutlinedIcon/>
                    </div>
               </div>
              <div class="chooseBox" style={{display:'flex',gap:'5px'}}>
                <button class={`${selectType === 'friends' ? 'All' : 'unSelected'}`} onClick={()=>chooseSelectType('friends')}>
                    <ConnectWithoutContactOutlinedIcon/>
                    Friends
                    </button>
                    <button class={`${selectType === 'community' ? 'All' : 'unSelected'}`} onClick={()=>chooseSelectType('community')}>
                   <ForumIcon/>
                    Private community
                    </button>
                </div>
              
              <ul className='expertTrackContainerLists2'>
                  <div className="chooseBox">
                    <button className="All" onClick={()=>getStatus('all')}>All Status</button>
                    <button className="Accepted" onClick={()=>getStatus('accepted')}>Accepted</button>
                    <button className="Rejected" onClick={()=>getStatus('rejected')}>Rejected</button>

                  </div>
                   {      
                       loading == true && status.length ==0 && arr.map((i)=>
                        (<PeopleLoader />)
                       )   
                   }
                   {
                      loading == false && status.length > 0 && status.map((i)=>(
                        <Statuspeope data={i} key={i._id}/>
                      ))
                   }
                   {
                      selectType ==='community' && 
                      <CommunityNotificationStatus data={communityStatus}/>
                   }
              </ul>
       </div>
          <div className="expertTrackContainerRight">
            <div className="expertTrackContainerRightButtons">
                 <NavLink to={`/Notification/Messages`} end style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`} >               
                         <HelpRoundedIcon />
                         Notification Messages  
                 </NavLink>
                  <NavLink to={`/Notification/Manager`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`} >               
                       <CallToActionOutlinedIcon/>
                       Notification Manager
                   </NavLink>
                 <NavLink to={`/Notification/Followups`}  style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`}>                
                       <PsychologyAltOutlinedIcon/>
                       Follow ups
                  </NavLink>
              </div>
              <div className="expertTrackContainerRightContent">

                  {/* <NotificationMessage/>   */}
                  {/* <NotificationManager/> */}
                  <Outlet/>
                    
              </div>
       </div>
    </div>
  )
}
