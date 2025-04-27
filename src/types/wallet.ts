export type ChainType = 'evm' | 'solana';

export interface walletinfo {
    name: string;
    type: ChainType;
    installed: boolean;
    icon: string;
}

export interface ConnectedWallet {
    address: string;
    chaintype: ChainType;
    walletname: string;
}
export interface storedwalletinfo {
    chaintype: ChainType;
    walletname: string;
}