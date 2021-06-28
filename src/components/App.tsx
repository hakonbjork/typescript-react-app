import React from "react";
import { useState } from "react";
import HelloComponent from "./HelloComponent";
import NameEdit from "./NameEdit";

const App = () => {
  const [name, setName] = useState("defaultName");

  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <HelloComponent username={name} />
      <NameEdit username={name} onChange={setUsernameState} />
    </div>
  );
};

export default App;
