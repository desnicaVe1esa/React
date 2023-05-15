import Person from "./Person";
import persons from "../data/persons";

const Persons = () => {
  return (
    <div className="cards">
      {persons.map((person, index) => {
        return <Person key={index} {...person} />;
      })}
    </div>
  );
};

export default Persons;
