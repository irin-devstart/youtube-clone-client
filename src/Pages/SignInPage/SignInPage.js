import React, { useState } from "react";
import "./SignInPage.css";

import { GoogleLogin } from "react-google-login";
import Axios from "axios";
//import { useHistory } from 'react-router-dom';

export default function SignInPage() {
  const [channelName, setchannelName] = useState("");
  const [signInOptions, setsignInOptions] = useState("");

  //let history = useHistory();
  const responseGoggle = (response) => {
    const name = response.profileObj.name;
    const email = response.profileObj.email;
    const googleId = response.profileObj.googleId;
    const imageUrl = response.profileObj.imageUrl;

    Axios.post("http://localhost:3001/user", {
      name: name,
      email: email,

      googleId: googleId,
      imageUrl: imageUrl,
    })
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("channelName", channelName);
        sessionStorage.setItem("imageUrl", imageUrl);
        sessionStorage.setItem("googleId", googleId);
        // history.push('/');
        window.location.pathname = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signInPage">
      <div className="container">
        {signInOptions === "" ? (
          <div className="body">
            <button id="btn" onClick={() => setsignInOptions("create")}>
              Create Acount
            </button>
            <button id="btn" onClick={() => setsignInOptions("signin")}>
              Sign In
            </button>
          </div>
        ) : (
          <>
            <div className="top">
              <h1>
                {signInOptions === "create" ? "Create Account" : "Sign In"} With
                Google
              </h1>
            </div>
            <div className="body">
              {signInOptions === "create" && (
                <input
                  type="text"
                  placeholder="Channel Name"
                  onChange={(event) => {
                    setchannelName(event.target.value);
                  }}
                />
              )}
              <GoogleLogin
                clientId="410571045708-4sk6snubpbet1oijupc6q44rcbu65li6.apps.googleusercontent.com"
                buttonText="SignIn"
                onSuccess={responseGoggle}
                onFailure={responseGoggle}
                cookiePolicy={"single_host_origin"}
              />
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
}
