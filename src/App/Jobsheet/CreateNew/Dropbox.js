import { useDropboxChooser } from 'use-dropbox-chooser'
import React from "react";

function DropboxChooser() {
  const { open, isOpen } = useDropboxChooser({
    appKey: 't5i27y2t3fzkiqj',
    chooserOptions: { multiple: true, linkType: 'direct' },
    onSelected: files => {
      console.log(files)
    },
  })

  return (
    <button onClick={open} disabled={isOpen}>
      Dropbox
    </button>
  )
}
export default DropboxChooser;