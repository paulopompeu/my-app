import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "dsadas", name: "Max", age: 28 },
      { id: "czcxz", name: "Manu", age: 29 },
      { id: "fdbsd", name: "Stephanie", age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState("some other state");
  const [showPersons, setShowPersons] = useState(false);

  const nameChangeHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({
      persons: persons
    });
  };

  const togglePersonsHandler = () => {
    const doesShow = !showPersons;
    console.log(showPersons);
    console.log(doesShow);
    setShowPersons(doesShow);
  };

  const deletePersonHandler = personIndex => {
    // const persons = personsState.persons.slice()
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons: persons });
  };

  let persons = null;

  if (showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              years={person.age}
              key={person.id}
              changed={event => nameChangeHandler(event, person.id)}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>I'm a react app</h1>
      <p>This is really working!</p>
      <button onClick={togglePersonsHandler}>Toggle Persons</button>
      {persons}
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
};

export default app;
