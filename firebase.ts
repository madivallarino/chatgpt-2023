import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC77g0O6jBuQS5p2m2SwMyV5xpR8XRcJoU",
    authDomain: "chat-gpt-2023-cf4e7.firebaseapp.com",
    projectId: "chat-gpt-2023-cf4e7",
    storageBucket: "chat-gpt-2023-cf4e7.appspot.com",
    messagingSenderId: "524000441486",
    appId: "1:524000441486:web:2fe71cc7b87729d7ad85df"
  };

 const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
 const db = getFirestore(app);

 export { db }