import React from 'react'
import { NavLink } from 'react-router-dom'
import "./error.css"

const Errorpage = () => {
    return (
        <div>
            <div id="notfound">
                <div className="notfound">

                    <h1>404</h1>
                    <h2>we are sorry, page not found!</h2>
                    <p className="mb-5"> 
                        The page you are looking for might have been removed
                        or is temporarily unavailable or<br/> under development. 
                    </p>
                    <NavLink to="/"> Back To Homepage </NavLink>
                </div>
           </div> 
        </div>
    )
}

export default Errorpage
