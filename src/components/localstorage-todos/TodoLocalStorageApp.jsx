import TodoForms from "./TodoForms";
import TodoItemsLists from "./TodoItemsLists";
import TodoLocalProvider from "../../store/local-storage-context";

function TodoLocalStorageApp() {
  return (
    <TodoLocalProvider>
      <section className="local-storage-todo-section">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body py-4 px-4">
                  <TodoForms />
                  <hr className="my-4" />
                  <TodoItemsLists />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TodoLocalProvider>
  );
}

export default TodoLocalStorageApp;
