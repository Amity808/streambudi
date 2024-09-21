import type { AppProps } from "next/app";
// import "../styles/globals.css";
import "../globals.css";
import RootLayout from "@/components/layout";


//   const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string; // get one at https://cloud.walletconnect.com/app


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default App;
