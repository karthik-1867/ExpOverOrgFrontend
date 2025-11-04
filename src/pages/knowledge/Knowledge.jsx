import { useParams } from "react-router-dom";
import KnowledgeList from "../../components/KnowledgeList/KnowledgeList";
import { useEffect, useState } from "react";
import axios from "axios";

import "../knowledge/knowledge.css"
import KnowLedgeUser from "../../components/KnowledgeUsers/KnowLedgeUser";
import { People } from "@mui/icons-material";

export default function Knowledge({type}){
    const [knowledge,setKnowledge] = useState([]);
    const [users,setUsers] = useState([]);
    const id = useParams();
    console.log("knowledge",knowledge,users)



   useEffect(()=>{
      const knowledge = async() =>{
           try{
                     if(type === 'community'){
                       const getKnowledge = await axios.get(`${process.env.REACT_APP_URL}/knowledge/getPublicKnowledgeByCommunityId/${id.id}`,{withCredentials:true})
                       const getUser = await axios.get(`${process.env.REACT_APP_URL}/community/getPublicCommunityUserList/${id.id}`,{withCredentials:true})
                       setKnowledge(getKnowledge.data);
                       setUsers(getUser.data)
                       console.log("getKnowledge",getKnowledge)
                     }else if(type === 'singleUserKnowledge'){
                        const getKnowledge = await axios.get(`${process.env.REACT_APP_URL}/knowledge/getContentById/${id.communityId}/${id.id}`,{withCredentials:true})
                        setKnowledge(getKnowledge.data);
                     }
                     else{
                        const getKnowledge = await axios.get(`${process.env.REACT_APP_URL}/knowledge/getPublicKnowledgeByUserId/${id.id}`,{withCredentials:true})
                       setKnowledge(getKnowledge.data);
                       console.log("getKnowledge",getKnowledge)
                     }
          }catch(e)
          {
               console.log(e)
           }
      }

      knowledge();
   },[id])
    
    return(
        <>
         <div className="KnowledgeContainer" style={{padding:'10px 0px',width:'100%',boxSizing:'border-box'}}>
            <div className="knowledgeLeftSide">
              {knowledge?.map((item)=>(

                <KnowledgeList data={item} key={item._id}/>
              )) 
              }
            </div>
            <div className="knowledgeRightSide">
                <div className="HomeRecommendedHeading" style={{marginBottom:"10px"}}>
                 <People/>
                  Members
               </div> 
                <ul className='expertTrackContainerLists'>
                    {users.map((item)=>(
                        <KnowLedgeUser data={item} key={item._id} communityId={knowledge[0]?.communityId?._id}/>
                      ))}
                </ul>
            </div>
         </div>
        </>
    )
}