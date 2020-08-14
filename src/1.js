import React, {Component} from "react";

import Person from "./Person/Person";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        {name: "Tom", age: 23},
        {name: "John", age: 30},
        {name: "Sam", age: 46},
        {name: "David", age: 18},
      ],
    };
  }

  clicker = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 23},
        {name: "Sam", age: 30},
        {name: "Tom", age: 46},
        {name: "Oliver", age: 18},
      ],
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.clicker.bind(this, "Sina")}>click</button>
        {this.state.persons.map(({name, age}, index) => {
          return <Person key={index} name={name} age={age} />;
        })}
      </div>
    );
  }
}
