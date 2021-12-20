import { initializeApp } from "firebase/app";
import {
    collection,
    getDocs,
    getFirestore,
    addDoc,
    doc,
    deleteDoc,
    updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBybFzLo2YENGKK1vDk9YnXsqKmGht3Lg4",
    authDomain: "todo-app-backend-aae15.firebaseapp.com",
    projectId: "todo-app-backend-aae15",
    storageBucket: "todo-app-backend-aae15.appspot.com",
    messagingSenderId: "270417615359",
    appId: "1:270417615359:web:d6f0cb4b4d327ac4ed2fca",
    measurementId: "G-6KZRXQLGS2",
};

const FIREBASE_TODO_COLLECTION_NAME = "reduxTodoProjDB";

//initialize app
initializeApp(firebaseConfig);

//init service
const db = getFirestore();

//get collection
export const todosColRef = collection(db, FIREBASE_TODO_COLLECTION_NAME);

//get data

export const getTodosFromDB = async () => {
    const snapshot = await getDocs(todosColRef);
    return snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
    });
};

export const addTodoToDB = async (todoText) => {
    //Initialization
    const isCompleted = false;
    const text = todoText;

    //Save Data to server
    const createdTodoDocRef = await addDoc(todosColRef, {
        isCompleted,
        text,
    });

    const todo = {
        id: createdTodoDocRef.id,
        text,
        isCompleted,
    };

    return todo;
};

export const deleteTodoFromDB = async (todoID) => {
    const docRef = doc(db, FIREBASE_TODO_COLLECTION_NAME, todoID);
    const todoDelete = await deleteDoc(docRef);
    return todoDelete;
};

export const markTodoAsCompleteInDB = async (todoID) => {
    const docRef = doc(db, FIREBASE_TODO_COLLECTION_NAME, todoID);

    await updateDoc(docRef, { isCompleted: true });
};
