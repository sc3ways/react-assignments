import { useContext, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { TodoContext } from "../../store/store-todo-item";

const AddTodo = () => {
  const { handleTodoItem } = useContext(TodoContext);
  const [addtodo, setAddtodo] = useState("");
  const [error, setError] = useState("");

  const handleTodoValueChange = (e) => {
    setAddtodo(e.target.value);
    if (error) {
      setError("");
    }
  };

  const handleAddtodoBtn = () => {
    if (!addtodo.trim()) {
      setError("Input cannot be empty.");
      return;
    }
    if (addtodo.length < 3) {
      setError("Input must be at least 3 characters long.");
      return;
    }
    handleTodoItem(addtodo);
    setAddtodo("");
  };
  return (
    <div className="add-todo">
      <div className="d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your To-Do"
          value={addtodo}
          onChange={handleTodoValueChange}
        />
        <button type="button" className="addTodobtn" onClick={handleAddtodoBtn}>
          <IoMdAdd />
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
export default AddTodo;
