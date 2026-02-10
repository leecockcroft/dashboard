"use client"

import {useState,useEffect} from 'react'
import InputDetails from "./InputDetails"
import ShowTodoItems from "./ShowTodoItems"
export default function TodoState() {

const [data,setData]= useState([])

const [getInputValue,setGetInputValue] = useState("")
const [editedInputValue,setEditedInputValue] = useState("")



//*** DUPLICATED CODE */
const getInputTextValue = (e)=>{
  setGetInputValue(e.target.value)

}


//*** DUPLICATED CODE */
const getEditInputTextValue = (e)=>{
  setEditedInputValue(e.target.value)

}



const addTodoItem = ()=>{
  const idForItem = Date.now()
  setData(prev => ([...prev,{id:idForItem,name:getInputValue,editMode:false  }]))
setGetInputValue("")
}


const editTodoItem = (itemId)=>{
const getName = data.find(item => item.id === itemId)
setEditedInputValue(getName.name)
console.log(getName.name)
setData(prev => prev.map(item =>(

item.id === itemId ? (
  {...item,editMode:true}

) : item

)))


}

const updateEditedItem = (id)=>{

setData(prev => prev.map(item => (

  item.id===id ? {...item,name:editedInputValue,editMode:false}
  : item
)))


}

  return (
    <div>

        <h2> Todo List</h2>
        <InputDetails 
        value={getInputValue}
        onChange={getInputTextValue}
        onSubmit={addTodoItem}
        title={'Add Item'}
        />

        <ShowTodoItems data={data}
          edit={editTodoItem}
          onChange={getEditInputTextValue}
          value={editedInputValue}
          onSubmit={updateEditedItem}
          />
    </div>
  );
}