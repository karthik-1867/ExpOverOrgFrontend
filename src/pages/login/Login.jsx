import { useState } from "react";
import "./../login/login.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [inputs,setInputs] = useState({email:"",password:""});
  const [errorMessage,setErrorMessage] = useState("");


  console.log(inputs)

  const handleInput = (e) =>{
     setInputs((prev)=>{
       return {...prev, [e.target.name]:e.target.value}
     })
  }

  const handleSignIn = async(e) => {
    e.preventDefault()

    const {email,password} = inputs;
    console.log(email,password);
    setErrorMessage("")
    if(!email){
      return setErrorMessage("please enter email");
    }

    if(!password){
      return setErrorMessage("please enter password")
    }

    try{
     
      const user = await axios.post(`${process.env.REACT_APP_URL}/user/signin`,{email,password},{withCredentials:true})
      console.log(user);

    }catch(e){
      console.log(JSON.stringify(e.response))
      return setErrorMessage(e.response.data.message);
    }




  }

    return(
        
           <div className="LoginContainer" >

               
                <form onSubmit={handleSignIn} className="LoginForm Selected" >
                    <div className="LogoContainer">
                      <div class="NavbarLogo"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1umw9bq-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MenuBookOutlinedIcon"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1m0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5z"></path><path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99M13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83m4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24"></path></svg><div class="NavbarText"><span>E</span><span class="NavLogoFont">xpOverOrg</span></div></div>
                    </div>
                    <br/>
                    <div className="LoginInputs">
                        <label className="LoginLabel">
                            Email
                        </label>
                        <input
                            className="LoginInput"
                            type="text"
                            name="email"
                            value={inputs.email}
                            onChange={handleInput}
                            placeholder="Enter Email"
                            />
                    </div>
                    <br/>
                    <div className="LoginInputs">       
                        <label className="LoginLabel">
                            Password:
                        </label>
                        <input
                        className="LoginInput"
                        placeholder="Enter password"
                        type="password"
                        name="password"
                        value={inputs.password}
                        onChange={handleInput}
                        />
                    </div>
                    <br/>

                    <button type="submit" className="LoginSubmit">Sign In</button>
                    <p className="LoginSignUpMessage">New to ExpOverOrg?.Please <span className="SignupHighLight">Signup</span></p>
                 </form>  
           </div>
        
    )
}