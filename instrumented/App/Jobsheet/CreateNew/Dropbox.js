import React from "react";
import { useDropboxChooser } from "use-dropbox-chooser";
import styled from "styled-components";
import Picture from "../JobsheetBoard/Camera.png";
import { NewProjBtn } from "../../Styles/Jobsheets";

function Dropbox({ inPopup, handleSelected, componentId, dispatch }) {
  const { open, isOpen } = useDropboxChooser({
    appKey: "t5i27y2t3fzkiqj",
    chooserOptions: { multiple: true },
    onSelected: (files) => {
      inPopup
        ? handleSelected(files[0].link)
        : handleSelected(dispatch, componentId, { image: files[0].link });
      console.log(files[0].link);
    },
  });

  return (
    <>
      {inPopup ? (
        <NewProjBtn
          style={{ margin: "5px 0", height: "25px" }}
          onClick={open}
          disabled={isOpen}
        >
          Change Image
        </NewProjBtn>
      ) : (
        <Button onClick={open} disabled={isOpen}>
          <img src={Picture} className="image" alt="dropbox" />
        </Button>
      )}
    </>
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
