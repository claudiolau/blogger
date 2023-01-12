import React from "react";
import type { AppProps } from "next/app";
import { Font } from "../assets";
import "../styles/globals.scss";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer";

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <>
      <div className={Font.className}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
