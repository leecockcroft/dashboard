export default function AddTodoItem({value,onChange,onSubmit}
  
) {
  return (
    <>
         <input type="text"  value={value} onChange={onChange}/> <button onClick={onSubmit}> Add Todo</button>     
    </>
  );
}