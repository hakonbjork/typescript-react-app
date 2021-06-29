import "./Sidebar.css";
import React from "react";

interface Props {
  isVisible: boolean;
}

const divStyle = (props: Props): React.CSSProperties => ({
  width: props.isVisible ? "23rem" : "0rem",
});

const Sidebar: React.FunctionComponent<Props> = (props) => {
  return (
    <div id="mySidenav" className="sidenav" style={divStyle(props)}>
      {props.children}
    </div>
  );
};

export default Sidebar;
