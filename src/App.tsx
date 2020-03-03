import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import SideBar from "./components/SideBar";
import Main from "./components/Main";

import TagManager, {TagManagerArgs} from "react-gtm-module";
const tagManagerArgs: TagManagerArgs = {
  gtmId: "GTM-PGJZ2C"
};
TagManager.initialize(tagManagerArgs);

const App: React.FC = () => {
  return (
    <Router>
      <SideBar></SideBar>
      <Main></Main>
    </Router>
  );
};

export default App;
