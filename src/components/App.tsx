import React from "react";
import HelloComponent from "./HelloComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Typescript App</h1>
        <HelloComponent username="John" />
      </div>
    );
  }
}

export default App;
