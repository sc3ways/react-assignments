import {
  Children,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export const TodoLocalContext = createContext({
  todoLists: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});

const todoReducer = (currentData, action) => {
  let newTodoLists = currentData;
  if (action.type === "ADDTODO") {
    newTodoLists = [action.payload, ...currentData];
  }
  if (action.type === "DELETETODO") {
    newTodoLists = currentData.filter((item) => item.id !== action.payload.id);
  }
  if (action.type === "UPDATETODO") {
    newTodoLists = currentData.map((item) =>
      item.id === action.payload.id
        ? { ...item, todoName: action.payload.todoName }
        : item
    );
  }
  if (action.type === "TODOCOMPLETED") {
    newTodoLists = currentData.map((item) =>
      item.id === action.payload.id
        ? { ...item, completed: !action.payload.completed }
        : item
    );
  }
  return newTodoLists;
};

const TodoLocalProvider = ({ children }) => {
  const [todoLists, dispatchTodoLists] = useReducer(todoReducer, DEFAULT_LISTS);

  const addTodo = (todoName, newTodoDate) => {
    dispatchTodoLists({
      type: "ADDTODO",
      payload: {
        id: Date.now(),
        todoName,
        completed: false,
        dueDate: newTodoDate,
      },
    });
  };
  const deleteTodo = (id) => {
    dispatchTodoLists({
      type: "DELETETODO",
      payload: {
        id,
      },
    });
  };
  const updateTodo = (id, todoName) => {
    dispatchTodoLists({
      type: "UPDATETODO",
      payload: {
        id,
        todoName,
      },
    });
  };
  const toggleComplete = (id, completed) => {
    dispatchTodoLists({
      type: "TODOCOMPLETED",
      payload: {
        id,
        completed,
      },
    });
  };
  return (
    <TodoLocalContext.Provider
      value={{ todoLists, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      {children}
    </TodoLocalContext.Provider>
  );
};

const DEFAULT_LISTS = [
  {
    id: "001",
    todoName: "Learning development react",
    completed: false,
    dueDate: "06/01/2025",
  },
  {
    id: "002",
    todoName: "Learning spoken English.",
    completed: false,
    dueDate: "06/01/2025",
  },
];

export default TodoLocalProvider;
