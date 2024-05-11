import React from 'react'
import "./login.css";



export default function Login() {

    const [userInfo, setUseInfo] = React.useState({})

    function onInfo(event) {
        setUseInfo({
            ...userInfo,
            [event.target.name]:event.target.value
        })
    }
 
  
    async function sendData(event) {
        event.preventDefault()
        console.log(userInfo)
        let res = await fetch("https://smartviewgal.azurewebsites.net/login",{
            method:"POST",
            body: JSON.stringify(userInfo),
            
            headers:{
                "Content-Type": "application/json",
            }
        })
        
        if(res.status === 200)
        {
            res = await res.json()
            alert("Login Successful")
            localStorage.setItem('token', res.token);
        }else {
            alert("Login Failed Please try again")
        }
        
        console.log(res);
    }


    return (
        <div>
            <form className="form-holder" >
             
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={onInfo}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={onInfo}/>
                <button className="submit-btn" onClick={sendData}>Login</button>
            </form>
        </div>
    )
}
