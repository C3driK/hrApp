import PersonCard from "./PersonCard.jsx";
import { employees } from "./employeeData.js";
import { animalEmojis } from "./animalEmoji.js";

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

const PersonList = () => {
  return (
    <>
      {employees.map((employee) => (
        <PersonCard
          key={employee.id}
          fanimal={animalEmojis[employee.animal]}
          reminder={status(employee.startDate)}
          {...employee}
        />
      ))}
    </>
  );
};

export default PersonList;
