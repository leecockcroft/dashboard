
import InputDetails from './InputDetails'

export default function ShowTodoItems({data,edit,onChange,value,onSubmit}) {
  return (
    <>
      <ul>
{data.map((item,index)=>(

<li key={item.id}> 
  
  {item.editMode ? <InputDetails title="save" id={item.id} onSubmit={onSubmit} onChange={onChange} value={value} /> :(


<> {item.name} <button onClick={()=>edit(item.id)}> edit</button> <button>Delete</button></>

  )}
 
  
  
  
  </li>


))}




      </ul>
    </>
  );
}