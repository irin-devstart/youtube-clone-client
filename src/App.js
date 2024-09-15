import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Pages/MainPages/MainPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import Navbar from "./Components/Navbar/Navbar";
import AccountPage from "./Pages/AccountPage/AccountPage";
import { ToggleSidebarContext } from "./Helpers/Context";
import Upload from "./Pages/UploadPage/UploadPage";

function App() {
  const [showSidebar, setshowSidebar] = useState(true);
  return (
    <ToggleSidebarContext.Provider value={{ showSidebar, setshowSidebar }}>
      <div className="Navbar">
        <Navbar />
      </div>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <MainPage />} />
          <Route path="/signin" exact render={() => <SignInPage />} />
          <Route path="/account" exact render={() => <AccountPage />} />
          <Route path="/upload" exact render={() => <Upload />} />
        </Switch>
      </Router>
    </ToggleSidebarContext.Provider>
  );
}

export default App;
