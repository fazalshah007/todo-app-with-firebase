import React, { useState } from 'react'
import Loader from '../../components/Loader'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
     {
     isLoading ? (<Loader />) : (
      <>
      dashboard
      <Outlet />
      </>
     )
    }
    </>
  )
}

export default Dashboard