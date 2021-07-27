import "../styles/globals.css";
import type { AppProps } from "next/app";
import TagManager from "react-gtm-module";

import SideBar from "../components/SideBar";
import styles from "./_app.module.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-PGJZ2C",
    });
  }, []);

  return (
    <div>
      <SideBar />

      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
export default MyApp;
