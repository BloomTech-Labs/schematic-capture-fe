import React from "react";
import { useDropboxChooser } from "use-dropbox-chooser";
import styled from "styled-components";
import Picture from "../JobsheetBoard/Camera.png";
import { axiosWithAuth } from "../../../shared/utils/axiosWithAuth";
function Dropbox() {
  const { open, isOpen } = useDropboxChooser({
    appKey: "t5i27y2t3fzkiqj",
    chooserOptions: { multiple: true, linkType: "direct" },
    onSelected: (files) => {
      console.log(files);
      axiosWithAuth()
        .post("/create", files[0].link)
        .then((res) => {
          const link = res.files.link;
          localStorage.setItem("schematic", link);
        })
        .catch((err) => console.log(err));
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
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;
