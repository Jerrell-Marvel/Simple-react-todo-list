import React, { useState } from "react";
import { useTodoContext, TodoInterface } from "../../context/TodoContext2";

function Form() {
  const { dispatch } = useTodoContext();
  const [todoForm, setTodoForm] = useState<TodoInterface>({
    activity: "",
    date: "",
    time: "",
    details: "",
    done: false,
    editing: false,
    id: 0,
  });

    const formOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, todo: TodoInterface) => {
      const value = event.target.value;
      setTodoForm({
        ...todo,
        [event.target.name]: value,
      });
    };

  const formSubmitHandler = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({ type: "ADD", payload: { ...todoForm, id: Date.now() } });
    setTodoForm({
      activity: "",
      date: "",
      time: "",
      details: "",
      done: false,
      editing: false,
      id: 0,
    });
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={formSubmitHandler}>
        <label htmlFor="todo">To do : </label>
        <input
          required
          type="text"
          id="todo"
          name="activity"
          placeholder="what to do"
          onChange={(event) => {
            formOnChangeHandler(event, todoForm);
          }}
          value={todoForm.activity}
        />

        <div className="date-and-time-container">
          <div className="date-container">
            <label htmlFor="date">Date : </label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="dd/mm/yy"
              onChange={(event) => {
                formOnChangeHandler(event, todoForm);
              }}
              value={todoForm.date}
            />
          </div>
          <div className="time-container">
            <label htmlFor="time">Time : </label>
            <input
              type="time"
              id="time"
              name="time"
              placeholder="12:00"
              onChange={(event) => {
                formOnChangeHandler(event, todoForm);
              }}
              value={todoForm.time}
            />
          </div>
        </div>
        <label htmlFor="details">Details : </label>
        <textarea
          name="details"
          id="details"
          cols={5}
          rows={3}
          placeholder="details"
          onChange={(event) => {
            formOnChangeHandler(event, todoForm);
          }}
          value={todoForm.details}
        ></textarea>

        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
