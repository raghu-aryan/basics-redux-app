import { useDispatch, useSelector } from "react-redux";
import { todoDeleted } from "../../feature-store/todos/todosSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const handleOnDelete = id => dispatch(todoDeleted(id))
  return (<ul className="list-none">
    {todos.map(todo => (
      <li
        key={todo.id}
        className="pb-3 m-5 sm:pb-4 bg-blue-100 text-left pl-2 text-black"
      >
        {todo.title}
        <button
          type="button" 
          onClick={() => handleOnDelete(todo.id)}
          className="float-right ml-2 mr-2 mt-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded px-2 py-1">
          Delete
        </button>
      </li>
    ))}
  </ul>)
}
export default Todos;