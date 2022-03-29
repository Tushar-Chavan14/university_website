import React from 'react';
import './App.css';
import Chatbott from './Components/chatbot/chatbot';
import { Route, Switch,withRouter } from 'react-router-dom';
import Home from './Components/pages/home';
import MissandViss from './Components/pages/miss&viss';
import OfficerSuk from './Components/pages/OfficerSuk';
import Chancellor from './Components/pages/Administration/Chancellor';
import Errorpage from './Components/footer/Errorpage';
import Contact from './Components/pages/Contact/contact';
import Login from './Components/LoginAdmin/Login';
import Fetchmail from './Components/pages/Contact/Fetchmail';
import UpdateNotice from './Components/pages/Admin/UpdateNotice';




function App(props) {

 const {location} = props
 if(location.pathname.match('/admin')){
   return(<div className="App">
     
      <Switch>
     <Route path="/" exact><Home/></Route>
     <Route path="/error" exact > <Errorpage/> </Route>
     <Route path="/admin" exact> <Login/> </Route>
     <Route path="/admin/mails" exact><Fetchmail/></Route>
     <Route path="/admin/updatenotice" exact><UpdateNotice/></Route>
   </Switch>
   
  </div>)
 }

  return (
    <div className="App">
     

     <Chatbott />
     
     
     <Switch>
       <Route path="/" exact><Home/></Route>
       <Route path='/MissionandVission' exact> <MissandViss/></Route>
       <Route path="/officersUniversity" exact> <OfficerSuk/> </Route>
       <Route path="/chancellor" exact> <Chancellor/>  </Route>
       <Route path="/error" exact > <Errorpage/> </Route>
       <Route path="/contact" exact> <Contact/> </Route>
       <Route path="/admin" exact> <Login/> </Route>
     </Switch>
     
    </div>
  );
}

export default withRouter(App);
