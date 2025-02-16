import React, { useState } from 'react'
import { firestore } from '../firebaseConfig';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { TextField } from '@mui/material';

const TodoItem = ({setLoading, todoId, todoItem, uid, setMount, mount}) => {


  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState('');

  const handleEdit = () => {
    setEditedText(todoItem)
       setIsEditing(true);
    };


    const handleUpdate = async () => {
      setLoading(true)
      const updateDocRef = doc(firestore, "todos", uid, "tasks", todoId)
      await updateDoc(updateDocRef,{
        task: editedText
      })
      
      setIsEditing(false);
      setMount(!mount)
      
    }

    const handleDelete = async () => {
      setLoading(true)
      
      await deleteDoc(doc(firestore, `todos/${uid}/tasks`, todoId));
      
      setIsEditing(false);
      setMount(!mount)
    }
  
  return (
    <>
    <div className='mx-auto mt-2'>
    <div className="flex items-center justify-between bg-gray-200 p-4 rounded-lg shadow-md my-2">
    {isEditing ? (
         <TextField
           id="standard-basic" fullWidth label="Standard" variant="standard"
           value={editedText}
           onChange={(e) => setEditedText(e.target.value)}
           className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       ) : (
         <p className="text-lg">{todoItem}</p>
       )}

<div className="flex space-x-2">
         {isEditing ? (
           <button
             onClick={handleUpdate}
             className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
           >
             Update
           </button>
         ) : (
          <>
           <button
             onClick={handleEdit}
             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
           >
             Edit
           </button>
           <button
           onClick={handleDelete}
             className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
           >
             Delete
           </button>
          </>
          
         )}
       </div>

    </div>
    </div>
    </>
  )
}

export default TodoItem