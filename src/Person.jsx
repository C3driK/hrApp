const Person = (props) => {
  return (
    <div>
      <p className="name">{props.name}</p>
      <p>{props.title}</p>
      <p>{props.salary}</p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <p>{props.favAnimal}</p>
    </div>
  );
};

export default Person;
