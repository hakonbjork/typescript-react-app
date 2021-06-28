import React from "react";
import { useState } from "react";

interface Props {
  initialUsername: string;
  onNameUpdated: (newName: string) => any;
}

const NameEdit = (props: Props) => {
  const [editingName, setEditingName] = useState(props.initialUsername);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingName(e.target.value);
  };

  const onNameSubmit = (event: any): any => {
    props.onNameUpdated(editingName);
  };

  return (
    <>
      <label>Update name: </label>
      <input value={editingName} onChange={onChange} />
      <button onClick={onNameSubmit}>Change</button>
    </>
  );
};

export default NameEdit;
