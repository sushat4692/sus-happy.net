import React from "react";
import {Helmet} from "react-helmet";

// Components
import Typing from "../Typing";

const Photo: React.FC = () => {
  return <>
    <Helmet>
      <title>Photo | SUSH-i BOX</title>
      <meta name="description" content="Programming? Yes, it's my hobby. And, taking photos are also my hobby." />
      <meta property="og:title" content="Photo - SUSH-i BOX" />
      <meta property="og:description" content="Programming? Yes, it's my hobby. And, taking photos are also my hobby." />
      <meta property="og:url" content="https://sus-happy.net/photo/" />
    </Helmet>

    <h1>Photo</h1>

    <p>
      <Typing string="Programming? Yes, it's my hobby. And, taking photos are also my hobby." duration={40}></Typing>
    </p>

    <h2>Travel Photo</h2>
    <p>Sometimes, I've been going out to take pictures. My PhotoStream is hear » <a href="http://www.flickr.com/photos/sushat4692/"
      target="_blank" rel="noopener noreferrer">Flickr</a></p>
    <hr />
    <h2>Cats Photo</h2>
    <p>Luv Cats =^._.^= Cats Photos are uploaded to <a href="http://pinterest.com/sushat4692/" target="_blank" rel="noopener noreferrer">Pinterest</a>.
    </p>
    <hr />
    <h2>Equipment</h2>
    <h3>Cameras</h3>
    <ul>
      <li>Canon EOS 5D Mark II</li>
      <li>Canon EOS Kiss Digital X</li>
    </ul>
    <h3>Lenses</h3>
    <ul>
      <li>CANON EF-S18-55mm F3.5-5.6 II USM</li>
      <li>CANON EF50mm F1.8 II</li>
      <li>CANON EF40mm F2.8 STM</li>
      <li>SIGMA 20mm F1.8 EX DG ASPHERICAL RF</li>
      <li>SIGMA 70-300mm F4-5.6 DG MACRO</li>
    </ul>
    <p>Luv fixed focal length lens.</p>
  </>;
};

export default Photo;
