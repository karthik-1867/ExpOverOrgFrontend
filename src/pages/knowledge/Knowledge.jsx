import { useOutletContext, useParams } from "react-router-dom";
import KnowledgeList from "../../components/KnowledgeList/KnowledgeList";
import { useEffect, useState } from "react";
import axios from "axios";

import "../knowledge/knowledge.css"
import KnowLedgeUser from "../../components/KnowledgeUsers/KnowLedgeUser";
import { People } from "@mui/icons-material";
import HomeQueryPostItemsLoader from "../../components/HomequerypostItemsLoader/HomeQueryPostItemsLoader";
import Nodata from "../../components/Nodata/Nodata";
import KnowledgeLoader from "../../components/KnowledgeLoader/KnowledgeLoader";
import MemberLoader from "../../components/MemberLoader/MemberLoader";

export default function Knowledge({type}){
    const [knowledge,setKnowledge] = useState([]);
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);
    const [communityId,setCommunityId] = useState();
    const id = useParams();
    console.log("knowledge",knowledge,users)
    const { communityType } = useOutletContext();
    const arr = Array(50).fill().map((_, i) => i);



   useEffect(()=>{
      const knowledge = async() =>{
           try{
                     setLoading(true);
                     setKnowledge([])
                     if(type!='singleUserKnowledge'){
                       setUsers([])
                     }
                     setCommunityId(id.id)
                     if(type === 'community' && communityType=='public'){
                       const getKnowledge = await axios.get(`${process.env.REACT_APP_URL}/knowledge/getPublicKnowledgeByCommunityId/${id.id}`,{withCredentials:true})
                       console.log("getKnowledge values",getKnowledge.data)
                       const getUser = await axios.get(`${process.env.REACT_APP_URL}/community/getPublicCommunityUserList/${id.id}`,{withCredentials:true})
                       setKnowledge(getKnowledge.data);
                       setUsers(getUser.data)
                       console.log("getKnowledge",getKnowledge)
                     }else if(type === 'community' && communityType=='private'){
                       const getKnowledge = await axios.get(`${process.env.REACT_APP_URL}/knowledge/getPrivateKnowledgeByCommunityId/${id.id}`,{withCredentials:true})
                       console.log("getKnowledge values",getKnowledge.data)
                       const getUser = await axios.get(`${process.env.REACT_APP_URL}/community/getPrivateCommunityUserList/${id.id}`,{withCredentials:true})
                       setKnowledge(getKnowledge.data);
                       setUsers(getUser.data)
                       console.log("getKnowledge",getKnowledge)
                     }
                     
                     else if(type === 'singleUserKnowledge'){
                        const getKnowledge = await axios.get(`${process.env.REACT_APP_URL}/knowledge/getContentById/${id.communityId}/${id.id}`,{withCredentials:true})
                        console.log("getKnowledge by individal",getKnowledge)
                        setKnowledge(getKnowledge.data);
                     }
                     else{
                      const apiType = communityType === 'public' ? 'getPublicKnowledgeByUserId' : 'getPrivateKnowledgeByUserId'
                      const getKnowledge = await axios.get(`${process.env.REACT_APP_URL}/knowledge/${apiType}/${id.id}`,{withCredentials:true})
                       setKnowledge(getKnowledge.data);
                       console.log("getKnowledge by individal",getKnowledge)
                     }
                     setLoading(false);
          }catch(e)
          {
               console.log(e)
           }
      }

      knowledge();
   },[id])
    
    return(
        <>
         <div className="KnowledgeContainer" style={{width:'100%',boxSizing:'border-box'}}>
            <div className="knowledgeLeftSide">
              {knowledge?.map((item)=>(

                <KnowledgeList data={item} key={item._id}/>
              )) 
              }
               {
                  loading==true &&
                        arr.map((i)=>
                        (<KnowledgeLoader/>)
                        )
                }
                {
                      knowledge.length==0 && <Nodata type='left' message='No content posted yet'/>
                }
            </div>
            <div className="knowledgeRightSide">
                <div className="HomeRecommendedHeading" style={{marginBottom:"10px"}}>
                 <People/>
                  Members
               </div> 
                <ul className='expertTrackContainerLists'>
                    {users?.map((item)=>(
                        <KnowLedgeUser data={item} key={item._id} id={id.id} />
                      ))}
                      {
                        loading==true && users.length==0 && arr.map((i)=>(
                          <MemberLoader/>
                        ))
                      }
                </ul>
            </div>
         </div>
        </>
    )
}