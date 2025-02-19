// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"

// const firebaseConfig = {
//   apiKey: "AIzaSyD6l0UwbWtP6eD4xKMVYUwXt290NqHCGN4",
//   authDomain: "todo-app-005.firebaseapp.com",
//   projectId: "todo-app-005",
//   storageBucket: "todo-app-005.firebasestorage.app",
//   messagingSenderId: "717574067527",
//   appId: "1:717574067527:web:29c0581b65053b6276a862"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBUZqJ3CRX0pPQfNe5EvQTAGYCAe2OwTuE",
  authDomain: "react-hackathon-05.firebaseapp.com",
  projectId: "react-hackathon-05",
  storageBucket: "react-hackathon-05.firebasestorage.app",
  messagingSenderId: "111935827576",
  appId: "1:111935827576:web:d423da86a88ab9cfbf878d"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app)

export { auth, db };

