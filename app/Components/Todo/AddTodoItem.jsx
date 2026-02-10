export default function AddTodoItem({getInputText,submitCta}) {
  return (
    <>
         <input type="text" onChange={getInputText}/> <button onClick={submitCta}> Add Todo</button>     
    </>
  );
}