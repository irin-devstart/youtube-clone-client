import React, { useEffect, useState } from "react";
import "./AccountPage.css";
import Axios from "axios";

export default function AccountPage() {
  const [profileInfo, setProfileInfo] = useState({
    channelName: "",
    profilePicture: "",
    email: "",
    createdAt: "",
  });
  useEffect(() => {
    const id = sessionStorage.getItem("googleId");
    Axios.get(`http://localhost:3001/user/${id}`).then((response) => {
      console.log(response);
      setProfileInfo({
        channelName: response.data[0].channelName,
        profilePicture: response.data[0].profilePictureUrl,
        email: response.data[0].email,
        createdAt: response.data[0].createdAt,
      });
    });
  }, []);
  return (
    <div className="accountPage">
      <div className="container">
        <div className="titleContainer">
          <h1>Channel Details</h1>
          <hr />
        </div>
        <div className="bodyContainer">
          <h1> {profileInfo.channelName} </h1>
          <img src={profileInfo.profilePicture} />
          <h4>{profileInfo.email}</h4>
          <hr />
          <h4>Channel Born At {profileInfo.createdAt}</h4>
        </div>
      </div>
    </div>
  );
}
