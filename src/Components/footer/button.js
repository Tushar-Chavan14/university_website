import React from 'react'
import  FireApp  from '../pages/Contact/Firebase'
import style from "./button.module.css"

function Button() {

    function handleLogout(){
        FireApp.auth().signOut()
   }

    return (
        <div>
            <button className={style.bttun} onClick={handleLogout}>logout</button>
        </div>
    )
}

export default Button
