const PersonCard = (props) => {
  return (
    <>
      <div className="card">
        <p className="reminder">{props.reminder}</p>
        <h3>{props.name}</h3>
        <p>{props.title}</p>
        <p>Salary: {props.salary}</p>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
        <p>Fav. Animal: {props.fanimal}</p>
        <p>{props.startDate}</p>
        <p>Location: {props.location}</p>
        <p>Dept: {props.department}</p>
        <p>Skills: {props.topSkills}</p>
      </div>
    </>
  );
};

export default PersonCard;
