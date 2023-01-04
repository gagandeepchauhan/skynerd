import firebase from "firebase/compat/app";
import "firebase/compat/database";
import {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_APP_ID
} from "@env";

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY, 
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    appId: FIREBASE_APP_ID
};

let app;

if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

export const database = app.database();
export default app;