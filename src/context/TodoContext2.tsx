import { createContext, ReactNode, useContext, useReducer } from "react";

export interface TodoInterface {
  activity: string;
  date: string;
  time: string;
  details: string;
  done: boolean;
  editing: boolean;
  id: number;
}
interface TodoContextValue {
  todos: TodoInterface[];
  dispatch: React.Dispatch<TodoAction>;
}
export const TodoContext = createContext({} as TodoContextValue);
export const useTodoContext = () => {
  return useContext(TodoContext);
};

export type TodoAction = {
  type: "ADD" | "REMOVE" | "DONE" | "EDIT" | "SAVE_EDIT" | "CANCEL_EDIT";
  payload: TodoInterface;
};

const findIndex = (todos: TodoInterface[], targetIndexId: number) => {
  const index = todos.findIndex((todo) => {
    return todo.id === targetIndexId;
  });
  return index;
};

const reducer = (todos: TodoInterface[], action: TodoAction) => {
  switch (action.type) {
    case "ADD":
      return [...todos, action.payload];
    case "REMOVE":
      const updatedRemovedTodos = todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });
      return [...updatedRemovedTodos];

    case "DONE":
      const DoneIndex = findIndex(todos, action.payload.id);

      const doneTodo = { ...action.payload, done: !action.payload.done };

      const updatedDoneTodos = [...todos];
      updatedDoneTodos[DoneIndex] = doneTodo;

      //   console.log(doneTodo, updatedDoneTodos);
      return updatedDoneTodos;
    case "EDIT":
      const editIndex = findIndex(todos, action.payload.id);

      const editingTodo = { ...action.payload, editing: !action.payload.editing };

      const updatedEditingTodos = [...todos];
      updatedEditingTodos[editIndex] = editingTodo;

      return updatedEditingTodos;

    case "SAVE_EDIT":
      const saveEditIndex = findIndex(todos, action.payload.id);

      const saveEditingTodo = { ...action.payload, editing: !action.payload.editing };

      const updatedSavedTodos = [...todos];
      updatedSavedTodos[saveEditIndex] = saveEditingTodo;

      return updatedSavedTodos;
    case "CANCEL_EDIT":
      const cancelEditIndex = findIndex(todos, action.payload.id);

      const cancelEditingTodo = { ...action.payload, editing: !action.payload.editing };

      const updatedCancelledTodos = [...todos];
      updatedCancelledTodos[cancelEditIndex] = cancelEditingTodo;

      return updatedCancelledTodos;
    default:
      return todos;
  }
};

const initialState = [] as TodoInterface[];

export function TodoProvider2({ children }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <TodoContext.Provider value={{ todos, dispatch }}>{children}</TodoContext.Provider>
    </>
  );
}
