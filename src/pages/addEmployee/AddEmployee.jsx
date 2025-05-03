import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./addEmployee.css";

const AddEmployee = () => {
  return (
    <>
      <Header logo="HR APP" />
      <div id="form-container">
        <h2>Add Employee</h2>
        <form>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" name="name" value="" />

          <label htmlFor="title">Title: </label>
          <input id="title" type="text" name="title" value="" />

          <label htmlFor="salary">Salary</label>
          <input id="salary" type="text" name="salary" value="" />

          <label htmlFor="phone">Phone: </label>
          <input id="phone" type="text" name="phone" value="" />

          <label htmlFor="email">Email: </label>
          <input id="email" type="text" name="email" value="" />

          <label htmlFor="animal">Fav. Animal: </label>
          <input id="animal" type="text" name="animal" value="" />

          <label htmlFor="startDate">Start-Date:</label>
          <input id="startDate" type="text" name="startDate" value="" />

          <label htmlFor="location">Location</label>
          <input id="location" type="text" name="location" value="" />

          <label htmlFor="department">Department</label>
          <input id="department" type="text" name="department" value="" />

          <label htmlFor="skills">Skills</label>
          <input id="skills" type="text" name="skills" value="" />
          <button type="submit">Add</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddEmployee;
