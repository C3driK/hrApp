const PersonCard = (props) => {
  return (
    <div>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.title}</p>
      <p>{props.salary}</p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <p>{props.animal}</p>
      <p>{props.startDate}</p>
      <p>{props.location}</p>
      <p>{props.department}</p>
      <p>{props.skills}</p>
    </div>
  );
};

export default PersonCard;
