import { useState } from "react";
import TodoList from "./TodoList";

interface TodoType {
  title: string;
  done: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [data, setData] = useState<string>("");

  return (
    <div className="App">
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button
        onClick={() => {
          setTodos([...todos, { title: data, done: false }]);
          setData("");
        }}
      >
        Add Todos!
      </button>
      <div className="todos">
        {todos.map((todo, index) => (
          <TodoList title={todo.title} done={todo.done} />
        ))}
      </div>
    </div>
  );
};

export default App;