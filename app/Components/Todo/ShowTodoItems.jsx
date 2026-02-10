
import InputDetails from './InputDetails'

export default function ShowTodoItems({data,edit,onChange,value,onSubmit}) {
  return (
    <>
      <ul>
{data.map((item,index)=>(

<li  key={item.id} className={` pt-2 grid sm:grid-cols-1  md:grid-cols-[2fr_1fr_1fr] gap-2 ${item.editMode} ? "active" : "notactive" `}> 
  
  {item.editMode ? <InputDetails title="save" id={item.id} onSubmit={onSubmit} onChange={onChange} value={value} /> :(


<> {item.name} <button className="rounded-sm bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500" onClick={()=>edit(item.id)}> edit</button> <button className="rounded-sm bg-[red] px-2 py-1 text-xs font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500">Delete</button></>

  )}
 
  
  
  
  </li>


))}




      </ul>
    </>
  );
}