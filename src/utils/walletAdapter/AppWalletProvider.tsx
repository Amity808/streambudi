"use client";

import React, { useMemo } from "react";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { NETWORK } from "..";


// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");


export default function AppWalletProvider({
    children,
}: {
    children: React.ReactNode;
}) {


    const wallets = useMemo(
        () => [
            // manually add any legacy wallet adapters here
            // new UnsafeBurnerWalletAdapter(),

        ],
        [],
    );

    return (
        <ConnectionProvider endpoint={NETWORK}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}