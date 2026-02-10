export default function AddTodoItem({getInputText,submitCta,title,props}) {
  return (
    <>
         <input type="text"
          onChange={onChange}> 
          <button onClick={submitCta}> 
            {title}</button>     
    </>
  );
}