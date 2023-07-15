import React,{useState} from "react";
import google from "./google.jpg";
import fb from "./facebook.jpg";

function Footer(){

    let [user, setUser] = useState({name: "", email: "", password: "", confirmPassword: ""})
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    function validateForm(event){
        event.preventDefault()
        if(user.name.length < 3 || user.name.length > 30){
            setSuccess("")
           return  setError("Name should be min 3 char and max 30 char")
            
        }
        else if(!user.email.includes("@") || !user.email.includes(".")){
            setSuccess("")
            return setError("Email should contain @ and .")
        }
        else if(user.password.length < 8 || user.password.length > 15){
            setSuccess("")
            return setError("Password should be min 8 char and max 15 char")
        }
        else if(user.password !== user.confirmPassword){
            setSuccess("")
            return setError("Password and Confirm Password should be same")
        }

        setSuccess("Successfully Created!")
        setError("")

    }

    return(
        <>
        <div className="foot">
                    <form onSubmit={validateForm} id="myForm">
                        <div className="info">
                            <h1>Create Account</h1>
                            <div className="spam">
                            <span><img className="icons" src={google} alt="google" />Sign up with Google</span>
                            <span><img className="icons" src={fb} alt="fb" />Sign up with Facebook</span>
                            </div>
                            <div id="or">- OR -</div>
                        </div>
                        <div className="userInfo">
                            <input id="name" type="text" placeholder="Full Name"  onChange={(event)=>setUser({...user, name: event.target.value})}/>
                            <input id="email" type="email" placeholder="Email Address"  onChange={(event)=>setUser({...user, email: event.target.value})}/>
                            <input id="pass" type="password" placeholder="Password"  onChange={(event)=>setUser({...user, password: event.target.value})}/>
                            <input id="cnf" type="password" placeholder="Confirm Password"  onChange={(event)=>setUser({...user, confirmPassword: event.target.value})}/>
                            <button id="btn" type="Submit">Create Account</button>
                            {
                                error && <p className="err">{error}</p>
                            }
                            {
                                success && <p className="success">{success}</p>
                                
                            }
                            
                        </div>
                    </form>
                </div>
        </>
    )
}

export default Footer;