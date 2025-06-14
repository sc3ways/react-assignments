import React, { useContext, useState } from "react";
import { TodoLocalContext } from "../../store/local-storage-context";
import DatePicker from "react-datepicker";
function TodoForms() {
  const { addTodo } = useContext(TodoLocalContext);
  const [todoName, setTodoName] = useState("");
  const [newTodoDate, setNewTodoDate] = useState(new Date());

  const addTodoHandler = () => {
    if (todoName.trim()) {
      addTodo(todoName, newTodoDate);
      setTodoName("");
      setNewTodoDate("");
    }
  };

  return (
    <div className="add-todo-forms d-flex flex-row align-items-center">
      <input
        type="text"
        className="form-control"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        placeholder="Add new..."
      />
      <a href="#" className="calendar-icon">
        <DatePicker
          showIcon
          selected={newTodoDate}
          onChange={(date) => setNewTodoDate(date)}
        />
      </a>
      <div>
        <button
          type="button"
          onClick={addTodoHandler}
          className="btn btn-primary add-btn"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoForms;
