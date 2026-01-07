import Menu from "./components/Menu/Menu";
import "../src/app.css"
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import "../src/Scrollbaar.css"
import SavePost from "./pages/savepost/SavePost";
import { useState } from "react";
import ExpertTrack from "./pages/expertTrack/ExpertTrack";
import FriendPage from "./pages/friendPage/FriendPage";
import Community from "./pages/community/Community";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePageInputs from "./components/HomePageInputs/HomePageInputs";
import HomePageQuestionSection from "./components/HomePageQuestionSection/HomePageQuestionSection";
import HomePageAnsSect from "./components/HomePageAnsSection/HomePageAnsSect";
import Login from "./pages/login/Login";
import ExpertPageAnsSection from "./components/ExpertPageAnsSection/ExpertPageAnsSection";
import Knowledge from "./pages/knowledge/Knowledge";
import CommunityInviteStatus from "./components/communityInviteStatus/CommunityInviteStatus";
import FriendinviteStatus from "./components/inviteStatus/FriendinviteStatus";
import CreateCommunity from "./components/createCommunity/CreateCommunity";
import IntroDetails from "./components/IntroDetails/IntroDetails";
import AttachedFolder from "./pages/attachedFolder/AttachedFolder";
import SubFolder from "./pages/SubFolders/SubFolder";
import SaveSection from "./pages/SaveSection/SaveSection";
import PostKnowledge from "./components/PostKnowledge/PostKnowledge";
import Notification from "./pages/Notification/Notification";
import NotificationMessage from "./components/NotificationMessage/NotificationMessage";
import NotificationManager from "./components/NotificationManager/NotificationManager";
import NotificationFollowup from "./components/NotificationFollowup/NotificationFollowup";
import Profile from "./pages/profile/Profile";
import IntroDetailCommunity from "./components/IntroDetailCommunity/IntroDetailCommunity";
import SaveTypeSelect from "./pages/SaveTypeSelect/SaveTypeSelect";

function App() {
  const [page,setPage] = useState('home');

  return (
    <div className="AppContainer">
      <Router>
        <Navbar/>
        <div className="App">

            <Menu page={setPage}/>
           
            <div className="MainContainer">
             
                 <Routes>
                  
                    <Route path="/" element={<Login/>}/>
                    <Route path="/allpost" element={<Home />}>
                        <Route index element={<HomePageInputs/> } />        {/* when at /home */}
                        <Route path="inputs" element={<HomePageInputs />} />{/* at /home/profile */}
                        <Route path="questions" element={<HomePageQuestionSection  type='question'/>} />{/* /home/settings */}
                        <Route path="urQuestions" element={<HomePageQuestionSection type='urQuestions'/>} />
                        <Route path="tokenSearch" element={<HomePageQuestionSection type='tokenSearch'/>}/>
                        <Route path="expertquestions" element={<HomePageQuestionSection type='expertquestions'/>} />
                        <Route path="friendquestions" element={<HomePageQuestionSection type='friendquestions'/>} />
                       <Route path="answer/:id" element={<HomePageAnsSect />} />
                  </Route>
                  
                  <Route path="/saveSection" element={<SaveSection/>}>
                      <Route index path="selectType" element={<SaveTypeSelect/>}/>
                       <Route path="save" element={<SavePost />} />
                       <Route path="subFolder/:id" element={<SubFolder />} /> 
                  </Route>

                  <Route path="/attachedFolderId" element={<AttachedFolder />} />
                  <Route path="/expertTrack" element={<ExpertTrack />} >
                      <Route index path="questions/:id" element={<HomePageQuestionSection  type='questionByExpert'/>} />
                      <Route path="answer/:id" element={<ExpertPageAnsSection />} />
                      <Route path="clickedAnswer/:id" element={<HomePageAnsSect type='answerByQuestion'/>} />
                      <Route path="knowledge/:id" element={<Knowledge type='expertTrack' />}/> 
                      <Route path="introDetail/:id" element={<IntroDetails/>}/>

                  </Route>
                  <Route path="/friendPage" element={<FriendPage />} >
                      <Route index path="questions/:id" element={<HomePageQuestionSection  type='questionByFriend'/>} />
                      <Route path="answer/:id" element={<ExpertPageAnsSection />} />
                      <Route path="clickedAnswer/:id" element={<HomePageAnsSect type='answerByQuestion'/>} />
                      <Route path="knowledge/:id" element={<Knowledge type='friendPage'/>}/> 
                      inviteStatus
                      <Route path="inviteStatus" element={<FriendinviteStatus/>}/> 
                       <Route path="introDetail/:id" element={<IntroDetails/>}/>

                  </Route>
                  <Route path="/community" element={<Community />} >
                       <Route index path="communityKnowledge/:id" element={<Knowledge type='community'/>} />
                       <Route index path="createCommunity" element={<CreateCommunity/>} />
                       <Route index path="inviteStatus" element={<CommunityInviteStatus/>} />
                       <Route index path='postKnowledge/:id/:type' element={<PostKnowledge/>}/>
                       <Route index path='introdetailCommuinity/:communityId' element={<IntroDetailCommunity/>}/>
                       <Route index path="individualKnowledge/:communityId/:id" element={<Knowledge type='singleUserKnowledge'/>} />
                        
                  </Route>
                  <Route path="/Notification" element={<Notification />} >
                        <Route index path="Messages" element={<NotificationMessage/>} />
                         <Route path="Manager" element={<NotificationManager/>} />
                         <Route path="Followups" element={<NotificationFollowup/>} >
                             <Route index path=":id" element={<HomePageAnsSect/>} />
                         </Route>
                  </Route>
                  <Route path="/profile" element={<Profile/>}>
                  
                  </Route>
                 </Routes>
              
               
            </div>
        </div>
         </Router>
    </div>
  );
}

export default App;
