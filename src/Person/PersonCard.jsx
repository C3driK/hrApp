const PersonCard = (props) => {
  return (
    <>
      <div className="card">
        <p className="reminder">{props.reminder}</p>
        <h3>{props.name}</h3>
        <p>{props.title}</p>
        <p>{props.salary}</p>
        <p>{props.phone}</p>
        <p>{props.email}</p>
        <p>{props.fanimal}</p>
        <p>{props.startDate}</p>
        <p>{props.location}</p>
        <p>{props.department}</p>
        <p>{props.topSkills}</p>
      </div>
    </>
  );
};

export default PersonCard;
