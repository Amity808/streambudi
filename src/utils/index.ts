export const API_URL: string = "http://"

export const NETWORK = process.env.NEXT_PUBLIC_NETWORK == 'devnet' ? `https://devnet.helius-rpc.com/?api-key=${process.env.NEXT_PUBLIC_HELIUS}` : `https://mainnet.helius-rpc.com/?api-key=${process.env.NEXT_PUBLIC_HELIUS}`;