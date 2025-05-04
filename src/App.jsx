import "./App.css";
import AddEmployee from "./pages/addEmployee/AddEmployee.jsx";
import About from "./pages/about/About.jsx";
import PersonList from "./pages/Person/PersonList.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useState } from "react";
import { employees } from "./data/employeeData.js";

function App() {
  const [formData, setFormData] = useState(employees);

  const addEmployeeHandler = (newPerson) => {
    setFormData((prev) => [...prev, { ...newPerson, id: Date.now() }]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PersonList formData={formData} setFormData={setFormData} />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/add",
      element: <AddEmployee onAddEmployee={addEmployeeHandler} />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
