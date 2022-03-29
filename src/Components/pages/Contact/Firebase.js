import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"

export var FireApp = firebase.initializeApp({
  apiKey: "AIzaSyAztzXqGGPzt2Q7e7ITcwjWSAFqZXlFs88",
  authDomain: "suk-5c30c.firebaseapp.com",
  projectId: "suk-5c30c",
  storageBucket: "suk-5c30c.appspot.com",
  messagingSenderId: "604144853992",
  appId: "1:604144853992:web:325979d809397cded9ba5d"
})

var db = firebase.firestore()
 
export {db};

export default firebase;