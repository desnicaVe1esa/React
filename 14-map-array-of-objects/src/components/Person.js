const Person = ({ firstName, lastName, email, image }) => {
  // function Person(props) {
  //   const { firstName, lastName, email, image } = props;
  return (
    <div className="card">
      <img src={image} alt="" />
      <h3>
        {firstName} {lastName}
      </h3>
      <h4>{email}</h4>
    </div>
  );
};

export default Person;
