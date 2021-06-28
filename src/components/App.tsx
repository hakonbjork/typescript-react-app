import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HelloComponent from "./HelloComponent";
import NameEdit from "./NameEdit";

const App = () => {
  const [name, setName] = useState("defaultUserName");
  const [editingName, setEditingName] = useState("defaultUserName");

  const setUsernameState = () => {
    setName(editingName);
  };

  // simulation of async call
  const loadUsername = () => {
    setTimeout(() => {
      setName("name from async call");
      setEditingName("name from async call");
    }, 500);
  };

  useEffect(() => {
    loadUsername();
  }, []);

  return (
    <div>
      <HelloComponent username={name} />
      <NameEdit
        initialUsername={name}
        editingName={editingName}
        onNameUpdated={setUsernameState}
        onEditingNameUpdated={setEditingName}
      />
    </div>
  );
};

export default App;
