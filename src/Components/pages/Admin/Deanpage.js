import React from "react";
import Navadmin from "../../navBar/navadmin";
import Footer from "../../footer/Footer";
import style from "./dean.module.css"

export default function Deanpage() {
  return (
    <div>
      <Navadmin />
      <div className={style.dnpg}>
        Welcome dean
        </div>
        <Footer />
      
    </div>
  );
}
