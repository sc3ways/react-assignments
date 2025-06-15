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

const router = createBrowserRouter([
  {
    path: "/react-assignment/",
    element: <App />,
    children: [
      { path: "/react-assignment/", element: <Home /> },
      { path: "/react-assignment/assignments", element: <Assignments /> },
      { path: "/react-assignment/calculator", element: <Calculator /> },
      { path: "/react-assignment/todolist", element: <TodoList /> },
      { path: "/react-assignment/react-forms", element: <FormsApp /> },
      {
        path: "/react-assignment/react-theme-swicher",
        element: <ThemeSwitcherApp />,
      },
      {
        path: "/react-assignment/multi-theme-switcher",
        element: <MultiThemeSwitcherApp />,
      },
      {
        path: "/react-assignment/todo-in-localstorage",
        element: <TodoLocalStorageApp />,
      },
      {
        path: "/react-assignment/dynamic-country-lists",
        element: <CountryLists />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
