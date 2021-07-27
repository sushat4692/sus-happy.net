import React from "react";

const Aside: React.FC = () => {
  return (
    <aside>
      <h2>Social</h2>
      <dl>
        <dt>
          <a href="https://twitter.com/sushat4692" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </dt>
        <dd>sushat4692</dd>
        <dt>
          <a href="http://www.flickr.com/photos/sushat4692/" target="_blank" rel="noopener noreferrer">
            Flickr
          </a>
        </dt>
        <dd>sushat4692</dd>
        <dt>
          <a href="https://github.com/sushat4692" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </dt>
        <dd>sushat4692</dd>
      </dl>
    </aside>
  );
};

export default Aside;
