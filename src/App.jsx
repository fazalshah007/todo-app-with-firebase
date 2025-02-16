import { Navigate, Route, Routes } from "react-router-dom"
import SignIn from "./pages/SignIn"
import Todo from "./pages/todoScreen/Todo"
import Signup from "./pages/SignUp"
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar"

function App() {

  const [userID, setUserID] = useState(localStorage.getItem("authUserID"));

  useEffect(() => {
    const handleStorageChange = () => {
      setUserID(localStorage.getItem("authUserID"));
    };

    window.addEventListener("storage", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [userID]);
  
  return (
    <>
    {userID && <Navbar setUserID={setUserID}/>}
    <Routes>
      {/* <Route  element={ <Navbar />} /> */}
     
        <Route path="/" element={userID ? (<Todo />) : (<Navigate to='/login' replace />)} />
  
      <Route path="/login" element={userID ? (<Navigate to='/' replace />) :(<SignIn setUserID={setUserID} />)} />
      <Route path="/signup" element={userID ? (<Navigate to='/' replace />) :(<Signup />)} />
    </Routes>


    <ToastContainer
position="top-center"
autoClose={3000}
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
