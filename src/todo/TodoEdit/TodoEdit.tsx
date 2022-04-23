import { useState, useRef, useEffect } from "react";
import { TodoInterface, TodoAction } from "../../context/TodoContext2";

function TodoEdit({ todo, dispatch }: { todo: TodoInterface; dispatch: (value: TodoAction) => void }) {
  const [editForm, setEditForm] = useState<TodoInterface>(todo);
  const firstInputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  const editOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, todo: TodoInterface) => {
    const value = event.target.value;
    setEditForm({
      ...todo,
      [event.target.name]: value,
    });
  };

  return (
    <>
      <div className={`todo-list ${todo.done}`} key={todo.id}>
        <button
          className="close-button"
          onClick={() => {
            dispatch({ type: "REMOVE", payload: todo });
          }}
        >
          X
        </button>

        <button
          className="edit-button"
          onClick={() => {
            dispatch({ type: "CANCEL_EDIT", payload: todo });
          }}
        >
          {todo.editing ? "Cancel" : "Edit"}
        </button>

        <button
          className="check-button"
          onClick={() => {
            dispatch({ type: "SAVE_EDIT", payload: editForm });
          }}
        >
          Save
        </button>
        <h2>To do :</h2>
        <input
          className="editing-todo"
          type="text"
          name="activity"
          placeholder="what to do"
          value={editForm.activity}
          onChange={(event) => {
            editOnChangeHandler(event, todo);
          }}
          ref={firstInputRef}
        />

        <div className="date-and-time-list-container">
          <div className="date-list-container">
            <h2>Date : </h2>
            <input
              className="editing-todo"
              type="date"
              name="date"
              placeholder="date"
              value={editForm.date}
              onChange={(event) => {
                editOnChangeHandler(event, todo);
              }}
            />
          </div>
          <div className="time-list-container">
            <h2>Time : </h2>
            <input
              className="editing-todo"
              type="time"
              name="time"
              placeholder="time"
              value={editForm.time}
              onChange={(event) => {
                editOnChangeHandler(event, todo);
              }}
            />
          </div>
        </div>

        <h2>Details :</h2>
        <textarea
          className="editing-todo"
          name="details"
          placeholder="details"
          value={editForm.details}
          onChange={(event) => {
            editOnChangeHandler(event, todo);
          }}
        />
      </div>
    </>
  );
}

export default TodoEdit;
