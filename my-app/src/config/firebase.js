import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC7zZL-R_YKhdCVFCaVfNQq3ytgzB3Gil0",
  authDomain: "netninjaplan-e8458.firebaseapp.com",
  projectId: "netninjaplan-e8458",
  storageBucket: "netninjaplan-e8458.appspot.com",
  messagingSenderId: "974824423185",
  appId: "1:974824423185:web:36f23b06a8c9d1639a16b0",
  measurementId: "G-3HER5CW2QF"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 

