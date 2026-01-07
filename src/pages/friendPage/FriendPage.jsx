import React, { useEffect, useState } from 'react'
import "../expertTrack/expertTrack.css" 
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import CallToActionOutlinedIcon from '@mui/icons-material/CallToActionOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import { Users } from '../../Dummy';
import ExpertTrackListItems from '../../components/expertTrackListItems/ExpertTrackListItems';
import HomePageQuestionSection from '../../components/HomePageQuestionSection/HomePageQuestionSection';
import { PersonAddAlt1Outlined } from '@mui/icons-material';
import FriendinviteStatus from '../../components/inviteStatus/FriendinviteStatus';
import axios from 'axios';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import PeopleLoader from '../../components/PeopleLoader/PeopleLoader';
import Nodata from '../../components/Nodata/Nodata';
import HomeQueryPostItemsLoader from '../../components/HomequerypostItemsLoader/HomeQueryPostItemsLoader';

export default function FriendPage() {
const [searchTokenSelected,setSearchTokenSelected] = useState({selected:'false',data:{}})
    const [type,SetType] = useState('AllUser');
    const [tab,setTab] = useState(false);
    const [section,setSection] = useState('questions')
    const [api,setApi] = useState('friendPage')
      const [loading,setLoading] = useState(false);
    const [alluser,setAllUser] = useState([]);
    const [id,setId] = useState(''); 
     const navigate = useNavigate();
  
    console.log("alluser",alluser)
    console.log("setid",id)
    const arr = Array(50).fill().map((_, i) => i);
      
    const getUser = async() => {
            try{
                 setAllUser([]);
                 setId('')
                 setLoading(true);
                 if(type === 'AllUser'){
                      navigate(`/friendPage/introDetail/loading`)
                      const user = await axios.get(`${process.env.REACT_APP_URL}/friends/getFriendsYetToBeFollowed`,{withCredentials:true})
                      setAllUser(user.data); 
                      setId(user.data[0]?._id)
                      setSection('introDetail')
                      navigate(`/friendPage/introDetail/${user.data[0]?._id}`)
                 }else{
                         navigate(`/friendPage/questions/loading`);
                      const user = await axios.get(`${process.env.REACT_APP_URL}/friends/friendsList`,{withCredentials:true})
                       console.log("userdetail",user)
                       setTab(true)
                       navigate(`/friendPage/questions/${user.data[0]?._id}`);
                       setId(user.data[0]?._id)
                       setAllUser(user?.data);    
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
            setLoading(true)
            setSection(type);
            if(type === 'questions')
            {
               setTab(true)
            }else{
               setTab(false)
            }
            setLoading(false)
       }

     const leftButtonSection = () =>{
          setSection('introDetail')
          SetType('AllUser')
       }


     const handleFollow = async(userId) => {
          try{
               if(type === 'AllUser'){
                    setLoading(true);
                    await axios.post(`${process.env.REACT_APP_URL}/friends/inviteFriend/${userId}`,{},{withCredentials:true})
                    getUser();

               }else{
                     navigate(`/friendPage/questions/loading`);
                    await axios.delete(`${process.env.REACT_APP_URL}/friends/unfriend/${userId}`,{withCredentials:true})
                    // const user = await axios.get(`${process.env.REACT_APP_URL}/friends/friendsList`,{withCredentials:true})
                    // navigate(`/friendPage/questions/${user.data[0]?._id}`);
                    getUser();
                    // setAllUser(user.data)
                    // setId(user.data[0]?._id)

                    
               }
               
          }catch(e){
               console.log(e)
          }
     }

     const handleUpdate = async() => {

           const user = await axios.get(`${process.env.REACT_APP_URL}/friends/friendsList`,{withCredentials:true})
           console.log("userdetail",user)
           setAllUser(user.data); 
           setId(user.data[0]?._id)
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
              <ul className='expertTrackContainerLists2'>
                   {alluser?.map((user)=>(
                       <ExpertTrackListItems key={user.id} data={user} setId={setId} id={id} section={section} api={api} type={type} handleFollow={handleFollow}/>
                   ))}
                    {
                    loading==true &&
                    
                         arr.map((i)=>
                         (<PeopleLoader type={type} category='friend'/>)
                         )
                         
                         
                    }
                    {
                         alluser.length==0 && <Nodata type='left' message='follow user'/>
                    }
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
                    <NavLink to={`/friendPage/inviteStatus`} style={{textDecoration:'none'}} className={({ isActive }) => `${isActive ? 'expertTrackContainerRightButton ActiveButton' : 'expertTrackContainerRightButton'}`} onClick={()=>handleTabAndSection('inviteStatus')}>
                       <PersonAddAlt1Outlined/>
                        Invite status
                  </NavLink>
              </div>}
              {type=='AllUser' ? 
              <div className="friendContainerRightContent">
                     <Outlet context={{ handleUpdate,searchTokenSelected }}/>
               </div>
               :
                <div className="friendContainerRightContent">
                {/* <HomePageQuestionSection/> */}
                 {alluser.length!=0 &&  <Outlet context={{ handleUpdate,searchTokenSelected }} /> }
                 {(alluser.length === 0 && loading === false )
                                     ? 
                                     
                                     (section==='inviteStatus' ?     
                                     <Outlet context={{ handleUpdate }}/>
                                        :
                                        <Nodata type='right' message='No data as u following 0 experts'/>
                                     
                                     )
                                     
                                     : 
                                     
                                     loading === true 
                                                        ?
                                                         <div className="HomeQuery">
                                                                      <div className="HomeQueryHeading">

                                                                           <div className="HomeQueryNameAndImg">
                                                                                     <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" className='HomeQueryImgProfile'/>
                                                                                     <div className="HomeQueryNameSection">

                                                                                     Karthik
                                                                                     <span className='HomeQueryDesign'>Software engineer</span>
                                                                                     </div>
                                                                           </div>
                                                                           <div className="HomeContriButionAndFollowers">

                                                                                     <div className="HomeUrFollower">
                                                                                          <GroupOutlinedIcon/>
                                                                                          Follower : 300
                                                                                     </div>
                                                                                     <div className="HomeUrContribution">
                                                                                          <EmojiObjectsOutlinedIcon/>
                                                                                          Solution contributed : 20
                                                                                     </div>
                                                                                     <div className="HomeUrFriend">
                                                                                          <ConnectWithoutContactOutlinedIcon/>
                                                                                          Friend : 30
                                                                                     </div>
                                                                           </div>
                                                                      </div>
                                                        <div className="HomeQueryPostSection">
                                                             {       
                                                                  arr.map((i)=>
                                                                  (<HomeQueryPostItemsLoader/>)
                                                                  )
                                                             }
                                                        </div>
                                                        </div>
                                                        :
                                                        <></>  
               }
              </div>}
       </div>
    </div>
  )
}
