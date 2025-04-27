import { walletinfo } from '../types/wallet';

// Expanded interface to match all provider properties
interface SolanaProvider {
  connect: () => Promise<{ publicKey: { toString: () => string } }>;
  disconnect: () => Promise<void>;
  // Specific wallet properties
  isPhantom?: boolean;
  isBackpack?: boolean;
}

export const getSolanaWallets = (): walletinfo[] => {
  return [
    {
      name: 'Phantom',
      type: 'solana',
      installed: !!window.solana?.isPhantom,
      icon: 'phantom'
    },
    {
      name: 'Solflare',
      type: 'solana',
      installed: !!window.solflare,
      icon: 'solflare'
    },
    {
      name: 'Backpack',
      type: 'solana',
      installed: !!window.backpack?.isBackpack,
      icon: 'backpack'
    }
  ];
};

export const connectSolanaWallet = async (provider: SolanaProvider): Promise<string> => {
  try {
    const response = await provider.connect();
    return response.publicKey.toString();
  } catch (error) {
    console.error('Solana wallet connection failed:', error);
    throw error;
  }
};

export const disconnectSolanaWallet = async (provider: SolanaProvider): Promise<void> => {
  try {
    await provider.disconnect();
  } catch (error) {
    console.error('Solana wallet disconnection failed:', error);
    throw error;
  }
};

export const getSolanaProvider = (walletName: string): SolanaProvider | null => {
  switch (walletName) {
    case 'Phantom':
      return window.solana as SolanaProvider;
    case 'Solflare':
      return window.solflare as SolanaProvider;
    case 'Backpack':
      return window.backpack as SolanaProvider;
    default:
      return null;
  }
};