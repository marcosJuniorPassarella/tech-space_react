import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOfPRsp-BXQXjcQRuQfk5GSW5xCf_Ar4Q",
  authDomain: "tech-space-544cd.firebaseapp.com",
  projectId: "tech-space-544cd",
  storageBucket: "tech-space-544cd.appspot.com",
  messagingSenderId: "959787283226",
  appId: "1:959787283226:web:b47a5846cbd98c626132a3",
  measurementId: "G-W80VJZWD72",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth, storage };
