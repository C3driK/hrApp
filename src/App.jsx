import "./App.css";
import "./pages/Person/Person.css";
import PersonList from "./pages/Person/PersonList.jsx";
import AddEmployee from "./pages/addEmployee/AddEmployee.jsx";
import About from "./pages/about/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useState } from "react";
import { employees } from "./data/employeeData.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PersonList />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/add",
      element: <AddEmployee />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
