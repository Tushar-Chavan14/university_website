import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navBar/nav";
import './miss&viss.css'

export default function MissandViss() {
  return (
    <div>
      <Navbar/>
        <div className="card">
           <center><h4> Vision</h4></center>
           <ul>
               <li><p>Enhancing the horizon of world knowledge by promoting international understanding through imparting quality education and creating value added skill based human resource.</p></li>
               <li><p>We aspire to become top ranking National and International Centre of Excellence producting high calliber leaders and Captains of industry.
Inculcating the spirit of "Vasudeva Kudumbakam" (The world is one family).</p></li>
                <li><p>"Sakala Jeevathmarige Lesane Bayasuva" (Wishing the worldly good and betterment of all the living beings) is our moto.</p></li>
           </ul>
        </div>

        <div className="card">
            <center><h4>Mission</h4></center>
            <ul>
                <li>
                Achieving academic excellence through innovatively designed, research intensive,industry oriented education
                </li>
                <li><p>Imbibing the culture of Independent thinking, Independent writing, Independent speaking and Independent living among the students in all the activities.</p></li>
                <li><p>Foster the spirit of National development and develop global competences. Nurture creativity and encourage enterpreneurship and provide an education with rigor and relevance.</p></li>
                <li><p>Provide academically excellent,time efficient, and cost effective higher education. Provide an education which enhances the ability of students to learn throught the life.</p></li>
                <li><p>Ensure freedom of thought and expression in a campus without discrimination</p></li>
                <li><p>Encourage the spirit of questioning and ensure close inter-relationship between Teaching, Scholorship and Research.</p></li>
                <li><p>Cultivate academic, business and community driven partnership that positions the University as a leading choice for adult learners.</p></li>
                <li><p>To work effectively with other institutions and organisations, where such partnerships can lead to understanding research and teaching.</p></li>
                <li><p>Develop and deliver distinctive and value driven academic programme that are flexible and responsible to Local, National and International needs.</p></li>
            </ul>
        </div>

    <Footer/>

    </div>
  );
}
