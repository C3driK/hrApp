import PersonCard from "./PersonCard.jsx";
import { employees } from "./employeeData.js";
import { animalEmojis } from "./animalEmoji.js";

const PersonList = () => {
  return (
    <>
      {employees.map((employee) => (
        <PersonCard key={employee.id} {...employee} />
      ))}
    </>
  );
};

export default PersonList;
