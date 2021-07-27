import Head from "next/head";

import Typing from "../components/Typing";

export default function About() {
  return (
    <>
      <Head>
        <title>About - SUSH-i BOX</title>
        <meta name="description" content="Do you wanna know me? This is my Biography and Skill sheet." />
        <meta property="og:title" content="About - SUSH-i BOX" />
        <meta property="og:description" content="Do you wanna know me? This is my Biography and Skill sheet." />
        <meta property="og:url" content="https://sus-happy.net/about/" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <h1>About</h1>

      <p>
        <Typing string="Do you wanna know me? This is my Biography and Skill sheet." duration={40}></Typing>
      </p>

      <h2>Profile</h2>
      <dl>
        <dt>Hometown</dt>
        <dd>Aichi, Japan</dd>
        <dt>Current location</dt>
        <dd>Makati, Philippines</dd>
        <dt>Working</dt>
        <dd>
          <ul>
            <li>2009 : Start working as Web developer in Nagoya, Aichi, Japan</li>
            <li>2015 : Assigned Philippines branch manager, and started working in Makati</li>
          </ul>
        </dd>
      </dl>
      <h2>Skill</h2>
      <h3>Front-end</h3>
      <dl>
        <dt>TypeScript/JavaScript</dt>
        <dd>
          <ul>
            <li>Vue.js (Nuxt.js)</li>
            <li>React (Next.js)</li>
            <li>jQuery</li>
          </ul>
        </dd>
      </dl>
      <h3>Back-end</h3>
      <dl>
        <dt>Node.js</dt>
        <dd>
          <ul>
            <li>express</li>
            <li>micro</li>
          </ul>
        </dd>
        <dt>PHP</dt>
        <dd>
          <ul>
            <li>Laravel</li>
            <li>Codeigniter</li>
            <li>CakePHP</li>
            <li>
              <a href="https://github.com/genies-inc/Fegg" target="_blank" rel="noopener noreferrer">
                Fegg
              </a>
            </li>
          </ul>
        </dd>
        <dt>PHP</dt>
        <dd>
          <ul>
            <li>Ruby on Rails</li>
          </ul>
        </dd>
      </dl>
      <h3>Servers</h3>
      <dl>
        <dt>Webservers</dt>
        <dd>
          <ul>
            <li>Apache</li>
            <li>Nginx</li>
          </ul>
        </dd>
        <dt>Databases</dt>
        <dd>
          <ul>
            <li>MySQL</li>
            <li>SQLite</li>
          </ul>
        </dd>
      </dl>
      <h3>Applications</h3>
      <ul>
        <li>Electron</li>
        <li>Flutter</li>
        <li>Ionic</li>
      </ul>
      <hr />
      <h2>Public Works</h2>
      <h3>GitHub</h3>
      <dl>
        <dt>PHP</dt>
        <dd>
          <ul>
            <li>
              <a href="https://github.com/sushat4692/LIP2_cms" target="_blank" rel="noopener noreferrer">
                LIP2_cms
              </a>
            </li>
            <li>
              <a href="https://github.com/sushat4692/LIP_Framework" target="_blank" rel="noopener noreferrer">
                LIP Framework
              </a>
            </li>
          </ul>
        </dd>
        <dt>JavaScript</dt>
        <dd>
          <ul>
            <li>
              <a href="https://github.com/sushat4692/twitch-support-tool" target="_blank" rel="noopener noreferrer">
                Twitch Support Tool
              </a>
            </li>
            <li>
              <a href="https://github.com/sushat4692/jquery.inputfollow.js" target="_blank" rel="noopener noreferrer">
                jquery.inputfollow.js
              </a>
            </li>
            <li>
              <a href="https://github.com/sushat4692/jquery.cats-paw.js" target="_blank" rel="noopener noreferrer">
                jquery.cats-paw.js
              </a>
            </li>
            <li>
              <a href="https://github.com/sushat4692/jquery.ripple.js" target="_blank" rel="noopener noreferrer">
                jquery.ripple.js
              </a>
            </li>
            <li>
              <a href="https://github.com/sushat4692/TickTack.js" target="_blank" rel="noopener noreferrer">
                TickTack.js
              </a>
            </li>
            <li>
              <a href="https://github.com/sushat4692/SPGMaps.js" target="_blank" rel="noopener noreferrer">
                SPGMaps.js
              </a>
            </li>
            <li>
              <a href="https://github.com/sushat4692/parallel-loader.js" target="_blank" rel="noopener noreferrer">
                parallel-loader.js
              </a>
            </li>
            <li>
              <a href="https://github.com/sushat4692/jquery.square.js" target="_blank" rel="noopener noreferrer">
                jquery.square.js
              </a>
            </li>
          </ul>
        </dd>
        <dt>Ruby</dt>
        <dd>
          <ul>
            <li>
              <a href="https://github.com/sushat4692/Drunk-List" target="_blank" rel="noopener noreferrer">
                Drunk-List
              </a>
            </li>
          </ul>
        </dd>
      </dl>
    </>
  );
}
