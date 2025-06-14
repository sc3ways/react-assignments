import React, { useContext, useEffect } from "react";

import { TodoLocalContext } from "../../store/local-storage-context";
import TodoItem from "./TodoItem";

function TodoItemsLists() {
  const { todoLists } = useContext(TodoLocalContext);

  return (
    <div>
      <ul className="todo-list-group">
        {todoLists.map((list) => (
          <TodoItem key={list.id} list={list} />
        ))}
      </ul>
    </div>
  );
}

export default TodoItemsLists;
