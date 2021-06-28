import React from 'react';

interface Props {
  username: string;
}

const HelloComponent = (props: Props) => {
  return <h2>Hello user: {props.username} </h2>;
};

export default HelloComponent;
