export default function AddTodoItem({value,onChange,onSubmit,title,id}
  
) {
  return (
    <>
         <input type="text"  value={value} onChange={onChange}/> <button className="rounded-sm bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500" onClick={()=>onSubmit(id)}> {title}</button>     
    </>
  );
}