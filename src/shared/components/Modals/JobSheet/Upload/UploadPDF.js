import React, { useState } from "react";
import { storage } from "../../../../utils/firebase";

import {
  UploadContainer,
  UploadForm,
  UploadField,
  UploadInput,
  InputOverlay,
  FileLabel
} from "./Styles";

import { Button } from "../../ModalStyles";
import swal from "sweetalert";

const UploadPDF = () => {
  const [pdf, setPdf] = useState(null);
  const [theFile, setTheFile] = useState("");
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handChange = e => {
    const file = e.target.files[0];
    if (file) {
      console.log(file);
      setTheFile(
        `You are about to upload, ${file.name}.  Press Upload to confirm.`
      );
      const fileType = file["type"];
      const validFileTypes = ["image/jpeg", "image/png", "application/pdf"];
      if (validFileTypes.includes(fileType)) {
        setError("");
        setPdf(file);
      } else {
        setError("Please select a schematic to upload");
      }
    }
  };

  const handleUpdate = () => {
    if (pdf) {
      const uploadTask = storage.ref(`images/${pdf.name}`).put(pdf);

      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
          if (progress === 100) {
            // setSuccess(
            //   `Your schematic, ${pdf.name}, has successfully been uploaded!`
            // );
            setTheFile("");
            swal({
              title: `${pdf.name} successfully uploaded.`,
              text: "Press the button below to continue.",
              icon: "success"
            }).then(() => {
              window.location.reload();
            });
          }
        },
        error => {
          setError(error);
        },
        () => {
          storage
            .ref("images")
            .child(pdf.name)
            .getDownloadURL()
            .then(() => {
              setProgress(0);
            });
        }
      );
    } else {
      setError("Error: Please choose a PDF to upload!");
    }
  };

  return (
    <UploadContainer>
      <UploadForm>
        <UploadField>
          <InputOverlay>
            {/*<label for="test">Test</label>*/}
            {/*<UploadInput id="test" type="file" onChange={handChange} />*/}

            <input type="file" id="file" onChange={handChange} />
            <FileLabel for="file">Choose A File</FileLabel>
          </InputOverlay>
          <Button onClick={handleUpdate}> Upload</Button>
        </UploadField>
        <br />
        <div>{theFile}</div>
        <div>
          {progress > 0 ? <progress value={progress} max="100" /> : ""}
          <br />
          <p>{success}</p>
          <p style={{ color: "red" }}>{error}</p>
        </div>
      </UploadForm>
    </UploadContainer>
  );
};

export default UploadPDF;
