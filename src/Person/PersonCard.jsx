const PersonCard = (props) => {
  return (
    <div className="card">
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.title}</p>
      <p>{props.salary}</p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <p>{props.fanimal}</p>
      <p>{props.startDate}</p>
      <p>{props.location}</p>
      <p>{props.department}</p>
      <p>{props.skills}</p>
      <div>
        <p className="reminder">{props.reminder}</p>
      </div>
    </div>
  );
};

export default PersonCard;
