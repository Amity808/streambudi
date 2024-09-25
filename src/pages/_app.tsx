import type { AppProps } from "next/app";
import "../globals.css";
import RootLayout from "@/components/layout";


import { StrictMode } from 'react';
import AppWalletProvider from "@/utils/walletAdapter/AppWalletProvider";

function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <AppWalletProvider>
        <Component {...pageProps} />
      </AppWalletProvider>
    </StrictMode>
  );
}

export default App;

