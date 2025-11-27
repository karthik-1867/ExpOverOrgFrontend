import React, { useEffect, useState } from 'react'

import "../expertTrack/expertTrack.css" 
import "../community/community.css"
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import CallToActionOutlinedIcon from '@mui/icons-material/CallToActionOutlined';
import { Users } from '../../Dummy';
import ExpertTrackListItems from '../../components/expertTrackListItems/ExpertTrackListItems';
import HomePageQuestionSection from '../../components/HomePageQuestionSection/HomePageQuestionSection';
import { PersonAddAlt1Outlined } from '@mui/icons-material';
import FriendinviteStatus from '../../components/inviteStatus/FriendinviteStatus';
import CommunityInviteStatus from '../../components/communityInviteStatus/CommunityInviteStatus';
import CreateCommunity from '../../components/createCommunity/CreateCommunity';
import axios from 'axios';
import CommunityUserList from '../../components/communityUserList/CommunityUserList';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';


export default function Community() {
  const [communityType, setCommunityType] = useState('public');
  const [communityList,setCommunityList] = useState([]);
  const [knowledge,setKnowledge] = useState([]);
  const [type,SetType] = useState('allPublicCommunity')
  const [id,setId] = useState(0);
    const [section,setSection] = useState('communityKnowledge')
    const [api,setApi] = useState('community')
    const navigate = useNavigate()

  console.log("communityList",communityList,id)

  useEffect(()=>{
        const allCommunity  = async() => {
          const community = await axios.get(`${process.env.REACT_APP_URL}/community/getPublicCommunities`,{withCredentials:true})
          setCommunityList(community.data)
          setId(community.data[0]._id)
        }

        allCommunity();
   },[]);




   const handleCommunity = async(type) => {
       let api = ''
       switch (type) {
               case 'allPublicCommunity':
                     api = 'community/getPublicCommunities'
                     
               break;
               case 'getFollowedPublicCommunity':
                     api = 'community/getFollowedPublicCommunities'
               break;
               default:
                    api = 'community/getPublicCommunities'
               break;
          }

          SetType(type);

          try{
               const community = await axios.get(`${process.env.REACT_APP_URL}/${api}`,{withCredentials:true})
               if(type === 'allPublicCommunity' || type === 'allPrivateCommunity')
               {
                    setCommunityList(community.data)
                    setId(community.data[0]._id)
                    
               }else{
                   
                    const comunityList = community.data.map((item)=> item.communityId)
                    setCommunityList(comunityList)
                    setId(comunityList[0]._id)
                    navigate(`/community/communityKnowledge/${comunityList[0]._id}`);
               }
          }catch(e){
               console.log(e)
          }

     }


  return (
    <div className='expertTrackContainer'>
       <div className="expertTrackcontainerLeft">
              <div className="expertTrackContainerLeftButtons">
                 <button className={`expertTrackContainerLeftButton ${communityType === 'public' && 'ActiveButton'}`} onClick={()=>setCommunityType('public')}>
                       <PeopleAltOutlinedIcon/>
                       Public community
                  </button>
                  <button className={`expertTrackContainerLeftButton ${communityType === 'private' && `ActiveButton`}`}onClick={()=>setCommunityType('private')}>
                       <ContactPageOutlinedIcon/>
                       Private Community
                  </button>
              </div>
              {communityType === 'public' ?<div className="expertContainerrSelectButtons">
                   <button className="expertContainerSelectButton ActiveButton" onClick={()=>handleCommunity('allPublicCommunity')}>
                       All community
                   </button>
                   <button className="expertContainerSelectButton" onClick={()=>handleCommunity('getFollowedPublicCommunity')}>
                       Followed {communityType} community
                   </button>
              </div>
               :
               <div className="expertContainerrSelectButtons">
                   <button className="expertContainerSelectButton ActiveButton">
                       All community
                   </button>
                   <button className="expertContainerSelectButton">
                       Followed {communityType} community
                   </button>
              </div>}
              <ul className='expertTrackContainerLists2'>
                   {communityList.map((user)=>(
                       <CommunityUserList key={user.id} data={user} setId={setId} api={api} section={section}/>
                   ))}
              </ul>
       </div>
       <div className="expertTrackContainerRight">
                 {communityType === 'public' ? <div className="expertTrackContainerRightButtons">
                  <NavLink to={`/community/communityKnowledge/${id}`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`}>
                        <HelpRoundedIcon />
                         Share knowledge  
                  </NavLink>
                  <NavLink to={`/community/createCommunity`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`}>
                       <CallToActionOutlinedIcon/>
                        Create community
                 </NavLink>
                  
                 </div>
                  :
                  <div className="expertTrackContainerRightButtons">
                  <NavLink to={`/community/communityKnowledge/id`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`}>
                        <HelpRoundedIcon />
                         Share knowledge  
                  </NavLink>
                  <NavLink to={`/community/createCommunity`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`}>
                       <CallToActionOutlinedIcon/>
                        Create community
                 </NavLink>
                   <NavLink to={`/community/inviteStatus`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`}>
                       <PersonAddAlt1Outlined/>
                        Invite status
                  </NavLink>
                 </div>}
              <div className="friendContainerRightContent">
                {/* <HomePageQuestionSection/> */}
                {/* <CommunityInviteStatus/> */}
                <Outlet/>
              </div>
       </div>
    </div>
  )
}
