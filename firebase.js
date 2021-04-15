// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase"
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpZQxOySfQN0btkQP82iVIasJs6TyfT4E",
  authDomain: "chatapp-25e0d.firebaseapp.com",
  projectId: "chatapp-25e0d",
  storageBucket: "chatapp-25e0d.appspot.com",
  messagingSenderId: "762911864640",
  appId: "1:762911864640:web:9e9443d002ad901a20eca5",
  measurementId: "G-LE6ZSSWDRD"
};
  let app;
  if(firebase.apps.length===0){
    app=firebase.initializeApp(firebaseConfig);
  }else{
    app=firebase.app();
  }
  const db=app.firestore();
  const auth=firebase.auth();
  export {db,auth}