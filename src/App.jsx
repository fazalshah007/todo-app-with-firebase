import { Navigate, Route, Routes } from "react-router-dom"
import SignIn from "./pages/SignIn"
import Home from "./pages/screens/Home"
import Signup from "./pages/SignUp"
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {



  const [userID, setUserID] = useState(localStorage.getItem("authUserIdWithFirebase"));
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('signInUserData')))

  useEffect(() => {
    console.log(userData);
    
    const handleStorageChange = () => {
      setUserID(localStorage.getItem("authUserIdWithFirebase"));

    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [userID]);

  return (
    <>

      <Routes>

        <Route path="/" element={userID && userData.role === "user" ? (<Home />) : (<Navigate to='/login' replace />)} />

        <Route path="/login" element={userID && userData.role === "user" ? (<Navigate to='/' replace />) : (<SignIn setUserID={setUserID} />)} />
        <Route path="/signup" element={userID && userData.role === "user" ? (<Navigate to='/' replace />) : (<Signup />)} />
      </Routes>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
