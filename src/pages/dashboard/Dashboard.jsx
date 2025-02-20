import React, { useState } from 'react'
import Loader from '../../components/Loader'

import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { Collapse } from "@mui/material";
import { Outlet } from 'react-router-dom'

const Dashboard = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // menu options states here 
  const [overview, setOverview] = useState(false);
  const [products, setProducts] = useState(false);


  const signOut = () => {
    localStorage.clear()
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
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     
          <div className='p-6 shadow-lg'>Box 1</div>
          <div className='p-6 shadow-lg'>Box 1</div>
          <div className='p-6 shadow-lg'>Box 1</div>
          <div className='p-6 shadow-lg'>Box 1</div>
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