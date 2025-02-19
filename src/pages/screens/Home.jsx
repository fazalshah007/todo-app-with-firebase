import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../store/slices/asyncTaskSlice'

const Home = () => {
  const { isLoading, data, isError } = useSelector(state => state.asyncTask)
  const dispatch = useDispatch()

  const handleData = () => {
    dispatch(fetchData())
    
  }
  console.log(isLoading, data, isError);

  return (
    <div>
      <h1>hello world</h1>
      <button className='bg-yellow-300 px-4 py-2' onClick={handleData}>fetch data</button>
    </div>
  )
}

export default Home