import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCYazckSYifovN7Ud4iJOLxSk_stZOyba0",
    authDomain: "catch-of-the-day-52367.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-52367.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;