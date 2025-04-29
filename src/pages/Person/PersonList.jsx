import PersonCard from "./PersonCard.jsx";
import { employees } from "../../data/employeeData.js";
import { animalEmojis } from "../../data/animalEmoji.js";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

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
      <Header logo="HR APP" />
      <main>
      {employees.map((employee) => (
        <PersonCard
          key={employee.id}
          fanimal={animalEmojis[employee.animal]}
          reminder={status(employee.startDate)}
          topSkills={employee.skills.join(", ")}
          {...employee}
        />
      ))}
      </main>
      <Footer />
    </>
  );
};

export default PersonList;
