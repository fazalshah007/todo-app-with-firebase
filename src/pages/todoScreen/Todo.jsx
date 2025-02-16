import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TodoList from '../../components/TodoItem'
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore"
import { firestore } from '../../firebaseConfig'
import Loader from "../../components/Loader"
import { toast } from 'react-toastify'

const Todo = () => {

  const [loading, setLoading] = useState(true)
  const [mount, setMount] = useState(false)
  const [task,setTask] = useState('')
  const [taskData, setTaskData] = useState([])
  let taskList = []

  const uid = localStorage.getItem('authUserID')
  const userDataEmail = JSON.parse(localStorage.getItem("userData"))
  
  useEffect(()=>{
    
    const fetchTasks = async () => {
      try {

        const taskCollectionRef = collection(firestore,`todos/${uid}/tasks`)
        const snapShot = await getDocs(taskCollectionRef)
        snapShot.forEach((doc)=>{
          taskList.push({taskID: doc.id, ...doc.data()})          
        })

        setTaskData(taskList)
        setTask("")
        setLoading(false)
        
      } catch (error) {
        console.log(error);
        setLoading(false)
        
        
      }
    }
    fetchTasks()
  },[mount])
  

  const addTodoDocoument = async () => {
    if(!task){
      toast.error('Please Enter your Task!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      return;
    }
    try {
        setLoading(true)
        await setDoc(doc(firestore,"todos",uid),userDataEmail);
        await addDoc(collection(firestore, `todos/${uid}/tasks`), {task});

        setMount(!mount)
        toast.success('Task Added!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });

    } catch (error) {
      console.log(error);
      
    }

  }


  const deleteSubcollection = async () => {
    try {
      setLoading(true)
      const subcollectionRef = collection(firestore, `todos/${uid}/tasks`);
      const snapshot = await getDocs(subcollectionRef);
  
      const deletePromises = snapshot.docs.map((document) => deleteDoc(doc(firestore, `todos/${uid}/tasks`, document.id)));
  
      await Promise.all(deletePromises);
      setMount(!mount)
  
    } catch (error) {
      console.error("Error deleting subcollection:", error);
    }
  };

  return (
    <>
    {
      loading ? (
        <div className='w-full h-screen grid place-items-center'>
        <span className='flex flex-col items-center'>
        <Loader />
        <h1 className='mt-4 text-2xl'>wait few minutes</h1>
        </span>
        </div>
      ) : (
        <div className='container'>
        <h1 className='text-center text-4xl mt-8 mb-8'>Todo List</h1>
        <div className='px-8 py-4 mt-8 flex'>
        <TextField onChange={e=> setTask(e.target.value)} value={task} variant="standard" fullWidth label="Add Task" id="fullWidth" />
        <button onClick={addTodoDocoument} className='shrink-0 bg-blue-500 hover:bg-blue-600 text-[12px] inline-block px-2 md:text-lg md:px-4 md:py-2 text-white rounded ml-2'>Add Task</button>
        <button
        onClick={deleteSubcollection}
         className='shrink-0 bg-red-500  hover:bg-red-600 text-[12px] inline-block px-2 md:text-lg md:px-4 md:py-2 text-white rounded ml-2'>Delete All</button>
        </div>

       
       
            {/* single todo  */}
            <div>
              {
                taskData.map((element,index) => {
                  return (
                    <TodoList setLoading={setLoading} todoId={element.taskID} todoItem={element.task} uid={uid} setMount={setMount} mount={mount} key={index} />
                  )
                })
              }
            </div>
     

      </div>  
      )
    }
   

      
    </>
  )
}

export default Todo