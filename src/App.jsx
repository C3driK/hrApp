import "./App.css";
import Root from "./pages/Root.jsx";
import AddEmployee from "./pages/addEmployee/AddEmployee.jsx";
import About from "./pages/about/About.jsx";
import PersonList from "./pages/Person/PersonList.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState, useEffect } from "react";
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

  const handleSalaryChange = (id, newSalary) => {
    axios
      .patch(`http://localhost:3001/employees/${id}`, { salary: newSalary })
      .then((res) => {
        setFormData((prev) =>
          prev.map((employee) => (employee.id === id ? res.data : employee))
        );
      })
      .catch((err) => {
        console.error("Failed to update salary", err);
      });
  };

  const handleLocationChange = (id, newLocation) => {
    axios
      .patch(`http://localhost:3001/employees/${id}`, { location: newLocation })
      .then((res) => {
        setFormData((prev) =>
          prev.map((employee) => (employee.id === id ? res.data : employee))
        );
      })
      .catch((err) => {
        console.error("Failed to update location", err);
      });
  };

  const handleDepartmentChange = (id, newDepartment) => {
    axios
      .patch(`http://localhost:3001/employees/${id}`, {
        department: newDepartment,
      })
      .then((res) => {
        setFormData((prev) =>
          prev.map((employee) => (employee.id === id ? res.data : employee))
        );
      })
      .catch((err) => {
        console.error("Failed to update department", err);
      });
  };

  const handleSkillsChange = (id, newSkills) => {
    const skillsArray =
      typeof newSkills === "string"
        ? newSkills
            .split(",")
            .map((skill) => skill.trim())
            .filter((skill) => skill.length > 0)
        : newSkills;
    axios
      .patch(`http://localhost:3001/employees/${id}`, {
        skills: skillsArray,
      })
      .then((res) => {
        setFormData((prev) =>
          prev.map((employee) => (employee.id === id ? res.data : employee))
        );
      })
      .catch((err) => {
        console.error("failed to update skills", err);
      });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<About />} />
          <Route
            path="/employees"
            element={
              <PersonList
                formData={formData}
                onSalaryChange={handleSalaryChange}
                onLocationChange={handleLocationChange}
                onDepartmentChange={handleDepartmentChange}
                onSkillsChange={handleSkillsChange}
              />
            }
          />

          <Route
            path="/add"
            element={<AddEmployee onAddEmployee={addEmployeeHandler} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
