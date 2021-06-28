import React from "react";

interface Props {
  initialUsername: string;
  editingName: string;
  onNameUpdated: () => any;
  onEditingNameUpdated: (newEditingName: string) => any;
  disabled: boolean;
  errorMessage: string;
}

const NameEdit = (props: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onEditingNameUpdated(e.target.value);
  };

  const onNameSubmit = (): any => {
    props.onNameUpdated();
  };

  return (
    <>
      <label>Update name: </label>
      <input value={props.editingName} onChange={onChange} />
      <button onClick={onNameSubmit} disabled={props.disabled}>
        Change
      </button>
      <label>{props.errorMessage}</label>
    </>
  );
};

export default NameEdit;
