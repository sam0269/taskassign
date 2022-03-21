import React, {useState } from 'react'
import { useNavigate } from "react-router-dom"
import '../style.css';



const Login = () => {
    
    const navigate = useNavigate();


    const [details] = useState({
        email:'rawatshubam269@gmail.com',
        pwd: '123'
    });

    const [email,setEmail] = useState('');
    const [pwd,setPwd] = useState('');
    
    const display = () =>{
        if(email === details.email && pwd === details.pwd) {
           navigate("/container");
        }else{
            alert("Wrong Details");
        }
    }
  return (
      <>
          <div className="login_container">
              <div className="main_container">
                    <h1>Login</h1>
                  <label htmlFor="username">
                      <input type="text" name="textfield" id="textfield"  placeholder='email here' autoComplete='off'
                        onChange={(e)=> setEmail(e.target.value) }
                      />
                  </label>

                  <label htmlFor="pwd">
                      <input type="pwd" name="pwd" id="pwd"  placeholder='password here' autoComplete='off'
                        onChange={(e)=> setPwd(e.target.value) }
                      />
                  </label>
                 <button onClick={display}>Submit</button>
              </div>
          </div>
      </>
  )
}

export default Login