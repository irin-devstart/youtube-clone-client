import React, { useState } from "react";
import "./UploadPage.css";
import CloseIcon from "@material-ui/icons/Close";
import UploadVideoFrom from "./UploadVideoFrom";

export default function UploadPage() {
  const [fileSelected, setFileSelected] = useState(null);

  return (
    <div className="UploadPage">
      <div className="SelectFileContainer">
        <div className="topSection">
          <div className="leftSide">
            <h3>Upload Video</h3>
          </div>
          <div className="rightSide">
            <CloseIcon id="closeIcon" />
          </div>
        </div>

        <div className="body" id={fileSelected ? "selected" : ""}>
          {fileSelected == null ? (
            <>
              <h4>Upload A Video from Your Computer</h4>
              <input
                type="file"
                id="uploadInput"
                accept="video/mp4"
                onChange={(e) => {
                  setFileSelected(e.target.files);
                }}
                style={{ display: "none" }}
              />
              <div id="uploadButton">
                <label htmlFor="uploadInput">SELECT FILE</label>
              </div>
            </>
          ) : (
            <UploadVideoFrom fileSelected={fileSelected} />
          )}
        </div>
      </div>
    </div>
  );
}
