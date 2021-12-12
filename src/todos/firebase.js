import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBybFzLo2YENGKK1vDk9YnXsqKmGht3Lg4",
    authDomain: "todo-app-backend-aae15.firebaseapp.com",
    projectId: "todo-app-backend-aae15",
    storageBucket: "todo-app-backend-aae15.appspot.com",
    messagingSenderId: "270417615359",
    appId: "1:270417615359:web:d6f0cb4b4d327ac4ed2fca",
    measurementId: "G-6KZRXQLGS2",
};

//initialize app
const firebaseApp = initializeApp(firebaseConfig);

//init service
const db = getFirestore();

//get collection
export const todosColRef = collection(db, "reduxTodoProjDB");

//get data

export const getTodosFromDB = () => {
    let todos = [];
    getDocs(todosColRef).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            todos.push({ ...doc.data() });
        });
    });
    return todos;
};
