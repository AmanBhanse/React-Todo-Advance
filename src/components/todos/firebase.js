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
    //TODO: paste you firebaseConfig here
};

//you can change the collection Name here
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
