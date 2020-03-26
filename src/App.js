import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";

const app = props => {
  const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black
  }
  `;

  // const style = {
  //   backgroundColor: 'green',
  //   color: 'white',
  //   font: 'inherit',
  //   border: '1px solid blue',
  //   padding: '8px',
  //   cursor: 'pointer',
  //   ':hover:': {
  //     backgroundColor: 'lightgreen',
  //     color: 'black'
  //   }
  // }
  
  

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
  }

  const classes = [];
  if (personsState.persons.length <= 2) {
    classes.push("red");
  }

  if (personsState.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className="App">
      <h1>I'm a react app</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <StyledButton alt={showPersons} onClick={togglePersonsHandler}>
        Toggle Persons
      </StyledButton>
      {persons}
    </div>
  );
};

export default app;
