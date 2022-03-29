import React from "react";
import "./home.css";
import Navbar from "../navBar/nav";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
// import { useState } from "react";
// import { useEffect } from "react";

// export const cards = [
//   {
//     id: 1,
//     title: "Authorities",
//     content: [
//       "Board of Governers",
//       "Board of Management",
//       "Academic Council",
//       "Finance Committee",
//       "Research Council",
//       "Estate Board",
//     ],
//   },
// ];

export default function Home() {
  // const [isLoading, setisLoading] = useState(true);
  // const [loadedcards, setloadedcards] = useState([]);

  // useEffect(() => {
  //   const card = [];

  //   for (const key in cards) {
  //     const data = {
  //       id: key,
  //       ...cards,
  //     };

  //     card.push(data);
  //   }
  //   setisLoading(false);
  // //   setloadedcards(card);
  // // }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  const latNews = [
    {
      id: 1,
      nws: "News 1",
    },
    {
      id: 2,
      nws: "News 2",
    },
    {
      id: 3,
      nws: "News 3",
    },
    {
      id: 4,
      nws: "News 4",
    },
    {
      id: 5,
      nws: "News 5",
    },
    {
      id: 6,
      nws: "News 6",
    },
  ];

  const crdNotice = [
    {
      id: 1,
      not: "Notice 1",
    },
    {
      id: 2,
      not: "Notice 2",
    },
    {
      id: 3,
      not: "Notice 3",
    },
    {
      id: 4,
      not: "Notice 4",
    },
    {
      id: 5,
      not: "Notice 5",
    },
    {
      id: 6,
      not: "Notice 6",
    },
  ];

  const About = [
    {
      id: 1,
      li: "List of Officers, Deans & Chairperson Contact Details ",
      link:"/"
    },
    {
      id: 2,
      li: "Officers of the University",
      link:"/"
    },
    {
      id: 3,
      li: "Objectives",
      link:"/"
    },
    {
      id: 4,
      li: "About Sangha",
      link:"/"
    },
    { id: 5, li: "About University",link:"/" },
    { id: 6, li: "Vission and Mission", link: "/MissionandVission" },
  ];

  const notices = [
    {
      id: 1,
      not: "Notice 1",
    },
    {
      id: 2,
      not: "Notice 2",
    },
    {
      id: 3,
      not: "Notice 3",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="Ncard card--stripe">
        <ul>
          {notices.map((notice) => (
            <li key={notice.id} className="cardnot">
              {notice.not}
            </li>
          ))}
        </ul>
      </div>

      <div className="container">
        <main className="grid">
          <article>
            <div className="stripe">
              <h3>ADMINISTRATION</h3>
            </div>
            <div className="text">
              <ul>
                <li>Chancellor</li>
                <li>Vice-Chancellor</li>
                <li>pro-Vice-Chancelor</li>
                <li>pro-Vice-Chancelor</li>
                <li>Registrar</li>
                <li>Registrar Evalution</li>
                <li>Dean</li>
                <li>Finance Officer</li>
              </ul>
            </div>
          </article>

          <article>
            <div className="stripe">
              <h3>Authorities</h3>
            </div>
            <div className="text">
              <ul>
                <li>Board of Governers</li>
                <li>Board of Management</li>
                <li>Academic Council</li>
                <li>Finance Committee</li>
                <li>Research Council</li>
                <li>Estate Board</li>
              </ul>
            </div>
          </article>

          <article>
            <div className="stripe">
              <h3>Facilities</h3>
            </div>
            <div className="text">
              <ul>
                <li>A/c Library 24/7 open for students</li>
                <li>University Provides Bus Facility</li>
                <li>Purified Drinking Water</li>
                <li>Daily Assignment</li>
                <li>Feedback to Parents</li>
                <li>Dress code for Students and Staff</li>
                <li>Career Guidance Cell</li>
                <li>Dedicated Placement Cell</li>
              </ul>
            </div>
          </article>

          <article>
            <div className="stripe">
              <h3>About us</h3>
            </div>
            <div className="text">
              <ul>
                {About.map((Abt) => (
                  <Link key={Abt.id} to={Abt.link}>
                    <li >{Abt.li}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </article>

          <article>
            <div className="stripe">
              <h3>NOtices</h3>
            </div>
            <div className="text">
              <ul>
                {crdNotice.map((not) => (
                  <li key={not.id}>{not.not}</li>
                ))}
              </ul>
            </div>
          </article>

          <article>
            <div className="stripe">
              <h3>Latest News</h3>
            </div>
            <div className="text">
              <ul>
                {latNews.map((ln) => (
                  <li key={ln.id}>{ln.nws}</li>
                ))}
              </ul>
            </div>
          </article>
        </main>
      </div>

      <Footer/>

    </div>
  );
}
