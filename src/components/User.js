import React from "react";

function Actions(props) {
  return (
    <span className="user">
      <span className="name">{props.userData.name}</span>
      <span className="handle">{props.userData.handle}</span>
    </span>
  );
}

export default Actions;
