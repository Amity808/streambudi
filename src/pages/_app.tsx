import type { AppProps } from "next/app";
import "../globals.css";
import RootLayout from "@/components/layout";
import AOS from "aos";
import "aos/dist/aos.css"


import { StrictMode, useEffect } from 'react';
import AppWalletProvider from "@/utils/walletAdapter/AppWalletProvider";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <StrictMode>
      <AppWalletProvider>
        <Component {...pageProps} />
      </AppWalletProvider>
    </StrictMode>
  );
}

export default App;

