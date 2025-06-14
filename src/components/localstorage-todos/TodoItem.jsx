import React, { useContext, useState } from "react";
import { FaFolderPlus, FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { TodoLocalContext } from "../../store/local-storage-context";
import DatePicker from "react-datepicker";

function TodoItem({ list }) {
  const [todoMsg, setTodoMsg] = useState(list.todoName);
  const [editingId, setEditingId] = useState(null);
  const [editTodoDate, setEditTodoDate] = useState(new Date());
  const { deleteTodo, updateTodo, toggleComplete } =
    useContext(TodoLocalContext);

  const deleteTodoHandler = () => {
    deleteTodo(list.id);
  };

  const updateTodoHandler = () => {
    updateTodo(list.id, { ...list, todoName: todoMsg, dueDate: editTodoDate });
  };
  const toggleCompleted = () => {
    toggleComplete(list.id, list.completed);
  };
  const formatDate = (date) => {
    if (!date || isNaN(new Date(date).getTime())) {
      return "Invalid date";
    }
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <li
      id={list.id}
      className={`list-group-item d-flex align-items-center my-3 justify-content-between ${
        list.completed ? "done" : "not-done"
      }`}
      style={{ background: list.completed ? "#baffba" : "white" }}
    >
      {editingId === list.id ? (
        <>
          <div className="form-check">
            <input
              className="form-check-input me-0"
              type="checkbox"
              checked={list.completed}
              onChange={toggleCompleted}
            />
          </div>
          <input
            type="text"
            id={list.id}
            className="lead-read-only w-75 fw-normal mb-0"
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
          />
          <DatePicker
            selected={editTodoDate}
            onChange={(date) => setEditTodoDate(date)}
          />
          <div className="action-btns">
            <div className="d-flex flex-row justify-content-end">
              <a
                onClick={updateTodoHandler}
                className="text-info"
                title="Edit todo"
                disabled={list.completed}
              >
                <FaFolderPlus />
              </a>
              <a
                onClick={() => setEditingId(null)}
                className="text-danger"
                title="Cancel"
              >
                Cancel
              </a>
            </div>
            <div className="text-end text-muted">
              <a
                href="#!"
                className="text-muted"
                data-mdb-tooltip-init
                title="Created date"
              >
                <p className="small mb-0">
                  <i className="fas fa-info-circle me-2"></i>28th Jun 2020
                </p>
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="form-check">
            <input
              className="form-check-input me-0"
              type="checkbox"
              onChange={toggleCompleted}
              checked={list.completed}
            />
          </div>
          <div className="todo-text">{list.todoName}</div>
          <div
            className={`action-btns ${
              list.completed ? "disabled" : "action-btns"
            }`}
          >
            <div className="d-flex flex-row justify-content-end">
              <a
                onClick={() => {
                  setEditingId(list.id);
                  setTodoMsg(list.todoName);
                }}
                className={`text-info`}
                title="Edit todo"
              >
                <MdEdit />
              </a>
              <a
                onClick={() => deleteTodoHandler(list.id)}
                className="text-danger"
                title="Delete todo"
              >
                <FaTrashAlt />
              </a>
            </div>
            <div className="text-end text-muted">
              <a
                href="#!"
                className="text-muted"
                data-mdb-tooltip-init
                title="Created date"
              >
                <p className="small mb-0">
                  <i className="fas fa-info-circle me-2"></i>
                  {/* {list.dueDate
                    ? new Date(list.dueDate).toLocaleDateString()
                    : "No date"} */}
                  {list.dueDate
                    ? formatDate(new Date(list.dueDate))
                    : "No date"}
                </p>
              </a>
            </div>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
