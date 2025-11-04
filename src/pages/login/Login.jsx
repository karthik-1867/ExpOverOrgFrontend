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
        
           <div className="LoginContainer">


                <form onSubmit={handleSignIn} className="LoginForm">
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