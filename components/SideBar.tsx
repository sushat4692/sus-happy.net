import React from "react";
import styles from "./SideBar.module.css";

// Components
import Header from "./SideBar/Header";
import Nav from "./SideBar/Nav";
import Aside from "./SideBar/Aside";

const SideBar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <Header></Header>
      <Nav></Nav>
      <Aside></Aside>
    </div>
  );
};

export default SideBar;
