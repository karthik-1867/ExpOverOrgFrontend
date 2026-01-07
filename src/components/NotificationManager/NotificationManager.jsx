
import React, { use, useEffect, useState } from 'react'
import PeopleLoader from '../PeopleLoader/PeopleLoader'
import HomeQueryPostItemsLoader from '../HomequerypostItemsLoader/HomeQueryPostItemsLoader'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import CallToActionOutlinedIcon from '@mui/icons-material/CallToActionOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';

import { NavLink } from 'react-router-dom';
import FilterLoader from '../FilterLoader/FilterLoader';
import axios from 'axios';
import Filter from '../Filter/Filter';
export default function NotificationManager() {

  const [users,setUsers] = useState([]);
  const [includeUsers,setIncludeUsers] = useState([]);
  const [excludeUsers,setExcludeUsers] = useState([]);
  const [includeUserList,setIncludeUserList] = useState([]);
  const [excludeUserList,setExcludeUserList] = useState([]);

  const [selectUserType,setSelectUserType] = useState('include');
  const [loading,setLoading] = useState(false);
  const [category,setCategory] = useState('friend');
  const arr = Array(10).fill().map((_, i) => i);
  console.log("includeUsers",includeUsers)
  console.log("excludeUsers",excludeUsers)
  console.log("data from filter includeUserList,excludeUserList",includeUserList,excludeUserList)


    const getUser = async() => {
            try{
                setUsers([]);
                setLoading(true);
                const user = await axios.get(`${process.env.REACT_APP_URL}/Notification/getNotificationFilters/${category}`,{withCredentials:true})
                console.log("userdetail",user.data)
                let usersdata;
                if(category==='friend'){
                     usersdata = user.data.map((item)=>item.friendId);
                }  
                
                if(category==='expert'){
                     usersdata = user.data.map((item)=>item.expertId);
                }
                console.log("frieends",usersdata)
                setUsers(usersdata);
            

                const incexcUsersData = user.data.map((item)=>{  

                    if(category==='friend'){
                        return {filterType:item.status,...item.friendId}
                    }
                    if(category==='expert'){
                        return {filterType:item.status,...item.expertId}
                    }

                   
                });

                
                setIncludeUsers(incexcUsersData.filter((item)=>item.filterType==='allow'));
                setExcludeUsers(incexcUsersData.filter((item)=>item.filterType==='block'));
                setIncludeUserList([]);
                setExcludeUserList([]);
                setLoading(false);

            }catch(e){
                    console.log(e);
            }
    }


  useEffect(() => {

        getUser();

    }, [category]);

    const handleSelectUserType = (type) => {
            setSelectUserType(type);
    }

    const handleCategorySelect = (type) => {
            console.log("type selected",type)
    }

    const handleList=(data,type) => {
            console.log("data from filter",data,type)
            if(type==='include'){
                setExcludeUserList([...excludeUserList,data]);
            
            }
            if(type==='Exclude'){
                setIncludeUserList([...includeUserList,data]);  
            }
            if(type==='Removeinclude'){
                 setExcludeUserList(excludeUserList.filter((item)=>item!==data));
            }
            if(type==='RemoveExclude'){
               
                setIncludeUserList(includeUserList.filter((item)=>item!==data));
            }
    }

    const handleSubmitFilters = async(type) => {
        try{
            if(type==='include'){
                  console.log("excludeUserList",excludeUserList)
                  const includeUsers = users.map((item)=>item._id).filter((item)=>!excludeUserList.includes(item));
                  console.log("includeUsers to be sent",includeUsers)
                  await axios.post(`${process.env.REACT_APP_URL}/Notification/updateNotificationFriendFilter`,{includeList:includeUsers,excludeList:excludeUserList,type:category},{withCredentials:true});
            }
            if(type==='Exclude'){
  
                   console.log("includeUserList",includeUserList)  
                   const excludeUsers = users.map((item)=>item._id).filter((item)=>!includeUserList.includes(item));
                   await axios.post(`${process.env.REACT_APP_URL}/Notification/updateNotificationFriendFilter`,{includeList:includeUserList,excludeList:excludeUsers,type:category},{withCredentials:true});
                   console.log("excludeUsers to be sent",excludeUsers)
           }

           getUser();
        }catch(e){
            console.log(e);
        }
    }



  return (
              <div className="NotificationBox">

                 <div className="chooseBox" style={{display:'flex',gap:'5px'}}>
                  <button className={`${category === 'friend' ? 'All' : 'unSelected'}`} onClick={()=>setCategory('friend')}>
                    <ConnectWithoutContactOutlinedIcon/>
                    Friends
                    </button>
                   <button className={`${category === 'expert' ? 'All' : 'unSelected'}`} onClick={()=>setCategory('expert')}>
                    <ContactPageOutlinedIcon/>
                    Experts
                    </button>
                    <button className={`${category === 'community'? 'All' : 'unSelected'}`} onClick={()=>setCategory('community')}>
                     <ForumIcon/>
                     public community
                    </button>
                    <button className={`${category === 'community' ? 'All' : 'unSelected'}`} onClick={()=>setCategory('community')}>
                   <ForumIcon/>
                    Private community
                    </button>
                </div>
                <div className='NotificationMessageContainer'>

                          
                          <div className="NotificationLeftContainer">

                            <div className="SaveHeadingWrapper">
                                    <div class="HomeRecommendedHeading2">
                                    <FeaturedPlayListOutlinedIcon/> Exlude Filter
                                    </div>
                                    <div class="expertTrackOwnerFollow" onClick={()=>handleSubmitFilters('Exclude')}><SaveAsOutlinedIcon/></div>
                            </div>
                            <ul className='NotificationLeft'>
                                {      
                                   loading === true &&  arr.map((i)=>
                                    (<FilterLoader type='Exclude' />)
                                    )  
                                }
                                {
                                    loading === false && users.map((data)=>
                                    (<Filter data={data} type='Exclude' key={data._id}  fullData={users} handleList={handleList} singleChange='NotAllow' getUser={getUser}/>)
                                    )
                                }
                            </ul>
                          </div>
                           <div className="NotificationLeftContainer">

                              <div className="SaveHeadingWrapper">
                                    <div class="HomeRecommendedHeading2">
                                    <FeaturedPlayListOutlinedIcon/>Include Filter


                                    </div>

                                   <div class="expertTrackOwnerFollow" onClick={()=>handleSubmitFilters('include')}><SaveAsOutlinedIcon/></div>
                             
                                   
                            </div>                
                             <ul className='NotificationLeft'>
                                {      
                                   loading === true &&  arr.map((i)=>
                                    (<FilterLoader type='include' />)
                                    )  
                                }
                                {
                                    loading === false && users.map((data)=>
                                    (<Filter data={data} type='include' key={data._id}  fullData={users} handleList={handleList} singleChange='NotAllow' getUser={getUser}/>)
                                    )
                                }
                            </ul>
                           </div>
                         
                             <div className="NotificationLeftContainer">
                                <div className="chooseBox" style={{display:'flex',gap:'5px'}}>
                                    <button className={`${selectUserType === 'include' ? 'All' : 'unSelected'}`} onClick={()=>handleSelectUserType('include')}>
                                        <ConnectWithoutContactOutlinedIcon/>
                                         Included 
                                        </button>
                                    <button className={`${selectUserType === 'Exclude' ? 'All' : 'unSelected'}`} onClick={()=>handleSelectUserType('Exclude')}>
                                        <ContactPageOutlinedIcon/>
                                         Exluded
                                        </button>
                                </div>  
                                <ul className='NotificationLeft'>
                                    {      
                                        loading === true &&  arr.map((i)=>
                                        (<FilterLoader type='include' />)
                                        )
                                    }
                                    {
                                        loading === false && (selectUserType === 'include' ? includeUsers : excludeUsers).map((data)=>
                                            <Filter data={data} type={selectUserType} key={data._id}  fullData={users} handleList={handleList} singleChange='Allow' getUser={getUser} category={category}/>
                                        )
                                    }
                                </ul>
                             </div>
                       


                </div>
          </div>
  )
}
