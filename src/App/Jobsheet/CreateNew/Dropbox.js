import { useDropboxChooser } from 'use-dropbox-chooser'
import React from "react";
import { useDispatch } from 'react-redux'
import { dispatchers } from '../../../shared/actions/dashboardActions'
import { FileDownload } from 'js-file-download'

const newFile = { dispatchers }

function Dropbox() {
  const dispatch = useDispatch()

  const { open, isOpen } = useDropboxChooser({
    appKey: 't5i27y2t3fzkiqj',
    chooserOptions: { multiple: true, linkType: 'direct' },
    onSelected: files => {
      FileDownload(files[0].link, files[0].name)
    },
  })

  return (
    <button onClick={open} disabled={isOpen}>
      Import Image
    </button>
  )
}
export default Dropbox;