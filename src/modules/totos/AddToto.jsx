import { useDispatch } from "react-redux"
import { todoAdded } from "../../feature-store/todos/todosSlice";
import { useState } from "react";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(todoAdded(input));
    setInput('');
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Enter title"
        onChange={(e) => setInput(e.target.value)}
        className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />
      <button
        type="submit"
        disabled={input == '' ? true : false}
        className="ml-2 mr-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded px-2 py-1"
      >Add Todo</button>
    </form>
  </div>
}
export default AddTodo;