
import "./App.css";
import { TodoProvider2 } from "./context/TodoContext2";
import TodoForm from "./todo/TodoForm/TodoForm";
import TodoList from "./todo/TodoList/TodoList";

function App() {
  return (
    <>


      <TodoProvider2>
        <TodoForm />
        <TodoList />
      </TodoProvider2>
    </>
  );
}

export default App;
