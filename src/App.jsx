import { Navigate, Route, Routes } from "react-router-dom"
import SignIn from "./pages/SignIn"
import Home from "./pages/screens/Home"
import Signup from "./pages/SignUp"
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
// import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./pages/dashboard/products/Products";

function App() {



  const [userID, setUserID] = useState(localStorage.getItem("authUserIdWithFirebase"));
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('signInUserData')))

  useEffect(() => {
    
    const handleStorageChange = () => {
      const newUserID = localStorage.getItem("authUserIdWithFirebase");
      const newUserData = JSON.parse(localStorage.getItem("signInUserData"))

      if(newUserID !== userID){
        setUserID(newUserID);
      }

      if (JSON.stringify(newUserData) !== JSON.stringify(userData)) {
        setUserData(newUserData);
      }

    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [userID, userData?.role]);

  return (
    <>

      <Routes>

        {/* user routes */}
        <Route path="/" element={userID && userData?.role === "user" ? (<Home />) : (<Navigate to='/login' replace />)} />

        {/* admin routes  */}
        <Route path="/admin" element={userID && userData?.role === "admin" ? (<Dashboard setUserID={setUserID} />) : (<Navigate to='/login' replace />)} >
          <Route path="products" element={ <Products /> } />
        </Route>

        <Route path="/login" element={userID && userData?.role === "user" ? (<Navigate to='/' replace />) : userID && userData?.role === "admin" ? (<Navigate to='/admin' replace />) : (<SignIn setUserID={setUserID} setUserData={setUserData} />) } />

     
        <Route path="/signup" element={userID && userData?.role === "user" ? (<Navigate to='/' replace />) : userID && userData?.role === "admin" ? (<Navigate to='/admin' replace />) : (<Signup />)} />



        {/* Default Redirect */}
        <Route path="*" element={<h1>page Not Found</h1>} />
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
