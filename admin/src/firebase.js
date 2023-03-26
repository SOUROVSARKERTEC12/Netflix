import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBpQV8pYUWtHKI1u-06miYM8kAuOuM4dzM",
    authDomain: "netflix-d4ce7.firebaseapp.com",
    projectId: "netflix-d4ce7",
    storageBucket: "netflix-d4ce7.appspot.com",
    messagingSenderId: "683588161795",
    appId: "1:683588161795:web:07b7803502f966d51c9936",
    measurementId: "G-F29FVYVDC4"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;