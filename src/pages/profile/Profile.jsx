import React, { useEffect, useState } from 'react'
import "../profile/profile.css"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
// import BadgesBig from '../../components/BadgesBig/BadgesBig';
 import "../../components/BadgesBig/BadgesBig.css"

import ExpertiseList from '../../components/ExpertiseList/ExpertiseList';
import axios from 'axios';
export default function Profile() {

  const [category,setCategory] = useState([]);
  const [urDetails,setUrDetails] = useState();
  const [obj,setObj] = useState();
  const [urCategory,setUrcategory] = useState([]);
  console.log("urdetasda",obj)

  useEffect(()=>{
       const getCat = async() => {
           const res = await axios.get(`${process.env.REACT_APP_URL}/category/getAllCategory`,{withCredentials:true});
           const res2 = await axios.get(`${process.env.REACT_APP_URL}/category/getUrCategory`,{withCredentials:true})
           const getUrDetails = await axios.get(`${process.env.REACT_APP_URL}/user/getYourDetails`,{withCredentials:true})
           console.log("getting ur details",getUrDetails.data[0])
           setUrDetails(getUrDetails.data[0]);
           console.log("cats",res.data)
           setCategory(res.data)
           setUrcategory(res2.data)
       }

       getCat();
  },[])

  useEffect(()=>{
            let count;
            switch (true) {
             case (urDetails?.upvotesCount > 120):
               setObj({'Newbie':'5','Explorer':'20','Achiever':'30','Techgeek':'50','Veteran':'75','Marque':'90','Elite':'100','Legendary':'120'}) 
               break;
             case (urDetails?.upvotesCount > 100):
                
               setObj({'Newbie':'5','Explorer':'20','Achiever':'30','Techgeek':'50','Veteran':'75','Marque':'90','Elite':'100','Legendary': urDetails?.upvotesCount}) 
               break;
             case urDetails?.upvotesCount > 90:
                count = urDetails?.upvotesCount - 90
               setObj({'Newbie':'5','Explorer':'20','Achiever':'30','Techgeek':'50','Veteran':'75','Marque':'90','Elite':urDetails?.upvotesCount,'Legendary':'0'})
               break;
             case urDetails?.upvotesCount > 75:
              count = urDetails?.upvotesCount - 75
              setObj({'Newbie':'5','Explorer':'20','Achiever':'30','Techgeek':'50','Veteran':'75','Marque':urDetails?.upvotesCount,'Elite':0,'Legendary':0})
               break;
             case urDetails?.upvotesCount > 50:
              count = urDetails?.upvotesCount - 50
               setObj({'Newbie':'5','Explorer':'20','Achiever':'30','Techgeek':'50','Veteran':urDetails?.upvotesCount ,'Marque':0,'Elite':0,'Legendary':0}) 
               break;
             case urDetails?.upvotesCount > 30:
              count = urDetails?.upvotesCount - 30
              setObj({'Newbie':'5','Explorer':'20','Achiever':'30','Techgeek':urDetails?.upvotesCount ,'Veteran':0,'Marque':0,'Elite':0,'Legendary':0}) 
               break;
             case urDetails?.upvotesCount > 20:
              count = urDetails?.upvotesCount - 20
              setObj({'Newbie':'5','Explorer':'20','Achiever':urDetails?.upvotesCount,'Techgeek':0,'Veteran':0,'Marque':0,'Elite':0,'Legendary':0})
               break;
             case urDetails?.upvotesCount > 5:
              count = urDetails?.upvotesCount - 5
               console.log("deafult",urDetails?.upvotesCount,(urDetails?.upvotesCount > 5))
               setObj({'Newbie':'5','Explorer':urDetails?.upvotesCount,'Achiever':0,'Techgeek':0,'Veteran':0,'Marque':0,'Elite':0,'Legendary':0})
               break;
             default:
               count = urDetails?.upvotesCount
               setObj({'Newbie':urDetails?.upvotesCount,'Explorer':0,'Achiever':0,'Techgeek':0,'Veteran':0,'Marque':0,'Elite':0,'Legendary':0})
               break;
           }
         },[urDetails])



  return (
    <div className='ProfileContainer'>
        <div className="ProfileLeft">
            {/* <div className="IntroDetailsBanner2"> */}
               {/* <div className="ImgWrapper"> */}
                        <img src="https://res.cloudinary.com/dnitpjr1v/image/upload/v1738475918/samples/man-on-a-street.jpg" className='profileImg2'/>
               {/* </div> */}
                         {/* <div className="overlay"></div>
                          <div className="text-content">
                            <h1>Karthik</h1>
                        </div> */}
            {/* </div> */}
            <div className="ProfileInfos">
                  <h1 className='ProfileHeading'>Personal details</h1>
                  {/* <label class="HomeQueryShortDesc" style={{marginBottom:'10px'}}><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1umw9bq-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DescriptionOutlinedIcon"><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z"></path></svg>Code</label> */}

                 
                  <div className="ProfileLoginInputs">
                        <label className="ProfileLabel">
                           <Person2OutlinedIcon className='ProfileIcon'/>
                            Username
                        </label>
                        <input
                            className="ProfileInput"
                            type="text"
                            name="text"
                            value='karthik'
                            placeholder="Enter username"
                            disabled
                            />
                            <EditOutlinedIcon className='ProfileEdit'/>
                    </div>
                    <div className="ProfileLoginInputs">
                        <label className="ProfileLabel">
                          <EmailOutlinedIcon className='ProfileIcon'/>
                            Email
                        </label>
                        <input
                            className="ProfileInput"
                            type="text"
                            name="email"
                           value='karthikv1867'
                            placeholder="Enter Email"
                            disabled
                            />
                            <EditOutlinedIcon className='ProfileEdit'/>
                    </div>
                     <div className="ProfileLoginInputs">
                        <label className="ProfileLabel">
                          <LocationOnOutlinedIcon className='ProfileIcon'/>
                            location
                        </label>
                        <input
                            className="ProfileInput"
                            type="text"
                            name="location"
                           value='Dandeli'
                            placeholder="Enter Location"
                            disabled
                            />
                            <EditOutlinedIcon className='ProfileEdit'/>
                    </div>
                    <div className="ProfileLoginInputs">
                        <label className="ProfileLabel">
                          <EmailOutlinedIcon className='ProfileIcon'/>
                            Designation
                        </label>
                        <input
                            className="ProfileInput"
                            type="text"
                            name="designation"
                           value='Software engineer'
                            placeholder="Enter Location"
                            disabled
                            />
                            <EditOutlinedIcon className='ProfileEdit'/>
                    </div>
                  

                    <div className="ProfileUpdateButton">
                      update
                    </div>
            </div>   
        </div>
        <div className="ProfileRight">
          <div className="ProfileRightUBox">
           <label class="HomeQueryShortDesc" style={{marginBottom:'10px'}}><DescriptionOutlinedIcon/>language expertise</label>
           <ul className='ProfileRightUl'>
               {category.map((i)=>(
                 <ExpertiseList data={i} key={i.id}/>
               ))}
               
           </ul>
          </div>
                      
          <div className="ProfileRightUBox">
            <label class="HomeQueryShortDesc" style={{marginBottom:'10px'}}><DescriptionOutlinedIcon/>Your choice</label>
            <ul className='ProfileRightUl'>
               
               { urCategory.map((i)=>(

                 <ExpertiseList data={i} key={i.id} />
               ))

               }
             
            </ul>
          </div>
        </div>
        <div className="ProfileMid">
            <div className="ProfileBadges">
                {/* <h1 className='ProfileHeading'>Badges</h1> */}
                <label class="HomeQueryShortDesc" style={{marginBottom:'10px'}}><DescriptionOutlinedIcon/>Badge</label>

                   <div className="BadgesWrapper">

                    <div class="main-wrapper flexCont orangeBadge" style={{width:'fit-content'}}>
                      <div class="badge orange">
                        <div class="circle"> <i class="fa fa-pied-piper txtSh" ></i></div>
                        <div class="ribbon">Newbie</div>
                      </div>
                      <div className="BadgeStats">Votes: {obj?.Newbie}/5  

                        <span className={`checkBox ${obj?.Newbie - 5 !== 0 && 'hide'}`}><CheckCircleRoundedIcon style={{fontSize:'16px'}}/></span>
                      </div>
                    </div>
                    <div class="main-wrapper flexCont yellowBadge" style={{width:'fit-content'}}>
                      <div class="badge yellow">
                        <div class="circle"> <i class="fa fa-bolt txtSh"></i></div>
                        <div class="ribbon">Explorer</div>
                      </div>
                      <div className="BadgeStats">Votes: {obj?.Explorer}/20 <span className={`checkBox ${obj?.Explorer - 20 !== 0 && 'hide' }`}><CheckCircleRoundedIcon style={{fontSize:'16px'}}/></span></div>
                    </div>
                  <div class="main-wrapper flexCont pingBadge" style={{width:'fit-content'}}>
                      <div class="badge pink">
                        <div class="circle"> <i class="fa fa-star txtSh"></i></div>
                        <div class="ribbon">Achiever</div>
                      </div>
                      <div className="BadgeStats">Votes: {obj?.Achiever}/30 <span className={`checkBox ${obj?.Achiever - 30 !== 0 && 'hide' }`}><CheckCircleRoundedIcon style={{fontSize:'16px'}}/></span></div>
                    </div>
                    <div class="main-wrapper flexCont redBatch" style={{width:'fit-content'}}>
                      <div class="badge redBigBadge">
                        <div class="circle"> <i class="fa fa-anchor txtSh"></i></div>
                        <div class="ribbon">Tech geek</div>
                      </div>
                      <div className="BadgeStats">Votes: {obj?.Techgeek}/50 <span className={`checkBox ${obj?.Techgeek - 50 !== 0 && 'hide' }`}><CheckCircleRoundedIcon style={{fontSize:'16px'}}/></span></div>
                    </div>
                    <div class="main-wrapper flexCont purpleBatch" style={{width:'fit-content'}}>
                      <div class="badge purple">
                        <div class="circle"> <i class="fa fa-shield txtSh"></i></div>
                        <div class="ribbon">Veteran</div>
                      </div>
                      <div className="BadgeStats">Votes: {obj?.Veteran}/75 <span className={`checkBox ${obj?.Veteran - 75 !== 0 && 'hide' }`}><CheckCircleRoundedIcon style={{fontSize:'16px'}}/></span></div>
                    </div>
                    <div class="main-wrapper flexCont tealBadge" style={{width:'fit-content'}}>
                      <div class="badge teal">
                        <div class="circle"> <i class="fa fa-rocket txtSh"></i></div>
                        <div class="ribbon">Marque</div>
                      </div>
                      <div className="BadgeStats">Votes: {obj?.Marque}/90 <span className={`checkBox ${obj?.Marque - 90 !== 0 && 'hide' }`}><CheckCircleRoundedIcon style={{fontSize:'16px'}}/></span></div>
                    </div>


                     <div class="main-wrapper flexCont blueBadge" style={{width:'fit-content'}}>
                      <div class="badge blue-dark">
                        <div class="circle"> <i class="fa fa-magic txtSh"></i></div>
                        <div class="ribbon">Elite</div>
                      </div>
                      <div className="BadgeStats">Votes: {obj?.Elite}/100 <span className={`checkBox ${obj?.Elite - 90 !== 0 && 'hide' }`}><CheckCircleRoundedIcon style={{fontSize:'16px'}}/></span></div>
                    </div>

                    <div class="main-wrapper flexCont green-darkBadge" style={{width:'fit-content'}}>
                      <div class="badge  green-dark">
                        <div class="circle"> <i class="fa fa-trophy txtSh"></i></div>
                        <div class="ribbon">Legendary</div>
                      </div>
                      <div className="BadgeStats">Votes: {obj?.Legendary}/120 <span className={`checkBox ${obj?.Legendary - 120 !== 0 && 'hide' }`}><CheckCircleRoundedIcon style={{fontSize:'16px'}}/></span></div>
                    </div>

                   </div>
            </div>
            <div className="ProfileStats">
                {/* <h1 className='ProfileHeading'>Stats</h1> */}
                <label class="HomeQueryShortDesc" style={{marginBottom:'10px'}}><DescriptionOutlinedIcon/>Stats</label>

                <div className="ProfileStatsWrapper">
                    <div className="ProfileStatBox orangeBadge">
                          <div className="ProfileStatImg orangeImg">

                          <Diversity3OutlinedIcon className='ProfileIcon2' style={{textSshadow:"0 4px 2px rgba(0, 0, 0, 15.1) !important"}}/>
                          </div>
                          <span className='BadgeStats'>
                            Friends :   30
                            </span>
                    </div>
                    <div className="ProfileStatBox purpleBatch">
                          <div className="ProfileStatImg blueImg">

                          <PersonAddAlt1OutlinedIcon className='ProfileIcon2'/>
                          </div>
                          <span className='BadgeStats'>
                            Followers :   30
                            </span>
                    </div>
                    <div className="ProfileStatBox green-darkBadge">
                          <div className="ProfileStatImg lightGreenImg">

                          <EmojiObjectsOutlinedIcon className='ProfileIcon2'/>
                          </div>
                          <span className='BadgeStats'>
                            Solution  :   30
                            </span>
                    </div>
                    <div className="ProfileStatBox redBatch">
                          <div className="ProfileStatImg redImg">

                          <ThumbUpAltOutlinedIcon className='ProfileIcon2'/>
                          </div>
                          <span className='BadgeStats'>
                            Votes :   30
                            </span>
                    </div>
                    <div className="ProfileStatBox blueBadge">
                          <div className="ProfileStatImg lightblueImg">

                          <SchoolOutlinedIcon className='ProfileIcon2' />
                          </div>
                          <span className='BadgeStats'>
                            Knowledge :   30
                            </span>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}
