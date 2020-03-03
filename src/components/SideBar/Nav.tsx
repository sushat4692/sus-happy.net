import React from "react";
import {Link} from "react-router-dom";

const Nav: React.FC = () => {
  return <nav>
    <h2>Menu</h2>
    <dl>
      <dt><Link to="/">Home</Link></dt>
      <dd>Website Home.</dd>
      <dt><Link to="/about">About</Link></dt>
      <dd>About Me.</dd>
      <dt><Link to="/photo">Photo</Link></dt>
      <dd>Photo is my hobby.</dd>
      <dt><a href="https://blog.sus-happy.net/" target="_blank" rel="noopener noreferrer">Blog</a></dt>
      <dd>Go to my blog.</dd>
    </dl>
  </nav>;
};

export default Nav;
