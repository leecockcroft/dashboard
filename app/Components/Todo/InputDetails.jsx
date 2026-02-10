export default function AddTodoItem({value,onChange,onSubmit,title,id}
  
) {
  return (
    <>
         <input type="text"  value={value} onChange={onChange}/> <button onClick={()=>onSubmit(id)}> {title}</button>     
    </>
  );
}