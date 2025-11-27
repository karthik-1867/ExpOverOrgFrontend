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
import PeopleLoader from '../../components/PeopleLoader/PeopleLoader';
import Nodata from '../../components/Nodata/Nodata';
import HomeQueryPostItemsLoader from '../../components/HomequerypostItemsLoader/HomeQueryPostItemsLoader';

export default function ExpertTrack() {
  const [type,SetType] = useState('AllUser');
  const [loading,setLoading] = useState(false);
  const [section,setSection] = useState('questions')
  const [tab,setTab] = useState(false);
  const [api,setApi] = useState('expertTrack')
  const [alluser,setAllUser] = useState([]);
  const [id,setId] = useState(); 
  const navigate = useNavigate();


  console.log("alluser",alluser)
  console.log("setid",id)
  const arr = Array(10).fill().map((_, i) => i);

  

      const getUser = async() => {
          try{
               setAllUser([]);
               setLoading(true);
               if(type === 'AllUser'){
                    
                    navigate(`/expertTrack/introDetail/loading`)
                    const user = await axios.get(`${process.env.REACT_APP_URL}/expert/getAllYetToBeFollowedExpertList`,{withCredentials:true})
                    navigate(`/expertTrack/introDetail/${user.data[0]._id}`)
                    setAllUser(user.data); // user.data is already an array of users
                     setId(user?.data[0]._id)
                     setSection('introDetail')
                     
               }else{
                   
                    navigate(`/expertTrack/questions/loading`);
                    const user = await axios.get(`${process.env.REACT_APP_URL}/expert/getFollowedExperts`,{withCredentials:true})
                    // getExpertsList returns array of expert documents with populated expertId field
                    const users = user.data.map(expert => expert.expertId)
                    navigate(`/expertTrack/questions/${users[0]?._id}`);
                    setTab(true)
                    setSection('questions')
                    setId(users[0]?._id)
                    setAllUser(users); // extract just the expert user objects
                    
               }
               setLoading(false);
           
          }catch(e){
               console.log(e);
          }
      }


  useEffect(()=>{

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

     const handleFollow = async(userId) => {
          try{
               if(type === 'AllUser'){
                    await axios.post(`${process.env.REACT_APP_URL}/expert/followExpert/${userId}`,{},{withCredentials:true})
               }else{
                    await axios.delete(`${process.env.REACT_APP_URL}/expert/unfollowExpert/${userId}`,{withCredentials:true})
               }
               getUser();
          }catch(e){
               console.log(e)
          }
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
              <ul className='expertTrackContainerLists2'>
                   {alluser?.map((user)=>(
                      <>
                       <ExpertTrackListItems key={user._id} data={user} setId={setId} section={section} api={api} type={type} handleFollow={handleFollow}/>
                      
                       </>
                    ))
                   }
                   {
                     loading==true &&
                     
                       arr.map((i)=>
                        (<PeopleLoader type={type}/>)
                       )
                        
                       
                   }
                   {
                    alluser.length==0 && <Nodata type='left' message='follow user'/>
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
                 {alluser.length!=0&&<Outlet/>}
                 {(alluser.length === 0 && loading === false)
                    ? <Nodata type='right' message='No data as u following 0 experts'/>
                    : 
                    loading === true 
                    ?
                    
                    <div className="HomeQueryPostSection">
                         {       
                              arr.map((i)=>
                              (<HomeQueryPostItemsLoader/>)
                              )
                         }
                    </div>
                    :
                    <></>
                    
                    
                    }
              </div>
       </div>
       }
    </div>
  )
}
