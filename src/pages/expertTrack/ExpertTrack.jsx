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
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ExpertTrack() {
  const [type,SetType] = useState('AllUser');
  const [section,setSection] = useState('questions')
  const [tab,setTab] = useState(false);
  const [api,setApi] = useState('expertTrack')
  const [alluser,setAllUser] = useState([]);
  const [id,setId] = useState(); 
  const navigate = useNavigate();


  console.log("alluser",alluser)
  console.log("setid",id)
    
  useEffect(()=>{
      const getUser = async() => {
          try{

               if(type === 'AllUser'){
                    const user = await axios.get(`${process.env.REACT_APP_URL}/expert/getAllYetToBeFollowedExpertList`,{withCredentials:true})
                    setAllUser(user.data); // user.data is already an array of users
                     setId(user.data[0]._id)
                     setSection('introDetail')
                     navigate(`/expertTrack/introDetail/${user.data[0]._id}`)
               }else{
                    const user = await axios.get(`${process.env.REACT_APP_URL}/expert/getFollowedExperts`,{withCredentials:true})
                    // getExpertsList returns array of expert documents with populated expertId field
                    const users = user.data.map(expert => expert.expertId)
                    setTab(true)
                    navigate(`/expertTrack/questions/${users[0]._id}`);
                    setId(users[0]._id)
                    setAllUser(users); // extract just the expert user objects
                    
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

       const leftButtonSection = (type,section) =>{
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
                  <button className={`expertTrackContainerLeftButton ${type === 'Expert' && 'ActiveButton'}`} onClick={()=>SetType('Expert')}>
                       <ContactPageOutlinedIcon/>
                       Followed Expert
                  </button>
              </div>
              <ul className='expertTrackContainerLists'>
                   {alluser?.map((user)=>(
                       <ExpertTrackListItems key={user._id} data={user} setId={setId} section={section} api={api}/>
                   ))
                   }
              </ul>
       </div>
       {type==='AllUser' ? 
         <div className="expertTrackContainerRight">
           <Outlet/>
         </div>
         :
          <div className="expertTrackContainerRight">
            <div className="expertTrackContainerRightButtons">
                 <NavLink to={`/expertTrack/questions/${id}`} end style={{textDecoration:'none'}} className={({ isActive }) => `${isActive || tab === true ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`} onClick={()=>handleTabAndSection('questions')}>               
                         <HelpRoundedIcon />
                         Author Questions  
                 </NavLink>
                  <NavLink to={`/expertTrack/answer/${id}`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`} onClick={()=>handleTabAndSection('answer')}>               
                       <CallToActionOutlinedIcon/>
                       Author answers
                   </NavLink>
                 <NavLink to={`/expertTrack/knowledge/${id}`}  style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`} onClick={()=>handleTabAndSection('knowledge')}>                
                       <PsychologyAltOutlinedIcon/>
                       Knowledge
                  </NavLink>
              </div>
              <div className="expertTrackContainerRightContent">
                 <Outlet/>
              </div>
       </div>
       }
    </div>
  )
}
