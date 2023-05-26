import React from "react";

function Actions(props) {
    console.log(props)
  return <p className="message">{props.message}</p>;
}

export default Actions;
