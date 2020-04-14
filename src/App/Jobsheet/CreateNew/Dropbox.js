import { useDropboxChooser } from 'use-dropbox-chooser'
import React from "react";

function Dropbox() {
  const { open, isOpen } = useDropboxChooser({
    appKey: 'acku3a0c8kpv2op',
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
export default Dropbox;