import React from "react";

const person = (props) => {
  const {name, age, change, click, children} = props;

  return (
    <div style={PersonStyle}>
      <h1 onClick={click}>
        My name is {name} and i'm {age} years old
      </h1>

      <input type="text" onChange={change} />
      {children}
    </div>
  );
};

const PersonStyle = {
  padding: "10px",
  border: "2px solid red",
  margin: "5px 0",
};

export default person;
