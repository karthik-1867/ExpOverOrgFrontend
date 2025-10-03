import Menu from "./components/Menu/Menu";
import "../src/app.css"
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import "../src/Scrollbaar.css"
import SavePost from "./pages/savepost/SavePost";
import { useState } from "react";

function App() {
  const [page,setPage] = useState('home');

  return (
    <div className="AppContainer">
        
        <Navbar/>
        <div className="App">

            <Menu page={setPage}/>
            <div className="MainContainer">
                {page == 'home' && <Home/>}
                {page == 'save' && <SavePost/>}
            </div>
        </div>
    </div>
  );
}

export default App;
