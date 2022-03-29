import React from 'react'
import  FireApp  from '../pages/Contact/Firebase'
import { useState, useEffect } from 'react'
import SignInSide from "./SignInSide"
import Deanpage from '../pages/Admin/Deanpage'

function Login() {
    
    const [User, setUser] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [emailError, setemailError] = useState("")
    const [passwdError, setpasswdError] = useState("")
    



    const clearInputs = () =>{
        setemail("")
        setpassword("")
    }

     const clearerror =() =>{
        setemailError("")
        setpasswdError()
     }
    

    function HandleLogin(){

        clearerror()

        FireApp.auth().signInWithEmailAndPassword(email,password).catch(err=>{
            switch (err.code) {
             case "auth/invalid-email":
                 case "auth/User-diabled":
                 case "auth/user-not-found":           
                     setemailError(err.message)
                     break;
                     case "auth/wrong-password":
                 setpasswdError(err.message)
                 break   
            
                default :
                    break;
            }
         })
    }
    

 

   useEffect(() => {

    function authListner(){
        FireApp.auth().onAuthStateChanged((user) =>{
            if(user){
                clearInputs()
                setUser(user)
            }else{setUser("")}
        })
    }
 
    authListner()

   }, [])

    return (
        <div>

        {User ? (<Deanpage />): (<SignInSide email={email} setEmail={setemail} password={password} setpassword={setpassword} handlelogin={HandleLogin} 
            emailError={emailError} passwdError={passwdError} />) }

            
        </div>
    )
}

export default Login

