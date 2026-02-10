export default function ShowTodoItems({data}) {
  return (
    <>
      <ul>
{data.map((item,index)=>(

<li key={item.id}> {item.name} <button> edit</button> <button>Delete</button></li>


))}




      </ul>
    </>
  );
}