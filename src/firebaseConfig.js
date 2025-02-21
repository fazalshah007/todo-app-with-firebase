import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "todo-app-005.firebaseapp.com",
  projectId: "todo-app-005",
  storageBucket: "todo-app-005.firebasestorage.app",
  messagingSenderId: "717574067527",
  appId: "1:717574067527:web:29c0581b65053b6276a862"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)

export { auth, firestore };