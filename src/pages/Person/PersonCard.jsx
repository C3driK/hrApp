import { useState } from "react";
import { Link } from "react-router";

const PersonCard = ({
  reminder,
  id,
  name,
  title,
  salary,
  phone,
  email,
  fanimal,
  startDate,
  location,
  department,
  topSkills,
  onSalaryChange,
  onLocationChange,
  onDepartmentChange,
  onSkillsChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newSalary, setNewSalary] = useState(salary);
  const [newLocation, setNewLocation] = useState(location);
  const [newDepartment, setNewDepartment] = useState(department);
  const [newSkills, setNewSkills] = useState(topSkills);

  const handleSave = () => {
    onSalaryChange(id, parseFloat(newSalary));
    onLocationChange(id, newLocation);
    onDepartmentChange(id, newDepartment);
    onSkillsChange(id, newSkills);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewSalary(salary);
    setNewLocation(location);
    setNewDepartment(department);
    setNewSkills(topSkills);
    setIsEditing(false);
  };

  // const isSaveDisabled = () => {
  //   newSalary === "" &&
  //     newLocation === "" &&
  //     newDepartment === "" &&
  //     newSkills === "";
  // };

  return (
    <>
      <div className="PersonCard">
        <p className="reminder">{reminder}</p>
        <h3>{name}</h3>
        <p>{title}</p>
        {isEditing ? (
          <input
            type="number"
            value={newSalary}
            onChange={(e) => setNewSalary(e.target.value)}
          />
        ) : (
          <p>Salary: {salary}</p>
        )}
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Fav. Animal: {fanimal}</p>
        <p>{startDate}</p>
        {isEditing ? (
          <input
            type="text"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
          />
        ) : (
          <p>Location: {location}</p>
        )}
        {isEditing ? (
          <input
            type="text"
            value={newDepartment}
            onChange={(e) => setNewDepartment(e.target.value)}
          />
        ) : (
          <p>Dept: {department}</p>
        )}
        {isEditing ? (
          <input
            type="text"
            value={newSkills}
            onChange={(e) => setNewSkills(e.target.value)}
          />
        ) : (
          <p>Skills: {topSkills}</p>
        )}
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </div>
    </>
  );
};

export default PersonCard;
