import React, { useState } from 'react'
import Loader from '../../components/Loader'

import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { Collapse } from "@mui/material";
import { Outlet, useLocation } from 'react-router-dom'

const Dashboard = ({ setUserID }) => {

  const location = useLocation()

  const [isLoading, setIsLoading] = useState(false)
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // menu options states here 
  const [overview, setOverview] = useState(false);
  const [products, setProducts] = useState(false);


  const signOut = () => {
    localStorage.clear()
    setUserID(null)
  }

  return (
    <>
     {
     isLoading ? (<Loader />) : (
      <>
      
      <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white p-4 transition-all duration-300 overflow-y-auto ${
          isSidebarOpen ? "w-48 md:w-64" : "w-16"
        }`}
      >
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="mb-8 text-white"
        >
          <MenuIcon />
        </button>

        <div className=''>
          
          {/* menu collapesible here  */}

        <div className="cursor-pointer mt-4" onClick={() => setOverview(!overview)}>
          <div className="flex items-center justify-between p-2 hover:bg-gray-700 rounded">
            <div>
            <ViewQuiltIcon className='mr-2' />
            {isSidebarOpen && <span>Overview</span>}
            </div>
            {isSidebarOpen && (overview ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />)}
          </div>
        </div>
       

        <Collapse in={overview}>
          <div className="pl-4">
            <div className="p-2 hover:bg-gray-700 rounded">Submenu 1</div>
            <div className="p-2 hover:bg-gray-700 rounded">Submenu 2</div>
            <div className="p-2 hover:bg-gray-700 rounded">Submenu 3</div>
          </div>
        </Collapse>

          {/* menu collapesible here  */}
          
          
          {/* menu collapesible here  */}

        <div className="cursor-pointer mt-4" onClick={() => setProducts(!products)}>
          <div className="flex items-center justify-between p-2 hover:bg-gray-700 rounded">
            <div>
            <StorefrontIcon className='mr-2' />
            {isSidebarOpen && <span>Products</span>}
            </div>
            {isSidebarOpen && (products ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />)}
          </div>
        </div>
       

        <Collapse in={products}>
          <div className="pl-4">
            <div className="p-2 hover:bg-gray-700 rounded">Submenu 1</div>
            <div className="p-2 hover:bg-gray-700 rounded">Submenu 2</div>
            <div className="p-2 hover:bg-gray-700 rounded">Submenu 3</div>
          </div>
        </Collapse>

          {/* menu collapesible here  */}
          
        </div>
       
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-gray-800 text-white shadow p-4 flex justify-between">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <div>
            <button className='cursor-pointer ' onClick={signOut} ><ExitToAppIcon /></button>
          </div>
        </div>

        {/* Core Content */}
        <div className="p-4 grid place-items-center h-screen">
     
          <div className='h-full w-full'>

            {
              location.pathname === "/admin" ? (

                // dashboard admin home page code here ...
                <Loader />

              ) : (

                // nested routing all component will be rendered here ...
                
                <Outlet />
              )
            }
 
         

          </div>
        </div>
      </div>
    </div>
      
      </>
     )
    }
    </>
  )
}

export default Dashboard