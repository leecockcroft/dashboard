"use client"

import {useState,useEffect} from 'react'
import AddTodoItem from "./AddTodoItem"
import ShowTodoItems from "./ShowTodoItems"
export default function TodoState() {

const [data,setData]= useState([])

const [todoItemInfo,setTotoItemInfo] = useState({
    getInputValue:"",
    editModeInputValue:""
    
})


const getInputTextValue = (e)=>{
  setTotoItemInfo(prev =>({...prev, getInputValue:(e.target.value)}))

}


const addTodoItem = ()=>{
  const idForItem = Date.now()
  setData(prev => ([...prev,{id:idForItem,name:todoItemInfo.getInputValue  }]))
console.log(data)
}

  return (
    <div>

        <h2> Todo List</h2>
        <AddTodoItem 
        getInputText={getInputTextValue}
        submitCta={addTodoItem}
        />

        <ShowTodoItems data={data}/>
    </div>
  );
}