import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB446yHZ9h2sdre3sdfDzQeNFJUqNl1wCc",
    authDomain: "slack-clone-d89af.firebaseapp.com",
    databaseURL: "https://slack-clone-d89af.firebaseio.com",
    projectId: "slack-clone-d89af",
    storageBucket: "slack-clone-d89af.appspot.com",
    messagingSenderId: "877762298742",
    appId: "1:877762298742:web:e41638bbd391a2e938f057",
    measurementId: "G-H9KGKTC3YS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db