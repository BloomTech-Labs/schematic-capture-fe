import { useDropboxChooser } from 'use-dropbox-chooser'
import React from "react";
import { useDispatch } from 'react-redux'
import { dispatchers } from '../../../shared/actions/dashboardActions'

const newFile = { dispatchers }

function Dropbox() {
  const dispatch = useDispatch()

  const { open, isOpen } = useDropboxChooser({
    appKey: 't5i27y2t3fzkiqj',
    chooserOptions: { multiple: true, linkType: 'direct' },
    onSelected: files => {
      console.log(files[0].link)
    },
  })

  return (
    <button onClick={open} disabled={isOpen}>
      Import Image
    </button>
  )
}
export default Dropbox;