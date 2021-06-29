import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HelloComponent from "./HelloComponent";
import NameEdit from "./NameEdit";
import ColorBrowser from "./ColorBrowser";
import Color from "../model/color";
import ColorPicker from "./ColorPicker";

const App = () => {
  const [name, setName] = useState("defaultUserName");
  const [editingName, setEditingName] = useState("defaultUserName");
  const [errorMessage, setErrorMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [color, setColor] = useState<Color>({ red: 20, green: 40, blue: 180 });

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
      <ColorBrowser color={color} />
      <ColorPicker color={color} onColorUpdated={setColor} />
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
