import React, { useState } from "react";
import "./UploadPage.css";
import Axios from "axios";
export default function UploadVideoFrom(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tumbnail, setTumbnail] = useState([]);

  const submitVideo = () => {
    const tambnailData = new FormData();
    tambnailData.append("file", tumbnail[0]);
    tambnailData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

    Axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      tambnailData
    )
      .then((response) => {
        Axios.post("http://localhost:3001/upload", {
          title: title,
          description: description,
          channelName: sessionStorage.getItem("channelName"),
          thumbnailUrl: response.data.public_id,
          videoPathName: props.fileSelected[0].name,
        }).then(() => {
          // Video Logic
          console.log("statatta");

          const videoFormatData = new FormData();
          videoFormatData.append("video", props.fileSelected[0]);
          const config = {
            header: {
              "content-type": "multipart/form-data",
            },
          };
          Axios.post(
            "http://localhost:3001/upload/video",
            videoFormatData,
            config
          )
            .then((response) => {
              console.log("Video Upload Currectly");
            })
            .catch((e) => {
              console.log(e);
            });
        });
      })

      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="uploadVideoContainer">
      <div className="titleContainer">
        <label>Title</label>
        <input
          type="text"
          placeholder="Title....."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div className="descriptionContainer">
        <label>Description</label>
        <textarea
          placeholder="Description....."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>

      <div className="bottomSection">
        <div className="thumbnailContainer">
          <input
            type="file"
            id="uploadTumbnail"
            onChange={(e) => setTumbnail(e.target.files)}
            style={{ display: "none" }}
          />
          <div id="uploadTumbnail">
            <label htmlFor="uploadTumbnail">-Select-</label>
          </div>
        </div>

        <div className="uploadBottomContainer">
          <button onClick={submitVideo}>Upload Video</button>
        </div>
      </div>
    </div>
  );
}
