import "./Person.css";
import PersonCard from "./PersonCard.jsx";
import { animalEmojis } from "../../data/animalEmoji.js";

const status = (startDateString) => {
  const today = new Date();
  const startDate = new Date(startDateString);

  const monthsDiff =
    (today.getFullYear() - startDate.getFullYear()) * 12 +
    (today.getMonth() - startDate.getMonth());

  const yearsDiff = today.getFullYear() - startDate.getFullYear();

  if (monthsDiff < 6) {
    return "🔔 Schedule Probation Review";
  }
  if (yearsDiff >= 5 || yearsDiff >= 10 || yearsDiff >= 15) {
    return "🎉 Schedule recognition meeting.";
  }
};

//so booksData and setBooksData are props deconsructed gotten from App.jsx
const PersonList = ({
  formData,
  onSalaryChange,
  onLocationChange,
  onDepartmentChange,
  onSkillsChange,
}) => {
  return (
    <>
      <div className="container">
        <h1>Employees Catalog</h1>
        {formData.map((employee) => (
          <PersonCard
            key={employee.id}
            fanimal={animalEmojis[employee.animal]}
            reminder={status(employee.startDate)}
            topSkills={employee.skills.join(", ")}
            {...employee}
            onSalaryChange={(id, newSalary) => onSalaryChange(id, newSalary)}
            onLocationChange={(id, newLocation) =>
              onLocationChange(id, newLocation)
            }
            onDepartmentChange={(id, newDepartment) =>
              onDepartmentChange(id, newDepartment)
            }
            onSkillsChange={(id, newSkills) => onSkillsChange(id, newSkills)}
          />
        ))}
      </div>
    </>
  );
};

export default PersonList;
