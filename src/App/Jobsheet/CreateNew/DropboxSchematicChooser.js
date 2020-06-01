import React from "react"
import { useDropboxChooser } from 'use-dropbox-chooser'
import styled from 'styled-components';
import Picture from '../JobsheetBoard/Camera.png'
import { axiosWithAuth } from "../../../shared/utils/axiosWithAuth";
function Dropbox(props) {
  const { open, isOpen } = useDropboxChooser({
    appKey: 't5i27y2t3fzkiqj',
    chooserOptions: { multiple: true, linkType: 'direct' },
    onSelected: files => {
        props.setImageFile(files[0].link)
        console.log(props.imageFile, "HEEY2")
      console.log(files)
    },
  })
  // props.setImageFile("https://cdn11.bigcommerce.com/s-sq9zkarfah/images/stencil/1280x1280/products/124372/117641/Coheed-And-Cambria-Keywork-Logo-Vinyl-Decal-Sticker__15918.1507850537.jpg?c=2?imbypass=on")
  return (
    <Button onClick={open} disabled={isOpen}>
      Add Schematic
    </Button>
  )
}
export default Dropbox;

const Button = styled.button`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }`