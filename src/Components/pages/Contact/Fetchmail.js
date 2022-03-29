import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import { useEffect } from "react";
import "./mails.css"
import Footer from "../../footer/Footer";
import React from "react";
import Navadmin from "../../navBar/navadmin";


function Fetchmail() {
  const [loading, setloading] = useState(false);
  const [emails, setemails] = useState([]);



  
  useEffect(() => {

    const ref = firebase.firestore().collection("EMAILS");

    function getmails() {
        setloading(true);
        ref.onSnapshot((querySnapshot) => {
          const Items = [];
          querySnapshot.forEach((doc) => {
            Items.push(doc.data());
          });
          setemails(Items);
          setloading(false);
        });
      }
      getmails()
    
  }, []);


  if (loading) {
    return <h4 className="load">loading please wait...</h4>;
  }
  return (
    <div >

      <Navadmin/>
        
        <div className="strt" >
        <h1 className="hed">Inbox</h1>
        <div className="holder">
      
      {emails.map((mail) => (
        <div key={mail.Email}>
            <div className="fild">
          <label >Name:</label>
          <p>{mail.Name}</p>
          <br /></div>
          <div className="fild">
          <label>Email:</label>
          <p>{mail.Email}</p>
          <br /></div>
          <div className="fild2">
          <label>Message:</label>
          <p>{mail.Message}</p></div>
        </div>
      ))}
        </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Fetchmail;
