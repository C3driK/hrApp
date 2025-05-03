const PersonCard = ({
  reminder,
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
}) => {
  return (
    <>
      <div className="card">
        <p className="reminder">{reminder}</p>
        <h3>{name}</h3>
        <p>{title}</p>
        <p>Salary: {salary}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Fav. Animal: {fanimal}</p>
        <p>{startDate}</p>
        <p>Location: {location}</p>
        <p>Dept: {department}</p>
        <p>Skills: {topSkills}</p>
      </div>
    </>
  );
};

export default PersonCard;
