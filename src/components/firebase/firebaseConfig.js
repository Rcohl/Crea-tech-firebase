// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKkGiK9nkEudZ6_zEybjJb9Xku0ooBA0A",
    authDomain: "crea-tech-database-fa568.firebaseapp.com",
    projectId: "crea-tech-database-fa568",
    storageBucket: "crea-tech-database-fa568.appspot.com",
    messagingSenderId: "366481870483",
    appId: "1:366481870483:web:0d89ce38740f9f860f4766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
