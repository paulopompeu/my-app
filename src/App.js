import React, { useState } from "react";
import classes from "./App.css";
import Person from "./Person/Person";

const app = props => {
  let btnClass = [classes.button];
  
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "dsadas", name: "Max", age: 28 },
      { id: "czcxz", name: "Manu", age: 29 },
      { id: "fdbsd", name: "Stephanie", age: 26 }
    ]
  });

  // const [otherState, setOtherState] = useState("some other state");
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
    setShowPersons(doesShow);
  };

  const deletePersonHandler = personIndex => {
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
    // style.backgroundColor = "red";
    // style[":hover"] = {
    //   backgroundColor: "salmon",
    //   color: "black"
    // };

    btnClass.push(classes.Red)
  }

  const assignedClasses = [];
  if (personsState.persons.length <= 2) {
    assignedClasses.push("red");
  }

  if (personsState.persons.length <= 1) {
    assignedClasses.push("bold");
  }

  return (
    <div className={classes.App}>
      <h1>I'm a react app</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass.join(' ')} onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
};

export default app;
