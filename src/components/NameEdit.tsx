import React from "react";

interface Props {
  username: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameEdit = (props: Props) => {
  return (
    <>
      <label>Update name: </label>
      <input value={props.username} onChange={props.onChange} />
    </>
  );
};

export default NameEdit;
