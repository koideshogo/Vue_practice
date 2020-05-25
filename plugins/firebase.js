import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
 const config = {
   apiKey: "AIzaSyDU1Rf74FLC1hijvdNE7aBfW1jCJYNF_4c",
   authDomain: "slack-clone-app-dbec2.firebaseapp.com",
   databaseURL: "https://slack-clone-app-dbec2.firebaseio.com",
   projectId: "slack-clone-app-dbec2",
   storageBucket: "slack-clone-app-dbec2.appspot.com",
   messagingSenderId: "890625123221",
   appId: "1:890625123221:web:aa3da5b54dff53d8498c9c",
   measurementId: "G-WVBJRPN7E5"
 }
 firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
 firebase,
 db
}