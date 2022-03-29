import React from "react";
import Navbar from "../navBar/nav";
import Footer from "../footer/Footer";
import "./officer.css"

const Officers = [
  {
    id: 1,
    name: "Sri Vajubhai Rudabhai Vala",
    img: "http://sharnbasvauniversity.edu.in/img/sliders/Visitor.jpg",
    study: "",
    designation: "Hon.Governor of Karnataka & Visitor",
    address: "",
  },
  {
    id: 2,
    name: "Dr. Ashwath Narayan C N",
    img: "http://sharnbasvauniversity.edu.in/img/sliders/Dr_C_N_Ashwath_Narayan.png",
    study: "",
    designation: "Hon. Minister for Higher Education & Pro - Visitor",
    address: "",
  },
  {
    id: 3,
    name: "Poojya Dr. Sharnbaswappa Appa",
    img: "http://sharnbasvauniversity.edu.in/img/sliders/Appaji2.jpg",
    study: "",
    designation: "Chancellar and President",
    address: "Sharnbasva University, Kalaburagi",
  },
  {
    id: 4,
    name: "Dr.Niranjan Nisty",
    img: "http://sharnbasvauniversity.edu.in/img/sliders/Dr.Niranjan%20Nisty.jpg",
    study: "M.D., Ph.D.",
    designation: "vice-Chancellar",
    address: "Sharnbasva University, Kalaburagi",
  },
  {
    id: 5,
    name: "Dr.V.D.Mytri",
    img: "http://sharnbasvauniversity.edu.in/img/sliders/pro_vcc1.jpg",
    study: "M.Tech., Ph.D",
    designation: "Pro Vice-Chancellor",
    address: "Sharnbasva University, Kalaburagi",
  },
  {
    id: 6,
    name: "Sri. N.S.Devarkal",
    img: "http://sharnbasvauniversity.edu.in/img/sliders/pro_vc2.jpg",
    study: "B.Sc., M.A., L.L.B",
    designation: "vice-Chancellar",
    address: "Sharnbasva University, Kalaburagi",
  },
  {
    id: 7,
    name: "Dr.Anilkumar Bidve ",
    img: "http://sharnbasvauniversity.edu.in/img/sliders/Dr.AnilkumarBidve3.jpg",
    study: "M.Sc., Ph.D.",
    designation: "Registrar",
    address: "Sharnbasva University, Kalaburagi",
  },
  {
    id: 8,
    name: "Dr. Lingaraj Shastri",
    img: "http://sharnbasvauniversity.edu.in/img/sliders/dean.jpg",
    study: "M.E., Ph.D",
    designation: "Registrar(Evalution)",
    address: "Sharnbasva University, Kalaburagi",
  },
  {
    id: 9,
    name: "Dr. Lakshmi B Patil ",
    img: "http://sharnbasvauniversity.edu.in/img/Dr.%20Lakshmi%20B%20Patil.jpg",
    study: "M.Tech, Ph.D.",
    designation: "Dean",
    address: "Sharnbasva University, Kalaburagi",
  },
  {
    id: 10,
    name: "Dr.Basavaraj S Mathapati",
    img: "http://sharnbasvauniversity.edu.in/img/sliders/Dr.Basavaraj.S.Mathapati.jpg",
    study: "M.Tech, Ph.D.",
    designation: "Dean",
    address: "Sharnbasva University, Kalaburagi",
  },
  {
    id: 11,
    name: "Mr.Kiran Maka",
    img: "",
    study: "",
    designation: "Finance Officer",
    address: "Sharnbasva University, Kalaburagi",
  },
];

function OfficerSuk() {
  return (
    <div>
      <Navbar />

      <div className="forHed" ><h2>Officer's of University</h2></div>

      <div className="wrapperch1">

       

    {Officers.map((item)=>{
      return(
        <Card1
        key={item.id}
        img={item.img}
        title={item.name}
        description={item.designation}
        study={item.study}
        addr={item.address}
      />
      );
    })}        

      



      </div>

      <Footer />
    </div>
  );
}




function Card1(props) {
  return (
    <div className="card2">
      <div className="card__body2">
        <img src={props.img} className="card__image2" alt="" />
        <h2 className="card__title2">{props.title}</h2>
        <p className="card__description2">{props.study}</p>
        <h5 className="card__description2">{props.description}</h5>
        <p className="card__description2">{props.addr}</p>
      </div>
      
    </div>
  );
}


export default OfficerSuk;
