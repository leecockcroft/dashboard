


export default function AddTodoItem({submitCta,title,onChange,value}) {
  return (
    <>
         <input type="text" value={value}onChange={onChange}/> 
          <button onClick={submitCta}> {title}</button>     
    </>
  );
}