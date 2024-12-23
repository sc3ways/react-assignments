import { useContext } from "react";
import { TodoContext } from "../../store/store-todo-item";

const WelcomeTodoList = () => {
  const contextObj = useContext(TodoContext);
  const todoItems = contextObj.todoItems;
  return todoItems.length == 0 && <p>Enjoy: Add your list</p>;
};
export default WelcomeTodoList;
