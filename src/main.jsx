import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./layout.css";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Assignments from "./routes/Assignments.jsx";
import Home from "./routes/Home.jsx";
import Calculator from "./components/calculator/Calculator.jsx";
import TodoList from "./components/todolists/TodoList.jsx";
import FormsApp from "./components/form-submission/FormsApp.jsx";
import ThemeSwitcherApp from "./components/theme-switcher/ThemeSwitcherApp.jsx";
import MultiThemeSwitcherApp from "./components/multi-theme-switcher/MultiThemeSwitcherApp.jsx";
import TodoLocalStorageApp from "./components/localstorage-todos/TodoLocalStorageApp.jsx";
import CountryLists from "./components/country-lists/index.jsx";
import CountryDetail from "./components/country-lists/CountryDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/assignments", element: <Assignments /> },
      { path: "/assignments/calculator", element: <Calculator /> },
      { path: "/assignments/todolist", element: <TodoList /> },
      { path: "/assignments/react-forms", element: <FormsApp /> },
      {
        path: "/assignments/react-theme-swicher",
        element: <ThemeSwitcherApp />,
      },
      {
        path: "/assignments/multi-theme-switcher",
        element: <MultiThemeSwitcherApp />,
      },
      {
        path: "/assignments/todo-in-localstorage",
        element: <TodoLocalStorageApp />,
      },
      {
        path: "/assignments/dynamic-country-lists",
        element: <CountryLists />,
      },
      {
        path: "/assignments/:country",
        element: <CountryDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
