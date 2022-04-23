import { useTodoContext } from "../../context/TodoContext2";
import TodoEdit from "../TodoEdit/TodoEdit";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  const { todos, dispatch } = useTodoContext();
  console.log(todos);

  return (
    <>
      <div className="list-container">
        <ul className="todo-lists">
          {todos.map((todo) => {
            if (todo.editing) {
              return <TodoEdit todo={todo} dispatch={dispatch} key={todo.id} />;
            } else {
              return (
                <TodoItem todo={todo} dispatch={dispatch} key={todo.id} />
                // <li className={`todo-list ${todo.done ? "todo-done" : "todo-not-done"}`} key={todo.id}>
                //   <button
                //     className="close-button"
                //     onClick={() => {
                //       dispatch({ type: "REMOVE", payload: todo });
                //     }}
                //   >
                //     X
                //   </button>
                //   <button
                //     className="check-button"
                //     onClick={() => {
                //       dispatch({ type: "DONE", payload: todo });
                //     }}
                //   >
                //     Done
                //   </button>
                //   <button className="edit-button">Edit</button>
                //   <h2>To do :</h2>
                //   <p className="to-do">{todo.activity}</p>

                //   <div className="date-and-time-list-container">
                //     <div className="date-list-container">
                //       <h2>Date : </h2>
                //       <p className="date">{todo.date}</p>
                //     </div>
                //     <div className="time-list-container">
                //       <h2>Time : </h2>
                //       <p className="time">{todo.time}</p>
                //     </div>
                //   </div>

                //   <h2>Details :</h2>
                //   <p className="details">{todo.details}</p>
                // </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
