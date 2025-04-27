import { walletinfo } from '../types/wallet';

// More specific types to replace 'any'
type AccountAddress = string;
type EVMRequestParams = string[] | Record<string, unknown> | undefined;
type EVMRequestResponse = string[] | Record<string, unknown>;

// Define interface for Ethereum provider with specific types
interface EVMProvider {
  request: (args: { method: string; params?: EVMRequestParams }) => Promise<EVMRequestResponse>;
  on: (event: string, callback: (params?: unknown) => void) => void;
  removeListener: (event: string, callback: (params?: unknown) => void) => void;
  isMetaMask?: boolean;
  isCoinbaseWallet?: boolean;
  isTrust?: boolean;
}

export const getEVMWallets = (): walletinfo[] => {
  return [
    {
      name: 'MetaMask',
      type: 'evm',
      installed: !!window.ethereum?.isMetaMask,
      icon: 'metamask'
    },
    {
      name: 'Coinbase Wallet',
      type: 'evm',
      installed: !!window.ethereum?.isCoinbaseWallet,
      icon: 'coinbase'
    },
    {
      name: 'Trust Wallet',
      type: 'evm',
      installed: !!window.ethereum?.isTrust,
      icon: 'trust'
    }
  ];
};

export const connectEVMWallet = async (provider: EVMProvider): Promise<AccountAddress> => {
  try {
    const accounts = await provider.request({ 
      method: 'eth_requestAccounts' 
    }) as string[];
    return accounts[0];
  } catch (error) {
    console.error('EVM wallet connection failed:', error);
    throw error;
  }
};

export const setupEVMAccountsListener = (
  onChange: (accounts: string[]) => void
) => {
  if (!window.ethereum) return () => {};
  
  window.ethereum.on('accountsChanged', onChange);
  return () => {
    window.ethereum?.removeListener('accountsChanged', onChange);
  };
};

export const getEVMProvider = (): EVMProvider | null => {
  return window.ethereum as EVMProvider || null;
};