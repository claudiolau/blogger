import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar/Navbar";
import React from "react";
import { IBM_Plex_Mono } from "@next/font/google";

const inter = IBM_Plex_Mono({
  weight: "100",
});

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <>
      <div className={inter.className}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
