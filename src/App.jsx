import "./App.css";
import AddEmployee from "./pages/addEmployee/AddEmployee.jsx";
import About from "./pages/about/About.jsx";
import PersonList from "./pages/Person/PersonList.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import { employees } from "./data/employeeData.js";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/employees")
      .then((res) => setFormData(res.data))
      .catch((err) => console.error("Failed to fetch employees", err));
  }, []);

  const addEmployeeHandler = (newPerson) => {
    setFormData((prev) => [...prev, newPerson]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<PersonList formData={formData} setFormData={setFormData} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/add"
          element={<AddEmployee onAddEmployee={addEmployeeHandler} />}
        />
      </Routes>
    </BrowserRouter>
  );

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <PersonList formData={formData} setFormData={setFormData} />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  //   {
  //     path: "/add",
  //     element: <AddEmployee onAddEmployee={addEmployeeHandler} />,
  //   },
  // ]);
  return <RouterProvider router={router} />;
}

export default App;
