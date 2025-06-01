import "./addEmployee.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const AddEmployee = ({ onAddEmployee }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    fanimal: "",
    startDate: "",
    location: "",
    department: "",
    skills: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { ...formData, skills: formData.skills.split(", ") };

    axios
      .post("http://localhost:3001/employees", newEmployee)
      .then((res) => {
        onAddEmployee(res.data);
        navigate("/");
        setFormData({
          name: "",
          title: "",
          salary: "",
          phone: "",
          email: "",
          fanimal: "",
          startDate: "",
          location: "",
          department: "",
          skills: "",
        });
      })
      .catch((err) => {
        console.error("Failed to add employer:", err);
      });
  };

  return (
    <>
      <div id="form-container">
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="title">Title: </label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <label htmlFor="salary">Salary</label>
          <input
            id="salary"
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone: </label>
          <input
            id="phone"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="animal">Fav. Animal: </label>
          <input
            id="animal"
            type="text"
            name="fanimal"
            value={formData.fanimal}
            onChange={handleChange}
          />

          <label htmlFor="startDate">Start-Date:</label>
          <input
            id="startDate"
            type="text"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />

          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />

          <label htmlFor="department">Department</label>
          <input
            id="department"
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />

          <label htmlFor="skills">Skills</label>
          <input
            id="skills"
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
