import React, { useEffect, useState } from 'react'
import "../IntroDetailCommunity/introdetailcommunity.css"
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeQueryPostItemsLoader from '../HomequerypostItemsLoader/HomeQueryPostItemsLoader';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import HomeQueryPostItems from '../HomeQueryPostItems/HomeQueryPostItems';
import AnswerList from '../AnswerList/AnswerList';
import Nodata from '../Nodata/Nodata';
import SwipeRightOutlinedIcon from '@mui/icons-material/SwipeRightOutlined';
import axios from 'axios';
import { useOutletContext, useParams } from 'react-router-dom';
import KnowledgeList from '../KnowledgeList/KnowledgeList';
import KnowledgeUserIntroList from '../KnowledgeUserIntroList/KnowledgeUserIntroList';
import KnowledgeUserIntroListLoader from '../KnowledgeUserIntroListLoader/KnowledgeUserIntroList';
export default function IntroDetailCommunity() {
  const [loading,setLoading] = useState(false)
  const [detail,setDetail] = useState({})
  const [users,setUsers] = useState([]);
  const [knowledge,setKnowledge] = useState([])
  const arr = Array(10).fill().map((_, i) => i);
  const [levelsCount,setLevelsCount] = useState({'Newbie':0,'Explorer':0,'Achiever':0,'Techgeek':0,'Veteran':0,'Marque':0,'Elite':0,'Legendary':0})


  const communityId = useParams();
  const { communityType } = useOutletContext();
  
  console.log("comuni",levelsCount,communityType)

  useEffect(()=>{

          const getKnow = async() => {
              try{
                  setLoading(true)
                  let api;
                  if(communityType === 'public'){
                    api = 'getPublicCommunityDetailsById'
                  }else{
                    api = 'getPrivateCommunityDetailsById'
                  }

                  const getKnowledge = await axios.get(`${process.env.REACT_APP_URL}/community/${api}/${communityId.communityId}`,{withCredentials:true})
                  console.log("getKnowledge values",getKnowledge.data)

                  setDetail(getKnowledge.data[0])
                  setKnowledge(getKnowledge.data[0].knowledge)
                  setUsers(getKnowledge.data[0].usersDetail)
                  const grouped = getKnowledge.data[0].usersDetail.reduce((acc, item) => {
                        const key = item.level;

                        if (!acc[key]) {
                            acc[key] = [];            // create array if not exists
                        }

                        acc[key].push(item);        // add the row
                        return acc;
                    }, {});

                    console.log("grouped values",grouped,levelsCount)
                    setLevelsCount({'Newbie':grouped?.Newbie?.length ?? 0,'Explorer':grouped?.Explorer?.length ?? 0,'Achiever':grouped?.Achiever?.length ?? 0,'Techgeek':grouped?.Techgeek?.length ?? 0,'Veteran':grouped?.Veteran?.length ?? 0,'Marque':grouped?.Marque?.length ?? 0,'Elite':grouped?.Elite?.length ?? 0,'Legendary':grouped?.Legendary?.length ?? 0})

                    setLoading(false)


              }catch(e){
                  console.log(e)
              }
          }

          getKnow()
  },[communityId])
  
  return (
    <div className='Introdetailcommunitycontainer'>
        <div className="IntroDetailCommunityLeftSide">
                <div className="IntroDetails2">
                    {loading == false ? 
                    // <div className="IntroDetailsBanner">
                        <img src={detail.communityProfileImg} className='IntroImage2'/>
                    //      <div className="overlay"></div>
                    //       <div className="text-content">
                    //         <h1>{detail.name}</h1>
                    //     </div>
                    // </div>
                     :
                        <div className="IntroImageLoader"></div>}
                    <div className="details2">
                            <div className="singleDetail2">

                                <div className="DetailWrapper">
                                    {/* <span className='DeatailIcon orangeDetail'><AccountCircleOutlinedIcon/></span> */}
                                     <img src="https://res.cloudinary.com/dnitpjr1v/image/upload/v1767004834/legendary_abxyo2.png" className='IntroImageIcon'/>
                                    
                                    <div className="TextWrapper">
                                        <span className='BigDetail'>Level - Legendary</span>
                                        {!loading && <span className='Detail'>Members : {levelsCount.Legendary}</span>}
                                        {loading && <span className='DetailLoader w65'></span>}
                                    </div>
                                </div>

                            
                            </div>
                            <div className="singleDetail2">
                                <div className="DetailWrapper">
                                    {/* <span className='DeatailIcon redDetail'><EmailOutlinedIcon/></span> */}
                                    
                                    <img src="https://res.cloudinary.com/dnitpjr1v/image/upload/v1767004799/elite_c63zze.png" className='IntroImageIcon'/>
                                    <div className="TextWrapper">
                                        <span className='BigDetail'>Level - Elite</span>
                                        {!loading && <span className='Detail'>Members : {levelsCount.Elite}</span>}
                                        {loading && <span className='DetailLoader w75'></span>}
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="singleDetail2">
                                <div className="DetailWrapper">
                                    {/* <span className='DeatailIcon purpleDetail'><WorkOutlinedIcon/></span> */}

                                    
                                     <img src="https://res.cloudinary.com/dnitpjr1v/image/upload/v1767004846/marque_k7xhoe.png" className='IntroImageIcon'/>
                                    
                                    <div className="TextWrapper">
                                        <span className='BigDetail'>Level - Marque</span>
                                        {!loading &&<span className='Detail'>Members : {levelsCount.Marque}</span>}
                                        {loading && <span className='DetailLoader w40'></span>}
                                    </div>
                                </div>
                                
                                
                                
                            </div>
                            
                            <div className="singleDetail2">
                                <div className="DetailWrapper">
                                    {/* <span className='DeatailIcon pinkDetail'><StarHalfOutlinedIcon/></span> */}
                                    <img src="https://res.cloudinary.com/dnitpjr1v/image/upload/v1767004883/veteran_olvryl.png" className='IntroImageIcon'/>
                                    <div className="TextWrapper">
                                        <span className='BigDetail'>Level - Veteran</span>
                                        {!loading && <span className='Detail'>Members : {levelsCount.Veteran}</span>}
                                        {loading && <span className='DetailLoader w60'></span>}
                                    </div>
                                </div>
                                
                           </div>
                            <div className="singleDetail2">

                                <div className="DetailWrapper">
                                    {/* <span className='DeatailIcon orangeDetail'><AccountCircleOutlinedIcon/></span> */}
                                    <img src="https://res.cloudinary.com/dnitpjr1v/image/upload/v1767004867/techgeek_pqgdqn.png" className='IntroImageIcon'/>
                                    
                                    <div className="TextWrapper">
                                        <span className='BigDetail'>Level - Techgeek</span>
                                        {!loading && <span className='Detail'>Members : {levelsCount.Techgeek}</span>}
                                        {loading && <span className='DetailLoader w65'></span>}
                                    </div>
                                </div>

                            
                            </div>
                            <div className="singleDetail2">
                                <div className="DetailWrapper">
                                    {/* <span className='DeatailIcon redDetail'><EmailOutlinedIcon/></span> */}
                                     
                                     <img src="https://res.cloudinary.com/dnitpjr1v/image/upload/v1767004812/achiver_vmnipb.png" className='IntroImageIcon'/>
                                
                                    <div className="TextWrapper">
                                        <span className='BigDetail'>Level - Achiever</span>
                                        {!loading && <span className='Detail'>Members : {levelsCount.Achiever}</span>}
                                        {loading && <span className='DetailLoader w75'></span>}
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="singleDetail2">
                                <div className="DetailWrapper">
                                    {/* <span className='DeatailIcon purpleDetail'><WorkOutlinedIcon/></span> */}
                                     <img src="https://res.cloudinary.com/dnitpjr1v/image/upload/v1767027277/explorer_igivyk.png" className='IntroImageIcon'/>
                                    
                                    
                                    <div className="TextWrapper">
                                        <span className='BigDetail'>Level - Explorer</span>
                                        {!loading &&<span className='Detail'>Members : {levelsCount.Explorer}</span>}
                                        {loading && <span className='DetailLoader w40'></span>}
                                    </div>
                                </div>
                                
                                
                                
                            </div>
                            
                            <div className="singleDetail2">
                                <div className="DetailWrapper">
                                    {/* <span className='DeatailIcon pinkDetail'><StarHalfOutlinedIcon/></span> */}
                                    <img src="https://res.cloudinary.com/dnitpjr1v/image/upload/v1767027292/Newbie_iqnbn1.png" className='IntroImageIcon'/>
                                    <div className="TextWrapper">
                                        <span className='BigDetail'>Level - Newbie</span>
                                        {!loading && <span className='Detail'>Members : {levelsCount.Newbie}</span>}
                                        {loading && <span className='DetailLoader w60'></span>}
                                    </div>
                                </div>
                                
                           </div>
                        
                    </div>

                </div>
                <div className="friendInviteStatusLeftButtons">
                    <button className={`friendInviteStatusLeftButton ActiveButton`} style={{width:'100%',borderRadius:'10px'}}>
                        <SwipeRightOutlinedIcon/>
                        Knowledge
                    </button>
                </div>
                <div className="FriendsInnerContent">
                    <div className="FriendsInnerContentSection2" style={{display:'flex',flexDirection:'column',gap:'1px',overflowX:'scroll',overflowX:'hidden',height:'60vh'}}>
                            {
                                loading === true &&
                                arr.map((i)=>
                                (<HomeQueryPostItemsLoader/>)
                                )
                            }
                            {
                                loading === false && knowledge.map((i)=>(
                                    <KnowledgeList data={i} key={i._id}/>
                                ))
                            }
                            {
                                loading === false &&  knowledge.length==0 && 
                                <div style={{width:'100%',border:'1px solid white',boxSizing:'border-box'}}>
                                    <Nodata type='left' message='No Knowledge shared yet'/>
                                </div>
                            }


                    </div>
                </div>

        </div>
        <div className="IntroDetailCommunityRightSide">
              <div className="HomeRecommendedHeading" style={{marginBottom:'5px'}}>
                    <Groups2RoundedIcon/>
                    Members
               </div>
             <ul className='expertTrackContainerLists2' style={{padding:'0px',display:'flex',flexDirection:'column',gap:'5px'}}>

            {
                loading === true && 
                 arr.map((i)=>
                (<KnowledgeUserIntroListLoader/>)
                )
            }
            {
                 loading === false && users.map((i)=>(
                    <KnowledgeUserIntroList data={i} key={i._id}/>
                ))
            }
            {  
                 loading === false && users.length === 0 &&
                      <Nodata type='left' message='No Knowledge shared yet'/>
               
            }
            </ul>
        </div>
    </div>
  )
}
