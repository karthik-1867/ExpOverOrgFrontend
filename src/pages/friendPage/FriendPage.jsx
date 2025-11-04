import React, { useEffect, useState } from 'react'
import "../expertTrack/expertTrack.css" 
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
import axios from 'axios';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

export default function FriendPage() {

    const [type,SetType] = useState('AllUser');
    const [tab,setTab] = useState(false);
    const [section,setSection] = useState('questions')
    const [api,setApi] = useState('friendPage')
    const [alluser,setAllUser] = useState([]);
    const [id,setId] = useState(''); 
     const navigate = useNavigate();
  
    console.log("alluser",alluser)
    console.log("setid",id)
      
    useEffect(()=>{
        const getUser = async() => {
            try{
  
                 if(type === 'AllUser'){
                      const user = await axios.get(`${process.env.REACT_APP_URL}/friends/getFriendsYetToBeFollowed`,{withCredentials:true})
                      setAllUser(user.data); 
                      setId(user.data[0]._id)
                      setSection('introDetail')
                      navigate(`/friendPage/introDetail/${user.data[0]._id}`)
                 }else{
                      const user = await axios.get(`${process.env.REACT_APP_URL}/friends/friendsList`,{withCredentials:true})
                       console.log("userdetail",user)
                       setTab(true)
                       navigate(`/friendPage/questions/${user.data[0]._id}`);
                       setId(user.data[0]._id)
                       setAllUser(user.data);    
                 }
             
            }catch(e){
                 console.log(e);
            }
        }
        getUser()
       },[type])
  

       const handleTabAndSection = (type) =>{
            setSection(type);
            if(type === 'questions')
            {
               setTab(true)
            }else{
               setTab(false)
            }
       }

     const leftButtonSection = () =>{
          setSection('introDetail')
          SetType('AllUser')
       }

  return (
    <div className='expertTrackContainer'>
       <div className="expertTrackcontainerLeft">
              <div className="expertTrackContainerLeftButtons">
                 <button className={`expertTrackContainerLeftButton ${type === 'AllUser' && 'ActiveButton'}`} onClick={leftButtonSection}>
                       <PeopleAltOutlinedIcon/>
                       All user 
                  </button>
                  <button className={`expertTrackContainerLeftButton ${type === 'friends' && 'ActiveButton'}`} onClick={()=>SetType('friends')}>
                       <ContactPageOutlinedIcon/>
                       Followed Friend
                  </button>
              </div>
              <ul className='expertTrackContainerLists'>
                   {alluser.map((user)=>(
                       <ExpertTrackListItems key={user.id} data={user} setId={setId} section={section} api={api}/>
                   ))}
              </ul>
       </div>
       <div className="expertTrackContainerRight">
            {type !== 'AllUser' && <div className="expertTrackContainerRightButtons">
                 <NavLink to={`/friendPage/questions/${id}`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive || tab === true? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`} onClick={()=>handleTabAndSection('questions')}>
                        <HelpRoundedIcon />
                         Questions  
                  </NavLink>
                   <NavLink to={`/friendPage/answer/${id}`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`} onClick={()=>handleTabAndSection('answer')}>
                       <CallToActionOutlinedIcon/>
                        answers
                  </NavLink>
                    <NavLink to={`/friendPage/knowledge/${id}`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`} onClick={()=>handleTabAndSection('knowledge')}>
                       <PsychologyAltOutlinedIcon/>
                       Knowledge
                  </NavLink>
                    <NavLink to={`/friendPage/inviteStatus`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`} onClick={()=>handleTabAndSection('knowledge')}>
                       <PersonAddAlt1Outlined/>
                        Invite status
                  </NavLink>
              </div>}
              <div className="friendContainerRightContent">
                {/* <HomePageQuestionSection/> */}
                 <Outlet/>
              </div>
       </div>
    </div>
  )
}
