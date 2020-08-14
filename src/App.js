import React, {Component} from "react";

import Person from "./Person/Person";
import {l, appState} from "./2-Var";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = appState;
  }

  personToggleHandler = () => {
    l(this.state.showPersons);
    let personLogic = this.state.showPersons;
    this.setState({showPersons: !personLogic});
  };

  deletePersonHandler = (index) => {
    let person = [...this.state.persons];
    person.splice(index, 1);
    this.setState({persons: person});
  };

  changePersonHandler = (event, index) => {
    const person = {...this.state.persons[index]};
    person.name = event.target.value;

    const newPersons = [...this.state.persons];
    newPersons[index] = person;

    this.setState({
      persons: newPersons,
    });
  };

  changeById = (event, id) => {
    const person = [...this.state.persons];

    let personIndex = person.findIndex((p) => {
      return p.id === id;
    });
    console.log(`item index: ${personIndex}`);

    person[personIndex].name = event.target.value;
    this.setState({
      persons: person,
    });
  };

  render() {
    let Persons_List = null;

    if (this.state.showPersons) {
      Persons_List = this.state.persons.map(({name, age, id}, index) => {
        return (
          <Person
            // change={(event) => this.changePersonHandler(event, index)}
            change={(event) => this.changeById(event, id)}
            click={() => this.deletePersonHandler(index)}
            key={index}
            name={name}
            age={age}
          />
        );
      });
    } else {
      Persons_List = null;
    }

    return (
      <div>
        <button onClick={this.personToggleHandler}>click</button>
        {Persons_List}
      </div>
    );
  }
}
