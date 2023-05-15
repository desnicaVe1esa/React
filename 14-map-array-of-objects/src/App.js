import "./App.css";
// import Person from "./components/Person";
import Persons from "./components/Persons";
// import persons from "./data/persons";

function App() {
  return (
    <div className="App">
      <Persons />
      {/* {persons.map((person) => {
        const { id, firstName, lastName, email, image } = person;
        return (
          <Person
            key={person.id}
            {...person}
            id={id}
            firstName={firstName}
            lastName={lastName}
            email={email}
            img={img}
          />
        );
      })} */}
    </div>
  );
}

export default App;
