# About Project

-   Project uses React Framework.
-   For state management redux is used.
-   For side effect, thunks is used.

# Steps to run the project

## Setting up your firebase

In order to run this project you will need to follow below steps

-   You need to have firebase account.
-   Once your account is ready, you need to create Firebase Project.
-   After you created the project, in your project dashboard go to Firestore Database.

-   In dashboard, under `Build` section (left wall) click on `Firestore Database`, `create database`
    dialogue box will appear,select `start in test mode` then click next , and then select location
    and click `enable`.
-   In Firestore Database, create the collection with ID `reduxTodoProjDB` (you can create with your
    own custom name too, but you will need to change the variable value
    `const FIREBASE_TODO_COLLECTION_NAME = "YOUR_CUSTOM_NAME"` present at file
    `./todos/firebase.js`).
-   Now go to `Project setting` from firebase dashboard, select `General` tab , under `General` tab
    under `Your apps` section, create web app, register app and click on `continue to console`.
    Under `Your apps` section

    `const firebaseConfig = { apiKey: "******", authDomain: "******", projectId: "******", storageBucket: "******", messagingSenderId: "******", appId: "******", measurementId: "******" };`

    just copy this from your dashboard and replace `firebaseConfig` variable present in
    `./todos/firebase.js` with your.

-   Done your firebase has been set. (note , if you are facing premission error or request error
    while running app, make sure you set you firebase premissions. you can change the premission
    from `Firebase database->rules->change the conditions`)

## Build and run the App

-   open terminal in your project , and run command `npm i`.
-   then run command `npm start`
