import React from "react";
import { useDropboxChooser } from "use-dropbox-chooser";
import styled from "styled-components";
import Picture from "../JobsheetBoard/Camera.png";
import { axiosWithAuth } from "../../../shared/utils/axiosWithAuth";

function Dropbox({ componentID, setComponents }) {
  const { open, isOpen } = useDropboxChooser({
    appKey: "t5i27y2t3fzkiqj",
    chooserOptions: { multiple: true },
    onSelected: (files) => {},
  });

  return (
    <Button onClick={open} disabled={isOpen}>
      <img src={Picture} className="image" />
    </Button>
  );
}
export default Dropbox;

const Button = styled.button`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;
