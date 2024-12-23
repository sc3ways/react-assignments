import { useContext } from "react";
import { TiTimes } from "react-icons/ti";
import { TodoContext } from "../../store/store-todo-item";

const TodoListItem = () => {
  const { todoItems, handleDeleteTodoBtn } = useContext(TodoContext);
  return (
    <>
      <ul className="todolists">
        {todoItems.map((newItem) => (
          <li
            key={newItem}
            className="d-flex justify-content-between align-items-center"
          >
            <span className="todoname">{newItem}</span>
            <button
              className="deleteBtn"
              onClick={() => handleDeleteTodoBtn(newItem)}
            >
              <TiTimes />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TodoListItem;
