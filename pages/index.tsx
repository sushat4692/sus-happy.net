import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import Typing from "../components/Typing";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head>
        <title>SUSH-i BOX</title>
        <meta
          name="description"
          content="I'm a programmer at advertisement production company in Nagoya. and I'm in Philippines now."
        />
        <meta property="og:title" content="SUSH-i BOX" />
        <meta
          property="og:description"
          content="I'm a programmer at advertisement production company in Nagoya. and I'm in Philippines now."
        />
        <meta property="og:url" content="https://sus-happy.net/" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <h1>SUSH-i BOX Home</h1>
      <p>
        <Typing
          string="Hello, I'm SUSH. I'm loving programming, specially on Web environment."
          duration={40}
          callback={() => {
            setCount(1);
          }}
        ></Typing>
      </p>
      {count <= 0 ? (
        ""
      ) : (
        <p>
          <Typing
            string="Now showing main menu . . ."
            duration={40}
            callback={() => {
              setCount(2);
            }}
          ></Typing>
        </p>
      )}
      {count <= 1 ? (
        ""
      ) : (
        <>
          <h2>Menu</h2>
          <dl>
            <dt>
              <Link href="/about/">About</Link>
            </dt>
            <dd>About Me.</dd>
            <dt>
              <Link href="/photo/">Photo</Link>
            </dt>
            <dd>Photo is my hobby.</dd>
            <dt>
              <a href="https://blog.sus-happy.net/" target="_blank" rel="noopener noreferrer">
                Blog
              </a>
            </dt>
            <dd>Go to my blog.</dd>
          </dl>
          <p>
            <Typing
              string="Or check my Social media . . ."
              duration={40}
              callback={() => {
                setCount(3);
              }}
            ></Typing>
          </p>
        </>
      )}
      {count <= 2 ? (
        ""
      ) : (
        <>
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
        </>
      )}
    </>
  );
}
