


export default function AddTodoItem({submitCta,title,onChange,value,onKeyDown}) {
  return (
    <>
         <input type="text" value={value}onChange={onChange} onKeyDown={onKeyDown}/> 
          <button onClick={submitCta}> {title}</button>     
    </>
  );
}