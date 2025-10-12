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
                  

                    <Route path="allpost" element={<Home />}>
                        <Route index element={<HomePageInputs/> } />        {/* when at /home */}
                        <Route path="inputs" element={<HomePageInputs />} />{/* at /home/profile */}
                        <Route path="questions" element={<HomePageQuestionSection />} />{/* /home/settings */}
                        <Route path="urQuestions" element={<HomePageQuestionSection />} />
                        <Route path="expertquestions" element={<HomePageQuestionSection />} />
                        <Route path="friendquestions" element={<HomePageQuestionSection />} />
                       <Route path="answer/:id" element={<HomePageAnsSect />} />
                  </Route>
                  <Route path="/save" element={<SavePost />} />
                  <Route path="/expertTrack" element={<ExpertTrack />} />
                  <Route path="/friendPage" element={<FriendPage />} />
                  <Route path="/community" element={<Community />} />
                 </Routes>
              
               
            </div>
        </div>
         </Router>
    </div>
  );
}

export default App;
