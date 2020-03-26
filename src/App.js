import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState("some other state");
  const [showPersons, setShowPersons] = useState(false);

  const switchNameHandler = newName => {
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };

  const nameChangeHandler = event => {
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 }
      ]
    });
  };

  const togglePersonsHandler = () => {
    const doesShow = !showPersons;
    console.log(showPersons);
    console.log(doesShow);
    setShowPersons(doesShow);
  };

  return (
    <div className="App">
      <h1>I'm a react app</h1>
      <p>This is really working!</p>
      <button onClick={togglePersonsHandler}>Toggle Persons</button>
      {showPersons ? (
        <div>
          <Person
            name={personsState.persons[0].name}
            years={personsState.persons[0].age}
          />
          <Person
            name={personsState.persons[1].name}
            years={personsState.persons[1].age}
            click={() => switchNameHandler("Paulo")}
            changed={nameChangeHandler}
          />

          <Person
            name={personsState.persons[2].name}
            years={personsState.persons[2].age}
          />
        </div>
      ) : null}
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
};

export default app;
