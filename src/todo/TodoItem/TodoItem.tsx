import { TodoInterface, TodoAction } from "../../context/TodoContext2";

function TodoItem({ todo, dispatch }: { todo: TodoInterface; dispatch: (value: TodoAction) => void }) {
  return (
    <>
      <li className={`todo-list ${todo.done ? "todo-done" : "todo-not-done"}`} key={todo.id}>
        <button
          className="close-button"
          onClick={() => {
            dispatch({ type: "REMOVE", payload: todo });
          }}
        >
          X
        </button>
        <button
          className="check-button"
          onClick={() => {
            dispatch({ type: "DONE", payload: todo });
          }}
        >
          {todo.done ? "Undone" : "Done"}
        </button>
        <button
          className="edit-button"
          onClick={() => {
            dispatch({ type: "EDIT", payload: todo });
          }}
        >
          Edit
        </button>
        <h2>To do :</h2>
        <p className="to-do">{todo.activity}</p>

        <div className="date-and-time-list-container">
          <div className="date-list-container">
            <h2>Date : </h2>
            <p className="date">{todo.date}</p>
          </div>
          <div className="time-list-container">
            <h2>Time : </h2>
            <p className="time">{todo.time}</p>
          </div>
        </div>

        <h2>Details :</h2>
        <p className="details">{todo.details}</p>
      </li>
    </>
  );
}

export default TodoItem;
