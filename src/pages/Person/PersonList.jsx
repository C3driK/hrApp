import "./Person.css";
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

//so booksData and setBooksData are props deconsructed gotten from App.jsx
const PersonList = ({ formData, setFormData }) => {
  return (
    <>
      <Header logo="HR APP" />
      <main id="employees">
        {formData.map((employee) => (
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
