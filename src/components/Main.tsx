import React from "react";
import {Switch, Route} from "react-router-dom";

import styles from "./Main.module.scss";

// Components
import Index from "./Main/Index";
import About from "./Main/About";
import Photo from "./Main/Photo";

const SideBar: React.FC = () => {
  return <main className={styles.main}>
    <Switch>
      <Route exact path="/"><Index /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/photo"><Photo /></Route>
    </Switch>
  </main>;
};

export default SideBar;
