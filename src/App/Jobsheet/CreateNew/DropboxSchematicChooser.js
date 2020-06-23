import React from "react";
import { useDropboxChooser } from "use-dropbox-chooser";
import { color, font } from "../../Styles/index";
import styled from "styled-components";
import Picture from "../JobsheetBoard/Camera.png";
import { axiosWithAuth } from "../../../shared/utils/axiosWithAuth";
function Dropbox(props) {
  const { open, isOpen } = useDropboxChooser({
    appKey: "t5i27y2t3fzkiqj",
    chooserOptions: { multiple: true },
    onSelected: (files) => {
      props.setImageFile(files[0].link);
      console.log(props.imageFile, "HEEY2");
      console.log(files);
    },
  });

  return (
    <Button onClick={open} disabled={isOpen}>
      Add Schematic
    </Button>
  );
}
export default Dropbox;

const Button = styled.button`
  width: 45%;
  color: ${color.blue};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    text-decoration: none;
    color: white;
    background-color: ${color.blue};
  }
  img {
    width: 100%;
  }
`;
