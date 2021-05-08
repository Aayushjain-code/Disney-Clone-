import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyD0-HXAG53RNVse1U6lPzovLtGhSTKjKMo",
	authDomain: "disneyplus-clone-1e7fc.firebaseapp.com",
	projectId: "disneyplus-clone-1e7fc",
	storageBucket: "disneyplus-clone-1e7fc.appspot.com",
	messagingSenderId: "404971254506",
	appId: "1:404971254506:web:a1c3f53374d8e137b99d93"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
