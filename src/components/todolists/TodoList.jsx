import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoListItem from "./TodoListItem";
import WelcomeTodoList from "./WelcomeTodoList";
import { TodoContext } from "../../store/store-todo-item";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);

  const handleTodoItem = (todoName) => {
    const newTodoItems = [todoName, ...todoItems];
    setTodoItems(newTodoItems);
  };

  const handleDeleteTodoBtn = (deleteItemName) => {
    const newItems = todoItems.filter((item) => item !== deleteItemName);
    setTodoItems(newItems);
  };

  return (
    <TodoContext.Provider
      value={{ todoItems, handleTodoItem, handleDeleteTodoBtn }}
    >
      <div className="todolists-section py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <div className="todo-box">
                <h2 className="text-center">To-do Lists</h2>
                <AddTodo />
                <div className="item-list">
                  <WelcomeTodoList />
                  <TodoListItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
};
export default TodoList;
