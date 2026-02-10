"use client"

import {useState,useEffect} from 'react'
import InputDetails from "./InputDetails"
import ShowTodoItems from "./ShowTodoItems"
export default function TodoState() {

const [data,setData]= useState([])

const [getInputValue,setGetInputValue] = useState()
const [editedInputValue,setEditedInputValue] = useState()
    



const getInputTextValue = (e)=>{
  setGetInputValue(e.target.value)

}


const addTodoItem = ()=>{
  const idForItem = Date.now()
  setData(prev => ([...prev,{id:idForItem,name:getInputValue  }]))
setGetInputValue("")
}

  return (
    <div>

        <h2> Todo List</h2>
        <InputDetails 
        value={getInputValue}
        onChange={getInputTextValue}
        onSubmit={addTodoItem}
        />

        <ShowTodoItems data={data}/>
    </div>
  );
}