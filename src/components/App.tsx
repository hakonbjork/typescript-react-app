import React from "react";
import { useState } from "react";
import HelloComponent from "./HelloComponent";
import NameEdit from "./NameEdit";

const App = () => {
  const [name, setName] = useState("defaultName");

  const setUsernameState = (newName: string) => {
    setName(newName);
  };

  return (
    <div>
      <HelloComponent username={name} />
      <NameEdit initialUsername={name} onNameUpdated={setUsernameState} />
    </div>
  );
};

export default App;
