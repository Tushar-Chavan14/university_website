import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import { db } from './Firebase';
import { useState } from 'react';
import Navbar from "../../navBar/nav"
import Footer from "../../footer/Footer"


export default function Contact2() {


  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const [loding, setloding] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setloding(true)

    db.collection("EMAILS")
      .add({
        Name: Name,
        Email: Email,
        Message: Message,
      })
      .then(() => {
        alert("Your message has been sent to admin, Sooner you get the response to your message ");
        setloding(false)
      })
      .catch((error) => {
        alert(error.Message);
        setloding(false)
      });

    setName("");
    setEmail("");
    setMessage("");
  };



  return (
    <div > 

<Navbar/>
<div className="contac" >
      <Grid>
        <Card style={{ maxWidth: 1000, padding: "20px 5px", margin: "0 auto", }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us 📲
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 
            <form onSubmit={handleSubmit} >
              <Grid container spacing={1} style={{ color:"#fff" }} >
                <Grid xs={12} sm={12} item>
                  <TextField  value={Name} onChange={(e) => { setName(e.target.value); }} placeholder="Enter Your Name" label="Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField  value={Email} onChange={(e) => {setEmail(e.target.value);}} type="email" placeholder="Enter yor email here" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField  value={Message} onChange={(e) => { setMessage(e.target.value);}} label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color={loding ? "seandary" : "primary"} fullWidth>Submit</Button>
                  
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      </div>
      <Footer/>
    </div>
  );
}
