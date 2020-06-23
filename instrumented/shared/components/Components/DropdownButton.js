import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import Button from "./Button";

const DropdownButton = ({ text, items, buttonProps }) => {
  const [display, setDisplay] = useState(false);

  const showHide = event => {
    event.stopPropagation();
    setDisplay(!display);
  };

  return (
    <div style={{ position: "absolute" }}>
      <Button onClick={showHide} {...buttonProps}>
        {text}
        <span className="sr-only">Toggle Dropdown</span>
      </Button>
      <DropdownMenu items={items} display={display} />
    </div>
  );
};

export default DropdownButton;
