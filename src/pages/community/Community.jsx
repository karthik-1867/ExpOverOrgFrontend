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
import PeopleLoader from '../../components/PeopleLoader/PeopleLoader';
import Nodata from '../../components/Nodata/Nodata';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import ForumIcon from '@mui/icons-material/Forum';


export default function Community() {
  const [communityType, setCommunityType] = useState('public');
  const [communityList,setCommunityList] = useState([]);
  const [loading,setLoading] = useState(false);
  const [knowledge,setKnowledge] = useState([]);
  const [type,SetType] = useState('allPublicCommunity')
  const [id,setId] = useState(0);
  const [section,setSection] = useState('communityKnowledge')
  const [api,setApi] = useState('community')
  const navigate = useNavigate()

  const arr = Array(50).fill().map((_, i) => i);

  console.log("loading status",loading)

  useEffect(()=>{
        const allCommunity  = async() => {
          setLoading(true);


          const community = await axios.get(`${process.env.REACT_APP_URL}/community/getPublicCommunities`,{withCredentials:true})
          setCommunityList(community.data)
          setId(community?.data[0]?._id)
          setSection('introdetailCommuinity')
          navigate(`/community/introdetailCommuinity/${community.data[0]._id}`)
          setLoading(false);
        }

        allCommunity();
   },[]);




   const handleCommunity = async(type) => {
       console.log("handle community called")
       let api = ''
       switch (type) {
               case 'allPublicCommunity':
                     api = 'community/getPublicCommunities'
                     
               break;
               case 'getFollowedPublicCommunity':
                     api = 'community/getFollowedPublicCommunities'
               break;
               case 'allPrivateCommunity':
                     api = 'community/getPrivateCommunities'
                     
               break;
               case 'getFollowedPrivateCommunity':
                     api = 'community/getFollowedPrivateCommunities'
               break;
               default:
                    api = 'community/getPublicCommunities'
               break;
          }

          SetType(type);

          try{
               setCommunityList([])
               setLoading(true)
               
               const community = await axios.get(`${process.env.REACT_APP_URL}/${api}`,{withCredentials:true})
               
               if(type === 'allPublicCommunity' || type === 'allPrivateCommunity')
               {
                    setCommunityList(community.data)
                    setId(community.data[0]._id)
                    setSection('introdetailCommuinity')
                    navigate(`/community/introdetailCommuinity/${community.data[0]._id}`)
                    
               }else{
                   
                    const comunityList = community.data.map((item)=> item.communityId)
                    setCommunityList(comunityList)
                    setSection('communityKnowledge')
                    setId(comunityList[0]._id)
                    navigate(`/community/communityKnowledge/${comunityList[0]._id}`);
               }
               setLoading(false);
          }catch(e){
               console.log(e)
               setLoading(false);
          }

     }

     const handleCommunityType = async(type) => {
          setCommunityType(type);
           let api = ''
             switch (type) {
               case 'public':
                     
                     api = 'community/getPublicCommunities'
                     SetType('allPublicCommunity')
                     
               break;
               case 'private':
                     api = 'community/getPrivateCommunities'
                     SetType('allPrivateCommunity')
                     
               break;
            }

          try{
                  setCommunityList([])
                  setLoading(true)
                  const community = await axios.get(`${process.env.REACT_APP_URL}/${api}`,{withCredentials:true})
                    setCommunityList(community.data)
                    setId(community.data[0]._id)
                    navigate(`/community/introdetailCommuinity/${community.data[0]._id}`)
                  setLoading(false)
          }catch(e){
                 console.log(e)
                 setLoading(false)
          }
    }


  return (
    <div className='expertTrackContainer'>
       <div className="expertTrackcontainerLeft">
              <div className="expertTrackContainerLeftButtons">
                 <button className={`expertTrackContainerLeftButton ${communityType === 'public' && 'ActiveButton'}`} onClick={()=>handleCommunityType('public')}>
                       <PeopleAltOutlinedIcon/>
                       Public community
                  </button>
                  <button className={`expertTrackContainerLeftButton ${communityType === 'private' && `ActiveButton`}`}onClick={()=>handleCommunityType('private')}>
                       <ContactPageOutlinedIcon/>
                       Private Community
                  </button>
              </div>
              {communityType === 'public' ?<div className="chooseBox" style={{display:'flex',gap:'5px'}}>
                   <button className={`${type === 'allPublicCommunity' ? 'All' : 'unSelected'}`} onClick={()=>handleCommunity('allPublicCommunity')}>
                      <ConnectWithoutContactOutlinedIcon/>
                       All community
                   </button>
                   <button className={`${type === 'getFollowedPublicCommunity' ? 'All' : 'unSelected'}`} onClick={()=>handleCommunity('getFollowedPublicCommunity')}>
                        <ForumIcon/>
                       Followed community
                   </button>
              </div>
               :
               <div className="chooseBox" style={{display:'flex',gap:'5px'}}>
                   <button className={`${type === 'allPrivateCommunity' ? 'All' : 'unSelected'}`}  onClick={()=>handleCommunity('allPrivateCommunity')}>
                       <ConnectWithoutContactOutlinedIcon/>
                       All community
                   </button>
                   <button className={`${type === 'getFollowedPrivateCommunity' ? 'All' : 'unSelected'}`} onClick={()=>handleCommunity('getFollowedPrivateCommunity')}>
                      <ForumIcon/>
                       Followed {communityType} community
                   </button>
              </div>}
              <ul className='expertTrackContainerLists2'>
                   {communityList.map((user)=>(
                       <CommunityUserList key={user.id} data={user} setId={setId} id={id} api={api} section={section} type={type} handleCommunity={handleCommunity}/>
                   ))}
                   {
                    loading===true && communityList.length ===0 &&
                    
                         arr.map((i)=>
                         (<PeopleLoader type={type} category='community'/>)
                         )
                         
                         
                    }
                    {
                     communityList.length==0 && <Nodata type='left' message='follow user'/>
                    }
              </ul>
       </div>
       {
          type === 'allPublicCommunity' || type === 'allPrivateCommunity' ? 
          <div className="expertTrackContainerRight">
              <Outlet context={{communityType}}/>
          </div> :
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
                  <NavLink to={`/community/postKnowledge/${id}/public`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`}>
                       <CallToActionOutlinedIcon/>
                        Post knowledge
                 </NavLink>
                 
                  
                 </div>
                  :
                  <div className="expertTrackContainerRightButtons">
                  <NavLink to={`/community/communityKnowledge/${id}`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`}>
                        <HelpRoundedIcon />
                         Share knowledge  
                  </NavLink>
                  <NavLink to={`/community/createCommunity`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`}>
                       <CallToActionOutlinedIcon/>
                        Create community
                 </NavLink>
                 <NavLink to={`/community/postKnowledge/${id}/private`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`}>
                       <CallToActionOutlinedIcon/>
                        Post knowledge
                 </NavLink>
                   <NavLink to={`/community/inviteStatus`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`}>
                       <PersonAddAlt1Outlined/>
                        Invite status
                  </NavLink>
                 </div>}
              <div className="friendContainerRightContent">
                {/* <HomePageQuestionSection/> */}
                {/* <CommunityInviteStatus/> */}
                <Outlet context={{communityType}}/>
              </div>
          </div>
       }
    </div>
  )
}
