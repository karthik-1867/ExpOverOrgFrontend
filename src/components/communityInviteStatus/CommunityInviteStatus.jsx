import React, { useEffect, useState } from 'react'
import "../inviteStatus/friendInviteStatus.css"
import SwipeRightOutlinedIcon from '@mui/icons-material/SwipeRightOutlined';
import SwipeLeftOutlinedIcon from '@mui/icons-material/SwipeLeftOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import FriendsItems from '../friendsItems/FriendsItems';
import { Users } from '../../Dummy';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import axios from 'axios';
import CommunityList from '../CommunityList/CommunityList';
import CommunityMembersInvite from '../CommunityMembersInvite/CommunityMembersInvite';

export default function CommunityInviteStatus() {
   const [communityList,setCommunityList] = useState([]);
   const [fulldata,setFulldata] = useState([])
   const [selectedId,setSelectedId] = useState();

   console.log("community list",communityList,selectedId)

   useEffect(()=>{
       const community = async() =>{
            try{
                const pendingInvites = await axios.get(`${process.env.REACT_APP_URL}/community/pendingInviteCommunity`,{withCredentials:true})
                console.log("pending invites",pendingInvites.data);
                //const community = [...new Set(pendingInvites.data.map((i)=>i.community))]

                const allCommunities = pendingInvites.data.map(i => i.community);

                console.log("commutr",allCommunities)

                const uniqueById2 = allCommunities.filter((c, idx, arr) =>
                arr.findIndex(x => x._id === c._id) === idx
                );

                setCommunityList(uniqueById2)
                setSelectedId(uniqueById2[0]._id)
                setFulldata(pendingInvites.data)


            }catch(e){
                console.log(e);
            }
       }

       community();
   },[])


   const updateCommunity = async(id) =>{
                console.log("updated commuinity called",id)
                const pendingInvites = await axios.get(`${process.env.REACT_APP_URL}/community/pendingInviteCommunity`,{withCredentials:true})
                console.log("pending invites",pendingInvites.data);
                const allCommunities = pendingInvites.data.map(i => i.community);

                console.log("commutr",allCommunities)

                const uniqueById2 = allCommunities.filter((c, idx, arr) =>
                arr.findIndex(x => x._id === c._id) === idx
                );

                setCommunityList(uniqueById2);
                if(uniqueById2.some((i)=>i.id===id)){
                   setSelectedId(id)
                }else{
                    setSelectedId(uniqueById2[0]?._id)
                }
                setFulldata(pendingInvites.data)
   }

  return (
        <div className='friendStatusContainer'>
        <div className="friendInviteStatusLeft2">
            <div class="HomeRecommendedHeading">
                    <Diversity2OutlinedIcon/>
                    Community
            </div>

            <ul className='expertTrackContainerLists'>
                 {communityList.map((user)=>(
                    <CommunityList key={user.id} data={user} fulldata={fulldata} setSelectedId={setSelectedId}/>
                ))} 
            </ul>
        </div>
        <div className="freindInviteStatusRight2">
            <div class="HomeRecommendedHeading">
                    <Diversity2OutlinedIcon/>
                    Member request
            </div>

             <CommunityMembersInvite data={selectedId} fulldata={fulldata} updateCommunity={updateCommunity}/>       
                         

        </div>

    </div> 
  )
}
