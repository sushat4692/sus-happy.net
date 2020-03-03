import React, { useState } from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

// Components
import Typing from "../Typing";

const Index: React.FC = () => {
  const [count, setCount] = useState(0);

  return <>
    <Helmet>
      <title>SUSH-i BOX</title>
      <meta name="description" content="I'm a programmer at advertisement production company in Nagoya. and I'm in Philippines now." />
      <meta property="og:title" content="SUSH-i BOX" />
      <meta property="og:description" content="I'm a programmer at advertisement production company in Nagoya. and I'm in Philippines now." />
      <meta property="og:url" content="https://sus-happy.net/" />
    </Helmet>

    <h1>SUSH-i BOX Home</h1>
    <p>
      <Typing string="Hello, I'm SUSH. I'm loving programming, specially on Web environment." duration={40} callback={() => { setCount(1); }}></Typing>
    </p>
    {
      count <= 0 ? "" :
        (
          <p>
            <Typing string="Now showing main menu . . ." duration={40} callback={() => {setCount(2);}}></Typing>
          </p>
        )
    }
    {
      count <= 1 ? "" :
        (
          <>
            <h2>Menu</h2>
            <dl>
              <dt><Link to="/about">About</Link></dt>
              <dd>About Me.</dd>
              <dt><Link to="/photo">Photo</Link></dt>
              <dd>Photo is my hobby.</dd>
              <dt><a href="https://blog.sus-happy.net/" target="_blank" rel="noopener noreferrer">Blog</a></dt>
              <dd>Go to my blog.</dd>
            </dl>
            <p>
              <Typing string="Or check my Social media . . ." duration={40} callback={() => {setCount(3);}}></Typing>
            </p>
          </>
        )
    }
    {
      count <= 2 ? "" :
        (
          <>
            <h2>Social</h2>
            <dl>
              <dt><a href="https://twitter.com/sushat4692" target="_blank" rel="noopener noreferrer">Twitter</a></dt>
              <dd>sushat4692</dd>
              <dt><a href="http://www.facebook.com/sushat4692" target="_blank" rel="noopener noreferrer">Facebook</a></dt>
              <dd>sushat4692</dd>
              <dt><a href="http://www.flickr.com/photos/sushat4692/" target="_blank" rel="noopener noreferrer">Flickr</a></dt>
              <dd>sushat4692</dd>
              <dt><a href="https://github.com/sushat4692" target="_blank" rel="noopener noreferrer">GitHub</a></dt>
              <dd>sushat4692</dd>
            </dl>
          </>
        )
    }
  </>;
};

export default Index;
