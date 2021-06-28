import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HelloComponent from "./HelloComponent";
import NameEdit from "./NameEdit";

const App = () => {
  const [name, setName] = useState("defaultUserName");
  const [editingName, setEditingName] = useState("defaultUserName");
  const [errorMessage, setErrorMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

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

  const editingNameUpdateHandler = (newEditingName: string) => {
    setEditingName(newEditingName);
    if (!/\d/.test(newEditingName)) {
      setErrorMessage(" Input must contain a number");
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
      setErrorMessage("");
    }
  };

  return (
    <div>
      <HelloComponent username={name} />
      <NameEdit
        initialUsername={name}
        editingName={editingName}
        onNameUpdated={setUsernameState}
        onEditingNameUpdated={editingNameUpdateHandler}
        disabled={buttonDisabled}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default App;
