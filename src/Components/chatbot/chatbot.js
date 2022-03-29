import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components'
import {BtList, Busstd, Barc, Bca, MtList, Mba, Ssma, Mca, Mta, Fama, Lang, Adcriteria} from './listcompo'
// import PropTypes from 'prop-types';


export default function Chatbott(){

    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#33302d',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#33302d',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a'
       };
      

    const config = {
        width: "500px",
        height: "400px",
        floating: true,
        headerTitle:"sharnbasva university support",
        enableSmoothScroll:true,
      };


      function Replay(props){
          const { steps } = props;
          const uval = steps.user.value;

          const val = String(uval)
        
          console.log(typeof(val))
          console.log(val)
          

         

          if(val.indexOf("how") !== -1){
            return <p>I am good</p>
          }
          else if(val.indexOf("president") !== -1 ){
            return <p>Poojya Dr. Sharnbaswappa Appa</p>
          }
          else if(val.indexOf("who") !== -1||val.indexOf("developed") !== -1){
              return <p>Tushar the Great</p>
          }
          else if(val.indexOf("chairman of bca") !== -1||val.indexOf("hod of bca") !== -1){
            return <p>Prof.Shridar anakal</p>
          }
          else if(val.indexOf("fees of") !== -1){
            return <p>For any queries related to fees of particular cources you can contact with our dean from contact us page. Leave there a message, </p>
          }
          else{
            return <p>sorry I did not get it!</p>
          }

      }


    const steps = [
        {
         id: "Greet",
         message: "Hello, Welcome to sharnbasva university",
         trigger: "Done"
        },
        {
         id: "Done",
         message: "What is your name?",
         trigger:2
       },
       {
           id:2,
           user:true,
           trigger:3
       },

        {
            id:3,
            message:'Hi {previousValue}, nice to meet you \n What do you want to know about ?',
            trigger:4
        },
        {
            id:4,
            options:[
                {value:'timing',label:'timing',trigger:'time'},
                {value:6,label:"degrees offered",trigger:"degOpt"},
                {value:9,label:"Admision criteria",trigger:"fee"},
                {value:5,label:"else",trigger:"else"}

            ],
        },
        {
            id:'time',
            message:"our working hours is from 10 Am to 5 Pm",
            trigger:4
        },
        {
            id:"degOpt",
            options:[
                {value:7,label:"UG",trigger:"showug"},
                {value:8,label:"PG",trigger:"showpg"}
            ]
        },
        {
            id:"showpg",
            options:[
                {value:"mt",label:"M.tech",trigger:"showMt"},
                {value:"Mbstd",label:"Faculty of Business Studies",trigger:"showMst"},
                {value:"St",label:"Faculty of Science and Technology",trigger:"showSt"},
                {value:"Mc",label:"MCA",trigger:"showMca"},
                {value:"mttm",label:"Faculty of Tourism Administration",trigger:"showMttm"},
                {value:"Fa",label:"Faculty of Fine Arts",trigger:"showfama"},
                {value:"lan",label:"Faculty of Languages",trigger:"showlan"},
                {value:"Sc",label:"Faculty of Social Sciences",trigger:"showSs"},
            ]
        },
        {
            id:"showMt",
            component:<MtList/>,
            asMessage:true,
            trigger:4
        },
        {
            id:"showMst",
            component:<Mba/>,
            asMessage:true,
            trigger:4
        },
        {
            id:"showSt",
            component:<Ssma/>,
            asMessage:true,
            trigger:4
        },
        {
            id:"showMca",
            component:<Mca/>,
            asMessage:true,
            trigger:4
        },
        {
            id:"showMttm",
            component:<Mta/>,
            asMessage:true,
            trigger:4
        },
        {
            id:"showfama",
            component:<Fama/>,
            asMessage:true,
            trigger:4
        },
        {
            id:"showlan",
            component:<Lang/>,
            asMessage:true,
            trigger:4
        },
        {
            id:"showSs",
            component:<Ssma/>,
            asMessage:true,
            trigger:4
        },
        {
            id:"showug",
            options:[
                {value:"bt",label:"B.tech",trigger:"showbt"},
                {value:"bstd",label:"bussiness studies",trigger:"showbst"},
                {value:"barc",label:"Barc",trigger:"showbarc"},
                {value:"bc",label:"Bca",trigger:"showbca"}
            ]
        },
        {
            id:"showbt",
            component:<BtList/>,
            asMessage:true,
            trigger:4
        },
        {
            id:"showbst",
            component:<Busstd/>,
            asMessage:true,
            trigger:4
        },
        {
            id:"showbarc",
            component:<Barc/>,
            asMessage:true,
            trigger:4
        },
        {
            id:"showbca",
            component:<Bca/>,
            asMessage:true,
            trigger:4
        },
        {
            id:"fee",
            component:<h4>COURSES OFFERED AND<br/> ACADEMIC ELIGIBILITY FEES STRUCTURE <br/>OTHER FEES</h4>,
            trigger:"fee-next"
        },
        {
            id:"fee-next",
            component:<Adcriteria/>,
            asMessage:true,
            trigger:"fee-next2"
        },
        {
            id:"fee-next2",
            message:"For Fee related to particular course visit to department of that course or contact us with messenger bot",
            trigger:4
        },
        {
            id:'else',
            message:"what do you want to know about",
            trigger:"user"
        },
        {
            id:"user",
            user:true,
            trigger:"else-next"
        },
        {
            id:'else-next',
            component:<Replay/>,
            asMessage:true,
            trigger:4
        }

      ];

      return (
        <ThemeProvider theme={theme}>
           <ChatBot steps={steps} {...config} />
        </ThemeProvider>
       );

}

