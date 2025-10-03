import React from 'react'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
export default function HomePageInputs() {
  return (
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
                  <div className="HomeQueryTextInputs">
                       <label className='HomeQueryShortDesc'>
                          <DescriptionOutlinedIcon/>
                          Short Description
                       </label>
                       <textarea
                        id="myTextarea"
                        class="textbox"
                        rows="1"
                        cols="30"
                        placeholder="Type Short description question…"
                        ></textarea>
                        <label className='HomeQueryShortDesc'>
                              <DescriptionRoundedIcon/>      
                              Full Description
                        </label>
                       <textarea
                        id="myTextarea"
                        class="textbox"
                        rows="6"
                        cols="30"
                        placeholder="Full Description of problem statement…"
                        ></textarea>
                        <div className="HomeQueryCategoryAndLabel">  
                             <label className='HomeQueryShortDesc'>
                              <CategoryRoundedIcon/>
                               category</label>
                               <select name="owner" class="HomeQueryCategory"><option value="Python">Python</option><option value="Java">Java</option><option value="javascript">javascript</option></select>
                        </div>
                        <div className="HomeQueryInfo">
                           <InfoOutlinedIcon/>
                           If category of question described does'nt exist. U can create ur own category but it would be reviewed first. You can click right button to create
                           <button className='HomeQueryCategoryCreate'>
                              Create category
                           </button>
                            
                        </div>
                  </div>   
            </div> 
  )
}
